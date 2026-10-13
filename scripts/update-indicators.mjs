// 경제 지표 갱신 스크립트
// 한국은행 ECOS와 미국 연준 FRED API에서 최신 값을 받아 data/indicators.js를 다시 쓴다.
//
// 준비: scripts/.env.example을 scripts/.env로 복사하고 인증키를 넣는다.
// 실행: node scripts/update-indicators.mjs            (파일 갱신)
//       node scripts/update-indicators.mjs --dry-run  (받아 온 값만 출력, 파일은 그대로)
//
// 홈페이지는 이 스크립트가 만든 정적 파일만 읽으므로, API 키가 브라우저에 노출되지 않는다.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_FILE = join(ROOT, 'data', 'indicators.js');
const START_YEAR = 2015;

// ECOS 통계 코드. ECOS 사이트의 '개발 가이드 > 통계코드 검색'에서 확인할 수 있다.
const ECOS = {
  baseRate: { stat: '722Y001', cycle: 'M', item: '0101000' }, // 한국은행 기준금리 (월)
  usdkrw: { stat: '731Y001', cycle: 'D', item: '0000001' },   // 원/미국달러 매매기준율 (일)
  cpi: { stat: '901Y009', cycle: 'M', item: '0' }             // 소비자물가지수 총지수 (월)
};
// FRED 시리즈: 연방기금금리 목표 범위 상단 (일)
const FRED_SERIES = 'DFEDTARU';

// 지표 설명. 화면에 보이는 이름·단위·기준은 여기서 바꾼다.
const META = {
  baseRate: { name: '한국은행 기준금리', short: '한국', unit: '%', diffUnit: '%p', decimals: 2, basis: '연말', source: '한국은행' },
  fedRate: { name: '미국 정책금리', short: '미국', unit: '%', diffUnit: '%p', decimals: 2, basis: '연말, 범위 상단', source: '미 연준' },
  usdkrw: { name: '원/달러 환율', unit: '원', diffUnit: '원', decimals: 0, basis: '연평균', source: '한국은행' },
  cpi: { name: '소비자물가 상승률', unit: '%', diffUnit: '%p', decimals: 1, basis: '연간, 전년 대비', source: '통계청' }
};

// ---------- 설정 읽기 ----------
function loadKeys() {
  const keys = { ECOS_API_KEY: process.env.ECOS_API_KEY, FRED_API_KEY: process.env.FRED_API_KEY };
  const envFile = join(ROOT, 'scripts', '.env');
  if (existsSync(envFile)) {
    for (const line of readFileSync(envFile, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*?)\s*$/);
      if (m && !m[1].startsWith('#') && m[2] && !keys[m[1]]) keys[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
  const missing = Object.keys(keys).filter(k => !keys[k]);
  if (missing.length) {
    throw new Error(`인증키가 없습니다: ${missing.join(', ')}\n` +
      'scripts/.env.example을 scripts/.env로 복사한 뒤 키를 넣어 주세요.');
  }
  return keys;
}

// ---------- API 호출 ----------
async function getJson(url, label) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${label}: HTTP ${res.status}`);
  return res.json();
}

// ECOS StatisticSearch. 한 번에 받을 수 있는 건수에 제한이 있어 1,000건씩 나눠 받는다.
export async function fetchEcos(key, { stat, cycle, item }, label) {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const from = cycle === 'D' ? `${START_YEAR - 1}0101` : cycle === 'M' ? `${START_YEAR - 1}01` : `${START_YEAR - 1}`;
  const to = cycle === 'D' ? `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`
    : cycle === 'M' ? `${now.getFullYear()}${pad(now.getMonth() + 1)}` : `${now.getFullYear()}`;
  const rows = [];
  for (let start = 1; ; start += 1000) {
    const url = `https://ecos.bok.or.kr/api/StatisticSearch/${encodeURIComponent(key)}/json/kr/${start}/${start + 999}/${stat}/${cycle}/${from}/${to}/${item}`;
    const json = await getJson(url, `ECOS ${label}`);
    if (json.RESULT) throw new Error(`ECOS ${label}: ${json.RESULT.CODE} ${json.RESULT.MESSAGE}`);
    const body = json.StatisticSearch;
    if (!body || !Array.isArray(body.row)) throw new Error(`ECOS ${label}: 예상하지 못한 응답 형식`);
    rows.push(...body.row);
    if (rows.length >= body.list_total_count || body.row.length === 0) break;
  }
  return rows
    .map(r => ({ time: r.TIME, value: Number(r.DATA_VALUE) }))
    .filter(r => r.time && Number.isFinite(r.value));
}

export async function fetchFred(key) {
  const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${FRED_SERIES}` +
    `&api_key=${encodeURIComponent(key)}&file_type=json&observation_start=${START_YEAR}-01-01`;
  const json = await getJson(url, 'FRED');
  if (json.error_message) throw new Error(`FRED: ${json.error_message}`);
  if (!Array.isArray(json.observations)) throw new Error('FRED: 예상하지 못한 응답 형식');
  // 결측값은 '.'으로 온다.
  return json.observations
    .map(o => ({ time: o.date.replace(/-/g, ''), value: Number(o.value) }))
    .filter(o => Number.isFinite(o.value));
}

// ---------- 연 단위로 정리 ----------
// rows: [{ time: 'YYYYMM' 또는 'YYYYMMDD', value }]
// 올해처럼 아직 끝나지 않은 해는 라벨에 '*'를 붙이고, 몇 월까지의 값인지 note로 남긴다.
const yearOf = t => t.slice(0, 4);
const monthOf = t => Number(t.slice(4, 6));

function groupByYear(rows) {
  const map = new Map();
  for (const r of rows.slice().sort((a, b) => a.time.localeCompare(b.time))) {
    if (!map.has(yearOf(r.time))) map.set(yearOf(r.time), []);
    map.get(yearOf(r.time)).push(r);
  }
  return map;
}

function label(year, rowsOfYear, now) {
  const last = rowsOfYear[rowsOfYear.length - 1];
  const complete = Number(year) < now.getFullYear() || monthOf(last.time) === 12;
  return { label: complete ? year : `${year}*`, partialMonth: complete ? null : monthOf(last.time) };
}

// 연말 값: 그해 마지막 관측값
export function yearEnd(rows, now = new Date()) {
  const out = [];
  let partial = null;
  for (const [year, list] of groupByYear(rows)) {
    if (Number(year) < START_YEAR) continue;
    const l = label(year, list, now);
    if (l.partialMonth) partial = l.partialMonth;
    out.push([l.label, list[list.length - 1].value]);
  }
  return { data: out, partialMonth: partial };
}

// 연평균
export function yearAverage(rows, now = new Date()) {
  const out = [];
  let partial = null;
  for (const [year, list] of groupByYear(rows)) {
    if (Number(year) < START_YEAR) continue;
    const l = label(year, list, now);
    if (l.partialMonth) partial = l.partialMonth;
    out.push([l.label, list.reduce((s, r) => s + r.value, 0) / list.length]);
  }
  return { data: out, partialMonth: partial };
}

// 연간 물가 상승률: 연평균 지수의 전년 대비 증감률.
// 올해는 같은 달까지(1월~최근 달)의 평균을 지난해 같은 기간과 비교한다.
export function yearOverYear(rows, now = new Date()) {
  const byYear = groupByYear(rows);
  const out = [];
  let partial = null;
  for (const [year, list] of byYear) {
    if (Number(year) < START_YEAR) continue;
    const prev = byYear.get(String(Number(year) - 1));
    if (!prev) continue;
    const months = new Set(list.map(r => monthOf(r.time)));
    const prevSame = prev.filter(r => months.has(monthOf(r.time)));
    if (prevSame.length !== list.length) continue; // 비교할 달이 안 맞으면 건너뜀
    const avg = a => a.reduce((s, r) => s + r.value, 0) / a.length;
    const l = label(year, list, now);
    if (l.partialMonth) partial = l.partialMonth;
    out.push([l.label, (avg(list) / avg(prevSame) - 1) * 100]);
  }
  return { data: out, partialMonth: partial };
}

const round = (v, d) => Number(v.toFixed(d));

// ---------- 파일 쓰기 ----------
export function render(series, updatedAt) {
  const lines = [];
  lines.push('// 경제 지표 시계열. scripts/update-indicators.mjs가 자동으로 만든 파일입니다.');
  lines.push(`// 마지막 갱신: ${updatedAt} (한국은행 ECOS, 미국 연준 FRED)`);
  lines.push("// 라벨 끝의 '*'는 아직 끝나지 않은 해의 값이며, note에 몇 월까지의 값인지 적혀 있습니다.");
  lines.push('// 직접 고쳐도 되지만, 스크립트를 다시 실행하면 덮어씁니다.');
  lines.push('window.INDICATORS = {');
  const keys = Object.keys(series);
  keys.forEach((k, i) => {
    const m = META[k];
    const s = series[k];
    const props = [
      `    name: ${JSON.stringify(m.name)},`,
      m.short ? `    short: ${JSON.stringify(m.short)},` : null,
      `    unit: ${JSON.stringify(m.unit)},`,
      `    diffUnit: ${JSON.stringify(m.diffUnit)},`,
      `    decimals: ${m.decimals},`,
      `    basis: ${JSON.stringify(m.basis)},`,
      `    source: ${JSON.stringify(m.source)},`,
      s.note ? `    note: ${JSON.stringify(s.note)},` : null,
      `    updated: ${JSON.stringify(updatedAt)},`,
      '    data: ['
    ].filter(Boolean);
    lines.push(`  ${k}: {`);
    lines.push(...props);
    const rows = s.data.map(([y, v]) => `[${JSON.stringify(y)}, ${v.toFixed(m.decimals)}]`);
    for (let j = 0; j < rows.length; j += 5) {
      lines.push(`      ${rows.slice(j, j + 5).join(', ')}${j + 5 < rows.length ? ',' : ''}`);
    }
    lines.push('    ]');
    lines.push(`  }${i < keys.length - 1 ? ',' : ''}`);
  });
  lines.push('};');
  return lines.join('\n') + '\n';
}

function finish(key, result, partialNote) {
  const d = META[key].decimals;
  const data = result.data.map(([y, v]) => [y, round(v, d)]);
  if (!data.length) throw new Error(`${META[key].name}: 받아 온 데이터가 없습니다.`);
  const note = result.partialMonth ? `${data[data.length - 1][0].replace('*', '')}년은 ${result.partialMonth}월까지${partialNote}` : null;
  return { data, note };
}

export async function main(argv = process.argv.slice(2)) {
  const dryRun = argv.includes('--dry-run');
  const keys = loadKeys();

  console.log('한국은행 ECOS에서 받는 중...');
  const [base, fx, cpi] = await Promise.all([
    fetchEcos(keys.ECOS_API_KEY, ECOS.baseRate, '기준금리'),
    fetchEcos(keys.ECOS_API_KEY, ECOS.usdkrw, '원/달러 환율'),
    fetchEcos(keys.ECOS_API_KEY, ECOS.cpi, '소비자물가지수')
  ]);
  console.log('미국 연준 FRED에서 받는 중...');
  const fed = await fetchFred(keys.FRED_API_KEY);

  const series = {
    baseRate: finish('baseRate', yearEnd(base), '의 최근 값'),
    fedRate: finish('fedRate', yearEnd(fed), '의 최근 값'),
    usdkrw: finish('usdkrw', yearAverage(fx), ' 평균'),
    cpi: finish('cpi', yearOverYear(cpi), ', 지난해 같은 기간 대비')
  };

  for (const [k, s] of Object.entries(series)) {
    const last = s.data[s.data.length - 1];
    console.log(`  ${META[k].name}: ${s.data.length}개 연도, 최근 ${last[0]} = ${last[1]}${META[k].unit}${s.note ? ` (${s.note})` : ''}`);
  }

  const updatedAt = new Date().toISOString().slice(0, 10);
  const text = render(series, updatedAt);
  if (dryRun) {
    console.log('\n--dry-run: 파일을 쓰지 않았습니다. 생성될 내용:\n');
    console.log(text);
    return;
  }
  writeFileSync(OUT_FILE, text, 'utf8');
  console.log(`\n저장했습니다: ${OUT_FILE}`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(err => {
    console.error(`\n갱신하지 못했습니다. 기존 data/indicators.js는 그대로입니다.\n${err.message}`);
    process.exit(1);
  });
}

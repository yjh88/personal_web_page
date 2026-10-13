// 어문 규범 학습: NORMS(조항) 데이터로 장별 글을 만들고, 조항 카드 화면(#/rules)을 그린다.
//
// 조항 데이터 형식 (data/norms-*.js)
//   { id, part: 'hm'|'sp'|'pr', unit, sec, no, title,
//     text: 조항 원문(줄바꿈 유지), points: [핵심 풀이], ex: [[바른, 틀린], ...], eg: [예, ...], more: 더 알아보기 }
// 장별 글 형식 (NORM_UNITS)
//   { id, part, title, summary, takeaway, intro(HTML, 선택) }
const Norms = (() => {
  const PARTS = {
    hm: { name: '한글 맞춤법', short: '맞춤법' },
    sp: { name: '표준어 사정 원칙', short: '표준어' },
    pr: { name: '표준 발음법', short: '발음' }
  };
  const SOURCE = '출처: 국립국어원, 「‘한글 맞춤법’, ‘표준어 규정’ 해설」(2018). 조항 원문은 2017년 개정 규정(문화체육관광부 고시 제2017-12호, 제2017-13호)을 따랐고, 풀이는 해설을 요약한 것이다.';
  const UPDATED = '2026-10-13';

  // render.js보다 먼저 실행되므로 자체 이스케이프 함수를 쓴다.
  const esc = s => String(s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const rulesOf = unitId => NORMS.filter(r => r.unit === unitId);
  const unitOf = id => NORM_UNITS.find(u => u.id === id);
  // no가 숫자가 아니면(예: '붙임') 조항 번호 대신 제목을 쓴다.
  const numbered = r => typeof r.no === 'number';
  const label = r => (numbered(r) ? `제${r.no}항` : r.no);
  const ruleHeading = r => (numbered(r) ? `제${r.no}항 ${r.title}` : `[${r.no}] ${r.title}`);

  // ---------- 조항 하나의 본문 HTML (글과 카드가 함께 쓴다) ----------
  function examplesHtml(r) {
    let html = '';
    if (r.ex && r.ex.length) {
      html += `<table class="rule-ex">
        <tr><th>바른 표기·표준어</th><th>틀린 표기·비표준어</th></tr>
        ${r.ex.map(([o, x]) => `<tr><td><span class="o">${esc(o)}</span></td><td><span class="x">${esc(x)}</span></td></tr>`).join('')}
      </table>`;
    }
    if (r.eg && r.eg.length) {
      html += `<p class="rule-eg">${r.eg.map(e => `<span>${esc(e)}</span>`).join('')}</p>`;
    }
    return html;
  }

  function detailHtml(r) {
    return `
      ${r.points && r.points.length ? `<ul class="rule-points">${r.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}
      ${examplesHtml(r)}
      ${r.more ? `<div class="callout more"><h4>더 알아보기</h4><p>${esc(r.more)}</p></div>` : ''}`;
  }

  // ---------- 장별 글 만들기 ----------
  function buildBody(unit) {
    const rules = rulesOf(unit.id);
    let html = `<p class="rule-source">${esc(SOURCE)}</p>`;
    if (unit.intro) html += unit.intro;
    let sec = null;
    for (const r of rules) {
      if (r.sec && r.sec !== sec) {
        sec = r.sec;
        html += `<h2>${esc(sec)}</h2>`;
      }
      html += `
        <section class="rule">
          <h3><span class="rule-no">${esc(label(r))}</span> ${esc(r.title)}</h3>
          <blockquote class="rule-text">${esc(r.text)}</blockquote>
          ${detailHtml(r)}
        </section>`;
    }
    html += `
      <div class="card quiz-link">
        <p>이 글의 조항 ${rules.length}개를 한 장씩 넘기며 외워 보세요.</p>
        <a class="btn primary" href="#/rules?unit=${unit.id}">조항 카드로 외우기 →</a>
      </div>`;
    return html;
  }

  function buildArticles() {
    const built = NORM_UNITS.map(u => {
      const rules = rulesOf(u.id);
      const secs = [...new Set(rules.map(r => r.sec).filter(Boolean).map(s => s.replace(/^제\d+[장절]\s*/, '')))];
      return {
        id: u.id,
        section: 'korean',
        category: 'spelling',
        group: '어문 규범',
        title: u.title,
        summary: u.summary,
        tags: [PARTS[u.part].name, ...secs].slice(0, 6),
        updated: UPDATED,
        takeaway: u.takeaway,
        body: buildBody(u)
      };
    });
    // 기존 맞춤법 글(실전 정리)보다 앞에 둔다.
    const at = ARTICLES.findIndex(a => a.section === 'korean' && a.category === 'spelling');
    ARTICLES.splice(at < 0 ? ARTICLES.length : at, 0, ...built);
  }

  // ---------- 조항 카드 화면 ----------
  let reveal = false;
  let lastKey = '';

  function filtered(q) {
    return NORMS.filter(r =>
      (!q.part || r.part === q.part) &&
      (!q.unit || r.unit === q.unit) &&
      (!q.unknown || !Store.isKnown(r.id)));
  }

  function hashFor(q) {
    const p = new URLSearchParams();
    if (q.part) p.set('part', q.part);
    if (q.unit) p.set('unit', q.unit);
    if (q.unknown) p.set('unknown', '1');
    if (q.i) p.set('i', q.i);
    const s = p.toString();
    return '#/rules' + (s ? '?' + s : '');
  }

  // 같은 화면 안의 이동은 방문 기록을 남기지 않는다.
  const go = q => location.replace(hashFor(q));

  function cardsPage(params) {
    const q = {
      part: PARTS[params.get('part')] ? params.get('part') : '',
      unit: unitOf(params.get('unit')) ? params.get('unit') : '',
      unknown: params.get('unknown') === '1',
      i: Math.max(0, parseInt(params.get('i'), 10) || 0)
    };
    if (q.unit) q.part = unitOf(q.unit).part;
    const list = filtered(q);
    if (q.i >= list.length) q.i = Math.max(0, list.length - 1);
    const r = list[q.i];

    // 다른 조항으로 넘어가면 풀이를 다시 접는다.
    const key = r ? r.id : '';
    if (key !== lastKey) reveal = false;
    lastKey = key;

    const known = NORMS.filter(x => Store.isKnown(x.id)).length;
    const units = NORM_UNITS.filter(u => !q.part || u.part === q.part);
    const chip = (part, text) =>
      `<a class="chip ${q.part === part && !(!part && q.unit) ? 'on' : ''}" href="${hashFor({ part, unknown: q.unknown })}">${esc(text)}</a>`;

    document.getElementById('app').innerHTML = `
      <div class="rules-wrap" data-section="korean">
        <nav class="crumbs"><a href="#/">홈</a> › <a href="#/korean">국어</a> › <a href="#/korean/spelling">맞춤법·띄어쓰기</a></nav>
        <div class="page-head">
          <div class="eyebrow">어문 규범 · 외운 조항 ${known} / ${NORMS.length}</div>
          <h1>조항 카드</h1>
          <p>원문을 먼저 읽고 뜻을 떠올려 본 뒤 ‘풀이 보기’로 확인하세요. ← → 키로 넘기고, 스페이스 바로 풀이를 펼칩니다.</p>
        </div>

        <div class="rule-filters">
          <div class="chips">
            ${chip('', '전체')}${Object.keys(PARTS).map(p => chip(p, PARTS[p].name)).join('')}
          </div>
          <div class="filter-row">
            <select id="unitSelect" aria-label="장 선택">
              <option value="">${q.part ? PARTS[q.part].name + ' 전체' : '모든 장'}</option>
              ${units.map(u => `<option value="${u.id}" ${u.id === q.unit ? 'selected' : ''}>${esc(u.title)}</option>`).join('')}
            </select>
            <label class="toggle"><input type="checkbox" id="unknownOnly" ${q.unknown ? 'checked' : ''}> 외우지 못한 조항만</label>
          </div>
        </div>

        ${r ? `
          <article class="rule-card">
            <div class="quiz-top">
              <span>${q.i + 1} / ${list.length}</span>
              <div class="progress"><span style="width:${((q.i + 1) / list.length) * 100}%"></span></div>
              <span>${esc(PARTS[r.part].short)}</span>
            </div>
            <div class="rule-path">${esc(PARTS[r.part].name)}${r.sec ? ' · ' + esc(r.sec) : ''}</div>
            <h2>${esc(ruleHeading(r))}</h2>
            <blockquote class="rule-text">${esc(r.text)}</blockquote>
            <div id="ruleDetail" ${reveal ? '' : 'hidden'}>${detailHtml(r)}
              <p class="rule-link"><a href="#/korean/spelling/${r.unit}">이 조항이 있는 글: ${esc(unitOf(r.unit).title)} →</a></p>
            </div>
            <div class="rule-actions">
              <button type="button" class="btn" id="prevBtn" ${q.i === 0 ? 'disabled' : ''}>← 이전</button>
              <button type="button" class="btn" id="revealBtn">${reveal ? '풀이 접기' : '풀이 보기'}</button>
              <button type="button" class="btn ${Store.isKnown(r.id) ? 'on' : ''}" id="knownBtn">${Store.isKnown(r.id) ? '✓ 외웠어요' : '외웠어요'}</button>
              <button type="button" class="btn primary" id="nextBtn" ${q.i >= list.length - 1 ? 'disabled' : ''}>다음 →</button>
            </div>
          </article>` : `
          <div class="empty">${q.unknown ? '이 범위의 조항을 모두 외웠습니다! 🎉<br>‘외우지 못한 조항만’을 끄면 전체를 다시 볼 수 있어요.' : '조항이 없습니다.'}</div>`}
      </div>`;

    document.getElementById('unitSelect').addEventListener('change', e =>
      go({ part: q.part, unit: e.target.value, unknown: q.unknown }));
    document.getElementById('unknownOnly').addEventListener('change', e =>
      go({ part: q.part, unit: q.unit, unknown: e.target.checked }));
    if (!r) { keys = null; return; }

    const prev = () => { if (q.i > 0) go(Object.assign({}, q, { i: q.i - 1 })); };
    const next = () => { if (q.i < list.length - 1) go(Object.assign({}, q, { i: q.i + 1 })); };
    const toggleReveal = () => {
      reveal = !reveal;
      document.getElementById('ruleDetail').hidden = !reveal;
      document.getElementById('revealBtn').textContent = reveal ? '풀이 접기' : '풀이 보기';
    };
    document.getElementById('prevBtn').addEventListener('click', prev);
    document.getElementById('nextBtn').addEventListener('click', next);
    document.getElementById('revealBtn').addEventListener('click', toggleReveal);
    document.getElementById('knownBtn').addEventListener('click', () => {
      Store.toggleKnown(r.id);
      // '외우지 못한 것만' 보기에서는 목록에서 빠지므로 같은 자리(다음 조항)를 다시 그린다.
      if (q.unknown) go(q);
      else cardsPage(params);
    });
    keys = { prev, next, toggleReveal };
  }

  // 키보드: 카드 화면일 때만 동작
  let keys = null;
  document.addEventListener('keydown', e => {
    if (!keys || !location.hash.startsWith('#/rules')) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) return;
    if (e.key === 'ArrowLeft') keys.prev();
    else if (e.key === 'ArrowRight') keys.next();
    else if (e.key === ' ') { e.preventDefault(); keys.toggleReveal(); }
  });

  // 카테고리 페이지 상단 배너
  function banner() {
    const known = NORMS.filter(r => Store.isKnown(r.id)).length;
    const count = p => NORMS.filter(r => r.part === p && numbered(r)).length;
    return `
      <div class="card rule-banner" data-section="korean">
        <div>
          <div class="eyebrow">어문 규범 공부</div>
          <h3>한글 맞춤법 ${count('hm')}개 · 표준어 사정 원칙 ${count('sp')}개 · 표준 발음법 ${count('pr')}개 조항</h3>
          <p>국립국어원 해설을 바탕으로 조항 원문과 핵심 풀이, 예를 정리했습니다. 장별 글로 읽고, 조항 카드로 외우세요.</p>
          <div class="progress"><span style="width:${NORMS.length ? (known / NORMS.length) * 100 : 0}%"></span></div>
          <small>외운 조항 ${known} / ${NORMS.length}</small>
        </div>
        <div class="rule-banner-actions">
          <a class="btn primary" href="#/rules">조항 카드로 외우기</a>
          <a class="btn" href="#/rules?unknown=1">외우지 못한 조항만</a>
        </div>
      </div>`;
  }

  buildArticles();

  return { cardsPage, banner, PARTS };
})();

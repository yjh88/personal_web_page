// 제목·태그·요약·본문을 대상으로 하는 간단한 전문 검색.
const Search = (() => {
  let index = null;

  function build() {
    // 태그 자리를 공백으로 바꿔 표 칸·목록 항목의 글자가 붙지 않게 하고, 엔티티는 textarea로 풀어 준다.
    const decoder = document.createElement('textarea');
    index = ARTICLES.map(a => {
      decoder.innerHTML = a.body.replace(/<[^>]+>/g, ' ');
      const text = decoder.value.replace(/\s+/g, ' ').trim();
      return {
        article: a,
        title: a.title.toLowerCase(),
        tags: a.tags.join(' ').toLowerCase(),
        summary: (a.summary + ' ' + (a.takeaway || '')).toLowerCase(),
        text,
        lower: text.toLowerCase()
      };
    });
  }

  function terms(query) {
    return query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  }

  // 모든 검색어가 어딘가에 들어 있는 글만 결과로 낸다. 제목 > 태그 > 요약 > 본문 순으로 가중치.
  function run(query) {
    if (!index) build();
    const ts = terms(query);
    if (!ts.length) return [];
    const results = [];
    for (const e of index) {
      let score = 0;
      let ok = true;
      for (const t of ts) {
        const s = (e.title.includes(t) ? 10 : 0) + (e.tags.includes(t) ? 6 : 0) +
          (e.summary.includes(t) ? 3 : 0) + (e.lower.includes(t) ? 1 : 0);
        if (!s) { ok = false; break; }
        score += s;
      }
      if (ok) results.push({ article: e.article, score, snippet: snippet(e, ts) });
    }
    return results.sort((a, b) => b.score - a.score);
  }

  function snippet(e, ts) {
    let pos = -1;
    for (const t of ts) {
      pos = e.lower.indexOf(t);
      if (pos >= 0) break;
    }
    if (pos < 0) return e.article.summary;
    const start = Math.max(0, pos - 50);
    const end = Math.min(e.text.length, start + 150);
    return (start > 0 ? '…' : '') + e.text.slice(start, end) + (end < e.text.length ? '…' : '');
  }

  // 원문을 검색어 기준으로 나눈 뒤 조각마다 이스케이프해서 <mark>로 감싼다.
  function highlight(text, query) {
    const ts = terms(query).sort((a, b) => b.length - a.length);
    if (!ts.length) return View.esc(text);
    const re = new RegExp('(' + ts.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'gi');
    return text.split(re).map((part, i) => (i % 2 ? '<mark>' + View.esc(part) + '</mark>' : View.esc(part))).join('');
  }

  return { run, highlight };
})();

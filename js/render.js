// 화면 렌더링: 대시보드, 섹션·카테고리 목록, 글 상세, 검색 결과, 북마크, 사이드바.
const View = (() => {
  const app = () => document.getElementById('app');

  // ---------- 헬퍼 ----------
  const esc = s => String(s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const section = id => SECTIONS.find(s => s.id === id);
  const category = (sid, cid) => {
    const s = section(sid);
    return s ? s.categories.find(c => c.id === cid) : undefined;
  };
  const articlesIn = (sid, cid) => ARTICLES.filter(a => a.section === sid && (!cid || a.category === cid));
  const findArticle = id => ARTICLES.find(a => a.id === id);
  const url = a => `#/${a.section}/${a.category}/${a.id}`;

  // 목차 순서(섹션 → 카테고리 → 글)대로 정렬된 전체 글
  const ordered = () => SECTIONS.flatMap(s =>
    s.categories.flatMap(c => articlesIn(s.id, c.id)));

  const readCount = list => list.filter(a => Store.isRead(a.id)).length;
  const pct = (n, total) => (total ? Math.round((n / total) * 100) : 0);

  function articleCard(a, opts = {}) {
    const cat = category(a.section, a.category);
    const badges = (Store.isRead(a.id) ? '<span class="badge read">읽음</span>' : '') +
      (Store.isBookmarked(a.id) ? '<span class="badge bm">★ 북마크</span>' : '');
    const summary = opts.snippet !== undefined ? opts.snippet : esc(a.summary);
    return `
      <a class="card ${opts.cls || ''}" data-section="${a.section}" href="${url(a)}">
        <div class="card-top"><span class="cat-label">${esc(section(a.section).name)} · ${esc(cat.name)}</span>${badges}</div>
        <h3>${opts.title || esc(a.title)}</h3>
        <p ${opts.snippet !== undefined ? 'class="snippet"' : ''}>${summary}</p>
        <div class="tags">${a.tags.slice(0, 5).map(t => `<span class="tag">#${esc(t)}</span>`).join('')}</div>
      </a>`;
  }

  function categoryCard(s, c) {
    const list = articlesIn(s.id, c.id);
    const read = readCount(list);
    return `
      <a class="card cat-card" data-section="${s.id}" href="#/${s.id}/${c.id}">
        <div class="card-top"><span class="cat-label">${esc(s.name)}</span></div>
        <h3>${esc(c.name)}</h3>
        <p>${esc(c.desc)}</p>
        <div class="cat-count"><span>글 ${list.length}편</span><span>읽음 ${read}/${list.length}</span></div>
        <div class="progress"><span style="width:${pct(read, list.length)}%"></span></div>
      </a>`;
  }

  function indicatorTile(key) {
    const ind = INDICATORS[key];
    const d = ind.data;
    const last = d[d.length - 1];
    const prev = d[d.length - 2];
    const diff = +(last[1] - prev[1]).toFixed(ind.decimals);
    const dir = diff > 0 ? 'up' : diff < 0 ? 'down' : 'flat';
    const arrow = diff > 0 ? '▲' : diff < 0 ? '▼' : '–';
    const diffText = Math.abs(diff).toLocaleString('ko-KR', { minimumFractionDigits: ind.decimals, maximumFractionDigits: ind.decimals }) + ind.diffUnit;
    return `
      <a class="card tile" data-section="economy" href="#/economy/indicators/reading-indicators">
        <div class="tile-name">${esc(ind.name)}</div>
        <div class="tile-value">${Chart.format(last[1], ind)}</div>
        <div class="tile-change ${dir}">${arrow} ${diffText} <span>${esc(prev[0])}년 대비</span></div>
        <div class="chart chart-mini" data-indicator="${key}"></div>
        <div class="tile-foot">${last[0].endsWith('*') && ind.note ? esc(ind.note) : `${esc(last[0])}년 ${esc(ind.basis)}`} · ${esc(ind.source)}</div>
      </a>`;
  }

  function wrapTables(root) {
    root.querySelectorAll('table').forEach(t => {
      if (t.parentElement.classList.contains('table-wrap')) return;
      const w = document.createElement('div');
      w.className = 'table-wrap';
      t.parentNode.insertBefore(w, t);
      w.appendChild(t);
    });
  }

  // ---------- 사이드바 ----------
  function sidebar(current) {
    const el = document.getElementById('sidebar');
    el.innerHTML = `<nav class="tree">${SECTIONS.map(s => `
      <div class="tree-section" data-section="${s.id}">
        <a class="tree-title" href="#/${s.id}">${esc(s.name)}</a>
        ${s.categories.map(c => `
          <div class="tree-cat">
            <a class="tree-cat-title ${current.section === s.id && current.category === c.id && !current.id ? 'active' : ''}" href="#/${s.id}/${c.id}">${esc(c.name)}</a>
            <ul>${articlesIn(s.id, c.id).map(a => `
              <li><a href="${url(a)}" class="${a.id === current.id ? 'active' : ''}">
                <span>${esc(a.title)}</span>${Store.isRead(a.id) ? '<span class="check" aria-label="읽음">✓</span>' : ''}
              </a></li>`).join('')}
            </ul>
          </div>`).join('')}
      </div>`).join('')}
    </nav>`;
  }

  // ---------- 대시보드 ----------
  function dashboard() {
    const all = ARTICLES;
    const read = readCount(all);
    const recent = all.slice().sort((a, b) => b.updated.localeCompare(a.updated)).slice(0, 6);

    app().innerHTML = `
      <section class="hero">
        <div>
          <div class="eyebrow">나의 학습 노트</div>
          <h1>경제와 국어, 넓게 보고 깊게 정리하기</h1>
          <p>개념 → 예시 → 헷갈리는 포인트 순서로 정리한 노트입니다. 읽고, 표시하고, 퀴즈로 복습하세요.</p>
        </div>
        <div class="hero-stats">
          <div><div class="stat-num">${read}<small> / ${all.length}</small></div><div class="stat-label">읽은 글</div></div>
          <div><div class="stat-num">${Store.bookmarkIds().length}</div><div class="stat-label">북마크</div></div>
          <div><div class="stat-num">${pct(read, all.length)}<small>%</small></div><div class="stat-label">진행률</div></div>
        </div>
        <div class="progress" role="progressbar" aria-valuenow="${pct(read, all.length)}" aria-valuemin="0" aria-valuemax="100"><span style="width:${pct(read, all.length)}%"></span></div>
      </section>

      <div class="section-title"><h2>핵심 경제 지표</h2><a href="#/economy/indicators/reading-indicators">지표 해설 보기 →</a></div>
      <div class="grid tiles">${Object.keys(INDICATORS).map(indicatorTile).join('')}</div>

      ${SECTIONS.map(s => `
        <div class="area-head" data-section="${s.id}">
          <h2>${esc(s.name)}</h2><p>${esc(s.desc)}</p>
          <a href="#/${s.id}">전체 보기 →</a>
        </div>
        <div class="grid">${s.categories.map(c => categoryCard(s, c)).join('')}</div>`).join('')}

      <div class="section-title"><h2>최근 수정한 글</h2></div>
      <ul class="recent">${recent.map(a => `
        <li data-section="${a.section}"><a href="${url(a)}">
          <span class="cat-label">${esc(category(a.section, a.category).name)}</span>
          <span class="recent-title">${esc(a.title)}</span>
          <span class="recent-date">${esc(a.updated)}</span>
        </a></li>`).join('')}
      </ul>`;
    Chart.mountAll(app());
  }

  // ---------- 섹션 ----------
  function sectionPage(s) {
    const list = articlesIn(s.id);
    app().innerHTML = `
      <div class="page-head" data-section="${s.id}">
        <div class="eyebrow">${esc(s.name)} · 글 ${list.length}편 · 읽음 ${readCount(list)}편</div>
        <h1>${esc(s.name)}</h1>
        <p>${esc(s.desc)}</p>
      </div>
      ${s.categories.map(c => `
        <div class="section-title" data-section="${s.id}">
          <h2>${esc(c.name)}</h2><a href="#/${s.id}/${c.id}">${esc(c.desc)} →</a>
        </div>
        <div class="grid">${articlesIn(s.id, c.id).map(a => articleCard(a)).join('')}</div>`).join('')}`;
  }

  // ---------- 카테고리 ----------
  // 글에 group이 있으면 묶어서 보여 준다. group이 없는 글은 '실전 정리'로 모은다.
  function groupedCards(list) {
    if (!list.some(a => a.group)) return `<div class="grid">${list.map(a => articleCard(a)).join('')}</div>`;
    const groups = [];
    for (const a of list) {
      const name = a.group || '실전 정리';
      let g = groups.find(x => x.name === name);
      if (!g) groups.push(g = { name, items: [] });
      g.items.push(a);
    }
    return groups.map(g => `
      <div class="section-title"><h2>${esc(g.name)}</h2><span class="muted">${g.items.length}편 · 읽음 ${readCount(g.items)}편</span></div>
      <div class="grid">${g.items.map(a => articleCard(a)).join('')}</div>`).join('');
  }

  function categoryPage(s, c) {
    const list = articlesIn(s.id, c.id);
    const quizCount = QUIZZES.filter(q => q.cat === `${s.id}/${c.id}`).length;
    const hasNorms = list.some(a => a.group === '어문 규범');
    app().innerHTML = `
      <nav class="crumbs"><a href="#/">홈</a> › <a href="#/${s.id}">${esc(s.name)}</a></nav>
      <div class="page-head" data-section="${s.id}">
        <div class="eyebrow">${esc(s.name)} · 글 ${list.length}편 · 읽음 ${readCount(list)}편</div>
        <h1>${esc(c.name)}</h1>
        <p>${esc(c.desc)}</p>
      </div>
      ${hasNorms ? Norms.banner() : ''}
      ${groupedCards(list)}
      ${quizCount ? `
        <div class="section-title"><h2>복습 퀴즈</h2></div>
        <div class="card quiz-link" data-section="${s.id}">
          <p>${esc(c.name)} 퀴즈 ${quizCount}문항으로 배운 내용을 확인해 보세요.</p>
          <a class="btn primary" href="#/quiz/${s.id}/${c.id}">퀴즈 풀기</a>
        </div>` : ''}`;
  }

  // ---------- 글 상세 ----------
  function articlePage(a) {
    const s = section(a.section);
    const c = category(a.section, a.category);
    const list = ordered();
    const i = list.indexOf(a);
    const prev = list[i - 1];
    const next = list[i + 1];
    const quizCount = QUIZZES.filter(q => q.cat === `${a.section}/${a.category}`).length;

    app().innerHTML = `
      <article class="article" data-section="${a.section}">
        <nav class="crumbs"><a href="#/">홈</a> › <a href="#/${s.id}">${esc(s.name)}</a> › <a href="#/${s.id}/${c.id}">${esc(c.name)}</a></nav>
        <h1>${esc(a.title)}</h1>
        <div class="meta">
          <span>수정 ${esc(a.updated)}</span>
          <div class="tags">${a.tags.map(t => `<a class="tag" href="#/search?q=${encodeURIComponent(t)}">#${esc(t)}</a>`).join('')}</div>
        </div>
        <div class="actions">
          <button type="button" class="btn" id="readBtn"></button>
          <button type="button" class="btn" id="bmBtn"></button>
        </div>
        <section class="key-summary"><h4>핵심 요약</h4><p>${esc(a.summary)}</p></section>
        <div class="article-body">${a.body}</div>
        ${a.takeaway ? `<section class="takeaway"><h4>한 줄 정리</h4><p>${esc(a.takeaway)}</p></section>` : ''}
        <div class="article-footer">
          ${quizCount ? `
            <div class="card quiz-link">
              <p>${esc(c.name)} 퀴즈 ${quizCount}문항으로 복습하기</p>
              <a class="btn" href="#/quiz/${a.section}/${a.category}">퀴즈 풀기 →</a>
            </div>` : ''}
          <nav class="pager" aria-label="이전·다음 글">
            ${prev ? `<a class="card prev" data-section="${prev.section}" href="${url(prev)}"><small>← 이전 글</small><strong>${esc(prev.title)}</strong></a>` : ''}
            ${next ? `<a class="card next" data-section="${next.section}" href="${url(next)}"><small>다음 글 →</small><strong>${esc(next.title)}</strong></a>` : ''}
          </nav>
        </div>
      </article>`;

    const body = app().querySelector('.article-body');
    wrapTables(body);
    Chart.mountAll(body);

    const readBtn = document.getElementById('readBtn');
    const bmBtn = document.getElementById('bmBtn');
    const paint = () => {
      const read = Store.isRead(a.id);
      const bm = Store.isBookmarked(a.id);
      readBtn.textContent = read ? '✓ 읽음 완료됨' : '읽음 완료로 표시';
      readBtn.classList.toggle('on', read);
      bmBtn.textContent = bm ? '★ 북마크됨' : '☆ 북마크';
      bmBtn.classList.toggle('on', bm);
    };
    readBtn.addEventListener('click', () => {
      Store.toggleRead(a.id);
      paint();
      sidebar({ section: a.section, category: a.category, id: a.id });
    });
    bmBtn.addEventListener('click', () => { Store.toggleBookmark(a.id); paint(); });
    paint();
  }

  // ---------- 검색 ----------
  function searchPage(q) {
    const results = q ? Search.run(q) : [];
    app().innerHTML = `
      <div class="page-head">
        <div class="eyebrow">검색</div>
        <h1>${q ? `“${esc(q)}” 검색 결과` : '검색'}</h1>
        <p>${q ? `${results.length}건의 글을 찾았습니다.` : '상단 검색창에 키워드를 입력하세요. 제목·태그·요약·본문을 모두 찾습니다.'}</p>
      </div>
      ${q && !results.length ? `
        <div class="empty">일치하는 글이 없습니다.<br>다른 키워드(예: 환율, 맞춤법, 시점)로 다시 찾아보세요.</div>` : ''}
      <div class="grid">${results.map(r => articleCard(r.article, {
        cls: 'result',
        title: Search.highlight(r.article.title, q),
        snippet: Search.highlight(r.snippet, q)
      })).join('')}</div>`;
  }

  // ---------- 북마크·읽은 글 ----------
  function bookmarksPage() {
    const bms = Store.bookmarkIds().map(findArticle).filter(Boolean);
    const read = ordered().filter(a => Store.isRead(a.id));
    const unread = ordered().filter(a => !Store.isRead(a.id));
    app().innerHTML = `
      <div class="page-head">
        <div class="eyebrow">내 학습 기록</div>
        <h1>북마크와 읽은 글</h1>
        <p>표시는 이 브라우저에만 저장됩니다.</p>
      </div>
      <div class="section-title"><h2>★ 북마크 (${bms.length})</h2></div>
      ${bms.length ? `<div class="grid">${bms.map(a => articleCard(a)).join('')}</div>`
        : '<div class="empty">아직 북마크한 글이 없습니다. 글 상단의 ☆ 북마크 버튼을 눌러 보세요.</div>'}
      <div class="section-title"><h2>✓ 읽은 글 (${read.length})</h2></div>
      ${read.length ? `<div class="grid">${read.map(a => articleCard(a)).join('')}</div>`
        : '<div class="empty">읽음 완료로 표시한 글이 없습니다.</div>'}
      ${unread.length ? `
        <div class="section-title"><h2>아직 읽지 않은 글 (${unread.length})</h2></div>
        <div class="grid">${unread.map(a => articleCard(a)).join('')}</div>` : ''}`;
  }

  function notFound() {
    app().innerHTML = `
      <div class="page-head"><h1>페이지를 찾을 수 없습니다</h1>
      <p>주소가 바뀌었거나 삭제된 글일 수 있습니다.</p></div>
      <a class="btn primary" href="#/">홈으로</a>`;
  }

  return {
    esc, section, category, articlesIn, findArticle, url,
    sidebar, dashboard, sectionPage, categoryPage, articlePage, searchPage, bookmarksPage, notFound
  };
})();

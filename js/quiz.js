// 퀴즈: 카테고리 선택 → 한 문항씩 풀기 → 결과와 오답 해설.
const Quiz = (() => {
  const esc = s => View.esc(s);
  const app = () => document.getElementById('app');
  const RANDOM_COUNT = 10;
  let state = null;

  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function catName(key) {
    if (key === 'all') return '전체 랜덤';
    const [sid, cid] = key.split('/');
    const s = View.section(sid);
    const c = View.category(sid, cid);
    return s && c ? `${s.name} · ${c.name}` : key;
  }

  // O/X 문항도 보기 두 개짜리 객관식으로 바꿔 같은 방식으로 채점한다.
  function normalize(q) {
    if (q.type === 'ox') return Object.assign({}, q, { choices: ['O', 'X'], answer: q.answer ? 0 : 1 });
    return q;
  }

  // ---------- 퀴즈 목록 ----------
  function home() {
    state = null;
    const results = Store.quizResults();
    const card = (key, sid, count) => {
      const r = results[key];
      return `
        <a class="card quiz-cat" ${sid ? `data-section="${sid}"` : ''} href="#/quiz/${key}">
          <div class="card-top"><span class="cat-label">${sid ? esc(View.section(sid).name) : '전 범위'}</span><span class="badge">${count}문항</span></div>
          <h3>${esc(key === 'all' ? '전체 랜덤 퀴즈' : View.category(...key.split('/')).name)}</h3>
          <p>${key === 'all' ? `모든 영역에서 무작위로 ${RANDOM_COUNT}문항을 냅니다.` : '이 영역의 문항을 순서를 섞어 풉니다.'}</p>
          <div class="last">${r ? `최근 점수 ${r.score}/${r.total} · ${esc(r.date)}` : '아직 풀지 않음'}</div>
        </a>`;
    };
    app().innerHTML = `
      <div class="page-head">
        <div class="eyebrow">복습</div>
        <h1>퀴즈</h1>
        <p>문제를 풀면 바로 정답과 해설을 보여 줍니다. 해설의 링크로 관련 글을 다시 읽을 수 있습니다.</p>
      </div>
      <div class="grid">${card('all', '', Math.min(RANDOM_COUNT, QUIZZES.length))}</div>
      ${SECTIONS.map(s => `
        <div class="area-head" data-section="${s.id}"><h2>${esc(s.name)}</h2></div>
        <div class="grid">${s.categories.map(c => {
          const key = `${s.id}/${c.id}`;
          const n = QUIZZES.filter(q => q.cat === key).length;
          return n ? card(key, s.id, n) : '';
        }).join('')}</div>`).join('')}`;
  }

  // ---------- 문제 풀이 ----------
  function start(key) {
    let qs = key === 'all' ? shuffle(QUIZZES).slice(0, RANDOM_COUNT) : shuffle(QUIZZES.filter(q => q.cat === key));
    if (!qs.length) { View.notFound(); return; }
    state = { key, qs: qs.map(normalize), i: 0, picks: [] };
    question();
  }

  function question() {
    const q = state.qs[state.i];
    const sid = q.cat.split('/')[0];
    const total = state.qs.length;
    app().innerHTML = `
      <div class="quiz-wrap" data-section="${sid}">
        <nav class="crumbs"><a href="#/quiz">퀴즈</a> › ${esc(catName(state.key))}</nav>
        <div class="quiz-card">
          <div class="quiz-top">
            <span>${state.i + 1} / ${total}</span>
            <div class="progress"><span style="width:${(state.i / total) * 100}%"></span></div>
            <span>${q.type === 'ox' ? 'O / X' : '객관식'}</span>
          </div>
          <div class="quiz-q">${esc(q.q)}</div>
          <div class="choices ${q.type === 'ox' ? 'ox' : ''}">
            ${q.choices.map((c, i) => `
              <button type="button" class="choice" data-i="${i}">
                ${q.type === 'ox' ? esc(c) : `<span class="num">${i + 1}</span><span>${esc(c)}</span>`}
              </button>`).join('')}
          </div>
          <div id="feedback"></div>
          <div class="quiz-nav" id="quizNav"></div>
        </div>
      </div>`;
    app().querySelectorAll('.choice').forEach(btn =>
      btn.addEventListener('click', () => answer(+btn.dataset.i)));
  }

  function answer(pick) {
    const q = state.qs[state.i];
    const correct = pick === q.answer;
    state.picks[state.i] = pick;

    app().querySelectorAll('.choice').forEach(btn => {
      const i = +btn.dataset.i;
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      else if (i === pick) btn.classList.add('wrong');
    });

    const ref = q.ref && View.findArticle(q.ref);
    document.getElementById('feedback').innerHTML = `
      <div class="feedback ${correct ? 'correct' : 'wrong'}">
        <strong>${correct ? '정답입니다' : `오답입니다 · 정답: ${esc(q.choices[q.answer])}`}</strong>
        <p>${esc(q.explain)}</p>
        ${ref ? `<a href="${View.url(ref)}">관련 글: ${esc(ref.title)} →</a>` : ''}
      </div>`;

    const last = state.i === state.qs.length - 1;
    const nav = document.getElementById('quizNav');
    nav.innerHTML = `<button type="button" class="btn primary" id="nextBtn">${last ? '결과 보기' : '다음 문제 →'}</button>`;
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.addEventListener('click', () => {
      if (last) result();
      else { state.i++; question(); }
    });
    nextBtn.focus();
  }

  // ---------- 결과 ----------
  function result() {
    const { qs, picks, key } = state;
    const score = qs.filter((q, i) => picks[i] === q.answer).length;
    Store.saveQuizResult(key, score, qs.length);
    const wrong = qs.map((q, i) => ({ q, pick: picks[i] })).filter(x => x.pick !== x.q.answer);
    const ratio = score / qs.length;
    const msg = ratio === 1 ? '완벽합니다! 모든 문제를 맞혔어요.'
      : ratio >= 0.7 ? '잘했어요. 틀린 문제만 다시 확인해 봅시다.'
      : '관련 글을 다시 읽고 한 번 더 도전해 보세요.';

    app().innerHTML = `
      <div class="quiz-wrap" ${key === 'all' ? '' : `data-section="${key.split('/')[0]}"`}>
        <nav class="crumbs"><a href="#/quiz">퀴즈</a> › ${esc(catName(key))}</nav>
        <div class="quiz-card">
          <div class="eyebrow">결과</div>
          <div class="score-big">${score}<small> / ${qs.length}</small></div>
          <p>${msg}</p>
          <div class="actions">
            <button type="button" class="btn primary" id="retryBtn">다시 풀기</button>
            <a class="btn" href="#/quiz">다른 퀴즈 고르기</a>
          </div>
          ${wrong.length ? `
            <div class="review">
              <h3>틀린 문제 다시 보기</h3>
              ${wrong.map(({ q, pick }) => {
                const ref = q.ref && View.findArticle(q.ref);
                return `
                  <div class="review-item">
                    <strong>${esc(q.q)}</strong>
                    <p>내 답: <span class="x">${esc(q.choices[pick])}</span> → 정답: <span class="o">${esc(q.choices[q.answer])}</span></p>
                    <p>${esc(q.explain)}</p>
                    ${ref ? `<p><a href="${View.url(ref)}">관련 글: ${esc(ref.title)} →</a></p>` : ''}
                  </div>`;
              }).join('')}
            </div>` : ''}
        </div>
      </div>`;
    document.getElementById('retryBtn').addEventListener('click', () => start(key));
  }

  return { home, start };
})();

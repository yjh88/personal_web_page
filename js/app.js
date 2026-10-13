// 해시 라우터와 전역 UI(검색창, 모바일 목차 메뉴).
(() => {
  const layout = document.getElementById('layout');
  const sidebarEl = document.getElementById('sidebar');
  const backdrop = document.getElementById('backdrop');
  const menuBtn = document.getElementById('menuBtn');
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');

  // "#/economy/basics/gdp?x=1" → { parts: ['economy','basics','gdp'], query: URLSearchParams }
  function parse() {
    const hash = location.hash.replace(/^#\/?/, '');
    const [path, qs] = hash.split('?');
    const parts = path.split('/').filter(Boolean).map(decodeURIComponent);
    return { parts, query: new URLSearchParams(qs || '') };
  }

  function setNav(key) {
    document.querySelectorAll('.topnav a').forEach(a => a.classList.toggle('active', a.dataset.nav === key));
  }

  function openMenu(open) {
    sidebarEl.classList.toggle('open', open);
    backdrop.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
  }

  function route() {
    const { parts, query } = parse();
    const [first, second, third] = parts;
    let withSidebar = false;
    let current = {};

    openMenu(false);

    if (!first) {
      View.dashboard();
      setNav('');
    } else if (first === 'search') {
      const q = (query.get('q') || '').trim();
      searchInput.value = q;
      View.searchPage(q);
      setNav('');
    } else if (first === 'quiz') {
      if (second) Quiz.start(third ? `${second}/${third}` : second);
      else Quiz.home();
      setNav('quiz');
    } else if (first === 'rules') {
      Norms.cardsPage(query);
      setNav('korean');
    } else if (first === 'bookmarks') {
      View.bookmarksPage();
      setNav('bookmarks');
    } else {
      const s = View.section(first);
      const c = s && second ? View.category(first, second) : null;
      const a = c && third ? View.findArticle(third) : null;
      if (!s || (second && !c) || (third && (!a || a.section !== first || a.category !== second))) {
        View.notFound();
      } else if (a) {
        View.articlePage(a);
        withSidebar = true;
        current = { section: a.section, category: a.category, id: a.id };
      } else if (c) {
        View.categoryPage(s, c);
        withSidebar = true;
        current = { section: s.id, category: c.id };
      } else {
        View.sectionPage(s);
        withSidebar = true;
        current = { section: s.id };
      }
      setNav(s ? s.id : '');
    }

    if (first !== 'search') searchInput.value = '';
    layout.classList.toggle('has-sidebar', withSidebar);
    View.sidebar(current);
    window.scrollTo(0, 0);
  }

  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const q = searchInput.value.trim();
    if (q) location.hash = '#/search?q=' + encodeURIComponent(q);
  });

  // "/" 키로 검색창에 바로 입력
  document.addEventListener('keydown', e => {
    if (e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === 'Escape') openMenu(false);
  });

  menuBtn.addEventListener('click', () => openMenu(!sidebarEl.classList.contains('open')));
  backdrop.addEventListener('click', () => openMenu(false));

  window.addEventListener('hashchange', route);
  route();
})();

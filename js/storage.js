// 읽음·북마크·퀴즈 기록 저장소.
// localStorage를 쓸 수 없는 환경(사생활 보호 모드 등)에서도 메모리 캐시로 동작한다.
const Store = (() => {
  const PREFIX = 'studynote.';
  const cache = {};

  function get(key, fallback) {
    if (!(key in cache)) {
      let value = fallback;
      try {
        const raw = localStorage.getItem(PREFIX + key);
        if (raw) value = JSON.parse(raw);
      } catch (e) { /* 저장소 접근 불가: 기본값 사용 */ }
      cache[key] = value;
    }
    return cache[key];
  }

  function set(key, value) {
    cache[key] = value;
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch (e) { /* 저장 실패: 이번 세션 동안만 유지 */ }
  }

  // 목록에 id가 있으면 빼고, 없으면 넣는다. 넣었으면 true.
  function toggleIn(key, id) {
    const list = get(key, []).slice();
    const i = list.indexOf(id);
    if (i >= 0) list.splice(i, 1);
    else list.push(id);
    set(key, list);
    return i < 0;
  }

  return {
    readIds: () => get('read', []),
    isRead: id => get('read', []).includes(id),
    toggleRead: id => toggleIn('read', id),

    bookmarkIds: () => get('bookmarks', []),
    isBookmarked: id => get('bookmarks', []).includes(id),
    toggleBookmark: id => toggleIn('bookmarks', id),

    // 어문 규범 조항 카드에서 '외웠어요'로 표시한 조항
    knownIds: () => get('rulesKnown', []),
    isKnown: id => get('rulesKnown', []).includes(id),
    toggleKnown: id => toggleIn('rulesKnown', id),

    quizResults: () => get('quiz', {}),
    saveQuizResult(key, score, total) {
      const results = Object.assign({}, get('quiz', {}));
      results[key] = { score, total, date: new Date().toISOString().slice(0, 10) };
      set('quiz', results);
    }
  };
})();

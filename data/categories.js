// 섹션 → 카테고리 구조. 목차·대시보드·퀴즈가 모두 이 순서를 따른다.
window.SECTIONS = [
  {
    id: 'economy',
    name: '경제',
    desc: '기초 개념부터 지표, 재테크, 뉴스 해설까지',
    categories: [
      { id: 'basics', name: '경제 기초 개념', desc: '경제를 이해하는 데 필요한 핵심 용어와 원리' },
      { id: 'indicators', name: '경제 지표·차트', desc: '숫자와 그래프로 경제 흐름 읽기' },
      { id: 'finance', name: '재테크·금융 상식', desc: '예금, 투자, 절세 등 실생활 돈 관리' },
      { id: 'news', name: '경제 뉴스·이슈 해설', desc: '경제 기사 속 이슈를 구조적으로 이해하기' }
    ]
  },
  {
    id: 'korean',
    name: '국어',
    desc: '맞춤법, 문법, 문학, 어휘, 비문학 독해',
    categories: [
      { id: 'spelling', name: '맞춤법·띄어쓰기', desc: '자주 틀리는 표기와 띄어쓰기 규칙' },
      { id: 'grammar', name: '문법', desc: '품사, 문장, 음운의 체계' },
      { id: 'literature', name: '문학', desc: '현대시, 소설, 고전시가 감상의 기본기' },
      { id: 'vocab', name: '어휘·한자어·관용표현', desc: '사자성어, 관용 표현, 속담, 순우리말' },
      { id: 'nonfiction', name: '비문학', desc: '설명문·논설문 지문을 구조적으로 읽는 법' }
    ]
  }
];

// 글과 퀴즈 문항은 각 데이터 파일에서 push 한다.
// 글 형식: { id, section, category, title, summary, tags, updated, body(HTML), takeaway }
window.ARTICLES = [];
window.QUIZZES = [];

// 어문 규범(한글 맞춤법·표준어 사정 원칙·표준 발음법) 조항 데이터.
// NORM_UNITS의 장별 글 하나마다 NORMS 조항들이 모여 글 본문이 자동으로 만들어진다 (js/norms.js).
window.NORM_UNITS = [];
window.NORMS = [];

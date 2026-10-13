// 국어 글. 표기 비교에는 <span class="o">바른 표기</span>, <span class="x">틀린 표기</span>를 쓴다.
ARTICLES.push(
  // ───────────── 맞춤법·띄어쓰기 ─────────────
  {
    id: 'common-mistakes',
    section: 'korean',
    category: 'spelling',
    title: '자주 틀리는 맞춤법 10가지',
    summary: '되/돼, 안/않, 로서/로써, 웬/왠, -대/-데 등 일상에서 가장 자주 틀리는 표기를 원래 형태로 되돌려 보는 구별법과 함께 정리한다.',
    tags: ['맞춤법', '되/돼', '안/않', '로서/로써', '웬/왠', '-대/-데'],
    updated: '2026-10-11',
    takeaway: '헷갈리면 원래 형태를 넣어 본다: 돼 = 되어, 않 = 아니하, 왠지 = 왜인지, -대 = -다고 해.',
    body: `
<h2>1. 되 / 돼</h2>
<p><strong>‘돼’는 ‘되어’의 준말</strong>이다. ‘되어’로 바꿔 자연스러우면 ‘돼’, 아니면 ‘되’를 쓴다.</p>
<div class="example">
  <span class="label">구별법 · ‘하/해’를 넣어 보기</span>
  <p>‘되’ 자리에 ‘하’, ‘돼’ 자리에 ‘해’를 넣어 자연스러운 쪽을 고른다.</p>
  <ul>
    <li>안 (하요 / <strong>해요</strong>) → 안 <span class="o">돼요</span> (<span class="x">되요</span>)</li>
    <li>(<strong>하</strong>고 / 해고) 싶다 → <span class="o">되고</span> 싶다</li>
    <li>(<strong>했</strong>다) → <span class="o">됐다</span> (= 되었다), 선생님이 (<strong>하</strong>셨다) → <span class="o">되셨다</span></li>
  </ul>
</div>
<p>같은 원리로 <strong>‘뵈어 → 봬’</strong>다. “내일 <span class="o">봬요</span>” (<span class="x">뵈요</span>), “그때 <span class="o">뵙겠습니다</span>”.</p>

<h2>2. 안 / 않</h2>
<ul>
  <li><strong>안</strong> = ‘아니’의 준말 (부사): <span class="o">안</span> 먹었다 → 아니 먹었다</li>
  <li><strong>않</strong> = ‘아니하’의 준말 (용언): 먹지 <span class="o">않았다</span> → 먹지 아니하였다</li>
</ul>
<p>‘-지’ 뒤에는 거의 항상 ‘않’이 온다. “공부를 <span class="o">안</span> 해서”, “공부하지 <span class="o">않아서</span>”.</p>

<h2>3. 로서 / 로써</h2>
<table>
  <tr><th>조사</th><th>뜻</th><th>예</th></tr>
  <tr><td>(으)로서</td><td><strong>자격·지위·신분</strong></td><td>교사<span class="o">로서</span> 책임을 다했다.</td></tr>
  <tr><td>(으)로써</td><td><strong>수단·도구·재료</strong>, 시간의 기준</td><td>대화<span class="o">로써</span> 갈등을 풀었다. / 쌀<span class="o">로써</span> 떡을 만든다. / 오늘<span class="o">로써</span> 입사 1년이다.</td></tr>
</table>
<p>‘~라는 자격으로’면 로서, ‘~을 가지고’면 로써.</p>

<h2>4. 웬 / 왠</h2>
<p><strong>‘왠’은 ‘왠지’(왜인지)에만</strong> 쓴다. 나머지는 모두 ‘웬’이다.</p>
<p><span class="o">왠지</span> 불안하다 / <span class="o">웬일</span>이니 (<span class="x">왠일</span>) / <span class="o">웬만하면</span> / <span class="o">웬</span> 떡이야</p>

<h2>5. 며칠</h2>
<p>‘몇 일’로 적는 경우는 없다. 언제나 <span class="o">며칠</span>이다. “오늘이 <span class="o">며칠</span>이지?”, “<span class="o">며칠</span> 동안”.</p>

<h2>6. 금세</h2>
<p>‘금시(今時)에’가 줄어든 말이므로 <span class="o">금세</span>다 (<span class="x">금새</span>). ‘금새’는 물건값을 뜻하는 다른 단어다.</p>

<h2>7. 어떡해 / 어떻게</h2>
<ul>
  <li><strong>어떡해</strong> = ‘어떻게 해’의 준말. 문장을 끝맺는다. “나 이제 <span class="o">어떡해</span>?”</li>
  <li><strong>어떻게</strong> = 방법·상태를 묻는 부사. 뒤에 서술어가 온다. “<span class="o">어떻게</span> 가요?”</li>
</ul>

<h2>8. 바라 / 바래</h2>
<p>기본형이 <strong>‘바라다’</strong>이므로 <span class="o">바라요</span>, <span class="o">바람</span>, <span class="o">바랐다</span>다 (<span class="x">바래요</span>, <span class="x">바램</span>). ‘바래다’는 “색이 <span class="o">바랬다</span>”처럼 빛이 변한다는 뜻이다.</p>

<h2>9. 결재 / 결제</h2>
<p><strong>결재</strong>(決裁)는 윗사람이 안건을 승인하는 것, <strong>결제</strong>(決濟)는 돈을 치러 거래를 끝내는 것이다. “부장님 <span class="o">결재</span>를 받다”, “카드로 <span class="o">결제</span>하다”.</p>

<h2>10. -대 / -데</h2>
<table>
  <tr><th>어미</th><th>쓰임</th><th>예</th></tr>
  <tr><td>-대</td><td><strong>남의 말을 전달</strong> (‘-다고 해’의 준말)</td><td>그 영화 재밌<span class="o">대</span>. (들은 말)</td></tr>
  <tr><td>-데</td><td><strong>자기가 직접 겪은 일을 회상</strong>해 말함 (‘-더라’)</td><td>그 영화 재밌<span class="o">데</span>. (내가 봤더니)</td></tr>
</table>

<div class="callout">
  <h4>헷갈리는 포인트</h4>
  <ul>
    <li>‘안 되다’(되지 않다)와 ‘안되다’(안타깝다, 잘되지 않다)는 다른 말이다. “그것 참 <span class="o">안됐다</span>”(안타깝다)는 붙여 쓴다.</li>
    <li>‘-ㄹ게’는 <span class="o">할게</span>, <span class="o">갈게</span>로 적는다 (<span class="x">할께</span>). 의문형 ‘-ㄹ까’만 된소리로 적는다.</li>
  </ul>
</div>
<p class="see-also">규범 원문으로 확인하기: <a href="#/korean/spelling/hm-abbr">한글 맞춤법 ⑥ 준말(돼, 봬, -잖-)</a> · <a href="#/korean/spelling/hm-etc">⑧ 그 밖의 것(-ㄹ게, -던/-든, 구별어)</a> · <a href="#/korean/spelling/sp-pron">표준어 ①(바라다, 나무라다)</a></p>`
  },
  {
    id: 'spacing',
    section: 'korean',
    category: 'spelling',
    title: '띄어쓰기 핵심 규칙',
    summary: '조사는 붙이고 의존 명사·단위 명사는 띄운다는 기본 원칙과, ‘지·데·만큼·대로·만’처럼 쓰임에 따라 띄어쓰기가 달라지는 말의 구별법을 정리한다.',
    tags: ['띄어쓰기', '의존 명사', '조사', '보조 용언', '한번', '-지'],
    updated: '2026-10-11',
    takeaway: '앞말이 체언이면 조사로 보고 붙이고, 앞말이 관형형(-ㄴ, -는, -ㄹ)이면 의존 명사로 보고 띄운다.',
    body: `
<h2>대원칙</h2>
<blockquote>문장의 각 단어는 띄어 씀을 원칙으로 한다. 다만 조사는 그 앞말에 붙여 쓴다. (한글 맞춤법 제2항, 제41항)</blockquote>

<h2>1. 조사는 붙인다 (여러 개가 겹쳐도)</h2>
<p><span class="o">집에서처럼</span> / <span class="o">너마저도</span> / <span class="o">학교에서부터</span> / <span class="o">나가면서까지도</span></p>

<h2>2. 의존 명사는 띄운다</h2>
<p>혼자 쓰이지 못하지만 단어이므로 띄운다: 것, 수, 데, 바, 지, 만큼, 뿐, 대로, 듯, 줄.</p>
<p>할 <span class="o">수</span> 있다 / 먹을 <span class="o">만큼</span> / 들을 <span class="o">뿐</span>이다 / 아는 <span class="o">대로</span> / 할 <span class="o">줄</span> 안다</p>

<h2>3. 두 얼굴을 가진 말</h2>
<p>같은 모양이라도 앞말에 따라 조사·어미(붙임)일 수도, 의존 명사(띄움)일 수도 있다.</p>
<table>
  <tr><th>말</th><th>띄우는 경우 (의존 명사)</th><th>붙이는 경우 (조사·어미)</th></tr>
  <tr><td>지</td><td>시간의 경과: 떠난 <span class="o">지</span> 3년</td><td>막연한 의문(-ㄴ지/-ㄹ지): 갈<span class="o">지</span> 말지</td></tr>
  <tr><td>데</td><td>장소·일·경우: 갈 <span class="o">데</span>가 없다 / 이 일을 하는 <span class="o">데</span> 사흘 걸렸다</td><td>연결 어미 -ㄴ데: 비가 오는<span class="o">데</span> 우산이 없다</td></tr>
  <tr><td>만큼</td><td>관형형 뒤: 노력한 <span class="o">만큼</span></td><td>체언 뒤: 너<span class="o">만큼</span></td></tr>
  <tr><td>대로</td><td>관형형 뒤: 아는 <span class="o">대로</span></td><td>체언 뒤: 법<span class="o">대로</span></td></tr>
  <tr><td>뿐</td><td>관형형 뒤: 웃을 <span class="o">뿐</span></td><td>체언 뒤: 너<span class="o">뿐</span></td></tr>
  <tr><td>만</td><td>시간의 경과: 십 년 <span class="o">만</span>에</td><td>한정: 너<span class="o">만</span> 와</td></tr>
</table>
<div class="example">
  <span class="label">‘데’ 구별법</span>
  <p>뒤에 조사 ‘에’를 넣을 수 있으면 의존 명사다. “일을 하는 데(에) 사흘 걸렸다” → 띄운다. “비가 오는데(에)…”는 어색 → 붙인다.</p>
</div>

<h2>4. 단위 명사는 띄운다</h2>
<p>한 <span class="o">개</span>, 차 한 <span class="o">대</span>, 열 <span class="o">살</span>, 소 두 <span class="o">마리</span>.</p>
<p>단, <strong>아라비아 숫자</strong>와 함께 쓰거나 순서를 나타낼 때는 붙여 쓸 수 있다: <span class="o">3개</span>, <span class="o">2026년</span>, <span class="o">제1회</span>, <span class="o">삼학년</span>.</p>

<h2>5. 보조 용언: 원칙은 띄움, 붙임도 허용</h2>
<p>먹어 <span class="o">보다</span> / 먹어<span class="o">보다</span>, 비가 올 <span class="o">듯하다</span> / 올<span class="o">듯하다</span> 모두 맞다.</p>
<p>단, 앞말에 조사가 붙으면 반드시 띄운다: 먹어<strong>도</strong> 보다, 잘난 체<strong>를</strong> 한다.</p>

<h2>6. 이름과 호칭</h2>
<p>성과 이름은 붙이고, 호칭·관직명은 띄운다: <span class="o">김철수</span>, 김 <span class="o">선생님</span>, 홍길동 <span class="o">씨</span>, 이 <span class="o">과장</span>.</p>

<div class="callout">
  <h4>헷갈리는 포인트</h4>
  <ul>
    <li><strong>한번 / 한 번</strong>: 횟수면 띄우고(“<span class="o">한 번</span>, 두 번”), 시도·기회·강조면 붙인다(“<span class="o">한번</span> 해 보자”, “노래 <span class="o">한번</span> 잘한다”). ‘두 번’으로 바꿔 말이 되면 띄운다.</li>
    <li><strong>못하다 / 못 하다</strong>: 능력이 미치지 못하면 붙인다(“노래를 <span class="o">못한다</span>”). 어떤 사정으로 할 수 없었으면 띄운다(“바빠서 숙제를 <span class="o">못 했다</span>”).</li>
    <li><strong>-씩, -짜리, -께</strong>는 접미사라 붙인다: <span class="o">하나씩</span>, <span class="o">천 원짜리</span>, <span class="o">보름께</span>.</li>
  </ul>
</div>
<p class="see-also">규범 원문으로 확인하기: <a href="#/korean/spelling/hm-spacing">한글 맞춤법 ⑦ 띄어쓰기(제41~50항)</a></p>`
  },
  {
    id: 'saisiot',
    section: 'korean',
    category: 'spelling',
    title: '사이시옷 완전 정리',
    summary: '사이시옷은 합성어이면서, 순우리말이 하나 이상 들어 있고, 앞말이 모음으로 끝나며, 소리가 덧나는 네 조건을 모두 갖출 때만 적는다.',
    tags: ['사이시옷', '합성어', '최댓값', '뒤풀이', '등굣길', '윗/웃'],
    updated: '2026-10-10',
    takeaway: '합성어 + 순우리말 포함 + 앞말 모음 끝 + 소리 덧남, 넷 다 맞을 때만 ㅅ을 넣는다. 뒷말이 이미 된소리·거센소리면 넣지 않는다.',
    body: `
<h2>네 가지 조건</h2>
<ol>
  <li><strong>합성어</strong>여야 한다. (해님처럼 ‘-님’이 접미사면 합성어가 아니다 → <span class="o">해님</span>, <span class="x">햇님</span>)</li>
  <li>두 말 중 <strong>하나 이상이 순우리말</strong>이어야 한다. (한자어 + 한자어는 원칙적으로 안 됨)</li>
  <li><strong>앞말이 모음으로 끝나야</strong> 한다. (받침이 있으면 ㅅ을 넣을 자리가 없다)</li>
  <li>아래 세 가지 중 하나처럼 <strong>소리가 덧나야</strong> 한다.</li>
</ol>
<table>
  <tr><th>소리 변화</th><th>예 (발음)</th></tr>
  <tr><td>뒷말 첫소리가 된소리로 남</td><td>나뭇가지[나무까지/나묻까지], 냇가, 햇볕, 바닷가, 귓병, 전셋집</td></tr>
  <tr><td>뒷말 ㄴ, ㅁ 앞에서 ㄴ 소리가 덧남</td><td>잇몸[인몸], 콧날[콘날], 아랫니[아랜니]</td></tr>
  <tr><td>뒷말 모음 앞에서 ㄴㄴ 소리가 덧남</td><td>나뭇잎[나문닙], 뒷일[뒨닐], 깻잎[깬닙]</td></tr>
</table>

<h2>순우리말 + 한자어도 된다</h2>
<p>등교(登校) + 길 → <span class="o">등굣길</span>, 하교 + 길 → <span class="o">하굣길</span>, 장마 + 비 → <span class="o">장맛비</span>, 최대(最大) + 값 → <span class="o">최댓값</span>, 최소 + 값 → <span class="o">최솟값</span>, 차(茶) + 잔 → <span class="o">찻잔</span>, 해 + 수(數) → <span class="o">햇수</span></p>

<h2>한자어끼리는 딱 6개만 예외</h2>
<p><span class="o">곳간</span>(庫間), <span class="o">셋방</span>(貰房), <span class="o">숫자</span>(數字), <span class="o">찻간</span>(車間), <span class="o">툇간</span>(退間), <span class="o">횟수</span>(回數)</p>
<p>그 밖의 한자어는 된소리가 나도 ㅅ을 넣지 않는다: <span class="o">개수</span>(個數), <span class="o">초점</span>(焦點), <span class="o">대가</span>(代價), <span class="o">시가</span>(市價), <span class="o">내과</span>(內科).</p>

<h2>넣지 않는 경우</h2>
<ul>
  <li><strong>뒷말이 이미 된소리·거센소리</strong>: <span class="o">뒤풀이</span>(<span class="x">뒷풀이</span>), <span class="o">뒤처리</span>, <span class="o">위쪽</span>, <span class="o">아래쪽</span>, <span class="o">뒤뜰</span>, <span class="o">위층</span>(<span class="x">윗층</span>)</li>
  <li><strong>외래어가 들어간 합성어</strong>: <span class="o">피자집</span>, <span class="o">핑크빛</span>, <span class="o">오렌지빛</span></li>
</ul>

<h2>자주 틀리는 표기</h2>
<table>
  <tr><th>틀린 표기</th><th>바른 표기</th><th>이유</th></tr>
  <tr><td><span class="x">갯수</span></td><td><span class="o">개수</span></td><td>한자어끼리, 6개 예외에 없음</td></tr>
  <tr><td><span class="x">촛점</span></td><td><span class="o">초점</span></td><td>한자어끼리</td></tr>
  <tr><td><span class="x">뒷풀이</span></td><td><span class="o">뒤풀이</span></td><td>뒷말이 거센소리</td></tr>
  <tr><td><span class="x">최대값</span></td><td><span class="o">최댓값</span></td><td>한자어 + 순우리말, [최대깝]</td></tr>
  <tr><td><span class="x">등교길</span></td><td><span class="o">등굣길</span></td><td>한자어 + 순우리말, [등교낄]</td></tr>
  <tr><td><span class="x">햇님</span></td><td><span class="o">해님</span></td><td>‘-님’은 접미사, 합성어 아님</td></tr>
</table>

<div class="callout">
  <h4>헷갈리는 포인트 · 윗- / 웃- / 위-</h4>
  <ul>
    <li><strong>위아래 대립이 있으면 ‘윗-’</strong>: 윗니/아랫니, 윗사람/아랫사람, 윗옷/아래옷</li>
    <li><strong>대립이 없으면 ‘웃-’</strong>: <span class="o">웃어른</span>(아래어른 없음), <span class="o">웃돈</span>, <span class="o">웃옷</span>(겉옷)</li>
    <li><strong>된소리·거센소리 앞이면 ‘위-’</strong>: <span class="o">위층</span>, <span class="o">위쪽</span>, <span class="o">위턱</span></li>
  </ul>
</div>
<p class="see-also">규범 원문으로 확인하기: <a href="#/korean/spelling/hm-form3">한글 맞춤법 ⑤ 사이시옷(제30항)</a> · <a href="#/korean/spelling/sp-pron">표준어 ① 윗-/웃-(제12항)</a> · <a href="#/korean/spelling/pr-change">표준 발음법 ③ 사이시옷의 발음(제30항)</a></p>`
  },

  // ───────────── 문법 ─────────────
  {
    id: 'parts-of-speech',
    section: 'korean',
    category: 'grammar',
    title: '9품사 체계와 헷갈리는 품사 구별',
    summary: '국어 단어는 기능에 따라 5언, 의미에 따라 9품사로 나뉜다. 동사와 형용사, 관형사와 수사처럼 자주 헷갈리는 쌍을 판별하는 기준을 정리한다.',
    tags: ['품사', '9품사', '동사', '형용사', '관형사', '수사', '조사'],
    updated: '2026-10-05',
    takeaway: '동사는 ‘-는다’와 명령·청유형이 되고 형용사는 안 된다. 수 관형사는 조사가 못 붙고, 수사는 조사가 붙는다.',
    body: `
<h2>5언 9품사</h2>
<table>
  <tr><th>기능 (5언)</th><th>품사</th><th>예</th><th>형태 변화</th></tr>
  <tr><td rowspan="3">체언 (주로 주어·목적어)</td><td>명사</td><td>하늘, 사랑, 것</td><td rowspan="3">불변어</td></tr>
  <tr><td>대명사</td><td>나, 너, 이것, 여기</td></tr>
  <tr><td>수사</td><td>하나, 둘, 첫째</td></tr>
  <tr><td rowspan="2">용언 (서술)</td><td>동사</td><td>먹다, 달리다, 자라다</td><td rowspan="2">가변어 (활용함)</td></tr>
  <tr><td>형용사</td><td>예쁘다, 아름답다, 있다(존재)</td></tr>
  <tr><td rowspan="2">수식언 (꾸밈)</td><td>관형사</td><td>새, 헌, 이, 세, 모든</td><td rowspan="2">불변어</td></tr>
  <tr><td>부사</td><td>매우, 빨리, 그러나</td></tr>
  <tr><td>관계언</td><td>조사</td><td>이/가, 을/를, 은/는, 와/과</td><td>불변 (서술격 조사 ‘이다’만 활용)</td></tr>
  <tr><td>독립언</td><td>감탄사</td><td>아, 네, 여보세요</td><td>불변어</td></tr>
</table>

<h2>동사와 형용사 구별</h2>
<table>
  <tr><th>시험 방법</th><th>동사 (먹다)</th><th>형용사 (예쁘다)</th></tr>
  <tr><td>현재형 ‘-는다/-ㄴ다’</td><td><span class="o">먹는다</span></td><td><span class="x">예쁜다</span> → 예쁘다</td></tr>
  <tr><td>관형사형 ‘-는’</td><td><span class="o">먹는</span> 사람</td><td><span class="x">예쁘는</span> → 예쁜 사람</td></tr>
  <tr><td>명령형</td><td><span class="o">먹어라</span></td><td><span class="x">예뻐라</span>(명령 뜻으로는 불가)</td></tr>
  <tr><td>청유형</td><td><span class="o">먹자</span></td><td><span class="x">예쁘자</span></td></tr>
</table>
<div class="example">
  <span class="label">한 단어가 두 품사로 쓰이는 경우</span>
  <ul>
    <li><strong>크다</strong>: “키가 크다”(형용사) / “아이가 쑥쑥 <strong>큰다</strong>”(동사, 자라다)</li>
    <li><strong>밝다</strong>: “방이 밝다”(형용사) / “날이 <strong>밝는다</strong>”(동사)</li>
    <li><strong>있다</strong>: “돈이 있다”(형용사, 소유·존재) / “가만히 <strong>있어라</strong>”(동사, 머무름)</li>
  </ul>
</div>

<h2>관형사·수사·명사 구별</h2>
<table>
  <tr><th>예</th><th>품사</th><th>판별 근거</th></tr>
  <tr><td><strong>세</strong> 사람</td><td>수 관형사</td><td>뒤의 명사를 꾸밈, 조사가 붙지 않음</td></tr>
  <tr><td><strong>셋</strong>이 왔다</td><td>수사</td><td>조사 ‘이’가 붙어 주어로 쓰임</td></tr>
  <tr><td><strong>이</strong> 책</td><td>지시 관형사</td><td>‘책’을 꾸밈</td></tr>
  <tr><td><strong>이</strong>는 내 책이다</td><td>지시 대명사</td><td>조사가 붙음</td></tr>
  <tr><td><strong>새</strong> 옷</td><td>성상 관형사</td><td>활용하지 않음 (‘새롭다’는 형용사)</td></tr>
</table>
<p>관형사는 체언을, 부사는 용언·다른 부사·문장 전체를 꾸민다. “<strong>아주</strong> 새 옷”에서 ‘아주’는 관형사 ‘새’를 꾸미는 부사다.</p>

<h2>조사의 세 종류</h2>
<ul>
  <li><strong>격 조사</strong>: 자격을 정해 줌 — 이/가(주격), 을/를(목적격), 의(관형격), 에/에서(부사격), 이다(서술격)</li>
  <li><strong>보조사</strong>: 뜻을 더함 — 은/는(대조·화제), 도(역시), 만(한정), 까지, 조차</li>
  <li><strong>접속 조사</strong>: 두 말을 이음 — 와/과, 하고, (이)랑</li>
</ul>

<div class="callout">
  <h4>헷갈리는 포인트</h4>
  <ul>
    <li><strong>품사 ≠ 문장 성분</strong>: 품사는 단어 자체의 성질, 성분은 문장 속 역할이다. “철수의 책”에서 ‘철수’는 명사(품사)이고, ‘철수의’는 관형어(성분)다.</li>
    <li><strong>‘아니다’는 형용사</strong>, ‘이다’는 서술격 조사다.</li>
    <li>‘-는다’ 시험은 현재 시제에서 한다. “예뻤다”처럼 과거형은 둘 다 되므로 구별에 쓸 수 없다.</li>
  </ul>
</div>`
  },
  {
    id: 'sentence-components',
    section: 'korean',
    category: 'grammar',
    title: '문장 성분과 문장의 짜임',
    summary: '주어·서술어·목적어·보어·관형어·부사어·독립어 일곱 성분과, 홑문장·이어진 문장·안은 문장의 짜임을 예문으로 구별한다.',
    tags: ['문장 성분', '보어', '부사어', '홑문장', '겹문장', '안은 문장', '서술절'],
    updated: '2026-10-06',
    takeaway: '‘되다/아니다’ 앞의 ‘이/가’는 보어다. 겹문장은 이어진 문장(대등·종속)과 안은 문장(명사절·관형절·부사절·서술절·인용절)으로 나뉜다.',
    body: `
<h2>일곱 가지 문장 성분</h2>
<table>
  <tr><th>구분</th><th>성분</th><th>역할</th><th>예 (굵은 부분)</th></tr>
  <tr><td rowspan="4">주성분<br>(빠지면 문장 불완전)</td><td>주어</td><td>무엇이</td><td><strong>꽃이</strong> 피었다.</td></tr>
  <tr><td>서술어</td><td>어찌하다/어떠하다/무엇이다</td><td>꽃이 <strong>피었다</strong>.</td></tr>
  <tr><td>목적어</td><td>무엇을</td><td>나는 <strong>책을</strong> 읽었다.</td></tr>
  <tr><td>보어</td><td>‘되다/아니다’가 요구하는 말</td><td>물이 <strong>얼음이</strong> 되었다. 그는 <strong>학생이</strong> 아니다.</td></tr>
  <tr><td rowspan="2">부속 성분<br>(꾸밈)</td><td>관형어</td><td>체언 꾸밈</td><td><strong>새</strong> 옷, <strong>철수의</strong> 가방</td></tr>
  <tr><td>부사어</td><td>용언·문장 꾸밈</td><td><strong>빨리</strong> 달렸다, <strong>학교에서</strong> 공부했다</td></tr>
  <tr><td>독립 성분</td><td>독립어</td><td>다른 성분과 직접 관계없음</td><td><strong>아</strong>, 가을이구나. <strong>철수야</strong>, 밥 먹자.</td></tr>
</table>

<h3>필수적 부사어</h3>
<p>부사어는 보통 빼도 되지만, 서술어가 반드시 요구하는 부사어도 있다.</p>
<p>그는 <strong>아버지와</strong> 닮았다. / 나는 친구<strong>에게</strong> 선물을 주었다. / 그를 <strong>사위로</strong> 삼았다. / 책을 <strong>가방에</strong> 넣었다.</p>

<h3>서술어의 자릿수</h3>
<table>
  <tr><th>자릿수</th><th>필요한 성분</th><th>예</th></tr>
  <tr><td>한 자리</td><td>주어</td><td>꽃이 피었다.</td></tr>
  <tr><td>두 자리</td><td>주어 + 목적어/보어/필수 부사어</td><td>나는 책을 읽었다. / 물이 얼음이 되었다. / 그는 아버지와 닮았다.</td></tr>
  <tr><td>세 자리</td><td>주어 + 목적어 + 필수 부사어</td><td>나는 친구에게 선물을 주었다.</td></tr>
</table>

<h2>문장의 짜임</h2>
<p>주어–서술어 관계가 <strong>한 번</strong>이면 홑문장, <strong>두 번 이상</strong>이면 겹문장이다.</p>

<h3>이어진 문장</h3>
<table>
  <tr><th>종류</th><th>연결 어미</th><th>예</th><th>특징</th></tr>
  <tr><td>대등하게 이어진 문장</td><td>-고, -며, -지만, -나</td><td>산은 높고 물은 맑다.</td><td>앞뒤를 바꿔도 의미 유지</td></tr>
  <tr><td>종속적으로 이어진 문장</td><td>-어서, -니까, -면, -려고, -도록</td><td>비가 와서 길이 젖었다.</td><td>앞뒤를 바꾸면 의미가 달라짐</td></tr>
</table>

<h3>안은 문장 (절을 품은 문장)</h3>
<table>
  <tr><th>안긴 절</th><th>표지</th><th>예 (굵은 부분이 안긴 절)</th></tr>
  <tr><td>명사절</td><td>-(으)ㅁ, -기</td><td><strong>그가 범인임</strong>이 밝혀졌다. / 나는 <strong>비가 오기</strong>를 바란다.</td></tr>
  <tr><td>관형절</td><td>-(으)ㄴ, -는, -(으)ㄹ, -던</td><td><strong>내가 읽은</strong> 책이 재밌다.</td></tr>
  <tr><td>부사절</td><td>-이, -게, -도록, -듯이</td><td>그는 <strong>소리도 없이</strong> 다가왔다.</td></tr>
  <tr><td>서술절</td><td>표지 없음</td><td>코끼리는 <strong>코가 길다</strong>.</td></tr>
  <tr><td>인용절</td><td>-고(간접), -라고(직접)</td><td>그는 <strong>내일 온다고</strong> 말했다.</td></tr>
</table>

<div class="callout">
  <h4>헷갈리는 포인트</h4>
  <ul>
    <li><strong>보어 vs 주어</strong>: “물이 얼음이 되었다”에서 ‘물이’는 주어, ‘얼음이’는 보어다. 둘 다 ‘이/가’가 붙지만 ‘되다/아니다’ 바로 앞이 보어다.</li>
    <li><strong>서술절은 주어가 두 개처럼 보인다</strong>: “토끼는 앞발이 짧다”에서 ‘앞발이 짧다’ 전체가 ‘토끼는’의 서술어다.</li>
    <li><strong>관계 관형절 vs 동격 관형절</strong>: “내가 읽은 책”은 ‘책을’이 절 안에서 빠져 있다(관계). “그가 합격했다는 소식”은 빠진 성분이 없고 절이 ‘소식’의 내용 자체다(동격).</li>
  </ul>
</div>`
  },
  {
    id: 'phonological-change',
    section: 'korean',
    category: 'grammar',
    title: '음운 변동 한눈에 보기',
    summary: '음운 변동은 교체·탈락·첨가·축약 네 가지로 정리된다. 대표 사례의 발음과 조건, 여러 변동이 겹치는 단어의 분석 순서를 익힌다.',
    tags: ['음운 변동', '비음화', '유음화', '구개음화', '자음군 단순화', 'ㄴ첨가', '거센소리되기'],
    updated: '2026-10-07',
    takeaway: '교체는 음운 수 그대로, 탈락·축약은 하나 줄고, 첨가는 하나 는다. 복합 사례는 일어나는 순서대로 하나씩 적용한다.',
    body: `
<h2>네 가지 유형</h2>
<table>
  <tr><th>유형</th><th>뜻</th><th>음운 개수</th></tr>
  <tr><td>교체</td><td>한 음운이 다른 음운으로 바뀜</td><td>변화 없음</td></tr>
  <tr><td>탈락</td><td>한 음운이 없어짐</td><td>1개 줄어듦</td></tr>
  <tr><td>첨가</td><td>없던 음운이 생김</td><td>1개 늘어남</td></tr>
  <tr><td>축약</td><td>두 음운이 합쳐져 새 음운 하나가 됨</td><td>1개 줄어듦</td></tr>
</table>

<h2>교체</h2>
<table>
  <tr><th>변동</th><th>조건</th><th>예</th></tr>
  <tr><td>음절의 끝소리 규칙</td><td>받침소리는 ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ 7개만 남</td><td>부엌[부억], 옷[옫], 잎[입], 낮[낟]</td></tr>
  <tr><td>비음화</td><td>ㄱ·ㄷ·ㅂ이 ㄴ·ㅁ 앞에서 ㅇ·ㄴ·ㅁ으로<br>ㄹ이 ㅁ·ㅇ 뒤에서 ㄴ으로</td><td>국물[궁물], 닫는[단는], 밥물[밤물]<br>종로[종노], 대통령[대통녕]</td></tr>
  <tr><td>유음화</td><td>ㄴ이 ㄹ 앞이나 뒤에서 ㄹ로</td><td>신라[실라], 칼날[칼랄], 난로[날로]</td></tr>
  <tr><td>구개음화</td><td>받침 ㄷ·ㅌ이 모음 ‘ㅣ’로 시작하는 형식 형태소 앞에서 ㅈ·ㅊ으로</td><td>굳이[구지], 같이[가치], 해돋이[해도지]</td></tr>
  <tr><td>된소리되기</td><td>받침 ㄱ·ㄷ·ㅂ 뒤의 예사소리 등</td><td>국밥[국빱], 옷고름[옫꼬름], 신고[신꼬](신다)</td></tr>
</table>

<h2>탈락</h2>
<table>
  <tr><th>변동</th><th>예</th></tr>
  <tr><td>자음군 단순화 (겹받침 중 하나만 발음)</td><td>닭[닥], 값[갑], 앉다[안따], 넋[넉]</td></tr>
  <tr><td>ㅎ 탈락 (모음 앞 받침 ㅎ)</td><td>좋은[조은], 낳은[나은]</td></tr>
  <tr><td>ㄹ 탈락</td><td>울- + -는 → 우는, 바늘 + 질 → 바느질</td></tr>
  <tr><td>ㅡ 탈락</td><td>쓰- + -어 → 써, 크- + -어서 → 커서</td></tr>
</table>

<h2>첨가와 축약</h2>
<table>
  <tr><th>변동</th><th>조건</th><th>예</th></tr>
  <tr><td>ㄴ 첨가</td><td>합성어·파생어에서 앞말이 자음으로 끝나고 뒷말이 ‘이, 야, 여, 요, 유’로 시작</td><td>솜이불[솜니불], 맨입[맨닙], 한여름[한녀름]</td></tr>
  <tr><td>거센소리되기 (축약)</td><td>ㅎ과 ㄱ·ㄷ·ㅂ·ㅈ이 만나 ㅋ·ㅌ·ㅍ·ㅊ으로</td><td>좋고[조코], 국화[구콰], 축하[추카], 많다[만타]</td></tr>
</table>

<h2>여러 변동이 겹치는 경우</h2>
<div class="example">
  <span class="label">분석 예시</span>
  <ul>
    <li><strong>닭만[당만]</strong>: 자음군 단순화(닭 → 닥) → 비음화(닥만 → 당만). 탈락 1회 + 교체 1회.</li>
    <li><strong>홑이불[혼니불]</strong>: ㄴ 첨가(홑니불) → 음절의 끝소리 규칙(혿니불) → 비음화(혼니불). 첨가 1회 + 교체 2회.</li>
    <li><strong>값지다[갑찌다]</strong>: 자음군 단순화(값 → 갑) + 된소리되기(지 → 찌).</li>
  </ul>
</div>

<div class="callout">
  <h4>헷갈리는 포인트</h4>
  <ul>
    <li><strong>구개음화는 형식 형태소 앞에서만</strong>: ‘밭이랑(밭을 가는 이랑)’처럼 뒤가 실질 형태소면 구개음화가 아니라 ㄴ 첨가가 일어나 [반니랑]이 된다.</li>
    <li><strong>밟다는 예외</strong>: 겹받침 ㄼ은 보통 [ㄹ]로 읽지만(여덟[여덜]), ‘밟-’은 자음 앞에서 [밥]으로 읽는다: 밟다[밥따].</li>
    <li><strong>표기와 발음 구분</strong>: 음운 변동은 발음에서 일어나는 현상이다. ‘국물’은 그대로 적고 [궁물]로 읽는다.</li>
  </ul>
</div>`
  },

  // ───────────── 문학 ─────────────
  {
    id: 'poetry-devices',
    section: 'korean',
    category: 'literature',
    title: '현대시 표현 기법',
    summary: '비유(직유·은유·의인·대유), 강조(반복·영탄·과장), 변화(도치·설의·반어·역설), 공감각, 감정이입과 객관적 상관물을 대표 시구와 함께 구별한다.',
    tags: ['현대시', '역설', '반어', '공감각', '감정이입', '객관적 상관물', '은유'],
    updated: '2026-10-08',
    takeaway: '역설은 표현 자체가 모순이고, 반어는 겉말과 속뜻이 반대다. 감정이입은 객관적 상관물의 한 종류이지만, 모든 객관적 상관물이 감정이입은 아니다.',
    body: `
<h2>비유하기</h2>
<table>
  <tr><th>기법</th><th>방법</th><th>예</th></tr>
  <tr><td>직유</td><td>‘~처럼, ~같이, ~듯’으로 직접 연결</td><td>앵두 <strong>같은</strong> 입술 / 분수<strong>처럼</strong> 흩어지는 푸른 종소리</td></tr>
  <tr><td>은유</td><td>‘A는 B이다’ 꼴로 동일시</td><td>내 마음은 호수요 (김동명, 「내 마음은」)</td></tr>
  <tr><td>의인</td><td>사람이 아닌 것에 사람의 행동·감정 부여</td><td>꽃이 웃는다, 바람이 속삭인다</td></tr>
  <tr><td>대유</td><td>부분이나 관련된 것으로 전체를 나타냄</td><td>사람은 빵만으로 살 수 없다 (빵 → 먹을 것 전체)</td></tr>
</table>

<h2>강조하기</h2>
<ul>
  <li><strong>반복</strong>: 같은 시어·구절을 되풀이해 운율과 의미를 강조</li>
  <li><strong>영탄</strong>: ‘아아’, ‘-어라’, ‘-구나’ 등으로 감정을 터뜨림</li>
  <li><strong>과장</strong>: 실제보다 크거나 작게 표현 — “눈물이 바다를 이루었다”</li>
  <li><strong>점층</strong>: 작은 것에서 큰 것으로 점점 고조</li>
</ul>

<h2>변화 주기</h2>
<table>
  <tr><th>기법</th><th>방법</th><th>예</th></tr>
  <tr><td>도치</td><td>문장 성분의 순서를 바꿈</td><td>나는 아직 나의 봄을 기다리고 있을 테요 / 찬란한 슬픔의 봄을 (김영랑, 「모란이 피기까지는」)</td></tr>
  <tr><td>설의</td><td>답이 뻔한 것을 물어 강조</td><td>누가 이 슬픔을 모르랴</td></tr>
  <tr><td>반어</td><td>겉으로 하는 말과 속뜻이 반대</td><td>죽어도 아니 눈물 흘리우리다 (김소월, 「진달래꽃」) → 사실은 몹시 슬프다</td></tr>
  <tr><td>역설</td><td>표현 자체가 논리적으로 모순되지만 그 속에 진실을 담음</td><td>소리 없는 아우성 (유치환, 「깃발」)<br>님은 갔지마는 나는 님을 보내지 아니하였습니다 (한용운, 「님의 침묵」)</td></tr>
</table>

<h3>반어와 역설 구별</h3>
<table>
  <tr><th></th><th>반어</th><th>역설</th></tr>
  <tr><td>모순이 있는 곳</td><td>표현 ↔ 속마음(상황) 사이</td><td>표현 자체 안</td></tr>
  <tr><td>문장만 떼어 보면</td><td>멀쩡한 문장</td><td>말이 안 되는 문장</td></tr>
  <tr><td>예</td><td>(시험을 망친 친구에게) “참 잘했다”</td><td>“찬란한 슬픔”, “소리 없는 아우성”</td></tr>
</table>

<h2>공감각적 심상</h2>
<p>한 감각을 다른 감각으로 옮겨 표현한다. <strong>‘무엇이 무엇으로’ 바뀌었는지</strong>를 정확히 말할 수 있어야 한다.</p>
<div class="example">
  <span class="label">예시</span>
  <p class="poem">분수처럼 흩어지는 푸른 종소리</p>
  <p>김광균, 「외인촌」. 종소리(청각)를 ‘푸른’, ‘흩어지는’(시각)으로 표현했다 → <strong>청각의 시각화</strong>.</p>
</div>
<p>‘푸른 종소리’처럼 원래 감각이 무엇인지 먼저 찾는다. 단순히 여러 감각이 나열된 것(시각적 심상 + 청각적 심상)은 공감각이 아니다.</p>

<h2>감정이입과 객관적 상관물</h2>
<ul>
  <li><strong>객관적 상관물</strong>: 화자의 감정을 불러일으키거나 드러내는 데 쓰인 사물·풍경 전체</li>
  <li><strong>감정이입</strong>: 화자의 감정을 대상에 옮겨 넣어, 대상이 <em>화자와 같은 감정</em>을 느끼는 것처럼 표현</li>
</ul>
<div class="example">
  <span class="label">예시 · 「황조가」 (유리왕)</span>
  <p class="poem">펄펄 나는 저 꾀꼬리
암수 서로 정답구나
외로울사 이 내 몸은
누구와 함께 돌아갈꼬</p>
  <p>꾀꼬리는 화자의 외로움을 부각하는 객관적 상관물이다. 하지만 꾀꼬리는 <strong>정답고</strong>, 화자는 <strong>외롭다</strong>. 감정이 서로 반대이므로 감정이입은 아니다.</p>
</div>

<div class="callout">
  <h4>헷갈리는 포인트</h4>
  <ul>
    <li>‘찬란한 슬픔의 봄’은 <strong>역설</strong>(찬란함과 슬픔의 모순)이면서, 문장 순서를 바꾼 <strong>도치</strong>이기도 하다. 한 구절에 기법이 여러 개 있을 수 있다.</li>
    <li>의인법과 감정이입은 겹치는 경우가 많지만 같지 않다. 감정이입은 반드시 <strong>화자의 감정</strong>이 대상에 옮겨져야 한다.</li>
  </ul>
</div>`
  },
  {
    id: 'novel-pov',
    section: 'korean',
    category: 'literature',
    title: '소설의 시점과 서술 방식',
    summary: '서술자가 이야기 안에 있는지, 인물의 내면까지 서술하는지에 따라 네 가지 시점을 구별하고, 요약적 제시·장면적 제시, 서술자 개입, 액자식 구성 등 서술 방식을 정리한다.',
    tags: ['소설', '시점', '1인칭 관찰자', '전지적 작가', '서술자', '액자식 구성'],
    updated: '2026-10-09',
    takeaway: '시점은 “서술자가 작품 안에 있나?”와 “누구의 내면을 아나?” 두 질문으로 정해진다.',
    body: `
<h2>네 가지 시점</h2>
<table>
  <tr><th></th><th>인물 내면까지 서술</th><th>겉으로 보이는 것만 서술</th></tr>
  <tr><td><strong>서술자가 작품 안</strong> (‘나’가 등장)</td><td>1인칭 주인공 시점</td><td>1인칭 관찰자 시점</td></tr>
  <tr><td><strong>서술자가 작품 밖</strong></td><td>전지적 작가 시점</td><td>작가 관찰자 시점 (3인칭 관찰자)</td></tr>
</table>

<h2>같은 장면, 네 가지 서술</h2>
<div class="example">
  <span class="label">상황 · 수민이 시험 결과를 받는다</span>
  <table>
    <tr><th>시점</th><th>서술 예</th><th>효과</th></tr>
    <tr><td>1인칭 주인공</td><td>성적표를 받아 든 순간 <strong>나는</strong> 숨이 막혔다. 엄마 얼굴부터 떠올랐다.</td><td>내면 고백이 생생, 친밀감</td></tr>
    <tr><td>1인칭 관찰자</td><td>수민이는 성적표를 한참 들여다보았다. <strong>나는</strong> 그 애가 무슨 생각을 하는지 알 수 없었다.</td><td>주인공 내면을 감춰 궁금증·여운</td></tr>
    <tr><td>작가 관찰자</td><td>수민은 성적표를 접어 가방에 넣었다. 그리고 창밖을 오래 보았다.</td><td>객관적·극적, 독자가 해석</td></tr>
    <tr><td>전지적 작가</td><td>수민은 성적표를 접었다. 실망보다 두려움이 컸다. 담임은 그런 수민을 보며 지난해의 자신을 떠올렸다.</td><td>여러 인물의 내면까지 자유롭게 서술</td></tr>
  </table>
</div>

<h3>대표 작품</h3>
<ul>
  <li><strong>1인칭 주인공</strong>: 이상, 「날개」 — ‘나’가 자신의 무기력한 내면을 고백한다.</li>
  <li><strong>1인칭 관찰자</strong>: 주요섭, 「사랑손님과 어머니」 — 여섯 살 옥희가 어머니와 사랑손님의 관계를 관찰한다. 옥희는 어른들의 감정을 정확히 이해하지 못하지만, 독자는 옥희의 말을 통해 그 감정을 짐작한다.</li>
</ul>

<h2>서술 방식</h2>
<table>
  <tr><th>방식</th><th>특징</th><th>예</th></tr>
  <tr><td>요약적 제시 (말하기)</td><td>서술자가 사건·성격을 직접 요약·설명. 빠른 전개</td><td>그는 십 년 동안 고향에 돌아가지 않았다.</td></tr>
  <tr><td>장면적 제시 (보여 주기)</td><td>대화와 행동을 눈앞에 보이듯 제시. 생동감</td><td>“왜 이제 와?” 어머니가 문을 열며 물었다.</td></tr>
  <tr><td>서술자 개입 (편집자적 논평)</td><td>서술자가 인물·사건에 대한 자신의 판단을 드러냄</td><td>채만식, 「태평천하」의 판소리 사설 같은 논평</td></tr>
</table>

<h2>구성 방식</h2>
<ul>
  <li><strong>순행적 구성</strong>: 시간 순서대로 진행</li>
  <li><strong>역순행적 구성</strong>: 과거 회상 등으로 시간 순서를 바꿈</li>
  <li><strong>액자식 구성</strong>: 바깥 이야기(액자) 안에 안쪽 이야기(핵심)가 들어 있음. 김동인, 「배따라기」가 대표적이다. 안쪽 이야기에 신뢰성을 더하는 효과가 있다.</li>
</ul>

<div class="callout">
  <h4>헷갈리는 포인트</h4>
  <ul>
    <li><strong>서술자 ≠ 작가</strong>: 서술자는 작가가 만든 이야기 속 목소리다. 1인칭 소설의 ‘나’를 작가 본인으로 보면 안 된다.</li>
    <li><strong>믿을 수 없는 서술자</strong>: 「사랑손님과 어머니」처럼 서술자가 상황을 잘못 이해하면, 독자가 서술자보다 더 많이 알게 되어 아이러니와 웃음, 안타까움이 생긴다.</li>
    <li>3인칭 시점이라도 특정 인물의 생각을 서술하면 전지적 성격이 있는 것이다. 시점은 작품 전체에서 주로 쓰인 방식으로 판단한다.</li>
  </ul>
</div>`
  },
  {
    id: 'classical-poetry',
    section: 'korean',
    category: 'literature',
    title: '고전시가 갈래 흐름: 고대가요에서 가사까지',
    summary: '고대가요, 향가, 고려가요, 경기체가, 시조, 악장, 가사, 사설시조의 시대·형식·향유층·대표 작품을 한 흐름으로 정리한다.',
    tags: ['고전시가', '향가', '고려가요', '시조', '가사', '향찰', '사설시조'],
    updated: '2026-10-09',
    takeaway: '향가는 향찰, 고려가요는 3음보와 후렴구, 시조는 3장 6구와 종장 첫 음보 3음절, 가사는 4음보 연속체가 핵심 표지다.',
    body: `
<h2>시대별 흐름</h2>
<table>
  <tr><th>시대</th><th>갈래</th><th>형식·특징</th><th>대표 작품</th></tr>
  <tr><td>고대</td><td>고대가요</td><td>집단 노래에서 개인 서정으로. 한역(漢譯)으로 전함</td><td>「구지가」, 「공무도하가」, 「황조가」</td></tr>
  <tr><td>신라~고려 초</td><td>향가</td><td><strong>향찰</strong> 표기. 4구체·8구체·10구체. 10구체는 9구 첫머리에 감탄사(낙구)</td><td>「서동요」(4구), 「처용가」(8구), 「제망매가」·「찬기파랑가」(10구)</td></tr>
  <tr><td>고려</td><td>고려가요 (속요)</td><td>평민의 노래. <strong>3음보</strong>, 여러 연으로 나뉜 분절체, <strong>후렴구</strong>. 조선 시대에 한글로 정착</td><td>「청산별곡」, 「가시리」, 「동동」</td></tr>
  <tr><td>고려 중기~</td><td>경기체가</td><td>신흥 사대부의 노래. ‘경(景) 긔 엇더하니잇고’ 반복</td><td>「한림별곡」</td></tr>
  <tr><td>고려 말~조선</td><td>시조 (평시조)</td><td><strong>3장 6구 45자 내외, 4음보</strong>. 종장 첫 음보 3음절</td><td>정몽주 「단심가」, 황진이 「동짓달 기나긴 밤을」</td></tr>
  <tr><td>조선 초</td><td>악장</td><td>왕조 창업 송축</td><td>「용비어천가」</td></tr>
  <tr><td>조선</td><td>가사</td><td><strong>4음보 연속체</strong>, 길이 제한 없음. 정격가사는 끝 행이 시조 종장과 비슷</td><td>정극인 「상춘곡」, 정철 「관동별곡」·「사미인곡」</td></tr>
  <tr><td>조선 후기</td><td>사설시조</td><td>평민층. 중장이 길어짐, 해학·풍자</td><td>「두꺼비 파리를 물고」</td></tr>
</table>

<h2>향가와 향찰</h2>
<p><strong>향찰</strong>은 한자의 음(소리)과 훈(뜻)을 빌려 우리말을 문장 전체로 적은 표기법이다. 한글이 없던 시기에 우리말 노래를 기록하려는 시도였다.</p>
<div class="example">
  <span class="label">「제망매가」 (월명사) 읽기 포인트</span>
  <p class="poem">한 가지에 나고
가는 곳 모르온저 (현대어 풀이)</p>
  <p>죽은 누이를 <strong>같은 나뭇가지에서 난 잎</strong>에 비유했다. 같은 부모에게서 났지만 떨어진 잎처럼 서로 다른 곳으로 간다는 뜻이다. 마지막에는 “미타찰에서 만날 나 도 닦아 기다리겠노라”며 슬픔을 <strong>불교적 신앙</strong>으로 극복한다.</p>
</div>

<h2>시조의 형식</h2>
<div class="example">
  <span class="label">황진이, 「동짓달 기나긴 밤을」</span>
  <p class="poem">(초장) 동짓달 / 기나긴 밤을 / 한 허리를 / 버혀 내어
(중장) 춘풍 / 니불 아래 / 서리서리 / 너헛다가
(종장) 어론 님 / 오신 날 밤이어든 / 구뷔구뷔 / 펴리라</p>
  <p>3장 × 4음보. 종장 첫 음보 ‘어론 님’이 <strong>3음절</strong>로 고정되어 있다. 님이 없는 긴 밤의 시간을 잘라 두었다가 님이 오신 밤에 펴겠다는 발상으로, 추상적인 시간을 구체적인 사물처럼 다룬 것이 돋보인다.</p>
</div>

<div class="callout">
  <h4>헷갈리는 포인트</h4>
  <ul>
    <li><strong>음보로 구별</strong>: 고려가요는 주로 3음보, 시조와 가사는 4음보다.</li>
    <li><strong>향유층으로 구별</strong>: 고려 시대 평민은 고려가요, 신흥 사대부는 경기체가를 불렀다. 조선 후기에는 평민이 사설시조의 주요 향유층이 된다.</li>
    <li><strong>시조 vs 가사</strong>: 둘 다 4음보지만, 시조는 3장으로 끝나는 짧은 노래이고 가사는 길이 제한 없이 이어진다.</li>
  </ul>
</div>`
  },

  // ───────────── 어휘·한자어·관용표현 ─────────────
  {
    id: 'four-char-idioms',
    section: 'korean',
    category: 'vocab',
    title: '헷갈리는 사자성어',
    summary: '표기를 틀리기 쉬운 사자성어, 뜻을 거꾸로 알기 쉬운 사자성어, 상황별로 쓰기 좋은 사자성어를 한자와 함께 정리한다.',
    tags: ['사자성어', '한자성어', '타산지석', '혈혈단신', '절체절명', '조삼모사'],
    updated: '2026-10-12',
    takeaway: '타산지석은 남의 ‘하찮은’ 언행에서 배운다는 뜻이라 칭찬에 쓰지 않는다. 표기가 헷갈리면 한자 뜻을 풀어 본다.',
    body: `
<h2>표기를 틀리기 쉬운 사자성어</h2>
<table>
  <tr><th>틀린 표기</th><th>바른 표기</th><th>한자</th><th>뜻</th></tr>
  <tr><td><span class="x">홀홀단신</span></td><td><span class="o">혈혈단신</span></td><td>孑孑單身</td><td>의지할 곳 없는 외로운 홀몸</td></tr>
  <tr><td><span class="x">절대절명</span></td><td><span class="o">절체절명</span></td><td>絶體絶命</td><td>몸도 목숨도 다 된 처지. 피할 수 없는 궁지</td></tr>
  <tr><td><span class="x">산수갑산</span></td><td><span class="o">삼수갑산</span></td><td>三水甲山</td><td>몹시 험하고 외진 곳 (함경도 삼수·갑산)</td></tr>
  <tr><td><span class="x">동거동락</span></td><td><span class="o">동고동락</span></td><td>同苦同樂</td><td>괴로움과 즐거움을 함께함</td></tr>
  <tr><td><span class="x">일사분란</span></td><td><span class="o">일사불란</span></td><td>一絲不亂</td><td>한 올의 실도 흐트러지지 않음. 질서 정연함</td></tr>
  <tr><td><span class="x">풍지박산</span></td><td><span class="o">풍비박산</span></td><td>風飛雹散</td><td>바람에 날리고 우박처럼 흩어짐. 사방으로 흩어짐</td></tr>
  <tr><td><span class="x">유유자작</span></td><td><span class="o">유유자적</span></td><td>悠悠自適</td><td>속세를 떠나 마음 편히 지냄</td></tr>
</table>

<h2>뜻을 착각하기 쉬운 사자성어</h2>
<table>
  <tr><th>성어</th><th>정확한 뜻</th><th>흔한 오용</th></tr>
  <tr><td>타산지석(他山之石)</td><td>다른 산의 거친 돌도 내 옥을 가는 데 쓴다 → 남의 <strong>하찮은 언행이나 잘못</strong>도 나를 닦는 데 도움이 됨</td><td>“선배님의 성공을 타산지석으로 삼겠습니다” (본받을 대상에는 쓰지 않음)</td></tr>
  <tr><td>반면교사(反面敎師)</td><td>남의 잘못을 보고 그렇게 하지 말아야겠다고 깨달음</td><td>본받을 모범으로 오해</td></tr>
  <tr><td>조삼모사(朝三暮四)</td><td>눈앞의 차이만 알고 결과가 같은 것을 모름 / 간사한 꾀로 남을 속임</td><td>“아침저녁으로 바뀐다”(조변석개)와 혼동</td></tr>
  <tr><td>주마간산(走馬看山)</td><td>말을 달리며 산을 봄 → 대충 훑어봄</td><td>빠르고 효율적이라는 칭찬</td></tr>
  <tr><td>결초보은(結草報恩)</td><td>죽어서도 은혜를 잊지 않고 갚음</td><td>—</td></tr>
</table>

<h2>상황별 사자성어</h2>
<table>
  <tr><th>상황</th><th>사자성어</th></tr>
  <tr><td>꾸준한 노력</td><td>우공이산(愚公移山), 마부작침(磨斧作針), 수적천석(水滴穿石)</td></tr>
  <tr><td>복수·재기를 위한 인내</td><td>와신상담(臥薪嘗膽)</td></tr>
  <tr><td>깊은 우정</td><td>관포지교(管鮑之交), 막역지우(莫逆之友), 수어지교(水魚之交)</td></tr>
  <tr><td>위기·고립</td><td>사면초가(四面楚歌), 누란지위(累卵之危), 백척간두(百尺竿頭)</td></tr>
  <tr><td>세상의 큰 변화</td><td>상전벽해(桑田碧海), 격세지감(隔世之感)</td></tr>
  <tr><td>제 논에 물 대기</td><td>아전인수(我田引水), 견강부회(牽强附會)</td></tr>
  <tr><td>은혜에 감사</td><td>각골난망(刻骨難忘), 결초보은(結草報恩)</td></tr>
</table>

<div class="callout">
  <h4>헷갈리는 포인트</h4>
  <ul>
    <li><strong>타산지석 vs 반면교사</strong>: 둘 다 “남을 보고 배운다”는 점은 같지만, 대상이 모범이 아니라 하찮거나 잘못된 것이라는 점이 핵심이다.</li>
    <li>표기가 헷갈리면 한자를 풀어 본다. ‘일사불란’은 실 한 올(一絲)도 어지럽지 않다(不亂)는 뜻이므로 ‘분란’이 들어갈 자리가 없다.</li>
  </ul>
</div>`
  },
  {
    id: 'idioms-proverbs',
    section: 'korean',
    category: 'vocab',
    title: '관용 표현과 속담',
    summary: '신체어를 중심으로 한 관용 표현, 주제별 속담, 속담과 뜻이 통하는 사자성어를 짝지어 정리한다.',
    tags: ['관용 표현', '관용구', '속담', '귀가 얇다', '발이 넓다', '가는 날이 장날'],
    updated: '2026-10-12',
    takeaway: '관용 표현은 단어 뜻의 합이 아니라 새로운 하나의 뜻을 가지므로, 단어를 바꾸면 그 뜻이 사라진다.',
    body: `
<h2>관용 표현이란</h2>
<p>두 개 이상의 단어가 굳어져 <strong>원래 단어의 뜻만으로는 알 수 없는 새로운 뜻</strong>을 나타내는 표현이다. “발이 넓다”는 발 크기와 상관없이 아는 사람이 많다는 뜻이다. 그래서 “다리가 넓다”처럼 단어를 바꾸면 관용 의미가 사라진다.</p>

<h2>신체어 관용 표현</h2>
<table>
  <tr><th>표현</th><th>뜻</th><th>예문</th></tr>
  <tr><td>귀가 얇다</td><td>남의 말을 쉽게 믿는다</td><td>귀가 얇아서 광고만 보면 산다.</td></tr>
  <tr><td>발이 넓다</td><td>아는 사람이 많다</td><td>그는 발이 넓어 어디서든 아는 사람을 만난다.</td></tr>
  <tr><td>손이 크다</td><td>씀씀이가 후하고 크다</td><td>할머니는 손이 커서 음식을 늘 넉넉히 하신다.</td></tr>
  <tr><td>입이 짧다</td><td>음식을 가리거나 적게 먹는다</td><td>아이가 입이 짧아 걱정이다.</td></tr>
  <tr><td>눈에 밟히다</td><td>잊히지 않고 자꾸 떠오른다</td><td>두고 온 강아지가 눈에 밟힌다.</td></tr>
  <tr><td>코가 납작해지다</td><td>몹시 무안을 당해 기가 죽다</td><td>잘난 척하다 코가 납작해졌다.</td></tr>
  <tr><td>간이 크다</td><td>겁이 없고 대담하다</td><td>혼자 밤길을 걷다니 간이 크구나.</td></tr>
  <tr><td>머리를 맞대다</td><td>함께 모여 의논하다</td><td>팀원들이 머리를 맞대고 해결책을 찾았다.</td></tr>
  <tr><td>어깨가 무겁다</td><td>책임감이 크다</td><td>대표를 맡으니 어깨가 무겁다.</td></tr>
  <tr><td>손을 떼다</td><td>하던 일을 그만두다</td><td>그 사업에서 손을 뗐다.</td></tr>
</table>

<h3>그 밖의 관용 표현</h3>
<p><strong>미역국을 먹다</strong>(시험에 떨어지다), <strong>바가지를 쓰다</strong>(제값보다 비싸게 사서 손해를 보다), <strong>시치미를 떼다</strong>(알고도 모르는 체하다), <strong>파리를 날리다</strong>(장사가 안 되어 한가하다), <strong>국수를 먹다</strong>(결혼식을 올리다)</p>

<h2>주제별 속담</h2>
<table>
  <tr><th>주제</th><th>속담</th><th>뜻</th></tr>
  <tr><td>신중함</td><td>돌다리도 두들겨 보고 건너라</td><td>잘 아는 일도 조심해서 하라</td></tr>
  <tr><td>뒤늦은 대처</td><td>소 잃고 외양간 고친다</td><td>일이 잘못된 뒤에야 손을 씀</td></tr>
  <tr><td>가까운 것을 모름</td><td>등잔 밑이 어둡다</td><td>가까이 있는 것을 오히려 잘 모름</td></tr>
  <tr><td>환경의 영향</td><td>서당 개 삼 년이면 풍월을 읊는다</td><td>오래 접하면 자연히 익히게 됨</td></tr>
  <tr><td>무지</td><td>낫 놓고 기역 자도 모른다</td><td>아주 무식함</td></tr>
  <tr><td>실속 없음</td><td>빈 수레가 요란하다</td><td>실속 없는 사람이 더 떠들어 댐</td></tr>
  <tr><td>작은 것이 쌓임</td><td>티끌 모아 태산</td><td>작은 것도 모이면 크게 됨</td></tr>
  <tr><td>말조심</td><td>낮말은 새가 듣고 밤말은 쥐가 듣는다</td><td>아무도 안 듣는 데서도 말을 조심하라</td></tr>
  <tr><td>처지를 잊음</td><td>개구리 올챙이 적 생각 못 한다</td><td>형편이 나아진 뒤 어려웠던 때를 잊음</td></tr>
  <tr><td>공교로움</td><td>가는 날이 장날</td><td>일을 보러 가니 뜻하지 않은 일이 공교롭게 겹침</td></tr>
</table>

<h2>속담과 사자성어 짝</h2>
<table>
  <tr><th>속담</th><th>사자성어</th></tr>
  <tr><td>소 잃고 외양간 고친다</td><td>망우보뢰(亡牛補牢), 사후약방문(死後藥方文)</td></tr>
  <tr><td>등잔 밑이 어둡다</td><td>등하불명(燈下不明)</td></tr>
  <tr><td>티끌 모아 태산</td><td>적소성대(積小成大)</td></tr>
  <tr><td>우물 안 개구리</td><td>정저지와(井底之蛙)</td></tr>
  <tr><td>까마귀 날자 배 떨어진다</td><td>오비이락(烏飛梨落)</td></tr>
</table>

<div class="callout">
  <h4>헷갈리는 포인트</h4>
  <ul>
    <li><strong>가는 날이 장날</strong>은 좋은 일에만 쓰는 말이 아니다. 원래는 볼일을 보러 갔는데 공교롭게 다른 일과 겹쳐 낭패를 본 상황에 많이 쓴다.</li>
    <li><strong>오비이락</strong>은 아무 관계 없이 한 일이 공교롭게 다른 일과 겹쳐 <strong>의심받는 상황</strong>을 말한다.</li>
  </ul>
</div>`
  },
  {
    id: 'pure-korean',
    section: 'korean',
    category: 'vocab',
    title: '알아 두면 좋은 순우리말',
    summary: '자연·날씨, 성격·태도, 모양·움직임, 생활, 수량 단위를 나타내는 순우리말과 자주 틀리는 고유어 표기를 정리한다.',
    tags: ['순우리말', '고유어', '윤슬', '시나브로', '단위', '애먼'],
    updated: '2026-10-12',
    takeaway: '고등어 한 손은 2마리, 조기 한 두름은 20마리, 과일 한 접은 100개, 김 한 톳은 100장이다.',
    body: `
<h2>자연·날씨</h2>
<table>
  <tr><th>말</th><th>뜻</th></tr>
  <tr><td>윤슬</td><td>햇빛이나 달빛에 비치어 반짝이는 잔물결</td></tr>
  <tr><td>여우비</td><td>볕이 난 날 잠깐 뿌리는 비</td></tr>
  <tr><td>는개</td><td>안개보다 조금 굵고 이슬비보다 가는 비</td></tr>
  <tr><td>해거름</td><td>해가 서쪽으로 넘어갈 무렵</td></tr>
  <tr><td>땅거미</td><td>해가 진 뒤 어스레해지는 때</td></tr>
  <tr><td>너울</td><td>바다의 크고 사나운 물결</td></tr>
</table>

<h2>성격·태도</h2>
<table>
  <tr><th>말</th><th>뜻</th><th>예문</th></tr>
  <tr><td>곰살궂다</td><td>성질이 부드럽고 친절하다</td><td>곰살궂게 인사를 건넸다.</td></tr>
  <tr><td>살갑다</td><td>마음씨가 부드럽고 다정하다</td><td>동생이 오늘따라 살갑게 군다.</td></tr>
  <tr><td>데면데면하다</td><td>친밀감 없이 무관심하다</td><td>오랜만에 만났는데 데면데면했다.</td></tr>
  <tr><td>너나들이</td><td>서로 너니 나니 하며 터놓고 지내는 사이</td><td>그들은 어릴 적부터 너나들이하는 사이다.</td></tr>
</table>

<h2>모양·움직임</h2>
<table>
  <tr><th>말</th><th>뜻</th><th>예문</th></tr>
  <tr><td>시나브로</td><td>모르는 사이에 조금씩</td><td>눈이 시나브로 녹았다.</td></tr>
  <tr><td>도담도담</td><td>어린아이가 탈 없이 잘 자라는 모양</td><td>아기가 도담도담 자란다.</td></tr>
  <tr><td>함초롬하다</td><td>젖거나 서려 있는 모습이 가지런하고 차분하다</td><td>이슬에 젖은 꽃잎이 함초롬하다.</td></tr>
</table>

<h2>생활</h2>
<table>
  <tr><th>말</th><th>뜻</th></tr>
  <tr><td>갈무리</td><td>물건을 잘 정리해 간수함 / 일을 처리해 마무리함</td></tr>
  <tr><td>마중물</td><td>펌프에서 물을 끌어올리기 위해 먼저 붓는 물 → 어떤 일을 일으키는 계기</td></tr>
  <tr><td>에누리</td><td>값을 깎는 일 / 실제보다 보태거나 깎아서 말하는 일</td></tr>
  <tr><td>길라잡이</td><td>길을 인도해 주는 사람이나 사물</td></tr>
</table>

<h2>수량 단위</h2>
<table>
  <tr><th>단위</th><th class="num">수량</th><th>대상</th></tr>
  <tr><td>손</td><td class="num">2마리</td><td>고등어 등 (큰 것과 작은 것 한 마리씩)</td></tr>
  <tr><td>두름</td><td class="num">20마리</td><td>조기 등 생선 (10마리씩 두 줄로 엮음)</td></tr>
  <tr><td>쾌</td><td class="num">20마리</td><td>북어</td></tr>
  <tr><td>축</td><td class="num">20마리</td><td>오징어</td></tr>
  <tr><td>접</td><td class="num">100개</td><td>채소, 과일</td></tr>
  <tr><td>톳</td><td class="num">100장</td><td>김</td></tr>
</table>

<h2>자주 틀리는 고유어 표기</h2>
<table>
  <tr><th>틀린 표기</th><th>바른 표기</th><th>설명</th></tr>
  <tr><td><span class="x">엄한 사람</span></td><td><span class="o">애먼 사람</span></td><td>‘애먼’은 일과 관계없이 억울하게 당하는. ‘엄하다’는 엄격하다는 뜻</td></tr>
  <tr><td><span class="x">단촐하다</span></td><td><span class="o">단출하다</span></td><td>식구나 살림이 적어 홀가분하다</td></tr>
  <tr><td><span class="x">안절부절하다</span></td><td><span class="o">안절부절못하다</span></td><td>‘못하다’까지 붙어야 한 단어</td></tr>
  <tr><td><span class="x">삼가하다</span></td><td><span class="o">삼가다</span></td><td>“흡연을 <span class="o">삼가</span> 주십시오”</td></tr>
  <tr><td><span class="x">설레임</span></td><td><span class="o">설렘</span></td><td>기본형 ‘설레다’ → 설렘</td></tr>
</table>

<div class="callout">
  <h4>헷갈리는 포인트</h4>
  <ul>
    <li>‘미리내’(은하수)처럼 널리 알려진 말 중에는 표준어가 아니라 <strong>방언</strong>으로 사전에 실린 것도 있다. 공식 글에서는 사전 표제어를 확인한다.</li>
    <li>‘에누리’는 깎는 것만이 아니라 실제보다 <strong>보태서</strong> 말하는 것도 포함한다. “에누리 없는 사실”은 보태지도 빼지도 않은 사실이다.</li>
  </ul>
</div>`
  },

  // ───────────── 비문학 ─────────────
  {
    id: 'text-structure',
    section: 'korean',
    category: 'nonfiction',
    title: '지문 구조 파악법',
    summary: '문단의 중심 문장을 찾고, 글의 전개 방식과 접속어 신호를 활용해 지문 전체의 구조를 빠르게 파악하는 절차를 정리한다.',
    tags: ['비문학', '독해', '중심 문장', '전개 방식', '접속어', '두괄식'],
    updated: '2026-10-11',
    takeaway: '문단마다 한 줄로 요약하고 문단 사이의 관계(전환, 예시, 대조, 인과)를 표시하면 지문 전체 구조가 보인다.',
    body: `
<h2>문단: 한 문단, 한 생각</h2>
<p>문단은 <strong>중심 문장</strong> 하나와 그것을 뒷받침하는 문장들로 이루어진다. 중심 문장이 어디에 있느냐에 따라 구성이 나뉜다.</p>
<table>
  <tr><th>구성</th><th>중심 내용 위치</th><th>특징</th></tr>
  <tr><td>두괄식</td><td>처음</td><td>설명문에서 가장 흔함</td></tr>
  <tr><td>미괄식</td><td>끝</td><td>근거를 쌓아 결론으로 이끄는 논설문</td></tr>
  <tr><td>양괄식</td><td>처음과 끝</td><td>주장을 강조</td></tr>
  <tr><td>중괄식</td><td>가운데</td><td>앞은 도입, 뒤는 부연</td></tr>
</table>

<h2>전개 방식</h2>
<table>
  <tr><th>방식</th><th>신호 표현</th><th>예</th></tr>
  <tr><td>정의</td><td>A란 ~이다, ~을 말한다</td><td>기회비용이란 선택하지 않은 대안 중 가장 큰 가치를 말한다.</td></tr>
  <tr><td>예시</td><td>예를 들어, 가령, 이를테면</td><td>예를 들어 공부 대신 아르바이트를 하면…</td></tr>
  <tr><td>비교·대조</td><td>~와 마찬가지로 / 반면, 이와 달리</td><td>예금은 원금이 보장되는 반면 주식은…</td></tr>
  <tr><td>분류</td><td>~은 기준에 따라 ~로 나뉜다</td><td>문학은 시, 소설, 희곡, 수필로 나뉜다. (종류 나누기)</td></tr>
  <tr><td>분석</td><td>~은 ~로 구성된다</td><td>꽃은 꽃잎, 꽃받침, 암술, 수술로 이루어진다. (부분 나누기)</td></tr>
  <tr><td>인과</td><td>때문에, 따라서, 그 결과</td><td>금리가 오르자 그 결과 대출이 줄었다.</td></tr>
  <tr><td>과정</td><td>먼저, 다음으로, 마지막으로</td><td>먼저 원료를 녹이고, 다음으로…</td></tr>
</table>

<h2>접속어는 구조의 신호등</h2>
<table>
  <tr><th>관계</th><th>접속어</th><th>읽는 법</th></tr>
  <tr><td>역접</td><td>그러나, 하지만, 그런데</td><td><strong>뒤가 핵심</strong>. 앞은 통념·반론일 때가 많다</td></tr>
  <tr><td>인과·결론</td><td>따라서, 그러므로, 결국</td><td>뒤가 결론. 밑줄 친다</td></tr>
  <tr><td>예시</td><td>예컨대, 예를 들어</td><td><strong>앞이 핵심</strong>. 예시는 빠르게 읽는다</td></tr>
  <tr><td>환언·요약</td><td>즉, 다시 말해, 요컨대</td><td>같은 내용을 쉽게 다시 말함</td></tr>
  <tr><td>전환</td><td>한편, 그런데</td><td>새 화제 시작. 문단 관계 표시</td></tr>
  <tr><td>첨가</td><td>또한, 게다가</td><td>같은 방향의 내용 추가</td></tr>
</table>

<h2>실전 읽기 절차</h2>
<ol>
  <li><strong>첫 문단</strong>에서 화제(무엇에 대한 글인가)와 글이 답하려는 질문을 잡는다.</li>
  <li>문단마다 <strong>한 줄 요약</strong>을 여백에 쓴다.</li>
  <li>문단 사이 관계를 기호로 표시한다: 예시(ex), 대조(↔), 인과(→), 전환(/).</li>
  <li>핵심 개념의 <strong>정의 문장</strong>에 표시한다. 선지는 대부분 정의를 비튼다.</li>
</ol>

<div class="example">
  <span class="label">연습 · 짧은 지문의 구조</span>
  <p>① 사람들은 흔히 공짜 공연은 비용이 없다고 생각한다. ② <strong>그러나</strong> 경제학에서는 공연을 보느라 포기한 시간의 가치, 즉 기회비용도 비용으로 본다. ③ <strong>예를 들어</strong> 그 시간에 시급 1만 원짜리 아르바이트를 할 수 있었다면, 두 시간짜리 공연의 비용은 2만 원이다. ④ <strong>따라서</strong> 합리적 선택을 하려면 눈에 보이는 지출뿐 아니라 기회비용까지 따져야 한다.</p>
  <p>구조: ①통념 → ②반박·핵심 개념(역접) → ③예시 → ④결론(인과). <strong>중심 문장은 ②와 ④</strong>, 양괄식에 가깝다.</p>
</div>

<div class="callout">
  <h4>헷갈리는 포인트</h4>
  <ul>
    <li><strong>분류 vs 분석</strong>: 분류는 같은 종류끼리 묶는 것(문학 → 시, 소설), 분석은 하나를 부분으로 쪼개는 것(꽃 → 꽃잎, 암술)이다. “A는 B의 한 종류인가?”로 확인한다.</li>
    <li>‘그런데’는 역접으로도, 화제 전환으로도 쓰인다. 앞뒤 내용이 반대인지, 단지 화제가 바뀌는지 보고 판단한다.</li>
  </ul>
</div>`
  },
  {
    id: 'argument-reasoning',
    section: 'korean',
    category: 'nonfiction',
    title: '논증과 추론, 논리적 오류',
    summary: '연역·귀납·유추의 차이, 타당성과 건전성, 숨은 전제 찾기, 시험과 일상에서 자주 나오는 논리적 오류 여덟 가지를 예문으로 정리한다.',
    tags: ['논증', '연역', '귀납', '유추', '논리적 오류', '숨은 전제', '성급한 일반화'],
    updated: '2026-10-10',
    takeaway: '연역은 전제가 참이면 결론이 반드시 참이고, 귀납은 결론이 그럴듯할 뿐이다. 오류는 근거와 주장 사이의 연결이 끊어진 곳에서 생긴다.',
    body: `
<h2>논증 = 주장 + 근거</h2>
<p>논증은 근거(전제)를 들어 주장(결론)을 뒷받침하는 것이다. 논증을 평가할 때는 두 가지를 본다: <strong>근거가 참인가</strong>, 그리고 <strong>근거가 주장을 제대로 뒷받침하는가</strong>.</p>

<h2>추론의 세 종류</h2>
<table>
  <tr><th>종류</th><th>방향</th><th>예</th><th>결론의 성격</th></tr>
  <tr><td>연역</td><td>일반 → 개별</td><td>모든 사람은 죽는다. 소크라테스는 사람이다. 그러므로 소크라테스는 죽는다.</td><td>전제가 참이면 <strong>반드시</strong> 참. 새로운 정보는 없음</td></tr>
  <tr><td>귀납</td><td>개별 사례 → 일반</td><td>까마귀 1번, 2번, … 1,000번이 모두 검다. 그러므로 모든 까마귀는 검다.</td><td><strong>개연적</strong>. 반례 하나로 무너질 수 있음. 지식을 확장</td></tr>
  <tr><td>유추</td><td>비슷한 점 → 다른 점도 비슷</td><td>지구에는 물과 대기가 있고 생명체가 있다. 화성에도 물의 흔적이 있으니 생명체가 있었을 것이다.</td><td>개연적. 두 대상이 <strong>본질적으로</strong> 비슷해야 설득력</td></tr>
</table>

<h3>타당성과 건전성</h3>
<div class="example">
  <span class="label">예시</span>
  <p>모든 새는 날 수 있다. 펭귄은 새다. 그러므로 펭귄은 날 수 있다.</p>
  <p>형식은 맞으므로 <strong>타당</strong>하다. 하지만 첫 전제가 거짓이므로 <strong>건전</strong>하지 않다. 좋은 연역 논증은 타당하면서 전제도 모두 참이어야 한다.</p>
</div>

<h2>숨은 전제 찾기</h2>
<p>“그는 영어를 잘하니까 해외 근무에 적합하다.” 이 논증에는 <strong>“영어 능력만 있으면 해외 근무에 적합하다”</strong>는 전제가 숨어 있다. 숨은 전제를 드러내면 논증의 약점(현지 적응력, 업무 능력 등을 무시함)이 보인다. 비판적 읽기 문제의 상당수가 숨은 전제를 묻는다.</p>

<h2>자주 나오는 논리적 오류</h2>
<table>
  <tr><th>오류</th><th>설명</th><th>예</th></tr>
  <tr><td>성급한 일반화</td><td>적은 사례로 전체를 판단</td><td>친구 두 명이 맛없대. 그 식당은 맛없는 곳이야.</td></tr>
  <tr><td>인신공격</td><td>주장 대신 사람을 공격</td><td>그 사람은 이혼했으니 가족 정책에 대한 말은 들을 가치가 없다.</td></tr>
  <tr><td>허수아비 공격</td><td>상대 주장을 왜곡해 놓고 반박</td><td>“게임 시간을 줄이자”에 대해 “게임을 전부 금지하자는 거냐”고 반박</td></tr>
  <tr><td>순환 논증</td><td>결론을 전제로 다시 사용</td><td>이 책은 진리다. 왜냐하면 이 책에 그렇게 쓰여 있기 때문이다.</td></tr>
  <tr><td>잘못된 인과</td><td>앞뒤로 일어났다는 이유로 원인이라 판단</td><td>새 신발을 신은 날 이겼으니 이 신발이 승리의 원인이다.</td></tr>
  <tr><td>흑백 논리</td><td>중간을 무시하고 둘 중 하나만 있다고 봄</td><td>나를 지지하지 않으면 반대하는 것이다.</td></tr>
  <tr><td>대중에 호소</td><td>많은 사람이 믿으니 참이라고 함</td><td>모두 이 영양제를 먹으니 효과가 있는 게 분명하다.</td></tr>
  <tr><td>부적합한 권위에 호소</td><td>관련 없는 분야의 권위를 근거로 삼음</td><td>유명 배우가 추천했으니 이 투자 상품은 안전하다.</td></tr>
</table>

<div class="callout">
  <h4>헷갈리는 포인트</h4>
  <ul>
    <li><strong>귀납이 틀린 추론이라는 뜻은 아니다.</strong> 과학의 대부분이 귀납에 기대고 있다. 다만 결론이 확실하지 않을 뿐이다.</li>
    <li><strong>상관관계 ≠ 인과관계</strong>: 아이스크림 판매량과 물놀이 사고가 함께 늘어나는 것은 ‘더운 날씨’라는 공통 원인 때문이다.</li>
    <li>권위에 호소하는 것 자체가 오류는 아니다. <strong>해당 분야의</strong> 전문가 의견은 좋은 근거가 될 수 있다.</li>
  </ul>
</div>`
  },
  {
    id: 'econ-science-reading',
    section: 'korean',
    category: 'nonfiction',
    title: '경제·과학 지문 독해 전략',
    summary: '경제·과학 지문에서 개념 정의, 변수 사이의 관계, 조건과 예외를 표로 정리하고 <보기>의 새로운 사례에 적용하는 방법을 예시로 익힌다.',
    tags: ['비문학', '경제 지문', '과학 지문', '변수 관계', '보기 적용', '반비례'],
    updated: '2026-10-13',
    takeaway: '경제·과학 지문은 “정의 → 변수 관계(↑↓) → 조건·예외”를 표로 옮겨 두면 <보기> 적용 문제를 기계적으로 풀 수 있다.',
    body: `
<h2>다섯 단계 전략</h2>
<ol>
  <li><strong>개념 정의에 표시</strong>: “A란 ~이다”, “~을 A라고 한다” 문장은 반드시 문제에 나온다.</li>
  <li><strong>변수 관계를 화살표로</strong>: “A가 커지면 B는 작아진다” → A↑ B↓</li>
  <li><strong>조건과 예외 체크</strong>: “단, ~인 경우에는”, “~일 때에만”에 동그라미. 선지는 조건을 지워 함정을 만든다.</li>
  <li><strong>과정에 번호</strong>: 단계가 있는 설명은 ①②③으로 순서를 매긴다.</li>
  <li><strong>&lt;보기&gt;에 대입</strong>: 지문의 원리를 새 사례에 그대로 옮긴다.</li>
</ol>

<h2>경제 지문 예시</h2>
<div class="example">
  <span class="label">지문 발췌 (연습용)</span>
  <p>채권은 정해진 이자를 지급하므로, 시장금리가 오르면 이미 발행된 채권의 매력이 떨어져 가격이 하락한다. 이때 만기가 많이 남은 채권일수록 가격 하락 폭이 크다. 단, 만기까지 보유하는 투자자는 약속된 원금과 이자를 그대로 받는다.</p>
  <table>
    <tr><th>원인</th><th>결과</th><th>조건·예외</th></tr>
    <tr><td>시장금리 ↑</td><td>기존 채권 가격 ↓</td><td>—</td></tr>
    <tr><td>남은 만기 ↑</td><td>가격 변동 폭 ↑</td><td>—</td></tr>
    <tr><td>시장금리 ↑</td><td>만기 보유자 수령액 변화 없음</td><td>만기까지 보유할 때</td></tr>
  </table>
  <p><strong>&lt;보기&gt; 적용</strong>: “갑은 만기 10년 채권을, 을은 만기 1년 채권을 샀다. 이후 시장금리가 올랐다.” → 두 채권 모두 가격이 내리지만 <strong>갑의 채권이 더 크게</strong> 내린다. 만약 선지가 “갑은 만기까지 보유해도 원금 손실을 본다”라고 하면 조건(만기 보유)을 무시한 오답이다.</p>
</div>

<h2>과학 지문 예시</h2>
<div class="example">
  <span class="label">지문 발췌 (연습용)</span>
  <p>온도가 일정할 때 일정량의 기체에 가해지는 압력과 그 부피는 반비례한다(보일 법칙). 즉 압력이 2배가 되면 부피는 1/2이 된다.</p>
  <table>
    <tr><th>조건</th><th>관계</th><th>식</th></tr>
    <tr><td>온도 일정, 기체의 양 일정</td><td>압력 ↑ → 부피 ↓ (반비례)</td><td>압력 × 부피 = 일정</td></tr>
  </table>
  <p><strong>&lt;보기&gt; 적용</strong>: “높은 산에 올라가니 과자 봉지가 부풀었다.” → 산 위는 기압(바깥 압력)이 낮아 봉지 안 기체의 부피가 커졌다. 단, 온도도 함께 바뀌므로 엄밀하게는 ‘온도 일정’ 조건이 근사적으로만 성립한다.</p>
</div>

<h2>선지 함정 유형</h2>
<table>
  <tr><th>함정</th><th>지문</th><th>오답 선지</th></tr>
  <tr><td>인과 뒤집기</td><td>A 때문에 B가 생긴다</td><td>B 때문에 A가 생긴다</td></tr>
  <tr><td>조건 삭제</td><td>온도가 일정할 때 반비례한다</td><td>압력과 부피는 항상 반비례한다</td></tr>
  <tr><td>정도 바꾸기</td><td>대체로, ~하는 경향이 있다</td><td>반드시, 언제나</td></tr>
  <tr><td>증가와 비례 혼동</td><td>A가 늘면 B도 는다</td><td>A가 2배면 B도 2배다</td></tr>
  <tr><td>범위 확대</td><td>일부 기업은</td><td>모든 기업은</td></tr>
</table>

<div class="callout">
  <h4>헷갈리는 포인트</h4>
  <ul>
    <li><strong>“A가 증가하면 B도 증가한다” ≠ 비례</strong>: 비례는 A가 2배일 때 B도 정확히 2배여야 한다. 함께 늘기만 하는 관계는 ‘양의 상관’일 뿐이다.</li>
    <li>배경지식으로 풀지 않는다. 지문에 나온 정보와 조건 안에서만 판단해야 한다. 상식과 지문이 다르면 지문이 기준이다.</li>
  </ul>
</div>`
  }
);

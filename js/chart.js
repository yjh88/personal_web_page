// 외부 라이브러리 없이 SVG로 그리는 선 그래프.
// 사용법: <div class="chart" data-indicator="baseRate"></div> 를 넣고 Chart.mountAll(root) 호출.
// class에 chart-mini를 함께 주면 축 없는 작은 그래프가 된다.
const Chart = (() => {
  const NS = 'http://www.w3.org/2000/svg';

  function node(tag, attrs, parent) {
    const el = document.createElementNS(NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(el);
    return el;
  }

  function format(value, ind, decimals) {
    const d = decimals === undefined ? ind.decimals : decimals;
    return value.toLocaleString('ko-KR', { minimumFractionDigits: d, maximumFractionDigits: d }) + ind.unit;
  }

  // 눈금 간격을 1, 2, 2.5, 5 × 10^n 중 하나로 맞춘다.
  function niceStep(range, count) {
    const raw = range / count;
    const mag = Math.pow(10, Math.floor(Math.log10(raw)));
    const n = raw / mag;
    return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * mag;
  }

  // data-indicator에 "baseRate,fedRate"처럼 쉼표로 여러 지표를 주면 한 그래프에 겹쳐 그린다.
  // 겹치는 지표는 단위와 연도 구간이 같아야 한다.
  function draw(container) {
    const series = container.dataset.indicator.split(',').map(k => INDICATORS[k.trim()]).filter(Boolean);
    if (!series.length) return;
    const ind = series[0];
    const multi = series.length > 1;
    const mini = container.classList.contains('chart-mini');
    const labels = ind.data.map(d => d[0]);
    const n = labels.length;
    container.innerHTML = '';

    if (multi && !mini) {
      const legend = document.createElement('div');
      legend.className = 'chart-legend';
      legend.innerHTML = series.map((s, k) =>
        `<span><i class="swatch s${k}"></i>${View.esc(s.name)}</span>`).join('');
      container.appendChild(legend);
    }

    const width = Math.max(container.clientWidth, 160);
    const height = mini ? 52 : 250;
    const pad = mini ? { t: 6, r: 6, b: 6, l: 6 } : { t: 14, r: 16, b: 30, l: 58 };

    const values = series.flatMap(s => s.data.map(d => d[1]));
    let min = Math.min(...values);
    let max = Math.max(...values);
    let step = 0;
    if (mini) {
      const span = (max - min) || 1;
      min -= span * 0.12;
      max += span * 0.12;
    } else {
      step = niceStep((max - min) || 1, 4);
      min = Math.floor(min / step) * step;
      max = Math.ceil(max / step) * step;
      if (min === max) max = min + step;
    }

    const innerW = width - pad.l - pad.r;
    const innerH = height - pad.t - pad.b;
    const x = i => pad.l + (n === 1 ? innerW / 2 : (i * innerW) / (n - 1));
    const y = v => pad.t + ((max - v) * innerH) / (max - min);

    const svg = node('svg', {
      viewBox: `0 0 ${width} ${height}`,
      width, height,
      role: 'img',
      'aria-label': `${series.map(s => s.name).join(', ')} 추이 그래프 (${labels[0]}~${labels[n - 1]})`
    }, container);

    if (!mini) {
      // 가로 눈금선과 Y축 값
      const tickDecimals = step < 1 ? (step < 0.5 ? 2 : 1) : 0;
      for (let k = 0; min + k * step <= max + step / 1000; k++) {
        const v = +(min + k * step).toFixed(6);
        const yy = y(v);
        node('line', { x1: pad.l, x2: width - pad.r, y1: yy, y2: yy, class: 'grid-line' }, svg);
        const t = node('text', { x: pad.l - 8, y: yy + 4, 'text-anchor': 'end', class: 'axis' }, svg);
        t.textContent = format(v, ind, tickDecimals);
      }
      // X축 라벨: 겹치지 않을 만큼만
      const every = Math.max(1, Math.ceil(n / Math.max(1, Math.floor(innerW / 46))));
      labels.forEach((label, i) => {
        if (i % every !== 0) return;
        const t = node('text', { x: x(i), y: height - 8, 'text-anchor': 'middle', class: 'axis' }, svg);
        t.textContent = label;
      });
    }

    series.forEach((s, k) => {
      const points = s.data.map((d, i) => `${x(i)},${y(d[1])}`).join(' ');
      if (!multi) {
        node('polygon', { points: `${x(0)},${pad.t + innerH} ${points} ${x(n - 1)},${pad.t + innerH}`, class: 'area' }, svg);
      }
      node('polyline', { points, class: `line s${k}` }, svg);
      if (mini) {
        node('circle', { cx: x(n - 1), cy: y(s.data[n - 1][1]), r: 3, class: `focus s${k}` }, svg);
      } else {
        s.data.forEach((d, i) => node('circle', { cx: x(i), cy: y(d[1]), r: 3, class: `dot s${k}` }, svg));
      }
    });
    if (mini) return;

    // 마우스·터치를 올리면 가장 가까운 연도의 값 표시
    const guide = node('line', { y1: pad.t, y2: pad.t + innerH, class: 'guide', visibility: 'hidden' }, svg);
    const foci = series.map((_, k) => node('circle', { r: 5, class: `focus s${k}`, visibility: 'hidden' }, svg));
    const overlay = node('rect', { x: pad.l, y: 0, width: innerW, height, fill: 'transparent' }, svg);
    const tip = document.createElement('div');
    tip.className = 'chart-tip';
    tip.hidden = true;
    container.appendChild(tip);

    function show(evt) {
      const rect = svg.getBoundingClientRect();
      const px = ((evt.clientX - rect.left) * width) / rect.width;
      const i = Math.max(0, Math.min(n - 1, Math.round(((px - pad.l) / innerW) * (n - 1))));
      const cx = x(i);
      guide.setAttribute('x1', cx); guide.setAttribute('x2', cx);
      guide.setAttribute('visibility', 'visible');
      series.forEach((s, k) => {
        foci[k].setAttribute('cx', cx);
        foci[k].setAttribute('cy', y(s.data[i][1]));
        foci[k].setAttribute('visibility', 'visible');
      });
      tip.textContent = multi
        ? `${labels[i]} · ${series.map(s => `${s.short || s.name} ${format(s.data[i][1], s)}`).join(' / ')}`
        : `${labels[i]} · ${format(ind.data[i][1], ind)}`;
      const top = Math.min(...series.map(s => y(s.data[i][1])));
      tip.style.left = `${Math.min(Math.max((cx / width) * 100, 20), 80)}%`;
      const svgTop = rect.top - container.getBoundingClientRect().top; // 범례 높이만큼 아래로
      tip.style.top = `${top + svgTop}px`;
      tip.hidden = false;
    }
    function hide() {
      guide.setAttribute('visibility', 'hidden');
      foci.forEach(f => f.setAttribute('visibility', 'hidden'));
      tip.hidden = true;
    }
    overlay.addEventListener('pointermove', show);
    overlay.addEventListener('pointerdown', show);
    overlay.addEventListener('pointerleave', hide);
  }
  function mountAll(root) {
    (root || document).querySelectorAll('.chart[data-indicator]').forEach(draw);
  }

  // 창 크기가 바뀌면 다시 그린다.
  let timer = null;
  window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(() => mountAll(document), 150);
  });

  return { mountAll, format };
})();

import { REGIONS } from '../data/regions.js';
import { C0, TOOLS } from '../data/countries.js';
import { RELC, REL } from '../data/religions.js';
import { LAYERS, UPDATED, H } from '../data/hotspots.js';
import { AL, REF } from '../data/alliances.js';
import { $, norm, vi, MEM, HS, BY, MAP, st, C, readTheme, on } from './state.js';
import { cv, proj, resize, recenter, pick, flyTo, fitK, setK, getK, stopSpin } from './globe.js';

const P = $('#panel');
const PB = $('#pbody');
const RTL = { g: 'Thuận lợi', m: 'Lẫn lộn', b: 'Thử thách', n: '—' };

export function openPanel(html) {
  PB.innerHTML = html;
  PB.scrollTop = 0;
  P.classList.add('show');
  wire();
  recenter();
}

export function closePanel() {
  P.classList.remove('show');
  st.sel = null;
  st.dirty = true;
  recenter();
}

function chipH(id) {
  const h = HS[id];
  if (!h) return '';
  return `<span class="chip" data-h="${id}"><span class="dot" style="background:${LAYERS[h.t].c}"></span>${h.n}</span>`;
}

function chipC(en) {
  if (!BY[en]) return '';
  return `<span class="chip" data-c="${en}">${vi(en)}</span>`;
}

function chipA(k2, full) {
  const a = AL[k2];
  return `<span class="chip" data-a="${k2}"><span class="dot" style="background:${a.c};opacity:${full ? 1 : 0.45}"></span>${a.n}${full ? '' : ' (đối tác)'}</span>`;
}

function C_(en) {
  return C0[en];
}

function relHTML(en) {
  const r = REL[en];
  if (!r) return '';
  const tot = r.d.reduce((a, b) => a + b[1], 0);
  const bar = r.d
    .map(x => `<span title="${RELC[x[0]][0]} ~${x[1]}%" style="width:${(x[1] / tot) * 100}%;background:${RELC[x[0]][1]}"></span>`)
    .join('');
  const leg = r.d
    .map(x => `<span><i style="background:${RELC[x[0]][1]}"></i>${RELC[x[0]][0]} <b>${x[1] < 1 ? '<1' : Math.round(x[1])}%</b></span>`)
    .join('');
  return `<div class="sec" style="margin-top:4px">TÔN GIÁO <span style="font-weight:400;color:var(--faint)">· ước tính</span></div><div class="rbar">${bar}</div><div class="rleg">${leg}</div>${r.note ? `<div class="rnote">${r.note}</div>` : ''}`;
}

function countryHTML(f, ll) {
  const d = C_(f.en);
  const rg = REGIONS[f.rg] || REGIONS.territory;
  const mem = (MEM[f.en] || []).map(x => chipA(x[0], x[1])).join('');
  const inside = ll
    ? H.filter(h => h.kind === 'poly' && !h.ringOnly && !(h.g.country === f.en) && d3.geoContains(h.geo, ll))
        .map(h => chipH(h.id))
        .join('')
    : '';
  const relH = H.filter(h => (h.rel || []).includes(f.en)).map(h => h.id);
  let s = `<div class="kick">${rg[0]}</div><h1>${f.vi}</h1>`;
  if (d) {
    s += `<div class="stats"><div class="stat"><small>Thủ đô</small><div>${d.cap}</div></div><div class="stat"><small>Dân số</small><div>${d.pop}</div></div><div class="stat"><small>Diện tích</small><div>${d.area}</div></div></div>`;
    s += `<p class="sum">${d.sum}</p>`;
    s += relHTML(f.en);
    s += `<div class="tools" id="tl">`;
    d.t.forEach((t, i) => {
      const r = t[1] ? t[0] : 'n';
      s += `<div class="tool"><div class="em">${['🛡️', '⚓', '🌊', '📏', '💧'][i]}</div><div><div class="nm">${TOOLS[i][0]}</div><div class="sh">${t[1] || 'Không có điểm đáng chú ý'}</div></div><span class="rt ${r}">${RTL[r]}</span>${t[2] ? `<div class="dt">${t[2]}</div>` : ''}</div>`;
    });
    s += `</div>`;
    if (d.t.some(t => t[2])) s += `<button class="lnk" id="moreBtn">Xem thêm ↓</button>`;
    const ids = [...new Set([...(d.hs || []), ...relH])];
    if (ids.length) s += `<div class="sec">ĐIỂM NÓNG LIÊN QUAN</div><div class="chips">${ids.map(chipH).join('')}</div>`;
  } else {
    s += `<p class="txt">${rg[1]}</p>`;
    if (relH.length) s += `<div class="sec">ĐIỂM NÓNG LIÊN QUAN</div><div class="chips">${relH.map(chipH).join('')}</div>`;
  }
  if (inside) s += `<div class="sec">NẰM TRONG VÙNG</div><div class="chips">${inside}</div>`;
  if (mem) s += `<div class="sec">THÀNH VIÊN CÁC KHỐI</div><div class="chips">${mem}</div>`;
  if (!d) s += `<p class="note">Thẻ khu vực. Các nước trọng điểm có phân tích đầy đủ theo 5 công cụ.</p>`;
  return s;
}

function hotHTML(h) {
  const L = LAYERS[h.t];
  let s = `<div class="kick"><span class="sq" style="background:${L.c}"></span>${L.n}</div><h1>${h.n}</h1><p class="txt">${h.tx}</p>`;
  if (h.t === 'conflict') s += `<p class="note">Cập nhật tới ${UPDATED}. Tình hình có thể đã thay đổi.</p>`;
  if (h.id === 'africalines') s += `<p class="note">Đường đỏ hồng trên bản đồ là các đoạn biên giới thẳng tắp dài từ 120 km trở lên.</p>`;
  if (h.id === 'ninedash') s += `<p class="note">Đường trên bản đồ chỉ vẽ ước lượng để minh họa.</p>`;
  if (h.rel && h.rel.length) s += `<div class="sec">LIÊN QUAN</div><div class="chips">${h.rel.map(chipC).join('')}</div>`;
  return s;
}

function wire() {
  PB.querySelectorAll('[data-h]').forEach(
    e =>
      (e.onclick = () => {
        const h = HS[e.dataset.h];
        if (!on(h)) {
          st.on[h.t] = true;
          buildLayers();
        }
        select(h, true);
      })
  );
  PB.querySelectorAll('[data-c]').forEach(e => (e.onclick = () => select(BY[e.dataset.c], true)));
  PB.querySelectorAll('[data-a]').forEach(e => (e.onclick = () => setAl(e.dataset.a)));
  const mb = $('#moreBtn');
  if (mb)
    mb.onclick = () => {
      const tl = $('#tl');
      tl.classList.toggle('more');
      mb.textContent = tl.classList.contains('more') ? 'Thu gọn ↑' : 'Xem thêm ↓';
    };
}

let lastLL = null;

export function select(o, fly) {
  if (!o) return;
  st.sel = o;
  st.dirty = true;
  if (o.en) {
    openPanel(countryHTML(o, fly ? null : lastLL));
    if (fly) flyTo(o.cen, fitK(o));
  } else {
    openPanel(hotHTML(o));
    if (fly) {
      const kk =
        o.kind === 'pt'
          ? Math.max(getK(), 4)
          : o.kind === 'poly'
          ? fitK(o.geo)
          : Math.max(1.4, Math.min(5, fitK({ type: 'MultiPoint', coordinates: o.dense.flat() })));
      flyTo(o.lab, kk);
    }
  }
}

export function buildLayers() {
  const tgl = ([key, L]) =>
    `<div class="tg${st.on[key] ? ' on' : ''}" data-l="${key}"><span class="dot" style="background:${L.c}"></span>${L.n}<span class="sw"></span></div>`;
  $('#lyNat').innerHTML = Object.entries(LAYERS)
    .filter(e => e[1].grp === 'nat')
    .map(tgl)
    .join('');
  $('#lyHot').innerHTML = Object.entries(LAYERS)
    .filter(e => e[1].grp !== 'nat')
    .map(tgl)
    .join('');
  document.querySelectorAll('#lyHot .tg,#lyNat .tg').forEach(
    e =>
      (e.onclick = () => {
        st.on[e.dataset.l] = !st.on[e.dataset.l];
        buildLayers();
        st.dirty = true;
      })
  );
  $('#refs').innerHTML = Object.entries(REF)
    .map(
      ([key, r]) =>
        `<span class="chip${st.ref[key] ? ' on' : ''}" data-r="${key}">${r.c ? `<span class="dot" style="background:${r.c}"></span>` : ''}${r.n}</span>`
    )
    .join('');
  $('#refs')
    .querySelectorAll('.chip')
    .forEach(
      e =>
        (e.onclick = () => {
          st.ref[e.dataset.r] = !st.ref[e.dataset.r];
          buildLayers();
          st.dirty = true;
        })
    );
}

export function setAl(key) {
  const alSel = $('#alSel');
  st.al = key || '';
  alSel.value = st.al;
  st.dirty = true;
  const lg = $('#legend');
  if (!st.al) {
    lg.classList.remove('show');
    return;
  }
  const a = AL[st.al];
  lg.innerHTML = `<div style="display:flex;justify-content:space-between;gap:8px;align-items:baseline"><b>${a.n}</b><button class="lnk" id="alX" style="padding:0">Tắt</button></div><div style="color:var(--muted);font-size:12px">${a.f}</div><div style="margin-top:6px">${a.tx}</div><div class="row"><span><span class="sq" style="background:${a.c}"></span>Thành viên</span>${a.p.length ? `<span><span class="sq" style="background:${a.c};opacity:.42"></span>Đối tác / đặc biệt</span>` : ''}</div>`;
  lg.classList.add('show');
  $('#alX').onclick = () => setAl('');
}

export function initUI() {
  $('#pclose').onclick = () => closePanel();

  let hovT = 0;
  cv.addEventListener('pointermove', e => {
    if (st.drag) return;
    const now = performance.now();
    if (now - hovT < 40) return;
    hovT = now;
    const h = pick(e.clientX, e.clientY);
    if (h !== st.hov) {
      st.hov = h;
      st.dirty = true;
    }
    cv.classList.toggle('hot', !!h);
    const tip = $('#tip');
    if (h) {
      tip.innerHTML = (h.en ? h.vi : h.n) + '<small>' + (h.en ? 'quốc gia' : LAYERS[h.t].n.toLowerCase()) + '</small>';
      tip.style.display = 'block';
      tip.style.left = Math.min(e.clientX + 14, innerWidth - tip.offsetWidth - 8) + 'px';
      tip.style.top = e.clientY + 14 + 'px';
    } else {
      tip.style.display = 'none';
    }
  });

  cv.addEventListener('pointerleave', () => {
    $('#tip').style.display = 'none';
    st.hov = null;
    st.dirty = true;
  });

  cv.addEventListener(
    'click',
    e => {
      const [cx, cy] = proj.translate();
      lastLL = Math.hypot(e.clientX - cx, e.clientY - cy) <= proj.scale() ? proj.invert([e.clientX, e.clientY]) : null;
    },
    true
  );

  cv.addEventListener('click', e => {
    const h = pick(e.clientX, e.clientY);
    stopSpin();
    if (h) select(h, false);
    else closePanel();
  });

  const alSel = $('#alSel');
  Object.entries(AL).forEach(([key, a]) => {
    const o = document.createElement('option');
    o.value = key;
    o.textContent = a.n + ' · ' + a.f.split(' · ')[0];
    alSel.appendChild(o);
  });
  alSel.onchange = () => setAl(alSel.value);

  $('#layBtn').onclick = () => {
    $('#layers').classList.toggle('hide');
    $('#layBtn').classList.toggle('on', !$('#layers').classList.contains('hide'));
  };

  // Search
  const q = $('#q'), sg = $('#sugg');
  let act = 0, res = [];
  const drawS = () => {
    if (!res.length) {
      sg.innerHTML = '<div class="sg"><small>Không tìm thấy</small></div>';
      sg.classList.add('show');
      return;
    }
    sg.innerHTML = res
      .map((x, i) => `<div class="sg${i === act ? ' act' : ''}" data-i="${i}"><span>${x.n}</span><small>${x.sub}</small></div>`)
      .join('');
    sg.classList.add('show');
    sg.querySelectorAll('.sg').forEach(
      e =>
        (e.onmousedown = ev => {
          ev.preventDefault();
          go(res[+e.dataset.i]);
        })
    );
  };
  const go = x => {
    if (!x) return;
    sg.classList.remove('show');
    q.value = '';
    q.blur();
    if (x.t === 'h' && !st.on[x.o.t]) {
      st.on[x.o.t] = true;
      buildLayers();
    }
    select(x.o, true);
  };
  q.oninput = () => {
    const v = norm(q.value.trim());
    if (!v) {
      sg.classList.remove('show');
      return;
    }
    res = MAP.IDX.filter(x => x.s.includes(v))
      .sort(
        (a, b) =>
          (a.s.startsWith(v) ? 0 : 1) - (b.s.startsWith(v) ? 0 : 1) ||
          (b.t === 'c' && C0[b.o.en] ? 1 : 0) - (a.t === 'c' && C0[a.o.en] ? 1 : 0)
      )
      .slice(0, 10);
    act = 0;
    drawS();
  };
  q.onkeydown = e => {
    if (!res.length) return;
    if (e.key === 'ArrowDown') {
      act = Math.min(act + 1, res.length - 1);
      drawS();
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      act = Math.max(act - 1, 0);
      drawS();
      e.preventDefault();
    } else if (e.key === 'Enter') {
      go(res[act]);
    } else if (e.key === 'Escape') {
      sg.classList.remove('show');
      q.blur();
    }
  };
  q.onblur = () => setTimeout(() => sg.classList.remove('show'), 150);

  // Controls
  $('#zin').onclick = () => {
    stopSpin();
    setK(Math.min(14, getK() * 1.6), 350);
  };
  $('#zout').onclick = () => {
    setK(Math.max(0.85, getK() / 1.6), 350);
  };
  $('#home').onclick = () => {
    flyTo([106, 14], 1.15);
  };
  $('#spin').onclick = () => {
    st.spin = !st.spin;
    $('#spin').classList.toggle('on', st.spin);
  };
  $('#theme').onclick = () => {
    const cur = C.dark ? 'dark' : 'light';
    document.documentElement.dataset.theme = cur === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem('geo-theme', document.documentElement.dataset.theme);
    } catch (e) {}
    readTheme();
  };

  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', readTheme);
  addEventListener('resize', resize);
  addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.activeElement !== q) closePanel();
  });

  $('#spin').classList.add('on');
  if (innerWidth < 760) {
    $('#layers').classList.add('hide');
  } else {
    $('#layBtn').classList.add('on');
  }

  buildLayers();
}

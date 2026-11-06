import { NAMES, REGIONS } from '../data/regions.js';
import { C0 } from '../data/countries.js';
import { LAYERS, H } from '../data/hotspots.js';
import { AL, REF } from '../data/alliances.js';
import {
  $,
  norm,
  vi,
  AFR,
  NAT,
  MEM,
  HS,
  BY,
  MAP,
  st,
  C,
  on,
  hc,
  CAPITALS,
  CITIES,
  ISLANDS,
  ADMIN1_META,
  ADM1_BY_ID,
  LAKE_BY_ID
} from './state.js';

export const cv = $('#cv');
export const ctx = cv.getContext('2d');

let W = 0, Hh = 0, R0 = 1, k = 1, dpr = 1;
export const getK = () => k;

export const proj = d3.geoOrthographic().clipAngle(90).precision(0.3).rotate([-106, -14]);
export const pathC = d3.geoPath(proj, ctx);

const splitM = m => m.coordinates.map(c => ({ type: 'LineString', coordinates: c }));

const DETACHED_ADM1 = new Set(['US-HI', 'US-AK', 'RU-KGD', 'CN-HI', 'AU-TAS']);

function enrichFeatures(features) {
  features.forEach(f => {
    f.isCountry = true;
    f.bb = d3.geoBounds(f);
    f.parts = (f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates).map(c => ({
      type: 'Polygon',
      coordinates: c
    }));
    f.en = f.properties.name;
    f.vi = vi(f.en);
    f.rg = (NAMES[f.en] || [, 'territory'])[1];
    f.cen = d3.geoCentroid(f);
    f.ar = d3.geoArea(f);
    let h = 0;
    for (const ch of f.en) h = (h * 31 + ch.charCodeAt(0)) % 997;
    f.j = ((h % 7) - 3) / 100;
  });
}

function straightRuns(lines, minKm) {
  const out = [];
  lines.forEach(l => {
    let i = 0;
    const P = p => {
      const c = Math.cos((p[1] * Math.PI) / 180);
      return [p[0] * 111.32 * c, p[1] * 110.57];
    };
    const ok = (i, j) => {
      const a = P(l[i]), b = P(l[j]);
      const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1;
      for (let k2 = i + 1; k2 < j; k2++) {
        const q = P(l[k2]);
        if (Math.abs((q[0] - a[0]) * dy - (q[1] - a[1]) * dx) / L > 2.5) return false;
      }
      return true;
    };
    while (i < l.length - 1) {
      let j = i + 1;
      while (j + 1 < l.length && ok(i, j + 1)) j++;
      if (d3.geoDistance(l[i], l[j]) * 6371 >= minKm) out.push(l.slice(i, j + 1));
      i = j;
    }
  });
  return out;
}

function ring(c) {
  const f = { type: 'Polygon', coordinates: [[...c, c[0]]] };
  if (d3.geoArea(f) > 2 * Math.PI) f.coordinates[0].reverse();
  return f;
}

function finalizeHotspot(h) {
  const geo = h.geo || { type: 'MultiPolygon', coordinates: [] };
  h.geo = geo;
  delete h.cr;
  delete h.polyCr;
  h.kind = geo.type === 'Point' ? 'pt' : /Polygon/.test(geo.type) ? 'poly' : 'line';
  if (h.kind === 'line') {
    const L = geo.type === 'LineString' ? [geo.coordinates] : geo.coordinates;
    h.dense = L.map(l => {
      if (!l || !l.length) return [];
      const o = [l[0]];
      for (let i = 1; i < l.length; i++) {
        const d = d3.geoDistance(l[i - 1], l[i]);
        const n = Math.max(1, Math.ceil(d / 0.012));
        const it = d3.geoInterpolate(l[i - 1], l[i]);
        for (let k2 = 1; k2 <= n; k2++) o.push(it(k2 / n));
      }
      return o;
    });
    const lg = h.dense.reduce((a, b) => (b.length > a.length ? b : a), []);
    h.lab = lg.length ? lg[Math.floor(lg.length / 2)] : [0, 0];
  } else {
    h.lab = h.kind === 'pt' ? geo.coordinates : d3.geoCentroid(geo);
  }
  HS[h.id] = h;
}

function buildHotspots(worldTopo, objCountries, onlyTopoDependent = false) {
  H.forEach(h => {
    const g = h.g;
    if (onlyTopoDependent && !g.country && !g.mesh && !g.africa) return;
    if (h._fromPhys && !g.country && !g.mesh && !g.africa) return;
    let geo;
    if (g.cap) {
      const RR = 6371, a = g.cap[2] * 1e6;
      geo = d3.geoCircle()
        .center([g.cap[0], g.cap[1]])
        .radius((Math.acos(1 - a / (2 * Math.PI * RR * RR)) * 180) / Math.PI)();
      if (g.ring) h.ringOnly = true;
    } else if (g.polys) {
      geo = { type: 'MultiPolygon', coordinates: g.polys.map(q => ring(q).coordinates) };
    } else if (g.country) {
      geo = BY[g.country] ? BY[g.country].geometry : { type: 'MultiPolygon', coordinates: [] };
    } else if (g.pt) {
      geo = { type: 'Point', coordinates: g.pt };
    } else if (g.line) {
      geo = { type: 'LineString', coordinates: g.line };
    } else if (g.dashed) {
      geo = { type: 'LineString', coordinates: g.dashed };
      h.dash = true;
    } else if (g.lines) {
      geo = { type: 'MultiLineString', coordinates: g.lines };
    } else if (g.poly) {
      geo = ring(g.poly);
    } else if (g.mesh) {
      const pairs = g.mesh;
      geo = topojson.mesh(
        worldTopo,
        objCountries,
        (a, b) =>
          pairs.some(
            p =>
              (a.properties.name === p[0] && b.properties.name === p[1]) ||
              (a.properties.name === p[1] && b.properties.name === p[0])
          )
      );
    } else if (g.africa) {
      const m = topojson.mesh(
        worldTopo,
        objCountries,
        (a, b) => a !== b && AFR.has(a.properties.name) && AFR.has(b.properties.name)
      );
      geo = { type: 'MultiLineString', coordinates: straightRuns(m.coordinates, 120) };
    } else {
      geo = { type: 'MultiPolygon', coordinates: [] };
    }
    h.geo = geo;
    finalizeHotspot(h);
  });
}

export function rebuildSearchIndex() {
  MAP.IDX = [
    ...MAP.F.map(f => ({
      t: 'c',
      n: f.vi,
      s: norm(f.vi + ' ' + f.en + ' ' + ((C0[f.en] && C0[f.en].cap) || '')),
      o: f,
      sub: (REGIONS[f.rg] || ['Quốc gia'])[0]
    })),
    ...MAP.ADM1.map(f => ({
      t: 'adm1',
      n: f.vi,
      s: norm(
        f.vi +
          ' ' +
          f.en +
          ' ' +
          (f.postal || '') +
          ' ' +
          (f.cap || '') +
          ' ' +
          (f.old || []).join(' ') +
          ' ' +
          vi(f.country)
      ),
      o: f,
      sub: 'Bang / Tỉnh · ' + vi(f.country)
    })),
    ...CAPITALS.map(c => ({
      t: 'cap',
      n: c.vi,
      s: norm(c.vi + ' ' + c.en + ' ' + vi(c.country) + ' ' + c.country),
      o: c,
      sub: 'Thủ đô · ' + vi(c.country)
    })),
    ...ISLANDS.map(isl => ({
      t: 'isl',
      n: isl.vi,
      s: norm(isl.vi + ' ' + isl.en + ' ' + vi(isl.country) + ' ' + isl.country),
      o: isl,
      sub: 'Đảo / Vùng · ' + vi(isl.country)
    })),
    ...CITIES.map(ct => ({
      t: 'city',
      n: ct.vi,
      s: norm(ct.vi + ' ' + ct.en + ' ' + vi(ct.country) + ' ' + ct.country),
      o: ct,
      sub: 'Đô thị / Cảng · ' + vi(ct.country)
    })),
    ...H.map(h => ({
      t: 'h',
      n: h.n,
      s: norm(h.n + ' ' + h.id),
      o: h,
      sub: (LAYERS[h.t] && LAYERS[h.t].n) || 'Điểm nóng'
    })),
    ...MAP.LAKES.map(lk => ({
      t: 'lake',
      n: lk.vi || lk.n,
      s: norm((lk.vi || lk.n) + ' ' + (lk.en || '')),
      o: lk,
      sub: 'Hồ & Biển nội địa'
    }))
  ];
}

export function initMapData(w110) {
  const obj110 = w110.objects.countries;
  MAP.F110 = topojson.feature(w110, obj110).features;
  enrichFeatures(MAP.F110);
  MAP.F = MAP.F110;
  MAP.F.forEach(f => (BY[f.en] = f));

  const borders110 = topojson.mesh(w110, obj110, (a, b) => a !== b);
  const coast110 = topojson.mesh(w110, obj110, (a, b) => a === b);
  MAP.B110 = splitM(borders110);
  MAP.K110 = splitM(coast110);
  MAP.B50 = MAP.B110;
  MAP.K50 = MAP.K110;

  buildHotspots(w110, obj110, false);
  rebuildSearchIndex();
  MAP.LC.key = '';
  st.dirty = true;
}

export function upgradeMapData(w50) {
  const obj50 = w50.objects.countries;
  const f50 = topojson.feature(w50, obj50).features;
  enrichFeatures(f50);
  MAP.F = f50;
  Object.keys(BY).forEach(k2 => delete BY[k2]);
  MAP.F.forEach(f => (BY[f.en] = f));

  const borders50 = topojson.mesh(w50, obj50, (a, b) => a !== b);
  const coast50 = topojson.mesh(w50, obj50, (a, b) => a === b);
  MAP.B50 = splitM(borders50);
  MAP.K50 = splitM(coast50);

  buildHotspots(w50, obj50, true);
  if (st.sel && st.sel.isCountry && BY[st.sel.en]) st.sel = BY[st.sel.en];
  if (st.hov && st.hov.isCountry && BY[st.hov.en]) st.hov = BY[st.hov.en];
  rebuildSearchIndex();
  MAP.LC.key = '';
  st.dirty = true;
}

export function upgradePhysicalData(phys) {
  if (!phys) return;
  if (Array.isArray(phys.lakes)) {
    phys.lakes.forEach(lk => {
      lk.kind = 'lake';
      lk.vi = lk.vi || lk.n;
      lk.bb = d3.geoBounds(lk.geo);
      lk.cen = d3.geoCentroid(lk.geo);
      lk.ar = d3.geoArea(lk.geo);
      delete lk.cr;
      LAKE_BY_ID[lk.id] = lk;
    });
    MAP.LAKES = phys.lakes;
  }
  if (phys.geoms) {
    H.forEach(h => {
      const pKey = (h.g && h.g.phys) || h.id;
      const pg = phys.geoms[pKey];
      if (!pg) return;
      if (pg.geo) {
        h.geo = pg.geo;
        h._fromPhys = true;
      }
      if (pg.polyGeo) {
        h.polyGeo = pg.polyGeo;
      }
      finalizeHotspot(h);
    });
  }
  rebuildSearchIndex();
  st.dirty = true;
}

export function upgradeAdmin1Data(admGeo) {
  if (!admGeo || !Array.isArray(admGeo.features)) return;
  admGeo.features.forEach(f => {
    f.isAdm1 = true;
    f.kind = 'adm1';
    f.id = f.properties.id;
    f.bb = d3.geoBounds(f);
    f.cen = f.properties.cen || d3.geoCentroid(f);
    f.ar = f.properties.ar || d3.geoArea(f);
    const meta = ADMIN1_META[f.id] || {};
    f.vi = meta.vi || f.properties.vi || f.properties.name;
    f.en = f.properties.name;
    f.country = f.properties.country;
    f.iso = f.properties.iso;
    f.postal = f.properties.postal || '';
    f.cap = meta.cap || '';
    f.old = meta.old || f.properties.old || [];
    f.tx = meta.tx || '';
    delete f.cr;
    ADM1_BY_ID[f.id] = f;
  });
  MAP.ADM1 = admGeo.features;
  rebuildSearchIndex();
  st.dirty = true;
}

// ---------- viewport & theme helpers
function center() {
  const mob = W < 760;
  const open = document.getElementById('panel').classList.contains('show');
  return [W / 2 - (open && !mob ? 200 : 0), mob ? (open ? Hh * 0.22 : Hh * 0.45) : Hh / 2];
}

export function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = innerWidth;
  Hh = innerHeight;
  cv.width = W * dpr;
  cv.height = Hh * dpr;
  R0 = (Math.min(W, Hh) / 2) * 0.86;
  proj.translate(center()).scale(R0 * k).clipExtent([[-20, -20], [W + 20, Hh + 20]]);
  st.dirty = true;
}

export function recenter() {
  const a = proj.translate(), b = center();
  if (Math.abs(a[0] - b[0]) < 1 && Math.abs(a[1] - b[1]) < 1) return;
  const it = d3.interpolate(a, b);
  d3.select({})
    .transition()
    .duration(320)
    .ease(d3.easeCubicOut)
    .tween('c', () => t => {
      proj.translate(it(t));
      st.dirty = true;
    });
}

function mix(hex, a) {
  const c = d3.color(hex);
  if (!c) return hex;
  c.opacity = a;
  return c + '';
}

function landColor(f) {
  const base = d3.hsl(C.land);
  base.l = Math.max(0, Math.min(1, base.l + f.j));
  if (st.al) {
    const a = AL[st.al];
    const m = (MEM[f.en] || []).find(x => x[0] === st.al);
    if (m) return m[1] ? a.c : mix(a.c, 0.42);
    const g = d3.hsl(C.land);
    g.s *= 0.3;
    return g + '';
  }
  if (st.hl.has(f.en)) return C.dark ? '#7a5a1e' : '#F6D9A0';
  return base + '';
}

// ---------- culling
function prepCull(o, geo) {
  const c = d3.geoCentroid(geo);
  const pts = [];
  (function walk(a) {
    if (!a) return;
    if (typeof a[0] === 'number') pts.push(a);
    else a.forEach(walk);
  })(geo.coordinates || (geo.geometry && geo.geometry.coordinates) || []);
  const st2 = Math.max(1, Math.floor(pts.length / 400));
  let rad = 0;
  for (let i = 0; i < pts.length; i += st2) rad = Math.max(rad, d3.geoDistance(c, pts[i]));
  if (pts.length) rad = Math.max(rad, d3.geoDistance(c, pts[pts.length - 1]));
  o.cc = c;
  o.cr = rad + 0.03;
}

const VIEW = { c: [0, 0], vr: Math.PI / 2 };

export function updView() {
  const [cx, cy] = proj.translate(), r = proj.scale();
  const d = Math.max(Math.hypot(cx, cy), Math.hypot(W - cx, cy), Math.hypot(cx, Hh - cy), Math.hypot(W - cx, Hh - cy));
  VIEW.c = proj.invert([cx, cy]);
  VIEW.vr = Math.asin(Math.min(1, d / r));
}

export function cullOK(o) {
  if (o.cr === undefined) prepCull(o, o.polyGeo || o.geo || o);
  return d3.geoDistance(VIEW.c, o.cc) - o.cr < VIEW.vr + 0.02;
}

export function vh(h) {
  return on(h) && cullOK(h);
}

const tinyPx = f => f.ar * proj.scale() * proj.scale();

export function inBB(f, ll) {
  const b = f.bb;
  if (!b) return true;
  if (ll[1] < b[0][1] - 0.5 || ll[1] > b[1][1] + 0.5) return false;
  if (b[0][0] <= b[1][0]) return ll[0] >= b[0][0] - 0.5 && ll[0] <= b[1][0] + 0.5;
  return ll[0] >= b[0][0] - 0.5 || ll[0] <= b[1][0] + 0.5;
}

function labelCands(cx, cy, r) {
  const F = MAP.F;
  const rot = proj.rotate();
  const key = rot.map(v => v.toFixed(2)).join() + '|' + r.toFixed(1) + '|' + W + 'x' + Hh + '|' + ((st.sel && st.sel.en) || '');
  if (MAP.LC.key === key) return MAP.LC.list;
  const center = proj.invert([cx, cy]);
  if (st.spin) {
    const inV = p => p && p[0] > 8 && p[0] < W - 8 && p[1] > 8 && p[1] < Hh - 8;
    return F.filter(f => f.ar * r * r > 1100 && d3.geoDistance(f.cen, center) < Math.PI / 2 - 0.05)
      .map(f => ({ f, p: proj(f.cen) }))
      .filter(o => inV(o.p))
      .sort((a, b) => b.f.ar - a.f.ar);
  }
  const hits = new Map();
  const step = Math.max(34, Math.min(56, Math.sqrt((W * Hh) / 420)));
  const x0 = Math.max(0, cx - r), x1 = Math.min(W, cx + r), y0 = Math.max(0, cy - r), y1 = Math.min(Hh, cy + r);
  let last = null;
  for (let y = y0 + step / 2; y < y1; y += step) {
    for (let x = x0 + step / 2; x < x1; x += step) {
      if (Math.hypot(x - cx, y - cy) > r * 0.98) continue;
      const ll = proj.invert([x, y]);
      if (!ll) continue;
      let f = last && inBB(last, ll) && d3.geoContains(last, ll) ? last : null;
      if (!f) {
        for (const g of F) {
          if (g.rg === 'antarctic' && k < 2) continue;
          if (inBB(g, ll) && d3.geoContains(g, ll)) {
            f = g;
            break;
          }
        }
      }
      if (f) {
        last = f;
        let e = hits.get(f);
        if (!e) {
          e = { f, pts: [] };
          hits.set(f, e);
        }
        e.pts.push([x, y]);
      }
    }
  }
  const inView = p => p && p[0] > 8 && p[0] < W - 8 && p[1] > 8 && p[1] < Hh - 8;
  const list = [];
  hits.forEach(e => {
    const f = e.f;
    let p = null;
    if (d3.geoDistance(f.cen, center) < Math.PI / 2 - 0.05) {
      const q = proj(f.cen);
      if (inView(q) && e.pts.length > 2) p = q;
    }
    if (!p) {
      const m = [d3.mean(e.pts, d => d[0]), d3.mean(e.pts, d => d[1])];
      p = e.pts.reduce((a, b) => (Math.hypot(b[0] - m[0], b[1] - m[1]) < Math.hypot(a[0] - m[0], a[1] - m[1]) ? b : a));
    }
    list.push({ f, p, w: e.pts.length + (f === st.sel ? 1e6 : 0) });
  });
  F.forEach(f => {
    if (hits.has(f)) return;
    if (d3.geoDistance(f.cen, center) > Math.PI / 2 - 0.05) return;
    const q = proj(f.cen);
    if (!inView(q)) return;
    const tiny = f.ar * r * r < 120;
    if (f.ar * r * r < 500 && f !== st.sel && k < 2.2) return;
    list.push({ f, p: tiny ? [q[0], q[1] - 10] : q, w: 0.5 + (f === st.sel ? 1e6 : 0) });
  });
  list.sort((a, b) => b.w - a.w);
  MAP.LC = { key, list };
  return list;
}

// ---------- render
function sphere() {
  return { type: 'Sphere' };
}

function drawRegPoly(x, y, rad, sides, rotRad = -Math.PI / 2) {
  for (let i = 0; i < sides; i++) {
    const a = rotRad + (i * 2 * Math.PI) / sides;
    const px = x + Math.cos(a) * rad;
    const py = y + Math.sin(a) * rad;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

export function render(now) {
  if (!MAP.F.length) return;
  const lowres = st.moving;
  updView();
  proj.precision(k > 4 ? 1.2 : k > 2 ? 0.8 : 0.5);
  const feats = lowres ? MAP.F110 : MAP.F;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, W, Hh);
  const [cx, cy] = proj.translate(), r = proj.scale();

  // glow
  let g = ctx.createRadialGradient(cx, cy, r * 0.95, cx, cy, r * 1.12);
  g.addColorStop(0, C.glow);
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 1.12, 0, 7);
  ctx.fill();

  // ocean
  g = ctx.createRadialGradient(cx - r * 0.35, cy - r * 0.4, r * 0.1, cx, cy, r);
  g.addColorStop(0, C.ocean1);
  g.addColorStop(1, C.ocean2);
  ctx.fillStyle = g;
  ctx.beginPath();
  pathC(sphere());
  ctx.fill();

  if (st.ref.grat) {
    ctx.beginPath();
    pathC(d3.geoGraticule10());
    ctx.strokeStyle = C.grat;
    ctx.lineWidth = 0.6;
    ctx.stroke();
  }

  // sea hotspot polygons (under land)
  H.forEach(h => {
    if (h.kind !== 'poly' || !h.sea || NAT.has(h.t) || !vh(h)) return;
    const c = LAYERS[h.t].c;
    ctx.beginPath();
    pathC(h.geo);
    ctx.fillStyle = mix(c, st.sel === h ? 0.32 : 0.16);
    ctx.fill();
  });

  // land
  for (const f of feats) {
    if (!cullOK(f)) continue;
    const src = lowres ? BY[f.properties.name] || f : f;
    ctx.beginPath();
    if (lowres) pathC(f);
    else {
      for (const pt of f.parts) if (cullOK(pt)) pathC(pt);
    }
    ctx.fillStyle = landColor(src.en ? src : { en: f.properties.name, j: 0 });
    ctx.fill();
  }

  // selected / hover country
  const sc = st.sel && st.sel.isCountry ? st.sel : null;
  if (sc && !st.al) {
    ctx.beginPath();
    pathC(sc);
    ctx.fillStyle = mix(C.accent, C.dark ? 0.45 : 0.3);
    ctx.fill();
  }

  // land-type hotspot polygons (above land)
  H.forEach(h => {
    if (h.kind !== 'poly' || h.sea || NAT.has(h.t) || !vh(h)) return;
    const c = h.t === 'terrain' ? '#639922' : LAYERS[h.t].c;
    ctx.beginPath();
    pathC(h.geo);
    ctx.fillStyle = mix(c, st.sel === h ? 0.34 : 0.18);
    ctx.fill();
  });

  if (st.hov && st.hov.isCountry && st.hov !== sc) {
    ctx.beginPath();
    pathC(st.hov);
    ctx.fillStyle = C.dark ? 'rgba(255,255,255,.12)' : 'rgba(255,255,255,.45)';
    ctx.fill();
  }

  // nature fills (desert, forest, terrain, mountain clipped to land; ice over ocean+land)
  const natF = {
    desert: C.dark ? ['#8C6D2E', 0.38] : ['#E4C277', 0.42],
    forest: C.dark ? ['#386E38', 0.30] : ['#6FA35A', 0.28],
    terrain: C.dark ? ['#1D9E75', 0.22] : ['#1D9E75', 0.20],
    ice: C.dark ? ['#DDE8F3', 0.85] : ['#FFFFFF', 0.92]
  };

  // 1) Ice features (can extend over sea ice)
  if (st.on.ice) {
    H.forEach(h => {
      if (h.t !== 'ice' || h.kind !== 'poly' || !vh(h) || !cullOK(h)) return;
      ctx.beginPath();
      pathC(h.geo);
      if (h.ringOnly) {
        ctx.setLineDash([5, 4]);
        ctx.strokeStyle = C.dark ? 'rgba(220,235,250,.7)' : 'rgba(90,140,190,.8)';
        ctx.lineWidth = 1.4;
        ctx.stroke();
        ctx.setLineDash([]);
        return;
      }
      const sN = natF.ice;
      ctx.fillStyle = mix(sN[0], st.sel === h ? Math.min(1, sN[1] + 0.25) : sN[1]);
      ctx.fill();
    });
  }

  // 2) Land-clipped biomes (desert, forest, terrain, mountain footprints) so they never bleed into ocean/gulfs
  if (st.on.desert || st.on.forest || st.on.terrain || st.on.mountain) {
    ctx.save();
    ctx.beginPath();
    for (const f of feats) {
      if (!cullOK(f)) continue;
      if (lowres) pathC(f);
      else {
        for (const pt of f.parts) if (cullOK(pt)) pathC(pt);
      }
    }
    ctx.clip();

    H.forEach(h => {
      if (h.kind !== 'poly' || h.t === 'ice' || !NAT.has(h.t) || !vh(h)) return;
      if (!cullOK(h)) return;
      const sN = natF[h.t];
      if (!sN) return;
      ctx.beginPath();
      pathC(h.geo);
      ctx.fillStyle = mix(sN[0], st.sel === h ? Math.min(1, sN[1] + 0.22) : sN[1]);
      ctx.fill();
      if (st.sel === h) {
        ctx.strokeStyle = mix(sN[0], 0.95);
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    });

    if (st.on.mountain) {
      H.forEach(h => {
        if (h.t !== 'mountain' || !h.polyGeo || !vh(h)) return;
        ctx.beginPath();
        pathC(h.polyGeo);
        ctx.fillStyle = C.dark
          ? mix('#A67C46', st.sel === h ? 0.50 : 0.32)
          : mix('#B5894E', st.sel === h ? 0.46 : 0.28);
        ctx.fill();
        if (st.sel === h) {
          ctx.strokeStyle = C.dark ? '#E0BA82' : '#8A6A3A';
          ctx.lineWidth = 1.3;
          ctx.stroke();
        }
      });
    }

    ctx.restore();
  }

  // major lakes (MAP.LAKES)
  if (MAP.LAKES.length) {
    const lakeFill = C.dark ? '#132B47' : '#B5D6F0';
    ctx.beginPath();
    for (const lk of MAP.LAKES) {
      if (lowres && lk.ar < 0.0003) continue;
      if (!cullOK(lk)) continue;
      pathC(lk.geo);
    }
    ctx.fillStyle = lakeFill;
    ctx.fill();
    ctx.strokeStyle = C.coast;
    ctx.lineWidth = 0.55;
    ctx.stroke();

    const activeLake =
      (st.sel && st.sel.kind === 'lake' && st.sel) ||
      (st.hov && st.hov.kind === 'lake' && st.hov);
    if (activeLake && cullOK(activeLake)) {
      ctx.beginPath();
      pathC(activeLake.geo);
      ctx.fillStyle = mix(C.accent, st.sel === activeLake ? 0.48 : 0.25);
      ctx.fill();
      ctx.strokeStyle = C.accent;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }

  // Admin-1 State / Province polygons & borders
  if (st.on.admin1 && MAP.ADM1.length) {
    if (!lowres && k >= 1.45) {
      ctx.beginPath();
      for (const f of MAP.ADM1) {
        if (!cullOK(f)) continue;
        pathC(f);
      }
      ctx.setLineDash([2, 2]);
      ctx.strokeStyle = C.dark ? 'rgba(210,215,230,0.28)' : 'rgba(70,65,55,0.28)';
      ctx.lineWidth = Math.min(1.0, 0.35 + k * 0.1);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    if (st.hov && st.hov.isAdm1 && st.hov !== st.sel && cullOK(st.hov)) {
      ctx.beginPath();
      pathC(st.hov);
      ctx.fillStyle = mix(C.accent, 0.18);
      ctx.fill();
      ctx.strokeStyle = mix(C.accent, 0.7);
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
    if (st.sel && st.sel.isAdm1 && cullOK(st.sel)) {
      ctx.beginPath();
      pathC(st.sel);
      ctx.fillStyle = mix(C.accent, 0.38);
      ctx.fill();
      ctx.strokeStyle = C.accent;
      ctx.lineWidth = 1.8;
      ctx.stroke();
    }
  }

  // country borders & coastlines
  ctx.beginPath();
  for (const l of lowres ? MAP.B110 : MAP.B50) if (cullOK(l)) pathC(l);
  ctx.strokeStyle = C.border;
  ctx.lineWidth = Math.min(1.4, 0.5 + k * 0.12);
  ctx.stroke();

  ctx.beginPath();
  for (const l of lowres ? MAP.K110 : MAP.K50) if (cullOK(l)) pathC(l);
  ctx.strokeStyle = C.coast;
  ctx.lineWidth = 0.6;
  ctx.stroke();

  if (sc) {
    ctx.beginPath();
    pathC(sc);
    ctx.strokeStyle = st.al ? (C.dark ? '#fff' : '#1F1E1B') : C.accent;
    ctx.lineWidth = st.al ? 2.2 : 1.6;
    ctx.stroke();
  }

  // hotspot poly outlines
  H.forEach(h => {
    if (h.kind !== 'poly' || NAT.has(h.t) || !vh(h)) return;
    ctx.beginPath();
    pathC(h.geo);
    ctx.setLineDash([4, 3]);
    ctx.strokeStyle = mix(LAYERS[h.t].c, 0.9);
    ctx.lineWidth = st.sel === h ? 2 : 1.1;
    ctx.stroke();
    ctx.setLineDash([]);
  });

  // reference lines
  const refLine = (lat, c, dash) => {
    ctx.beginPath();
    pathC({ type: 'LineString', coordinates: d3.range(-180, 181, 2).map(x => [x, lat]) });
    ctx.setLineDash(dash || []);
    ctx.strokeStyle = c;
    ctx.lineWidth = 1.3;
    ctx.stroke();
    ctx.setLineDash([]);
  };
  if (st.ref.eq) refLine(0, REF.eq.c);
  if (st.ref.trop) REF.trop.lats.forEach(l => refLine(l, REF.trop.c, [6, 4]));
  if (st.ref.polar) REF.polar.lats.forEach(l => refLine(l, REF.polar.c, [6, 4]));
  if (st.ref.pm) {
    ctx.beginPath();
    pathC({ type: 'LineString', coordinates: d3.range(-90, 91, 2).map(y => [0, y]) });
    ctx.strokeStyle = REF.pm.c;
    ctx.lineWidth = 1.3;
    ctx.stroke();
  }

  // hotspot lines
  H.forEach(h => {
    if (h.kind !== 'line' || !vh(h)) return;
    const c = hc(h);
    const act = st.sel === h || st.hov === h;
    ctx.beginPath();
    pathC(h.geo);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    if (h.t === 'route') {
      ctx.setLineDash([7, 5]);
      ctx.lineDashOffset = -(now / 60) % 12;
    } else if (h.t === 'pipeline') {
      ctx.setLineDash([8, 3, 2, 3]);
    } else if (h.t === 'corridor') {
      ctx.setLineDash([5, 3]);
    } else if (h.t === 'chain') {
      ctx.setLineDash([6, 4]);
    } else if (h.t === 'mountain' || h.mtn) {
      ctx.setLineDash([2, 5]);
    } else if (h.dash) {
      ctx.setLineDash([8, 6]);
    }
    ctx.strokeStyle = act ? c : mix(c, 0.85);
    const baseW =
      h.t === 'mountain' || h.mtn
        ? 3.0
        : h.t === 'river' || h.riv
        ? k > 2.5
          ? 2.0
          : 1.5
        : h.t === 'border'
        ? 2.4
        : h.t === 'pipeline' || h.t === 'corridor'
        ? 2.2
        : 2.0;
    ctx.lineWidth = baseW + (act ? 1.5 : 0);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.lineDashOffset = 0;
  });

  // dots for tiny countries
  if (!lowres && k >= 1.4) {
    const cen0 = proj.invert(proj.translate());
    for (const f of MAP.F) {
      if (f.rg === 'antarctic') continue;
      const px = tinyPx(f);
      if (px >= 120) continue;
      if (d3.geoDistance(f.cen, cen0) > Math.PI / 2 - 0.03) continue;
      const q = proj(f.cen);
      if (q[0] < 0 || q[0] > W || q[1] < 0 || q[1] > Hh) continue;
      ctx.beginPath();
      ctx.arc(q[0], q[1], f === sc || f === st.hov ? 4.2 : 2.9, 0, 7);
      ctx.fillStyle = f === sc ? C.accent : C.dark ? '#C9C4B8' : '#6B6455';
      ctx.fill();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = C.dark ? '#0A0E15' : '#fff';
      ctx.stroke();
    }
  }

  // collision-free label placement helper
  const centerPt = proj.invert([cx, cy]);
  const placed = [];
  const placedNames = new Set();
  const baseKey = s =>
    norm(s)
      .replace(/\(.*?\)/g, '')
      .replace(/\b(tp\.?|thanh pho|tinh|quan dao|dao|vung|bang|dac khu)\b/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  const vis = p => d3.geoDistance(p, centerPt) < 1.45;
  const tryPlace = (box, nameKey) => {
    if (nameKey && placedNames.has(nameKey)) return false;
    if (box[0] < 2 || box[0] + box[2] > W - 2 || box[1] < 2 || box[1] + box[3] > Hh - 2) return false;
    if (placed.some(b => !(box[0] > b[0] + b[2] || box[0] + box[2] < b[0] || box[1] > b[1] + b[3] || box[1] + box[3] < b[1])))
      return false;
    placed.push(box);
    if (nameKey) placedNames.add(nameKey);
    return true;
  };

  const pushIcon = (q, r2 = 4) => {
    if (q) placed.push([q[0] - r2, q[1] - r2, r2 * 2, r2 * 2]);
  };

  // 1. Capitals (st.on.capitals) — highest priority markers & labels
  if (st.on.capitals) {
    ctx.font = '600 10.5px "Be Vietnam Pro",system-ui,sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    for (const cap of CAPITALS) {
      const act = st.sel === cap || st.hov === cap;
      if (!act && (cap.rank === 1 ? k < 1.05 : cap.rank === 2 ? k < 1.55 : k < 2.2)) continue;
      if (d3.geoDistance(cap.pt, centerPt) > Math.PI / 2 - 0.02) continue;
      const q = proj(cap.pt);
      if (!q) continue;
      const rad = act ? 5.2 : cap.rank === 1 ? 3.9 : 3.2;
      ctx.beginPath();
      ctx.arc(q[0], q[1], rad, 0, 7);
      ctx.fillStyle = C.dark ? '#0A0E15' : '#fff';
      ctx.fill();
      ctx.lineWidth = 1.4;
      ctx.strokeStyle = '#E8590C';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(q[0], q[1], act ? 2.5 : 1.8, 0, 7);
      ctx.fillStyle = '#E8590C';
      ctx.fill();

      if (act || (!lowres && (cap.rank === 1 ? k >= 1.35 : cap.rank === 2 ? k >= 1.85 : k >= 2.5))) {
        const nk = baseKey(cap.vi);
        const w = ctx.measureText(cap.vi).width + 6, hh = 13;
        const box = [q[0] + 7, q[1] - hh / 2, w, hh];
        if (act || tryPlace(box, nk)) {
          if (act) {
            placed.push(box);
            if (nk) placedNames.add(nk);
          }
          ctx.lineWidth = 2.8;
          ctx.strokeStyle = C['label-halo'];
          ctx.strokeText(cap.vi, q[0] + 7, q[1]);
          ctx.fillStyle = C.dark ? '#FDBA74' : '#C2410C';
          ctx.fillText(cap.vi, q[0] + 7, q[1]);
        }
      }
      pushIcon(q, 4);
    }
  }

  // 2. Strategic Islands (st.on.islands)
  if (st.on.islands) {
    ctx.font = '500 10.5px "Be Vietnam Pro",system-ui,sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    for (const isl of ISLANDS) {
      const act = st.sel === isl || st.hov === isl;
      if (!act && (isl.rank === 1 ? k < 1.15 : k < 1.85)) continue;
      if (d3.geoDistance(isl.pt, centerPt) > Math.PI / 2 - 0.02) continue;
      const q = proj(isl.pt);
      if (!q) continue;
      const s = act ? 5.2 : 3.4;
      ctx.beginPath();
      ctx.moveTo(q[0], q[1] - s);
      ctx.lineTo(q[0] + s, q[1]);
      ctx.lineTo(q[0], q[1] + s);
      ctx.lineTo(q[0] - s, q[1]);
      ctx.closePath();
      ctx.fillStyle = '#0D9488';
      ctx.fill();
      ctx.lineWidth = 1.3;
      ctx.strokeStyle = C.dark ? '#0A0E15' : '#fff';
      ctx.stroke();

      if (act || (!lowres && (isl.rank === 1 ? k >= 1.5 : k >= 2.2))) {
        const nk = baseKey(isl.vi);
        const w = ctx.measureText(isl.vi).width + 6, hh = 13;
        const box = [q[0] + 7, q[1] - hh / 2, w, hh];
        if (act || tryPlace(box, nk)) {
          if (act) {
            placed.push(box);
            if (nk) placedNames.add(nk);
          }
          ctx.lineWidth = 2.6;
          ctx.strokeStyle = C['label-halo'];
          ctx.strokeText(isl.vi, q[0] + 7, q[1]);
          ctx.fillStyle = C.dark ? '#5EEAD4' : '#0F766E';
          ctx.fillText(isl.vi, q[0] + 7, q[1]);
        }
      }
      pushIcon(q, 4);
    }
  }

  // 3. Strategic Cities & Ports (st.on.cities)
  if (st.on.cities) {
    ctx.font = '500 10.5px "Be Vietnam Pro",system-ui,sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    for (const ct of CITIES) {
      const act = st.sel === ct || st.hov === ct;
      if (!act && (ct.rank === 1 ? k < 1.3 : k < 1.9)) continue;
      if (d3.geoDistance(ct.pt, centerPt) > Math.PI / 2 - 0.02) continue;
      const q = proj(ct.pt);
      if (!q) continue;
      const s = act ? 3.3 : 2.5;
      ctx.beginPath();
      ctx.rect(q[0] - s, q[1] - s, s * 2, s * 2);
      ctx.fillStyle = '#2563EB';
      ctx.fill();
      ctx.lineWidth = 1.3;
      ctx.strokeStyle = C.dark ? '#0A0E15' : '#fff';
      ctx.stroke();

      if (act || (!lowres && (ct.rank === 1 ? k >= 1.65 : k >= 2.3))) {
        const nk = baseKey(ct.vi);
        const w = ctx.measureText(ct.vi).width + 6, hh = 13;
        const box = [q[0] + 7, q[1] - hh / 2, w, hh];
        if (act || tryPlace(box, nk)) {
          if (act) {
            placed.push(box);
            if (nk) placedNames.add(nk);
          }
          ctx.lineWidth = 2.6;
          ctx.strokeStyle = C['label-halo'];
          ctx.strokeText(ct.vi, q[0] + 7, q[1]);
          ctx.fillStyle = C.dark ? '#93C5FD' : '#1D4ED8';
          ctx.fillText(ct.vi, q[0] + 7, q[1]);
        }
      }
      pushIcon(q, 3.5);
    }
  }

  // 4. Reserve hotspot point icons
  H.forEach(h => {
    if (h.kind !== 'pt' || !vh(h)) return;
    const p = h.geo.coordinates;
    if (!vis(p) || d3.geoDistance(p, centerPt) > Math.PI / 2 - 0.02) return;
    pushIcon(proj(p), 5);
  });

  // 5. Country labels
  if (st.ref.labels && !lowres) {
    ctx.font = '500 11.5px "Be Vietnam Pro",system-ui,sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const cand = labelCands(cx, cy, r);
    for (const o of cand) {
      const f = o.f, p = o.p;
      const nk = baseKey(f.vi);
      const w = ctx.measureText(f.vi).width + 6, hh = 15;
      let py = p[1];
      let box = [p[0] - w / 2, py - hh / 2, w, hh];
      if (!tryPlace(box, nk)) {
        py = p[1] - 12;
        box = [p[0] - w / 2, py - hh / 2, w, hh];
        if (!tryPlace(box, nk)) continue;
      }
      ctx.lineWidth = 3;
      ctx.strokeStyle = C['label-halo'];
      ctx.strokeText(f.vi, p[0], py);
      ctx.fillStyle = C.label;
      ctx.fillText(f.vi, p[0], py);
    }
  }

  // 6. Admin-1 labels (when zoomed in, placed after point markers to avoid overlapping icons/capital names)
  if (st.on.admin1 && !lowres && k >= 2.0 && MAP.ADM1.length) {
    ctx.font = 'italic 500 10.5px "Be Vietnam Pro",system-ui,sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (const f of MAP.ADM1) {
      const act = st.sel === f || st.hov === f;
      const minPx = f.iso === 'VNM' ? 90 : 450;
      if (!act && f.ar * r * r < minPx) continue;
      if (d3.geoDistance(f.cen, centerPt) > Math.PI / 2 - 0.04) continue;
      const p = proj(f.cen);
      if (!p) continue;
      const nk = baseKey(f.vi);
      if (nk && placedNames.has(nk) && !act) continue;
      const w = ctx.measureText(f.vi).width + 6, hh = 13;
      let py = p[1];
      let box = [p[0] - w / 2, py - hh / 2, w, hh];
      if (!act) {
        if (!tryPlace(box, nk)) {
          py = p[1] - 11;
          box = [p[0] - w / 2, py - hh / 2, w, hh];
          if (!tryPlace(box, nk)) continue;
        }
      } else {
        if (nk && placedNames.has(nk)) py = p[1] - 12;
        placed.push([p[0] - w / 2, py - hh / 2, w, hh]);
        if (nk) placedNames.add(nk);
      }
      ctx.lineWidth = 2.6;
      ctx.strokeStyle = C['label-halo'];
      ctx.strokeText(f.vi, p[0], py);
      ctx.fillStyle = act ? C.accent : C.dark ? 'rgba(215,220,235,0.82)' : 'rgba(65,60,52,0.82)';
      ctx.fillText(f.vi, p[0], py);
    }
  }

  // hotspot points
  H.forEach(h => {
    if (h.kind !== 'pt' || !vh(h)) return;
    const p = h.geo.coordinates;
    if (!vis(p) || d3.geoDistance(p, centerPt) > Math.PI / 2 - 0.02) return;
    const q = proj(p);
    const c = LAYERS[h.t].c;
    const act = st.sel === h || st.hov === h;
    if (h.t === 'conflict') {
      const ph = (now / 1400) % 1;
      ctx.beginPath();
      ctx.arc(q[0], q[1], 6 + ph * 14, 0, 7);
      ctx.strokeStyle = mix(c, 0.7 * (1 - ph));
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    ctx.beginPath();
    if (h.t === 'strait') {
      const s = act ? 8 : 6;
      ctx.moveTo(q[0], q[1] - s);
      ctx.lineTo(q[0] + s, q[1]);
      ctx.lineTo(q[0], q[1] + s);
      ctx.lineTo(q[0] - s, q[1]);
      ctx.closePath();
    } else if (h.t === 'base') {
      drawRegPoly(q[0], q[1], act ? 7.5 : 6, 5);
    } else if (h.t === 'resource') {
      drawRegPoly(q[0], q[1], act ? 7.2 : 5.8, 6, 0);
    } else {
      ctx.arc(q[0], q[1], act ? 7 : 5.5, 0, 7);
    }
    ctx.fillStyle = c;
    ctx.fill();
    ctx.lineWidth = 1.8;
    ctx.strokeStyle = C.dark ? '#0A0E15' : '#fff';
    ctx.stroke();
    if (act || (!lowres && k >= 2.2)) {
      ctx.font = '600 11px "Be Vietnam Pro",system-ui,sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      const w = ctx.measureText(h.n).width + 6, hh = 14;
      const box = [q[0] + 9, q[1] - hh / 2, w, hh];
      if (act || tryPlace(box)) {
        if (act) placed.push(box);
        ctx.lineWidth = 3;
        ctx.strokeStyle = C['label-halo'];
        ctx.strokeText(h.n, q[0] + 10, q[1]);
        ctx.fillStyle = C.dark ? d3.color(c).brighter(1.2) + '' : d3.color(c).darker(0.6) + '';
        ctx.fillText(h.n, q[0] + 10, q[1]);
      }
    }
  });

  // labels for hovered/selected line/poly hotspots or lakes
  [st.sel, st.hov].forEach(h => {
    if (!h) return;
    if (h.kind === 'lake') {
      if (!vis(h.cen)) return;
      const q = proj(h.cen);
      ctx.font = '600 12px "Be Vietnam Pro",system-ui,sans-serif';
      ctx.textAlign = 'center';
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = C['label-halo'];
      ctx.strokeText(h.vi || h.n, q[0], q[1] - 8);
      ctx.fillStyle = C.label;
      ctx.fillText(h.vi || h.n, q[0], q[1] - 8);
      return;
    }
    if (!h.id || !h.t || h.kind === 'pt' || !vh(h)) return;
    if (!vis(h.lab)) return;
    const q = proj(h.lab);
    ctx.font = '600 12px "Be Vietnam Pro",system-ui,sans-serif';
    ctx.textAlign = 'center';
    ctx.lineWidth = 3.5;
    ctx.strokeStyle = C['label-halo'];
    ctx.strokeText(h.n, q[0], q[1] - 10);
    ctx.fillStyle = C.label;
    ctx.fillText(h.n, q[0], q[1] - 10);
  });

  // shading
  g = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.35, r * 0.2, cx, cy, r * 1.02);
  g.addColorStop(0, 'rgba(255,255,255,' + (C.dark ? 0.04 : 0.1) + ')');
  g.addColorStop(0.7, 'rgba(0,0,0,0)');
  g.addColorStop(1, C.shade);
  ctx.fillStyle = g;
  ctx.beginPath();
  pathC(sphere());
  ctx.fill();
}

function needsAnim() {
  return st.spin || st.on.conflict || st.on.route;
}

export function loop(now) {
  if (st.spin && !st.drag) {
    const r = proj.rotate();
    proj.rotate([r[0] + 0.06, r[1], r[2]]);
    st.dirty = true;
  }
  if (st.dirty || needsAnim()) {
    render(now);
    st.dirty = false;
  }
  if (st.moving && now - st.lastMove > 160) {
    st.moving = false;
    st.dirty = true;
  }
  requestAnimationFrame(loop);
}

// ---------- zoom & hit-testing
const zoom = d3.zoom()
  .scaleExtent([0.85, 14])
  .clickDistance(5)
  .on('start', e => {
    if (e.sourceEvent) {
      st.drag = true;
      stopSpin();
    }
  })
  .on('zoom', e => {
    const t = e.transform;
    if (e.sourceEvent) {
      const dx = t.x - (st.px ?? t.x), dy = t.y - (st.py ?? t.y);
      if (t.k === k && (dx || dy)) {
        const r = proj.rotate(), s = 75 / (R0 * k);
        proj.rotate([r[0] + dx * s, Math.max(-89, Math.min(89, r[1] - dy * s)), 0]);
      }
    }
    document.getElementById('tip').style.display = 'none';
    k = t.k;
    proj.scale(R0 * k);
    st.px = t.x;
    st.py = t.y;
    st.moving = true;
    st.lastMove = performance.now();
    st.dirty = true;
  })
  .on('end', () => {
    st.drag = false;
  });

const sel = d3.select(cv).call(zoom).on('dblclick.zoom', null);

export function stopSpin() {
  if (st.spin) {
    st.spin = false;
    $('#spin').classList.remove('on');
  }
  hideHint();
}

export function hideHint() {
  $('#hint').style.opacity = 0;
}

export function setK(nk, dur = 500) {
  sel.transition().duration(dur).call(zoom.scaleTo, nk);
}

function segD(px, py, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const L = dx * dx + dy * dy;
  let t = L ? ((px - a[0]) * dx + (py - a[1]) * dy) / L : 0;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (a[0] + t * dx), py - (a[1] + t * dy));
}

export function pick(mx, my) {
  const [cx, cy] = proj.translate(), r = proj.scale();
  if (Math.hypot(mx - cx, my - cy) > r) return null;
  const ll = proj.invert([mx, my]);
  if (!ll) return null;
  const centerPt = proj.invert([cx, cy]);

  // 1. Active Hotspot Points (within 10px)
  let best = null, bd = 10;
  H.forEach(h => {
    if (h.kind !== 'pt' || !vh(h)) return;
    const p = h.geo.coordinates;
    if (d3.geoDistance(p, centerPt) > Math.PI / 2) return;
    const q = proj(p);
    const d = Math.hypot(q[0] - mx, q[1] - my);
    if (d < bd) {
      bd = d;
      best = h;
    }
  });
  if (best) return best;

  // 2. Visible Islands, Capitals, Cities (within 9px)
  bd = 9;
  const checkPt = o => {
    if (d3.geoDistance(o.pt, centerPt) > Math.PI / 2 - 0.02) return;
    const q = proj(o.pt);
    const d = Math.hypot(q[0] - mx, q[1] - my);
    if (d < bd) {
      bd = d;
      best = o;
    }
  };
  if (st.on.islands) {
    for (const isl of ISLANDS) {
      if (st.sel === isl || (isl.rank === 1 ? k >= 1.15 : k >= 1.85)) checkPt(isl);
    }
  }
  if (st.on.capitals) {
    for (const cap of CAPITALS) {
      if (st.sel === cap || (cap.rank === 1 ? k >= 1.05 : cap.rank === 2 ? k >= 1.55 : k >= 2.2)) checkPt(cap);
    }
  }
  if (st.on.cities) {
    for (const ct of CITIES) {
      if (st.sel === ct || (ct.rank === 1 ? k >= 1.3 : k >= 1.9)) checkPt(ct);
    }
  }
  if (best) return best;

  // 3. Active Hotspot Lines (within 7px)
  bd = 7;
  H.forEach(h => {
    if (h.kind !== 'line' || !vh(h)) return;
    h.dense.forEach(l => {
      let prev = null;
      for (const p of l) {
        if (d3.geoDistance(p, centerPt) > Math.PI / 2 - 0.01) {
          prev = null;
          continue;
        }
        const q = proj(p);
        if (prev) {
          const d = segD(mx, my, prev, q);
          if (d < bd) {
            bd = d;
            best = h;
          }
        }
        prev = q;
      }
    });
  });
  if (best) return best;

  // 4. Tiny Countries (k >= 1.4, within 9px)
  if (k >= 1.4) {
    let bt = null, bdt = 9;
    for (const f of MAP.F) {
      if (tinyPx(f) >= 120 || d3.geoDistance(f.cen, centerPt) > Math.PI / 2) continue;
      const q = proj(f.cen);
      const d = Math.hypot(q[0] - mx, q[1] - my);
      if (d < bdt) {
        bdt = d;
        bt = f;
      }
    }
    if (bt) return bt;
  }

  // 5. Major Lakes
  if (st.on.river && MAP.LAKES.length) {
    const lk = MAP.LAKES.find(l => inBB(l, ll) && d3.geoContains(l.geo, ll));
    if (lk) return lk;
  }

  // 6. Admin-1 States / Provinces
  if (st.on.admin1 && MAP.ADM1.length) {
    if (k >= 2.3 || (st.sel && st.sel.isAdm1 && k >= 1.5)) {
      const adm = MAP.ADM1.find(f => inBB(f, ll) && d3.geoContains(f, ll));
      if (adm) return adm;
    } else if (k >= 1.3) {
      const adm = MAP.ADM1.find(f => DETACHED_ADM1.has(f.id) && inBB(f, ll) && d3.geoContains(f, ll));
      if (adm) return adm;
    }
  }

  // 7. Countries
  const c = MAP.F.find(f => inBB(f, ll) && d3.geoContains(f, ll));
  if (c) return c;

  // 8. Hotspot Polygons (including mountain polyGeo)
  const hp = H.find(
    h => (h.kind === 'poly' || h.polyGeo) && !h.ringOnly && on(h) && d3.geoContains(h.polyGeo || h.geo, ll)
  );
  return hp || null;
}

export function flyTo(ll, nk, dur = 1100) {
  stopSpin();
  document.getElementById('tip').style.display = 'none';
  st.hov = null;
  const r0 = proj.rotate();
  const r1 = [-ll[0], -ll[1], 0];
  r1[0] = r0[0] + ((((r1[0] - r0[0]) % 360) + 540) % 360 - 180);
  const it = d3.interpolate(r0, r1);
  d3.select({})
    .transition()
    .duration(dur)
    .ease(d3.easeCubicInOut)
    .tween('r', () => t => {
      proj.rotate(it(t));
      st.moving = true;
      st.lastMove = performance.now();
      st.dirty = true;
    });
  if (nk) setK(nk, dur);
}

export function fitK(f) {
  const b = d3.geoBounds(f);
  let span = Math.max(b[1][0] - b[0][0], b[1][1] - b[0][1]);
  if (b[1][0] < b[0][0]) span = Math.max(b[1][0] + 360 - b[0][0], b[1][1] - b[0][1]);
  span = Math.max(span, 3);
  return Math.max(1, Math.min(10, 95 / span));
}

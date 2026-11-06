import { NAMES, REGIONS } from '../data/regions.js';
import { LAYERS, H } from '../data/hotspots.js';
import { AL, REF } from '../data/alliances.js';
import { $, norm, vi, AFR, NAT, MEM, HS, BY, MAP, st, C, on, hc } from './state.js';

export const cv = $('#cv');
export const ctx = cv.getContext('2d');

let W = 0, Hh = 0, R0 = 1, k = 1, dpr = 1;
export const getK = () => k;

export const proj = d3.geoOrthographic().clipAngle(90).precision(0.3).rotate([-106, -14]);
export const pathC = d3.geoPath(proj, ctx);

const splitM = m => m.coordinates.map(c => ({ type: 'LineString', coordinates: c }));

function enrichFeatures(features) {
  features.forEach(f => {
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

function buildHotspots(worldTopo, objCountries, onlyTopoDependent = false) {
  H.forEach(h => {
    const g = h.g;
    if (onlyTopoDependent && !g.country && !g.mesh && !g.africa) return;
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
    }
    h.geo = geo;
    delete h.cr;
    h.kind = geo.type === 'Point' ? 'pt' : /Polygon/.test(geo.type) ? 'poly' : 'line';
    if (h.kind === 'line') {
      const L = geo.type === 'LineString' ? [geo.coordinates] : geo.coordinates;
      h.dense = L.map(l => {
        if (!l || !l.length) return [];
        const o = [l[0]];
        for (let i = 1; i < l.length; i++) {
          const d = d3.geoDistance(l[i - 1], l[i]);
          const n = Math.max(1, Math.ceil(d / 0.01));
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
  });
}

function rebuildSearchIndex() {
  MAP.IDX = [
    ...MAP.F.map(f => ({
      t: 'c',
      n: f.vi,
      s: norm(f.vi + ' ' + f.en),
      o: f,
      sub: (REGIONS[f.rg] || [''])[0]
    })),
    ...H.map(h => ({
      t: 'h',
      n: h.n,
      s: norm(h.n),
      o: h,
      sub: LAYERS[h.t].n
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
  if (st.sel && st.sel.en && BY[st.sel.en]) st.sel = BY[st.sel.en];
  if (st.hov && st.hov.en && BY[st.hov.en]) st.hov = BY[st.hov.en];
  rebuildSearchIndex();
  MAP.LC.key = '';
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
  if (o.cr === undefined) prepCull(o, o.geo || o);
  return d3.geoDistance(VIEW.c, o.cc) - o.cr < VIEW.vr + 0.02;
}

export function vh(h) {
  return on(h) && cullOK(h);
}

const tinyPx = f => f.ar * proj.scale() * proj.scale();

function inBB(f, ll) {
  const b = f.bb;
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

  // hotspot polygons (under land)
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
  const sc = st.sel && st.sel.en ? st.sel : null;
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

  if (st.hov && st.hov.en && st.hov !== sc) {
    ctx.beginPath();
    pathC(st.hov);
    ctx.fillStyle = C.dark ? 'rgba(255,255,255,.12)' : 'rgba(255,255,255,.45)';
    ctx.fill();
  }

  // nature fills
  const natF = {
    desert: C.dark ? ['#8C6D2E', 0.5] : ['#E4C277', 0.55],
    forest: C.dark ? ['#3E7A3A', 0.5] : ['#6FA35A', 0.38],
    ice: C.dark ? ['#DDE8F3', 0.85] : ['#FFFFFF', 0.92]
  };
  H.forEach(h => {
    if (h.kind !== 'poly' || !NAT.has(h.t) || !vh(h)) return;
    if (!cullOK(h)) return;
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
    const sN = natF[h.t];
    ctx.fillStyle = mix(sN[0], st.sel === h ? Math.min(1, sN[1] + 0.25) : sN[1]);
    ctx.fill();
    if (st.sel === h) {
      ctx.strokeStyle = mix(sN[0], 1);
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  });

  // borders
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
    } else if (h.mtn) {
      ctx.setLineDash([1, 7]);
    } else if (h.dash) {
      ctx.setLineDash([8, 6]);
    }
    ctx.strokeStyle = act ? c : mix(c, 0.85);
    ctx.lineWidth = (h.mtn ? 5 : h.riv ? (h.t === 'river' ? 1.8 : 2.2) : h.t === 'border' ? 2.4 : 2) + (act ? 1.6 : 0);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.lineDashOffset = 0;
  });

  // dots for tiny countries
  if (!lowres && k >= 1.6) {
    const cen0 = proj.invert(proj.translate());
    for (const f of MAP.F) {
      if (f.rg === 'antarctic') continue;
      const px = tinyPx(f);
      if (px >= 120) continue;
      if (d3.geoDistance(f.cen, cen0) > Math.PI / 2 - 0.03) continue;
      const q = proj(f.cen);
      if (q[0] < 0 || q[0] > W || q[1] < 0 || q[1] > Hh) continue;
      ctx.beginPath();
      ctx.arc(q[0], q[1], f === sc || f === st.hov ? 4 : 2.8, 0, 7);
      ctx.fillStyle = f === sc ? C.accent : C.dark ? '#C9C4B8' : '#6B6455';
      ctx.fill();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = C.dark ? '#0A0E15' : '#fff';
      ctx.stroke();
    }
  }

  // labels countries
  const centerPt = proj.invert([cx, cy]);
  const placed = [];
  const vis = p => d3.geoDistance(p, centerPt) < 1.45;
  if (st.ref.labels && !lowres) {
    ctx.font = '500 11.5px "Be Vietnam Pro",system-ui,sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const cand = labelCands(cx, cy, r);
    for (const o of cand) {
      const f = o.f, p = o.p;
      const w = ctx.measureText(f.vi).width + 6, hh = 15;
      const box = [p[0] - w / 2, p[1] - hh / 2, w, hh];
      if (box[0] < 2 || box[0] + w > W - 2 || box[1] < 2 || box[1] + hh > Hh - 2) continue;
      if (placed.some(b => !(box[0] > b[0] + b[2] || box[0] + box[2] < b[0] || box[1] > b[1] + b[3] || box[1] + box[3] < b[1])))
        continue;
      placed.push(box);
      ctx.lineWidth = 3;
      ctx.strokeStyle = C['label-halo'];
      ctx.strokeText(f.vi, p[0], p[1]);
      ctx.fillStyle = C.label;
      ctx.fillText(f.vi, p[0], p[1]);
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
    } else {
      ctx.arc(q[0], q[1], act ? 7 : 5.5, 0, 7);
    }
    ctx.fillStyle = c;
    ctx.fill();
    ctx.lineWidth = 1.8;
    ctx.strokeStyle = C.dark ? '#0A0E15' : '#fff';
    ctx.stroke();
    if (k >= 2.4 || act) {
      ctx.font = '600 11.5px "Be Vietnam Pro",system-ui,sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.lineWidth = 3;
      ctx.strokeStyle = C['label-halo'];
      ctx.strokeText(h.n, q[0] + 10, q[1]);
      ctx.fillStyle = C.dark ? d3.color(c).brighter(1.2) + '' : d3.color(c).darker(0.6) + '';
      ctx.fillText(h.n, q[0] + 10, q[1]);
    }
  });

  // labels for hovered/selected line/poly hotspots
  [st.sel, st.hov].forEach(h => {
    if (!h || !h.id || h.kind === 'pt' || !vh(h)) return;
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
  const centerPt = proj.invert([cx, cy]);
  let best = null, bd = 11;
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
  if (k >= 1.6) {
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
  const c = MAP.F.find(f => d3.geoContains(f, ll));
  if (c) return c;
  const hp = H.find(h => h.kind === 'poly' && !h.ringOnly && on(h) && d3.geoContains(h.geo, ll));
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

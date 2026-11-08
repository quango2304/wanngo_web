import { NAMES, REGIONS } from '../data/regions.js?v=20261108n';
import { C0 } from '../data/countries.js?v=20261108n';
import { LAYERS, H } from '../data/hotspots.js?v=20261108n';
import { AL, REF } from '../data/alliances.js?v=20261108n';
import { CONT, AMERICAS, CONT_KEYS, CONT_LINES, contOf, contAt, isSplit } from '../data/continents.js?v=20261108n';
import {
  $,
  norm,
  vi,
  isEn,
  tr,
  cName,
  EN_SHORT,
  hName,
  layName,
  capName,
  cityName,
  islName,
  adm1Name,
  lakeName,
  C0_EN,
  REGIONS_EN,
  H_EN,
  LAKE_META_EN,
  ADMIN1_EN,
  ECON_TIERS,
  ECON,
  REGIME_TYPES,
  REGIMES,
  RANK_METRICS,
  RANK_DATA,
  rankValColor,
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
  WATER_LABELS,
  SEAS,
  ADMIN1_META,
  ADM1_BY_ID,
  LAKE_BY_ID
} from './state.js?v=20261108n';

export const cv = $('#cv');
export const ctx = cv.getContext('2d');

let W = 0, Hh = 0, R0 = 1, k = 1, dpr = 1;
let coarse = false; // touch / pen: larger markers and hit areas
export const getK = () => k;

export const proj = d3.geoOrthographic().clipAngle(90).precision(0.3).rotate([-106, -14]);
export const pathC = d3.geoPath(proj, ctx);

const splitM = m => m.coordinates.map(c => ({ type: 'LineString', coordinates: c }));

// ---------- continents: coastlines grouped by continent (split countries cut vertex by vertex), built once per map
const CONT_LINE_GEOS = CONT_LINES.map(l => ({ type: 'LineString', coordinates: l.coords }));
export const contColor = key => CONT[key].c[C.dark ? 1 : 0];

function buildContinents(topo, obj) {
  const lines = {};
  CONT_KEYS.forEach(c => (lines[c] = []));
  const rgOf = n => (NAMES[n] || [, 'territory'])[1];
  const contByName = new Map();
  for (const g of obj.geometries) {
    const n = g.properties && g.properties.name;
    if (n && !isSplit(n)) contByName.set(n, contOf(n, rgOf(n)));
  }
  for (const c of CONT_KEYS) {
    const m = topojson.mesh(topo, obj, (a, b) => a === b && contByName.get(a.properties.name) === c);
    for (const l of m.coordinates) lines[c].push({ type: 'LineString', coordinates: l });
  }
  const splitNames = new Set(obj.geometries.map(g => g.properties && g.properties.name).filter(n => n && isSplit(n)));
  for (const n of splitNames) {
    const main = contOf(n, rgOf(n));
    const m = topojson.mesh(topo, obj, (a, b) => a === b && a.properties.name === n);
    for (const l of m.coordinates) {
      let cur = null, run = [];
      for (const p of l) {
        const c = contAt(n, p[0], p[1]) || main;
        if (c !== cur) {
          if (run.length) {
            run.push(p);
            lines[cur].push({ type: 'LineString', coordinates: run });
          }
          cur = c;
          run = [p];
        } else run.push(p);
      }
      if (run.length > 1) lines[cur].push({ type: 'LineString', coordinates: run });
    }
  }
  const pc = topojson.mesh(
    topo,
    obj,
    (a, b) =>
      a !== b &&
      ((a.properties.name === 'Panama' && b.properties.name === 'Colombia') ||
        (a.properties.name === 'Colombia' && b.properties.name === 'Panama'))
  );
  return { lines, pc: splitM(pc) };
}

// Clickable continent labels. key: card key; sub: which outline(s) to highlight.
export const CONT_OBJS = {
  asia: { kind: 'cont', key: 'asia', subs: ['asia'], fly: [90, 42], k: 1.15 },
  europe: { kind: 'cont', key: 'europe', subs: ['europe'], fly: [18, 53], k: 1.9 },
  africa: { kind: 'cont', key: 'africa', subs: ['africa'], fly: [20, 2], k: 1.3 },
  americas: { kind: 'cont', key: 'americas', subs: ['nam', 'sam'], fly: [-80, 12], k: 0.95 },
  nam: { kind: 'cont', key: 'americas', subs: ['nam'], fly: [-100, 45], k: 1.2 },
  sam: { kind: 'cont', key: 'americas', subs: ['sam'], fly: [-60, -18], k: 1.4 },
  oceania: { kind: 'cont', key: 'oceania', subs: ['oceania'], fly: [148, -20], k: 1.5 },
  antarctica: { kind: 'cont', key: 'antarctica', subs: ['antarctica'], fly: [20, -82], k: 1.3 }
};
const CONT_LABELS = [
  { o: CONT_OBJS.asia, pt: CONT.asia.lab, big: true },
  { o: CONT_OBJS.europe, pt: CONT.europe.lab, big: true },
  { o: CONT_OBJS.africa, pt: CONT.africa.lab, big: true },
  { o: CONT_OBJS.americas, pt: AMERICAS.lab, big: true, col: 'nam' },
  { o: CONT_OBJS.nam, pt: CONT.nam.lab, big: false },
  { o: CONT_OBJS.sam, pt: CONT.sam.lab, big: false },
  { o: CONT_OBJS.oceania, pt: CONT.oceania.lab, big: true },
  { o: CONT_OBJS.antarctica, pt: CONT.antarctica.lab, big: true }
];
const CONT_LABEL_MAX_K = 1.8;
export const contName = o => {
  const meta = o === CONT_OBJS.americas ? AMERICAS : CONT[o.subs.length > 1 ? 'nam' : o.subs[0]];
  return isEn() ? meta.en : meta.vi;
};

const DETACHED_ADM1 = new Set(['US-HI', 'US-AK', 'RU-KGD', 'CN-HI', 'AU-TAS']);

const SPHERE_GEO = { type: 'Sphere' };
const GRAT_GEO = d3.geoGraticule10();
const GRAT_LINES = splitM(GRAT_GEO);
const makeParallelCoords = lat => d3.range(-180, 181, 2).map(x => [x, lat]);
const REF_GEOS = {
  eq: { type: 'LineString', coordinates: makeParallelCoords(0) },
  trop: { type: 'MultiLineString', coordinates: REF.trop.lats.map(makeParallelCoords) },
  polar: { type: 'MultiLineString', coordinates: REF.polar.lats.map(makeParallelCoords) },
  pm: { type: 'LineString', coordinates: d3.range(-90, 91, 2).map(y => [0, y]) }
};
const TZ_BANDS_GEO = {
  type: 'MultiPolygon',
  coordinates: d3.range(-11, 12, 2).map(off => {
    const lon0 = off * 15 - 7.5;
    const lon1 = off * 15 + 7.5;
    return [[
      ...d3.range(-75, 81, 5).map(y => [lon0, y]),
      ...d3.range(80, -76, -5).map(y => [lon1, y]),
      [lon0, -75]
    ]];
  })
};
const TZ_MERIDIANS_GEO = {
  type: 'MultiLineString',
  coordinates: d3.range(-11, 13).map(off => {
    const lonB = off * 15 - 7.5;
    return d3.range(-75, 81, 3).map(y => [lonB, y]);
  })
};
const TZ_IDL_GEO = {
  type: 'LineString',
  coordinates: d3.range(-75, 81, 3).map(y => [180, y])
};

// Astronomical Subsolar Point & Day/Night Terminator (cached per minute)
let _solarMinKey = -1;
let _solarCache = null;
export function getSolarGeos(nowMs = Date.now()) {
  const minKey = Math.floor(nowMs / 60000);
  if (_solarMinKey === minKey && _solarCache) return _solarCache;
  _solarMinKey = minKey;
  // Days since J2000.0 (2000-01-01T12:00:00Z)
  const d = (nowMs - 946728000000) / 86400000;
  const L = (((280.460 + 0.9856474 * d) % 360) + 360) % 360;
  const gDeg = (((357.528 + 0.9856003 * d) % 360) + 360) % 360;
  const g = (gDeg * Math.PI) / 180;
  const lambda = ((L + 1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g)) * Math.PI) / 180;
  const eps = ((23.439 - 0.0000004 * d) * Math.PI) / 180;
  const sunLat = (Math.asin(Math.sin(eps) * Math.sin(lambda)) * 180) / Math.PI;
  const y = Math.tan(eps / 2) ** 2;
  const Lrad = (L * Math.PI) / 180;
  const eqMin =
    4 *
    (180 / Math.PI) *
    (y * Math.sin(2 * Lrad) - 2 * 0.01671 * Math.sin(g) + 4 * 0.01671 * y * Math.sin(g) * Math.cos(2 * Lrad));
  const utcHours = (((nowMs / 3600000) % 24) + 24) % 24;
  const sunLon = ((((12 - utcHours - eqMin / 60) * 15) % 360) + 540) % 360 - 180;
  const antiLon = sunLon > 0 ? sunLon - 180 : sunLon + 180;
  const antiLat = -sunLat;
  const antiPt = [antiLon, antiLat];
  const sunPt = [sunLon, sunLat];
  _solarCache = {
    sunPt,
    antiPt,
    night90: d3.geoCircle().center(antiPt).radius(90).precision(2)(),
    night82: d3.geoCircle().center(antiPt).radius(82).precision(2)(),
    night72: d3.geoCircle().center(antiPt).radius(72).precision(2)()
  };
  return _solarCache;
}

const COUNTRY_SEARCH_ALIASES = {
  Czechia: 'Cộng hòa Séc CH Séc Czech Republic Tiệp Khắc',
  'United States of America': 'Mỹ USA US Hợp chúng quốc Hoa Kỳ United States',
  'United Kingdom': 'Anh UK Britain Great Britain England',
  'South Korea': 'Nam Hàn Đại Hàn Dân Quốc ROK Korea',
  'North Korea': 'Bắc Hàn CHDCND Triều Tiên DPRK',
  Netherlands: 'Hoà Lan Holland',
  Germany: 'CHLB Đức',
  Russia: 'Liên bang Nga Liên Xô USSR',
  China: 'CHND Trung Hoa Trung Cộng PRC',
  Myanmar: 'Miến Điện Burma',
  Thailand: 'Xiêm Siam',
  Cambodia: 'Cao Miên Kampuchea',
  eSwatini: 'Swaziland',
  Macedonia: 'North Macedonia',
  'Timor-Leste': 'Đông Timor East Timor',
  "Côte d'Ivoire": 'Ivory Coast',
  'Cabo Verde': 'Cape Verde',
  Vatican: 'Toà Thánh Holy See',
  'United Arab Emirates': 'Các Tiểu vương quốc Ả Rập Thống nhất Emirates',
  Belarus: 'Bạch Nga'
};

function enrichFeatures(features) {
  features.forEach(f => {
    f.isCountry = true;
    f.bb = d3.geoBounds(f);
    const parts = (f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates).map(c => ({
      type: 'Polygon',
      coordinates: c
    }));
    f.parts = parts;
    f.en = f.properties.name;
    f.vi = vi(f.en);
    f.rg = (NAMES[f.en] || [, 'territory'])[1];
    f.cen = d3.geoCentroid(f);
    f.ar = d3.geoArea(f);
    if (parts.length === 1) {
      f.mainPart = parts[0];
      f.mainAr = f.ar;
      f.mainCen = f.cen;
      f.subCens = [];
      f.isleN = 0;
    } else {
      let bestPart = parts[0], bestAr = -1;
      const subCens = [];
      for (const pt of parts) {
        const a = d3.geoArea(pt);
        if (a > bestAr) {
          bestAr = a;
          bestPart = pt;
        }
        if (a > 0.0005) subCens.push(d3.geoCentroid(pt));
      }
      f.mainPart = bestPart;
      f.mainAr = bestAr;
      f.mainCen = d3.geoCentroid(bestPart);
      f.subCens = subCens;
      f.isleN = subCens.length; // the first isleN entries are centroids of separate parts (islands, exclaves)
    }
    if (f.mainAr > 0.004) {
      const ring = f.mainPart.coordinates[0];
      const mc = f.mainCen;
      const quads = [[], [], [], []];
      const step = Math.max(1, Math.floor(ring.length / 60));
      for (let i = 0; i < ring.length; i += step) {
        const p = ring[i];
        let dl = p[0] - mc[0];
        if (dl > 180) dl -= 360;
        if (dl < -180) dl += 360;
        const idx = (dl >= 0 ? 1 : 0) + (p[1] >= mc[1] ? 2 : 0);
        quads[idx].push([mc[0] + dl * 0.45, mc[1] + (p[1] - mc[1]) * 0.45]);
      }
      for (const q of quads) {
        if (q.length) {
          f.subCens.push([((d3.mean(q, d => d[0]) + 540) % 360) - 180, d3.mean(q, d => d[1])]);
        }
      }
    }
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
  const enMode = isEn();
  const rgDict = enMode ? REGIONS_EN : REGIONS;
  MAP.IDX = [
    ...MAP.F.map(f => ({
      t: 'c',
      n: cName(f.en),
      s: norm(
        f.vi +
          ' ' +
          f.en +
          ' ' +
          (COUNTRY_SEARCH_ALIASES[f.en] || '') +
          ' ' +
          ((C0[f.en] && C0[f.en].cap) || '') +
          ' ' +
          ((C0_EN[f.en] && C0_EN[f.en].cap) || '')
      ),
      o: f,
      sub: (rgDict[f.rg] || [tr('Quốc gia', 'Country')])[0]
    })),
    ...MAP.ADM1.map(f => ({
      t: 'adm1',
      n: adm1Name(f),
      s: norm(
        f.vi +
          ' ' +
          f.en +
          ' ' +
          ((ADMIN1_EN[f.id] && ADMIN1_EN[f.id].n) || '') +
          ' ' +
          (f.postal || '') +
          ' ' +
          (f.cap || '') +
          ' ' +
          ((ADMIN1_EN[f.id] && ADMIN1_EN[f.id].cap) || '') +
          ' ' +
          (f.old || []).join(' ') +
          ' ' +
          vi(f.country) +
          ' ' +
          f.country
      ),
      o: f,
      sub: tr('Bang / Tỉnh · ', 'State / Province · ') + cName(f.country)
    })),
    ...CAPITALS.map(c => ({
      t: 'cap',
      n: capName(c),
      s: norm(c.vi + ' ' + c.en + ' ' + capName(c) + ' ' + vi(c.country) + ' ' + c.country),
      o: c,
      sub: tr('Thủ đô · ', 'Capital · ') + cName(c.country)
    })),
    ...ISLANDS.map(isl => ({
      t: 'isl',
      n: islName(isl),
      s: norm(isl.vi + ' ' + isl.en + ' ' + islName(isl) + ' ' + vi(isl.country) + ' ' + isl.country),
      o: isl,
      sub: tr('Đảo / Vùng · ', 'Island / Zone · ') + cName(isl.country)
    })),
    ...CITIES.map(ct => ({
      t: 'city',
      n: cityName(ct),
      s: norm(ct.vi + ' ' + ct.en + ' ' + cityName(ct) + ' ' + vi(ct.country) + ' ' + ct.country),
      o: ct,
      sub: tr('Đô thị / Cảng · ', 'City / Port · ') + cName(ct.country)
    })),
    ...H.map(h => ({
      t: 'h',
      n: hName(h),
      s: norm(h.n + ' ' + ((H_EN[h.id] && H_EN[h.id].n) || '') + ' ' + h.id),
      o: h,
      sub: layName(h.t) || tr('Điểm nóng', 'Hotspot')
    })),
    ...MAP.LAKES.map(lk => ({
      t: 'lake',
      n: lakeName(lk),
      s: norm((lk.vi || lk.n) + ' ' + (lk.en || '') + ' ' + ((LAKE_META_EN[lk.id] && LAKE_META_EN[lk.id].n) || '')),
      o: lk,
      sub: tr('Hồ & Biển nội địa', 'Lake & Inland Sea')
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
  MAP.CONT110 = buildContinents(w110, obj110);
  MAP.CONT50 = MAP.CONT110;

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
  MAP.CONT50 = buildContinents(w50, obj50);

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

// Outlines for the named seas and gulfs (public/assets/map/seas.json, built by scripts/build_seas.mjs from Natural Earth).
export function upgradeSeasData(j) {
  if (!j) return;
  for (const s of SEAS) {
    const e = j[s.en];
    if (!e || !e.g || !e.g.length) continue;
    // d3 wants clockwise outer rings; GeoJSON is counter-clockwise. A ring wound the wrong way makes
    // geoContains true almost everywhere, so test each polygon's area and flip it when it is "inside out".
    const polys = e.g.map(rings => {
      const rs = rings.map(r => r.slice());
      if (d3.geoArea({ type: 'Polygon', coordinates: rs }) > 2 * Math.PI) rs.forEach(r => r.reverse());
      return rs;
    });
    s.geo = { type: 'MultiPolygon', coordinates: polys };
    s.wGeo = e.w && e.w.length ? { type: 'MultiLineString', coordinates: e.w } : null;
    s.bb = d3.geoBounds(s.geo);
    s.ar = d3.geoArea(s.geo);
    s.cen = d3.geoCentroid(s.geo);
    s.cr = undefined;
  }
  // oceans stay label-only: tapping empty open water must still close the panel
  MAP.SEAS_BY_SIZE = SEAS.filter(s => s.geo && s.type !== 'ocean').sort((a, b) => a.ar - b.ar);
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
    const coords = f.geometry.type === 'Polygon' ? f.geometry.coordinates : f.geometry.coordinates.flat();
    f.lineGeo = { type: 'MultiLineString', coordinates: coords };
    delete f.cr;
    ADM1_BY_ID[f.id] = f;
  });
  MAP.ADM1 = admGeo.features;
  rebuildSearchIndex();
  st.dirty = true;
  dispatchEvent(new Event('geo:admin1')); // an open country card adds its provinces list
}

// ---------- viewport & theme helpers
// Centre of the free area: between the layers panel (left) and the card (right) on desktop; above the bottom sheet
// on phones. Uses the panels' resting sizes, not their animated positions.
function center() {
  const mob = W < 760;
  const panel = document.getElementById('panel');
  const lay = document.getElementById('layers');
  const open = panel.classList.contains('show');
  if (mob) {
    const sheet = open ? panel : lay && !lay.classList.contains('hide') ? lay : null;
    if (!sheet) return [W / 2, Hh * 0.45];
    const top = Hh - (sheet.offsetHeight || Hh * 0.5) - 8;
    return [W / 2, Math.max(70 + R0 * 0.35, (64 + top) / 2)];
  }
  let left = 0, right = W;
  if (lay && !lay.classList.contains('hide') && !lay.classList.contains('fold') && lay.offsetWidth) left = 16 + lay.offsetWidth;
  if (open) right = W - 16 - panel.offsetWidth;
  return [(left + right) / 2, Hh / 2];
}

export function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = innerWidth;
  Hh = innerHeight;
  cv.width = W * dpr;
  cv.height = Hh * dpr;
  R0 = (Math.min(W, Hh) / 2) * (W < 760 ? 0.90 : 0.86);
  proj.translate(center()).scale(R0 * k).clipExtent([[-20, -20], [W + 20, Hh + 20]]);
  st.dirty = true;
}

export function recenter() {
  const a = proj.translate(), b = center();
  if (Math.abs(a[0] - b[0]) < 1 && Math.abs(a[1] - b[1]) < 1) {
    proj.translate(b);
    MAP.LC.key = '';
    st.dirty = true;
    return;
  }
  const it = d3.interpolate(a, b);
  d3.select(cv)
    .transition('recenter')
    .duration(320)
    .ease(d3.easeCubicOut)
    .tween('c', () => t => {
      proj.translate(it(t));
      MAP.LC.key = '';
      st.dirty = true;
    });
}

const _mixCache = new Map();
function mix(hex, a) {
  const k2 = hex + '|' + a;
  let v = _mixCache.get(k2);
  if (v !== undefined) return v;
  const c = d3.color(hex);
  v = c ? ((c.opacity = a), c + '') : hex;
  _mixCache.set(k2, v);
  return v;
}

let _lcThemeKey = '';
const _lcBaseMap = new Map();
const _lcRankMap = new Map();
let _lcMutedLand = '';

function syncLandColorCache() {
  const tk = (C.dark ? '1|' : '0|') + C.land;
  if (_lcThemeKey === tk) return;
  _lcThemeKey = tk;
  _lcBaseMap.clear();
  _lcRankMap.clear();
  const g = d3.hsl(C.land);
  g.s *= 0.3;
  _lcMutedLand = g + '';
}

function landColor(f) {
  syncLandColorCache();
  if (st.al && st.al.startsWith('__rank_')) {
    const rkKey = st.al.slice(7, -2);
    const metric = RANK_METRICS[rkKey];
    if (metric) {
      const ck = rkKey + '|' + f.en;
      let col = _lcRankMap.get(ck);
      if (col === undefined) {
        const row = RANK_DATA[f.en];
        const val = row ? row[metric.idx] : null;
        const hex = rankValColor(val, metric);
        col = hex ? mix(hex, C.dark ? 0.82 : 0.78) : _lcMutedLand;
        _lcRankMap.set(ck, col);
      }
      return col;
    }
  }
  if (st.al === '__econ__') {
    const ec = ECON[f.en];
    const tInfo = ec && ECON_TIERS[ec.tier];
    if (tInfo) return mix(tInfo.c, C.dark ? 0.80 : 0.76);
    return _lcMutedLand;
  }
  if (st.al === '__regime__') {
    const rg = REGIMES[f.en];
    const rInfo = rg && REGIME_TYPES[rg.type];
    if (rInfo) return mix(rInfo.c, C.dark ? 0.80 : 0.76);
    return _lcMutedLand;
  }
  if (st.al) {
    const a = AL[st.al];
    if (a) {
      const m = (MEM[f.en] || []).find(x => x[0] === st.al);
      if (m) return m[1] ? a.c : mix(a.c, 0.42);
      return _lcMutedLand;
    }
  }
  if (st.hl.has(f.en)) return C.dark ? '#7a5a1e' : '#F6D9A0';
  let col = _lcBaseMap.get(f.en);
  if (!col) {
    const base = d3.hsl(C.land);
    base.l = Math.max(0, Math.min(1, base.l + (f.j || 0)));
    col = base + '';
    _lcBaseMap.set(f.en, col);
  }
  return col;
}

// ---------- culling
const DEG2RAD = Math.PI / 180;

function prepCull(o, geo) {
  const c = d3.geoCentroid(geo);
  const pts = [];
  let minX = 1, maxX = -1, minY = 1, maxY = -1, minZ = 1, maxZ = -1;
  const add3D = p => {
    const lam = p[0] * DEG2RAD, phi = p[1] * DEG2RAD, cp = Math.cos(phi);
    const x = cp * Math.cos(lam), y = cp * Math.sin(lam), z = Math.sin(phi);
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
    if (z < minZ) minZ = z;
    if (z > maxZ) maxZ = z;
  };
  (function walk(a) {
    if (!a) return;
    if (typeof a[0] === 'number') {
      pts.push(a);
      add3D(a);
    } else {
      for (let i = 0; i < a.length; i++) walk(a[i]);
    }
  })(geo.coordinates || (geo.geometry && geo.geometry.coordinates) || []);
  if (c && isFinite(c[0]) && isFinite(c[1])) add3D(c);
  const st2 = Math.max(1, Math.floor(pts.length / 400));
  let rad = 0;
  for (let i = 0; i < pts.length; i += st2) rad = Math.max(rad, d3.geoDistance(c, pts[i]));
  if (pts.length) rad = Math.max(rad, d3.geoDistance(c, pts[pts.length - 1]));
  o.cc = c;
  o.cr = rad + 0.03;
  if (pts.length) {
    o.mx = (minX + maxX) * 0.5;
    o.my = (minY + maxY) * 0.5;
    o.mz = (minZ + maxZ) * 0.5;
    o.ex = (maxX - minX) * 0.5 + 0.025;
    o.ey = (maxY - minY) * 0.5 + 0.025;
    o.ez = (maxZ - minZ) * 0.5 + 0.025;
  } else {
    o.mx = 0;
    o.my = 0;
    o.mz = 0;
    o.ex = 2;
    o.ey = 2;
    o.ez = 2;
  }
}

const VIEW = {
  c: [0, 0],
  vr: Math.PI / 2,
  fx: 1, fy: 0, fz: 0, afx: 1, afy: 0, afz: 0,
  rx: 0, ry: 1, arx: 0, ary: 1,
  dx: 0, dy: 0, dz: -1, adx: 0, ady: 0, adz: 1,
  uMin: -2, uMax: 2, vMin: -2, vMax: 2
};

export function updView() {
  const [cx, cy] = proj.translate(), r = proj.scale() || 1;
  const rot = proj.rotate();
  const lamC = -rot[0] * DEG2RAD, phiC = -rot[1] * DEG2RAD;
  const cosPhi = Math.cos(phiC), sinPhi = Math.sin(phiC);
  const cosLam = Math.cos(lamC), sinLam = Math.sin(lamC);
  const d = Math.max(Math.hypot(cx, cy), Math.hypot(W - cx, cy), Math.hypot(cx, Hh - cy), Math.hypot(W - cx, Hh - cy));
  VIEW.c = [-rot[0], -rot[1]];
  VIEW.vr = Math.asin(Math.min(1, d / r));
  VIEW.fx = cosPhi * cosLam;
  VIEW.fy = cosPhi * sinLam;
  VIEW.fz = sinPhi;
  VIEW.afx = Math.abs(VIEW.fx);
  VIEW.afy = Math.abs(VIEW.fy);
  VIEW.afz = Math.abs(VIEW.fz);
  VIEW.rx = -sinLam;
  VIEW.ry = cosLam;
  VIEW.arx = Math.abs(VIEW.rx);
  VIEW.ary = Math.abs(VIEW.ry);
  VIEW.dx = sinPhi * cosLam;
  VIEW.dy = sinPhi * sinLam;
  VIEW.dz = -cosPhi;
  VIEW.adx = Math.abs(VIEW.dx);
  VIEW.ady = Math.abs(VIEW.dy);
  VIEW.adz = Math.abs(VIEW.dz);
  VIEW.uMin = (-20 - cx) / r;
  VIEW.uMax = (W + 20 - cx) / r;
  VIEW.vMin = (-20 - cy) / r;
  VIEW.vMax = (Hh + 20 - cy) / r;
}

export function cullOK(o) {
  if (o.cr === undefined) prepCull(o, o.polyGeo || o.geo || o);
  const mx = o.mx, my = o.my, mz = o.mz;
  const ex = o.ex, ey = o.ey, ez = o.ez;
  if (VIEW.fx * mx + VIEW.fy * my + VIEW.fz * mz + VIEW.afx * ex + VIEW.afy * ey + VIEW.afz * ez < -0.02) return false;
  const u = VIEW.rx * mx + VIEW.ry * my;
  const eu = VIEW.arx * ex + VIEW.ary * ey;
  if (u + eu < VIEW.uMin || u - eu > VIEW.uMax) return false;
  const v = VIEW.dx * mx + VIEW.dy * my + VIEW.dz * mz;
  const ev = VIEW.adx * ex + VIEW.ady * ey + VIEW.adz * ez;
  if (v + ev < VIEW.vMin || v - ev > VIEW.vMax) return false;
  return true;
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

// the mainland's outer ring cut to ~200 points: enough to test "is this screen point inside the country" for a label
function coarseMain(f) {
  if (f.mainCoarse) return f.mainCoarse;
  const ring = (f.mainPart || f).coordinates ? (f.mainPart || f).coordinates[0] : null;
  if (!ring) return (f.mainCoarse = f.mainPart || f);
  const step = Math.max(1, Math.ceil(ring.length / 200));
  const pts = ring.filter((_, i) => i % step === 0);
  pts.push(ring[0]);
  return (f.mainCoarse = { type: 'Polygon', coordinates: [pts] });
}

function labelCands(cx, cy, r) {
  const F = MAP.F;
  const rot = proj.rotate();
  const key =
    rot.map(v => v.toFixed(2)).join() +
    '|' +
    cx.toFixed(1) +
    ',' +
    cy.toFixed(1) +
    '|' +
    k.toFixed(2) +
    '|' +
    r.toFixed(1) +
    '|' +
    W +
    'x' +
    Hh +
    '|' +
    st.lang +
    '|' +
    ((st.sel && st.sel.en) || '') +
    (st.moving ? '|m' : '');
  if (MAP.LC.key === key) return MAP.LC.list;
  const center = proj.invert([cx, cy]);
  // lon/lat box of the screen (null when the whole globe fits, then every near-side point is on screen anyway)
  let viewBB = null;
  {
    const pts = [[0, 0], [W / 2, 0], [W, 0], [W, Hh / 2], [W, Hh], [W / 2, Hh], [0, Hh], [0, Hh / 2]].map(q =>
      Math.hypot(q[0] - cx, q[1] - cy) < r * 0.999 ? proj.invert(q) : null
    );
    if (pts.every(Boolean)) {
      const lats = pts.map(q => q[1]);
      let lons = pts.map(q => q[0]);
      const span = Math.max(...lons) - Math.min(...lons);
      const wrap = span > 180;
      if (wrap) lons = lons.map(x => (x < 0 ? x + 360 : x));
      viewBB = { w: Math.min(...lons), e: Math.max(...lons), s: Math.min(...lats), n: Math.max(...lats), wrap };
    }
  }
  const mainInView = f => {
    if (!viewBB) return true;
    const b = f.mainBB || (f.mainBB = d3.geoBounds(f.mainPart || f));
    if (b[1][1] < viewBB.s || b[0][1] > viewBB.n) return false;
    let w = b[0][0], e = b[1][0];
    if (e < w) e += 360; // box crosses the antimeridian
    const vw = viewBB.w, ve = viewBB.e;
    const hit = (a0, a1) => a0 <= ve && a1 >= vw;
    return hit(w, e) || hit(w + 360, e + 360) || hit(w - 360, e - 360);
  };
  const inView = p => p && p[0] > 8 && p[0] < W - 8 && p[1] > 8 && p[1] < Hh - 8;
  if (st.spin) {
    return F.filter(f => (f.ar * k * k >= 0.0022 || f === st.sel) && d3.geoDistance(f.mainCen || f.cen, center) < Math.PI / 2 - 0.05)
      .map(f => ({ f, p: proj(f.mainCen || f.cen), w: f.ar + (f === st.sel ? 1e6 : 0) }))
      .filter(o => inView(o.p))
      .sort((a, b) => b.w - a.w);
  }
  const minScaledAr = k >= 2.8 ? 0 : k >= 1.85 ? 0.00018 : k >= 1.35 ? 0.00032 : 0.00055;
  const maxAng = Math.PI / 2 - 0.04;
  const list = [];
  for (const f of F) {
    if (f.rg === 'antarctic' && k < 2 && f !== st.sel) continue;
    if (f !== st.sel && f !== st.hov) {
      if (f.ar < 0.00004 && k < 2.8) continue;
      if (f.rg === 'territory' && f.ar < 0.0002 && k < 2.6) continue;
      if (f.ar * k * k < minScaledAr) continue;
    }
    const mc = f.mainCen || f.cen;
    let p = null;
    if (d3.geoDistance(mc, center) < maxAng) {
      const q = proj(mc);
      if (inView(q)) p = q;
    }
    if (!p && f.subCens && f.subCens.length) {
      // points inside the mainland first, then (only if the mainland is out of view) an island or exclave, so a
      // half-visible country is never named on its offshore island (China on Hainan when zoomed to Vietnam)
      const nearest = (from, to) => {
        let best = null, bestD = 1e9;
        for (let i = from; i < to; i++) {
          const sc = f.subCens[i];
          const d = d3.geoDistance(sc, center);
          if (d < maxAng - 0.02 && d < bestD) {
            const q = proj(sc);
            if (inView(q)) {
              bestD = d;
              best = q;
            }
          }
        }
        return best;
      };
      const isleN = f.isleN || 0;
      p = nearest(isleN, f.subCens.length);
      if (!p && !st.moving && f.mainAr > 0.004 && d3.geoDistance(mc, center) < maxAng) {
        // mainland centre is on this side but off screen: try the screen edge point toward it (still frames only, so
        // panning costs no more than before)
        const q = proj(mc);
        const ex = Math.max(40, Math.min(W - 40, q[0])), ey = Math.max(96, Math.min(Hh - 40, q[1])); // clear of the top bar
        const ll = proj.invert([ex, ey]);
        if (ll && d3.geoContains(coarseMain(f), ll)) p = [ex, ey];
      }
      if (!p && isleN && !mainInView(f)) p = nearest(0, isleN);
    }
    if (!p) continue;
    list.push({ f, p, w: f.ar + (f === st.sel ? 1e6 : 0) });
  }
  list.sort((a, b) => b.w - a.w);
  MAP.LC = { key, list };
  return list;
}

// ---------- render
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

const FRAME_BUDGET_MS = 14;
let hiCost = 0;
let slowFrames = 0;
let lastLowres = false;

const _baseKeyCache = new Map();
const _cleanLblCache = new Map();
const _compactLblCache = new Map();
const _twCache = new Map();

function baseKey(s) {
  let v = _baseKeyCache.get(s);
  if (v !== undefined) return v;
  v = norm(s)
    .replace(/\(.*?\)/g, '')
    .replace(/\b(tp\.?|thanh pho|tinh|quan dao|dao|vung|bang|dac khu)\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  _baseKeyCache.set(s, v);
  return v;
}

function cleanMarkerLbl(s) {
  let v = _cleanLblCache.get(s);
  if (v !== undefined) return v;
  v = s.replace(/\s*\(.*?\)\s*/g, '').trim() || s;
  _cleanLblCache.set(s, v);
  return v;
}

function compactCountryLbl(s) {
  let v = _compactLblCache.get(s);
  if (v !== undefined) return v;
  if (/^Cộng hòa\s+(.+)$/i.test(s)) v = s.replace(/^Cộng hòa\s+/i, 'CH ');
  else if (/^Các Tiểu vương quốc Ả Rập Thống nhất$/i.test(s)) v = 'UAE';
  else if (/^Bosnia và Herzegovina$/i.test(s)) v = 'Bosnia & Herz.';
  else v = EN_SHORT[s] || null;
  _compactLblCache.set(s, v);
  return v;
}

function measureW(font, txt) {
  const k2 = font + '|' + txt;
  let w = _twCache.get(k2);
  if (w !== undefined) return w;
  w = ctx.measureText(txt).width;
  _twCache.set(k2, w);
  return w;
}

function traceCountry(f, lowres) {
  if (!f || !cullOK(f)) return false;
  if (lowres || !f.parts) {
    ctx.beginPath();
    pathC(f);
    return true;
  }
  let drawn = false;
  for (const pt of f.parts) {
    if (cullOK(pt)) {
      if (!drawn) {
        ctx.beginPath();
        drawn = true;
      }
      pathC(pt);
    }
  }
  return drawn;
}

export function render(now) {
  if (!MAP.F.length) return;
  updView();
  // Coarse map only while moving at low zoom (zoomed in, culling keeps detail cheap),
  // and only if detailed frames proved too slow (adaptive budget, retry a probe frame periodically).
  let probe = false;
  if (st.moving && hiCost > FRAME_BUDGET_MS && ++slowFrames % 45 === 0) probe = true;
  const slowDev = st.moving && hiCost > FRAME_BUDGET_MS && !probe;
  const lowres = (slowDev && k < 2.5) || (st.spin && k < 1.5);
  lastLowres = lowres;
  // Labels and markers stay hidden on probe frames too, so a one-off detailed frame mid-drag doesn't flash text.
  const noText = lowres || (probe && k < 2.5);
  const coarsePrec = k > 4 ? 1.2 : k > 2 ? 0.8 : 0.5;
  proj.precision(coarsePrec);
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
  pathC(SPHERE_GEO);
  ctx.fill();

  if (st.ref.grat) {
    ctx.beginPath();
    for (const l of GRAT_LINES) if (cullOK(l)) pathC(l);
    ctx.strokeStyle = C.grat;
    ctx.lineWidth = 0.6;
    ctx.stroke();
  }

  // hovered / selected sea or gulf (under land, so the coast stays crisp; only open-water boundary arcs are stroked)
  const actSea = (st.sel && st.sel.kind === 'sea' && st.sel) || (st.hov && st.hov.kind === 'sea' && st.hov);
  if (actSea && actSea.geo && actSea.type !== 'ocean' && cullOK(actSea)) {
    ctx.beginPath();
    pathC(actSea.geo);
    ctx.fillStyle = mix(C.accent, st.sel === actSea ? 0.34 : 0.2);
    ctx.fill();
    if (actSea.wGeo) {
      ctx.beginPath();
      pathC(actSea.wGeo);
      ctx.strokeStyle = mix(C.accent, 0.75);
      ctx.lineWidth = 1.3;
      ctx.stroke();
    }
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

  // land (vertices in 50m/110m topojson are already dense; precision(0) avoids expensive recursive midpoint resampling)
  proj.precision(0);
  for (const f of feats) {
    if (!traceCountry(f, lowres)) continue;
    const src = lowres ? BY[f.properties.name] || f : f;
    ctx.fillStyle = landColor(src.en ? src : { en: f.properties.name, j: 0 });
    ctx.fill();
  }

  // selected / hover country
  const sc = st.sel && st.sel.isCountry ? st.sel : null;
  if (sc && !st.al && traceCountry(sc, lowres)) {
    ctx.fillStyle = mix(C.accent, C.dark ? 0.45 : 0.3);
    ctx.fill();
  }

  proj.precision(coarsePrec);
  // land-type hotspot polygons (above land)
  H.forEach(h => {
    if (h.kind !== 'poly' || h.sea || NAT.has(h.t) || !vh(h)) return;
    const c = h.t === 'terrain' ? '#639922' : LAYERS[h.t].c;
    ctx.beginPath();
    pathC(h.geo);
    ctx.fillStyle = mix(c, st.sel === h ? 0.34 : 0.18);
    ctx.fill();
  });

  proj.precision(0);
  if (st.hov && st.hov.isCountry && st.hov !== sc && traceCountry(st.hov, lowres)) {
    ctx.fillStyle = C.dark ? 'rgba(255,255,255,.12)' : 'rgba(255,255,255,.45)';
    ctx.fill();
  }
  proj.precision(coarsePrec);

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
      if (h.t !== 'ice' || h.kind !== 'poly' || !vh(h)) return;
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

  // 2) Land-clipped biomes (desert, forest, terrain) so they never bleed into ocean/gulfs
  if (st.on.desert || st.on.forest || st.on.terrain) {
    ctx.save();
    proj.precision(0);
    ctx.beginPath();
    for (const f of MAP.F110) {
      if (cullOK(f)) pathC(f);
    }
    ctx.clip();
    proj.precision(coarsePrec);

    H.forEach(h => {
      if (h.kind !== 'poly' || h.t === 'ice' || !NAT.has(h.t) || !vh(h)) return;
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

    ctx.restore();
  }

  // 3) Mountain footprints (batched for fast rendering)
  proj.precision(0);
  if (st.on.mountain) {
    ctx.beginPath();
    let selMtn = null;
    for (const h of H) {
      if (h.t !== 'mountain' || !h.polyGeo || !vh(h)) continue;
      if (st.sel === h) {
        selMtn = h;
        continue;
      }
      pathC(h.polyGeo);
    }
    ctx.fillStyle = C.dark ? mix('#B08A5E', 0.14) : mix('#8A6540', 0.12);
    ctx.fill();

    if (selMtn) {
      ctx.beginPath();
      pathC(selMtn.polyGeo);
      ctx.fillStyle = C.dark ? mix('#B08A5E', 0.30) : mix('#8A6540', 0.24);
      ctx.fill();
      ctx.strokeStyle = C.dark ? '#D2A978' : '#6B4423';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
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
        pathC(f.lineGeo || f);
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

  // continent outlines replace the plain coastline (same arcs, colored per continent)
  const contSet = st.on.continents ? (lowres ? MAP.CONT110 : MAP.CONT50) : null;
  if (!contSet) {
    ctx.beginPath();
    for (const l of lowres ? MAP.K110 : MAP.K50) if (cullOK(l)) pathC(l);
    ctx.strokeStyle = C.coast;
    ctx.lineWidth = 0.6;
    ctx.stroke();
  } else {
    // continent outlines (coastline per continent + dashed land boundaries between continents)
    const act = [st.hov, st.sel].filter(o => o && o.kind === 'cont');
    // a heatmap or bloc colouring is the subject: fade the outlines so they don't fight its colours
    const dimCont = !!st.al && !act.length;
    const baseW = dimCont ? 1 : Math.min(2.4, 1.5 + k * 0.12);
    if (dimCont) ctx.globalAlpha = 0.28;
    ctx.lineJoin = 'round';
    for (const key of CONT_KEYS) {
      ctx.beginPath();
      for (const l of contSet.lines[key]) if (cullOK(l)) pathC(l);
      ctx.strokeStyle = contColor(key);
      ctx.lineWidth = act.some(o => o.subs.includes(key)) ? baseW + 1.4 : baseW;
      ctx.stroke();
    }
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    for (const l of contSet.pc) if (cullOK(l)) pathC(l);
    ctx.strokeStyle = contColor('nam');
    ctx.lineWidth = baseW + 0.4;
    ctx.stroke();
    ctx.beginPath();
    for (const g2 of CONT_LINE_GEOS) if (cullOK(g2)) pathC(g2);
    ctx.strokeStyle = C.dark ? 'rgba(236,239,246,.85)' : 'rgba(38,38,46,.72)';
    ctx.lineWidth = baseW + 0.4;
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.lineJoin = 'miter';
    ctx.globalAlpha = 1;
  }

  if (sc) {
    if (traceCountry(sc, lowres)) {
      ctx.strokeStyle = st.al ? (C.dark ? '#fff' : '#1F1E1B') : C.accent;
      ctx.lineWidth = st.al ? 2.2 : 1.6;
      ctx.stroke();
    }

    // tiny countries (Monaco, Liechtenstein...) are invisible at globe scale: draw a pulsing ring marker
    if (tinyPx(sc) < 900) {
      try {
        const ll = sc.mainCen || sc.cen;
        const b = d3.geoPath(proj).bounds(sc);
        const sz = Math.max(b[1][0] - b[0][0], b[1][1] - b[0][1]);
        const p = ll && proj(ll);
        const vis = p && d3.geoDistance(ll, VIEW.c) < Math.PI / 2;
        if (vis && isFinite(sz) && sz < 28) {
          const pulse = (Date.now() % 1400) / 1400;
          const r2 = Math.max(10, sz / 2 + 8);
          ctx.beginPath();
          ctx.arc(p[0], p[1], r2, 0, Math.PI * 2);
          ctx.strokeStyle = C.dark ? '#fff' : '#1F1E1B';
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(p[0], p[1], r2 + pulse * 12, 0, Math.PI * 2);
          ctx.strokeStyle = C.dark ? `rgba(255,255,255,${0.7 * (1 - pulse)})` : `rgba(31,30,27,${0.7 * (1 - pulse)})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          st.dirty = true;
        }
      } catch (e) {}
    }
  }
  proj.precision(coarsePrec);

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
  const drawRefGeo = (geo, c, dash) => {
    ctx.beginPath();
    pathC(geo);
    ctx.setLineDash(dash || []);
    ctx.strokeStyle = c;
    ctx.lineWidth = 1.3;
    ctx.stroke();
    ctx.setLineDash([]);
  };
  if (st.ref.eq) drawRefGeo(REF_GEOS.eq, REF.eq.c);
  if (st.ref.trop) drawRefGeo(REF_GEOS.trop, REF.trop.c, [6, 4]);
  if (st.ref.polar) drawRefGeo(REF_GEOS.polar, REF.polar.c, [6, 4]);
  if (st.ref.pm) drawRefGeo(REF_GEOS.pm, REF.pm.c);

  // Real-time Solar Terminator & Day/Night shadow (st.ref.daynight)
  if (st.ref.daynight) {
    const sol = getSolarGeos();
    ctx.beginPath();
    pathC(sol.night90);
    ctx.fillStyle = C.dark ? 'rgba(2, 6, 18, 0.34)' : 'rgba(12, 24, 48, 0.16)';
    ctx.fill();

    ctx.beginPath();
    pathC(sol.night82);
    ctx.fillStyle = C.dark ? 'rgba(2, 6, 18, 0.24)' : 'rgba(12, 24, 48, 0.12)';
    ctx.fill();

    ctx.beginPath();
    pathC(sol.night72);
    ctx.fillStyle = C.dark ? 'rgba(2, 6, 18, 0.18)' : 'rgba(12, 24, 48, 0.10)';
    ctx.fill();

    // Solar Terminator twilight curve
    ctx.beginPath();
    pathC(sol.night90);
    ctx.setLineDash([4, 3]);
    ctx.strokeStyle = C.dark ? 'rgba(251, 191, 36, 0.55)' : 'rgba(217, 119, 6, 0.50)';
    ctx.lineWidth = 1.25;
    ctx.stroke();
    ctx.setLineDash([]);

    // Subsolar Sun marker (zenith point)
    const centerCheck = proj.invert([cx, cy]);
    if (centerCheck && d3.geoDistance(sol.sunPt, centerCheck) < Math.PI / 2 - 0.03) {
      const sq = proj(sol.sunPt);
      if (sq) {
        const sg = ctx.createRadialGradient(sq[0], sq[1], 2, sq[0], sq[1], 16);
        sg.addColorStop(0, 'rgba(251, 191, 36, 0.85)');
        sg.addColorStop(0.45, 'rgba(245, 158, 11, 0.28)');
        sg.addColorStop(1, 'rgba(245, 158, 11, 0)');
        ctx.fillStyle = sg;
        ctx.beginPath();
        ctx.arc(sq[0], sq[1], 16, 0, 7);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(sq[0], sq[1], 4.2, 0, 7);
        ctx.fillStyle = '#FBBF24';
        ctx.fill();
        ctx.lineWidth = 1.4;
        ctx.strokeStyle = C.dark ? '#0A0E15' : '#FFFBEB';
        ctx.stroke();
      }
    }
  }

  // timezone meridian lines & alternating bands (st.on.timezone)
  if (st.on.timezone) {
    // Subtle alternating band fills for even offsets
    ctx.beginPath();
    pathC(TZ_BANDS_GEO);
    ctx.fillStyle = C.dark ? 'rgba(56, 189, 248, 0.035)' : 'rgba(2, 132, 199, 0.035)';
    ctx.fill();

    // Boundary meridians (every 15° at ±7.5°)
    ctx.beginPath();
    pathC(TZ_MERIDIANS_GEO);
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = C.dark ? 'rgba(56, 189, 248, 0.42)' : 'rgba(2, 132, 199, 0.38)';
    ctx.lineWidth = 1.0;
    ctx.stroke();

    // International Date Line (180°)
    ctx.beginPath();
    pathC(TZ_IDL_GEO);
    ctx.setLineDash([6, 3]);
    ctx.strokeStyle = C.dark ? 'rgba(251, 191, 36, 0.72)' : 'rgba(217, 119, 6, 0.70)';
    ctx.lineWidth = 1.4;
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // mountain ranges: a row of upright "^" peaks along the ridge line (clearer than a dotted stroke)
  const drawMountainChevrons = (h, color, act) => {
    const size = Math.min(9.5, 4 + k * 0.7);
    const step = size * 1.5;
    const half = size * 0.62;
    ctx.beginPath();
    let n = 0;
    for (const l of h.dense) {
      let acc = step / 2, prev = null;
      for (let i = 0; i < l.length; i++) {
        const ll = l[i];
        if (d3.geoDistance(ll, VIEW.c) > Math.PI / 2 - 0.02) { prev = null; continue; }
        const q = proj(ll);
        if (!q) { prev = null; continue; }
        if (prev) acc += Math.hypot(q[0] - prev[0], q[1] - prev[1]);
        prev = q;
        if (acc < step) continue;
        acc = 0;
        if (q[0] < -20 || q[0] > W + 20 || q[1] < -20 || q[1] > Hh + 20) continue;
        const sz = size * (0.8 + 0.4 * (((n++ * 7) % 5) / 4)); // slight height variation so it reads as a ridge
        const hf = half * (sz / size);
        ctx.moveTo(q[0] - hf, q[1] + sz * 0.45);
        ctx.lineTo(q[0], q[1] - sz * 0.55);
        ctx.lineTo(q[0] + hf, q[1] + sz * 0.45);
      }
    }
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = color;
    ctx.lineWidth = act ? 2.3 : 1.7;
    ctx.stroke();
  };

  // hotspot lines
  H.forEach(h => {
    if (h.kind !== 'line' || !vh(h)) return;
    const c = hc(h);
    const act = st.sel === h || st.hov === h;
    if (h.t === 'mountain' || h.mtn) {
      if (st.al && !act) ctx.globalAlpha = 0.3; // faded under a heatmap or bloc colouring
      drawMountainChevrons(h, act ? (C.dark ? '#D2A978' : '#6B4423') : C.dark ? '#B08A5E' : '#8A6540', act);
      ctx.globalAlpha = 1;
      return;
    }
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
      ctx.setLineDash([3, 4]);
    } else if (h.dash) {
      ctx.setLineDash([8, 6]);
    }
    ctx.strokeStyle = act ? c : mix(c, h.t === 'mountain' || h.mtn ? 0.72 : 0.85);
    const baseW =
      h.t === 'mountain' || h.mtn
        ? 1.85
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
  if (!noText && k >= 1.4) {
    const cen0 = proj.invert(proj.translate());
    for (const f of MAP.F) {
      if (f.rg === 'antarctic') continue;
      const px = tinyPx(f);
      if (px >= 120) continue;
      const mc = f.mainCen || f.cen;
      if (d3.geoDistance(mc, cen0) > Math.PI / 2 - 0.03) continue;
      const q = proj(mc);
      if (!q || q[0] < 0 || q[0] > W || q[1] < 0 || q[1] > Hh) continue;
      ctx.beginPath();
      ctx.arc(q[0], q[1], (f === sc || f === st.hov ? 4.2 : 2.9) * (coarse ? 1.35 : 1), 0, 7);
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
  const iconBoxes = [];
  const placedNames = new Set();
  const vis = p => d3.geoDistance(p, centerPt) < 1.45;
  const overlapsAny = (box, list) =>
    list.some(b => !(box[0] > b[0] + b[2] || box[0] + box[2] < b[0] || box[1] > b[1] + b[3] || box[1] + box[3] < b[1]));
  const inViewport = box => box[0] >= 2 && box[0] + box[2] <= W - 2 && box[1] >= 2 && box[1] + box[3] <= Hh - 2;
  const tryPlace = (box, nameKey) => {
    if (nameKey && placedNames.has(nameKey)) return false;
    if (!inViewport(box)) return false;
    if (overlapsAny(box, placed)) return false;
    placed.push(box);
    if (nameKey) placedNames.add(nameKey);
    return true;
  };

  const pushIconBox = (q, r2 = 3.5) => {
    if (q) iconBoxes.push([q[0] - r2, q[1] - r2, r2 * 2, r2 * 2]);
  };

  // 1. Draw point marker icons first (Capitals, Islands, Cities) & queue their text labels
  //    so Country labels take placement priority over Capital/City text labels!
  const capLabels = [];
  if (st.on.capitals) {
    for (const cap of CAPITALS) {
      const act = st.sel === cap || st.hov === cap;
      if (!act && (cap.rank === 1 ? k < 1.05 : cap.rank === 2 ? k < 1.55 : k < 2.2)) continue;
      if (d3.geoDistance(cap.pt, centerPt) > Math.PI / 2 - 0.02) continue;
      const q = proj(cap.pt);
      if (!q) continue;
      const rad = (act ? 5.2 : cap.rank === 1 ? 3.9 : 3.2) * (coarse ? 1.3 : 1);
      ctx.beginPath();
      ctx.arc(q[0], q[1], rad, 0, 7);
      ctx.fillStyle = C.dark ? '#0A0E15' : '#fff';
      ctx.fill();
      ctx.lineWidth = 1.4;
      ctx.strokeStyle = '#E8590C';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(q[0], q[1], (act ? 2.5 : 1.8) * (coarse ? 1.3 : 1), 0, 7);
      ctx.fillStyle = '#E8590C';
      ctx.fill();

      pushIconBox(q, coarse ? 4.5 : 3.5);
      if (act || (!noText && (cap.rank === 1 ? k >= 1.35 : cap.rank === 2 ? k >= 1.85 : k >= 2.5))) {
        capLabels.push({ q, act, raw: capName(cap) });
      }
    }
  }

  const islLabels = [];
  if (st.on.islands) {
    for (const isl of ISLANDS) {
      const act = st.sel === isl || st.hov === isl;
      if (!act && (isl.rank === 1 ? k < 1.15 : k < 1.85)) continue;
      if (d3.geoDistance(isl.pt, centerPt) > Math.PI / 2 - 0.02) continue;
      const q = proj(isl.pt);
      if (!q) continue;
      const s = (act ? 5.2 : 3.4) * (coarse ? 1.3 : 1);
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

      pushIconBox(q, coarse ? 4.5 : 3.5);
      if (act || (!noText && (isl.rank === 1 ? k >= 1.5 : k >= 2.2))) {
        islLabels.push({ q, act, raw: islName(isl) });
      }
    }
  }

  const cityLabels = [];
  if (st.on.cities) {
    for (const ct of CITIES) {
      const act = st.sel === ct || st.hov === ct;
      if (!act && (ct.rank === 1 ? k < 1.3 : k < 1.9)) continue;
      if (d3.geoDistance(ct.pt, centerPt) > Math.PI / 2 - 0.02) continue;
      const q = proj(ct.pt);
      if (!q) continue;
      const s = (act ? 3.3 : 2.5) * (coarse ? 1.3 : 1);
      ctx.beginPath();
      ctx.rect(q[0] - s, q[1] - s, s * 2, s * 2);
      ctx.fillStyle = '#2563EB';
      ctx.fill();
      ctx.lineWidth = 1.3;
      ctx.strokeStyle = C.dark ? '#0A0E15' : '#fff';
      ctx.stroke();

      pushIconBox(q, 3.2);
      if (act || (!noText && (ct.rank === 1 ? k >= 1.65 : k >= 2.3))) {
        cityLabels.push({ q, act, raw: cityName(ct) });
      }
    }
  }

  // Reserve hotspot point icons in iconBoxes
  H.forEach(h => {
    if (h.kind !== 'pt' || !vh(h)) return;
    const p = h.geo.coordinates;
    if (!vis(p) || d3.geoDistance(p, centerPt) > Math.PI / 2 - 0.02) return;
    pushIconBox(proj(p), coarse ? 6 : 4.5);
  });

  // 2. Timezone 24-hour Clock Badges (st.on.timezone — placed before country/ocean labels so they never get blocked or overlap text)
  // countries whose name is already written in a placed timezone badge: their plain country label is skipped
  const tzNamed = new Set();
  if (st.on.timezone) {
    const utcMin = Math.floor(Date.now() / 60000);
    const placedTz = [];
    const fmtTz = offHours => {
      const total = (((utcMin + Math.round(offHours * 60)) % 1440) + 1440) % 1440;
      const h24 = Math.floor(total / 60);
      const m = total % 60;
      const pad = v => (v < 10 ? '0' + v : '' + v);
      const isDay = h24 >= 6 && h24 < 18;
      // 24-hour clock (00:15, 23:05) in both languages, so midnight is never misread
      return { time: `${pad(h24)}:${pad(m)}`, isDay };
    };
    const tryPlaceTz = box => {
      if (box[0] < 4 || box[0] + box[2] > W - 4 || box[1] < 4 || box[1] + box[3] > Hh - 4) return false;
      if (overlapsAny(box, placedTz)) return false;
      placedTz.push(box);
      placed.push(box);
      return true;
    };
    const drawTzBadge = (candPts, topTxt, subTxt, isDay) => {
      ctx.font = '600 10px "Be Vietnam Pro",system-ui,sans-serif';
      const w1 = ctx.measureText(topTxt).width;
      ctx.font = '500 9px "Be Vietnam Pro",system-ui,sans-serif';
      const w2 = ctx.measureText(subTxt).width;
      const bw = Math.max(w1 + 14, w2 + 10, 52);
      const bh = 26;

      let chosenQ = null;
      for (const pt of candPts) {
        if (d3.geoDistance(pt, centerPt) > Math.PI / 2 - 0.06) continue;
        const q = proj(pt);
        if (!q) continue;
        if (Math.hypot(q[0] - cx, q[1] - cy) > r - 24) continue;
        const bx = q[0] - bw / 2, by = q[1] - bh / 2;
        if (tryPlaceTz([bx - 2, by - 2, bw + 4, bh + 4])) {
          chosenQ = q;
          break;
        }
      }
      if (!chosenQ) return false;

      const bx = chosenQ[0] - bw / 2, by = chosenQ[1] - bh / 2;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(bx, by, bw, bh, 6);
      else ctx.rect(bx, by, bw, bh);
      ctx.fillStyle = C.dark ? 'rgba(11, 20, 34, 0.90)' : 'rgba(255, 255, 255, 0.92)';
      ctx.fill();
      ctx.lineWidth = 1.1;
      ctx.strokeStyle = isDay
        ? C.dark
          ? 'rgba(251, 191, 36, 0.65)'
          : 'rgba(217, 119, 6, 0.55)'
        : C.dark
        ? 'rgba(56, 189, 248, 0.60)'
        : 'rgba(2, 132, 199, 0.50)';
      ctx.stroke();

      // Day/Night indicator dot
      ctx.beginPath();
      ctx.arc(bx + 7.5, by + 9, 2.4, 0, 7);
      ctx.fillStyle = isDay ? '#F59E0B' : '#38BDF8';
      ctx.fill();

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '600 10px "Be Vietnam Pro",system-ui,sans-serif';
      ctx.fillStyle = C.dark ? '#F8FAFC' : '#0F172A';
      ctx.fillText(topTxt, chosenQ[0] + 3, by + 9);

      ctx.font = '500 8.8px "Be Vietnam Pro",system-ui,sans-serif';
      ctx.fillStyle = isDay
        ? C.dark
          ? '#FCD34D'
          : '#B45309'
        : C.dark
        ? '#7DD3FC'
        : '#0369A1';
      ctx.fillText(subTxt, chosenQ[0], by + 19.5);
      return true;
    };

    // Badges are pinned to fixed geographic anchors (independent of view centre / zoom), so they
    // move with the globe instead of sliding around. Neighbours alternate between two fixed
    // latitudes so they don't collide; the priority order is fixed too, so nothing swaps places.
    const offsets = d3.range(-11, 13).sort((a, b) => Math.abs(a) - Math.abs(b));
    for (const off of offsets) {
      const lonC = off === 12 ? 180 : off * 15;
      const { time, isDay } = fmtTz(off);
      const lbl = off === 0 ? 'UTC±0' : off === 12 ? 'UTC±12' : `UTC${off > 0 ? '+' + off : off}`;
      drawTzBadge([[lonC, off % 2 === 0 ? 20 : 6]], time, lbl, isDay);
    }

    if (k >= 1.45) {
      const isEn = st.lang === 'en';
      const specials = [
        { pt: [79.0, 22.0], off: 5.5, sub: isEn ? 'India · UTC+5:30' : 'Ấn Độ · UTC+5:30', c: 'India' },
        { pt: [53.5, 32.5], off: 3.5, sub: 'Iran · UTC+3:30', c: 'Iran' },
        { pt: [66.0, 33.8], off: 4.5, sub: 'Afghanistan · UTC+4:30', c: 'Afghanistan' },
        { pt: [96.5, 20.5], off: 6.5, sub: 'Myanmar · UTC+6:30', c: 'Myanmar' },
        { pt: [84.0, 28.2], off: 5.75, sub: 'Nepal · UTC+5:45', c: 'Nepal' },
        { pt: [134.5, -25.0], off: 9.5, sub: isEn ? 'Central AU · UTC+9:30' : 'Trung Úc · UTC+9:30' },
        { pt: [86.0, 41.5], off: 8.0, sub: isEn ? 'Xinjiang (Beijing) · UTC+8' : 'Tân Cương (giờ BK) · UTC+8' }
      ];
      for (const sp of specials) {
        const { time, isDay } = fmtTz(sp.off);
        const ok = drawTzBadge([sp.pt, [sp.pt[0], sp.pt[1] - 5], [sp.pt[0], sp.pt[1] + 5]], time, sp.sub, isDay);
        if (ok && sp.c) tzNamed.add(sp.c);
      }
    }
  }

  // 2b. Continent labels (zoomed out only); reserved before country labels so names never sit on top of them
  MAP.CONT_HITS = [];
  MAP.WATER_HITS = [];
  if (st.on.continents && k < CONT_LABEL_MAX_K) {
    const alpha = k < 1.5 ? 1 : Math.max(0, (CONT_LABEL_MAX_K - k) / (CONT_LABEL_MAX_K - 1.5));
    const canSpace = 'letterSpacing' in ctx;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';
    for (const L of CONT_LABELS) {
      if (d3.geoDistance(L.pt, centerPt) > Math.PI / 2 - 0.12) continue;
      const q = proj(L.pt);
      if (!q) continue;
      const fs = L.big ? 14 : 11.5;
      const sp = L.big ? 2.5 : 1.5;
      ctx.font = `${L.big ? 700 : 600} ${fs}px "Be Vietnam Pro",system-ui,sans-serif`;
      if (canSpace) ctx.letterSpacing = sp + 'px';
      const txt = contName(L.o).toLocaleUpperCase(isEn() ? 'en' : 'vi');
      const w = ctx.measureText(txt).width + 6;
      const hh = fs + 6;
      const box = [q[0] - w / 2, q[1] - hh / 2, w, hh];
      if (!inViewport(box)) continue;
      const on2 = st.hov === L.o || st.sel === L.o;
      ctx.lineWidth = 4;
      ctx.strokeStyle = C['label-halo'];
      ctx.strokeText(txt, q[0], q[1]);
      ctx.fillStyle = contColor(L.col || L.o.subs[0]);
      ctx.fillText(txt, q[0], q[1]);
      if (on2) {
        ctx.fillRect(box[0] + 3, box[1] + hh - 3, w - 6, 1.5);
      }
      placed.push(box);
      MAP.CONT_HITS.push({ box, o: L.o });
    }
    if (canSpace) ctx.letterSpacing = '0px';
    ctx.restore();
  }

  // 3. Country labels — placed BEFORE Capital/Island/City text labels so country names never get starved
  if (st.ref.labels && !noText) {
    // a touch smaller in the globe overview (k<1.8), full size once zoomed in
    const cfs = k < 1.8 ? 10.3 : k < 2.6 ? 10.9 : 11.5;
    const cFont = `500 ${cfs}px "Be Vietnam Pro",system-ui,sans-serif`;
    ctx.font = cFont;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const cand = labelCands(cx, cy, r);
    const hh = cfs;
    const TIERS = [
      [[0, 0]],
      [[0, -8], [0, 8], [0, -13], [0, 13], [-11, -5], [11, -5], [-11, 5], [11, 5]],
      [[0, -19], [0, 19], [-17, -9], [17, -9], [-17, 9], [17, 9]]
    ];
    const items = cand.filter(o => o.f === st.sel || !tzNamed.has(o.f.en)).map(o => {
      const full = cName(o.f.en);
      const short = compactCountryLbl(full);
      const variants = short ? [full, short] : [full];
      return {
        f: o.f,
        p: o.p,
        ar: o.f === st.sel ? 1e9 : o.f.ar,
        nk: baseKey(full),
        variants: variants.map(txt => ({ txt, w: measureW(cFont, txt) + 4 })),
        done: false,
        drawX: 0,
        drawY: 0,
        drawTxt: '',
        box: null
      };
    });

    // Multi-band + multi-tier placement: major countries place first, then medium (e.g. Czechia, Austria, Switzerland, Belgium), then small
    for (const minBand of [0.006, 0.0009, 0]) {
      for (const tier of TIERS) {
        for (const it of items) {
          if (it.done || it.ar < minBand) continue;
          if (it.nk && placedNames.has(it.nk)) {
            it.done = true;
            continue;
          }
          for (const v of it.variants) {
            let hit = false;
            for (const [dx, dy] of tier) {
              const px = it.p[0] + dx, py = it.p[1] + dy;
              const box = [px - v.w / 2, py - hh / 2, v.w, hh];
              if (tryPlace(box, it.nk)) {
                it.done = true;
                it.drawX = px;
                it.drawY = py;
                it.drawTxt = v.txt;
                it.box = box;
                hit = true;
                break;
              }
            }
            if (hit) break;
          }
        }
      }
    }

    // If a placed country label sits directly on a visible marker dot, gently nudge it if a nearby slot is free
    const NUDGES = [[0, -9], [0, 9], [0, -15], [0, 15], [-10, -6], [10, -6]];
    for (const it of items) {
      if (!it.done || !it.box) continue;
      if (overlapsAny(it.box, iconBoxes)) {
        const w = it.box[2];
        for (const [nx, ny] of NUDGES) {
          const px = it.drawX + nx, py = it.drawY + ny;
          const nbox = [px - w / 2, py - hh / 2, w, hh];
          if (! inViewport(nbox)) continue;
          if (overlapsAny(nbox, iconBoxes)) continue;
          const conflict = placed.some(
            b =>
              b !== it.box &&
              !(nbox[0] > b[0] + b[2] || nbox[0] + nbox[2] < b[0] || nbox[1] > b[1] + b[3] || nbox[1] + nbox[3] < b[1])
          );
          if (!conflict) {
            it.box[0] = nbox[0];
            it.box[1] = nbox[1];
            it.drawX = px;
            it.drawY = py;
            break;
          }
        }
      }
      ctx.lineWidth = 3;
      ctx.strokeStyle = C['label-halo'];
      ctx.strokeText(it.drawTxt, it.drawX, it.drawY);
      ctx.fillStyle = C.label;
      ctx.fillText(it.drawTxt, it.drawX, it.drawY);
    }
  }

  // Reserve all marker icon boxes now so Capital, Island, City, Admin-1, and Ocean labels never overlap marker dots
  for (const ib of iconBoxes) placed.push(ib);

  // Helper to place Capital, Island, and City labels with 4 candidate positions around the marker icon
  const placeMarkerLabels = (list, font, fillColor, strokeW) => {
    if (!list.length) return;
    ctx.font = font;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    const hh = 12.5;
    for (const item of list) {
      const { q, act, raw } = item;
      const lbl = act ? raw : cleanMarkerLbl(raw);
      const nk = baseKey(lbl);
      const tw = measureW(font, lbl);
      const w = tw + 4;
      const cands = [
        [q[0] + 6, q[1]],
        [q[0] + 5, q[1] + 9.5],
        [q[0] + 5, q[1] - 9.5],
        [q[0] - 6 - tw, q[1]]
      ];
      let chosen = null;
      if (act) {
        chosen = cands[0];
        placed.push([chosen[0] - 1, chosen[1] - hh / 2, w, hh]);
        if (nk) placedNames.add(nk);
      } else {
        for (const [lx, ly] of cands) {
          const box = [lx - 1, ly - hh / 2, w, hh];
          if (tryPlace(box, nk)) {
            chosen = [lx, ly];
            break;
          }
        }
      }
      if (chosen) {
        ctx.lineWidth = strokeW;
        ctx.strokeStyle = C['label-halo'];
        ctx.strokeText(lbl, chosen[0], chosen[1]);
        ctx.fillStyle = fillColor;
        ctx.fillText(lbl, chosen[0], chosen[1]);
      }
    }
  };

  // 4. Capital, Island & City text labels
  const mfs = k < 1.8 ? 9.7 : k < 2.6 ? 10.1 : 10.5;
  placeMarkerLabels(
    capLabels,
    `600 ${mfs}px "Be Vietnam Pro",system-ui,sans-serif`,
    C.dark ? '#FDBA74' : '#C2410C',
    2.8
  );
  placeMarkerLabels(
    islLabels,
    `500 ${mfs}px "Be Vietnam Pro",system-ui,sans-serif`,
    C.dark ? '#5EEAD4' : '#0F766E',
    2.6
  );
  placeMarkerLabels(
    cityLabels,
    `500 ${mfs}px "Be Vietnam Pro",system-ui,sans-serif`,
    C.dark ? '#93C5FD' : '#1D4ED8',
    2.6
  );

  // 5. Admin-1 labels (when zoomed in, placed after country & point markers)
  if (st.on.admin1 && !noText && k >= 2.0 && MAP.ADM1.length) {
    const aFont = 'italic 500 10.5px "Be Vietnam Pro",system-ui,sans-serif';
    ctx.font = aFont;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (const f of MAP.ADM1) {
      const act = st.sel === f || st.hov === f;
      const minAr = f.iso === 'VNM' ? 0.00025 : 0.0012;
      if (!act && f.ar * k * k < minAr) continue;
      if (d3.geoDistance(f.cen, centerPt) > Math.PI / 2 - 0.04) continue;
      const p = proj(f.cen);
      if (!p) continue;
      const lbl = adm1Name(f);
      const nk = baseKey(lbl);
      if (nk && placedNames.has(nk) && !act) continue;
      const w = measureW(aFont, lbl) + 6, hh = 13;
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
      ctx.strokeText(lbl, p[0], py);
      ctx.fillStyle = act ? C.accent : C.dark ? 'rgba(215,220,235,0.82)' : 'rgba(65,60,52,0.82)';
      ctx.fillText(lbl, p[0], py);
    }
  }

  // 6. Ocean & Sea Labels (WATER_LABELS — default on with st.ref.labels)
  if (st.ref.labels) {
    const enMode = isEn();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (const w of WATER_LABELS) {
      if (w.rank === 1) {
        if (k > 3.2) continue;
      } else if (w.rank === 2) {
        if (noText || k < 1.15) continue;
      } else {
        if (noText || k < 1.65) continue;
      }
      if (d3.geoDistance(w.pt, centerPt) > Math.PI / 2 - 0.08) continue;
      const q = proj(w.pt);
      if (!q) continue;
      const lbl = enMode ? w.en || w.n : w.n;
      const wFont =
        w.rank === 1
          ? 'italic 500 12.5px "Lora", Georgia, serif'
          : w.rank === 2
          ? 'italic 500 11.5px "Lora", Georgia, serif'
          : 'italic 500 10.5px "Lora", Georgia, serif';
      ctx.font = wFont;
      const nk = w.rank === 1 ? 'ocean_' + norm(lbl) : baseKey(lbl);
      const tw = measureW(wFont, lbl) + 8, hh = w.rank === 1 ? 16 : 14;
      const box = [q[0] - tw / 2, q[1] - hh / 2, tw, hh];
      if (!tryPlace(box, nk)) continue;
      MAP.WATER_HITS.push({ box, o: w.sea });
      const wAct = st.sel === w.sea || st.hov === w.sea;
      ctx.lineWidth = 3;
      ctx.strokeStyle = C.dark ? 'rgba(10, 22, 40, 0.72)' : 'rgba(205, 228, 246, 0.78)';
      ctx.strokeText(lbl, q[0], q[1]);
      ctx.fillStyle = wAct
        ? C.dark
          ? 'rgba(200, 228, 255, 0.98)'
          : 'rgba(10, 60, 110, 0.95)'
        : w.rank === 1
          ? C.dark
            ? 'rgba(135, 185, 238, 0.56)'
            : 'rgba(28, 86, 142, 0.52)'
          : C.dark
          ? 'rgba(148, 198, 245, 0.68)'
          : 'rgba(24, 90, 150, 0.62)';
      ctx.fillText(lbl, q[0], q[1]);
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
    const ms = coarse ? 1.3 : 1;
    if (h.t === 'strait') {
      const s = (act ? 8 : 6) * ms;
      ctx.moveTo(q[0], q[1] - s);
      ctx.lineTo(q[0] + s, q[1]);
      ctx.lineTo(q[0], q[1] + s);
      ctx.lineTo(q[0] - s, q[1]);
      ctx.closePath();
    } else if (h.t === 'base') {
      drawRegPoly(q[0], q[1], (act ? 7.5 : 6) * ms, 5);
    } else if (h.t === 'resource') {
      drawRegPoly(q[0], q[1], (act ? 7.2 : 5.8) * ms, 6, 0);
    } else {
      ctx.arc(q[0], q[1], (act ? 7 : 5.5) * ms, 0, 7);
    }
    ctx.fillStyle = c;
    ctx.fill();
    ctx.lineWidth = 1.8;
    ctx.strokeStyle = C.dark ? '#0A0E15' : '#fff';
    ctx.stroke();
    if (act || (!noText && k >= 2.2)) {
      const lbl = hName(h);
      ctx.font = '600 11px "Be Vietnam Pro",system-ui,sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      const tw = ctx.measureText(lbl).width;
      const w = tw + 6, hh = 14;
      const cands = [
        [q[0] + 9, q[1]],
        [q[0] + 8, q[1] + 10],
        [q[0] + 8, q[1] - 10],
        [q[0] - 9 - tw, q[1]]
      ];
      let chosen = null;
      if (act) {
        chosen = cands[0];
        placed.push([chosen[0], chosen[1] - hh / 2, w, hh]);
      } else {
        for (const [lx, ly] of cands) {
          if (tryPlace([lx, ly - hh / 2, w, hh])) {
            chosen = [lx, ly];
            break;
          }
        }
      }
      if (chosen) {
        ctx.lineWidth = 3;
        ctx.strokeStyle = C['label-halo'];
        ctx.strokeText(lbl, chosen[0] + 1, chosen[1]);
        ctx.fillStyle = C.dark ? d3.color(c).brighter(1.2) + '' : d3.color(c).darker(0.6) + '';
        ctx.fillText(lbl, chosen[0] + 1, chosen[1]);
      }
    }
  });

  // labels for hovered/selected line/poly hotspots or lakes
  [st.sel, st.hov].forEach(h => {
    if (!h) return;
    if (h.kind === 'lake') {
      if (!vis(h.cen)) return;
      const q = proj(h.cen);
      const lbl = lakeName(h);
      ctx.font = '600 12px "Be Vietnam Pro",system-ui,sans-serif';
      ctx.textAlign = 'center';
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = C['label-halo'];
      ctx.strokeText(lbl, q[0], q[1] - 8);
      ctx.fillStyle = C.label;
      ctx.fillText(lbl, q[0], q[1] - 8);
      return;
    }
    if (!h.id || !h.t || h.kind === 'pt' || !vh(h)) return;
    if (!vis(h.lab)) return;
    const q = proj(h.lab);
    const lbl = hName(h);
    ctx.font = '600 12px "Be Vietnam Pro",system-ui,sans-serif';
    ctx.textAlign = 'center';
    ctx.lineWidth = 3.5;
    ctx.strokeStyle = C['label-halo'];
    ctx.strokeText(lbl, q[0], q[1] - 10);
    ctx.fillStyle = C.label;
    ctx.fillText(lbl, q[0], q[1] - 10);
  });

  // shading
  g = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.35, r * 0.2, cx, cy, r * 1.02);
  g.addColorStop(0, 'rgba(255,255,255,' + (C.dark ? 0.04 : 0.1) + ')');
  g.addColorStop(0.7, 'rgba(0,0,0,0)');
  g.addColorStop(1, C.shade);
  ctx.fillStyle = g;
  ctx.beginPath();
  pathC(SPHERE_GEO);
  ctx.fill();
}

let lastTzTick = 0;

function needsAnim() {
  return st.spin || st.on.conflict || st.on.route;
}

export function loop(now) {
  if (st.spin && !st.drag) {
    const r = proj.rotate();
    proj.rotate([r[0] + 0.06, r[1], r[2]]);
    st.dirty = true;
  }
  if ((st.on.timezone || st.ref.daynight) && now - lastTzTick > 15000) {
    lastTzTick = now;
    st.dirty = true;
  }
  if (st.dirty || needsAnim()) {
    const t0 = performance.now();
    render(now);
    if (!lastLowres) {
      const dt = performance.now() - t0;
      hiCost = hiCost ? hiCost * 0.7 + dt * 0.3 : dt;
    }
    st.dirty = false;
  }
  // Still holding the pointer (paused mid-drag) counts as moving, so labels don't pop in and out.
  if (st.moving && !st.drag && now - st.lastMove > 160) {
    st.moving = false;
    st.dirty = true;
  }
  requestAnimationFrame(loop);
}

// ---------- zoom & hit-testing
export const MIN_K = 0.85;
export const MAX_K = 28;

const zoom = d3.zoom()
  .scaleExtent([MIN_K, MAX_K])
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

// Pointer type: fingers and pens need bigger hit areas and markers than a mouse. Starts from the media query and
// follows whatever the user touched last (hybrid laptops switch between both).
coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
const syncPointer = e => {
  const c = e.pointerType === 'touch' || e.pointerType === 'pen';
  if (c !== coarse) {
    coarse = c;
    st.dirty = true;
  }
};
cv.addEventListener('pointerdown', syncPointer, true);
cv.addEventListener('pointermove', syncPointer, true);

// Prevent browser page zoom (pinch-to-zoom / ctrl+wheel) when hitting map zoom limits or pinching over UI
let gestStartK = 1;
let gestWheelSeen = false;

cv.addEventListener(
  'wheel',
  e => {
    gestWheelSeen = true;
    e.preventDefault();
  },
  { passive: false }
);

window.addEventListener(
  'wheel',
  e => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      return;
    }
    const inScrollable = e.target && e.target.closest && e.target.closest('#layers, #pbody, #sugg');
    if (!inScrollable) {
      e.preventDefault();
    }
  },
  { passive: false, capture: true }
);

window.addEventListener(
  'gesturestart',
  e => {
    e.preventDefault();
    gestStartK = k;
    gestWheelSeen = false;
  },
  { passive: false, capture: true }
);

window.addEventListener(
  'gesturechange',
  e => {
    e.preventDefault();
    if (!gestWheelSeen && typeof e.scale === 'number' && e.scale > 0) {
      stopSpin();
      const nk = Math.max(MIN_K, Math.min(MAX_K, gestStartK * e.scale));
      zoom.scaleTo(sel, nk);
    }
  },
  { passive: false, capture: true }
);

window.addEventListener(
  'gestureend',
  e => {
    e.preventDefault();
  },
  { passive: false, capture: true }
);

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
  if (!dur) {
    k = nk;
    proj.scale(R0 * k);
    MAP.LC.key = '';
    st.dirty = true;
    if (typeof SVGElement !== 'undefined') zoom.scaleTo(sel, nk);
    return;
  }
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
  // 0. Continent labels (drawn last frame)
  for (const h of MAP.CONT_HITS) {
    const b = h.box;
    if (mx >= b[0] - 3 && mx <= b[0] + b[2] + 3 && my >= b[1] - 3 && my <= b[1] + b[3] + 3) return h.o;
  }
  if (Math.hypot(mx - cx, my - cy) > r) return null;
  const ll = proj.invert([mx, my]);
  if (!ll) return null;
  const centerPt = proj.invert([cx, cy]);

  // Hit reach grows with the pointer: a fingertip is ~10x wider than a cursor, and a mouse still gets some slack
  const hs = coarse ? 1.9 : 1.3;

  // 1+2. Point markers (hotspot icons, islands, capitals, cities): the nearest one inside its reach wins
  let best = null, bd = Infinity;
  const near = (o, p, tol, w = 1) => {
    if (d3.geoDistance(p, centerPt) > Math.PI / 2 - 0.02) return;
    const q = proj(p);
    if (!q) return;
    const d = Math.hypot(q[0] - mx, q[1] - my);
    if (d > tol * hs) return;
    const dw = d * w;
    if (dw < bd) {
      bd = dw;
      best = o;
    }
  };
  H.forEach(h => {
    if (h.kind === 'pt' && vh(h)) near(h, h.geo.coordinates, 10, 0.85);
  });
  if (st.on.islands) {
    for (const isl of ISLANDS) {
      if (st.sel === isl || (isl.rank === 1 ? k >= 1.15 : k >= 1.85)) near(isl, isl.pt, 9);
    }
  }
  if (st.on.capitals) {
    for (const cap of CAPITALS) {
      if (st.sel === cap || (cap.rank === 1 ? k >= 1.05 : cap.rank === 2 ? k >= 1.55 : k >= 2.2)) near(cap, cap.pt, 9);
    }
  }
  if (st.on.cities) {
    for (const ct of CITIES) {
      if (st.sel === ct || (ct.rank === 1 ? k >= 1.3 : k >= 1.9)) near(ct, ct.pt, 9);
    }
  }
  if (best) return best;

  // 2b. Drawn sea / ocean label text beats a ridge or route line running past it (a touch needs slack around the letters)
  {
    const pad = coarse ? 9 : 3;
    for (const h of MAP.WATER_HITS) {
      const b = h.box;
      if (mx >= b[0] - pad && mx <= b[0] + b[2] + pad && my >= b[1] - pad && my <= b[1] + b[3] + pad) return h.o;
    }
  }

  // 3. Active Hotspot Lines
  bd = 7 * hs;
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
          // mountain ridges are drawn as a row of ^ peaks, so they get ~1.7x the reach of a plain line
          const d = segD(mx, my, prev, q) * (h.t === 'mountain' || h.mtn ? (coarse ? 0.8 : 0.6) : 1);
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

  // 3b. Mountain footprint (the shaded band under the ^ peaks) wins over the country beneath it
  if (st.on.mountain) {
    const mt = H.find(
      h => h.t === 'mountain' && h.polyGeo && vh(h) && inBB(h, ll) && d3.geoContains(h.polyGeo, ll)
    );
    if (mt) return mt;
  }

  // 4. Tiny Countries (k >= 1.4, within 9px)
  if (k >= 1.4) {
    let bt = null, bdt = 9 * hs;
    for (const f of MAP.F) {
      const mc = f.mainCen || f.cen;
      if (tinyPx(f) >= 120 || d3.geoDistance(mc, centerPt) > Math.PI / 2) continue;
      const q = proj(mc);
      const d = Math.hypot(q[0] - mx, q[1] - my);
      if (d < bdt) {
        bdt = d;
        bt = f;
      }
    }
    if (bt) return bt;
  }

  // 5. Major Lakes
  if (MAP.LAKES.length) {
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
  if (hp) return hp;

  // Touch only: a tap that lands just off the coast or a small island still picks the country next to it
  if (coarse) {
    for (const rr of [10, 18]) {
      for (let a = 0; a < 8; a++) {
        const px = mx + rr * Math.cos((a * Math.PI) / 4), py = my + rr * Math.sin((a * Math.PI) / 4);
        if (Math.hypot(px - cx, py - cy) > r) continue;
        const l2 = proj.invert([px, py]);
        if (!l2) continue;
        const c2 = MAP.F.find(f => inBB(f, l2) && d3.geoContains(f, l2));
        if (c2) return c2;
      }
    }
  }

  // Open water: a sea or gulf outline (smallest first, so the Gulf of Tonkin wins over the South China Sea)
  for (const s of MAP.SEAS_BY_SIZE) {
    if (inBB(s, ll) && d3.geoContains(s.geo, ll)) return s;
  }
  return null;
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
  const geo = f && f.isCountry && f.mainPart && f.mainAr > f.ar * 0.75 && f.en !== 'Russia' ? f.mainPart : f;
  const b = d3.geoBounds(geo);
  let span = Math.max(b[1][0] - b[0][0], b[1][1] - b[0][1]);
  if (b[1][0] < b[0][0]) span = Math.max(b[1][0] + 360 - b[0][0], b[1][1] - b[0][1]);
  span = Math.max(span, 3);
  return Math.max(1, Math.min(16, 95 / span));
}

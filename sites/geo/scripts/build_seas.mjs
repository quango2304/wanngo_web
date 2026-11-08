// Builds public/assets/map/seas.json: the outlines used to make seas and oceans touchable on the globe.
// Source: Natural Earth 10m "geography_marine_polys" (public domain, https://www.naturalearthdata.com/).
// Usage: node scripts/build_seas.mjs <ne_10m_geography_marine_polys.geojson>
// Sub-basins/bays/straits carved out by Natural Earth are dissolved into their parent sea, interior island holes
// are dropped (since world-50m land paints on top), coastal vertices are tucked slightly under 50m land so coasts
// stay crisp without water gaps, and open-water boundary arcs (`w`) are stored separately for clean border strokes.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const src = process.argv[2];
if (!src) throw new Error('pass the Natural Earth marine_polys geojson path');

// WATER_LABELS `en` name -> Natural Earth `name`
const ALIAS = {
  'NORTH PACIFIC OCEAN': 'North Pacific Ocean',
  'SOUTH PACIFIC OCEAN': 'South Pacific Ocean',
  'INDIAN OCEAN': 'INDIAN OCEAN',
  'NORTH ATLANTIC OCEAN': 'North Atlantic Ocean',
  'SOUTH ATLANTIC OCEAN': 'South Atlantic Ocean',
  'ARCTIC OCEAN': 'Arctic Ocean',
  'SOUTHERN OCEAN': 'SOUTHERN OCEAN',
  'East Sea (South China Sea)': 'South China Sea',
  'Gulf of California': 'Golfo de California'
};

// Unlabelled sub-seas, bays, gulfs, reefs and straits in Natural Earth to dissolve into each parent sea
const SUB = {
  'Mediterranean Sea': [
    'Tyrrhenian Sea',
    'Ionian Sea',
    'Balearic Sea',
    'Golfe du Lion',
    'Ligurian Sea',
    'Alboran Sea',
    'Gulf of Gabès',
    'Gulf of Sidra',
    'Sea of Crete',
    'Strait of Gibraltar',
    'Adriatic Sea',
    'Aegean Sea',
    'Sea of Marmara',
    'Dardanelles'
  ],
  'Aegean Sea': ['Sea of Crete', 'Dardanelles'],
  'Black Sea': ['Bosporus'],
  'Red Sea': ['Gulf of Suez', 'Gulf of Aqaba', 'Bab el Mandeb'],
  'Baltic Sea': [
    'Gulf of Bothnia',
    'Gulf of Finland',
    'Gulf of Riga',
    'Stettiner Haff',
    'Kaliningrad',
    'Mecklenburger Bucht',
    'Øresund',
    'unnamed_292',
    'Kattegat'
  ],
  'North Sea': ['Waddenzee', 'Skagerrak', 'Boknafjorden'],
  'Norwegian Sea': ['Vestfjorden', 'Sognefjorden', 'Trondheimsfjorden'],
  'Barents Sea': ['White Sea', 'Storfjorden', 'Karskiye Strait', 'Matochkin Shar Strait'],
  'Kara Sea': ['Gulf of Ob', 'Yenisey Gulf', "Vil'kitskogo Strait"],
  'Laptev Sea': ['Khatanga Gulf', 'Gulf of Olen‘k', 'Gulf of Yana'],
  'East Siberian Sea': ['Dmitriy Laptev Strait', 'Chaun Bay', 'Ozero Mogotoyevo', 'Guba Gusinaya'],
  'Chukchi Sea': ['Kotzebue Sound'],
  'Beaufort Sea': ['Amundsen Gulf', 'Mackenzie Bay', 'Husky Lakes', 'Franklin Bay', 'Darnley Bay', 'unnamed_230'],
  'Baffin Bay': [
    'Melville Bay',
    'Disko Bay',
    'Kane Basin',
    'Jones Sound',
    'Eclipse Sound',
    'Uummannaq Fjord',
    'Murchison Sound',
    'Davis Strait',
    'Cumberland Sound'
  ],
  'Hudson Bay': ['James Bay', 'Foxe Basin', 'Hudson Strait', 'Ungava Bay', 'Frobisher Bay', 'Wager Bay', 'unnamed_244'],
  'Labrador Sea': ['Hamilton Inlet', 'Strait of Belle Isle'],
  'Gulf of Alaska': ['Cook Inlet', 'Prince William Sound'],
  'Bering Sea': ["Gulf of Anadyr'", 'Bristol Bay', 'Norton Sound', 'Karaginskiy Gulf', 'Baird Inlet'],
  'Sea of Okhotsk': ['Shelikhova Gulf', 'Gulf of Sakhalin', 'Uda Bay'],
  'Sea of Japan': ['Tatar Strait', 'La Pérouse Strait', 'Tsugaru Strait', 'East Korea Bay', 'Korea Strait', 'Uchiura Bay'],
  'Yellow Sea': ['Bo Hai'],
  'East China Sea': ['Hangzhou Bay', 'Yangtze River', 'Taiwan Strait'],
  'East Sea (South China Sea)': ['Strait of Singapore', 'Tayabas Bay', 'Luzon Strait'],
  'Gulf of Tonkin': ['Qiongzhou Strait'],
  'Andaman Sea': ['Gulf of Martaban', 'Strait of Malacca'],
  'Bay of Bengal': ['Palk Strait', 'Gulf of Mannar'],
  'Arabian Sea': ['Gulf of Kutch', 'Gulf of Khambhät', 'Gulf of Masira', 'Laccadive Sea'],
  'Mozambique Channel': ['Baia de Maputo'],
  'Gulf of Guinea': ['Bight of Benin', 'Bight of Biafra'],
  'Caribbean Sea': ['Gulf of Honduras', 'Golfo de Urabá', 'Lago de Maracaibo', 'Yucatan Channel'],
  'Gulf of Mexico': ['Bahía de Campeche', 'Straits of Florida', 'Lake Pontchartrain'],
  'Philippine Sea': ['Inner Sea', 'Davao Gulf', 'Leyte Gulf', 'Surigao Strait', 'Samar Sea', 'unnamed_272'],
  'Sulu Sea': ['Sibuyan Sea', 'Visayan Sea', 'Bohol Sea', 'Ragay Gulf', 'unnamed_274'],
  'Celebes Sea': ['Makassar Strait', 'Molucca Sea', 'Gulf of Tomini'],
  'Java Sea': ['Bali Sea', 'Selat Bali'],
  'Banda Sea': ['Flores Sea', 'Ceram Sea', 'Savu Sea'],
  'Arafura Sea': ['Gulf of Carpentaria', 'Torres Strait'],
  'Timor Sea': ['Joseph Bonaparte Gulf'],
  'Coral Sea': ['Great Barrier Reef', 'Gulf of Papua', 'Solomon Sea'],
  'Tasman Sea': ['Bass Strait', 'Cook Strait'],
  'Ross Sea': ['McMurdo Sound', 'Sulzberger Bay', 'Wrigley Gulf']
};

// Decode world-50m.json land polygons so coastal vertices can be tucked underneath 50m land
const w50 = JSON.parse(fs.readFileSync(path.join(here, '../public/assets/map/world-50m.json'), 'utf8'));
const [sx, sy] = w50.transform.scale;
const [tx, ty] = w50.transform.translate;
const arcs = w50.arcs.map(arc => {
  let x = 0, y = 0;
  return arc.map(([dx, dy]) => [tx + (x += dx) * sx, ty + (y += dy) * sy]);
});
const decRing = idxList => {
  const pts = [];
  for (const i of idxList) {
    const a = i >= 0 ? arcs[i] : arcs[~i].slice().reverse();
    for (let k = 0; k < a.length; k++) if (!pts.length || k > 0) pts.push(a[k]);
  }
  return pts;
};
const landPolys = [];
for (const g of w50.objects.countries.geometries) {
  const polys = g.type === 'Polygon' ? [g.arcs] : g.type === 'MultiPolygon' ? g.arcs : [];
  for (const p of polys) {
    const ring = decRing(p[0]);
    let minX = 1e9, minY = 1e9, maxX = -1e9, maxY = -1e9;
    for (const [x, y] of ring) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
    if (maxX - minX < 300) landPolys.push({ ring, minX, minY, maxX, maxY });
  }
}
function inLand([x, y]) {
  for (const lp of landPolys) {
    if (x < lp.minX || x > lp.maxX || y < lp.minY || y > lp.maxY) continue;
    const r = lp.ring;
    let inside = false;
    for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
      const xi = r[i][0], yi = r[i][1], xj = r[j][0], yj = r[j][1];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
    }
    if (inside) return true;
  }
  return false;
}

const stateJs = fs.readFileSync(path.join(here, '../public/js/state.js'), 'utf8');
const block = stateJs.slice(stateJs.indexOf('export const WATER_LABELS'), stateJs.indexOf('export const CAP_BY_ID'));
const names = [...new Set([...block.matchAll(/en: '([^']+)'/g)].map(m => m[1]))];

const gj = JSON.parse(fs.readFileSync(src, 'utf8'));
const byName = new Map();
gj.features.forEach((f, idx) => {
  const nm = f.properties.name || `unnamed_${idx}`;
  if (!byName.has(nm)) byName.set(nm, []);
  byName.get(nm).push(f);
});

const key = ([x, y]) => `${x.toFixed(3)},${y.toFixed(3)}`;
const roundPt = ([x, y]) => [Math.round(x * 100) / 100, Math.round(y * 100) / 100];

function dp(pts, tol, checkLand = false) {
  if (pts.length < 5) return pts;
  // a closed ring has identical ends, so simplify its two halves separately
  if (pts[0][0] === pts[pts.length - 1][0] && pts[0][1] === pts[pts.length - 1][1]) {
    const m = pts.length >> 1;
    return [...dp(pts.slice(0, m + 1), tol, checkLand), ...dp(pts.slice(m), tol, checkLand).slice(1)];
  }
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    if (b - a <= 1) continue;
    let md = 0, mi = -1;
    const [ax, ay] = pts[a], [bx, by] = pts[b];
    const dx = bx - ax, dy = by - ay, L = Math.hypot(dx, dy) || 1e-9;
    for (let i = a + 1; i < b; i++) {
      const d = Math.abs((pts[i][0] - ax) * dy - (pts[i][1] - ay) * dx) / L;
      if (d > md) {
        md = d;
        mi = i;
      }
    }
    let force = false;
    if (checkLand && md <= tol && mi !== -1 && inLand(pts[a]) && inLand(pts[b]) && inLand(pts[mi])) {
      if (!inLand([(ax + bx) * 0.5, (ay + by) * 0.5])) force = true;
    }
    if (md > tol || force) {
      keep[mi] = 1;
      stack.push([a, mi], [mi, b]);
    }
  }
  return pts.filter((_, i) => keep[i]);
}

const out = {};
const missing = [];
for (const en of names) {
  const baseName = ALIAS[en] || en;
  const baseFeat = (byName.get(baseName) || [])[0];
  if (!baseFeat) {
    missing.push(en);
    continue;
  }
  const cls = baseFeat.properties.featurecla;
  if (cls === 'ocean') {
    const polys = baseFeat.geometry.type === 'Polygon' ? [baseFeat.geometry.coordinates] : baseFeat.geometry.coordinates;
    const g = polys
      .map(p => p.map(r => dp(r, 0.35).map(roundPt)).filter(r => r.length >= 4))
      .filter(p => p.length);
    out[en] = { t: cls, g };
    continue;
  }

  const featNames = new Set([baseName, ...(SUB[en] || [])]);
  const feats = [...featNames].flatMap(n => byName.get(n) || []);
  const otherFeats = gj.features.filter((f, idx) => !featNames.has(f.properties.name || `unnamed_${idx}`));
  const waterV = new Set();
  for (const f of otherFeats) {
    const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
    for (const p of polys) for (const r of p) for (const pt of r) waterV.add(key(pt));
  }

  // Dissolve shared interior half-edges across all merged polygons
  const edges = new Map();
  for (const f of feats) {
    const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
    for (const p of polys) {
      const r = p[0];
      for (let i = 0; i < r.length - 1; i++) {
        const a = key(r[i]), b = key(r[i + 1]);
        if (a === b) continue;
        const rev = `${b}->${a}`;
        if (edges.has(rev)) edges.delete(rev);
        else edges.set(`${a}->${b}`, [r[i], r[i + 1]]);
      }
    }
  }

  const outMap = new Map();
  for (const [k, [p1, p2]] of edges) {
    const [a, b] = k.split('->');
    if (!outMap.has(a)) outMap.set(a, []);
    outMap.get(a).push({ k, b, p1, p2 });
  }

  const usedEdge = new Set();
  const outerRings = [];
  for (const [k] of edges) {
    if (usedEdge.has(k)) continue;
    const ring = [];
    let curEdge = outMap.get(k.split('->')[0]).find(e => e.k === k);
    while (curEdge && !usedEdge.has(curEdge.k)) {
      usedEdge.add(curEdge.k);
      ring.push(curEdge.p1);
      const cands = (outMap.get(curEdge.b) || []).filter(e => !usedEdge.has(e.k));
      curEdge = cands[0];
    }
    if (ring.length < 3) continue;
    let area = 0;
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i], b = ring[(i + 1) % ring.length];
      area += a[0] * b[1] - b[0] * a[1];
    }
    // Keep outer clockwise rings (area < 0), dropping positive-area island holes
    if (area / 2 < -0.01) outerRings.push({ ring, area: area / 2 });
  }
  outerRings.sort((a, b) => a.area - b.area);

  const g = [];
  const waterLines = [];
  for (const { ring } of outerRings) {
    const n = ring.length;
    // Extract open-water boundary chains (excluding antimeridian seams)
    let curW = [];
    for (let i = 0; i < n; i++) {
      const pt = ring[i];
      const nextPt = ring[(i + 1) % n];
      const onAntimeridian = Math.abs(pt[0]) > 179.9 && Math.abs(nextPt[0]) > 179.9;
      if (!onAntimeridian && waterV.has(key(pt)) && waterV.has(key(nextPt))) {
        if (!curW.length) curW.push(pt);
        curW.push(nextPt);
      } else if (curW.length) {
        if (curW.length >= 2) waterLines.push(dp(curW, 0.05).map(roundPt));
        curW = [];
      }
    }
    if (curW.length >= 2) waterLines.push(dp(curW, 0.05).map(roundPt));

    // Tuck coastal vertices slightly inland under 50m land so coasts have zero water gap
    const tucked = ring.map((pt, i) => {
      if (waterV.has(key(pt))) return pt;
      const prev = ring[(i - 1 + n) % n];
      const next = ring[(i + 1) % n];
      const dx = next[0] - prev[0], dy = next[1] - prev[1];
      const L = Math.hypot(dx, dy) || 1;
      const nx = -dy / L, ny = dx / L;
      for (const d of [0.1, 0.07, 0.04, 0.02]) {
        const cand = [pt[0] + nx * d, pt[1] + ny * d];
        if (inLand(cand)) return cand;
      }
      return pt;
    });
    tucked.push(tucked[0]);
    const simp = dp(tucked, 0.045, true).map(roundPt);
    if (simp.length >= 4) g.push([simp]);
  }
  out[en] = { t: cls, g, w: waterLines.length ? waterLines : undefined };
}
if (missing.length) console.error('NOT FOUND in Natural Earth:', missing);
fs.writeFileSync(path.join(here, '../public/assets/map/seas.json'), JSON.stringify(out));
console.log('seas:', Object.keys(out).length, 'of', names.length, fs.statSync(path.join(here, '../public/assets/map/seas.json')).size, 'bytes');

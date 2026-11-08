// Builds public/assets/map/seas.json: the outlines used to make seas and oceans touchable on the globe.
// Source: Natural Earth 10m "geography_marine_polys" (public domain, https://www.naturalearthdata.com/).
// Usage: node scripts/build_seas.mjs <ne_10m_geography_marine_polys.geojson>
// Only features named in WATER_LABELS (public/js/state.js) are kept, simplified (Douglas-Peucker) and rounded.
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

const stateJs = fs.readFileSync(path.join(here, '../public/js/state.js'), 'utf8');
const block = stateJs.slice(stateJs.indexOf('export const WATER_LABELS'), stateJs.indexOf('export const CAP_BY_ID'));
const names = [...new Set([...block.matchAll(/en: '([^']+)'/g)].map(m => m[1]))];

const gj = JSON.parse(fs.readFileSync(src, 'utf8'));
const byName = new Map(gj.features.filter(f => f.properties.name).map(f => [f.properties.name, f]));

function dp(pts, tol) {
  if (pts.length < 5) return pts;
  // a closed ring has identical ends, so simplify its two halves separately
  if (pts[0][0] === pts[pts.length - 1][0] && pts[0][1] === pts[pts.length - 1][1]) {
    const m = pts.length >> 1;
    return [...dp(pts.slice(0, m + 1), tol), ...dp(pts.slice(m), tol).slice(1)];
  }
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    let md = 0, mi = -1;
    const [ax, ay] = pts[a], [bx, by] = pts[b];
    const dx = bx - ax, dy = by - ay, L = Math.hypot(dx, dy) || 1e-9;
    for (let i = a + 1; i < b; i++) {
      const d = Math.abs((pts[i][0] - ax) * dy - (pts[i][1] - ay) * dx) / L;
      if (d > md) { md = d; mi = i; }
    }
    if (md > tol) { keep[mi] = 1; stack.push([a, mi], [mi, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}

const out = {};
const missing = [];
for (const en of names) {
  const f = byName.get(ALIAS[en] || en);
  if (!f) { missing.push(en); continue; }
  const cls = f.properties.featurecla;
  const tol = cls === 'ocean' ? 0.35 : 0.12;
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  const g = polys
    .map(p =>
      p
        .map(r => dp(r, tol).map(([x, y]) => [Math.round(x * 100) / 100, Math.round(y * 100) / 100]))
        .filter(r => r.length >= 4)
    )
    .filter(p => p.length);
  out[en] = { t: cls, g };
}
if (missing.length) console.error('NOT FOUND in Natural Earth:', missing);
fs.writeFileSync(path.join(here, '../public/assets/map/seas.json'), JSON.stringify(out));
console.log('seas:', Object.keys(out).length, 'of', names.length, fs.statSync(path.join(here, '../public/assets/map/seas.json')).size, 'bytes');

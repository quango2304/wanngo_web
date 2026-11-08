// Builds public/data/sea_info.js: a short description for every water body in WATER_LABELS, taken from the lead
// paragraph of its Wikipedia article (English, and Vietnamese when that article exists). Wikipedia text is
// CC BY-SA 4.0, so the panel shows the source and a link. Run by hand: node scripts/build_sea_info.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const UA = { 'User-Agent': 'wanngo-geo-study-notes/1.0 (build script; contact via geo.wanngo.com)' };
const sleep = ms => new Promise(r => setTimeout(r, ms));

const state = fs.readFileSync(path.join(here, '../public/js/state.js'), 'utf8');
const block = state.slice(state.indexOf('export const WATER_LABELS'), state.indexOf('export const SEAS'));
const names = [...new Set([...block.matchAll(/en: '([^']+)'/g)].map(m => m[1]))];

// WATER_LABELS en name -> English Wikipedia article. The four half-oceans share their ocean's article.
const TITLE = {
  'NORTH PACIFIC OCEAN': 'Pacific Ocean',
  'SOUTH PACIFIC OCEAN': 'Pacific Ocean',
  'NORTH ATLANTIC OCEAN': 'Atlantic Ocean',
  'SOUTH ATLANTIC OCEAN': 'Atlantic Ocean',
  'INDIAN OCEAN': 'Indian Ocean',
  'ARCTIC OCEAN': 'Arctic Ocean',
  'SOUTHERN OCEAN': 'Southern Ocean',
  'East Sea (South China Sea)': 'South China Sea'
};
const WHOLE = new Set(['NORTH PACIFIC OCEAN', 'SOUTH PACIFIC OCEAN', 'NORTH ATLANTIC OCEAN', 'SOUTH ATLANTIC OCEAN']);

async function getJSON(url) {
  for (let i = 0; i < 8; i++) {
    const r = await fetch(url, { headers: UA });
    if (r.status === 429 || r.status >= 500) {
      await sleep(2500 * (i + 1));
      continue;
    }
    if (!r.ok) return null;
    return r.json();
  }
  return null;
}

function clip(text, max = 760) {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const i = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('.” '));
  return (i > 200 ? cut.slice(0, i + 1) : cut.replace(/\s+\S*$/, '') + '…').trim();
}

const outPath = path.join(here, '../public/data/sea_info.js');
let prev = {};
if (fs.existsSync(outPath)) {
  const raw = fs.readFileSync(outPath, 'utf8');
  const idx = raw.indexOf('{');
  if (idx !== -1) {
    try { prev = JSON.parse(raw.slice(idx, raw.lastIndexOf('}') + 1)); } catch {}
  }
}

const out = {};
for (const n of names) {
  if (prev[n] && prev[n].en && prev[n].vi) {
    out[n] = prev[n];
    console.log(n, '| cached vi+en');
    continue;
  }
  const title = TITLE[n] || n;
  const en =
    (prev[n] && prev[n].en && { titles: { normalized: prev[n].en.title, canonical: prev[n].en.url.split('/wiki/')[1] }, extract: prev[n].en.text, content_urls: { desktop: { page: prev[n].en.url } } }) ||
    (await getJSON('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(title.replace(/ /g, '_')) + '?redirect=true'));
  await sleep(400);
  if (!en || !en.extract || en.type === 'disambiguation') {
    console.error('NO EN', n, title);
    continue;
  }
  const entry = { whole: WHOLE.has(n) || undefined, en: { title: en.titles.normalized, text: clip(en.extract), url: en.content_urls.desktop.page } };
  // Vietnamese article through the English page's language link
  const ll = await getJSON(
    'https://en.wikipedia.org/w/api.php?action=query&prop=langlinks&lllang=vi&format=json&redirects=1&titles=' + encodeURIComponent(en.titles.canonical)
  );
  await sleep(400);
  const page = ll && ll.query && Object.values(ll.query.pages)[0];
  const viTitle = page && page.langlinks && page.langlinks[0] && page.langlinks[0]['*'];
  if (viTitle) {
    const vi = await getJSON('https://vi.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(viTitle.replace(/ /g, '_')) + '?redirect=true');
    await sleep(400);
    if (vi && vi.extract && vi.type !== 'disambiguation') entry.vi = { title: vi.titles.normalized, text: clip(vi.extract), url: vi.content_urls.desktop.page };
  }
  out[n] = entry;
  console.log(n, '|', entry.vi ? 'vi+en' : 'en only');
}

const js =
  '// Water-body descriptions: lead paragraph of the Wikipedia article (CC BY-SA 4.0), built by scripts/build_sea_info.mjs.\n' +
  'export const SEA_INFO = ' +
  JSON.stringify(out, null, 1) +
  ';\n';
fs.writeFileSync(path.join(here, '../public/data/sea_info.js'), js);
console.log('wrote', Object.keys(out).length, 'entries,', js.length, 'bytes');

// Pre-deploy checks: node sites/geo/scripts/check.mjs
import { readdirSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const pub = path.join(path.dirname(fileURLToPath(import.meta.url)), '../public');
let fail = 0;
const bad = (m) => { console.error('FAIL', m); fail++; };

for (const f of readdirSync(path.join(pub, 'js')).filter((f) => f.endsWith('.js'))) {
  try { execFileSync('node', ['--check', path.join(pub, 'js', f)], { stdio: 'pipe' }); }
  catch (e) { bad(`syntax ${f}: ${e.stderr}`); }
}

const { RANK_METRICS, RANK_DATA } = await import(pathToFileURL(path.join(pub, 'data/rankings.js')));
const need = ['key','vi','en','short_vi','short_en','unit_vi','unit_en','src_vi','src_en','data_vi','data_en','desc_vi','desc_en','link','decimals','stops'];
for (const [k, m] of Object.entries(RANK_METRICS)) {
  for (const f of need) if (m[f] === undefined || m[f] === '') bad(`metric ${k} missing ${f}`);
  if (!/^https:\/\//.test(m.link || '')) bad(`metric ${k} link not https`);
  const n = Object.values(RANK_DATA).filter((r) => r[m.idx] != null).length;
  if (n < 100) bad(`metric ${k} has only ${n} values`);
}
for (const [c, r] of Object.entries(RANK_DATA)) if (r.length !== 6) bad(`row length ${c}`);

// ?v= must be identical across imports of the same module
const vs = {};
for (const f of ['index.html', ...readdirSync(path.join(pub, 'js')).map((f) => 'js/' + f)]) {
  for (const [, mod, v] of readFileSync(path.join(pub, f), 'utf8').matchAll(/([\w./]+\.js)\?v=(\w+)/g)) {
    const key = path.basename(mod);
    (vs[key] ||= new Set()).add(v);
  }
}
const all = new Set([...Object.values(vs)].flatMap((s) => [...s]));
if (all.size > 1) bad(`inconsistent ?v= values: ${[...all]}`);

console.log(fail ? `${fail} problem(s)` : 'OK');
process.exit(fail ? 1 : 0);

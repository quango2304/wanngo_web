# geo.wanngo.com: interactive geopolitics globe

An interactive 3D orthographic globe for studying geopolitics (Vietnamese first, English second). Static site on Cloudflare
(Worker `wanngo-geo`, assets only, no server code). Part of the monorepo `wanngo_web`; see the root `CLAUDE.md` for repo rules.

## Principles (read first, they outrank speed of delivery)

1. **Accuracy of information is the top priority.** This is a study tool; a wrong number is worse than a missing one.
   - Every number shown must come from a primary or authoritative source (World Bank, UN agencies, IMF, UNDP, WHO, IHME,
     national statistics offices, etc.). Never invent, "round up", or fill gaps from memory.
   - If data is missing, leave it empty (`null`) and show nothing; do not substitute an old value from another year.
   - Always state **what it measures, how it is evaluated, the source, the year, and a link**. Do not mix years inside one
     ranking.
   - When you are not sure of a fact, verify it online (fetch the source) before writing it, or say plainly that it is
     unverified. Do not guess a year.
   - Keep VI and EN content equivalent. Dates and names (e.g. 34 provinces of Vietnam since 2025) must be current.
2. **Good UI/UX.** Dark and light themes both work; text is readable (contrast); touch targets are comfortable on mobile;
   dialogs/panels are scannable, with short labels and explanations where a number could be misread. Keyboard and
   screen-reader basics (labels, focus, `aria-*`) are kept. Check both Vietnamese and English strings for overflow.
3. **Good performance.** The globe must stay smooth: it boots immediately with `world-110m.json` and upgrades in the
   background to `world-50m.json`; rendering is adaptive (lower resolution by zoom level and frame budget). Do not add
   libraries, heavy per-frame work, or large synchronous parsing. Measure before and after anything that touches
   `globe.js` rendering. Keep the site free-plan friendly (one file under 25 MiB, under 20,000 files).
4. **Say what you verified.** Do not claim a UI change works unless you opened it (or say it was not run).

## Layout

```
sites/geo/
  wrangler.jsonc        Worker config (assets only, 404 page, custom domain geo.wanngo.com)
  scripts/              data build scripts (run by hand, not deployed)
    build_rankings.py   rebuilds RANK_DATA from primary sources
    country_aliases.json  dataset country name -> ISO3 (used by the script)
  public/               everything deployed
    index.html, 404.html, style.css, _headers, favicon*, site.webmanifest
    js/main.js          boot
    js/globe.js         canvas globe rendering, layers, labels, picking (large; performance-critical)
    js/ui.js            panels, country cards, rankings dialog, search, theme, i18n helper tr()
    js/state.js         shared state, prefs in localStorage, data imports
    js/icons.js         inline SVG icons
    data/*.js           content: regions, countries (+ en_*), religions, hotspots, alliances, economy,
                        urban_islands, rankings
    assets/map/*.json   world-110m, world-50m, admin1-50m, physical-50m
    assets/vendor/d3-geo.min.js
```

## Rankings and heatmap (`data/rankings.js`)

- `RANK_METRICS` describes each metric (name, unit, `src_*`, `data_*` year, `desc_*` methodology, `link`, color `stops`,
  `higherBetter`, `idx` into the row array). `RANK_DATA` maps the English country name to
  `[happiness, income, pm25, hdi, lifeExp, gdpBillionUSD]`. `null` = no data.
- The rankings dialog (`rankingHTML` in `ui.js`) shows: unit and source, **"Tiêu chí đánh giá"** (methodology),
  **"Dữ liệu"** (year/period), and a **source link**. Any new metric must provide all of these in VI and EN.
- Current sources (rebuilt 2026-11):

  | Metric | Source | Year |
  |---|---|---|
  | Happiness | World Happiness Report 2025 (Gallup, Oxford WBRC, UN SDSN) | 3-year avg 2022–2024 (147 countries) |
  | Income (GDP/person), GDP | World Bank WDI `NY.GDP.PCAP.CD`, `NY.GDP.MKTP.CD` | 2024 |
  | Life expectancy | World Bank WDI `SP.DYN.LE00.IN` (from UN WPP) | 2024 |
  | PM2.5 | IHME GBD 2023 via World Bank `EN.ATM.PM25.MC.M3` | 2023 |
  | HDI | UNDP Human Development Report 2025 | 2023 |

- **Refresh data:** `python3 sites/geo/scripts/build_rankings.py` (needs `pip install openpyxl`; use `--report` to list
  unmatched names without writing). Update the year constants at the top of the script, then update `data_*`, `src_*` and
  `link` in `RANK_METRICS` to match. Names that do not match an ISO3 go into `scripts/country_aliases.json`.
  Tiny territories without published data stay `null`.
- Never hand-edit numbers in `RANK_DATA`; change the script and regenerate.

## Conventions

- Plain ES modules, no build step, no framework. Keep it that way unless the owner asks.
- Bilingual: strings go through `tr('vi text', 'en text')` in `ui.js`; data files have VI and `en_*` variants.
- **Cache busting:** `_headers` caches `/js/*`, `/data/*` and `style.css` for 1 hour, and modules cache by URL. The
  `?v=YYYYMMDD` on `main.js` (in `index.html`) and on the relative imports (`state.js`, `ui.js`, `globe.js`,
  `rankings.js`) must be **bumped whenever a js or data file changes**, otherwise browsers mix an old data file with a
  new script (this once showed "undefined" in the rankings dialog). Keep `?v=` identical across all imports of the same
  module so it is loaded once.
- Prefs are in `localStorage` (`geo-theme` and the prefs key in `state.js`); keep old keys migrating.
- Preserve existing comments and docstrings unrelated to your change.

## Run, deploy

- Local: `npm ci` at the repo root, then `npm run dev:geo` (http://localhost:8791).
- Syntax check: `node --check public/js/*.js`.
- Deploy: `npm run deploy:geo` from the repo root (owner must ask; the tag workflow `geo-vX.Y.Z` fails until the
  Cloudflare secrets are set on the repo). Commit straight on `main`. Never push a tag unless the owner asks.
- After a deploy, hard-reload and open the changed dialog or layer to confirm it renders.

## Checklist for a content change

1. Source is authoritative, fetched not remembered; year is recorded.
2. VI and EN both updated; no `undefined` or empty labels; long text does not overflow on mobile.
3. Dark and light themes checked; contrast and tap targets fine.
4. No frame-rate regression on the globe; no new heavy dependencies.
5. `?v=` bumped; `node --check` passes; committed; deployed only when asked.

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
    check.mjs           pre-deploy checks (run before every deploy)
    country_aliases.json  dataset country name -> ISO3 (used by the script)
  public/               everything deployed
    index.html, 404.html, style.css, _headers, favicon*, site.webmanifest
    js/main.js          boot
    js/globe.js         canvas globe rendering, layers, labels, picking (large; performance-critical)
    js/ui.js            panels, country cards, rankings dialog, search, theme, i18n helper tr()
    js/state.js         shared state, prefs in localStorage, data imports
    js/icons.js         inline SVG icons
    data/*.js           content: regions, countries (+ en_*), religions, hotspots, alliances, economy,
                        urban_islands, rankings, continents
    data/stories.js     the explainers in the Views tab (+ one data/story_<id>.js per story, VI and EN inline)
    assets/map/*.json   world-110m, world-50m, admin1-50m, physical-50m
    assets/vendor/d3-geo.min.js
```

## Rankings and heatmap (`data/rankings.js`)

- `RANK_METRICS` describes each metric (name, unit, `src_*`, `data_*` year, `desc_*` methodology, `link`, `stops`,
  `higherBetter`, `idx` into the row array). The heatmap colours come from `RANK_RAMP` in `js/state.js` (one orange
  scale, colour-blind safe: darker = better in light theme, brighter = better in dark; for PM2.5, where lower is better, the scale is reversed); a metric's `stops` only set
  where each step of that scale sits (their colour values are no longer used). `RANK_DATA` maps the English country name to
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

## Continents layer (`data/continents.js`)

- 6-continent model (Vietnamese school convention): Asia, Europe, Africa, the Americas (drawn as North / South in two
  shades, split at the Panama–Colombia border), Oceania, Antarctica. Outline only (coastlines colored per continent, no
  fill), on by default (`continents` in `ADMIN_LAYERS` / `DEFAULT_ON`).
- Boundaries are geographic: Ural crest + Ural River + Caspian + Greater Caucasus watershed + Turkish Straits (Asia–Europe),
  Suez Canal (Asia–Africa; Sinai is Asia), New Guinea incl. Indonesian Papua is Oceania, overseas islands by location
  (Hawaii, Easter Island → Oceania; Canaries, Madeira, Socotra → Africa; Caribbean → North America). The hand-drawn
  lines are approximate. `contAt()` classifies coastline vertices of split countries (`TRANS_LAND`, `TRANS_ISLAND`).
- Continent cards: area from Encyclopædia Britannica (approximate), population from UN WPP 2024 (1 July 2024, medium
  variant) by UN M49 region with a note on how M49 differs from the map; UN member counts are computed (193, checked by
  `scripts/check.mjs`; Tuvalu has no polygon and is added via `UN_EXTRA`).

## UI structure

- Layers panel has three tabs (Layers / Color by / Views); every colouring is a chip in "Color by"; "Views" lists the explainers (below); the reference lines (equator, graticule, day and night…) sit at the end of the Layers tab. On desktop a card
  folds the layers panel away (`.fold`) and `center()` in `globe.js` centres the globe in the free space between panels.
- On phones (< 760 px) the card and the layers panel are bottom sheets with a drag handle (peek / half / full).
- The URL hash keeps the view: `#c=<country>` (Natural Earth name), `adm1=`, `cap=`, `city=`, `isl=`, `lake=`, `h=`,
  `cont=`, `sea=`, `rank=<metric>`, `c=…&vs=…` (comparison), plus `color=<metric | government | income-group | bloc>`.
  `applyHash()` in `ui.js` opens it; keep these keys stable, links are shared.
- English shows full country names from `EN_NAME` in `state.js` (map data keys stay the Natural Earth short names);
  globe labels may use `EN_SHORT`.

## Explainers (Views tab, `data/stories.js`)

- The Views tab lists step-by-step geography stories (Hormuz, Ukraine, Red Sea, Taiwan, East Sea). A story is a file
  `data/story_<id>.js` exporting `{id, icon, c, title, sub, asof, status, statusSrc, sources[], steps[]}`; every text is
  `{vi, en}`. A step is `{title, text, core, facts[], ll, k, layers[], show[], refs[], hl{}, dim, draw[], key[], src[]}`:
  camera (`ll` centre, `k` zoom), the layers to switch on (everything else is off, so the map stays clean), hotspot ids
  to show even if their layer is off (`show`), countries to colour (`hl`, Natural Earth names), `dim` to mute the other
  land, shapes to draw (`line` with optional `flow`/`arrow`, `poly`, `circle` with `at` and `r` in km, `pt`, `label`;
  colour is `c`; a point label can take `side:'l'`, `dy`, `ox`), a colour `key`, and `src` = indexes into `sources`.
- **`core` is required on every step** (the strategic logic, Tim Marshall style: what each actor needs, fears and can do, and why
  geography leaves it little choice). It is an interpretation, so it is attributed ("Moscow says…", "analysts argue…"), backed
  by a source for each stated position, gives the other side's view, and never repeats the facts. The card shows it in a
  box labelled as a geopolitical reading, not a fact.
- The engine is `startStory` / `goStep` / `endStory` in `js/ui.js` (the step card has a sticky header with Back/Next and
  step dots) and `buildStoryShapes` / `drawStory` in `js/globe.js`. While a story runs `st.story` holds its scene and the
  reader's layers are snapshotted and restored on close; `savePrefs` does nothing meanwhile. The link is
  `#story=<id>&s=<step>`. Opening any other card, the layers button or Esc ends the story.
- **Rules for content** (Principle 1 applies in full): every number comes from a fetched primary or authoritative
  source and is attributed in the text ("according to X", dated); contested facts say who claims what; `asof` is the date
  the facts were checked and shows on the last step. Never draw a live situation (front line, blockade band, danger
  zone, who holds a contested place): tell it in words with a date. Drawn shapes are illustrative and the card says so.
  Refresh a story by re-checking its facts and moving `asof`; `scripts/check.mjs` fails on missing VI/EN, dates, https
  sources, bad indexes, or a layer, hotspot or country name that does not exist.

### How an explainer is written (the owner's direction)

- The story must make the reader understand the deep cause, not list facts. It opens with the whole argument (a first
  step with `chain`: five links tagged `need` → `blocked` → `move` → `counter` → `outlook`), and every later step carries
  a `tag` showing which link it supports. See `data/thesis_biendong.js` (applied by `withThesis()` in `stories.js`).
- Open with a question the reader already has ("Vì sao Bắc Kinh quyết giữ Biển Đông?"), then "stand where they stand".
- Each link: a bold `head` that reads like a headline and chains with the others when read alone ("Trung Quốc sống nhờ
  đường biển." → "Nhưng lối nào ra biển cũng phải qua cửa hẹp." → "Vì thế…" → "Nhưng đó cũng là biển của người khác." →
  "Hai nỗi sợ, một vùng biển."), then one to three short sentences with a concrete picture.
- Step titles are claims that move the story ("Đường chín đoạn: Bắc Kinh vẽ, tòa trọng tài bác"), not topic labels.
- Plain Vietnamese: short sentences, everyday words, one idea per sentence, no translated phrasing. One striking number
  per link at most; the rest go in `facts`. Say "this is how analysts explain it" once at the top instead of in every
  sentence, but keep each side's own words attributed ("Bắc Kinh thì nói…").

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
- **Test before every deploy (mandatory, never skip):**
  1. `node sites/geo/scripts/check.mjs` (syntax of all js, every ranking metric has VI/EN text, year, source and https link,
     enough data values, one consistent `?v=`). Must print `OK`.
  2. `npm run dev:geo`, open http://localhost:8791 in a browser, hard-reload, and click through what you changed plus the
     basics: globe loads and rotates, open a country card, open each ranking tab, switch VI/EN and dark/light, resize to a
     phone width. No console errors, no `undefined`, no blank panels.
  3. Only then commit and deploy. If you cannot run step 2, say so and do not deploy without the owner's OK.
  Add a check to `scripts/check.mjs` whenever a bug slips through.
- Deploy: `npm run deploy:geo` from the repo root (owner must ask; the tag workflow `geo-vX.Y.Z` fails until the
  Cloudflare secrets are set on the repo). Commit straight on `main`. Never push a tag unless the owner asks.
- After a deploy, hard-reload and open the changed dialog or layer to confirm it renders.

## Checklist for a content change

1. Source is authoritative, fetched not remembered; year is recorded.
2. VI and EN both updated; no `undefined` or empty labels; long text does not overflow on mobile.
3. Dark and light themes checked; contrast and tap targets fine.
4. No frame-rate regression on the globe; no new heavy dependencies.
5. `?v=` bumped; `scripts/check.mjs` prints OK and the local browser test passed; committed; deployed only when asked.

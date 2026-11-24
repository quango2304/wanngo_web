# wanngo_web

The owner's static sites on Cloudflare (free plan), one folder per site. Product backends and dashboards live in their own
repos (Bookmuse: `../bookmuse/`, read its `docs/`; this repo's move is in `docs/web-dashboard.md` there).

| Site | Folder | Worker | Hosts |
|---|---|---|---|
| Personal home: "the little room" (pixel-art canvas game) | `sites/home` | `wanngo-home` | `wanngo.com`, `www.wanngo.com` |
| Bookmuse landing, privacy, support, delete-account (English only; `_redirects` sends old `/vi/`, `/es/`, `/kobo/` addresses on) | `sites/bookmuse` | `bookmuse-landing` | `bookmuse.wanngo.com` |
| Geopolitics study notes | `sites/geo` | `wanngo-geo` | `geo.wanngo.com` |
| System design course (Dilum Sanjaya's interactive course, a built Vite app copied from `../designed-to-scale/`; English only, since that build lacks the other languages' word files, so `index.html` forces `en` and hides the language menu; canonical and share image point here). Linked from the room's cork board | `sites/systemdesign` | `wanngo-systemdesign` | `systemdesign.wanngo.com` |
| Remote config for the owner's apps: `/v1/ads.json` lists the apps to advertise inside other apps (the sticker apps show one, picked at random by `weight`, never themselves; slogans en/vi/es, card `colors`); icons in `/icons/` (give a changed icon a new name). No script, so every request is free | `sites/remoteconfig` | `wanngo-remoteconfig` | `remoteconfig.wanngo.com` |

- Each site is a Worker with static assets only (`wrangler.jsonc` + `public/`, `_headers` for headers): no script, so every
  request is a free asset request. Workers assets cap one file at 25 MiB and a site at 20,000 files.
- **Images** go in the site's `public/assets/`. **Videos** go to the R2 bucket `wanngo-media`, served at
  `https://media.wanngo.com/<site>/<name>.{mp4,webm,jpg}`: `scripts/upload-media.sh <video> <site>/<name>` encodes and
  uploads them (needs ffmpeg and `npx wrangler login`). Videos never go in git; keep the originals elsewhere.
  The Bookmuse home page plays one: the hero video, drawn and rendered in the parent repo (`../bookmuse/design/landing-video/`, `make.sh` uploads it).
- **Bookmuse catalog pages** (`/summaries/`, `/categories/`, `/courses/`, `/collections/`, `/authors/`, the home page's cover wall and Browse block,
  `sitemap.xml`, the lists in `llms.txt` and `llms-full.txt`) are generated from production's public API by `scripts/bookmuse-pages.py`; never edit
  them by hand. `scripts/bookmuse-pages.sh` builds, deploys and pings IndexNow: run it after anything changes on production, then commit
  `sites/bookmuse` by path (`../bookmuse/docs/web-dashboard.md`, "The public catalog pages").
- **Bookmuse pages share `site.css` and `site.js`** (fonts, light and dark, nav, footer, the theme switch); the home page adds `landing.css` and `catalog.css`, the catalog pages `catalog.css`, the others `styles.css`. Bump the `?v=` on those links in every page when one changes: they are cached for an hour.
- Bookmuse's share links (`/b/…`), the AI-agent sign-in page and the universal-link files are on `bookmuse-app.wanngo.com`
  (the `bookmuse_web` dashboard), not on the landing. The landing's Sign in buttons link straight to that dashboard.
- Bookmuse's privacy policy and deletion page are linked from the apps, App Store Connect, Play Console, Google and Dropbox:
  when a Bookmuse feature changes what data is kept or sent, update them (English only).
- **Home's room** (`sites/home/public/`) is a pixel-art canvas game (`index.html`, `style.css`, `game.js`, no libraries): a room you click around in, on Vietnam time. It is a straight-on 2D view: every piece of furniture is a separate flat sprite in `public/assets/room/room-flat-f.png` (`KIT`) or, for pieces added later, `room-decor-a.png` (`DECOR`), placed in `ROOM` in `game.js` and drawn back to front by where it meets the floor, and people walk on the open floor in front of it. Don't draw anything at an angle or split a sprite to fake depth. Wall, floor, sunlight, lamps and night are drawn in code. Wide and tall layouts move the same sprites by group, so a new group needs an offset in `TALL.offs`. The canvas has several pixels per room pixel (`sub`) so people and the cat move smoothly; the art stays on the room's grid. Assets are cached for 7 days, so give a replaced image a new name. `?hour=3` pins the clock for testing.
  **Sound** is clips in `public/assets/audio/` (typing, cat, game, ambience; made with ElevenLabs by `scripts/gen-room-sounds.sh`, which needs `ELEVENLABS_API_KEY` in the environment, never in git), started on the first tap and muted by the speaker button; the chip blips are still made in code.
- **Geo** (`sites/geo/public/`) is an interactive 3D orthographic geopolitical globe (`index.html`, `style.css`, `js/{main,globe,ui,state}.js`, `data/{regions,countries,religions,hotspots,alliances}.js`, `assets/map/world-{110m,50m}.json`, `assets/vendor/d3-geo.min.js`). It boots immediately with `world-110m.json` and upgrades in the background to `world-50m.json`.
- Run locally: `npm ci`, then `npm run dev:bookmuse` (http://localhost:8788), `npm run dev:home` (http://localhost:8790), or `npm run dev:geo` (http://localhost:8791), or `npm run dev:systemdesign` (http://localhost:8793).
- **Deploy:** push a tag `<site>-vX.Y.Z` (`bookmuse-v1.0.0`, `home-v1.0.0`); `.github/workflows/deploy.yml` runs
  `wrangler deploy` for that site. Pushing to `main` never deploys. Never push a tag unless the owner asks.
  The Cloudflare secrets are not set on the repo yet, so a tag fails in Actions; until they are, deploy from this Mac with `npm run deploy:bookmuse`: the Bookmuse landing is deployed after every change to it (owner, 2026-11-15) and by `scripts/bookmuse-pages.sh`; the other sites only when the owner asks.
- Commit straight on `main`.

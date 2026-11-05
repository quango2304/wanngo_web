# wanngo_web

The owner's static sites on Cloudflare (free plan), one folder per site. Product backends and dashboards live in their own
repos (Bookmuse: `../bookmuse/`, read its `ROADMAP.md`; this repo's move is `specs/tasks/T65-domain-move.md` there).

| Site | Folder | Worker | Hosts |
|---|---|---|---|
| Personal home: "the little room" (pixel-art canvas game) | `sites/home` | `wanngo-home` | `wanngo.com`, `www.wanngo.com` |
| Bookmuse landing, privacy, support, delete-account (en, `/vi/`, `/es/`) | `sites/bookmuse` | `bookmuse-landing` | `bookmuse.wanngo.com` |

- Each site is a Worker with static assets only (`wrangler.jsonc` + `public/`, `_headers` for headers): no script, so every
  request is a free asset request. Workers assets cap one file at 25 MiB and a site at 20,000 files.
- **Images** go in the site's `public/assets/`. **Videos** go to the R2 bucket `wanngo-media`, served at
  `https://media.wanngo.com/<site>/<name>.{mp4,webm,jpg}`: `scripts/upload-media.sh <video> <site>/<name>` encodes and
  uploads them (needs ffmpeg and `npx wrangler login`). Videos never go in git; keep the originals elsewhere.
  The Bookmuse home pages' clips are already encoded (`bookmuse/landing/*.mp4`, specs in `../bookmuse/specs/tasks/T68-landing-redesign.md`).
- **Bookmuse pages share `site.css` and `site.js`** (fonts, light and dark, nav, footer, the theme switch); the home pages add `landing.css`, the others `styles.css`. Bump the `?v=` on those links in every page when one changes: they are cached for an hour.
- Bookmuse's share links (`/b/…`), the AI-agent sign-in page and the universal-link files are on `bookmuse-app.wanngo.com`
  (the `bookmuse_web` dashboard), not on the landing. The landing's Sign in buttons link straight to that dashboard.
- Bookmuse's privacy policy and deletion page are linked from the apps, App Store Connect, Play Console, Google and Dropbox:
  when a Bookmuse feature changes what data is kept or sent, update en/vi/es together.
- **Home's room** (`sites/home/public/`) is a pixel-art canvas game (`index.html`, `style.css`, `game.js`, no libraries): a room you click around in, on Vietnam time. There is no background picture: every piece of furniture is a sprite in `public/assets/room/room-kit-b.png`, placed by hand in `ROOM` in `game.js` and drawn back to front by where it meets the floor. Wall, floor, sunlight, lamps and night are drawn in code. Wide and tall layouts move the same sprites by group. Assets are cached for 7 days, so give a replaced image a new name. `?hour=3` pins the clock for testing.
- Run locally: `npm ci`, then `npm run dev:bookmuse` (http://localhost:8788) or `npm run dev:home` (http://localhost:8790).
- **Deploy:** push a tag `<site>-vX.Y.Z` (`bookmuse-v1.0.0`, `home-v1.0.0`); `.github/workflows/deploy.yml` runs
  `wrangler deploy` for that site. Pushing to `main` never deploys. Never push a tag unless the owner asks.
  The Cloudflare secrets are not set on the repo yet, so a tag fails in Actions; until they are, deploy from this Mac with `npm run deploy:bookmuse` (only when the owner asks).
- Commit straight on `main`.

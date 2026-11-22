#!/bin/sh
# Rebuild the Bookmuse landing's catalog pages from production, deploy the landing, then tell IndexNow what changed.
# Run after anything changes on production (a summary or course published, fixed or taken down; a collection or author edited).
# Needs `npx wrangler login` on this Mac. Commit the changed files in sites/bookmuse afterwards, by path.
# Docs: ../bookmuse/docs/web-dashboard.md, "The public catalog pages".
set -e
cd "$(dirname "$0")/.."
python3 scripts/bookmuse-pages.py "$@"
npm run deploy:bookmuse
python3 scripts/bookmuse-pages.py --ping

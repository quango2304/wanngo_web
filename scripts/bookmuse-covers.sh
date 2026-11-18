#!/bin/sh
# Makes the landing's cover wall from the Bookmuse summaries (../bookmuse/summary-v2/summaries/<slug>/cover.jpg):
# one 220x330 webp per slug in sites/bookmuse/public/assets/covers/, and prints the slugs with their titles as JSON.
# Pass the published slugs (one per line on stdin), so the wall shows only books the app has.
# Usage: printf 'atomic-habits\nsapiens\n' | scripts/bookmuse-covers.sh > /tmp/covers.json
set -e
SRC="$(cd "$(dirname "$0")/../../bookmuse/summary-v2/summaries" && pwd)"
OUT="$(cd "$(dirname "$0")/.." && pwd)/sites/bookmuse/public/assets/covers"
mkdir -p "$OUT"
first=1
printf '['
while read -r slug; do
  [ -n "$slug" ] || continue
  f="$SRC/$slug/cover.jpg"
  [ -f "$f" ] || { echo "no cover for $slug" >&2; continue; }
  magick "$f" -resize 220x330^ -gravity center -extent 220x330 -strip -quality 74 "$OUT/$slug.webp"
  title=$(sed -n 's:.*<title>\(.*\)</title>.*:\1:p' "$SRC/$slug/$slug.html" | head -1)
  [ $first = 1 ] || printf ','
  first=0
  printf '\n  {"slug": "%s", "title": "%s"}' "$slug" "$(printf '%s' "$title" | sed 's/"/\\"/g')"
done
printf '\n]\n'

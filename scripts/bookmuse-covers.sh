#!/bin/sh
# The Bookmuse home page's cover wall, from the summaries' covers (../bookmuse/summary-v2/summaries/<slug>/cover.jpg).
# Reads slugs on stdin, one per line: pass the PUBLISHED ones only, so the page never shows a book the app doesn't have
# (production's list: the admin.list_catalog operation with status=published).
# Writes a 220x330 webp per slug to sites/bookmuse/public/assets/covers/ and rewrites the wall between <!--covers--> and
# <!--/covers--> in sites/bookmuse/public/index.html (two rows; each repeated, hidden, for the endless slide).
# Usage: printf 'atomic-habits\nsapiens\n' | scripts/bookmuse-covers.sh
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$(cd "$ROOT/../bookmuse/summary-v2/summaries" && pwd)"
OUT="$ROOT/sites/bookmuse/public/assets/covers"
mkdir -p "$OUT"
LIST=$(mktemp)
while read -r slug; do
  [ -n "$slug" ] || continue
  f="$SRC/$slug/cover.jpg"
  [ -f "$f" ] || { echo "no cover for $slug" >&2; continue; }
  magick "$f" -resize 220x330^ -gravity center -extent 220x330 -strip -quality 74 "$OUT/$slug.webp"
  title=$(sed -n 's:.*<title>\(.*\)</title>.*:\1:p' "$SRC/$slug/$slug.html" 2>/dev/null | head -1)
  printf '%s\t%s\n' "$slug" "${title:-$slug}" >> "$LIST"
done
python3 - "$LIST" "$ROOT/sites/bookmuse/public/index.html" <<'PY'
import sys, html
rows = [l.rstrip('\n').split('\t', 1) for l in open(sys.argv[1]) if l.strip()]
half = (len(rows) + 1) // 2
def items(r, hidden):
    return ''.join('<li><img src="/assets/covers/%s.webp" alt="%s" width="220" height="330" loading="lazy" decoding="async"></li>'
                   % (s, '' if hidden else html.escape(t, quote=True)) for s, t in r)
wall = ''.join('        <div class="row r%d"><ul class="track">%s</ul><ul class="track" aria-hidden="true">%s</ul></div>\n'
               % (i + 1, items(r, False), items(r, True)) for i, r in enumerate([rows[:half], rows[half:]]) if r)
p = sys.argv[2]; s = open(p).read()
a = s.index('<!--covers-->\n') + len('<!--covers-->\n'); b = s.index('<!--/covers-->')
open(p, 'w').write(s[:a] + wall + s[b:])
print('%d covers on the wall' % len(rows))
PY
rm -f "$LIST"

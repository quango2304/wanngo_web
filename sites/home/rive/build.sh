#!/bin/sh
# Rebuilds the home page's Rive scene:
#   gen/scene.svg + gen/build_scene.py -> room/scene.rml -> public/assets/rive/room.riv (+ room-poster.webp)
# Needs python3, cwebp and the Rive CLI (https://rive.app/docs/cli/getting-started). No login: the scene has no scripts.
set -e
cd "$(dirname "$0")"
RIVE="${RIVE:-$HOME/.rive/bin/rive}"
OUT=../public/assets/rive
python3 -I gen/build_scene.py room/scene.rml
"$RIVE" room --once
mkdir -p "$OUT"
cp room/build/room.riv "$OUT/room.riv"

# The poster shows until the runtime loads (and without JS). The CLI only captures opaque frames,
# so it is a separate build with the page's wall and floor drawn in.
POSTER=$(mktemp -d)
printf 'name: poster\n' > "$POSTER/rive.yaml"
python3 -I gen/build_scene.py --backdrop "$POSTER/scene.rml"
"$RIVE" "$POSTER" --screenshot="$POSTER/poster.png" --advance=1
cwebp -quiet -q 82 "$POSTER/poster.png" -o "$OUT/room-poster.webp"
rm -rf "$POSTER"
ls -l "$OUT/room.riv" "$OUT/room-poster.webp"

#!/usr/bin/env bash
# Encode a video for the web and upload it to the R2 bucket behind https://media.wanngo.com.
#
#   scripts/upload-media.sh <input video> <key without extension>
#   scripts/upload-media.sh ~/Movies/reader-demo.mov bookmuse/reader-demo
#
# Writes <key>.mp4 (H.264, faststart), <key>.webm (VP9) and <key>.jpg (poster, first frame) into media-out/, then puts
# them in the bucket. Use them in a page with:
#   <video autoplay muted loop playsinline preload="metadata" poster="https://media.wanngo.com/<key>.jpg">
#     <source src="https://media.wanngo.com/<key>.webm" type="video/webm">
#     <source src="https://media.wanngo.com/<key>.mp4" type="video/mp4">
#   </video>
# Options (env): WIDTH (default 1920), CRF (default 23), AUDIO=1 to keep the sound track.
set -euo pipefail
BUCKET=wanngo-media
[ $# -eq 2 ] || { sed -n '2,13p' "$0"; exit 1; }
in=$1 key=$2
width=${WIDTH:-1920} crf=${CRF:-23}
out="$(cd "$(dirname "$0")/.." && pwd)/media-out/$key"
mkdir -p "$(dirname "$out")"
audio=(-an); [ "${AUDIO:-0}" = 1 ] && audio=(-c:a aac -b:a 128k)
audio_webm=(-an); [ "${AUDIO:-0}" = 1 ] && audio_webm=(-c:a libopus -b:a 96k)
scale="scale='min($width,iw)':-2"

ffmpeg -y -loglevel error -i "$in" -vf "$scale" -c:v libx264 -preset slow -crf "$crf" -pix_fmt yuv420p -movflags +faststart "${audio[@]}" "$out.mp4"
ffmpeg -y -loglevel error -i "$in" -vf "$scale" -c:v libvpx-vp9 -crf $((crf + 10)) -b:v 0 -row-mt 1 "${audio_webm[@]}" "$out.webm"
ffmpeg -y -loglevel error -i "$in" -vf "$scale" -frames:v 1 -q:v 3 "$out.jpg"

for ext in mp4 webm jpg; do
  case $ext in mp4) ct=video/mp4 ;; webm) ct=video/webm ;; jpg) ct=image/jpeg ;; esac
  size=$(du -h "$out.$ext" | cut -f1)
  echo "uploading $key.$ext ($size)"
  npx wrangler r2 object put "$BUCKET/$key.$ext" --file "$out.$ext" --content-type "$ct" \
    --cache-control "public, max-age=31536000, immutable" --remote
done
echo "done: https://media.wanngo.com/$key.{mp4,webm,jpg}"

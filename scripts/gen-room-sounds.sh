#!/usr/bin/env bash
# Make the little room's sounds with ElevenLabs sound effects and trim them for the web.
#
#   ELEVENLABS_API_KEY=... scripts/gen-room-sounds.sh [name ...]
#
# Writes sites/home/public/assets/audio/<name>.mp3 (mono, 48 kbps). With no names it makes every sound; with names,
# only those. Raw downloads go to media-out/audio-raw/ (git-ignored) so a re-encode never costs credits again.
# A sound that is already in the raw folder is not requested twice: delete it there to remake it.
set -euo pipefail
: "${ELEVENLABS_API_KEY:?set ELEVENLABS_API_KEY}"
root="$(cd "$(dirname "$0")/.." && pwd)"
raw="$root/media-out/audio-raw"
out="$root/sites/home/public/assets/audio"
mkdir -p "$raw" "$out"

# name | seconds | loop | prompt
SOUNDS=(
  "key1|0.5|false|single soft mechanical keyboard key press, quiet close recording, no other sound"
  "key2|0.5|false|single soft mechanical keyboard key press with a slightly lower thock, quiet, no other sound"
  "key3|0.5|false|single soft mechanical keyboard spacebar press, quiet, no other sound"
  "meow|1.2|false|a small cute kitten meow, one short meow, quiet room"
  "purr|4|true|a cat purring softly and steadily, close recording"
  "game|4|true|retro 8-bit video game music and blips, chiptune platformer loop, quiet and cheerful"
  "win|1.5|false|short retro 8-bit victory jingle, cheerful chiptune"
  "lose|1.2|false|short retro 8-bit game over sound, sad descending chiptune"
  "day|12|true|quiet room tone in a Saigon apartment in the daytime, distant motorbikes and city hum, soft birds outside, very gentle"
  "night|12|true|quiet night room tone, soft crickets outside, very distant city hum, calm and cozy"
  "ac|6|true|air conditioner steady soft hum with gentle airflow, indoor"
  "snore|4|true|a person sleeping and snoring very softly, slow breathing, indoors"
  "coffee|4|false|coffee machine brewing espresso, gurgling and hissing, kitchen counter"
  "steps|2|false|soft footsteps walking on a wooden floor in socks, four slow steps"
  "switch|0.5|false|a crisp loud click of a wall light switch being flipped, plastic toggle, close recording"
  "tvon|1|false|an old television turning on, soft electric whump and static"
  "chair|1|false|an office chair rolling a short distance on a wooden floor"
)

want=("$@")
for row in "${SOUNDS[@]}"; do
  IFS='|' read -r name secs loop prompt <<<"$row"
  if [ ${#want[@]} -gt 0 ] && [[ " ${want[*]} " != *" $name "* ]]; then continue; fi
  if [ ! -s "$raw/$name.mp3" ]; then
    echo "requesting $name"
    body=$(jq -n --arg t "$prompt" --argjson d "$secs" --argjson l "$loop" \
      '{text: $t, duration_seconds: $d, loop: $l, prompt_influence: 0.5}')
    curl -sS --fail-with-body -X POST "https://api.elevenlabs.io/v1/sound-generation?output_format=mp3_44100_128" \
      -H "xi-api-key: $ELEVENLABS_API_KEY" -H "Content-Type: application/json" -d "$body" -o "$raw/$name.mp3"
  fi
  # Short one-shots get their silence trimmed; loops are kept whole so they still join up
  filter="loudnorm=I=-24:TP=-3:LRA=11"
  if [ "$loop" = false ]; then
    filter="silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse,$filter"
  fi
  ffmpeg -y -loglevel error -i "$raw/$name.mp3" -af "$filter" -ac 1 -ar 44100 -b:a 48k "$out/$name.mp3"
  echo "  $name.mp3 $(du -h "$out/$name.mp3" | cut -f1)"
done

# Geo data audit, November 2026

`2026-11-findings.json` holds every finding from the audit of `public/data/*.js` (not deployed: Wrangler only serves `public/`).

## How it was done

1. **Mechanical checks** (script): VI/EN population, area, capital and GDP agree; `ECON` vs `RANK_DATA`; sector and religion shares sum to ~100; capital/city/island points fall in their country. All clean apart from coastline-resolution noise.
2. **Audit wave**: 38 Sonnet agents, one slice each (30 country groups with their cards, economy, regime, religion, capitals, cities and islands; 3 hotspot groups; 2 for disputed territories; 2 for admin regions; 1 for the reference tables). Each finding needed a web source.
3. **Verification wave**: 32 Sonnet agents re-checked every finding independently, with their own sources, and checked the replacement wording. Only `confirm` and `revise` were applied; `revise` uses the verifier's corrected text.

Owner's rule, applied throughout: **anything still disputed between parties says so and names the parties**, in both languages, while keeping the site's Vietnamese naming (Biển Đông, Hoàng Sa, Trường Sa) and Vietnam's position.

4. **Strict re-check** of the 32 applied changes whose first verdict leaned on memory or search snippets: 23 kept, 9 corrected
   (e.g. Taiwan GDP rank #22, San Marino ~15,000, Zimbabwe debt $22.7bn). Vanuatu's disaster-risk "rank" is now unranked
   wording, because neither the old "#1" nor "among the highest" could be sourced.
5. **VI/EN consistency**: 54 changes made in one language only were compared with their twin field; 21 twins were brought
   in line (same verified fact, translated). `scripts/check.mjs` and the VI/EN pop/area/GDP checks pass.

## Result

| | Count |
|---|---|
| Findings | 948 |
| Applied (`confirm` 561 + `revise` 280) | 841 |
| Rejected by verifiers | 63 |
| Unsure, not applied | 27 |
| Skipped (`ISLANDS_EN.*.pop`, not shown for islands) | 17 |

Applied by kind: outdated 312, contested 241, factual 210, internal 54, VI/EN mismatch 24.

Each entry has `verdict`, `verify.reason`, `verify.source`, and `applied`. To see what is still open:

```bash
node -e 'for (const x of require("./2026-11-findings.json")) if (x.verdict === "unsure") console.log(x.id, x.path, "-", x.verify.reason)'
```

// Explainers ("Góc nhìn"): step-by-step geography stories, one file each. Order = order in the list.
// withCore() merges the strategic-logic text (data/core_<id>.js) into a story: step.core, extra sources, a closing line.
import { HORMUZ } from './story_hormuz.js?v=20261109d';
import { UKRAINE } from './story_ukraine.js?v=20261109d';
import { REDSEA } from './story_redsea.js?v=20261109d';
import { TAIWAN } from './story_taiwan.js?v=20261109d';
import { BIENDONG } from './story_biendong.js?v=20261109d';
import { CHINA } from './story_china.js?v=20261109d';
import { USA } from './story_usa.js?v=20261109d';
import { ARCTIC } from './story_arctic.js?v=20261109d';
import { INDOPAK } from './story_indopak.js?v=20261109d';
import { CORE as CORE_HORMUZ } from './core_hormuz.js?v=20261109d';
import { VI as VI_HORMUZ } from './vi_hormuz.js?v=20261109d';
import { CORE as CORE_REDSEA } from './core_redsea.js?v=20261109d';
import { CORE as CORE_BIENDONG } from './core_biendong.js?v=20261109d';
import { THESIS as THESIS_BIENDONG } from './thesis_biendong.js?v=20261109d';
import { CORE as CORE_TAIWAN } from './core_taiwan.js?v=20261109d';
import { CORE as CORE_UKRAINE } from './core_ukraine.js?v=20261109d';

function withCore(story, c) {
  const off = story.sources.length;
  story.sources.push(...c.sources);
  story.steps.forEach((st, i) => {
    st.core = c.steps[i].core;
    st.src = [...new Set([...(st.src || []), ...(c.steps[i].src || []).map(j => j + off)])];
  });
  if (c.bottom) story.bottom = c.bottom;
  return story;
}

// withVi() replaces the `vi` text at each path ('steps.2.core', 'status', ...) with its natural-Vietnamese rewrite.
// withThesis() tags each step with its link of the argument and puts the whole argument first.
function withThesis(story, t) {
  story.steps.forEach((st, i) => { if (t.tags[i]) st.tag = t.tags[i]; });
  story.steps.unshift(t.step);
  return story;
}

function withVi(story, map) {
  for (const [path, vi] of Object.entries(map)) {
    let o = story;
    for (const k of path.split('.')) o = o && o[k];
    if (o && typeof o === 'object' && 'vi' in o) o.vi = vi;
  }
  return story;
}

export const STORIES = [withVi(withCore(HORMUZ, CORE_HORMUZ), VI_HORMUZ), withCore(UKRAINE, CORE_UKRAINE), withCore(REDSEA, CORE_REDSEA), withCore(TAIWAN, CORE_TAIWAN), withThesis(withCore(BIENDONG, CORE_BIENDONG), THESIS_BIENDONG), CHINA, USA, ARCTIC, INDOPAK];

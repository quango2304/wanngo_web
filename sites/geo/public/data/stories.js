// Explainers ("Góc nhìn"): step-by-step geography stories, one file each. Order = order in the list.
// withCore() merges the strategic-logic text (data/core_<id>.js) into a story: step.core, extra sources, a closing line.
import { HORMUZ } from './story_hormuz.js?v=20261109k';
import { UKRAINE } from './story_ukraine.js?v=20261109k';
import { REDSEA } from './story_redsea.js?v=20261109k';
import { TAIWAN } from './story_taiwan.js?v=20261109k';
import { BIENDONG } from './story_biendong.js?v=20261109k';
import { CHINA } from './story_china.js?v=20261109k';
import { USA } from './story_usa.js?v=20261109k';
import { ARCTIC } from './story_arctic.js?v=20261109k';
import { INDOPAK } from './story_indopak.js?v=20261109k';
import { CORE as CORE_HORMUZ } from './core_hormuz.js?v=20261109k';
import { VI as VI_HORMUZ } from './vi_hormuz.js?v=20261109k';
import { CORE as CORE_REDSEA } from './core_redsea.js?v=20261109k';
import { THESIS as THESIS_CHINA } from './thesis_china.js?v=20261109k';
import { THESIS as THESIS_ARCTIC } from './thesis_arctic.js?v=20261109k';
import { THESIS as THESIS_REDSEA } from './thesis_redsea.js?v=20261109k';
import { THESIS as THESIS_INDOPAK } from './thesis_indopak.js?v=20261109k';
import { THESIS as THESIS_TAIWAN } from './thesis_taiwan.js?v=20261109k';
import { THESIS as THESIS_USA } from './thesis_usa.js?v=20261109k';
import { THESIS as THESIS_HORMUZ } from './thesis_hormuz.js?v=20261109k';
import { CORE as CORE_TAIWAN } from './core_taiwan.js?v=20261109k';

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
// `titles`, `texts` and `cores` (optional, same order as the story's own steps) replace those texts with the plain-
// language rewrite written for the story's argument; facts, sources and map settings are untouched.
function withThesis(story, t) {
  story.steps.forEach((st, i) => {
    if (t.tags && t.tags[i]) st.tag = t.tags[i];
    if (t.titles && t.titles[i]) st.title = t.titles[i];
    if (t.texts && t.texts[i]) st.text = t.texts[i];
    if (t.cores && t.cores[i]) st.core = t.cores[i];
    else if (t.cores && t.cores[i] === null) delete st.core; // the text already carries the reasoning
  });
  if (t.order) story.steps = t.order.map(i => story.steps[i]); // indexes above are the story's own order
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

export const STORIES = [withThesis(withVi(withCore(HORMUZ, CORE_HORMUZ), VI_HORMUZ), THESIS_HORMUZ), UKRAINE, withThesis(withCore(REDSEA, CORE_REDSEA), THESIS_REDSEA), withThesis(withCore(TAIWAN, CORE_TAIWAN), THESIS_TAIWAN), BIENDONG, withThesis(CHINA, THESIS_CHINA), withThesis(USA, THESIS_USA), withThesis(ARCTIC, THESIS_ARCTIC), withThesis(INDOPAK, THESIS_INDOPAK)];

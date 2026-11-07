// Inline stroke icons (24x24, Lucide-style) for map layers and layer groups.
const P = {
  strait: '<path d="M4 4c4 3 4 13 0 16M20 4c-4 3-4 13 0 16M9 12h6M13 9l3 3-3 3"/>',
  route: '<path d="M3 16l2 4h14l2-4zM12 3v9M12 5l6 7h-6M7 12h5"/>',
  dispute: '<path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
  conflict: '<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/>',
  border: '<path d="M12 3v18M5 5h11l3 3.5-3 3.5H5zM8 21h8"/>',
  chain: '<circle cx="5" cy="17" r="2"/><circle cx="12" cy="7" r="2"/><circle cx="19" cy="15" r="2"/><path d="M6.2 15.3l4.6-6.6M13.8 8.4l4 5"/>',
  base: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M12 9v5M9.5 11.5h5"/>',
  pipeline: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  corridor: '<path d="M8 3 4 21M16 3l4 18M12 5v3M12 11v3M12 17v3"/>',
  resource: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
  terrain: '<path d="M2 20h20M4 20v-6h6v-4h10v10"/>',
  river: '<path d="M3 7c3 0 3-2 6-2s3 2 6 2 3-2 6-2M3 13c3 0 3-2 6-2s3 2 6 2 3-2 6-2M3 19c3 0 3-2 6-2s3 2 6 2 3-2 6-2"/>',
  mountain: '<path d="M3 20l6-11 4 6 3-4 5 9z"/>',
  desert: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  forest: '<path d="M12 3l6 8h-3l4 6H5l4-6H6zM12 17v4"/>',
  ice: '<path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7"/>',
  continents: '<circle cx="12" cy="12" r="9"/><path d="M6.5 6.5c2 .5 3 2 2.5 3.5s.5 2.5 2 3 1 2.5 0 3.5M14 3.5c-.5 2 1 3.5 3 3.5M15 20.5c-.5-2 .5-3.5 2.5-4"/>',
  capitals: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  islands: '<path d="M3 20c3 0 3-1.5 6-1.5s3 1.5 6 1.5 3-1.5 6-1.5M12 17V9M12 9c-3-3-6-2-7 0M12 9c3-3 6-2 7 0"/>',
  cities: '<path d="M5 21V4h9v17M14 10h5v11M3 21h18M8 8h3M8 12h3M8 16h3"/>',
  admin1: '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14"/>',
  timezone: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  // groups
  g_hot: '<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/>',
  g_admin: '<path d="M5 21V4h9v17M14 10h5v11M3 21h18M8 8h3M8 12h3M8 16h3"/>',
  g_nat: '<path d="M3 20l6-11 4 6 3-4 5 9z"/>',
  g_infra: '<path d="M3 21V10l6 4v-4l6 4V6h6v15zM7 17h2M13 17h2M18 17h1"/>'
};

export const iconSvg = (key, cls = 'i') =>
  P[key] ? `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[key]}</svg>` : '';

/* Hivory Icons — custom in-house set, drawn on the brand's own grammar.
   GRAMMAR: 16px grid · 1.5px even stroke · round caps + joins · no fills.
   SIGNATURE: the hexagon (from the Hivory mark) replaces the generic square/
   circle wherever an icon needs a "container" — dashboard's fourth tile,
   the agent's body, the AI spark's geometry. Diagonals prefer the hexagon's
   60° family over generic 45°. Color: text-muted rest → ink-950 active →
   ink-200 disabled. Never green. */

/* Pointy-top hexagon path centered (cx,cy) radius r */
function hvHexPath(cx, cy, r) {
  const w = r * 0.866;
  return `M${cx} ${cy - r}L${cx + w} ${cy - r / 2}V${cy + r / 2}L${cx} ${cy + r}L${cx - w} ${cy + r / 2}V${cy - r / 2}Z`;
}

const HIVORY_ICON_PATHS = {
  /* navigation */
  dashboard: <g><rect x="2" y="2" width="5" height="5" rx="1.2"/><rect x="9" y="2" width="5" height="5" rx="1.2"/><rect x="2" y="9" width="5" height="5" rx="1.2"/><path d={hvHexPath(11.5, 11.5, 2.9)}/></g>,
  pipeline: <g><path d="M2.5 3h11L9.5 7.8v4.7l-3-2V7.8L2.5 3Z"/></g>,
  chart: <g><path d="M2 13.5h12M4.5 10.5v-3M8 10.5V4.5M11.5 10.5V7"/></g>,
  agent: <g><path d={hvHexPath(8, 8, 5.5)}/><path d="M6.2 7.2v1.6M9.8 7.2v1.6"/></g>,
  spark: <g><path d="M8 2c.4 3.4 2.6 5.6 6 6-3.4.4-5.6 2.6-6 6-.4-3.4-2.6-5.6-6-6 3.4-.4 5.6-2.6 6-6Z"/></g>,
  clock: <g><circle cx="8" cy="8" r="5.75"/><path d="M8 5v3.2l2.2 1.3"/></g>,
  globe: <g><circle cx="8" cy="8" r="5.75"/><path d="M2.25 8h11.5M8 2.25c2.4 2 2.4 9.5 0 11.5M8 2.25c-2.4 2-2.4 9.5 0 11.5"/></g>,
  upload: <g><path d="M8 10.5V3M5 5.5 8 2.5l3 3M3 13.5h10"/></g>,
  calendar: <g><rect x="2.5" y="3.5" width="11" height="10" rx="1.5"/><path d="M2.5 7h11M5.5 1.75V4M10.5 1.75V4"/></g>,
  settings: <g><path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11"/><circle cx="10" cy="4.5" r="1.6" fill="var(--surface-card, #fff)"/><circle cx="5.5" cy="8" r="1.6" fill="var(--surface-card, #fff)"/><circle cx="8.5" cy="11.5" r="1.6" fill="var(--surface-card, #fff)"/></g>,
  doc: <g><path d="M4 2h5l3 3v9H4V2Z"/><path d="M9 2v3h3"/></g>,
  search: <g><circle cx="7" cy="7" r="4.5"/><path d="M10.4 10.4 13.5 13.5"/></g>,
  mail: <g><rect x="2" y="3.5" width="12" height="9.5" rx="1.5"/><path d="M2.5 4.5 8 9l5.5-4.5"/></g>,
  users: <g><circle cx="8" cy="5.5" r="2.75"/><path d="M3.5 13.5c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4"/></g>,
  bell: <g><path d="M8 2a4 4 0 0 1 4 4v3l1.5 2.5h-11L4 9V6a4 4 0 0 1 4-4Z"/><path d="M6.8 13.5a1.3 1.3 0 0 0 2.4 0"/></g>,
  /* actions + state */
  'arrow-right': <g><path d="M2.5 8h11M9.5 4l4 4-4 4"/></g>,
  check: <g><path d="M2.5 8.5 6.5 12.5 13.5 4"/></g>,
  close: <g><path d="M3.5 3.5l9 9M12.5 3.5l-9 9"/></g>,
  signout: <g><path d="M6 2.5H3.5v11H6M10 5l3 3-3 3M13 8H6.5"/></g>,
  moon: <g><path d="M13 9.5A5.5 5.5 0 1 1 6.5 3a4.5 4.5 0 0 0 6.5 6.5Z"/></g>,
};

export function Icon({ name, size = 16, strokeWidth = 1.5, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
      {HIVORY_ICON_PATHS[name] || HIVORY_ICON_PATHS.doc}
    </svg>
  );
}

export const ICON_NAMES = Object.keys(HIVORY_ICON_PATHS);

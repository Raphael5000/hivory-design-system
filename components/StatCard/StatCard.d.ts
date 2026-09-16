import type { ReactNode } from 'react';

export interface StatCardProps {
  /** What is being counted, in the reader's words — "Conversations started",
   *  never a metric key. Sentence case; the tile is not a heading. */
  label: string;
  /** The reading, pre-formatted by the caller ("1284", "63%", "R 412,37") —
   *  the card renders numbers, it never derives them. `null`/`undefined`
   *  means the metric cannot be measured yet and renders an em-dash in
   *  --text-faint. A measured zero MUST be passed as 0: zero is a reading,
   *  absence is not, and the component refuses to guess which. */
  value?: string | number | null;
  /** One qualifying line under the reading ("This month", "All chats,
   *  resolved or not") — sits at the Bond rung (3px): the value and its
   *  qualifier are one fact. Omit when the label alone is unambiguous. */
  sub?: string;
  /** Slot beside the label for a definition trigger — pass an <InfoTip>.
   *  Sits at the Pair rung (8px) from the label text. */
  info?: ReactNode;
  /** Skeleton the reading (and qualifier) at their exact heights; the label
   *  stays real — it is known before the number is. Never counts up on
   *  arrival: a stat is a fact, not a performance. */
  loading?: boolean;
  /** Drop the reserved qualifier space. The default 108px min-height exists so
   *  a row of tiles shares one baseline WHEN some carry a `sub`; a row where
   *  none do is uniformly too tall, and the label and reading drift apart.
   *  Set on every tile in the row, never on some of them. */
  dense?: boolean;
  /** The tile is the control that shows or hides its own series on a chart
   *  beneath it — the tile IS the legend. Renders a real <button> with
   *  aria-pressed and a tick box in the label row. Use only above a chart
   *  the tile drives; a tile that toggles nothing must not look pressable. */
  toggle?: boolean;
  /** Whether this tile's series is shown. The checkbox is the only state the
   *  tile shows — filled in `accent` when on; the card itself never changes. */
  selected?: boolean;
  onToggle?: () => void;
  /** The series colour as a token reference — `var(--palette-megadyne-1)`,
   *  `var(--series-2)` — never a raw value. Must be the colour the chart draws
   *  this tile's series in, or the tile stops being the legend. */
  accent?: string;
}

/**
 * StatCard — one KPI tile: label top, reading bottom, on the Card canon
 * (16px 18px padding, --radius-xl, --shadow-card, min-height 108px so a row
 * of tiles shares one baseline — or `dense` when no tile in the row carries a
 * qualifier, which sizes the card to label + reading).
 *
 * Design rules:
 * · The reading is 28px --weight-display, tabular numerals, --ink-950.
 * · Rest is the only interactive-adjacent state; the card is a reading, not
 *   a control. Hover / pressed / focus / selected / disabled: not applicable
 *   — nothing to press, and a tile that reacts to the cursor implies it can
 *   be clicked. If a stat must link somewhere, wrap it in a real <a> and put
 *   the ring on the anchor. The one exception is `toggle` (4.5.11): a tile
 *   sitting on a chart it shows or hides, where the tile is the legend and
 *   the control at once — a real button, with the ring on it.
 * · Empty: `null` renders an em-dash (absence); a measured zero renders 0
 *   (a reading). The caller decides, per the empty-cell doctrine.
 * · Loading: skeleton at exact heights (see `loading`).
 * · Motion: none of its own — values swap, they never animate. The tile
 *   inherits entrance motion from its screen, not from itself.
 */
export declare function StatCard(props: StatCardProps): JSX.Element;

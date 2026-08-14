export interface GanttPhase {
  /**
   * Client-language name ("First drafts, held" — never "sprint 2").
   * Labels never truncate: rendered inside the bar at 3+ weeks, outside to its
   * right below that. Both are part of the same button — one control per phase.
   */
  label: string;
  /** First week of the phase, 1-based inclusive. */
  start: number;
  /** Last week of the phase, 1-based inclusive. Defaults to `start`. */
  end?: number;
}

/**
 * Gantt — a staircase of quiet ink bars on a week grid; the plan you can click.
 * A client's plan, not a PM tool.
 *
 * Design rules (binding):
 * - The bars ARE the control: each is a real <button> (Enter/Space activate) that
 *   selects its phase and fires onSelect. No duplicate tab row. The detail region
 *   (names, dates, deliverables) is the consumer's job.
 * - One palette: rest = 7% ink wash with text-nav labels, selected = ink-950 fill,
 *   white label, soft green-tinted shadow. Never a colour per phase; green never
 *   fills a bar (green is signal only).
 * - Geometry: 38px lane pitch, 30px bars, staircase bottom-up (first phase
 *   bottom-left so the eye climbs with time), faint week grid with a heavier line
 *   every 4. Chart geometry is drawn from values and exempt from the icon rules.
 * - Motion: selection/hover are tint + ring/shadow on --duration-soft, never
 *   displacement; press is brightness(0.94).
 * - Time axis: weeks (W1…Wn) until a contract is signed — sequence and pace, not
 *   calendar dates; pass axisLabels to switch to months past 8 weeks. Axis labels
 *   are tabular-nums. No dependency arrows, percent-complete, avatars or
 *   horizontal scroll — compress the window instead.
 * - States: rest · hover (deeper wash) · pressed · focus-visible ring · selected.
 *   Disabled does not apply — a phase that cannot be selected does not appear in a
 *   client plan. Loading = shimmer bars at the real staircase geometry. Empty = one
 *   quiet line, never an empty grid.
 */
export interface GanttProps {
  phases?: GanttPhase[];
  /** Number of week columns. Defaults to the latest phase end. */
  weeks?: number;
  /** Controlled selected phase index. Omit for uncontrolled (defaultSelected). */
  selected?: number;
  /** Initial selection when uncontrolled. @default 0 */
  defaultSelected?: number;
  /** Fires on click / Enter / Space on a bar. Drive the detail region from this. */
  onSelect?: (index: number, phase: GanttPhase) => void;
  /** Axis tick labels. Defaults to W1…Wn. */
  axisLabels?: string[];
  /** Shimmer bars at the real staircase geometry (uses `phases` if given). */
  loading?: boolean;
  /** @default "No phases yet — the plan has not been drawn" */
  emptyText?: string;
}

/** The DS Gantt — selection, not decoration. Portal-canonical: Hivory Proposal § Timeline. */
export declare function Gantt(props: GanttProps): JSX.Element;

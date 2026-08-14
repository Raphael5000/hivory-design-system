export interface CapMeterProps {
  /** The allowance, named in the unit the client bought — "Social posts",
   *  "Buyer contacts". Never credits, tokens, units or API calls. Omit for
   *  the compact in-card form (track + value only). */
  label?: string;
  /** Units used this period. Zero is a reading, not absence: it renders an
   *  empty track and "0 of 12", never an em-dash — the month has started
   *  and nothing has run yet, which is worth seeing. */
  used?: number;
  /** The ceiling the client agreed to. Full track width means the cap,
   *  always. */
  cap: number;
  /** One plain line under the meter. Rendered only at or past the cap —
   *  under it there is nothing to say, and a reassuring line where none is
   *  needed teaches the client to stop reading the ones that matter. At the
   *  cap, say when it reopens ("Next month's twelve start on 1 Aug"); over
   *  it, say how much and whether it is billed or absorbed. Never an
   *  upsell. */
  note?: string;
  /** The allowance is not in the plan: --ink-100 track, no fill, "Not in
   *  your plan" where the value sits — greyed but still listed, never
   *  hidden, so the client can see what exists. */
  excluded?: boolean;
  /** Skeleton the track and value at their exact heights; the label stays
   *  real (it is known before the count is). Never animates a fill from
   *  zero — a growing bar reads as a real number climbing. */
  loading?: boolean;
}

/**
 * Cap meter — what you bought, and what's left of it. A reading, not a
 * control: nothing to press, focus, or select.
 *
 * Design rules (spec: Component - Cap meter):
 * · Geometry from chart/hbar: 110px label column, 8px --radius-pill track
 *   on --ink-100, tabular value right ("8 of 12" — used then ceiling,
 *   never a bare number, never a percentage). The ink track is exempt
 *   from text contrast — the ink ramp is correct for tracks.
 * · Tone ladder: --green-600 under the cap (silent — no note, no chip);
 *   --amber-500 at AND over the cap, never red. Reaching a cap you paid
 *   for is the plan working; red is reserved for failure. The overage is
 *   a hatched --ink-300 segment past the amber fill — "beyond the line",
 *   not "danger". Value warms to --ink-900 at 650 once the cap is met.
 * · The fill is used/cap clamped at 100% and the number is never rounded —
 *   the bar and the number must agree.
 * · Motion: width settles on --duration-slow / --ease-glide only when the
 *   value genuinely changes; tone crosses on --duration-soft. Nothing
 *   pulses, nothing counts up on mount — an allowance is not activity.
 * · The track is aria-hidden: it is a picture of the visible "8 of 12".
 * · Hover: not applicable to the meter itself — where meters sit as rows,
 *   the containing ROW tints --hover-on-white; a meter that lights up on
 *   hover implies it can be clicked.
 * · Pressed / Focus / Selected: not applicable — nothing to press (changing
 *   an allowance is a request through the chat, never a plus button), any
 *   focus ring belongs to a containing row link, and a meter is never one
 *   of a set you choose between.
 * · At most four meters in a group; every meter states its period once, in
 *   the note or the section head.
 */
export declare function CapMeter(props: CapMeterProps): JSX.Element;

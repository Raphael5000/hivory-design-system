export interface StepTimelineArrival {
  /** The outcome, stated — "Live on staging". */
  title: string;
  /** One quiet tabular line — "Built and verified in 41s". */
  meta?: string;
}

export interface StepTimelineProps {
  /** One-word phase nouns — Build · Deploy · Verify. Three phases minimum,
   *  four at most: fewer is not a timeline (use Spinner + a label), more is
   *  too granular for a client. A phase whose name needs a clause is two
   *  phases. Never technical names borrowed from the pipeline. */
  phases: string[];
  /** Index of the phase happening now. Earlier phases are done. Exactly one
   *  active node, ever — a rail with two pulses is a bug in the caller. */
  active?: number;
  /** The live line, present participle — "Deploying to staging", never
   *  "Deploy" or "Deployed". The rail carries the noun; this carries the
   *  verb. It is the ONLY part announced (aria-live="polite"); the rail is
   *  aria-hidden, a picture of this line. */
  label?: string;
  /** Elapsed clock counting up, tabular — "8s". Never a percentage and
   *  never an ETA: a made-up estimate that slips is worse than an honest
   *  clock. */
  elapsed?: string;
  /** The active phase broke: its node goes red with a white cross, later
   *  phases stay hollow. The rail STOPS where it failed — never rewinds to
   *  zero, because which phase failed is the most useful thing on screen. */
  failed?: boolean;
  /** When set, the whole timeline is REPLACED by its outcome — the
   *  hex-check, the title, the meta. Leaving three green checks on screen
   *  makes the client hunt for the result; the arrival states it. */
  arrived?: StepTimelineArrival;
  /** The dual-hex spinner above the label (default true) — the brand's own
   *  activity primitive at --duration-spinner in six-step gear clicks,
   *  never a generic ring. Hidden automatically while failed. */
  mark?: boolean;
}

/**
 * Step timeline — the visible half of a running job. Purely informational:
 * the machine advances it, nothing is clickable, and it takes no tab stop.
 *
 * Design rules (spec: Component - Step timeline):
 * · Nodes 16px on a 78px phase column, 62×2px connectors that tint
 *   --green-600 on --duration-slow as phases pass. Done = green fill +
 *   white 9px house check (permanent Tabler exemption at this size).
 *   Active = green fill + 5px white core + radiating pulse on
 *   --duration-pulse. Upcoming = white with a 1.5px --ink-200 ring.
 * · The spinner and node pulse carry data-motion="essential": under reduced
 *   motion they calm to 2.4s rather than stopping — freezing them would
 *   leave a still picture indistinguishable from a stalled one.
 * · Not a log: no step counts, no per-phase timestamps, no expandable
 *   detail, no percentage.
 * · Rest: not applicable — a step timeline exists only while a job runs; an
 *   idle rail means the caller forgot to unmount it.
 * · Hover / Pressed / Focus / Selected / Disabled: not applicable — nothing
 *   responds to a pointer, no control means no press or focus stop (a stop
 *   that cannot be actioned promises an affordance that is not there), the
 *   active phase is not a selection, and upcoming phases are facts about
 *   the future, not controls withheld.
 * · Loading IS this component — before the first phase resolves, show the
 *   mark and the first label; never a skeleton, never an empty rail.
 * · Empty: not applicable — fewer than three phases is not a timeline; use
 *   Spinner and a label instead.
 */
export declare function StepTimeline(props: StepTimelineProps): JSX.Element;

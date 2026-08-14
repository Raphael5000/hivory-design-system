import { ReactNode } from 'react';

export interface StepperProps {
  /** Section names in order, sentence case, identical to the headings they
   *  scroll to — "Overview", "Cost", "Accept & sign". Never a verb phrase,
   *  never numbered in the label (the mark carries the number), never
   *  truncated: a name that does not fit at 224px is too long a name.
   *  Six steps is the practical ceiling; past that the document wants
   *  chapters. Below two steps a stepper is not a flow — use a heading. */
  steps: string[];
  /** Index of the current step. Done marks (green check) precede it. */
  at?: number;
  /** Furthest index the reader has reached (defaults to `at`). Steps beyond
   *  it are native-disabled: visible and counted, but not clickable — a
   *  stepper never lets you skip to an end you have not earned. Everything
   *  at or behind `reached` is freely clickable. */
  reached?: number;
  /** Called with the step index when a reachable step is activated. */
  onStep?: (index: number) => void;
  /** Group header — one uppercase word at --text-eyebrow. A stepper has
   *  exactly one group; more than one means it is a rail (use Sidebar). */
  heading?: string;
  /** 'rail' (default): 224px glass card, the proposal's spine.
   *  'bar': the below-720px form — green segments plus the current section's
   *  name and "n of N". You lose the ability to jump, which is the right
   *  trade on a small screen. */
  variant?: 'rail' | 'bar';
  /** Optional footer pinned under the steps (rail only) — who prepared the
   *  document and how long it is valid. */
  colophon?: ReactNode;
}

/**
 * Sequential step indicator — the proposal's spine, and the only place in the
 * system where progress is a promise.
 *
 * Design rules (spec: Component - Stepper):
 * · Marks — 19px circle, state told apart by SHAPE, not colour alone:
 *   done = --green-50 fill + 9px house check in --green-600 (the one
 *   component where green marks something the CLIENT did) · now = --ink-900
 *   fill, white tabular numeral · ahead = hollow --ink-200 ring, --ink-400.
 * · ONE gliding --selected-pill on --duration-slow / --ease-glide — the
 *   list-nav primitive shared with Sidebar. Steps never paint their own
 *   active fill; the pill is the only thing that moves.
 * · Keyboard — real buttons; Enter/Space activate, arrows move within the
 *   rail, Tab leaves it. aria-current="step" travels with the pill.
 * · Hover only on reached steps (--hover-on-canvas); a step ahead does not
 *   respond at all — hover must not promise a click that will not happen.
 * · Never a drawn connector line (the pill and the order already say it),
 *   never a percentage — a stepper counts sections.
 * · Loading: not applicable — the stepper renders immediately with all
 *   labels; navigation never waits for content.
 * · Empty: not applicable — a flow with one step is not a flow; below two
 *   steps, use a heading.
 */
export declare function Stepper(props: StepperProps): JSX.Element;

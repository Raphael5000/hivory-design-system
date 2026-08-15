import type { ReactNode } from 'react';

export interface InfoTipProps {
  /** What is being defined — the metric's visible name ("Resolved rate").
   *  Becomes the popover heading and the trigger's aria-label
   *  ("How Resolved rate is measured"). */
  title: string;
  /** The definition — one to three plain sentences. Text only: no links, no
   *  controls. If the definition needs a paragraph break, it is too long for
   *  a popover and belongs in documentation. */
  children?: ReactNode;
  /** One caution-toned line under the definition for a measurement that is
   *  not settled ("Pending sign-off: whether abandoned chats count").
   *  Rendered in --status-caution-text; omit once the definition is final. */
  note?: string;
  /** Popover alignment relative to the trigger: 'start' (default) opens
   *  left-aligned, 'end' right-aligned — use 'end' in a grid's last column
   *  so the popover never leaves the viewport. */
  align?: 'start' | 'end';
  /** Glyph size in px, following icon sizing: 14 dense (default) · 16
   *  default text · 18 roomy. */
  size?: number;
}

/**
 * InfoTip — a definition popover for metrics: "how is this measured",
 * carried behind a small info glyph so the label stays clean.
 *
 * Design rules:
 * · The trigger is a real <button> whose focus reveals the popover
 *   (focus-within) — the tab stop has a function, per keyboard doctrine.
 * · Icon ramp: --text-muted rest → --ink-950 hover/focus. Never green.
 * · Popover: 290px, --shadow-overlay on --surface-card, title→body at the
 *   Pair rung (8px — a compact surface, where Sibling would float).
 * · Reveal eases on --duration-soft / --ease-out; it settles, never snaps.
 * · States: hover and focus are the component's whole life. Pressed /
 *   selected / disabled / loading / empty: not applicable — it is never a
 *   command, never chosen from a set, and an InfoTip with nothing to say
 *   should not exist.
 * · Content rules: definitions, not persuasion. If the number is bad, the
 *   popover explains the method anyway — it never argues with the reading.
 */
export declare function InfoTip(props: InfoTipProps): JSX.Element;

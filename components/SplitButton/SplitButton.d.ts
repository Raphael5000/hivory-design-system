import { ReactNode } from 'react';

export interface SplitButtonItem {
  id: string;
  /** The alternative in plain words — "Publish now", "Best slot — 4 Aug 09:00",
   *  "Pick a date & time…" (the only row that earns an ellipsis, because it opens something). */
  label: ReactNode;
  /** Optional --text-label sub line naming why that slot is best. */
  sub?: ReactNode;
}

/**
 * SplitButton — every publishing verb in the console. The main segment approves with
 * the default schedule; the chevron opens the alternatives.
 *
 * Design rules (spec: "Component - Split button"):
 * - Two variants only, both for shipping: primary (ink — the default, every artifact
 *   footer) and brand (one per view, hero moment only). No outline, ghost or danger
 *   split — if the action is reversible or secondary it does not earn two segments.
 * - Sizes borrow Button's ladder: md 33px / 18px pad and sm 26px / 13px pad. There is
 *   NO lg split — a hero CTA is a single decision (declared exemption from the 26/33/40
 *   ladder, per spec).
 * - Pill radius on the outer edges only; the inner corners are square. The divider is
 *   an inset box-shadow at 18% white (18% near-black on brand), never a border — a
 *   border would add a pixel and break the pill's symmetry.
 * - The menu is DS Menu chrome value for value (--radius-xl, --shadow-overlay, 5px
 *   padding); the ONE deviation is direction — it opens UPWARD by default because a
 *   split button lives in a footer. Three menu rows at most.
 * - The label names the verb and its real consequence ("Approve & publish") and never
 *   describes the chevron — no caret in the label. The chevron changes only WHEN,
 *   never WHAT.
 * - Both segments are real buttons and both take a tab stop; the chevron carries
 *   aria-haspopup/aria-expanded and its own accessible name. Esc closes the menu and
 *   returns focus to the chevron.
 * - Disabled disables BOTH segments and the menu cannot open. Loading keeps the main
 *   segment's label, puts the spinner in its glyph slot, and disables the chevron so a
 *   second schedule cannot be chosen mid-flight.
 * - Declared state exemptions: selected (a split button ships and returns — the Work
 *   queue reports the choice, the button holds no state) and empty (with no `items`
 *   it renders as a plain full-pill button — a split with a one-row menu is a lie
 *   about the choice available).
 */
export interface SplitButtonProps {
  /** primary = ink (default). brand = the hero moment, one per view. */
  variant?: 'primary' | 'brand';
  /** md 33px (default) · sm 26px for dense rows. No lg — see spec. */
  size?: 'md' | 'sm';
  /** Disables both segments; the menu cannot open. Never disable only one segment. */
  disabled?: boolean;
  /** Spinner in the main segment's glyph slot; chevron disabled mid-flight. */
  loading?: boolean;
  /** Menus open upward by default — split buttons live in footers. */
  direction?: 'up' | 'down';
  /** The alternatives, soonest first. Empty = renders as a plain pill button. */
  items?: SplitButtonItem[];
  /** The default action — the main segment's click. */
  onAction?: () => void;
  /** Fires with the picked item id; the menu closes. */
  onSelect?: (id: string) => void;
  /** Accessible name for the chevron segment, e.g. "Choose when to publish". */
  chevronLabel?: string;
  defaultOpen?: boolean;
  /** Main-segment label: the verb and its consequence — "Approve & publish". */
  children?: ReactNode;
}

export declare function SplitButton(props: SplitButtonProps): JSX.Element;

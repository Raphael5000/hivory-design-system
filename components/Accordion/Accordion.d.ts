import { ReactNode } from 'react';

export interface AccordionSubRow {
  /** The breakdown name — a reading, not an action. No verbs, no links. */
  label: ReactNode;
  /** Displayed tabular count. Rows counting 0 render --text-faint (zero is a reading). */
  count: ReactNode;
  /** Numeric value for the meter when `count` is not a plain number. */
  value?: number;
  /** 0–100 meter share. Computed from `value`/`count` relative to the row's max when omitted. */
  pct?: number;
}

export interface AccordionItem {
  id: string;
  /** The category as the client would say it, sentence case, no counts in the words —
   *  the count has its own column. */
  label: ReactNode;
  /** Displayed tabular count (may carry a unit, e.g. "412 posts"). */
  count?: ReactNode;
  /** Numeric value for the meter when `count` is not a plain number. */
  value?: number;
  /** 0–100 share for the head meter. Computed relative to the largest item when omitted. */
  pct?: number;
  /** Rank shown in the head's first column. Defaults to the item's position;
   *  pass it when one ranking is split across stacked accordion instances so
   *  the numbers stay true to the whole ranking, not the instance. */
  rank?: number;
  /** The breakdown one level down. Two levels, never three — a third level means the
   *  data wants its own table. */
  rows?: AccordionSubRow[];
  /** One plain sentence shown when the row opens with nothing beneath it. */
  emptyNote?: ReactNode;
  /** Generic disclosure escape hatch — rendered in the body instead of `rows`. */
  content?: ReactNode;
}

/**
 * Accordion — a table row that opens. Not a stack of cards.
 *
 * Design rules (spec: "Component - Accordion"):
 * - ONE card at --radius-xl holding every row — never a card per row. Rows separate on
 *   hairlines (inset shadow, no borders).
 * - The head IS a table row: rank · label · count · meter · chevron in Table's row
 *   grammar, numerics tabular and right-aligned. Opening is something it can do, not
 *   something it is.
 * - The chevron rotates 90° on soft motion (--duration-slow, --ease-glide) — the glyph
 *   never swaps to a minus or a caret.
 * - OPEN IS NOT SELECTED: many rows may be open at once. Open rows take a quiet
 *   --ink-50 wash and a rotated chevron — never the ink fill or 2px edge.
 * - No height animation: the body appears (fade + 6px rise per sub row, meters grow on
 *   --ease-glide); it does not slide, so the list below never jumps.
 * - The body indents to 66px so it aligns with the LABEL, not the card edge — the
 *   indent is the grouping device, no connector line, no nested card.
 * - One meter column: the head carries the graded bar in --green-600; sub rows use
 *   --ink-300 so the head's green stays the only signal.
 * - Keyboard: one tab stop per row (a real button with aria-expanded); sub rows are
 *   not focusable because they do nothing.
 * - Declared state exemptions: selected (open is disclosure, not selection) and
 *   disabled (a category with no data still opens and says so — disabling it would
 *   hide that the category exists).
 * - Empty, two kinds: an open row with nothing beneath says it in one sentence
 *   (`emptyNote`); a whole accordion with no rows shows one line naming what will
 *   appear (`emptyText`) — not an illustration.
 * - Loading: heads render with real labels; counts and meters are skeleton pills at
 *   the same row height. The list never collapses while it loads.
 */
export interface AccordionProps {
  items?: AccordionItem[];
  /** Uncontrolled: ids open on first render. */
  defaultOpen?: string[];
  /** Controlled: the set of open ids. */
  open?: string[];
  /** Fires per toggle with the row id and its next open state. */
  onToggle?: (id: string, isOpen: boolean) => void;
  /** Real labels, skeleton counts and meters. */
  loading?: boolean;
  /** One line naming what will appear, shown when there are no rows. */
  emptyText?: ReactNode;
}

export declare function Accordion(props: AccordionProps): JSX.Element;

import { ReactNode } from 'react';

/** Status tone dot on a row. Status colours never follow the brand: positive is green,
 *  caution amber, negative red, neutral ink — in every deployment. */
export type FilterSelectTone = 'positive' | 'caution' | 'negative' | 'neutral';

export interface FilterSelectOption {
  id: string;
  /** The value as the client reads it elsewhere in the product — identical wording to the Badge and the section header. */
  label: ReactNode;
  /** Optional right-aligned 6px tone dot. Omit for plain value rows (e.g. Channel). */
  tone?: FilterSelectTone;
}

/**
 * FilterSelect — the multiselect dropdown for filtering ledgers and tables.
 *
 * Design rules (spec: "Component - Filter select"):
 * - One quiet pill trigger per dimension (Status, Channel), placed right of the search
 *   field — NEVER a row of option pills. Over ~3 options a pill row is noise.
 * - The trigger says the dimension, not the selection, until something is picked:
 *   "Status" then "Status · 2" — the count tallies into the label, never a badge on top.
 *   Active = --action-primary ink fill on the trigger.
 * - The panel is DS Menu chrome: --radius-xl on --shadow-overlay, fade + 6px rise on
 *   --duration-soft. 32px checkbox rows (15px box, radius 4, ink fill + white check) —
 *   ink checks, green stays a signal, not a control.
 * - The panel STAYS OPEN across picks — closing after each check makes multiselect
 *   unusable. Esc closes (returning focus to the trigger); click-away closes.
 * - Once anything is picked, a "Clear" ghost row sits below a hairline. "Clear",
 *   never "Reset" or "Remove all".
 * - Declared state exemptions: disabled (a dimension with nothing to filter is not
 *   rendered — the prop exists only for spec-strip parity) and loading (options are
 *   known before the trigger appears).
 * - Don't stack more than three filter dimensions on one ledger.
 */
export interface FilterSelectProps {
  /** The dimension name — "Status", "Channel". */
  label: string;
  options?: FilterSelectOption[];
  /** Controlled selection: array of option ids. */
  value?: string[];
  /** Uncontrolled initial selection. */
  defaultValue?: string[];
  /** Fires with the full next selection on every pick and on Clear. */
  onChange?: (selected: string[]) => void;
  /** Which trigger edge the panel hangs from. */
  align?: 'left' | 'right';
  defaultOpen?: boolean;
  /** Spec-strip parity only — normally a dimension with nothing to filter is not rendered. */
  disabled?: boolean;
  /** --text-faint row shown when options is empty. */
  emptyText?: string;
}

export declare function FilterSelect(props: FilterSelectProps): JSX.Element;

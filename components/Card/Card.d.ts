import { ReactNode } from 'react';

export interface CardProps {
  title?: string;
  subtitle?: string;
  /** Right-aligned header slot — usually Buttons or a Select. */
  actions?: ReactNode;
  /** Remove body padding (for tables and other full-bleed content). */
  flush?: boolean;
  children?: ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;

/**
 * Scorecard — analytics metric tile for dashboards and summaries.
 *
 * Sizing: 11px label, 22px mono value (tabular-nums), 11.5px change.
 * Change color respects sentiment: a +35% on a cost metric (down_is_good) renders red.
 */
export interface ScorecardProps {
  label?: string;
  /** Pre-formatted metric value, e.g. "585" or "R1,899.90". */
  value?: string;
  /** Percentage change, e.g. "+35.3%" or "-22.2%". Omit to hide. */
  change?: string;
  /** Determines color direction. 'up_is_good' = increase is green. 'down_is_good' = increase is red. */
  sentiment?: 'up_is_good' | 'down_is_good';
}

export declare function Scorecard(props: ScorecardProps): JSX.Element;

/** @deprecated Use Scorecard for analytics. Stat is kept for backward compatibility. */
export interface StatProps {
  label?: string;
  /** The metric, rendered in mono — e.g. "$2.41M". */
  value?: string;
  /** e.g. "38.2%" — omit to hide the delta row. */
  delta?: string;
  direction?: 'up' | 'down';
  deltaTone?: 'positive' | 'caution' | 'negative' | 'neutral';
}

export declare function Stat(props: StatProps): JSX.Element;

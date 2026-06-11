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

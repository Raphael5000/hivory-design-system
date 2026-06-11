import { ReactNode } from 'react';

export interface BadgeProps {
  /** positive=green (live/healthy) · info=teal (testing/active) · caution=amber (queued/pending) · negative=red (failed) */
  status?: 'positive' | 'info' | 'caution' | 'negative' | 'neutral';
  /** Show a small leading status dot. */
  dot?: boolean;
  children?: ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;

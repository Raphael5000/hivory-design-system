import { ReactNode } from 'react';

export interface SpinnerProps {
  /** Diameter in px. 12–14 inline/button, 16 default, 20–24 panels, 32+ page-level. */
  size?: number;
  /** 'brand' = green on light (default) · 'ink' = quiet neutral · 'on-dark' = green-500 on dark surfaces. */
  tone?: 'brand' | 'ink' | 'on-dark';
  /** Optional text beside the spinner, e.g. "Syncing…", "Agent writing…". */
  label?: ReactNode;
  /** Slower ambient rotation for long-running background work (agents). */
  calm?: boolean;
}

export declare function Spinner(props: SpinnerProps): JSX.Element;

export interface PulseDotProps {
  /** positive=green (default) · caution=amber · info=teal · negative=red. */
  tone?: 'positive' | 'caution' | 'info' | 'negative';
  /** Dot diameter in px (pulse ring radiates beyond it). Default 7. */
  size?: number;
}

/** Ambient "alive" dot with a radiating pulse — ongoing presence (agent running,
 *  live sync), vs Spinner which is for discrete in-flight work. */
export declare function PulseDot(props: PulseDotProps): JSX.Element;

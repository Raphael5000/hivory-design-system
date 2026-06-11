import { ReactNode } from 'react';

export interface MetricChipProps {
  /** Tiny uppercase label, e.g. "Vol", "KD", "Pos". Omit for value-only. */
  label?: string;
  /** Mono value, e.g. "12.4K/mo", "#4", "61%". */
  value: ReactNode;
  /** 'chip' = bordered pill for cards/headers (default) · 'bare' = naked, for table cells and tight rows. */
  variant?: 'chip' | 'bare';
  /** Optional leading element, e.g. a DifficultyMeter with showValue=false or a 14px Icon. */
  icon?: ReactNode;
}

/** Labelled micro-stat for per-article/keyword indicators, in and out of tables. */
export declare function MetricChip(props: MetricChipProps): JSX.Element;

export interface DifficultyMeterProps {
  /** 0–100. */
  value: number;
  /** 'difficulty' (default): low = green/easy, high = red/hard. 'score': flipped — high = green/good. */
  semantics?: 'difficulty' | 'score';
  /** Show the mono number beside the bars (default true). */
  showValue?: boolean;
  /** Accessible name override, e.g. "Keyword difficulty". */
  label?: string;
}

/** 4-bar mini meter for 0–100 scales (keyword difficulty, content score). */
export declare function DifficultyMeter(props: DifficultyMeterProps): JSX.Element;

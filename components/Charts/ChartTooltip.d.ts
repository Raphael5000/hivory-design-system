export interface ChartTooltipRow {
  label?: string;
  /** Rendered in mono, right-aligned. */
  value?: string;
  color?: string;
}

export interface ChartTooltipProps {
  /** The x-axis value, uppercase label — e.g. "Aug 14". */
  label?: string;
  rows?: ChartTooltipRow[];
}

export declare function ChartTooltip(props: ChartTooltipProps): JSX.Element;

export interface ChartLegendItem {
  label?: string;
  /** Optional mono value shown after the label, e.g. "$84.2K". */
  value?: string;
  /** Defaults to the --data-N series order. */
  color?: string;
}

export interface ChartLegendProps {
  items?: ChartLegendItem[];
  /** Use --data-1 (green-500) instead of the on-light green-600. */
  onDark?: boolean;
}

export declare function ChartLegend(props: ChartLegendProps): JSX.Element;

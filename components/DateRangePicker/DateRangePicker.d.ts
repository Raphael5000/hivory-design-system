export interface DateRange {
  preset: string;
  start: Date;
  end: Date;
}

export interface DateRangePickerProps {
  /** '7d' | '30d' | '90d' | 'ytd' | 'custom' — initial preset. */
  defaultPreset?: string;
  /** Open the panel initially (for specs/demos). */
  defaultOpen?: boolean;
  onChange?: (range: DateRange) => void;
}

export declare function DateRangePicker(props: DateRangePickerProps): JSX.Element;

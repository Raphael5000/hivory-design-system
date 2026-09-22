export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  /** The accessible name when there is no visible `label` — required then;
   *  a select nobody can name is a critical accessibility failure. */
  ariaLabel?: string;
  /** Strings or { value, label } pairs. */
  options?: (string | SelectOption)[];
  value?: string;
  defaultValue?: string;
  onChange?: (event: any) => void;
  hint?: string;
  disabled?: boolean;
}

export declare function Select(props: SelectProps): JSX.Element;

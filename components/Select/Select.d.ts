export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  /** Strings or { value, label } pairs. */
  options?: (string | SelectOption)[];
  value?: string;
  defaultValue?: string;
  onChange?: (event: any) => void;
  hint?: string;
  disabled?: boolean;
}

export declare function Select(props: SelectProps): JSX.Element;

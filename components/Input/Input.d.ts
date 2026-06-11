export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: any) => void;
  type?: string;
  /** Helper text under the field (replaced by error when set). */
  hint?: string;
  /** Error message — switches the field to error chrome. */
  error?: string;
  disabled?: boolean;
}

export declare function Input(props: InputProps): JSX.Element;

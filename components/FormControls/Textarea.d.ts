export interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: any) => void;
  rows?: number;
  hint?: string;
  error?: string;
  disabled?: boolean;
}
export declare function Textarea(props: TextareaProps): JSX.Element;

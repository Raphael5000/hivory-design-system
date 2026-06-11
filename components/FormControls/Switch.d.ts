export interface SwitchProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: any) => void;
  disabled?: boolean;
}
export declare function Switch(props: SwitchProps): JSX.Element;

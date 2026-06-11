import { ReactNode } from 'react';

export interface TooltipProps {
  /** Short text only — no interactive content. */
  label?: string;
  side?: 'top' | 'bottom';
  /** Force visible (for specs/demos); normally shows on hover/focus. */
  open?: boolean;
  children?: ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;

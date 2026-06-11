import { ReactNode } from 'react';

export interface ModalProps {
  open?: boolean;
  /** Called on Escape or scrim click. Destructive confirms should pass a danger Button in footer. */
  onClose?: () => void;
  title?: string;
  description?: string;
  /** Right-aligned action row — usually [ghost Cancel, primary/danger confirm]. */
  footer?: ReactNode;
  /** Max panel width in px. 440 default; 560 for forms. */
  width?: number;
  children?: ReactNode;
}

export declare function Modal(props: ModalProps): JSX.Element | null;

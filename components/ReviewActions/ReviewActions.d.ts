import { ReactNode } from 'react';

export interface IconButtonProps {
  /** approve = green tint on hover · reject = red tint on hover · neutral = ink. Quiet at rest in all cases. */
  tone?: 'neutral' | 'approve' | 'reject';
  /** Accessible label (also the title tooltip). */
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  /** The glyph — an SVG sized ~13px. */
  children?: ReactNode;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;

export interface ReviewActionsProps {
  /** Controlled state; omit to let the component manage it via defaultState. */
  state?: 'pending' | 'approved' | 'rejected';
  defaultState?: 'pending' | 'approved' | 'rejected';
  onApprove?: () => void;
  onReject?: () => void;
  onUndo?: () => void;
  /** Show the Undo affordance after a decision. Default true. */
  undoable?: boolean;
}
export declare function ReviewActions(props: ReviewActionsProps): JSX.Element;

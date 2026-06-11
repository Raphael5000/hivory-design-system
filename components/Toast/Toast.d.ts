import { ReactNode } from 'react';

export interface ToastProps {
  tone?: 'positive' | 'negative' | 'neutral';
  title?: string;
  description?: string;
  /** Renders the × button when provided. */
  onDismiss?: () => void;
}
export declare function Toast(props: ToastProps): JSX.Element;

export interface ToastStackProps {
  /** Render in flow instead of fixed bottom-right (for specs/demos). */
  static?: boolean;
  children?: ReactNode;
}
export declare function ToastStack(props: ToastStackProps): JSX.Element;

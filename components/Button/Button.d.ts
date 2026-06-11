import { ReactNode } from 'react';

export interface ButtonProps {
  /** 'primary' = ink-filled default action. 'brand' = electric-green hero CTA — at most one per view. */
  variant?: 'primary' | 'brand' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children?: ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;

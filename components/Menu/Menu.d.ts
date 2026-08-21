import { ReactNode } from 'react';

export interface MenuItem {
  id?: string;
  label?: ReactNode;
  /** Right-aligned mono hint, e.g. a shortcut "⌘K". */
  hint?: string;
  danger?: boolean;
  disabled?: boolean;
  /** Pass { type: 'separator' } for a divider row. */
  type?: 'separator';
}

export interface MenuProps {
  /** The element that toggles the menu — usually a Button. */
  trigger?: ReactNode;
  items?: MenuItem[];
  onSelect?: (id: string) => void;
  align?: 'left' | 'right';
  /**
   * Which way the panel hangs. 'top' for a trigger anchored at the bottom of
   * its frame (an account row in a rail), where a downward panel would open
   * off-screen.
   */
  side?: 'top' | 'bottom';
  defaultOpen?: boolean;
}

export declare function Menu(props: MenuProps): JSX.Element;

import { ReactNode } from 'react';

export interface SidebarWorkspace {
  name?: string;
  /** Two-letter chip; derived from name when omitted. */
  initials?: string;
  /** Show the up/down switcher caret. */
  switchable?: boolean;
}

export interface SidebarItem {
  id?: string;
  label?: string;
  /** 14px glyph — use <SidebarIcon name="…"/> or any SVG. */
  icon?: ReactNode;
  disabled?: boolean;
  /** Small trailing pill, e.g. "Review". */
  pill?: string;
  pillTone?: 'caution' | 'positive' | 'neutral';
}

export interface SidebarSection {
  key?: string;
  /** Uppercase group header. */
  label?: string;
  items?: SidebarItem[];
  /** Default true. */
  defaultExpanded?: boolean;
}

export interface SidebarProps {
  workspace?: SidebarWorkspace;
  /** Ungrouped items above the sections (e.g. Dashboard). */
  topItems?: SidebarItem[];
  sections?: SidebarSection[];
  /** Ghost rows below the divider (theme toggle, sign out). */
  footerItems?: SidebarItem[];
  activeId?: string;
  onNavigate?: (id: string) => void;
  /** 56px icon rail instead of 272px. */
  collapsed?: boolean;
  height?: number | string;
}

export declare function Sidebar(props: SidebarProps): JSX.Element;

export interface SidebarIconProps {
  name?: 'dashboard' | 'pipeline' | 'doc' | 'bot' | 'chart' | 'globe' | 'clock' | 'upload' | 'signout' | 'moon';
}
export declare function SidebarIcon(props: SidebarIconProps): JSX.Element;

import { CSSProperties } from 'react';

export type IconName =
  | 'dashboard' | 'pipeline' | 'chart' | 'agent' | 'spark'
  | 'clock' | 'globe' | 'upload' | 'calendar' | 'settings'
  | 'doc' | 'search' | 'mail' | 'users' | 'bell'
  | 'arrow-right' | 'check' | 'close' | 'signout' | 'moon';

export interface IconProps {
  name?: IconName;
  /** Box size in px. 14 in dense UI (sidebar), 16 default, 18 roomy. */
  size?: number;
  /** Default 1.5 — the grammar; only change for optical correction at large sizes. */
  strokeWidth?: number;
  style?: CSSProperties;
}

/** Hivory's custom icon set — hexagon-signature grammar derived from the mark.
    Inherits color via currentColor: text-muted rest, ink-950 active. Never green. */
export declare function Icon(props: IconProps): JSX.Element;

export declare const ICON_NAMES: IconName[];

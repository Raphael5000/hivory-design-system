import { ReactNode } from 'react';

/** The sync slot: a live line (pulse dot + one human sentence) or a caution pill when sync fails. */
export interface TopbarSync {
  /** 'live' renders the green pulse dot + label; 'stale' renders a caution pill in the same slot. */
  status: 'live' | 'stale';
  /**
   * A sentence a human would say — "Synced 12 minutes ago", never a timestamp.
   * A failed sync never vanishes silently: an absent sync line reads as "all fine".
   */
  label: string;
}

export interface TopbarAccount {
  /** Display name — initials are derived from it, never from an email. */
  name?: string;
  /** Explicit initials override. */
  initials?: string;
  /** Opens the account menu — the only route to sign-out in a portal with no rail footer. */
  onClick?: () => void;
}

/**
 * Topbar — the portal identity bar. Design rules (binding):
 * - Identity left, account right; NEVER navigation — that is the rail's job, and a bar
 *   with tabs gives the product two navigations.
 * - One row at 52px, floating 12px off the canvas: --glass-fill + blur, --radius-2xl,
 *   --shadow-glass-ring. Never a bordered full-bleed strip, never brand-coloured.
 * - The client name is the point: 13/600 at the front, truncating with an ellipsis.
 * - The pulse dot is the bar's only animated element (data-motion="essential").
 * - No bell, no unread badges, no page title (the page owns its own title).
 * - Loading: lockup and avatar render immediately; only client name and sync line skeleton.
 * - Empty (reseller root): the lockup stands alone — no crumb, no sync line.
 * - Below 640px the crumb and sync line drop before the identity does.
 */
export interface TopbarProps {
  /** Partner mark as a node (18px tall). Takes precedence over logoSrc. */
  logo?: ReactNode;
  /** Partner mark image source, rendered at 18px tall. */
  logoSrc?: string;
  logoAlt?: string;
  /** The client whose data is on screen — the client's own name, never a code. Omit at reseller root. */
  client?: string;
  /** One level, naming the screen — never a path. Optional. */
  crumb?: string;
  /** Sync slot; omit when nothing is selected. */
  sync?: TopbarSync;
  /** Renders the single 30px ghost search button. Search only — more glyphs make the bar a toolbar. */
  onSearch?: () => void;
  /** 28px initials avatar opening the account menu. */
  account?: TopbarAccount;
  /** Skeletons the client name and sync line; identity never waits for data. */
  loading?: boolean;
}

export declare function Topbar(props: TopbarProps): JSX.Element;

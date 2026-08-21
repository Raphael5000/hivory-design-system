import { ReactNode } from 'react';

export interface SignInProvider {
  /** 'google' and 'github' get built-in marks; anything else should pass `icon`. */
  id?: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export interface SignInLink {
  label: string;
  href?: string;
  onClick?: (event: any) => void;
}

/** Copy for the in-place recovery flow. Every string should be supplied per deployment. */
export interface SignInRecoveryCopy {
  title?: string;
  sub?: string;
  cta?: string;
  /** Heading of the confirmation view. */
  sentTitle?: string;
  /** Title inside the green confirmation box. */
  sentBoxTitle?: string;
  /** Never confirms an account exists — "if your address is on the account…". */
  sentBody?: string;
}

/**
 * SignIn — the gate. Design rules (binding):
 * - The gate is a SCREEN, not a card: full bleed, no radius, no elevation. It owns
 *   the viewport it is placed in — do not wrap it in a centring frame.
 * - The plate is a stage, not a billboard: mark, one line, one sub — no screenshot,
 *   no testimonial, no widgets. All partner expression happens there; the form stays
 *   identical in every deployment.
 * - Glass is the frame, never the field: `glass` may put the panel on the glass recipe
 *   (one of the system's exactly two glass surfaces), but inputs stay opaque
 *   --surface-card, because a translucent input puts typed text over the background.
 * - Providers before fields; hairline "or" between them.
 * - The verb is a full-width 42px INK pill — never the brand colour, on any brand.
 *   It enables on the first character, never on validity, and is disabled while busy.
 * - Loading: the verb keeps its width, takes the spinner, reads "Signing in";
 *   fields go read-only so a double-click cannot send twice.
 * - One error message for every failure; it never reveals whether the account exists,
 *   and never counts attempts.
 * - Recovery resolves IN PLACE — the form column is replaced, the plate stays.
 *   The label-row link matches the gate: password → "Forgot?", key → "Need access?",
 *   magic/sso → none.
 * - Utility links live at the base of the plate on desktop and move below the form
 *   below 860px. They never sit between the field and the verb.
 * - Selected: n/a — nothing on this screen is selectable. Empty: n/a — rest IS empty.
 */
export interface SignInProps {
  /** Plate lockup as a node. Takes precedence over logoSrc. */
  logo?: ReactNode;
  /** Plate lockup image (light-on-dark mark), rendered 20px tall. */
  logoSrc?: string;
  logoAlt?: string;
  /** The partner's one line — what the console is FOR. 28px/500, bottom-anchored. */
  line?: string;
  /** Quieter sub line beneath it. Hidden on mobile. */
  sub?: string;
  /** Utility links (privacy, terms, status). Plate base on desktop; below the form on mobile. */
  links?: SignInLink[];
  /** false renders the form panel alone (no plate). */
  plate?: boolean;
  /** Puts the panel on the glass recipe. Frame only — fields stay opaque. */
  glass?: boolean;
  /** One frame, four gates. */
  gate?: 'password' | 'magic' | 'key' | 'sso';
  providers?: SignInProvider[];
  title?: string;
  subtitle?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  passwordLabel?: string;
  keyLabel?: string;
  keyPlaceholder?: string;
  /** Verb label. Defaults per gate: "Sign in" / "Email me a link" / "Sign in". */
  cta?: string;
  /** Signing in: spinner in the verb, fields read-only. */
  busy?: boolean;
  busyLabel?: string;
  /** The one message shown for every failure. */
  error?: string;
  /** One plain fact about where the credential is kept. Defaults on the key gate (mandatory there); pass null to suppress. */
  sessionNote?: string | null;
  defaultEmail?: string;
  /** Render a recovery view directly (specimens/demos). */
  initialView?: 'gate' | 'recover' | 'sent';
  recovery?: SignInRecoveryCopy;
  onSubmit?: (values: { email: string; password: string; key: string }) => void;
  /** Called with the provider id when a provider button without its own onClick is pressed. */
  onProvider?: (id?: string) => void;
  onRecoverSubmit?: (email: string) => void;
}

export declare function SignIn(props: SignInProps): JSX.Element;

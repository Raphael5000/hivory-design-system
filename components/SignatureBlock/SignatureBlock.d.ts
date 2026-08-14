import { ReactNode } from 'react';

export interface SignatureSummaryRow {
  /** e.g. "Package" — --text-sm, muted, left. */
  label: ReactNode;
  /** e.g. "Full engine · $8,500/mo" — --text-row, semibold, right, tabular-nums. */
  value: ReactNode;
}

/**
 * SignatureBlock — type-to-sign. The only screen with legal weight, deliberately
 * slower and plainer than the rest of the system. One component renders both the
 * blank and the signed state.
 *
 * Design rules (binding):
 * - The signature preview is the typed name at 27px italic weight 300 of the SYSTEM
 *   face over a 1px ink-200 rule — never a script/handwriting webfont (a fake
 *   handwriting face makes a typed name pretend to be ink, exactly the wrong claim
 *   on a document with legal weight). The line holds its 44px height when empty.
 * - No motion on the signature: nothing fades or draws in as it renders. The
 *   preview is aria-hidden — it repeats the field above it.
 * - The CTA names the deal ("Sign & accept — Full engine", never "Submit"), is the
 *   single brand-green fill on the screen, and stays DISABLED — visible and
 *   announced, never hidden — until a name of more than one character AND the
 *   authorisation both exist. One plain line beneath removes the fear it creates.
 * - The authorisation checkbox is a positive first-person statement naming the
 *   company; it IS the confirmation step — no modal follows.
 * - Three tab stops in reading order: name, authorisation, sign.
 * - States: rest · hover/pressed on CTA + checkbox only (the signature line is not
 *   a control and never lights up) · focus (three stops) · disabled (THE state that
 *   matters, on the CTA) · loading (CTA holds its width and takes the Spinner;
 *   field and checkbox go read-only so nothing changes mid-commit). Selected does
 *   not apply — nothing here is selected. Empty does not apply — the empty state IS
 *   rest, and a signature block with nothing to sign must not render.
 * - After signing: the receipt states who signed, when, what and at what price, in
 *   one line, in past tense (pass it as `signedNote`).
 */
export interface SignatureBlockProps {
  /** The deal restated directly above the signature, so nothing needs scrolling back. */
  summary?: SignatureSummaryRow[];
  /** Caps label above the field. @default "Signature" */
  eyebrow?: string;
  /** @default "Full legal name" — the word "legal" is doing real work. One field only. */
  namePlaceholder?: string;
  /** Controlled name value. Omit for uncontrolled (defaultName). */
  name?: string;
  /** @default "" */
  defaultName?: string;
  onNameChange?: (value: string, event: unknown) => void;
  /** Positive first-person statement naming the company, e.g. "I'm authorized to sign for Pure Good". */
  authLabel?: string;
  /** Controlled authorisation. Omit for uncontrolled (defaultAuthorized). */
  authorized?: boolean;
  /** @default false */
  defaultAuthorized?: boolean;
  onAuthorizedChange?: (checked: boolean, event: unknown) => void;
  /** @default "Signature — drawn from your typed name" */
  caption?: string;
  /** Names what is agreed and what it costs, e.g. "Sign & accept — Full engine". */
  ctaLabel?: string;
  /** The fear-removing line under the CTA. @default "Signing starts onboarding — no payment is taken today." */
  note?: string;
  /** Controlled signed state. Omit for uncontrolled (defaultSigned; set on press). */
  signed?: boolean;
  /** @default false */
  defaultSigned?: boolean;
  /** CTA text once signed, e.g. "Signed · Full engine". @default "Signed" */
  signedLabel?: string;
  /** The one-line past-tense receipt: who, when, what, at what price. */
  signedNote?: string;
  /** Fires with the trimmed name when the CTA is pressed while ready. */
  onSign?: (name: string) => void;
  /** Commit in flight: CTA holds width and takes the Spinner; inputs read-only. */
  loading?: boolean;
}

/** Type-to-sign block — closes the proposal portal. Composes the DS Input, Checkbox and Button. */
export declare function SignatureBlock(props: SignatureBlockProps): JSX.Element;

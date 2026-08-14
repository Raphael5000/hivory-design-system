import { ReactNode, MouseEventHandler } from 'react';

export interface TranscriptArtifact {
  /** 13px glyph inside the 24px ink-50 icon slot. Defaults to a document outline. */
  icon?: ReactNode;
  title: string;
  /**
   * The OUTCOME, never a live state — "Approved 24 Jul · published 25 Jul, 14:00",
   * never "Held for you". A live state inside a historical view is a lie about the
   * present, and it will be wrong within a day. Dates follow the platform time
   * standard (today `14:00`, other days `24 Jul`), rendered in tabular-nums.
   */
  outcome?: string;
}

export interface TranscriptMessage {
  /** 'you' = the client (ink-wash bubble, right, max 78%) · 'engine' = plain page text behind the hex gutter. */
  from: 'you' | 'engine';
  /** Verbatim. The client's words are never summarised, tidied or shortened. */
  text: string;
  /** Collapsed steps line, e.g. "4 steps · 41s". Static text with the chevron at rest — it never expands here. */
  steps?: string;
  /** Inert artifact card. Not clickable: opening a panel from inside a history view would put a workspace inside a record. */
  artifact?: TranscriptArtifact;
}

/**
 * Transcript — a conversation shown as history. Same anatomy as the live chat,
 * every affordance removed: the chat IS the permanent comment record, and a record
 * you can edit is not a record.
 *
 * Design rules (binding):
 * - Rest is the only state of the body. Hover/pressed/focus exist ONLY on the footer
 *   link — the single tab stop. Selected and disabled do not apply: nothing here was
 *   ever enabled. Text selection works because it is prose.
 * - No composer, ever — not even disabled. No per-message timestamps, no agent names,
 *   no expanded steps, no tool calls: the client sees the conversation, not the machinery.
 * - Motion: none. A record does not animate — no entrance, no stagger, no fade.
 * - Loading: skeleton bubbles/prose at real measures with the header kept real; never
 *   the thinking spinner (that would claim the conversation is still happening).
 * - Empty: one line of provenance ("No request — this ran on the weekly rule") with a
 *   link to the rule — never an empty frame.
 * - Truncation is honest: `limit` fades the last shown message and a quiet
 *   tabular-nums line states "N of M messages". Words are never ellipsised.
 */
export interface TranscriptProps {
  /** Header title, e.g. "Refill launch — social". */
  title?: string;
  /**
   * Header date. Strings pass through verbatim; a Date/epoch is formatted per the
   * platform time standard — today `14:00`, any other day `24 Jul`.
   */
  when?: string | number | Date;
  messages?: TranscriptMessage[];
  /** Show only the first `limit` messages, honestly: fade + "N of M" line. */
  limit?: number;
  /** Total message count when `messages` is already a slice (the M in "N of M"). */
  total?: number;
  /** The one way out — links to the live session where acting is legitimate. */
  sessionHref?: string;
  /** Rendered as an <a> when sessionHref exists, else as a link-styled <button>. */
  onOpenSession?: MouseEventHandler;
  /** @default "Open the session ›" */
  sessionLabel?: string;
  /** @default "Read-only · this is the record" */
  readOnlyNote?: string;
  /** Skeleton state. Header stays real; body is two bubbles + two prose blocks. */
  loading?: boolean;
  /** Provenance line when there is no conversation. @default "No request — this ran on a standing rule" */
  emptyText?: string;
  /** Link target for the empty state's rule. */
  emptyHref?: string;
  /** @default "Open the rule ›" */
  emptyLinkLabel?: string;
}

/** Read-only conversation record. Pairs with Work queue and Artifact panel. */
export declare function Transcript(props: TranscriptProps): JSX.Element;

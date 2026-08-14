/**
 * ImageSlot — the droppable image placeholder used in drafts and mocks. Design rules (binding):
 * - `id` is MANDATORY and unique across the whole surface: the dropped picture is stored
 *   against it (localStorage), so a duplicated id makes two slots share one image and a
 *   missing one loses the drop on reload.
 * - The slot fills its container; THE PARENT OWNS THE ASPECT RATIO. Give explicit
 *   width/height only for genuinely fixed-size slots (an avatar).
 * - The placeholder is a brief, not an instruction: "Post image · 1200 × 627",
 *   "Primary lockup" — never "Upload image" / "Drop file here" / "No image".
 *   Sentence case, no full stop, no verb; dimensions use ×, only when the destination
 *   genuinely constrains them.
 * - Empty is THE default state: a quiet inset-ring frame on the sunken surface — drawn
 *   without 1px borders. No illustration, no camera glyph.
 * - Hover: the ring firms and a quiet "Replace" pill fades in over a FILLED slot only;
 *   an empty slot needs no hover — the frame is already the invitation.
 * - Drop: green ring + brand tint while a file is over the frame.
 * - Loading holds the exact size with a skeleton shimmer — never collapse to zero height.
 * - Keyboard: the slot is a real <button>; Enter/Space opens the file picker, because
 *   drag-and-drop alone is unreachable by keyboard.
 * - fit: cover for photography, contain for artwork whose edges are the point
 *   (a logo). Getting this backwards crops a client's logo in their own brand kit.
 * - Selected: n/a — a slot holds one picture. Disabled: n/a — in read mode the slot is
 *   not disabled, it is not mounted as a control (`readOnly` renders plain media).
 */
export interface ImageSlotProps {
  /** Mandatory, stable, unique per surface — the drop's storage key. */
  id: string;
  /** What belongs there, in the client's words. Doubles as alt text. */
  placeholder?: string;
  /** Starting image (a generated lockup, a sample). A drop replaces it; src stays the fallback. */
  src?: string;
  /** cover (default) — photography fills the frame; contain — artwork never cropped. */
  fit?: 'cover' | 'contain';
  /** Shape follows the destination, never decoration. rect default (radius 10). */
  shape?: 'rect' | 'rounded' | 'circle' | 'pill';
  /** Corner radius for shape="rounded". Default 14. */
  radius?: number;
  /** Attribution for licensed imagery — never for the client's own files. */
  credit?: string;
  creditHref?: string;
  /** Skeleton shimmer at the slot's exact size. */
  loading?: boolean;
  /** Read mode: renders the picture as plain media — no drop zone, no tab stop. */
  readOnly?: boolean;
  /** Fires with the data URL and File after a drop or pick. */
  onChange?: (dataUrl: string, file: File) => void;
}

export declare function ImageSlot(props: ImageSlotProps): JSX.Element;

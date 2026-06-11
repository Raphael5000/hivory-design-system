/* Hivory ReviewActions — repeated inline approve/reject pairs.
   Rule: quiet at rest (ghost ink-400 glyphs), tone only on hover, collapse to a
   status chip once decided. Filled buttons are NEVER used for repeated row actions. */
const hvReviewCss = `
.hv-iconbtn{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border:none;background:none;border-radius:var(--radius-sm);color:var(--ink-400);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-out),color var(--duration-fast) var(--ease-out);flex:none}
.hv-iconbtn:hover:not(:disabled){background:var(--ink-100);color:var(--ink-700)}
.hv-iconbtn:disabled{opacity:.4;cursor:not-allowed}
.hv-iconbtn:focus-visible{outline:2px solid var(--border-focus);outline-offset:1px}
.hv-iconbtn--approve:hover:not(:disabled){background:var(--status-positive-bg);color:var(--status-positive-text)}
.hv-iconbtn--reject:hover:not(:disabled){background:var(--status-negative-bg);color:var(--status-negative-text)}
.hv-review{display:inline-flex;align-items:center;gap:2px}
.hv-review__chip{display:inline-flex;align-items:center;gap:5px;font-family:var(--font-sans);font-size:11.5px;font-weight:500;line-height:1;padding:4px 9px;border-radius:var(--radius-sm);white-space:nowrap}
.hv-review__chip--approved{color:var(--status-positive-text);background:var(--status-positive-bg)}
.hv-review__chip--rejected{color:var(--status-negative-text);background:var(--status-negative-bg)}
.hv-review__undo{appearance:none;border:none;background:none;font-family:var(--font-sans);font-size:11.5px;color:var(--text-faint);cursor:pointer;padding:2px 4px;border-radius:4px}
.hv-review__undo:hover{color:var(--ink-700)}
`;
function hvEnsureReviewCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-review-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-review-css';
  s.textContent = hvReviewCss;
  document.head.appendChild(s);
}

const HV_TICK = (
  <svg width="13" height="13" viewBox="0 0 14 14"><path d="M2.5 7.5L5.5 10.5L11.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const HV_CROSS = (
  <svg width="12" height="12" viewBox="0 0 14 14"><path d="M3.5 3.5L10.5 10.5M10.5 3.5L3.5 10.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
);

/* Generic quiet 28px icon button. tone: 'neutral' | 'approve' | 'reject'. */
export function IconButton({ tone = 'neutral', label, onClick, disabled = false, children }) {
  hvEnsureReviewCss();
  const toneClass = tone === 'approve' ? ' hv-iconbtn--approve' : tone === 'reject' ? ' hv-iconbtn--reject' : '';
  return (
    <button type="button" className={`hv-iconbtn${toneClass}`} aria-label={label} title={label} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

/* The approve/reject pair. Uncontrolled via defaultState, controlled via state.
   Collapses to a tinted chip (+ optional undo) once decided. */
export function ReviewActions({ state, defaultState = 'pending', onApprove, onReject, onUndo, undoable = true }) {
  hvEnsureReviewCss();
  const [internal, setInternal] = React.useState(defaultState);
  const current = state !== undefined ? state : internal;
  const decide = (next) => {
    if (state === undefined) setInternal(next);
    if (next === 'approved' && onApprove) onApprove();
    if (next === 'rejected' && onReject) onReject();
  };
  const undo = () => {
    if (state === undefined) setInternal('pending');
    if (onUndo) onUndo();
  };
  if (current === 'pending') {
    return (
      <span className="hv-review">
        <IconButton tone="approve" label="Approve" onClick={() => decide('approved')}>{HV_TICK}</IconButton>
        <IconButton tone="reject" label="Reject" onClick={() => decide('rejected')}>{HV_CROSS}</IconButton>
      </span>
    );
  }
  return (
    <span className="hv-review">
      <span className={`hv-review__chip hv-review__chip--${current}`}>
        {current === 'approved' ? 'Approved' : 'Rejected'}
      </span>
      {undoable ? <button type="button" className="hv-review__undo" onClick={undo}>Undo</button> : null}
    </span>
  );
}

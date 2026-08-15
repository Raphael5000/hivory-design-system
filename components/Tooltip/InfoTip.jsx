/* Hivory InfoTip — "how is this measured": a definition popover behind a
   small info glyph, for metrics and readings that owe the reader their
   method. The plain Tooltip stays a short label; this one carries a title
   and a sentence or three, so it is a separate component with its own
   restraint: no interactive content, no links, never required reading.
   The trigger glyph is drawn on the house icon grammar (16 grid, 1.5px
   stroke, round caps) and follows the icon ramp: muted rest → ink active,
   never a signal colour. Focus reveals the popover (focus-within), so the
   tab stop has a function — the keyboard doctrine's bar for any stop. */
const hvInfoTipCss = `
.hv-infotip{position:relative;display:inline-flex}
.hv-infotip__btn{display:inline-flex;align-items:center;justify-content:center;padding:0;border:0;background:none;color:var(--text-muted);cursor:help}
.hv-infotip__btn:hover,.hv-infotip:focus-within .hv-infotip__btn{color:var(--ink-950);transition:color var(--duration-soft) var(--ease-out)}
.hv-infotip__pop{position:absolute;top:calc(100% + 8px);left:-10px;z-index:60;width:290px;padding:12px 14px;border-radius:var(--radius-lg);background:var(--surface-card);box-shadow:var(--shadow-overlay);font-family:var(--font-sans);font-size:12px;line-height:1.55;color:var(--text-body);text-align:left;white-space:normal;opacity:0;visibility:hidden;transform:translateY(2px);transition:opacity var(--duration-soft) var(--ease-out),transform var(--duration-soft) var(--ease-out),visibility 0s linear var(--duration-soft)}
.hv-infotip--end .hv-infotip__pop{left:auto;right:-10px}
.hv-infotip:hover .hv-infotip__pop,.hv-infotip:focus-within .hv-infotip__pop{opacity:1;visibility:visible;transform:none;transition-delay:0s}
.hv-infotip__title{display:block;font-weight:650;color:var(--ink-950);margin:0 0 8px}
.hv-infotip__note{display:block;margin-top:8px;font-size:11px;line-height:1.5;color:var(--status-caution-text)}
`;
function hvEnsureInfoTipCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-infotip-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-infotip-css';
  s.textContent = hvInfoTipCss;
  document.head.appendChild(s);
}

export function InfoTip({ title, children, note, align = 'start', size = 14 }) {
  hvEnsureInfoTipCss();
  return (
    <span className={`hv-infotip${align === 'end' ? ' hv-infotip--end' : ''}`}>
      <button type="button" className="hv-infotip__btn" aria-label={`How ${title} is measured`}>
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="8" cy="8" r="5.75" />
          <path d="M8 7.4v3.4M8 5.1v.2" />
        </svg>
      </button>
      <span className="hv-infotip__pop" role="tooltip">
        <b className="hv-infotip__title">{title}</b>
        {children}
        {note ? <span className="hv-infotip__note">{note}</span> : null}
      </span>
    </span>
  );
}

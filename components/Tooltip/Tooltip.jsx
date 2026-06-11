/* Hivory Tooltip — ink-950 chip on hover/focus. Keep labels short; no interactive content. */
const hvTooltipCss = `
.hv-tip-wrap{position:relative;display:inline-block}
.hv-tip{position:absolute;left:50%;transform:translateX(-50%) translateY(2px);background:var(--ink-950);color:var(--white);font-family:var(--font-sans);font-size:11.5px;font-weight:500;line-height:1.35;padding:5px 9px;border-radius:var(--radius-sm);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity var(--duration-fast) var(--ease-out),transform var(--duration-fast) var(--ease-out);z-index:60}
.hv-tip--top{bottom:calc(100% + 6px)}
.hv-tip--bottom{top:calc(100% + 6px)}
.hv-tip-wrap:hover .hv-tip,.hv-tip-wrap:focus-within .hv-tip,.hv-tip--open{opacity:1;transform:translateX(-50%) translateY(0)}
`;
function hvEnsureTooltipCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-tooltip-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-tooltip-css';
  s.textContent = hvTooltipCss;
  document.head.appendChild(s);
}

export function Tooltip({ label, side = 'top', open = false, children }) {
  hvEnsureTooltipCss();
  return (
    <span className="hv-tip-wrap">
      {children}
      <span className={`hv-tip hv-tip--${side}${open ? ' hv-tip--open' : ''}`} role="tooltip">{label}</span>
    </span>
  );
}

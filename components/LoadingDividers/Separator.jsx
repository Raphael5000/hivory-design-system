/* Hivory Separator — 1px ink-100 rule. */
const hvSeparatorCss = `
.hv-sep{border:none;background:var(--border-subtle);flex:none}
.hv-sep--h{height:1px;width:100%;margin:0}
.hv-sep--v{width:1px;align-self:stretch;margin:0}
`;
function hvEnsureSeparatorCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-separator-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-separator-css';
  s.textContent = hvSeparatorCss;
  document.head.appendChild(s);
}

export function Separator({ orientation = 'horizontal', spacing = 0 }) {
  hvEnsureSeparatorCss();
  const style = orientation === 'horizontal'
    ? (spacing ? { marginTop: spacing, marginBottom: spacing } : undefined)
    : (spacing ? { marginLeft: spacing, marginRight: spacing } : undefined);
  return <hr className={`hv-sep hv-sep--${orientation === 'horizontal' ? 'h' : 'v'}`} style={style} />;
}

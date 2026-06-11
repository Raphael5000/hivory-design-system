/* Hivory Skeleton — shimmer placeholder while data loads. */
const hvSkeletonCss = `
@keyframes hv-skeleton-shimmer{0%{background-position:120% 0}100%{background-position:-20% 0}}
.hv-skeleton{display:block;background:linear-gradient(90deg,var(--ink-100) 25%,var(--ink-50) 45%,var(--ink-100) 65%);background-size:300% 100%;animation:hv-skeleton-shimmer 1.4s var(--ease-out) infinite;border-radius:var(--radius-sm)}
.hv-skeleton--circle{border-radius:999px}
@media (prefers-reduced-motion: reduce){.hv-skeleton{animation:none;background:var(--ink-100)}}
`;
function hvEnsureSkeletonCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-skeleton-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-skeleton-css';
  s.textContent = hvSkeletonCss;
  document.head.appendChild(s);
}

export function Skeleton({ variant = 'line', width = '100%', height }) {
  hvEnsureSkeletonCss();
  const h = height !== undefined ? height : (variant === 'line' ? 12 : variant === 'circle' ? 32 : 80);
  const w = variant === 'circle' && width === '100%' ? h : width;
  return <span className={`hv-skeleton${variant === 'circle' ? ' hv-skeleton--circle' : ''}`} style={{ width: w, height: h }}></span>;
}

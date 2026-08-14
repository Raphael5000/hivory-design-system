/* Hivory Spinner — brand activity indicator.
   Two counter-rotating hexagon outlines, echoing the dual-hex mark:
   a dashed "head" hex spins clockwise, a faint full "track" hex drifts
   counter-clockwise. Reduced motion: static mark at 60% opacity. */
const hvSpinnerCss = `
.hv-spin{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-sans)}
.hv-spin__svg{display:block;flex:none}
.hv-spin__head{transform-origin:50% 50%;animation:hv-spin-cw var(--duration-spinner) linear infinite}
.hv-spin__track{transform-origin:50% 50%;animation:hv-spin-ccw calc(var(--duration-spinner) * 3) linear infinite}
.hv-spin--calm .hv-spin__head{animation-duration:2.4s}
.hv-spin--calm .hv-spin__track{animation-duration:7s}
.hv-spin__label{font-size:12.5px;font-weight:500;color:var(--text-muted);line-height:1}
.hv-spin--on-dark .hv-spin__label{color:var(--ink-300)}
@keyframes hv-spin-cw{to{transform:rotate(360deg)}}
@keyframes hv-spin-ccw{to{transform:rotate(-360deg)}}
@media (prefers-reduced-motion: reduce){
  .hv-spin__head,.hv-spin__track{animation:none;opacity:.6}
}
.hv-pulsedot{position:relative;display:inline-block;border-radius:999px;flex:none}
.hv-pulsedot::after{content:"";position:absolute;inset:0;border-radius:999px;background:inherit;animation:hv-pulse var(--duration-pulse) var(--ease-out) infinite}
@media (prefers-reduced-motion: reduce){.hv-pulsedot::after{animation:none}}
@keyframes hv-pulse{0%{transform:scale(1);opacity:.55}80%,100%{transform:scale(2.6);opacity:0}}
`;
function hvEnsureSpinnerCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-spinner-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-spinner-css';
  s.textContent = hvSpinnerCss;
  document.head.appendChild(s);
}

const HV_SPIN_TONES = {
  brand: { head: 'var(--green-600)', track: 'var(--green-300)' },
  ink: { head: 'var(--ink-700)', track: 'var(--ink-200)' },
  'on-dark': { head: 'var(--green-500)', track: 'var(--ink-700)' }
};

/* Pointy-top hexagon (r=9, c=12) and flat-top hexagon (30° rotated). */
const HV_HEX_A = 'M12 3 L19.79 7.5 L19.79 16.5 L12 21 L4.21 16.5 L4.21 7.5 Z';
const HV_HEX_B = 'M16.5 4.21 L21 12 L16.5 19.79 L7.5 19.79 L3 12 L7.5 4.21 Z';

export function Spinner({ size = 16, tone = 'brand', label, calm = false }) {
  hvEnsureSpinnerCss();
  const c = HV_SPIN_TONES[tone] || HV_SPIN_TONES.brand;
  return (
    <span
      className={`hv-spin${calm ? ' hv-spin--calm' : ''}${tone === 'on-dark' ? ' hv-spin--on-dark' : ''}`}
      role="status"
      aria-label={typeof label === 'string' ? label : 'Working'}
    >
      <svg className="hv-spin__svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path className="hv-spin__track" d={HV_HEX_B} stroke={c.track} strokeWidth="2" strokeLinejoin="round"></path>
        <path className="hv-spin__head" d={HV_HEX_A} stroke={c.head} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" strokeDasharray="38 16"></path>
      </svg>
      {label ? <span className="hv-spin__label">{label}</span> : null}
    </span>
  );
}

/* PulseDot — ambient "alive" indicator (agent running, live sync).
   Use Spinner for discrete in-flight work; PulseDot for ongoing presence. */
const HV_PULSE_TONES = {
  positive: 'var(--green-600)',
  caution: 'var(--status-caution-text)',
  info: 'var(--status-info-text)',
  negative: 'var(--status-negative-text)'
};

export function PulseDot({ tone = 'positive', size = 7 }) {
  hvEnsureSpinnerCss();
  return (
    <span
      className="hv-pulsedot"
      style={{ width: size, height: size, background: HV_PULSE_TONES[tone] || HV_PULSE_TONES.positive }}
      aria-hidden="true"
    ></span>
  );
}

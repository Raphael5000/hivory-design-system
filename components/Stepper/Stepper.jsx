/* Hivory Stepper — a reading flow with an end. Unlike the Sidebar rail (a set
   of places you can be), a stepper has an order, a completed half and a
   destination. Vertical glass rail is the default; variant 'bar' is the
   below-720px form: segments + current section name, no jumping.
   The gliding pill is the list-nav primitive shared with Sidebar — one
   --selected-pill object that travels; steps never paint their own fill.
   Done marks carry the house checkmark at 9px (permanent Tabler exemption). */
const hvStepperCss = `
.hv-stepper{width:224px;box-sizing:border-box;border-radius:var(--radius-2xl);background:var(--glass-fill);-webkit-backdrop-filter:var(--glass-blur);backdrop-filter:var(--glass-blur);box-shadow:var(--shadow-glass-ring);padding:12px 10px;font-family:var(--font-sans)}
.hv-stepper__head{font-size:var(--text-eyebrow);font-weight:650;letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;color:var(--ink-400);padding:6px 9px 8px}
.hv-stepper__steps{position:relative;display:flex;flex-direction:column;gap:3px}
.hv-stepper__pill{position:absolute;left:0;right:0;height:32px;border-radius:var(--radius-md);background:var(--selected-pill);box-shadow:var(--shadow-raised);transition:top var(--duration-slow) var(--ease-glide);pointer-events:none}
.hv-stepper__step{position:relative;display:flex;align-items:center;gap:10px;height:32px;padding:0 9px;border-radius:var(--radius-md);cursor:pointer;font-size:var(--text-row);letter-spacing:-0.005em;color:var(--ink-600);transition:color var(--duration-soft) var(--ease-out);background:none;border:none;font-family:var(--font-sans);text-align:left;width:100%;box-sizing:border-box}
.hv-stepper__step:hover:not(.hv-stepper__step--on):not(:disabled){background:var(--hover-on-canvas)}
.hv-stepper__step:active:not(:disabled){filter:brightness(0.94)}
.hv-stepper__step:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-stepper__step--on{color:var(--ink-900);font-weight:var(--weight-semibold)}
.hv-stepper__step:disabled{color:var(--ink-400);cursor:default}
.hv-stepper__label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.hv-stepper__mark{width:19px;height:19px;border-radius:var(--radius-pill);flex:none;display:inline-flex;align-items:center;justify-content:center;font-size:9.5px;font-variant-numeric:tabular-nums;transition:background var(--duration-soft) var(--ease-out),box-shadow var(--duration-soft) var(--ease-out),color var(--duration-soft) var(--ease-out)}
.hv-stepper__mark--done{background:var(--green-50)}
.hv-stepper__mark--now{background:var(--ink-900);color:var(--white)}
.hv-stepper__mark--next{box-shadow:inset 0 0 0 1.5px var(--ink-200);color:var(--ink-400)}
.hv-stepper__colophon{padding:12px 9px 3px;font-size:var(--text-meta);line-height:var(--leading-normal);color:var(--text-faint)}
.hv-stepbar{font-family:var(--font-sans)}
.hv-stepbar__segs{display:flex;align-items:center;gap:4px}
.hv-stepbar__seg{flex:1;height:3px;border-radius:var(--radius-pill);background:var(--ink-200);transition:background var(--duration-soft) var(--ease-out)}
.hv-stepbar__seg--past{background:var(--green-600)}
.hv-stepbar__meta{display:flex;align-items:baseline;gap:8px;margin-top:8px}
.hv-stepbar__now{font-size:var(--text-sm);font-weight:var(--weight-strong);color:var(--text-body)}
.hv-stepbar__count{font-size:var(--text-meta);color:var(--text-faint);font-variant-numeric:tabular-nums}
`;
function hvEnsureStepperCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-stepper-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-stepper-css';
  s.textContent = hvStepperCss;
  document.head.appendChild(s);
}

/* House checkmark, 9px — permanent exemption from Tabler at this size. */
function HvStepCheck() {
  return (
    <svg width="9" height="9" viewBox="0 0 16 16" fill="none" stroke="var(--green-600)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8.5 6.5 12 13 4.5"></path>
    </svg>
  );
}

/* Step height 32 + column gap 3 — the pill's travel per step. */
const HV_STEPPER_ROW = 35;

export function Stepper({ steps = [], at = 0, reached, onStep, heading = 'Sections', variant = 'rail', colophon }) {
  hvEnsureStepperCss();
  const max = reached == null ? at : Math.max(reached, at);

  if (variant === 'bar') {
    return (
      <div className="hv-stepbar">
        <div className="hv-stepbar__segs" aria-hidden="true">
          {steps.map((_, i) => (
            <span key={i} className={`hv-stepbar__seg${i <= at ? ' hv-stepbar__seg--past' : ''}`}></span>
          ))}
        </div>
        <div className="hv-stepbar__meta">
          <span className="hv-stepbar__now">{steps[at]}</span>
          <span className="hv-stepbar__count">{at + 1} of {steps.length}</span>
        </div>
      </div>
    );
  }

  /* Arrow keys move within the rail; Tab leaves it — the list-nav contract.
     Steps ahead of `reached` are native-disabled: visible, counted, no stop. */
  const onKeyDown = (ev) => {
    if (ev.key !== 'ArrowDown' && ev.key !== 'ArrowUp') return;
    ev.preventDefault();
    const stops = Array.from(ev.currentTarget.querySelectorAll('button:not(:disabled)'));
    const i = stops.indexOf(document.activeElement);
    const next = stops[i + (ev.key === 'ArrowDown' ? 1 : -1)];
    if (next) next.focus();
  };

  return (
    <nav className="hv-stepper" aria-label={heading}>
      <div className="hv-stepper__head">{heading}</div>
      <div className="hv-stepper__steps" onKeyDown={onKeyDown}>
        <span className="hv-stepper__pill" style={{ top: at * HV_STEPPER_ROW + 'px' }} aria-hidden="true"></span>
        {steps.map((label, i) => {
          const done = i < at;
          const now = i === at;
          const ahead = i > max;
          return (
            <button
              key={i}
              type="button"
              className={`hv-stepper__step${now ? ' hv-stepper__step--on' : ''}`}
              disabled={ahead}
              aria-current={now ? 'step' : undefined}
              onClick={() => { if (!ahead && onStep) onStep(i); }}
            >
              <span className={`hv-stepper__mark hv-stepper__mark--${done ? 'done' : now ? 'now' : 'next'}`}>
                {done ? <HvStepCheck /> : String(i + 1)}
              </span>
              <span className="hv-stepper__label">{label}</span>
            </button>
          );
        })}
      </div>
      {colophon ? <div className="hv-stepper__colophon">{colophon}</div> : null}
    </nav>
  );
}

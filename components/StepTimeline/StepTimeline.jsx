/* Hivory StepTimeline — a machine reporting on itself. Three or four named
   phases, one of them happening now; the visible half of a job the client has
   already approved. Nothing is clickable, nothing takes a tab stop: the rail
   is a PICTURE (aria-hidden) of the live label above it, which carries
   aria-live="polite" so each phase change is spoken exactly once.
   Not a Stepper: the machine advances it, you cannot go back, and it ends in
   an arrival that REPLACES the rail rather than lingering at 3 of 3. */
const hvStepTimelineCss = `
.hv-steptl{display:inline-flex;flex-direction:column;align-items:center;font-family:var(--font-sans);color:var(--text-body)}
.hv-steptl__mark{position:relative;width:30px;height:34px;flex:none}
.hv-steptl__hex{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;animation:hv-steptl-cw var(--duration-spinner) steps(6) infinite}
.hv-steptl__hex--counter{opacity:0.5;animation-name:hv-steptl-ccw}
.hv-steptl__label{margin-top:12px;font-size:15px;font-weight:650;letter-spacing:-0.015em}
.hv-steptl__label--failed{color:var(--red-700)}
.hv-steptl__elapsed{margin-top:3px;font-size:15px;font-weight:600;color:var(--ink-600);font-variant-numeric:tabular-nums}
.hv-steptl__rail{display:flex;margin-top:20px}
.hv-steptl__ph{position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;width:78px}
.hv-steptl__link{position:absolute;top:7px;left:-31px;width:62px;height:2px;border-radius:var(--radius-pill);background:var(--ink-200);transition:background var(--duration-slow) var(--ease-out)}
.hv-steptl__link--past{background:var(--green-600)}
.hv-steptl__node{position:relative;width:16px;height:16px;border-radius:var(--radius-pill);display:inline-flex;align-items:center;justify-content:center;background:var(--white);box-shadow:inset 0 0 0 1.5px var(--ink-200);transition:background var(--duration-soft) var(--ease-out),box-shadow var(--duration-soft) var(--ease-out)}
.hv-steptl__node--done,.hv-steptl__node--active{background:var(--green-600);box-shadow:none}
.hv-steptl__node--active{animation:hv-steptl-pulse var(--duration-pulse) var(--ease-out) infinite}
.hv-steptl__node--failed{background:var(--red-700);box-shadow:none;animation:none}
.hv-steptl__core{width:5px;height:5px;border-radius:var(--radius-pill);background:var(--white)}
.hv-steptl__lb{font-size:11.5px;text-align:center;color:var(--text-muted);font-weight:550;transition:color var(--duration-soft) var(--ease-out)}
.hv-steptl__lb--reached{color:var(--ink-900)}
.hv-steptl__lb--active{font-weight:650}
.hv-steptl__lb--failed{color:var(--red-700);font-weight:650}
.hv-steptl__arrival{display:flex;align-items:center;gap:12px;font-family:var(--font-sans);color:var(--text-body)}
.hv-steptl__arrival-hex{width:34px;height:39px;display:inline-flex;align-items:center;justify-content:center;flex:none}
.hv-steptl__arrival-title{display:block;font-size:14px;font-weight:650;letter-spacing:-0.015em}
.hv-steptl__arrival-meta{display:block;margin-top:3px;font-size:11.5px;color:var(--text-muted);font-variant-numeric:tabular-nums}
@keyframes hv-steptl-cw{to{transform:rotate(360deg)}}
@keyframes hv-steptl-ccw{to{transform:rotate(-360deg)}}
@keyframes hv-steptl-pulse{0%{box-shadow:0 0 0 0 color-mix(in srgb, var(--green-600) 35%, transparent)}70%{box-shadow:0 0 0 7px color-mix(in srgb, var(--green-600) 0%, transparent)}100%{box-shadow:0 0 0 0 color-mix(in srgb, var(--green-600) 0%, transparent)}}
@media (prefers-reduced-motion: reduce){
  .hv-steptl__hex,.hv-steptl__node--active{animation-duration:2.4s !important;animation-iteration-count:infinite !important}
}
`;
function hvEnsureStepTimelineCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-steptimeline-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-steptimeline-css';
  s.textContent = hvStepTimelineCss;
  document.head.appendChild(s);
}

/* House checkmark at 9px — permanent exemption from Tabler at this size. */
function HvTlCheck() {
  return (
    <svg width="9" height="9" viewBox="0 0 16 16" fill="none" stroke="var(--white)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8.5 6.5 12 13 4.5"></path>
    </svg>
  );
}
function HvTlCross() {
  return (
    <svg width="9" height="9" viewBox="0 0 16 16" fill="none" stroke="var(--white)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 4.5l7 7M11.5 4.5l-7 7"></path>
    </svg>
  );
}

export function StepTimeline({ phases = [], active = 0, label, elapsed, failed = false, arrived, mark = true }) {
  hvEnsureStepTimelineCss();

  /* Arrived: the rail is REPLACED by its own outcome — hex-check, the
     arrival title, one quiet tabular meta line. Never three green checks. */
  if (arrived) {
    return (
      <div className="hv-steptl__arrival">
        <span className="hv-steptl__arrival-hex" aria-hidden="true">
          <svg width="30" height="34" viewBox="0 0 16 16" fill="none" stroke="var(--green-600)" strokeWidth="1" strokeLinejoin="round">
            <path d="M8 2.6 12.68 5.3v5.4L8 13.4 3.32 10.7V5.3Z"></path>
            <path d="M6 8.2 7.5 9.7 10.2 6.4" strokeWidth="1.7" strokeLinecap="round"></path>
          </svg>
        </span>
        <span style={{ minWidth: 0 }}>
          <span className="hv-steptl__arrival-title">{arrived.title}</span>
          {arrived.meta ? <span className="hv-steptl__arrival-meta">{arrived.meta}</span> : null}
        </span>
      </div>
    );
  }

  return (
    <div className="hv-steptl">
      {mark && !failed ? (
        <span className="hv-steptl__mark" aria-hidden="true">
          <span className="hv-steptl__hex" data-motion="essential">
            <svg width="26" height="30" viewBox="0 0 16 16" fill="none" stroke="var(--green-600)" strokeWidth="1.15" strokeLinejoin="round">
              <path d="M8 2.1 12.9 4.95v5.7L8 13.5 3.1 10.65V4.95Z"></path>
            </svg>
          </span>
          <span className="hv-steptl__hex hv-steptl__hex--counter" data-motion="essential">
            <svg width="26" height="30" viewBox="0 0 16 16" fill="none" stroke="var(--green-600)" strokeWidth="1.15" strokeLinejoin="round">
              <path d="M13.4 8l-2.7 4.68H5.3L2.6 8l2.7-4.68h5.4Z"></path>
            </svg>
          </span>
        </span>
      ) : null}
      {label ? (
        <div className={`hv-steptl__label${failed ? ' hv-steptl__label--failed' : ''}`} aria-live="polite">{label}</div>
      ) : null}
      {elapsed ? <div className="hv-steptl__elapsed">{elapsed}</div> : null}
      <div className="hv-steptl__rail" aria-hidden="true">
        {phases.map((name, i) => {
          const isDone = i < active;
          const isActive = i === active;
          const isFailed = isActive && failed;
          const reached = i <= active;
          const nodeCls = isFailed ? ' hv-steptl__node--failed'
            : isDone ? ' hv-steptl__node--done'
            : isActive ? ' hv-steptl__node--active'
            : '';
          const lbCls = isFailed ? ' hv-steptl__lb--failed'
            : (reached ? ' hv-steptl__lb--reached' : '') + (isActive ? ' hv-steptl__lb--active' : '');
          return (
            <div key={i} className="hv-steptl__ph">
              {i > 0 ? <span className={`hv-steptl__link${reached ? ' hv-steptl__link--past' : ''}`}></span> : null}
              <span className={`hv-steptl__node${nodeCls}`} data-motion={isActive && !failed ? 'essential' : undefined}>
                {isDone ? <HvTlCheck /> : isFailed ? <HvTlCross /> : isActive ? <span className="hv-steptl__core"></span> : null}
              </span>
              <span className={`hv-steptl__lb${lbCls}`}>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

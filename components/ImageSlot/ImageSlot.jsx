import * as React from 'react';
/* Hivory ImageSlot — the one place in a mock that isn't inert: a droppable image placeholder.
   Empty is THE state that matters — a quiet ringed frame (no 1px borders) whose placeholder is a
   brief, not an instruction. A dropped picture is stored against the slot's id so it survives a
   reload. The slot is a real control: tab stop, Enter opens the file picker. Parent owns the ratio. */
const hvImageSlotCss = `
.hv-imgslot{position:relative;display:block;width:100%;height:100%;box-sizing:border-box;padding:0;border:none;appearance:none;overflow:hidden;background:var(--surface-sunken);box-shadow:inset 0 0 0 1px var(--hairline-strong);border-radius:var(--radius-control);cursor:pointer;font-family:var(--font-sans);text-align:center;transition:box-shadow var(--transition-soft),background-color var(--transition-soft)}
.hv-imgslot:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
.hv-imgslot:active{filter:brightness(0.94)}
.hv-imgslot--drop{box-shadow:inset 0 0 0 1.5px var(--green-600);background:var(--surface-brand-tint)}
.hv-imgslot--filled{background:var(--surface-card);box-shadow:inset 0 0 0 1px var(--hairline)}
.hv-imgslot--filled:hover{box-shadow:inset 0 0 0 1px var(--ink-300)}
.hv-imgslot--filled.hv-imgslot--drop{box-shadow:inset 0 0 0 1.5px var(--green-600)}
.hv-imgslot--static{cursor:default}
.hv-imgslot__ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:8px;box-sizing:border-box;font-size:12px;line-height:1.45;color:var(--text-muted);pointer-events:none}
.hv-imgslot__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
.hv-imgslot--contain .hv-imgslot__img{object-fit:contain;padding:8px;box-sizing:border-box}
.hv-imgslot__replace{position:absolute;left:50%;bottom:8px;transform:translateX(-50%);display:inline-flex;align-items:center;height:20px;padding:0 9px;border-radius:var(--radius-pill);background:var(--ink-800);color:var(--white);font-size:10.5px;font-weight:600;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity var(--transition-soft)}
.hv-imgslot--filled:hover .hv-imgslot__replace{opacity:1}
.hv-imgslot--filled:focus-visible .hv-imgslot__replace{opacity:1}
.hv-imgslot__skel{position:absolute;inset:0;background:linear-gradient(100deg,var(--ink-50) 40%,var(--ink-100) 50%,var(--ink-50) 60%);background-size:200% 100%;animation:hv-imgslot-shimmer var(--duration-pulse) var(--ease-out) infinite}
@keyframes hv-imgslot-shimmer{to{background-position:-200% 0}}
.hv-imgslot__credit{position:absolute;right:6px;bottom:6px;display:inline-flex;align-items:center;height:18px;padding:0 7px;border-radius:var(--radius-pill);background:rgba(23,24,26,0.55);color:var(--white);font-size:10px;font-weight:500;text-decoration:none;white-space:nowrap}
a.hv-imgslot__credit:hover{background:rgba(23,24,26,0.75)}
a.hv-imgslot__credit:focus-visible{outline:2px solid var(--border-focus);outline-offset:2px}
@media (prefers-reduced-motion:reduce){.hv-imgslot__skel{animation-duration:2.4s}}
`;
function hvEnsureImageSlotCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-imageslot-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-imageslot-css';
  s.textContent = hvImageSlotCss;
  document.head.appendChild(s);
}

const HV_IMGSLOT_RADII = { circle: 'var(--radius-pill)', pill: 'var(--radius-pill)' };

function hvImageSlotStore(id) {
  return id ? `hv-imgslot:${id}` : null;
}

/*
 * id is MANDATORY and unique across the surface — the dropped picture is stored against it.
 * placeholder is a brief ("Post image · 1200 × 627"), never an instruction ("Upload image").
 * fit: cover (default, photography) | contain (artwork whose edges are the point).
 * shape: rect (default) | rounded (+ radius) | circle | pill.
 * readOnly renders plain media — a dead drop zone invites an action that cannot happen.
 */
export function ImageSlot({
  id, placeholder, src, fit = 'cover', shape = 'rect', radius = 14,
  credit, creditHref, loading = false, readOnly = false, onChange
}) {
  hvEnsureImageSlotCss();
  const storeKey = hvImageSlotStore(id);
  const [img, setImg] = React.useState(() => {
    try { return (storeKey && window.localStorage.getItem(storeKey)) || null; } catch (err) { return null; }
  });
  const [over, setOver] = React.useState(false);
  const [reading, setReading] = React.useState(false);
  const fileRef = React.useRef(null);

  const accept = (file) => {
    if (!file || !/^image\//.test(file.type)) return;
    setReading(true);
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result;
      setImg(url);
      setReading(false);
      try { if (storeKey) window.localStorage.setItem(storeKey, url); } catch (err) { /* storage full — the drop still shows */ }
      if (onChange) onChange(url, file);
    };
    reader.onerror = () => setReading(false);
    reader.readAsDataURL(file);
  };

  const shown = img || src || null;
  const busy = loading || reading;
  const borderRadius = HV_IMGSLOT_RADII[shape] || (shape === 'rounded' ? `${radius}px` : undefined);
  const cls = [
    'hv-imgslot',
    fit === 'contain' ? 'hv-imgslot--contain' : '',
    shown && !busy ? 'hv-imgslot--filled' : '',
    over ? 'hv-imgslot--drop' : ''
  ].filter(Boolean).join(' ');

  const media = busy ? (
    <span className="hv-imgslot__skel" data-motion="essential" aria-hidden="true"></span>
  ) : shown ? (
    <img className="hv-imgslot__img" src={shown} alt={placeholder || ''} draggable={false} />
  ) : (
    <span className="hv-imgslot__ph">{placeholder}</span>
  );

  const creditNode = shown && !busy && credit ? (
    creditHref
      ? <a className="hv-imgslot__credit" href={creditHref} target="_blank" rel="noreferrer" onClick={(ev) => ev.stopPropagation()}>{credit}</a>
      : <span className="hv-imgslot__credit">{credit}</span>
  ) : null;

  /* Read mode: the slot is not disabled, it is simply not mounted as a control. */
  if (readOnly) {
    return (
      <span className={`${cls} hv-imgslot--static`} style={{ borderRadius, display: 'block' }} role="img" aria-label={placeholder || 'Image'}>
        {media}
        {creditNode}
      </span>
    );
  }

  return (
    <React.Fragment>
    <button
      type="button"
      className={cls}
      style={{ borderRadius }}
      aria-label={`${placeholder || 'Image'}${shown ? ' — replace image' : ' — add image'}`}
      aria-busy={busy || undefined}
      onClick={() => { if (!busy && fileRef.current) fileRef.current.click(); }}
      onDragOver={(ev) => { ev.preventDefault(); if (!busy) setOver(true); }}
      onDragLeave={() => setOver(false)}
      onDrop={(ev) => {
        ev.preventDefault();
        setOver(false);
        if (!busy && ev.dataTransfer && ev.dataTransfer.files) accept(ev.dataTransfer.files[0]);
      }}
    >
      {media}
      {shown && !busy ? <span className="hv-imgslot__replace" aria-hidden="true">Replace</span> : null}
      {creditNode}
    </button>
    <input
      ref={fileRef}
      type="file"
      accept="image/*"
      tabIndex={-1}
      aria-hidden="true"
      style={{ display: 'none' }}
      onChange={(ev) => { accept(ev.target.files && ev.target.files[0]); ev.target.value = ''; }}
    />
    </React.Fragment>
  );
}

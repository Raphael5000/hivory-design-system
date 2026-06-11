/* Hivory Table — Engine data table: uppercase 11.5px header, mono numerals, hover rows. */
const hvTableCss = `
.hv-table{width:100%;border-collapse:collapse;font-family:var(--font-sans);font-size:13.5px}
.hv-table th{padding:10px 18px;text-align:left;font-size:11.5px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:var(--ink-400);border-bottom:1px solid var(--border-subtle);white-space:nowrap}
.hv-table td{padding:12px 18px;color:var(--ink-900);border-bottom:1px solid var(--ink-50)}
.hv-table tbody tr:last-child td{border-bottom:none}
.hv-table tbody tr{transition:background-color var(--duration-fast) var(--ease-out)}
.hv-table--hover tbody tr:hover{background:var(--ink-50)}
.hv-table .hv-table__num{text-align:right;font-family:var(--font-mono);font-size:12.5px}
.hv-table th.hv-table__num{font-family:var(--font-sans);font-size:11.5px}
.hv-table .hv-table__strong{font-weight:500;color:var(--ink-950)}
`;
function hvEnsureTableCss() {
  if (typeof document === 'undefined' || document.getElementById('hv-table-css')) return;
  const s = document.createElement('style');
  s.id = 'hv-table-css';
  s.textContent = hvTableCss;
  document.head.appendChild(s);
}

/* columns: [{ key, label, num?, strong? }] · rows: array of objects keyed by column key.
   Cell values may be strings, numbers, or React nodes (e.g. a Badge). */
export function Table({ columns = [], rows = [], hover = true }) {
  hvEnsureTableCss();
  return (
    <table className={`hv-table${hover ? ' hv-table--hover' : ''}`}>
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c.key} className={c.num ? 'hv-table__num' : ''}>{c.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {columns.map((c) => (
              <td key={c.key} className={`${c.num ? 'hv-table__num' : ''}${c.strong ? ' hv-table__strong' : ''}`}>{row[c.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* Hivory Table — Engine data table: uppercase 11.5px header, mono numerals, hover rows.
 *
 * Columns:  [{ key, label, num?, strong? }]
 *   - num:    right-aligns the column, uses Geist Mono at 12.5px with tabular-nums
 *   - strong: applies font-weight 500 and ink-950 color (use for primary identifier column)
 *
 * DataTable: Card-wrapped table with a title header. Use for analytics and dashboards.
 *   <DataTable title="Campaign Performance" columns={[...]} rows={[...]} />
 *
 * Numeric formatting: values should be pre-formatted strings (e.g. "R2,084.78", "1,234").
 * Currency columns: prefix with symbol (R, $, etc.) and 2 decimal places.
 * Integer columns: use locale formatting with commas.
 */
const hvTableCss = `
.hv-table{width:100%;border-collapse:collapse;font-family:var(--font-sans);font-size:13.5px}
.hv-table th{padding:10px 18px;text-align:left;font-size:11.5px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:var(--ink-400);border-bottom:1px solid var(--border-subtle);white-space:nowrap}
.hv-table td{padding:12px 18px;color:var(--ink-900);border-bottom:1px solid var(--ink-50)}
.hv-table tbody tr:last-child td{border-bottom:none}
.hv-table tbody tr{transition:background-color var(--duration-soft) var(--ease-out)}
.hv-table--hover tbody tr:hover{background:var(--ink-50)}
.hv-table .hv-table__num{text-align:right;font-family:var(--font-mono);font-size:12.5px;font-variant-numeric:tabular-nums}
.hv-table th.hv-table__num{font-family:var(--font-sans);font-size:11.5px;font-variant-numeric:normal}
.hv-table .hv-table__strong{font-weight:500;color:var(--ink-950)}
.hv-dtable{background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-card);overflow:hidden}
.hv-dtable__head{padding:12px 18px;border-bottom:1px solid var(--border-subtle)}
.hv-dtable__title{margin:0;font-size:13px;font-weight:600;color:var(--ink-950)}
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

/* DataTable — Card-wrapped table with a title header. For analytics dashboards. */
export function DataTable({ title, columns = [], rows = [], hover = true }) {
  hvEnsureTableCss();
  return (
    <div className="hv-dtable">
      {title ? (
        <div className="hv-dtable__head">
          <h3 className="hv-dtable__title">{title}</h3>
        </div>
      ) : null}
      <div style={{ overflowX: 'auto' }}>
        <Table columns={columns} rows={rows} hover={hover} />
      </div>
    </div>
  );
}

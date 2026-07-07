import { ReactNode } from 'react';

export interface TableColumn {
  key: string;
  label: string;
  /** Right-align with mono font + tabular-nums. Use for all numeric columns. */
  num?: boolean;
  /** Bold primary identifier column (font-weight 500, ink-950). */
  strong?: boolean;
}

export interface TableProps {
  columns?: TableColumn[];
  /** Objects keyed by column key; cell values may be strings, numbers, or React nodes (e.g. a Badge). */
  rows?: Record<string, ReactNode>[];
  /** Enable hover highlight on rows (default: true). */
  hover?: boolean;
}

/** Raw table — use inside a Card or standalone. */
export declare function Table(props: TableProps): JSX.Element;

export interface DataTableProps extends TableProps {
  /** Card title displayed above the table. */
  title?: string;
}

/** Card-wrapped table with a title header. For analytics and dashboards. */
export declare function DataTable(props: DataTableProps): JSX.Element;

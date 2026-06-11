import { ReactNode } from 'react';

export interface TableColumn {
  key: string;
  label: string;
  /** Right-aligned mono numerals. */
  num?: boolean;
  /** Medium-weight ink text (lead column). */
  strong?: boolean;
}

export interface TableProps {
  columns?: TableColumn[];
  /** Objects keyed by column key; cell values may be strings, numbers, or React nodes (e.g. a Badge). */
  rows?: Record<string, ReactNode>[];
  hover?: boolean;
}

export declare function Table(props: TableProps): JSX.Element;

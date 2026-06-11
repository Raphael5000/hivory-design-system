export interface TabItem {
  id: string;
  label: string;
  /** Optional count pill; turns green on the active tab. */
  count?: number;
}

export interface TabsProps {
  items?: TabItem[];
  /** Controlled active tab id. */
  activeId?: string;
  /** Uncontrolled initial tab id (defaults to the first item). */
  defaultActiveId?: string;
  onChange?: (id: string) => void;
}

export declare function Tabs(props: TabsProps): JSX.Element;

export interface SkeletonProps {
  /** line = text row · circle = avatar · rect = chart/image block */
  variant?: 'line' | 'circle' | 'rect';
  width?: number | string;
  height?: number | string;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;

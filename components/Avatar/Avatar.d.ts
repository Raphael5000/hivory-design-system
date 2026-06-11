export interface AvatarProps {
  /** Image URL; falls back to initials derived from name. */
  src?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Green presence dot (online / active). */
  dot?: boolean;
}
export declare function Avatar(props: AvatarProps): JSX.Element;

export interface AvatarGroupProps {
  names?: string[];
  size?: 'sm' | 'md' | 'lg';
  /** Avatars beyond this collapse into a +N chip. */
  max?: number;
}
export declare function AvatarGroup(props: AvatarGroupProps): JSX.Element;

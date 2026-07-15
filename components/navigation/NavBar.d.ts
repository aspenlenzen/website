/** Top navigation bar: serif mark left, centered links, clay underline on active. */
export interface NavBarProps {
  /** Short mark or initials rendered in display serif */
  brand?: string;
  links?: string[];
  active?: string;
  onNavigate?: (link: string) => void;
  style?: React.CSSProperties;
}

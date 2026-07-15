/**
 * Editorial spaced-caps button.
 * @startingPoint section="Components" subtitle="Outline / filled / link button" viewport="700x180"
 */
export interface ButtonProps {
  /** "outline" (default) | "filled" | "link" */
  variant?: "outline" | "filled" | "link";
  href?: string;
  onClick?: (e: any) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

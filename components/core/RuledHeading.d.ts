/** Serif caps heading, optionally framed by thin rules. */
export interface RuledHeadingProps {
  /** "hero" | "section" (default) | "sub" */
  level?: "hero" | "section" | "sub";
  /** Draw rules above + below (default true for hero) */
  rules?: boolean;
  align?: "left" | "center" | "right";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

import React from "react";

/**
 * Editorial button. Spaced-caps label, square corners.
 * variants: "outline" (default), "filled" (clay), "link" (bare arrow-link)
 */
export function Button({ variant = "outline", href = "#", onClick, children, style }) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: "inline-block",
    fontFamily: "var(--font-body)",
    fontSize: "var(--type-label-size)",
    letterSpacing: "var(--type-label-tracking)",
    textTransform: "uppercase",
    fontWeight: 700,
    textDecoration: "none",
    padding: "12px 28px",
    cursor: "pointer",
    borderRadius: "var(--radius-none)",
    transition: "background 120ms ease, color 120ms ease, opacity 120ms ease",
  };
  const variants = {
    outline: {
      border: "1px solid var(--border)",
      color: hover ? "var(--parchment)" : "var(--text-heading)",
      background: hover ? "var(--ink)" : "transparent",
    },
    filled: {
      border: "1px solid var(--accent-strong)",
      color: "#f4efe5",
      background: hover ? "var(--pine)" : "var(--accent-strong)",
    },
    link: {
      border: "none",
      padding: 0,
      color: hover ? "var(--link-hover)" : "var(--link)",
      background: "transparent",
    },
  };
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {children}
    </a>
  );
}

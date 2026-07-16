import React from "react";

/**
 * Pill button (personal-site-brand). Uppercase letterspaced label, regular weight.
 * variants: "outline" (default, rust outline), "filled" (rust fill, one per view),
 *           "sage" (sage outline), "link" (bare arrow-link)
 */
export function Button({ variant = "outline", href = "#", onClick, children, style }) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: "inline-block",
    fontFamily: "var(--font-body)",
    fontSize: "var(--type-label-size)",
    letterSpacing: "var(--type-label-tracking)",
    textTransform: "uppercase",
    fontWeight: 400,
    textDecoration: "none",
    padding: "12px 28px",
    cursor: "pointer",
    borderRadius: "var(--radius-pill)",
    transition: "background 120ms ease, color 120ms ease, opacity 120ms ease",
  };
  const variants = {
    outline: {
      border: "1.5px solid var(--color-rust)",
      color: hover ? "var(--color-cream)" : "var(--color-rust)",
      background: hover ? "var(--color-rust)" : "transparent",
    },
    filled: {
      border: "1.5px solid var(--color-rust)",
      color: "var(--color-cream)",
      background: hover ? "var(--color-rust-deep)" : "var(--color-rust)",
    },
    sage: {
      border: "1.5px solid var(--color-sage)",
      color: hover ? "var(--color-cream)" : "var(--color-sage)",
      background: hover ? "var(--color-sage)" : "transparent",
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

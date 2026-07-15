import React from "react";

/**
 * Serif caps heading framed by thin horizontal rules.
 * level: "hero" (rules above+below, 72px) | "section" (48px, optional rules) | "sub" (30px title case, no rules)
 */
export function RuledHeading({ level = "section", rules = level === "hero", align = "center", children, style }) {
  const mobile = useIsMobile();
  const sizes = {
    hero: { fontSize: mobile ? "40px" : "var(--type-hero-size)", letterSpacing: "var(--type-hero-tracking)", textTransform: "uppercase" },
    section: { fontSize: mobile ? "30px" : "var(--type-h1-size)", letterSpacing: "var(--type-h1-tracking)", textTransform: "uppercase" },
    sub: { fontSize: mobile ? "24px" : "var(--type-h2-size)", letterSpacing: "0.01em", textTransform: "none" },
  };
  const Tag = { hero: "h1", section: "h2", sub: "h3" }[level] || "h2";
  const h = (
    <Tag
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: "var(--type-display-weight)",
        lineHeight: "var(--type-display-leading)",
        color: "var(--text-heading)",
        textAlign: align,
        margin: 0,
        ...sizes[level],
        ...style,
      }}
    >
      {children}
    </Tag>
  );
  if (!rules) return h;
  const rule = <div style={{ borderTop: "var(--rule-weight) solid var(--border)", width: "100%" }} />;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px", width: "100%" }}>
      {rule}
      {h}
      {rule}
    </div>
  );
}

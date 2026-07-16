import React from "react";

/**
 * Cinzel Title-Case heading, optionally framed by thin tan rules.
 * Never text-transform — Cinzel renders Title Case as large + small capitals.
 * level: "hero" (h1) | "section" (h2, optional rules) | "sub" (h3, no rules)
 */
export function RuledHeading({ level = "section", rules = level === "hero", align = "center", children, style }) {
  const mobile = useIsMobile();
  const sizes = {
    hero: { fontSize: mobile ? "36px" : "var(--type-hero-size)", letterSpacing: "var(--type-hero-tracking)", textTransform: "none" },
    section: { fontSize: mobile ? "26px" : "var(--type-h1-size)", letterSpacing: "var(--type-h1-tracking)", textTransform: "none" },
    sub: { fontSize: mobile ? "19px" : "var(--type-h2-size)", letterSpacing: "0.03em", textTransform: "none", fontWeight: 500 },
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

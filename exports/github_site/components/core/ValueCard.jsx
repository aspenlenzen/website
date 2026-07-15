import React from "react";

/**
 * Centered title + short paragraph, used in 3-across value bands.
 */
export function ValueCard({ title, children, style }) {
  return (
    <div style={{ textAlign: "center", maxWidth: "340px", ...style }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: "22px",
          color: "var(--text-heading)",
          marginBottom: "18px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "15px",
          lineHeight: 1.65,
          color: "var(--text-body)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

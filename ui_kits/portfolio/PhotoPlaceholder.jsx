import React from "react";

/** Sun-warm photo placeholder — swap for the owner's own photography. */
export function PhotoPlaceholder({ label = "Your photo", ratio = "3 / 2", style }) {
  return (
    <div
      style={{
        aspectRatio: ratio,
        background: "linear-gradient(135deg, #d8c9a8 0%, #b09a76 55%, #8a7a5c 100%)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "16px 20px",
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "12px",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          fontWeight: 700,
          color: "rgba(244, 239, 229, 0.9)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

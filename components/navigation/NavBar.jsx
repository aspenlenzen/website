import React from "react";

/**
 * Top navigation: small mark/name left, spaced-caps links right of center.
 */
export function NavBar({ brand = "ASL", logoSrc, links = ["Home", "Resume"], active = "Home", onNavigate, style }) {
  const mobile = useIsMobile();
  return (
    <nav
      aria-label="Main navigation"
      style={{
        display: "flex",
        alignItems: "center",
        padding: mobile ? "16px 20px" : "28px 56px",
        background: "var(--bg-page)",
        fontFamily: "var(--font-body)",
        textAlign: "center",
        justifyContent: "space-between",
        ...style,
      }}
    >
      {logoSrc ? (
        <a
          href="#"
          aria-label="Go to home page"
          onClick={(e) => {
            e.preventDefault();
            onNavigate && onNavigate("Home");
          }}
          style={{ display: "inline-flex" }}
        >
          <img
            src={logoSrc}
            alt=""
            style={{ height: mobile ? "40px" : "56px", width: mobile ? "40px" : "56px", objectFit: "contain", cursor: "pointer" }}
          />
        </a>
      ) : (
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "26px",
            letterSpacing: "0.03em",
            color: "var(--text-heading)",
          }}
        >
          {brand}
        </div>
      )}
      <div style={{ display: "flex", gap: mobile ? "18px" : "60px", margin: "0 auto", flexWrap: "wrap", alignItems: "stretch", justifyContent: "space-between" }}>
        {links.map((l) => (
          <a
            key={l}
            href="#"
            aria-current={l === active ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              onNavigate && onNavigate(l);
            }}
            style={{
              fontSize: mobile ? "14px" : "17px",
              letterSpacing: "0.08em",
              textDecoration: "none",
              color: "var(--text-heading)",
              fontWeight: l === active ? 500 : 400,
              color: l === active ? "var(--accent)" : "var(--text-heading)",
              borderBottom: l === active ? "1.5px solid var(--accent)" : "1.5px solid transparent",
              paddingBottom: "4px",
            }}
          >
            {l === "Resume" ? "R\u00e9sum\u00e9" : l}
          </a>
        ))}
      </div>
      <div style={{ width: mobile ? "0px" : "60px" }} />
    </nav>
  );
}

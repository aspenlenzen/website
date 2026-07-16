import React from "react";

/**
 * Footer: serif caps name over spaced-caps text links, on driftwood-light.
 */
export function Footer({ name = "Aspen Scafa Lenzen", links = [{ label: "LinkedIn", href: "https://www.linkedin.com/in/aspenlenzen/" }, { label: "Medium", href: "https://medium.com/@AspenLenzen" }, { label: "Instagram", href: "https://www.instagram.com/aspenscafa/" }], style }) {
  const mobile = useIsMobile();
  return (
    <footer
      style={{
        background: "var(--bg-inverse)",
        textAlign: "center",
        padding: "72px 24px",
        fontFamily: "var(--font-body)",
        ...style,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: mobile ? "22px" : "32px",
          letterSpacing: "0.03em",
          color: "var(--text-on-inverse)",
          marginBottom: "28px",
        }}
      >
        {name}
      </div>
      <div style={{ display: "flex", gap: mobile ? "24px" : "40px", justifyContent: "center", flexWrap: "wrap" }}>
        {links.map((l) => {
          const label = typeof l === "string" ? l : l.label;
          const href = typeof l === "string" ? "#" : l.href;
          
          // SVG icons for social links
          let icon;
          if (label.toLowerCase() === "linkedin") {
            icon = (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM8 19H5V9H8V19ZM6.5 7.5C5.5 7.5 4.7 6.7 4.7 5.8C4.7 4.9 5.5 4.1 6.5 4.1C7.5 4.1 8.3 4.9 8.3 5.8C8.3 6.7 7.5 7.5 6.5 7.5ZM19 19H16V13.5C16 12.4 15.2 11.5 14.1 11.5C13 11.5 12.2 12.4 12.2 13.5V19H9.2V9H12.2V10.2C12.7 9.4 13.8 8.8 15.2 8.8C17.5 8.8 19 10.4 19 13.3V19Z" fill="currentColor"/>
              </svg>
            );
          } else if (label.toLowerCase() === "medium") {
            icon = (
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.0749 23.6554C27.0749 31.1968 21.0139 37.3103 13.5377 37.3103C6.06146 37.3103 0 31.1955 0 23.6554C0 16.1153 6.061 10 13.5377 10C21.0143 10 27.0749 16.114 27.0749 23.6554Z" fill="currentColor"/>
                <path d="M41.9256 23.6554C41.9256 30.7541 38.8951 36.5109 35.1568 36.5109C31.4184 36.5109 28.3879 30.7541 28.3879 23.6554C28.3879 16.5568 31.418 10.7999 35.1563 10.7999C38.8947 10.7999 41.9252 16.555 41.9252 23.6554" fill="currentColor"/>
                <path d="M47.9999 23.6554C47.9999 30.0141 46.9342 35.1719 45.6193 35.1719C44.3043 35.1719 43.2391 30.0154 43.2391 23.6554C43.2391 17.2954 44.3048 12.1389 45.6193 12.1389C46.9338 12.1389 47.9999 17.2949 47.9999 23.6554Z" fill="currentColor"/>
              </svg>
            );
          } else if (label.toLowerCase() === "instagram") {
            icon = (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.231C20.102 2.381 21.621 3.924 21.771 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.771 16.85C21.62 20.075 20.105 21.621 16.85 21.771C15.584 21.827 15.204 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.771C3.899 21.62 2.381 20.074 2.231 16.849C2.175 15.584 2.163 15.205 2.163 12C2.163 8.796 2.175 8.417 2.231 7.151C2.381 3.924 3.896 2.383 7.151 2.231C8.417 2.175 8.796 2.163 12 2.163ZM12 4C8.741 4 8.409 4.012 7.165 4.066C5.268 4.161 4.162 5.267 4.066 7.164C4.012 8.409 4 8.741 4 12C4 15.259 4.012 15.59 4.066 16.835C4.161 18.733 5.267 19.838 7.164 19.934C8.41 19.988 8.741 20 12 20C15.259 20 15.59 19.988 16.835 19.934C18.733 19.839 19.838 18.733 19.934 16.836C19.988 15.591 20 15.259 20 12C20 8.741 19.988 8.409 19.934 7.165C19.839 5.267 18.733 4.161 16.836 4.066C15.591 4.012 15.259 4 12 4ZM12 7C14.761 7 17 9.239 17 12C17 14.761 14.761 17 12 17C9.239 17 7 14.761 7 12C7 9.239 9.239 7 12 7ZM12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5ZM17.5 6.5C17.5 7.327 17.827 8 18.5 8C19.173 8 19.5 7.327 19.5 6.5C19.5 5.673 19.173 5 18.5 5C17.827 5 17.5 5.673 17.5 6.5Z" fill="currentColor"/>
              </svg>
            );
          }
          
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label + " (opens in a new tab)"}
              style={{
                color: "var(--text-on-inverse)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              {icon}
            </a>
          );
        })}
      </div>
    </footer>
  );
}

import React from "react";

/**
 * BoPo Consulting — client case-study gallery.
 * Each client is a tile (logo, company blurb, problem blurb). Clicking a tile
 * opens a centered popout (~50% of the page) with the full case study.
 * Data lives in caseStudiesData.jsx — edit that file to change cards/tags.
 */

export function BoPoConsulting({ DS }) {
  const { RuledHeading } = DS;
  const mobile = useIsMobile();
  const isStub = (cs) =>
    cs.sections.every((s) => !s.beforeAfter && !s.solutions && !s.impact &&
      (s.paragraphs || []).every((p) => p === "[[PLACEHOLDER]]"));
  const txt = (v) => (v === "[[PLACEHOLDER]]" ? <i>Coming Soon</i> : v);
  const [open, setOpen] = React.useState(null);
  const dialogRef = React.useRef(null);
  const [selected, setSelected] = React.useState([]);
  const [expandedGallery, setExpandedGallery] = React.useState(false);
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const toggleTag = (t) =>
    setSelected((sel) => (sel.includes(t) ? sel.filter((x) => x !== t) : [...sel, t]));
  const companyTagOrder = ["Venture Capital", "Woman Owned", "Creative Services", "E-Commerce"];
  const companyTags = Array.from(new Set(caseStudies.flatMap((cs) => cs.tags.company))).sort(
    (a, b) => {
      const ia = companyTagOrder.indexOf(a);
      const ib = companyTagOrder.indexOf(b);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    }
  );
  const contractTags = Array.from(new Set(caseStudies.flatMap((cs) => cs.tags.contract)));
  const allVisible = caseStudies
    .filter((cs) => selected.every((t) => cs.tags.company.includes(t) || cs.tags.contract.includes(t)))
    .sort((a, b) => (b.sortKey || "").localeCompare(a.sortKey || ""));
  const visible = expandedGallery ? allVisible : allVisible.slice(0, 6);
  const hasMore = allVisible.length > 6;
  // Tag colors: company type = moss green, contract type = clay
  const chipStyles = {
    company: { background: "rgba(125, 129, 99, 0.22)", color: "var(--pine)" },
    contract: { background: "rgba(176, 101, 61, 0.16)", color: "var(--accent-strong)" },
  };
  const body = {
    fontFamily: "var(--font-body)",
    fontSize: "15px",
    lineHeight: 1.65,
    color: "var(--text-body)",
  };
  const label = {
    fontFamily: "var(--font-body)",
    fontSize: "13px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    fontWeight: 700,
    color: "var(--accent-strong)",
  };
  const testimonials = [
    {
      quote: "I had the pleasure of working with Aspen and was impressed by her curiosity and commitment to growth. Aspen approaches challenges with thoughtfulness and brings a unique perspective that enhances collaboration and problem-solving. She is naturally tech-savvy and quick to adopt new tools, which allows her to contribute efficiently and effectively.",
      name: "Ash Watts",
      title: "Learning & Development Leader, Cisco"
    },
    {
      quote: "Aspen project managed our first annual meeting, a high-stakes and complicated gathering that thanks to her went off without a hitch!",
      name: "Ian Rountree",
      title: "1st Check Investor, Cantos"
    },
    {
      quote: "Aspen came in as an Airtable consultant for Crush, and truly brought order to our chaos! She completely customized the experience to our specific business needs. I couldn't recommend Aspen enough for business operations management!",
      name: "Hollyann Bucci",
      title: "Senior Operations Manager"
    },
    {
      quote: "Aspen spent a couple of months learning the ins and outs of our business and was able to build us a customized system that brought all elements together in an organized place. She is extremely thorough, bright and professional and we feel working with her has elevated our game!",
      name: "Lacey Hoff",
      title: "Owner & Creative Director, Crush Studio"
    },
    {
      quote: "Aspen is highly organized, driven, and intelligent. She's very capable of managing a variety of complex tasks at the same time and completing projects in a time-sensitive manner. I can't recommend her enough.",
      name: "Benjamin Grant White",
      title: "Professor, Researcher, and Author"
    },
    {
      quote: "Aspen was one of the best hires I made. She had an uncommon ability to get along great and was very much liked by others. She kept well organized and calm in a high pressure deadline driven environment. Aspen made improvements in whatever she touched.",
      name: "Joel Springwater",
      title: "Operations & Project Management Executive"
    },
    {
      quote: "Aspen has excellent project management skills, coupled with her creative thinking and ability to improve performance through technology means she's a clear upgrade to any team.",
      name: "Shelton Hollers",
      title: "CHRO & Human Capital Leadership Insights"
    }
  ];
  const cardsPerView = 3;
  const maxCarouselIndex = Math.max(0, testimonials.length - cardsPerView);
  // Auto-scroll every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev >= maxCarouselIndex ? 0 : prev + 1));
    }, 30000);
    return () => clearInterval(interval);
  }, [maxCarouselIndex]);
  const nextSlide = () => {
    setCarouselIndex((prev) => (prev >= maxCarouselIndex ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCarouselIndex((prev) => (prev <= 0 ? maxCarouselIndex : prev - 1));
  };
  // Drag-to-scroll for the testimonial carousel
  const carouselRef = React.useRef(null);
  const dragInfo = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const [dragX, setDragX] = React.useState(0);
  const onDragStart = (e) => {
    dragInfo.current = { startX: e.clientX, moved: 0 };
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
  };
  const onDragMove = (e) => {
    if (!dragInfo.current) return;
    const delta = e.clientX - dragInfo.current.startX;
    dragInfo.current.moved = delta;
    setDragX(delta);
  };
  const onDragEnd = () => {
    if (!dragInfo.current) return;
    const delta = dragInfo.current.moved;
    dragInfo.current = null;
    setDragging(false);
    setDragX(0);
    const el = carouselRef.current;
    if (el && Math.abs(delta) > 0) {
      const step = (el.offsetWidth - 48) / 3 + 24;
      let steps = Math.round(-delta / step);
      if (steps === 0 && Math.abs(delta) > step * 0.15) steps = delta < 0 ? 1 : -1;
      if (steps !== 0) {
        setCarouselIndex((prev) => Math.max(0, Math.min(maxCarouselIndex, prev + steps)));
      }
    }
  };
  React.useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  React.useEffect(() => {
    if (open && dialogRef.current) dialogRef.current.focus();
  }, [open]);

  return (
    <div style={{ background: "var(--bg-page)", paddingBottom: "104px" }} data-screen-label="BoPo Consulting">
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: mobile ? "28px 24px 0" : "36px 40px 0" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", width: "100%", alignItems: "center" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--type-display-weight)", lineHeight: "var(--type-display-leading)", color: "var(--text-heading)", textAlign: "center", margin: 0, fontSize: mobile ? "34px" : "64px", letterSpacing: "var(--type-hero-tracking)", textTransform: "capitalize" }}>
            Independent Consulting
          </h1>
          <div style={{ borderTop: "var(--rule-weight) solid var(--border)", width: "75%" }} />
        </div>
        <p style={{ ...body, fontSize: "18px", textAlign: "center", maxWidth: "72ch", margin: "40px auto 0" }}>
          Through my consulting practice, I partner with founders and small teams to turn operational chaos into systems that hold, building custom Airtable databases and internal tools, designing operations and program workflows, and running high-stakes events.
        </p>
        <p style={{ ...body, fontSize: "18px", textAlign: "center", maxWidth: "72ch", margin: "20px auto 0" }}>
          I've partnered with nonprofits, global enterprises, and startups across venture capital, creative studios, e-commerce, real estate, and woman-owned brands, designing systems that reduce friction, increase capacity, and help people and programs thrive.
        </p>
      {/* Testimonials Section */}
      <div style={{ padding: mobile ? "48px 0 0" : "64px 0 0" }} id="testimonials">
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", width: "100%", alignItems: "center", marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--type-display-weight)", lineHeight: "var(--type-display-leading)", color: "var(--text-heading)", textAlign: "center", margin: 0, fontSize: mobile ? "34px" : "48px", letterSpacing: "var(--type-hero-tracking)", textTransform: "capitalize" }}>
            What People Are Saying
          </h2>
          <div style={{ borderTop: "var(--rule-weight) solid var(--border)", width: "75%" }} />
        </div>
        
        {/* Carousel - stepped: always shows 3 full cards, drag or arrows to move */}
        <div
          style={{ position: "relative", overflow: "hidden", marginBottom: "32px", containerType: "inline-size", cursor: dragging ? "grabbing" : "grab", touchAction: "pan-y" }}
          ref={carouselRef}
          onPointerDown={onDragStart}
          onPointerMove={onDragMove}
          onPointerUp={onDragEnd}
          onPointerCancel={onDragEnd}
        >
          <div
            style={{
              display: "flex",
              gap: "24px",
              transition: dragging ? "none" : "transform 0.6s ease",
              transform: "translateX(calc(" + -carouselIndex + " * ((100cqw - 48px) / 3 + 24px) + " + dragX + "px))",
              userSelect: "none",
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-faint)",
                  borderRadius: "12px",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  width: "calc((100cqw - 48px) / 3)",
                  flexShrink: 0,
                }}
              >
                <p style={{ ...body, fontSize: "14px", margin: 0, flex: 1 }}>{t.quote}</p>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-heading)", fontSize: "14px", marginBottom: "2px" }}>{t.name}</div>
                  <div style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-strong)" }}>{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel arrows */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "32px" }}>
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--text-heading)",
              fontSize: "18px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--text-heading)",
              fontSize: "18px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            →
          </button>
        </div>
      </div>

        <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? "24px" : "40px", alignItems: "start", marginTop: "40px" }}>
          {[
            ["Company Type", companyTags, "company"],
            ["Contract Type", contractTags, "contract"],
          ].map(([groupLabel, tags, kind]) => (
            <div key={groupLabel} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <span style={{ ...label, fontSize: "20px", color: "var(--text-body)" }}>{groupLabel}</span>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
              {tags.map((t) => {
                const active = selected.includes(t);
                const accent = kind === "company" ? "var(--pine)" : "var(--accent-strong)";
                return (
                  <button
                    key={t}
                    onClick={() => toggleTag(t)}
                    aria-pressed={active}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      color: active ? "var(--bg-page)" : accent,
                      background: active ? accent : "transparent",
                      border: "1px solid " + (active ? accent : "var(--border)"),
                      borderRadius: "999px",
                      padding: "7px 18px",
                      cursor: "pointer",
                    }}
                  >
                    {t}
                  </button>
                );
              })}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
          <button
            onClick={() => setSelected([])}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: selected.length ? "var(--accent-strong)" : "var(--text-body)",
              background: "none",
              border: "none",
              borderBottom: "1px solid var(--border)",
              padding: "4px 2px",
              cursor: "pointer",
            }}
          >
            Clear all filters ✕
          </button>
        </div>
      </div>

      {/* Gallery */}
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: mobile ? "48px 24px 0" : "72px 40px 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          gap: "40px",
        }}
      >
        {visible.map((cs) => (
          <div
            key={cs.id}
            onClick={() => !isStub(cs) && setOpen(cs.id)}
            role={isStub(cs) ? undefined : "button"}
            tabIndex={isStub(cs) ? undefined : 0}
            aria-haspopup={isStub(cs) ? undefined : "dialog"}
            aria-label={isStub(cs) ? undefined : "Read the " + cs.client + " case study"}
            onKeyDown={(e) => {
              if (!isStub(cs) && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                setOpen(cs.id);
              }
            }}
            style={{
              border: "1px solid var(--border-faint)",
              background: "var(--bg-card)",
              borderRadius: "12px",
              padding: "32px",
              cursor: isStub(cs) ? "default" : "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{
                height: "96px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--bg-page)",
                border: "1px solid var(--border-faint)",
                borderRadius: "12px",
                textAlign: "center",
                padding: "0 16px",
              }}
            >
              {cs.logo ? (
                <img
                  src={cs.logo}
                  alt={cs.logoLabel}
                  style={{ maxWidth: "85%", maxHeight: "68px", transform: cs.logoScale ? "scale(" + Math.min(cs.logoScale, 1.35) + ")" : "none", objectFit: "contain", display: "block" }}
                />
              ) : (
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "22px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--text-heading)",
                  }}
                >
                  {cs.client}
                </span>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ ...label, fontSize: "12px", color: "var(--accent-quiet)" }}>{txt(cs.dates)}</div>
              {["company", "contract"].map((kind) =>
                cs.tags[kind].length === 0 ? null : (
                  <div key={kind} style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {cs.tags[kind].map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "11px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          fontWeight: 700,
                          borderRadius: "999px",
                          padding: "5px 12px",
                          ...chipStyles[kind],
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )
              )}
            </div>
            <div>
              <div style={{ ...label, marginBottom: "8px" }}>The Client</div>
              <p style={{ ...body, fontSize: "14px", margin: 0 }}>{txt(cs.company)}</p>
            </div>
            <div>
              <div style={{ ...label, marginBottom: "8px" }}>The Challenge</div>
              <p style={{ ...body, fontSize: "14px", margin: 0 }}>{txt(cs.problem)}</p>
            </div>
            {!isStub(cs) && <div style={{ ...label, fontSize: "12px", marginTop: "auto" }}>Read More →</div>}
          </div>
        ))}
      </div>

      {/* Expand Gallery Button */}
      {hasMore && (
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: mobile ? "48px 24px 0" : "72px 40px 0", display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => setExpandedGallery(!expandedGallery)}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "var(--accent-strong)",
              background: "none",
              border: "1px solid var(--accent-strong)",
              borderRadius: "999px",
              padding: "10px 24px",
              cursor: "pointer",
            }}
          >
            {expandedGallery ? "Show Less ↑" : "Show More ↓"}
          </button>
        </div>
      )}

      {/* Popout */}
      {caseStudies
        .filter((cs) => cs.id === open)
        .map((cs) => (
          <div
            key={cs.id}
            onClick={() => setOpen(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(42, 51, 31, 0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 100,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={cs.client + " case study"}
              ref={dialogRef}
              tabIndex={-1}
              style={{
                width: mobile ? "100%" : "50%",
                minWidth: 0,
                height: mobile ? "100%" : "auto",
                maxHeight: mobile ? "100%" : "82vh",
                overflowY: "auto",
                background: "var(--bg-page)",
                border: "1px solid var(--border)",
                borderRadius: mobile ? 0 : "12px",
                padding: mobile ? "48px 24px" : "56px 64px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <RuledHeading level="section" align="left" style={{ fontSize: mobile ? "26px" : "36px" }}>
                  {cs.client}
                </RuledHeading>
                <button
                  onClick={() => setOpen(null)}
                  aria-label="Close"
                  style={{
                    background: "none",
                    border: "none",
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "var(--accent-strong)",
                    cursor: "pointer",
                    padding: "6px 0",
                  }}
                >
                  Close ✕
                </button>
              </div>
              <p style={{ ...body, margin: "20px 0 0" }}>{txt(cs.company)}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "48px", marginTop: "48px" }}>
                {cs.sections.map((s) => (
                  <div key={s.num}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px", borderBottom: "1px solid var(--border)", paddingBottom: "12px", marginBottom: "20px" }}>
                      <span style={{ ...label, color: "var(--accent-quiet)" }}>{s.num}</span>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "24px",
                          fontWeight: 500,
                          color: "var(--text-heading)",
                        }}
                      >
                        {s.title}
                      </span>
                    </div>
                    {(s.paragraphs || []).map((p) => (
                      <p key={p.slice(0, 24)} style={{ ...body, margin: "0 0 14px" }}>{p}</p>
                    ))}
                    {s.beforeAfter && (
                      <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: "32px", marginTop: "8px" }}>
                        <div>
                          <div style={{ ...label, marginBottom: "12px" }}>Before</div>
                          <ul style={{ ...body, fontSize: "14px", margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                            {s.beforeAfter.before.map((b) => <li key={b}>{b}</li>)}
                          </ul>
                        </div>
                        <div>
                          <div style={{ ...label, color: "var(--accent-quiet)", marginBottom: "12px" }}>Needed</div>
                          <ul style={{ ...body, fontSize: "14px", margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                            {s.beforeAfter.needed.map((b) => <li key={b}>{b}</li>)}
                          </ul>
                        </div>
                      </div>
                    )}
                    {s.solutions && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        {s.solutions.map(([t, d]) => (
                          <div key={t} style={{ display: "grid", gridTemplateColumns: "24px 1fr", gap: "12px" }}>
                            <span style={{ color: "var(--accent-strong)", fontFamily: "var(--font-body)" }}>→</span>
                            <div>
                              <div style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 700, color: "var(--text-heading)", marginBottom: "4px" }}>{t}</div>
                              <p style={{ ...body, fontSize: "14px", margin: 0 }}>{d}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {s.impact && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "16px", margin: "8px 0 14px" }}>
                        {s.impact.map(([t, d]) => (
                          <div key={t} style={{ borderLeft: "2px solid var(--accent-quiet)", paddingLeft: "16px" }}>
                            <div style={{ ...label, color: "var(--accent-quiet)", marginBottom: "4px" }}>{t}</div>
                            <p style={{ ...body, fontSize: "14px", margin: 0 }}>{d}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {(s.paragraphsAfter || []).map((p) => (
                      <p key={p.slice(0, 24)} style={{ ...body, margin: "0 0 14px" }}>{p}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

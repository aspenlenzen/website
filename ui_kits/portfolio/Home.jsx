import React from "react";

/** Home screen — recreation of the live site's homepage on the new tokens. */
export function Home({ DS, onNavigate }) {
  const { RuledHeading, Button, ValueCard } = DS;
  const mobile = useIsMobile();
  const body = {
    fontFamily: "var(--font-body)",
    fontSize: "var(--type-body-size)",
    lineHeight: "var(--type-body-leading)",
    color: "var(--text-body)",
  };
  const logos = [
    { src: "../../assets/logos/cisco.png", alt: "Cisco" },
    { src: "../../assets/logos/avail.webp", alt: "Avail" },
    { src: "../../assets/logos/kings-college.webp", alt: "The King's College, New York City", invert: true },
    { src: "../../assets/logos/richmond-events.png", alt: "Richmond Events" },
    { src: "../../assets/logos/coleman.webp", alt: "Visasq Coleman" },
    { src: "../../assets/logos/create.png", alt: "Create" },
    { src: "../../assets/logos/stamford-partnership.png", alt: "Stamford Partnership" },
    { src: "../../assets/logos/cantos-dark.png", alt: "Cantos Ventures" },
    { src: "../../assets/logos/atlas.webp", alt: "Eve Atlas" },
    { src: "../../assets/logos/boom-capital.png", alt: "Boom Capital Ventures" },
    { src: "../../assets/logos/crush-studio.png", alt: "Crush Studio" },
    { src: "../../assets/logos/corcoran.svg", alt: "Corcoran, The Randy Baruh Team" },
    { src: "../../assets/logos/yearly.webp", alt: "Yearly Company" },
    { src: "../../assets/logos/susan-gordon.png", alt: "Susan Gordon Pottery" },
    { src: "../../assets/logos/togather.png", alt: "Togather" },
  ];
  const LogoTile = ({ item, k }) => (
    <div
      key={k}
      style={{
        flex: "0 0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: mobile ? "168px" : "220px",
        height: mobile ? "104px" : "132px",
        background: "transparent",
        borderRadius: "6px",
        padding: "10px 14px",
        boxSizing: "border-box",
      }}
    >
      <img
        src={item.src}
        alt={item.alt}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          filter: item.invert ? "invert(1)" : "none",
        }}
      />
    </div>
  );
  const resumeBtn = (
    <div style={{ display: "flex", alignItems: "center", marginTop: "72px" }}>
      <div style={{ flex: 1, borderTop: "var(--rule-weight) solid var(--border)" }} />
    </div>
  );
  return (
    <div style={{ background: "var(--bg-page)" }}>
      {/* Hero */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: mobile ? "48px 24px 0" : "72px 40px 96px" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: mobile ? "24px" : "36px", fontWeight: "var(--type-display-weight)", lineHeight: "var(--type-display-leading)", color: "var(--text-heading)", marginBottom: "32px", fontStyle: "italic", textAlign: "center" }}>
          Aspen Scafa Lenzen
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: mobile ? "32px" : "var(--type-hero-size)", fontWeight: "var(--type-display-weight)", lineHeight: "var(--type-display-leading)", color: "var(--text-heading)", margin: 0, marginBottom: "32px", letterSpacing: "var(--type-hero-tracking)", textTransform: "none", width: mobile ? "100%" : "1178px", height: "auto", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          Connecting <i>People</i> and <i>Ideas</i>
        </h1>
        <div style={{ width: mobile ? "75%" : "75%", height: "1px", background: "var(--border)", margin: "0 auto" }} />
      </div>

      {/* About */}
      <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", alignItems: "center" }}>
        <div style={{ padding: mobile ? "40px 24px" : "40px 64px" }}>
          <RuledHeading level="section" align="left" style={{ marginBottom: "40px", textTransform: "capitalize" }}>
            About Me
          </RuledHeading>
          <div style={{ ...body, display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={{ margin: 0 }}>
              Hi, I'm Aspen! I live in Connecticut with my husband Will, our adventurous puppy Suki, and
              our cats, Toast and Duck.
            </p>
            <p style={{ margin: 0 }}>
              When I'm not working, you can usually find me out exploring somewhere new, whether that's a
              local hidden gem or somewhere across the world. I love capturing those moments through my
              camera too, so every photo you see (except the ones with me in it!) were taken by me!
            </p>
            <p style={{ margin: 0 }}>
              When at home, I'm probably curled up with my Kindle hoping one of the cats decides to grace
              me with their presence, elbow deep in a sewing project, or cooking something new while
              working my way through a podcast or audiobook.
            </p>
          </div>
        </div>
        <img
          src="../../assets/photo_home_field.jpg"
          alt="Golden-hour field"
          style={{ width: "100%", height: mobile ? "300px" : "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* My Experience */}
      <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", alignItems: "stretch", marginTop: "0" }}>
        <img
          src="../../assets/photo_home_sky.jpg"
          alt="Open sky"
          style={{ width: "100%", height: mobile ? "300px" : "100%", objectFit: "cover", display: "block", order: mobile ? 2 : 0 }}
        />
        <div style={{ padding: mobile ? "48px 24px" : "72px 64px", display: "flex", flexDirection: "column", gap: "36px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "45px",
              fontWeight: 500,
              color: "var(--text-heading)",
              margin: 0,
              textTransform: "none",
              letterSpacing: "normal",
            }}
          >
            Turning <i>chaos</i> into repeatable <i>systems</i>.
          </h2>
          <div style={{ ...body, fontSize: "15px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ margin: 0, fontSize: "17px" }}>
              I am a mission-driven Program Manager with 7+ years of experience partnering with
              nonprofits, global enterprises, and startups to lead cross-functional teams through the full
              program lifecycle, from Agile delivery to change management and risk mitigation.
            </p>
            <p style={{ margin: 0, fontSize: "17px" }}>
              I'm skilled at stewarding multimillion-dollar budgets and designing systems that reduce
              friction, increase capacity, and help people and programs thrive.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Project Management Professional (PMP)",
              "IBM Program Manager",
              "Notion Essentials Badge",
              "Google Project Management Certificate",
            ].map((c) => (
              <div
                key={c}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "var(--accent-strong)",
                }}
              >
                {c}
              </div>
            ))}
          </div>
          <div>
            <Button
              variant="outline"
              href="Resume.html"
              onClick={(e) => {
                e.preventDefault();
                onNavigate && onNavigate("Resume");
              }}
            >
              Resume →
            </Button>
          </div>
        </div>
      </div>

      {/* Values band */}
      <div style={{ background: "#F4EFE5", padding: mobile ? "64px 24px 48px" : "104px 64px 72px" }}>
        <RuledHeading level="section" style={{ marginBottom: "72px" }}>
          Connecting People &amp; Ideas
        </RuledHeading>
        <div style={{ display: "flex", flexDirection: mobile ? "column" : "row", alignItems: "center", gap: mobile ? "48px" : "64px", justifyContent: "center" }}>
          <ValueCard title="People First">
            Everything I do comes back to the people behind the work. Professionally, I'm drawn to
            building programs and systems that reduce friction and create space for people to do their
            best work. I care deeply about the individuals behind every initiative, and that's what keeps
            me motivated.
          </ValueCard>
          <ValueCard title="Connection Through Community">
            Whether I'm coordinating a global program or planning a hiking trip with friends, I'm happiest
            when I'm bringing people together. I believe the best experiences and organizations are built
            on bringing people together who are passionate about the same thing and a genuine investment
            in the people involved.
          </ValueCard>
          <ValueCard title="Curiosity &amp; Adventure">
            I'm a lifelong learner in every sense. Whether I'm picking up a new tool or software, getting
            lost in a book, or stumbling across a fascinating podcast episode, I'm always looking for
            something new to explore or understand. That same curiosity is what draws me to new trails,
            new places, and new challenges.
          </ValueCard>
        </div>
        {resumeBtn}
      </div>

      {/* Trusted-by logo marquee */}
      <div style={{ background: "var(--bg-page)", padding: mobile ? "48px 0 56px" : "64px 0 80px", overflow: "hidden" }}>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: mobile ? "12px" : "13px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "var(--accent-quiet)",
            textAlign: "center",
            marginBottom: mobile ? "32px" : "44px",
          }}
        >
          Organizations I've Partnered With
        </div>
        <div
          className="logo-marquee-viewport"
          style={{
            position: "relative",
            overflow: "hidden",
            maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <div className="logo-marquee-track" style={{ display: "flex", gap: mobile ? "4px" : "8px", width: "max-content" }}>
            {logos.map((item, i) => <LogoTile item={item} k={"a" + i} key={"a" + i} />)}
            {logos.map((item, i) => <LogoTile item={item} k={"b" + i} key={"b" + i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

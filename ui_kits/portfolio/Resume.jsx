import React from "react";

/** Resume screen — full recreation of the live site's resume page. */
export function Resume({ DS }) {
  const { RuledHeading, Button } = DS;
  const mobile = useIsMobile();
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
  const certs = [
    ["Project Management Professional (PMP)", "May 2025"],
    ["IBM Program Manager", "February 2025"],
    ["Notion Essentials Badge", "March 2024"],
    ["Google Project Management Certificate", "July 2022"],
  ];
  const skills = [
    "Adobe CS", "Airtable", "Asana", "Automations", "Canva", "CRMs", "Figma", "Funraise",
    "Greenhouse", "Hubspot", "Hootsuite", "HRIS\u2019s", "Justworks", "Microsoft Office Suite",
    "Monday.com", "Notion", "Salesforce", "Slack", "Zapier",
  ];
  const jobs = [
    {
      role: "Independent Consultant — People & Business Operations",
      org: "Self-Employed",
      dates: "August 2020 — Present",
      bullets: [
        "Partnered with 20+ organizations to design and scale internal programs, systems, and workflows supporting employee engagement, collaboration, and community building.",
        "Advised on strategy, communications, database architecture, platform selection, project management systems, and cross-functional knowledge sharing to enable scalable operations.",
        "Built and launched Airtable and Zapier-based systems supporting program tracking, participation metrics, and cross-team visibility; onboarded and trained 50+ users.",
      ],
    },
    {
      role: "Program & Operations Manager",
      org: "The Stamford Partnership",
      dates: "September 2025 — July 2026",
      bullets: [
        "Led end-to-end delivery of 6 community-facing programs, designing scalable operations to strengthen partner engagement and program impact",
        "Owned program operations across timelines, deliverables, and cross-partner coordination, ensuring successful execution across stakeholders",
        "Oversaw program budgets and financial reporting, maintaining transparency and alignment with funder and board expectations",
        "Built dashboards and reporting frameworks using Notion and Airtable to track participation, outcomes, and budget performance, enabling data-informed decision-making",
        "Cultivated and manage relationships with 20+ community partners, sponsors, and vendors to support long-term collaboration and program growth",
        "Planned and executed annual fundraiser using Givebutter, for 125+ people, exceeding attendance goals and raising over $100k.",
      ],
    },
    {
      role: "Program & Operations Manager — Learning & Development",
      org: "Cisco",
      dates: "June 2024 — July 2025",
      bullets: [
        "Delivered Illuminate/Edge Up, Cisco's global L&D program supporting 85,000+ employees and driving engagement, connection, and professional growth across regions and functions.",
        "Managed $9M+ program budget, overseeing forecasting, spend tracking, and financial reporting to support leadership decision-making and optimize resource allocation",
        "Identified, built and implemented KPI frameworks and feedback loops to measure program performance, improving accessibility, participation, and overall user experience and driving continuous program improvement",
        "Designed and scaled operational systems, workflows, and AI-assisted processes to support program delivery, increasing efficiency and cross-functional alignment across global teams.",
        "Partnered with cross-functional stakeholders across HR, product, and leadership to align program strategy with enterprise priorities and ensure successful execution",
      ],
    },
    {
      role: "Talent Analyst",
      org: "Create Venture Studio",
      dates: "November 2021 — June 2022",
      bullets: [
        "Partnered with founders across 5+ startups on org design, headcount planning, and hiring strategy to support early-stage team growth",
        "Managed full-cycle recruiting across 5+ portfolio companies, from workforce planning and role scoping through offer and onboarding, ensuring a seamless candidate and stakeholder experience",
        "Coordinated operational initiatives and hiring across startups, balancing competing priorities and timelines in a fast-paced environment",
        "Optimized Greenhouse and Airtable to improve workflow efficiency, data accuracy, reporting visibility, and candidate pipeline management",
        "Led initiatives to support inclusive hiring practices and strengthen internal culture and community engagement across portfolio companies",
      ],
    },
    {
      role: "Client Associate",
      org: "Coleman Research",
      dates: "July 2021 — November 2021",
      bullets: [
        "Recruited and onboarded 300+ C-suite and senior-level experts across industries to support client research engagements using LinkedIn Recruiter",
        "Supported multiple concurrent projects, coordinating timelines, expert availability, and deliverables to meet tight client deadlines",
        "Served as a primary liaison between clients and experts, ensuring clear communication and a seamless engagement experience",
        "Maintained detailed project records to support accurate tracking, reporting, and internal operations",
      ],
    },
    {
      role: "Operations & Events Associate",
      org: "Richmond Events",
      dates: "July 2019 — April 2020",
      bullets: [
        "Supported planning and execution of 14 national events (200+ attendees each), managing logistics, vendor coordination, and on-site operations",
        "Owned key event operations, including vendor contracts, speaker coordination, and travel logistics to ensure seamless event delivery",
        "Partnered with executive leadership on operational planning and internal processes to support day-to-day business operations",
        "Selected by CEO to contribute to strategic initiatives, translating operational challenges into actionable business recommendations",
      ],
    },
    {
      role: "Development Intern",
      org: "Avail",
      dates: "January 2019 — April 2019",
      bullets: [
        "Supported planning and execution of a 300+ attendee annual gala and silent auction, contributing to donor engagement and achieving fundraising goals",
        "Managed donation intake, stewardship tracking, and acknowledgements in Salesforce, ensuring data accuracy and timely donor communications",
        "Trained and coordinated volunteers to support seamless event execution",
        "Crafted and refined marketing and promotional materials for fundraising initiatives",
      ],
    },
    {
      role: "Development and Research Intern",
      org: "The Center for Jewish History",
      dates: "August 2018 — December 2018",
      bullets: [
        "Maintained and updated donor records in Raiser's Edge, ensuring data accuracy and completeness for development reporting",
        "Supported fundraising and development initiatives, including donor research, reporting, and preparation for the annual gala",
        "Assisted with donor communications and database management to support ongoing engagement and outreach efforts",
      ],
    },
    {
      role: "College Visit Coordinator",
      org: "The King's College",
      dates: "August 2017 — May 2018",
      bullets: [
        "Planned and executed 8 large-scale campus visit weekends for 400+ prospective students and families, managing scheduling, logistics, and on-site programming",
        "Coordinated cross-functional stakeholders including faculty, staff, students, and alumni to deliver a cohesive visitor experience",
        "Recruited, trained, and scheduled 50+ volunteers, improving coordination efficiency and reducing scheduling conflicts",
        "Owned prospective student communications and Salesforce data integrity to support recruitment tracking and follow-up efforts",
      ],
    },
  ];

  return (
    <div style={{ background: "var(--bg-page)", paddingBottom: "104px" }}>
      {/* Title + photo */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: mobile ? "28px 24px 0" : "36px 40px 0" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", width: "100%", alignItems: "center", paddingTop: "8px", paddingBottom: "50px" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--type-display-weight)", lineHeight: "var(--type-display-leading)", color: "var(--text-heading)", textAlign: "center", margin: 0, fontSize: mobile ? "38px" : "64px", letterSpacing: "var(--type-hero-tracking)", textTransform: "capitalize" }}>
            Resume
          </h1>
          <div style={{ borderTop: "var(--rule-weight) solid var(--border)", width: "75%", alignSelf: "center" }} />
        </div>
      </div>
      {/* Education (left) + skyline photo (right) */}
      <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", alignItems: "stretch" }}>
        <div style={{ padding: mobile ? "48px 24px" : "72px 64px" }}>
          <RuledHeading level="section" align="left" style={{ fontSize: mobile ? "28px" : "36px", marginBottom: "32px" }}>
            Education
          </RuledHeading>
          <RuledHeading level="sub" align="left">The King's College</RuledHeading>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "24px",
              fontWeight: 500,
              color: "var(--text-heading)",
              margin: "12px 0 6px",
            }}
          >
            B.S. Religious and Theological Studies
          </div>
          <p style={{ ...body, margin: "0 0 32px" }}>Minors: History &amp; Philosophy</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {certs.map(([c, d]) => (
              <div key={c} style={{ display: "flex", justifyContent: "space-between", gap: "24px", borderBottom: "1px solid var(--border-faint)", paddingBottom: "12px" }}>
                <span style={{ ...body, color: "var(--text-heading)", fontWeight: 700, fontSize: "16px" }}>{c}</span>
                <span style={{ ...label, fontSize: "14px", color: "var(--accent-quiet)", whiteSpace: "nowrap" }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
        <img
          src="../../assets/photo_resume_1.jpg"
          alt="City skyline"
          style={{ width: "100%", height: mobile ? "300px" : "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Lion photo (left) + Tools (right) */}
      <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", alignItems: "stretch" }}>
        <img
          src="../../assets/photo_resume_2.jpg"
          alt="Lion relief"
          style={{ width: "100%", height: mobile ? "300px" : "100%", objectFit: "cover", display: "block", order: mobile ? 2 : 0 }}
        />
        <div style={{ padding: mobile ? "48px 24px" : "72px 64px" }}>
          <RuledHeading level="section" align="left" style={{ fontSize: mobile ? "28px" : "36px", marginBottom: "32px" }}>
            Tools &amp; Skills
          </RuledHeading>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: mobile ? "center" : "flex-start" }}>
            {skills.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  letterSpacing: "0.06em",
                  color: "var(--text-heading)",
                  border: "1px solid var(--border-faint)",
                  padding: "7px 15px",
                }}
              >
                {s}
              </span>
            ))}
          </div>
          <RuledHeading level="section" align="left" style={{ fontSize: mobile ? "28px" : "36px", margin: "56px 0 32px" }}>
            Core Competencies
          </RuledHeading>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: mobile ? "center" : "flex-start" }}>
            {[
              "Change & Risk Management",
              "Agile & Waterfall Project Management",
              "Stakeholder Engagement",
              "Program Lifecycle Management",
              "Cross-Functional Leadership",
              "Strategic Planning & Execution",
              "Vendor & Partner Management",
              "Systems & Workflow Design",
            ].map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  letterSpacing: "0.06em",
                  color: "var(--text-heading)",
                  border: "1px solid var(--border-faint)",
                  padding: "7px 15px",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Work experience */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: mobile ? "64px 24px 0" : "104px 40px 0" }}>
        <RuledHeading level="section" style={{ marginBottom: "72px" }}>Work Experience</RuledHeading>
        <div style={{ display: "flex", flexDirection: "column", gap: "44px" }}>
          {jobs.map((j) => (
            <div key={j.role + j.org} style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "350px 1fr", gap: mobile ? "12px" : "40px" }}>
              <div>
                <RuledHeading level="sub" align="left" style={{ fontSize: "28px" }}>{j.role}</RuledHeading>
                <div style={{ ...label, fontSize: "16px", color: "var(--accent-quiet)", marginTop: "8px" }}>{j.org}</div>
              </div>
              <div>
                <div style={{ ...label, fontSize: "16px", color: "var(--accent-quiet)", paddingTop: mobile ? "0px" : "11px", marginBottom: "16px" }}>{j.dates}</div>
                <ul style={{ ...body, margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {j.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "88px" }}>
          <Button variant="filled">Download PDF</Button>
        </div>
      </div>
    </div>
  );
}

/**
 * BoPo Consulting — case-study data.
 *
 * EDIT THIS FILE DIRECTLY to change any card — no chat needed.
 * Each entry has:
 *   client   — display name
 *   dates    — engagement dates ("[[PLACEHOLDER]]" shows as "Coming Soon")
 *   tags     — { company: [...], contract: [...] }  <- add/remove tag strings here
 *   logo     — image path (e.g. "../../assets/logos/cantos.jpg"); omit to show the name as text
 *   company  — "The Client" blurb
 *   problem  — "The Challenge" blurb
 *   sections — the full case study shown in the popout
 *              (leave paragraphs as "[[PLACEHOLDER]]" to hide the Read More button)
 * New tags appear in the filter bar automatically.
 */
const caseStudies = [
  {
    "id": "crush-studio",
    "logo": "../../assets/logos/crush-studio.png",
    "client": "Crush Studio",
    "logoLabel": "Crush Studio logo",
    "company": "Crush Studio is a full-service creative production company specializing in film, photography, and design for national brands, managing complex multi-team projects with tight timelines and high stakes.",
    "problem": "Crush Studio was growing rapidly, but their internal operations hadn't kept pace. The team managed complex projects, timelines, budgets, and personnel across multiple workstreams, but the systems supporting those operations were fragmented.",
    "tags": {
      "company": [
        "Creative Services"
      ],
      "contract": [
        "Airtable Build",
        "Operations"
      ]
    },
    "dates": "July 2023 — December 2023",
    "sortKey": "2023-12",
    "sections": [
      {
        "num": "01",
        "title": "The Challenge",
        "paragraphs": [
          "Crush Studio was growing rapidly, but their internal operations hadn't kept pace. The team managed complex projects, timelines, budgets, and personnel across multiple workstreams, but the systems supporting those operations were fragmented."
        ],
        "beforeAfter": {
          "before": [
            "Data scattered across multiple spreadsheets and documents",
            "No single source of truth for project status or team information",
            "Manual processes took time away from strategic work",
            "Scaling challenges as the team grew"
          ],
          "needed": [
            "Centralized information hub",
            "Automated workflows and notifications",
            "Real-time visibility across teams",
            "Systems built for team adoption"
          ]
        }
      },
      {
        "num": "02",
        "title": "The Approach",
        "paragraphs": [
          "I partnered with Crush Studio's executive leadership and operations team to conduct a thorough audit of their systems and workflows. Over six months, I identified inefficiencies, designed scalable solutions, and guided the team through implementation and adoption.",
          "The work spanned strategy, systems design, database architecture, automations, and team enablement across four departments: operations, production, administration, and C-suite."
        ]
      },
      {
        "num": "03",
        "title": "The Solutions",
        "solutions": [
          [
            "Company Intranet",
            "A centralized information hub consolidating company information, team contacts, knowledge resources, and shared documentation in a single accessible database."
          ],
          [
            "Project Operations Hub",
            "Real-time project tracking system with automated status updates, timeline visibility, deliverable tracking, and team coordination across production and operations."
          ],
          [
            "HRIS & Talent Systems",
            "Human resources database and applicant tracking system designed to streamline hiring, onboarding, and team management as the company scaled."
          ],
          [
            "Operational Databases",
            "Five additional integrated systems for inventory management, budget tracking, purchase orders, CRM workflows, and marketing campaign coordination."
          ],
          [
            "Smart Automations",
            "Automated notifications, reminders, and status updates that eliminated manual data entry and kept teams informed without constant monitoring."
          ]
        ]
      },
      {
        "num": "04",
        "title": "Implementation & Impact",
        "paragraphs": [
          "With systems designed and built, I led a comprehensive training program across four departments and 15+ team members, with both in-person and online sessions to ensure confidence and adoption. The systems were structured so the team could maintain and evolve them independently."
        ],
        "impact": [
          [
            "Adoption",
            "All four departments integrated the systems into daily workflows, with the intranet and project hub becoming central to operations."
          ],
          [
            "Efficiency",
            "Automated notifications and status updates eliminated manual coordination tasks, freeing teams to focus on creative and strategic work."
          ],
          [
            "Visibility",
            "For the first time, project status, budgets, timelines, and resource allocation were transparent across the entire organization."
          ]
        ],
        "paragraphsAfter": [
          "The qualitative shift was immediate: team members reported clearer communication, better project visibility, and faster access to information. Leadership gained confidence in their ability to scale the business without proportionally scaling administrative overhead."
        ]
      },
      {
        "num": "05",
        "title": "Legacy & Ongoing Use",
        "paragraphs": [
          "When I concluded the engagement in December 2023, the systems were fully adopted and operationalized. The team was self-sufficient in maintaining, updating, and evolving the databases. Today, the intranet and project operations hub remain foundational to how Crush Studio manages complex, fast-moving campaigns and multi-team coordination.",
          "This engagement demonstrates how strategic operations work extends far beyond tool selection. By diagnosing root operational challenges, designing systems that fit workflow reality, and ensuring genuine team adoption, you can unlock significant improvements in visibility, efficiency, and scalability."
        ]
      }
    ]
  },
  {
    "id": "eve-atlas",
    "logo": "../../assets/logos/atlas.webp",
    "client": "Eve Atlas",
    "logoLabel": "Eve Atlas logo",
    "company": "Eve Atlas is a venture capital firm partnering with entrepreneurs boldly transforming how goods and people move, backing early-stage founders building the physical internet across logistics, robotics, aerospace, and mobility.",
    "problem": "As Eve Atlas scaled, their investment data scattered across multiple files made it impossible to track LP exposure across entities and deals, leaving critical questions about complex relationships unanswered.",
    "tags": {
      "company": [
        "Venture Capital"
      ],
      "contract": [
        "Airtable Build"
      ]
    },
    "dates": "January 2026 — March 2026",
    "sortKey": "2026-03",
    "sections": [
      {
        "num": "01",
        "title": "The Challenge",
        "paragraphs": [
          "As Eve Atlas scaled, so did the complexity of tracking their investments. With nearly 20 investment entities, dozens of portfolio companies, and a growing list of limited partners, the fund needed a single, reliable system of record. Instead, their data lived in fragments.",
          "The trickiest problem was on the LP side. The same individual might invest as themselves, through a trust, through multiple trusts, or through an LLC, sometimes across several different deals. Eve Atlas's original tracking method wasn't built to handle that kind of layered complexity, which made it difficult to answer a simple but critical question: what is this person's total exposure across the fund?"
        ],
        "beforeAfter": {
          "before": [
            "Investment data spread across multiple Excel and Google Sheets files",
            "Manual uploads required to keep records current across deals",
            "No way to see LP exposure across multiple entities at a glance",
            "Updates in one place didn't reflect anywhere else"
          ],
          "needed": [
            "One connected source of truth for the entire firm",
            "Real-time updates that sync everywhere automatically",
            "Clear visibility into complex LP relationships",
            "A system that scales as the fund grows"
          ]
        }
      },
      {
        "num": "02",
        "title": "The Approach",
        "paragraphs": [
          "I partnered with Eve Atlas to design and build a custom Airtable base from the ground up, one built specifically around how a venture fund actually operates, not a generic template forced to fit.",
          "Rather than digitizing their existing spreadsheets as-is, I designed a relational data structure where every piece of information, people, companies, deals, capital, and ownership, was linked. Updating one record would automatically ripple across every connected view."
        ]
      },
      {
        "num": "03",
        "title": "The Solutions",
        "solutions": [
          [
            "Portfolio company tracking",
            "A live view of every portfolio company, investment dates, amounts invested, shares owned, and ownership percentage, with automatic calculations that update as new investments are added."
          ],
          [
            "Investment vehicle mapping",
            "Each of the fund's investment entities linked to its LPs, capital commitments, and the portfolio companies it invested in, giving a clear picture of how every vehicle rolls up."
          ],
          [
            "The LP identity solution",
            "A structure that correctly linked individuals to every entity they invest through, whether personal, trust, or LLC, so the fund could finally see one person's full exposure across every deal in one place."
          ],
          [
            "Fully connected relationships",
            "Every table linked to the next: people to entities, entities to deals, deals to companies. Questions like \"which LPs are in this deal\" or \"what is our total ownership\" could be answered instantly."
          ],
          [
            "Internal and investor-facing hubs",
            "Clean, filtered views built on top of the same base, giving the internal team a full operating picture while giving individual LPs a secure, read-only window into their own information."
          ]
        ]
      },
      {
        "num": "04",
        "title": "The Impact",
        "impact": [
          [
            "One source of truth",
            "Every team member now enters and finds information in a single connected system instead of chasing updates across scattered files."
          ],
          [
            "Real-time accuracy",
            "Updating one record updates every linked view automatically, eliminating the manual re-entry that used to eat up hours."
          ],
          [
            "Instant answers",
            "Complex questions about LP exposure, ownership, and deal participation that once took digging can now be answered in seconds."
          ]
        ],
        "paragraphsAfter": [
          "The team affectionately nicknamed the finished system the \"Atlas Brain,\" their new central nervous system for the entire firm."
        ]
      },
      {
        "num": "05",
        "title": "Legacy & Ongoing Use",
        "paragraphs": [
          "The full scope of the engagement was completed, from the core data architecture through the internal dashboards and investor-facing portal. Eve Atlas now runs day-to-day operations directly out of the base, and the team has embraced it as the firm's operating system.",
          "This project shows what's possible when a system is designed around the real complexity of a business, not simplified around it. By solving the hardest problem first, tracking layered LP relationships across entities, every other piece of the fund's operations became easier to see, trust, and act on."
        ]
      }
    ]
  },
  {
    "id": "cantos-ventures",
    "logo": "../../assets/logos/cantos-dark.png",
    "logoScale": 1.3,
    "client": "Cantos Ventures",
    "logoLabel": "Cantos Ventures logo",
    "company": "Cantos is a pre-seed venture capital firm backing founders at the near frontier of technology, investing in climate, biotechnology, aerospace, and next-generation computing, with a portfolio including Astranis, Castelion, and Solugen.",
    "problem": "Cantos was ready to bring its community together for the first time. As a fund a few years into operating, they wanted to host their first annual general meeting, a milestone gathering that would bring limited partners, startup founders, and portfolio companies into one room. It needed to feel established and intentional, even though it was the first of its kind.",
    "tags": {
      "company": [
        "Venture Capital"
      ],
      "contract": [
        "Events"
      ]
    },
    "dates": "June 2023 — October 2023",
    "sortKey": "2023-10",
    "sections": [
      {
        "num": "01",
        "title": "The Challenge",
        "paragraphs": [
          "Cantos was ready to bring its community together for the first time. As a fund a few years into operating, they wanted to host their first annual general meeting, a milestone gathering that would bring limited partners, startup founders, and portfolio companies into one room. It needed to feel established and intentional, even though it was the first of its kind.\n\nThe stakes: first-ever AGM with no existing playbook to follow; Ian, Cantos's General Manager, needed to be fully present for LPs and founders, not managing logistics; multiple audiences in the room (LPs, founders, and guests, each with different needs); and a packed day with presentations, facility tours, roundtables, and an evening reception.\n\nWhat was needed: a single point of contact who could own the entire day, seamless coordination across venue, catering, and AV, founders fully prepared to present with polished materials, and a day that ran itself so Ian could focus on his community."
        ]
      },
      {
        "num": "02",
        "title": "The Approach",
        "paragraphs": [
          "I came on as a six-month engagement to plan and execute Cantos's first AGM from the ground up. The team had a general vision for the day, so I worked closely with them to fine-tune the format, shaping the flow of presentations, tours, and roundtable discussions into a cohesive, well-paced program.\n\nThe event was held at The Pearl in San Francisco, with a full day of programming: morning presentations, a hosted lunch, an afternoon of roundtable discussions built around themes relevant to the fund's portfolio, and an evening networking reception on the rooftop."
        ]
      },
      {
        "num": "03",
        "title": "What I Delivered",
        "paragraphs": [
          "End-to-end event logistics: owned venue coordination, catering, and AV production, managing every operational detail so the day ran smoothly from setup through teardown.\n\nGuest and stakeholder management: served as the primary point of contact for limited partners, startup founders, and other guests throughout the day, ensuring every attendee had a clear, well-hosted experience.\n\nFounder presentation support: coordinated with presenting startup founders to collect and format pitch decks ahead of time, so every presentation was polished and ready to go without last-minute scrambling.\n\nPortfolio company facility tours: partnered with a handful of local startups to organize and run facility tours for attendees, adding a hands-on dimension to the day beyond the main venue.\n\nProgram design: helped shape the day's format, from the roundtable topics and structure to the overall pacing, turning a general vision into a fully realized schedule."
        ]
      },
      {
        "num": "04",
        "title": "The Impact",
        "paragraphs": [
          "The day ran without a hitch. Ian was able to spend the AGM focused entirely on his role as General Manager, building relationships across his LP and founder community, rather than managing logistics behind the scenes. Founders arrived prepared and confident, guests moved smoothly between sessions, tours, and the rooftop reception, and feedback from attendees was strongly positive.\n\nMetrics: ~100 daytime guests, 200+ invited to evening reception, 1 point of contact for the entire day.\n\n\"Aspen project managed our first annual meeting, a high-stakes and complicated gathering that thanks to her went off without a hitch!\" — Ian, General Manager, Cantos"
        ]
      },
      {
        "num": "05",
        "title": "Legacy",
        "paragraphs": [
          "As Cantos's first annual gathering, this event set the tone and the standard for how the fund brings its community together. What began as a general idea became a fully realized, multi-part program that balanced substance and connection, presentations, tours, roundtables, and relationship-building, in a single well-paced day.\n\nThis engagement shows the value of a steady operational hand behind high-stakes, high-visibility moments. When the person leading a room doesn't have to worry about the logistics around them, they can focus entirely on the relationships that matter most."
        ]
      }
    ]
  },
  {
    "id": "boom-capital-ventures",
    "logo": "../../assets/logos/boom-capital.png",
    "client": "Boom Capital Ventures",
    "logoLabel": "Boom Capital Ventures logo",
    "company": "Boom Capital is a San Francisco venture capital firm investing at the pre-seed stage in deeply technical, under-networked founders building at the frontiers of science, with early bets on Mammoth Biosciences, Astra, Planet, and Swarm Technologies.",
    "problem": "[[PLACEHOLDER]]",
    "tags": {
      "company": [
        "Venture Capital"
      ],
      "contract": [
        "Program Management",
        "Events"
      ]
    },
    "dates": "September 2022 — February 2023",
    "sortKey": "2023-02",
    "sections": [
      {
        "num": "01",
        "title": "The Challenge",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "02",
        "title": "The Approach",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "03",
        "title": "The Solutions",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "04",
        "title": "Implementation & Impact",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "05",
        "title": "Legacy & Ongoing Use",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      }
    ]
  },
  {
    "id": "susan-gordon-pottery",
    "logo": "../../assets/logos/susan-gordon.png",
    "logoScale": 1.3,
    "client": "Susan Gordon Pottery",
    "logoLabel": "Susan Gordon Pottery logo",
    "company": "Susan Gordon Pottery is a small-batch pottery studio in Birmingham, Alabama creating modern, feminine, and refined dinnerware, serveware, and handmade jewelry, beloved for its signature gold-rimmed wavy bowls and stocked in boutiques nationwide.",
    "problem": "[[PLACEHOLDER]]",
    "tags": {
      "company": [
        "Woman Owned",
        "E-Commerce"
      ],
      "contract": [
        "Airtable Build"
      ]
    },
    "dates": "March 2023 — July 2023",
    "sortKey": "2023-07",
    "sections": [
      {
        "num": "01",
        "title": "The Challenge",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "02",
        "title": "The Approach",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "03",
        "title": "The Solutions",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "04",
        "title": "Implementation & Impact",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "05",
        "title": "Legacy & Ongoing Use",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      }
    ]
  },
  {
    "id": "yearly-company",
    "logo": "../../assets/logos/yearly.webp",
    "client": "Yearly Company",
    "logoLabel": "Yearly Company logo",
    "company": "Yearly Co. is a Nashville-based fine jewelry brand handcrafting solid 14k gold anniversary and milestone bangles and everyday heirloom pieces, born from a sixty-year family tradition of marking meaningful moments with gold.",
    "problem": "[[PLACEHOLDER]]",
    "tags": {
      "company": [
        "Woman Owned",
        "E-Commerce"
      ],
      "contract": [
        "Airtable Build"
      ]
    },
    "dates": "February 2023 — November 2023",
    "sortKey": "2023-11",
    "sections": [
      {
        "num": "01",
        "title": "The Challenge",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "02",
        "title": "The Approach",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "03",
        "title": "The Solutions",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "04",
        "title": "Implementation & Impact",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "05",
        "title": "Legacy & Ongoing Use",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      }
    ]
  },
  {
    "id": "corcoran-the-randy-baruh-team",
    "logo": "../../assets/logos/corcoran.svg",
    "logoScale": 1.3,
    "client": "Corcoran, The Randy Baruh Team",
    "logoLabel": "Corcoran, The Randy Baruh Team logo",
    "company": "Corcoran is one of New York City's most recognized luxury real estate brands. The Randy Baruh Team, now at Compass, brings more than 25 years of experience in luxury real estate, specializing in residential sales and new development across Manhattan and Brooklyn. The team is known for its distinctive marketing strategies and record-setting transactions.",
    "problem": "[[PLACEHOLDER]]",
    "tags": {
      "company": [],
      "contract": [
        "Copywriting",
        "Social Media",
        "Strategy"
      ]
    },
    "dates": "September 2022 — December 2022",
    "sortKey": "2022-12",
    "sections": [
      {
        "num": "01",
        "title": "The Challenge",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "02",
        "title": "The Approach",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "03",
        "title": "The Solutions",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "04",
        "title": "Implementation & Impact",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "05",
        "title": "Legacy & Ongoing Use",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      }
    ]
  },
  {
    "id": "togather",
    "logo": "../../assets/logos/togather.png",
    "client": "Togather",
    "logoLabel": "Togather logo",
    "company": "[[PLACEHOLDER]]",
    "problem": "[[PLACEHOLDER]]",
    "tags": {
      "company": [],
      "contract": [
        "Copywriting"
      ]
    },
    "dates": "[[PLACEHOLDER]]",
    "sortKey": "0000-00",
    "sections": [
      {
        "num": "01",
        "title": "The Challenge",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "02",
        "title": "The Approach",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "03",
        "title": "The Solutions",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "04",
        "title": "Implementation & Impact",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      },
      {
        "num": "05",
        "title": "Legacy & Ongoing Use",
        "paragraphs": [
          "[[PLACEHOLDER]]"
        ]
      }
    ]
  }
];

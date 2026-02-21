/* ============
   Data (edit here)
   ============ */

const experience = [
  {
    role: "Web Development Business Analyst Intern",
    org: "American Chemical Society — Washington, D.C.",
    date: "May 2025 – Aug 2025",
    bullets: [
      "Owned requirements and acceptance criteria for website enhancements; aligned stakeholders and delivery teams.",
      "Managed work intake and sprint execution (Jira/Confluence), tracked risks/dependencies, and supported QA/UAT.",
      "Improved delivery transparency through clear status updates, documentation, and decision-ready summaries."
    ]
  },
  {
    role: "Student Assistant",
    org: "California State University, East Bay — Hayward, CA",
    date: "Sep 2024 – Present",
    bullets: [
      "Supported academic operations and reporting; maintained accurate documentation and process hygiene.",
      "Collaborated with staff/students to resolve requests efficiently and communicate updates clearly."
    ]
  },
  {
    role: "Python Analyst Intern",
    org: "Axisray — India",
    date: "Jan 2024 – May 2024",
    bullets: [
      "Built Python-based automation and reports to improve reliability and reduce manual effort.",
      "Cleaned/validated datasets and produced insights to support internal decision-making."
    ]
  },
  {
    role: "Data Science & Machine Learning Intern",
    org: "BrainyBeams — India",
    date: "Jul 2023 – Aug 2023",
    bullets: [
      "Explored ML workflows (data prep → modeling → evaluation) and documented outcomes.",
      "Collaborated on experiments and presented findings with clear visuals and notes."
    ]
  },
  {
    role: "Web Development Intern",
    org: "Way-to-Web Technologies — India",
    date: "May 2023 – Jun 2023",
    bullets: [
      "Contributed to front-end features with attention to layout, responsiveness, and usability.",
      "Worked with the team to ship small improvements in a structured, deadline-driven workflow."
    ]
  }
];

const projects = [
  {
    title: "PMO Delivery Health Dashboard (Tableau)",
    summary:
      "Executive-ready PMO dashboard for portfolio health, sprint delivery, milestones, RAID, and dependencies.",
    highlights: [
      "Modeled project/sprint/work-item + RAID + dependency datasets into a KPI framework.",
      "Designed drilldowns (team/program/project) for stakeholder updates and escalations.",
      "Published interactive views for RAG status, milestone tracking, RAID aging, and blocked dependencies."
    ],
    tags: ["Tableau", "PMO", "KPI Framework", "RAID", "Delivery Tracking"],
    links: [
      { label: "Data Dictionary", href: "assets/Data_Dictionary.pdf" },
      { label: "KPI Definitions", href: "assets/KPI_Definitions.pdf" },
      { label: "Executive Memo", href: "assets/Executive_Insights_Memo.pdf" },
      { label: "Tableau File", href: "assets/Tableau_project.twb" },
      {
        label: "Delivery Dashboard",
        href:
          "https://public.tableau.com/app/profile/khush.domadiya5696/viz/Tableau_project_17699269588030/DB_Delivery_Performance?publish=yes"
      },
      {
        label: "Executive Overview",
        href:
          "https://public.tableau.com/app/profile/khush.domadiya5696/viz/Tableau_project_D1/DB_Executive_Overview?publish=yes"
      }
    ],
    kicker: "Dashboard / PMO"
  },

  {
    title: "PMO Project Pack — Scholarship Portal (Non-Profit)",
    summary:
      "End-to-end PMO artifact pack showing project planning, governance, risk, and delivery tracking.",
    highlights: [
      "Created charter, business case lite, stakeholder register + RACI, comms plan, RAID log, dependency tracker.",
      "Built integrated timeline (Gantt) and weekly status reporting templates.",
      "Demonstrates structured delivery from initiation through post-launch."
    ],
    tags: ["Project Charter", "RACI", "RAID", "Timeline", "Status Reporting"],
    links: [
      { label: "Project Background", href: "assets/PMO_Pack_Story_Background.pdf" },
      { label: "Project Charter", href: "assets/01_Project_Charter.pdf" },
      { label: "Business Case", href: "assets/02_Business_Case.pdf" },
      { label: "Stakeholder Register", href: "assets/03_Stakeholder_Register.pdf" },
      { label: "Communication Plan", href: "assets/04_Communication_Plan.pdf" },
      { label: "RAID Log", href: "assets/05_RAID_Log.xlsx" },
      { label: "Dependency Tracker", href: "assets/06_Dependency_Tracker.xlsx" },
      { label: "Integrated Timeline", href: "assets/07_Timeline_Gantt.pdf" },
      { label: "Status Template", href: "assets/08_Status_Report_Template.pdf" },
      { label: "Status Week 1", href: "assets/09_Status_Report_Week1.pdf" },
      { label: "Status Week 2", href: "assets/10_Status_Report_Week2.pdf" },
      { label: "Change Log", href: "assets/11_Change_Log.pdf" }
    ],
    kicker: "PMO Artifacts"
  },

  {
    title: "Onboarding / Wayfinding — Internship Project",
    summary:
      "Led MVP onboarding / navigation improvements to increase benefit visibility and reduce user friction.",
    highlights: [
      "Coordinated delivery in a hybrid agile workflow; ran sprint planning and stakeholder syncs.",
      "Maintained Jira/Confluence hygiene, supported QA/UAT, and tracked risks/dependencies.",
      "Delivered a streamlined onboarding experience focused on retention and clarity."
    ],
    tags: ["Jira", "Confluence", "AEM", "Figma", "Project Management"],
    links: [{ label: "Case Study", href: "assets/wayfinding case study.pdf" }],
    kicker: "Internship"
  },

  {
    title: "ACS Meetings App Research & Strategy — Internship Project",
    summary:
      "Researched attendee journey and competitor landscape; delivered recommendations to improve usability.",
    highlights: [
      "Conducted benchmarking, journey mapping, and thematic/affinity analysis.",
      "Identified pain points (navigation, onboarding, usability) and proposed actionable improvements.",
      "Delivered decision-ready insights through a clear case study and visuals."
    ],
    tags: ["User Research", "Journey Mapping", "Benchmarking", "Figma", "Strategy"],
    links: [{ label: "Case Study", href: "assets/ACS Meetings APP case study.pdf" }],
    kicker: "Internship"
  },

  {
    title: "NCDC Data MapReducing Project",
    summary:
      "Big data pipeline for processing NCDC weather records using Hadoop ecosystem tools.",
    highlights: [
      "Processed large historical datasets (temperature records) using MapReduce-style workflows.",
      "Demonstrated end-to-end extraction → processing → analysis approach.",
      "Documented outcomes and implementation in a public repo."
    ],
    tags: ["Hadoop", "MapReduce", "Spark", "Python", "Java"],
    links: [{ label: "GitHub", href: "https://github.com/Khush-domadia/NCDC-Map-Reducing-Project" }],
    kicker: "Big Data"
  },

  {
    title: "Data Modeling (Dimensional + ETL)",
    summary:
      "Repository of labs covering dimensional modeling, ETL workflows, and BI dashboards.",
    highlights: [
      "Built dimensional models and explored slowly changing dimensions concepts.",
      "Worked with ETL workflows and analytics outputs for reporting.",
      "Showcases data warehousing + BI fundamentals in one place."
    ],
    tags: ["AWS", "ETL", "Tableau", "Data Warehousing"],
    links: [{ label: "GitHub", href: "https://github.com/Khush-domadia/Data-Modeling" }],
    kicker: "Data / BI"
  }
];

/* ============
   Render helpers
   ============ */

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
};

function renderExperience() {
  const root = document.getElementById("experienceList");
  root.innerHTML = "";

  experience.forEach((x) => {
    const item = el("div", "xp-item");
    const dot = el("div", "xp-dot");

    const card = el("div", "xp-card");
    const top = el("div", "xp-top");

    top.appendChild(el("div", "xp-role", x.role));
    top.appendChild(el("div", "xp-org", `• ${x.org}`));
    top.appendChild(el("div", "xp-date", x.date));

    const ul = el("ul", "xp-bullets");
    (x.bullets || []).forEach((b) => {
      const li = el("li", "", b);
      ul.appendChild(li);
    });

    card.appendChild(top);
    card.appendChild(ul);

    item.appendChild(dot);
    item.appendChild(card);
    root.appendChild(item);
  });
}

function renderProjects(list) {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  list.forEach((p, idx) => {
    const card = el("article", "project-card");
    const body = el("div", "project-body");

    body.appendChild(el("h3", "project-title", p.title));
    body.appendChild(el("p", "project-desc", p.summary));

    const tags = el("div", "project-tags");
    (p.tags || []).slice(0, 6).forEach((t) => tags.appendChild(el("span", "tag", t)));
    body.appendChild(tags);

    const actions = el("div", "project-actions");
    const detailsBtn = el("button", "btn primary", "View details");
    detailsBtn.addEventListener("click", () => openModal(p));
    actions.appendChild(detailsBtn);

    // Optional “primary” link shown on card (keeps layout uniform)
    if (p.links && p.links.length) {
      const first = p.links[0];
      const a = el("a", "btn", first.label);
      a.href = first.href;
      a.target = "_blank";
      a.rel = "noopener";
      actions.appendChild(a);
    }

    body.appendChild(actions);
    card.appendChild(body);
    grid.appendChild(card);
  });
}

/* ============
   Modal logic (no layout shift)
   ============ */

const backdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("modalClose");

function openModal(project) {
  document.getElementById("modalKicker").textContent = project.kicker || "Project";
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalSummary").textContent = project.summary;

  const hl = document.getElementById("modalHighlights");
  hl.innerHTML = "";
  (project.highlights || []).forEach((h) => hl.appendChild(el("li", "", h)));

  const tags = document.getElementById("modalTags");
  tags.innerHTML = "";
  (project.tags || []).forEach((t) => tags.appendChild(el("span", "chip", t)));

  const links = document.getElementById("modalLinks");
  links.innerHTML = "";
  (project.links || []).forEach((l) => {
    const a = el("a", "btn", l.label);
    a.href = l.href;
    a.target = "_blank";
    a.rel = "noopener";
    links.appendChild(a);
  });

  backdrop.classList.add("open");
  backdrop.setAttribute("aria-hidden", "false");

  // Basic focus management
  closeBtn.focus();
  document.body.style.overflow = "hidden";
}

function closeModal() {
  backdrop.classList.remove("open");
  backdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeModal();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && backdrop.classList.contains("open")) closeModal();
});

/* ============
   Search
   ============ */

const search = document.getElementById("projectSearch");
search.addEventListener("input", () => {
  const q = search.value.trim().toLowerCase();
  if (!q) return renderProjects(projects);

  const filtered = projects.filter((p) => {
    const hay = [
      p.title,
      p.summary,
      (p.tags || []).join(" "),
      (p.kicker || "")
    ]
      .join(" ")
      .toLowerCase();

    return hay.includes(q);
  });

  renderProjects(filtered);
});

/* ============
   Init
   ============ */

document.getElementById("year").textContent = new Date().getFullYear();
renderExperience();
renderProjects(projects);

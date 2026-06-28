import "../styles/portfolio.css";

const PROJECTS = [
  {
    title:  "Linux Server Monitor System",
    desc:   "A real-time Linux server monitoring system that tracks CPU, memory, disk usage, and running processes. Built with shell scripting and a web dashboard for visualizing server health metrics.",
    tags:   ["Linux", "Bash", "Shell Scripting", "Monitoring", "DevOps"],
    status: "LIVE",
    link:   "https://github.com/naren-wwcd/linux-server-monitor",
  },
  {
    title:  "Banking System Backend",
    desc:   "A full-featured banking backend REST API built with Spring Boot. Supports account management, transactions, balance enquiry, and fund transfers with proper validation and error handling.",
    tags:   ["Spring Boot", "Java", "REST API", "MySQL", "CRUD"],
    status: "LIVE",
    link:   "https://github.com/naren-wwcd/banking",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <p className="section-label">03 — PROJECTS</p>
        <h2 className="section-heading">Selected Work</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div className="card" style={{ padding: "2rem" }}>
      {/* Header row */}
      <div
        style={{
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "flex-start",
          marginBottom:   "0.75rem",
          flexWrap:       "wrap",
          gap:            "0.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              color:      "var(--text-dark)",
              fontSize:   "0.8rem",
            }}
          >
            0{index + 1}
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize:   "1.3rem",
              color:      "var(--text-primary)",
              fontWeight: 700,
            }}
          >
            {project.title}
          </span>
        </div>

        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <span
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "0.7rem",
              color:         "var(--accent)",
              border:        "1px solid var(--accent)",
              borderRadius:  "var(--radius-sm)",
              padding:       "0.2rem 0.5rem",
              letterSpacing: "0.1em",
            }}
          >
            {project.status}
          </span>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily:    "var(--font-display)",
              fontSize:      "0.8rem",
              color:         "var(--accent)",
              textDecoration:"none",
              border:        "1px solid var(--border)",
              borderRadius:  "var(--radius-sm)",
              padding:       "0.2rem 0.75rem",
              transition:    "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          color:        "var(--text-muted)",
          lineHeight:   1.7,
          marginBottom: "1.25rem",
          fontSize:     "0.95rem",
        }}
      >
        {project.desc}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
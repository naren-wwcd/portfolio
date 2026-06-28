import { useFadeUp } from "../hooks/useFadeUp";
import "../styles/portfolio.css";

const PROJECTS = [
  {
    title:  "Banking Management Backend System",
    desc:   "A production-ready RESTful backend supporting full ATM and core banking operations. Built with Java and Spring Boot, featuring account creation, balance inquiry, deposit, withdrawal, and fund transfer endpoints following REST best practices. Clean MVC architecture with MySQL for persistent relational data storage.",
    tags:   ["Java", "Spring Boot", "MySQL", "REST APIs", "MVC"],
    status: "LIVE",
    link:   "https://github.com/naren-wwcd/banking",
  },
  {
    title:  "Linux Server Monitor System",
    desc:   "A real-time Linux server monitoring system that tracks CPU, memory, disk usage, and running processes. Built with shell scripting and a web dashboard for visualizing server health metrics.",
    tags:   ["Linux", "Bash", "Shell Scripting", "Monitoring", "DevOps"],
    status: "LIVE",
    link:   "https://github.com/naren-wwcd/linux-server-monitor",
  },
  {
    title:  "SecureWipe — E-Waste Reduction Tool",
    desc:   "A command-line data-wiping utility to securely erase hardware before disposal, enabling safe reuse and reducing premature hardware retirement. Implements a multi-pass overwrite algorithm in Python ensuring complete and irreversible data destruction. Integrating a blockchain audit layer for tamper-proof wiping logs.",
    tags:   ["Python", "Blockchain", "CLI", "Security", "In Progress"],
    status: "WIP",
    link:   "https://github.com/naren-wwcd",
  },
];

function ProjectCard({ project, index }) {
  const ref = useFadeUp();
  const isWip = project.status === "WIP";

  return (
    <div ref={ref} className="card fade-up" style={{ padding: "2rem" }}>
      <div
        style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start", marginBottom: "0.75rem",
          flexWrap: "wrap", gap: "0.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-dark)", fontSize: "0.8rem" }}>
            0{index + 1}
          </span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--text-primary)", fontWeight: 700 }}>
            {project.title}
          </span>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: "0.7rem",
            color:      isWip ? "#f59e0b" : "var(--accent)",
            border:     `1px solid ${isWip ? "#f59e0b" : "var(--accent)"}`,
            borderRadius: "var(--radius-sm)", padding: "0.2rem 0.5rem", letterSpacing: "0.1em",
          }}>
            {project.status}
          </span>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-display)", fontSize: "0.8rem", color: "var(--accent)",
              textDecoration: "none", border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)", padding: "0.2rem 0.75rem", transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
        {project.desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag">#{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const refLabel   = useFadeUp();
  const refHeading = useFadeUp();

  return (
    <section id="projects">
      <div className="section-inner">
        <p ref={refLabel} className="section-label fade-up">03 — PROJECTS</p>
        <h2 ref={refHeading} className="section-heading fade-up delay-1">Selected Work</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
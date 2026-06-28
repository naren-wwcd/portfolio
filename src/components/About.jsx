import { useFadeUp } from "../hooks/useFadeUp";
import "../styles/portfolio.css";

const HIGHLIGHTS = [
  { label: "RHCSA Certified",       sub: "Red Hat Certified System Administrator" },
  { label: "Full Stack Dev",        sub: "React · Spring Boot · MySQL"            },
  { label: "DevOps Mindset",        sub: "Docker · CI/CD · Linux · Git"           },
  { label: "Education",             sub: "B.E. CSE · Sri Sairam Institute · CGPA 8.44" },
];

const ACHIEVEMENTS = [
  { icon: "⚡", text: "60+ problems solved on LeetCode — Arrays, Strings, Linked Lists" },
  { icon: "🏆", text: "3rd Prize — Solveathon college-level hackathon" },
];

export default function About() {
  const refLabel  = useFadeUp();
  const refLeft   = useFadeUp();
  const refRight  = useFadeUp();
  const refAch    = useFadeUp();

  return (
    <section id="about">
      <div className="section-inner">
        <p ref={refLabel} className="section-label fade-up">01 — ABOUT</p>

        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "4rem",
            alignItems:          "start",
          }}
        >
          {/* Left — bio */}
          <div ref={refLeft} className="fade-up delay-1">
            <h2
              style={{
                fontFamily:   "var(--font-display)",
                fontSize:     "2.2rem",
                color:        "var(--text-primary)",
                fontWeight:   700,
                marginBottom: "1.5rem",
                lineHeight:   1.2,
              }}
            >
              Building at the intersection of code &amp; infrastructure
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
              Computer Science undergraduate at Sri Sairam Institute of Technology,
              Chennai (CGPA 8.44), with proven backend engineering skills. Built a
              production-ready banking REST API using Java, Spring Boot, and MySQL.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Holding an{" "}
              <span style={{ color: "var(--accent)" }}>RHCSA certification</span>,
              I'm deeply comfortable with Linux environments, shell scripting, and
              system administration — skills I actively bring into my development workflow.
            </p>

            {/* Achievements */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {ACHIEVEMENTS.map(({ icon, text }) => (
                <div
                  key={text}
                  style={{
                    display:      "flex",
                    alignItems:   "flex-start",
                    gap:          "0.75rem",
                    background:   "var(--accent-dim)",
                    border:       "1px solid var(--accent-mid)",
                    borderRadius: "var(--radius-md)",
                    padding:      "0.75rem 1rem",
                  }}
                >
                  <span style={{ fontSize: "1rem", marginTop: "1px" }}>{icon}</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — highlight cards */}
          <div ref={refRight} className="fade-up delay-2" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {HIGHLIGHTS.map(({ label, sub }) => (
              <div
                key={label}
                style={{
                  border:       "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding:      "1.2rem 1.5rem",
                  background:   "var(--bg-card-hover)",
                }}
              >
                <div style={{ fontFamily: "var(--font-display)", color: "var(--accent)", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.25rem" }}>
                  {label}
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
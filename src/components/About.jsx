import { useFadeUp } from "../hooks/useFadeUp";
import "../styles/portfolio.css";

const HIGHLIGHTS = [
  { label: "RHCSA Certified",  sub: "Red Hat Certified System Administrator" },
  { label: "Full Stack Dev",   sub: "React · Spring Boot · MySQL"            },
  { label: "DevOps Mindset",   sub: "Docker · CI/CD · Linux Automation"      },
];

export default function About() {
  const refLabel = useFadeUp();
  const refLeft  = useFadeUp();
  const refRight = useFadeUp();

  return (
    <section id="about">
      <div className="section-inner">
        <p ref={refLabel} className="section-label fade-up">01 — ABOUT</p>

        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "4rem",
            alignItems:          "center",
          }}
        >
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
              I'm a developer with hands-on experience across the full stack —
              from crafting React interfaces to engineering Spring Boot services.
              My passion lies in DevOps: automating deployments, managing Linux
              systems, and making software delivery faster and more reliable.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
              Holding an{" "}
              <span style={{ color: "var(--accent)" }}>RHCSA certification</span>,
              I'm deeply comfortable with Red Hat Enterprise Linux environments,
              scripting, and system administration — skills I actively bring into
              my development workflow.
            </p>
          </div>

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
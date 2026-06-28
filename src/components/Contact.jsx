import { useFadeUp } from "../hooks/useFadeUp";
import "../styles/portfolio.css";

const CONTACTS = [
  {
    label: "Email",
    value: "narenwwcd@gmail.com",
    href:  "mailto:narenwwcd@gmail.com",
    icon:  "✉",
  },
  {
    label: "Phone",
    value: "+91 9444297878",
    href:  "tel:+919444297878",
    icon:  "📞",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/narendran-d",
    href:  "http://www.linkedin.com/in/narendran-d",
    icon:  "💼",
  },
  {
    label: "GitHub",
    value: "github.com/naren-wwcd",
    href:  "https://github.com/naren-wwcd",
    icon:  "⌥",
  },
  {
    label: "Location",
    value: "Chennai, Tamil Nadu",
    href:  null,
    icon:  "📍",
  },
];

export default function Contact() {
  const refLabel = useFadeUp();
  const refHead  = useFadeUp();
  const refCards = useFadeUp();

  return (
    <section id="contact">
      <div className="section-inner" style={{ paddingBottom: "8rem" }}>
        <p ref={refLabel} className="section-label fade-up">04 — CONTACT</p>

        <h2
          ref={refHead}
          className="fade-up delay-1"
          style={{
            fontFamily:   "var(--font-display)",
            fontSize:     "2rem",
            color:        "var(--text-primary)",
            fontWeight:   700,
            marginBottom: "0.75rem",
          }}
        >
          Let's build something together
        </h2>
        <p
          className="fade-up delay-1"
          style={{
            color:        "var(--text-muted)",
            lineHeight:   1.75,
            marginBottom: "2.5rem",
            maxWidth:     "500px",
          }}
        >
          Open to full-stack development roles, DevOps positions, and
          interesting projects. Reach out through any of the channels below.
        </p>

        <div
          ref={refCards}
          className="fade-up delay-2"
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap:                 "1rem",
            maxWidth:            "640px",
          }}
        >
          {CONTACTS.map(({ label, value, href, icon }) => (
            <div
              key={label}
              className="card"
              style={{ padding: "1.4rem 1.6rem", display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{icon}</span>
              <div>
                <div
                  style={{
                    fontFamily:   "var(--font-mono)",
                    color:        "var(--accent)",
                    fontSize:     "0.72rem",
                    letterSpacing:"0.15em",
                    textTransform:"uppercase",
                    marginBottom: "0.2rem",
                  }}
                >
                  {label}
                </div>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                      fontFamily:     "var(--font-body)",
                      color:          "var(--text-primary)",
                      fontSize:       "0.9rem",
                      textDecoration: "none",
                      transition:     "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  >
                    {value}
                  </a>
                ) : (
                  <span style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)", fontSize: "0.9rem" }}>
                    {value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
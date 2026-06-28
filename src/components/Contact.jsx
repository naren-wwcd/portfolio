import { useState } from "react";
import "../styles/portfolio.css";

const SOCIAL_LINKS = [
  { label: "GitHub",   href: "https://github.com/naren-wwcd"                   },
  { label: "LinkedIn", href: "http://www.linkedin.com/in/narendran-d"           },
  { label: "Email",    href: "mailto:narenwwcd@gmail.com"                       },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSend = () => {
    const { name, email, message } = form;
    if (!name || !email || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body    = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:narenwwcd@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact">
      <div className="section-inner" style={{ paddingBottom: "8rem" }}>
        <p className="section-label">04 — CONTACT</p>

        <div
          style={{
            border:       "1px solid var(--border)",
            borderRadius: "12px",
            padding:      "3rem",
            background:   "var(--bg-card-hover)",
          }}
        >
          <h2
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
            style={{
              color:        "var(--text-muted)",
              lineHeight:   1.75,
              marginBottom: "2rem",
              maxWidth:     "500px",
            }}
          >
            Open to full-stack development roles, DevOps positions, and
            interesting projects. Drop a message and I'll get back to you.
          </p>

          {/* Form */}
          <div
            style={{
              display:       "flex",
              flexDirection: "column",
              gap:           "1rem",
              maxWidth:      "480px",
            }}
          >
            <input
              className="form-input"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              className="form-input"
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              className="form-input"
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              style={{ resize: "vertical" }}
            />
            <button
              className="btn-primary"
              onClick={handleSend}
              style={{ alignSelf: "flex-start" }}
            >
              Send Message →
            </button>
          </div>

          {/* Social links */}
          <div
            style={{
              marginTop:   "2.5rem",
              paddingTop:  "2rem",
              borderTop:   "1px solid var(--border)",
              display:     "flex",
              gap:         "2rem",
              flexWrap:    "wrap",
            }}
          >
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  fontFamily:     "var(--font-display)",
                  fontSize:       "0.875rem",
                  color:          "var(--text-muted)",
                  textDecoration: "none",
                  letterSpacing:  "0.05em",
                  transition:     "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
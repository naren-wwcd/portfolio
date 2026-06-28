import { useState, useEffect } from "react";
import "../styles/portfolio.css";

const NAV_LINKS = [
  { label: "Home",     id: "home"     },
  { label: "About",    id: "about"    },
  { label: "Skills",   id: "skills"   },
  { label: "Projects", id: "projects" },
  { label: "Contact",  id: "contact"  },
];

export default function Navbar() {
  const [active, setActive]   = useState("home");
  const [scrolled, setScrolled] = useState(false);

  /* ── Highlight nav based on scroll position ── */
  useEffect(() => {
    const observers = [];

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position:       "fixed",
        top:            0,
        left:           0,
        right:          0,
        zIndex:         100,
        background:     scrolled ? "rgba(10,15,30,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)"          : "none",
        borderBottom:   scrolled ? "1px solid var(--border)" : "none",
        transition:     "all 0.3s ease",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "flex-end",
        padding:        "0 2.5rem",
        height:         "64px",
      }}
    >
      <div style={{ display: "flex", gap: "2rem" }}>
        {NAV_LINKS.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(e, id)}
            style={{
              fontFamily:     "var(--font-display)",
              fontSize:       "0.875rem",
              letterSpacing:  "0.08em",
              color:          active === id ? "var(--accent)" : "var(--text-muted)",
              textDecoration: "none",
              textTransform:  "uppercase",
              transition:     "color 0.2s",
              fontWeight:     active === id ? 600 : 400,
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
import { useFadeUp } from "../hooks/useFadeUp";
import "../styles/portfolio.css";

const SKILLS = [
  { category: "Languages",       items: ["Java", "Python", "C"] },
  { category: "Frontend",        items: ["React", "HTML5", "CSS3", "JavaScript"] },
  { category: "Backend & APIs",  items: ["Spring Boot", "REST APIs", "MySQL", "Postman", "MVC"] },
  { category: "DevOps & Linux",  items: ["Docker", "Git", "GitHub", "Shell Scripting", "CI/CD"] },
  { category: "CS Concepts",     items: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"] },
  { category: "Certifications",  items: ["RHCSA Certified"] },
];

export default function Skills() {
  const refLabel   = useFadeUp();
  const refHeading = useFadeUp();
  const refGrid    = useFadeUp();

  return (
    <section id="skills">
      <div className="section-inner">
        <p ref={refLabel} className="section-label fade-up">02 — SKILLS</p>
        <h2 ref={refHeading} className="section-heading fade-up delay-1">Tech Stack</h2>

        <div
          ref={refGrid}
          className="fade-up delay-2"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}
        >
          {SKILLS.map(({ category, items }) => (
            <div key={category} className="card" style={{ padding: "1.8rem" }}>
              <div
                style={{
                  fontFamily:    "var(--font-display)",
                  color:         "var(--accent)",
                  fontSize:      "0.8rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom:  "1rem",
                }}
              >
                {category}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {items.map((item) => (
                  <span key={item} className="skill-badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
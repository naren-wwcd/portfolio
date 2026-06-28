import "../styles/portfolio.css";

const SKILLS = [
  {
    category: "Frontend",
    items:    ["React", "JavaScript", "HTML/CSS", "Tailwind"],
  },
  {
    category: "Backend",
    items:    ["Spring Boot", "Java", "REST APIs", "MySQL"],
  },
  {
    category: "DevOps & Linux",
    items:    ["Docker", "CI/CD", "Git", "Ansible", "Bash Scripting"],
  },
  {
    category: "Certifications",
    items:    ["RHCSA Certified"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <p className="section-label">02 — SKILLS</p>
        <h2 className="section-heading">Tech Stack</h2>

        <div
          style={{
            display:               "grid",
            gridTemplateColumns:   "repeat(2, 1fr)",
            gap:                   "1.25rem",
          }}
        >
          {SKILLS.map(({ category, items }) => (
            <SkillCard key={category} category={category} items={items} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, items }) {
  return (
    <div
      className="card"
      style={{ padding: "1.8rem", position: "relative", overflow: "hidden" }}
    >
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
          <span key={item} className="skill-badge">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
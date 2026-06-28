import { useState, useEffect } from "react";
import { useFadeUp } from "../hooks/useFadeUp";
import "../styles/portfolio.css";

const TYPEWRITER_STRINGS = [
  "Full Stack Developer",
  "DevOps Enthusiast",
  "RHCSA Certified Engineer",
  "Linux Power User",
];

function useTypewriter(strings, speed = 80, pause = 1800) {
  const [text, setText]         = useState("");
  const [strIdx, setStrIdx]     = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[strIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setText(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setStrIdx((s) => (s + 1) % strings.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, strIdx, strings, speed, pause]);

  return text;
}

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  const typed   = useTypewriter(TYPEWRITER_STRINGS);
  const refTag  = useFadeUp();
  const refName = useFadeUp();
  const refType = useFadeUp();
  const refDesc = useFadeUp();
  const refBtns = useFadeUp();

  return (
    <section
      id="home"
      style={{
        minHeight:      "100vh",
        display:        "flex",
        flexDirection:  "column",
        justifyContent: "center",
        padding:        "0 2.5rem",
        maxWidth:       "var(--max-w)",
        margin:         "0 auto",
      }}
    >
      <p
        ref={refTag}
        className="fade-up"
        style={{
          fontFamily:    "var(--font-display)",
          color:         "var(--accent)",
          fontSize:      "0.9rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom:  "1rem",
        }}
      >
        $ whoami
      </p>

      <h1
        ref={refName}
        className="fade-up delay-1"
        style={{
          fontFamily:    "var(--font-display)",
          fontWeight:    800,
          fontSize:      "clamp(2.8rem, 7vw, 5.5rem)",
          color:         "var(--text-primary)",
          lineHeight:    1.05,
          marginBottom:  "1.2rem",
          letterSpacing: "-0.02em",
        }}
      >
        Narendran A
      </h1>

      <div
        ref={refType}
        className="fade-up delay-2"
        style={{
          display:      "flex",
          alignItems:   "center",
          gap:          "0.6rem",
          marginBottom: "1.8rem",
          minHeight:    "2.5rem",
        }}
      >
        <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "1.4rem" }}>
          &gt;
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize:   "clamp(1.1rem, 2.5vw, 1.6rem)",
            color:      "var(--text-muted)",
            fontWeight: 500,
          }}
        >
          {typed}
          <span style={{ color: "var(--accent)", animation: "blink 1s step-end infinite" }}>_</span>
        </span>
      </div>

      <p
        ref={refDesc}
        className="fade-up delay-3"
        style={{
          fontFamily:   "var(--font-body)",
          color:        "var(--text-muted)",
          fontSize:     "1.05rem",
          lineHeight:   1.75,
          maxWidth:     "560px",
          marginBottom: "2.5rem",
        }}
      >
        I build robust web applications and automate infrastructure. Bridging
        the gap between development and operations — one pipeline at a time.
      </p>

      <div
        ref={refBtns}
        className="fade-up delay-4"
        style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
      >
        <button className="btn-primary" onClick={() => scrollTo("projects")}>
          View Projects
        </button>
        <button className="btn-outline" onClick={() => scrollTo("contact")}>
          Contact Me
        </button>
        {/* Resume download — place your resume.pdf in the public/ folder */}
        <a
          href="/resume.pdf"
          download="Narendran_A_Resume.pdf"
          className="btn-outline"
          style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
        >
          ↓ Resume
        </a>
      </div>
    </section>
  );
}
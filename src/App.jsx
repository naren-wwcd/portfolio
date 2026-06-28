import "./styles/portfolio.css";
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Skills   from "./components/Skills";
import Projects from "./components/Projects";
import Contact  from "./components/Contact";

export default function App() {
  return (
    <>
      {/* Fixed ambient dot-grid background */}
      <div className="dot-grid" />

      {/* Sticky nav */}
      <Navbar />

      {/* Page content — all sections stacked */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        © 2026 Narendran A · Built with React &amp; Vite
      </footer>
    </>
  );
}
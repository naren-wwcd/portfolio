import { useState, useEffect } from "react";
import "../styles/portfolio.css";

export default function ScrollUtils() {
  const [progress, setProgress]       = useState(0);
  const [showTop, setShowTop]         = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled  = window.scrollY;
      const total     = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
      setShowTop(scrolled > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
      />

      {/* Back to top button */}
      <button
        className={`back-to-top ${showTop ? "" : "hidden"}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}
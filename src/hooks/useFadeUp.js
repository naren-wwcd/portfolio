import { useEffect, useRef } from "react";

/**
 * Attach this ref to any element you want to fade-up on scroll.
 * Optionally pass a delay class: "delay-1", "delay-2", "delay-3", "delay-4"
 *
 * Usage:
 *   const ref = useFadeUp();
 *   <div ref={ref} className="fade-up"> ... </div>
 */
export function useFadeUp(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el); // animate once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (options = { threshold: 0.2 }) => {
  const ref = useRef(null);
  const supportsObserver = typeof window !== "undefined" && typeof IntersectionObserver !== "undefined";
  const [inView, setInView] = useState(() => {
    if (!supportsObserver) return true;
    return false;
  });

  useEffect(() => {
    if (!ref.current) return;
    if (!supportsObserver) return;
    let timeoutId = null;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(ref.current);
    // Fallback: avoid permanently hidden content if observer never fires.
    timeoutId = setTimeout(() => setInView(true), 1000);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [options, supportsObserver]);

  return { ref, inView };
};

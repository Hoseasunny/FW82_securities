import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = ({
  threshold = 0.2,
  rootMargin = "-12% 0px -12% 0px",
  once = false
} = {}) => {
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
        if (once) observer.disconnect();
      } else if (!once) {
        setInView(false);
      }
    }, { threshold, rootMargin });

    observer.observe(ref.current);
    timeoutId = setTimeout(() => setInView(true), 1000);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [once, rootMargin, supportsObserver, threshold]);

  return { ref, inView };
};

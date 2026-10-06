import { useEffect, useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useReducedMotionSafe } from "../../hooks/useReducedMotionSafe";

export const CountUp = ({ value, suffix = "", duration = 1200 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useScrollAnimation({ once: true });
  const reducedMotion = useReducedMotionSafe();

  useEffect(() => {
    if (!inView) return undefined;
    if (reducedMotion) return undefined;

    let frame = 0;
    let startTime;
    const animate = (time) => {
      if (startTime === undefined) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.round(value * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [duration, inView, reducedMotion, value]);
  const displayedCount = reducedMotion && inView ? value : count;

  return (
    <span ref={ref} className="text-3xl font-heading font-bold text-gold md:text-4xl">
      {displayedCount}
      {suffix}
    </span>
  );
};

export const AnimatedCounter = CountUp;

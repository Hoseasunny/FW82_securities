import { useEffect, useState } from "react";

export const CountUp = ({ value, suffix = "", duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.max(1, Math.floor(value / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span className="text-3xl font-heading font-bold text-gold md:text-4xl">
      {count}
      {suffix}
    </span>
  );
};

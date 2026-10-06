import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useReducedMotionSafe } from "../../hooks/useReducedMotionSafe";

export const RevealHeading = ({ text, className = "" }) => {
  const { ref, inView } = useScrollAnimation({ threshold: 0.3, once: false });
  const reducedMotion = useReducedMotionSafe();
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 18, filter: "blur(5px)" }}
          animate={inView
            ? (reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" })
            : (reducedMotion ? { opacity: 0 } : { opacity: 0, y: -24, filter: "blur(5px)" })}
          transition={reducedMotion
            ? { duration: 0.16 }
            : { type: "spring", stiffness: 120, damping: 18, delay: inView ? index * 0.05 : 0 }}
          className={`inline-block ${index < words.length - 1 ? "mr-[0.25em]" : ""}`}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

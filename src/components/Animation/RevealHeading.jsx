import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const RevealHeading = ({ text, className = "" }) => {
  const { ref, inView } = useScrollAnimation({ threshold: 0.3 });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className={`inline-block ${index < words.length - 1 ? "mr-[0.25em]" : ""}`}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

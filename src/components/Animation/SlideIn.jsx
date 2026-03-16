import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const SlideIn = ({ children, direction = "left", delay = 0, className = "" }) => {
  const { ref, inView } = useScrollAnimation();
  const x = direction === "left" ? -30 : 30;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

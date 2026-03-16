import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const FadeIn = ({ children, delay = 0, className = "" }) => {
  const { ref, inView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

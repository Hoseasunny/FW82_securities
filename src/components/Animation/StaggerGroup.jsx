import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useReducedMotionSafe } from "../../hooks/useReducedMotionSafe";

export const StaggerGroup = ({
  children,
  className = "",
  stagger = 0.14,
  delay = 0.08
}) => {
  const { ref, inView } = useScrollAnimation();
  const reducedMotion = useReducedMotionSafe();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  const item = {
    hidden: reducedMotion
      ? { opacity: 0 }
      : { opacity: 0, y: -24, scale: 0.96, filter: "blur(5px)" },
    show: reducedMotion
      ? { opacity: 1, transition: { duration: 0.16 } }
      : {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { type: "spring", stiffness: 120, damping: 18 }
        }
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children &&
        Array.from(children).map((child, index) => (
          <motion.div key={`stagger-item-${index}`} variants={item}>
            {child}
          </motion.div>
        ))}
    </motion.div>
  );
};

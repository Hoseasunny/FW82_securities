import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const StaggerGroup = ({
  children,
  className = "",
  stagger = 0.08,
  delay = 0.05
}) => {
  const { ref, inView } = useScrollAnimation();

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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

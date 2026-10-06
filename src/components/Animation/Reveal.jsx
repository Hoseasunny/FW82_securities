import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useReducedMotionSafe } from "../../hooks/useReducedMotionSafe";

const variants = {
  rise: { hidden: { opacity: 0, y: 36, scale: 0.98, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } },
  left: { hidden: { opacity: 0, x: -42, filter: "blur(5px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)" } },
  right: { hidden: { opacity: 0, x: 42, filter: "blur(5px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)" } },
  card: { hidden: { opacity: 0, y: 40, scale: 0.94, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } }
};

export const Reveal = ({
  variant = "rise",
  delay = 0,
  once = false,
  className = "",
  children,
  ...props
}) => {
  const { ref, inView } = useScrollAnimation({ once });
  const reducedMotion = useReducedMotionSafe();
  const animation = variants[variant] || variants.rise;
  const initial = reducedMotion ? { opacity: 0 } : animation.hidden;
  const visible = reducedMotion ? { opacity: 1 } : animation.visible;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? visible : initial}
      transition={reducedMotion
        ? { duration: 0.18, delay }
        : { type: "spring", stiffness: 120, damping: 18, delay }}
      className={className}
      data-reveal-state={inView ? "visible" : "hidden"}
      {...props}
    >
      {children}
    </motion.div>
  );
};

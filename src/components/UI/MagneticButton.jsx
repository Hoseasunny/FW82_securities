import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotionSafe } from "../../hooks/useReducedMotionSafe";

export const MagneticButton = ({ children, className = "" }) => {
  const reducedMotion = useReducedMotionSafe();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 120, damping: 18 });
  const y = useSpring(pointerY, { stiffness: 120, damping: 18 });

  const handlePointerMove = (event) => {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(Math.max(-6, Math.min(6, ((event.clientX - bounds.left) / bounds.width - 0.5) * 12)));
    pointerY.set(Math.max(-6, Math.min(6, ((event.clientY - bounds.top) / bounds.height - 0.5) * 12)));
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.span
      className={`inline-flex ${className}`}
      style={reducedMotion ? undefined : { x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      {children}
    </motion.span>
  );
};

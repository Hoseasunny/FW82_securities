import { useReducedMotion } from "framer-motion";

export const useReducedMotionSafe = () => Boolean(useReducedMotion());

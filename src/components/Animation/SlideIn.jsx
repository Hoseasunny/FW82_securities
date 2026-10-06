import { Reveal } from "./Reveal";

export const SlideIn = ({ children, direction = "left", delay = 0, className = "" }) => {
  return (
    <Reveal
      variant={direction}
      delay={delay}
      className={className}
    >
      {children}
    </Reveal>
  );
};

import { Reveal } from "./Reveal";

export const FadeIn = ({ children, delay = 0, className = "" }) => {
  return (
    <Reveal
      variant="rise"
      delay={delay}
      className={className}
    >
      {children}
    </Reveal>
  );
};

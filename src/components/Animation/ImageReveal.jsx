import { Reveal } from "./Reveal";

export const ImageReveal = ({ children, className = "" }) => {
  return (
    <Reveal variant="card" className={`relative ${className}`.trim()}>
      {children}
    </Reveal>
  );
};

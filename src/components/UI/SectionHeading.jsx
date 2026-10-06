import { Reveal } from "../Animation/Reveal";

export const SectionHeading = ({
  title,
  subtitle,
  align = "left",
  className = ""
}) => (
  <Reveal variant="rise" className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
    {subtitle && <p className="section-heading-kicker mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">{subtitle}</p>}
    <h2 className="section-heading-text text-3xl font-heading font-semibold leading-tight text-ink md:text-4xl">
      <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">{title}</span>
    </h2>
  </Reveal>
);
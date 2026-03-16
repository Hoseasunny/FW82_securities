export const SectionHeader = ({ title, subtitle, align = "left" }) => {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">{subtitle}</p>
      <h2 className="mt-3 text-3xl font-heading font-semibold text-ink md:text-4xl">
        {title}
      </h2>
    </div>
  );
};

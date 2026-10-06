import { GlassCard } from "./GlassCard";

export const AlternatingCard = ({
  index = 0,
  className = "",
  icon: Icon,
  iconSize = "h-6 w-6",
  children
}) => {
  const iconLeft = index % 2 === 0;

  return (
    <GlassCard
      as="article"
      interactive
      className={`border-white/90 p-6 text-ink shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift ${className}`}
      style={{ borderRadius: "1.5rem" }}
    >
      {Icon ? (
        <div
          className={`security-icon-float absolute -top-2 rounded-2xl border border-white/90 bg-gradient-to-br from-sky-700 to-indigo-600 p-3 text-white shadow-soft ${iconLeft ? "-left-2" : "-right-2"}`}
        >
          <Icon className={iconSize} />
        </div>
      ) : null}
      <div className={iconLeft ? "pl-10" : "pr-10"}>{children}</div>
    </GlassCard>
  );
};

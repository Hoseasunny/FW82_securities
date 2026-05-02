export const AlternatingCard = ({
  index = 0,
  tone = "mono",
  className = "",
  icon: Icon,
  iconSize = "h-6 w-6",
  children
}) => {
  const isDark = index % 2 === 1;
  const iconLeft = index % 2 === 0;

  const palette =
    tone === "red-black"
      ? {
          card: isDark ? "border-white/20 bg-[#050505] text-white" : "border-gold/80 bg-gold text-white",
          badge: isDark ? "border-white/20 bg-gold text-white" : "border-gold/80 bg-black text-white"
        }
      : {
          card: isDark ? "border-white/25 bg-[#050505] text-white" : "border-navy/90 bg-white text-ink",
          badge: isDark ? "border-white/25 bg-gold text-white" : "border-navy/85 bg-navy text-white"
        };

  return (
    <div
      className={`relative border-2 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift ${palette.card} ${className}`}
      style={{ borderRadius: isDark ? "0 30px 0 30px" : "30px 0 30px 0" }}
    >
      {Icon ? (
        <div
          className={`absolute -top-2 border-2 p-3 ${iconLeft ? "-left-2 rounded-br-2xl" : "-right-2 rounded-bl-2xl"} ${palette.badge}`}
        >
          <Icon className={iconSize} />
        </div>
      ) : null}
      <div className={iconLeft ? "pl-10" : "pr-10"}>{children}</div>
    </div>
  );
};

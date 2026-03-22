import { Link } from "react-router-dom";

export const Breadcrumbs = ({
  items,
  className = "",
  textClassName = "text-slate/70",
  linkClassName = "hover:text-gold"
}) => {
  if (!items?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={`flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] ${textClassName}`}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.to && !isLast ? (
                <Link to={item.to} className={linkClassName}>
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-gold" : ""}>{item.label}</span>
              )}
              {!isLast && <span className="text-current/60">{">"}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const InlineLink = ({
  to,
  href,
  as,
  className = "",
  children,
  ...props
}) => {
  const Component = as || (to ? Link : "a");
  const linkProps = Component === Link ? { to } : { href };

  return (
    <Component
      {...linkProps}
      {...props}
      className={[
        "group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="relative">
        <span>{children}</span>
        <span className="absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
      </span>
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </Component>
  );
};

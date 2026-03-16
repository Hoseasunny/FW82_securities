const variants = {
  primary: "bg-gold text-navy hover:brightness-110",
  secondary: "border border-gold text-gold hover:bg-gold hover:text-navy",
  dark: "bg-navy text-white hover:bg-security"
};

export const Button = ({
  as: Component = "button",
  variant = "primary",
  className,
  loading = false,
  children,
  ...props
}) => {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition duration-300 focus-ring hover:scale-[1.02]",
    variants[variant],
    loading ? "btn-loading" : "",
    className || ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      className={classes}
      {...props}
    >
      {children}
    </Component>
  );
};

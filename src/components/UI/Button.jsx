import React from "react";

const variants = {
  primary: "bg-gold text-white hover:bg-alert",
  secondary: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  dark: "bg-navy text-white hover:bg-security"
};

export const Button = ({
  as = "button",
  variant = "primary",
  className,
  loading = false,
  children,
  ...props
}) => {
  const classes = [
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-heading font-semibold uppercase tracking-wide transition duration-300 focus-ring hover:scale-[1.02]",
    variants[variant],
    loading ? "btn-loading" : "",
    className || ""
  ]
    .filter(Boolean)
    .join(" ");

  return React.createElement(
    as,
    { className: classes, ...props },
    children
  );
};

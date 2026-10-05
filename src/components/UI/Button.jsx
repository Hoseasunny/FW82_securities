import React from "react";

const variants = {
  primary: "glass-button-primary",
  secondary: "glass-button-ghost",
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
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-heading font-semibold uppercase tracking-wide transition duration-300 focus-ring",
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

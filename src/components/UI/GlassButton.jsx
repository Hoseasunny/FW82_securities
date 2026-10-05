import React from "react";

const variants = {
  primary: "glass-button-primary",
  ghost: "glass-button-ghost"
};

export const GlassButton = ({
  as = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) =>
  React.createElement(
    as,
    {
      className: `glass-button ${variants[variant] || variants.primary} ${className}`,
      ...props
    },
    children
  );
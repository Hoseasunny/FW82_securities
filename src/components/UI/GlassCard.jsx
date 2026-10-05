import React from "react";

export const GlassCard = ({
  as: Element = "div",
  className = "",
  interactive = false,
  children,
  ...props
}) => {
  const handlePointerMove = (event) => {
    if (!interactive || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    event.currentTarget.style.setProperty("--tilt-x", `${(0.5 - y) * 18}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${(x - 0.5) * 18}deg`);
    event.currentTarget.style.setProperty("--spot-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--spot-y", `${y * 100}%`);
  };

  const resetTilt = (event) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  return React.createElement(
    Element,
    {
      className: `glass-card ${interactive ? "glass-card-tilt" : ""} ${className}`,
      onPointerMove: handlePointerMove,
      onPointerLeave: resetTilt,
      ...props
    },
    children
  );
};
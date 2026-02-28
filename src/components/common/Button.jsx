import React from "react";
import { cn } from "../../utils/helpers";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) => {
  const baseClasses =
    "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primaryDark focus:ring-primary",
    danger: "bg-danger text-white hover:bg-dangerDark focus:ring-danger",
    outline:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    ghost: "bg-transparent text-primary hover:bg-primary/10 focus:ring-primary",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";
import { cn } from "../../utils/helpers";

const StatsCard = ({
  title,
  value,
  icon,
  bgColor = "bg-white",
  textColor = "text-gray-800",
  className = "",
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl shadow-lg p-6 transition-all duration-300",
        bgColor,
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <p
            className={cn(
              "text-sm font-medium",
              textColor === "text-gray-800" ? "text-gray-600" : "text-gray-300",
            )}
          >
            {title}
          </p>
          <p className={cn("text-2xl font-bold mt-1", textColor)}>{value}</p>
        </div>
        <div
          className={cn(
            "text-3xl",
            textColor === "text-gray-800" ? "text-primary" : "text-white",
          )}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

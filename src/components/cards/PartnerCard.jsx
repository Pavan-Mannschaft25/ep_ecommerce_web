import React from "react";
import { cn } from "../../utils/helpers";
import Button from "../common/Button";

const PartnerCard = ({
  title,
  description,
  icon,
  bgColor = "bg-white",
  textColor = "text-gray-800",
  onClick,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer",
        bgColor,
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl mb-4 text-primary">{icon}</div>
        <h3 className={cn("text-xl font-bold mb-2", textColor)}>{title}</h3>
        <p
          className={cn(
            "text-sm mb-4",
            textColor === "text-gray-800" ? "text-gray-600" : "text-gray-300",
          )}
        >
          {description}
        </p>
        <Button variant="primary" size="sm">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default PartnerCard;

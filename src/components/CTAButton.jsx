// components/CTAButton.jsx
import React from "react";
import { motion } from "framer-motion";

const CTAButton = ({ text, to, primary = false, icon, onClick }) => {
  const buttonClass = primary
    ? "bg-green-600 text-white"
    : "border-2 border-white text-white hover:bg-white hover:text-green-600";

  return (
    <motion.a
      href={to}
      onClick={onClick}
      className={`inline-flex items-center px-6 py-3 rounded-full font-semibold transition-colors ${buttonClass}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.a>
  );
};

export default CTAButton;

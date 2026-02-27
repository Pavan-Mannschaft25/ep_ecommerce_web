// components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import CTAButton from "./CTAButton";

const Hero = ({ title, subtitle, buttons }) => {
  return (
    <section className="gradient-bg text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <CTAButton
                key={index}
                text={button.text}
                to={button.to}
                primary={button.primary || false}
                icon={<FiArrowRight />}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

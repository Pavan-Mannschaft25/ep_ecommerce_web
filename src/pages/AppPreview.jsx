import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiCheck,
  FiShield,
  FiZap,
  FiTruck,
  FiTrendingUp,
  FiNavigation,
  FiLock,
} from "react-icons/fi";
import DownloadApp from "../components/DownloadApp";
import screen1 from "../assets/screens/screen1.jpeg";
import screen2 from "../assets/screens/screen2.jpeg";
import screen3 from "../assets/screens/screen3.jpeg";
import CTAButton from "../components/CTAButton";

const AppPreview = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  // App screens data
  const appScreens = [
    {
      id: 1,
      title: "Home Dashboard",
      description: "View your fitness stats and daily activities at a glance",
      image: screen1,
    },
    {
      id: 2,
      title: "Fitness Booking",
      description: "Book classes with certified trainers in just a few taps",
      image: screen2,
    },
    {
      id: 3,
      title: "Protein Shop",
      description: "Browse and order from our wide range of protein products",
      image: screen3,
    },
    {
      id: 4,
      title: "Profile & Tracking",
      description: "Monitor your progress and track your fitness journey",
      image: screen1,
    },
  ];

  // App features data
  const appFeatures = [
    {
      icon: <FiNavigation className="text-2xl" />,
      title: "Easy Navigation",
      description: "Intuitive interface designed for seamless user experience",
    },
    {
      icon: <FiZap className="text-2xl" />,
      title: "Fast Booking",
      description: "Book classes and order products in just a few taps",
    },
    {
      icon: <FiLock className="text-2xl" />,
      title: "Secure Payment",
      description: "Multiple payment options with bank-level security",
    },
    {
      icon: <FiTruck className="text-2xl" />,
      title: "Order Tracking",
      description:
        "Real-time tracking of your orders from purchase to delivery",
    },
    {
      icon: <FiTrendingUp className="text-2xl" />,
      title: "Progress Monitoring",
      description:
        "Detailed analytics and insights to track your fitness journey",
    },
  ];

  // Navigation functions
  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % appScreens.length);
  };

  const prevScreen = () => {
    setCurrentScreen(
      (prev) => (prev - 1 + appScreens.length) % appScreens.length,
    );
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] sm:min-h-screen overflow-hidden mt-14 lg:mt-12 p-4 lg:p-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("https://www.acemetrix.com/wp-content/uploads/2015/08/black-banner-vector3.png")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 min-h-[90vh] sm:min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 sm:mb-6">
                  MOBILE APP
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                  Your Fitness Journey in Your Pocket
                </h1>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90">
                  Experience the convenience of managing your fitness goals,
                  booking classes, and ordering protein products all from one
                  powerful mobile app.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <CTAButton
                    text="Download App"
                    to="#download"
                    className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-emerald-600 w-full sm:w-auto"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mt-8 lg:mt-0"
              >
                <div
                  className="relative mx-auto"
                  style={{
                    width: "clamp(280px, 90vw, 320px)",
                    height: "clamp(600px, 150vw, 650px)",
                  }}
                >
                  {/* Phone frame shadow */}
                  <div className="absolute inset-0 bg-black/20 rounded-3xl transform translate-y-4 translate-x-4 blur-sm"></div>

                  {/* Phone frame */}
                  <div className="relative bg-gray-900 rounded-3xl p-3 shadow-2xl overflow-hidden h-full">
                    {/* Phone top bar */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 rounded-t-3xl flex items-center justify-center">
                      <div className="w-20 h-4 bg-black rounded-full"></div>
                    </div>

                    {/* Phone screen */}
                    <div className="bg-white rounded-2xl overflow-hidden mt-6 mb-2 h-full">
                      <img
                        src={appScreens[currentScreen].image}
                        alt={appScreens[currentScreen].title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Phone bottom bar */}
                    <div className="flex justify-center mb-2">
                      <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screens Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              APP SCREENS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Explore Our App Features
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Navigate through our intuitive app interface designed to make your
              fitness journey seamless
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="flex justify-center items-center">
                <button
                  onClick={prevScreen}
                  className="absolute left-0 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow"
                  aria-label="Previous screen"
                >
                  <FiChevronLeft size={20} className="sm:w-6 sm:h-6" />
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {appScreens.map((screen, index) => (
                    <motion.div
                      key={screen.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative ${index === currentScreen ? "scale-105" : "scale-95"} transition-transform duration-300`}
                    >
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="h-64 sm:h-80 lg:h-96 overflow-hidden">
                          <img
                            src={screen.image}
                            alt={screen.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={nextScreen}
                  className="absolute right-0 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow"
                  aria-label="Next screen"
                >
                  <FiChevronRight size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>

              <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                {appScreens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentScreen(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentScreen
                        ? "bg-emerald-600 w-8"
                        : "bg-gray-300 w-3"
                    }`}
                    aria-label={`Go to screen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              APP FEATURES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose Our App
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the convenience and power of our feature-rich mobile
              app designed to support your fitness journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {appFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-emerald-50 p-6 sm:p-8 rounded-2xl"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-600 mb-4 sm:mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DownloadApp />
    </div>
  );
};

export default AppPreview;

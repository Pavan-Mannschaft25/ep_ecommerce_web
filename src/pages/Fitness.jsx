import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CTAButton from "../components/CTAButton";
import DownloadApp from "../components/DownloadApp";
import {
  FiActivity,
  FiUser,
  FiCalendar,
  FiClock,
  FiStar,
  FiCheck,
  FiArrowRight,
  FiTrendingUp,
  FiTarget,
  FiAward,
  FiUsers,
  FiPlay,
  FiZap,
} from "react-icons/fi";
import process1 from "../assets/screens/goal-img.avif";
import process2 from "../assets/screens/start-training.avif";
import process3 from "../assets/screens/result.jpg";

// Import hero image
// import fitnessHero from "../assets/fitness/fit1.jpg";
import fitnessHero from "../assets/fitness/fit3.avif";

// Import trainer images
import trainer1 from "../assets/fitness/trainer4.jpg";
import trainer2 from "../assets/fitness/trainer3.jpg";
import trainer3 from "../assets/fitness/trainer2.jpg";
import trainer4 from "../assets/fitness/trainer5.jpg";

import cat1 from "../assets/fitness/fit-wl.avif";
import cat2 from "../assets/fitness/fit-mg.avif";
import cat3 from "../assets/fitness/fit-yoga.jpg";
import cat4 from "../assets/fitness/fit-cari.jpg";
import cat5 from "../assets/fitness/fit-home.jpg";
import cat6 from "../assets/fitness/fit-st.jpg";

const Fitness = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fitness categories data
  const fitnessCategories = [
    {
      id: 1,
      name: "Weight Loss",
      icon: <FiTrendingUp />,
      description:
        "Burn calories and achieve your ideal weight with targeted workouts",
      color: "from-red-500 to-pink-500",
      image: cat1,
    },
    {
      id: 2,
      name: "Muscle Gain",
      icon: <FiAward />,
      description:
        "Build strength and muscle mass with specialized training programs",
      color: "from-blue-500 to-indigo-500",
      image: cat2,
    },
    {
      id: 3,
      name: "Yoga",
      icon: <FiActivity />,
      description:
        "Improve flexibility, balance, and mental well-being through yoga",
      color: "from-purple-500 to-pink-500",
      image: cat3,
    },
    {
      id: 4,
      name: "Cardio",
      icon: <FiActivity />,
      description:
        "Boost your cardiovascular health with high-energy cardio workouts",
      color: "from-green-500 to-teal-500",
      image: cat4,
    },
    {
      id: 5,
      name: "Home Workouts",
      icon: <FiActivity />,
      description:
        "Effective exercises you can do from the comfort of your home",
      color: "from-yellow-500 to-orange-500",
      image: cat5,
    },
    {
      id: 6,
      name: "Strength Training",
      icon: <FiAward />,
      description:
        "Develop power and endurance with targeted strength exercises",
      color: "from-gray-600 to-gray-800",
      image: cat6,
    },
  ];

  // Trainers data
  const trainers = [
    {
      id: 1,
      name: "Rahul",
      experience: "8 Years",
      specialization: "Strength & Muscle Building",
      rating: 4.9,
      image: trainer1,
      classes: 1250,
    },
    {
      id: 2,
      name: "Priya",
      experience: "6 Years",
      specialization: "Yoga & Flexibility",
      rating: 4.8,
      image: trainer2,
      classes: 980,
    },
    {
      id: 3,
      name: "Amit",
      experience: "10 Years",
      specialization: "Weight Loss & Nutrition",
      rating: 4.9,
      image: trainer3,
      classes: 1520,
    },
    {
      id: 4,
      name: "Neha",
      experience: "5 Years",
      specialization: "Cardio & HIIT",
      rating: 4.7,
      image: trainer4,
      classes: 750,
    },
  ];

  // Booking steps
  const bookingSteps = [
    {
      step: 1,
      title: "Select Fitness Category",
      description:
        "Choose from our wide range of fitness categories that match your goals",
      icon: <FiTarget />,
    },
    {
      step: 2,
      title: "Choose Trainer",
      description:
        "Pick a certified trainer who specializes in your chosen fitness area",
      icon: <FiUser />,
    },
    {
      step: 3,
      title: "Pick Time Slot",
      description:
        "Select a convenient time from our flexible schedule options",
      icon: <FiCalendar />,
    },
    {
      step: 4,
      title: "Join Class via App",
      description: "Connect with your trainer and start your fitness journey",
      icon: <FiPlay />,
    },
  ];

  // Enhanced How App Works with more benefits
  const journeySteps = [
    {
      icon: <FiTarget size={28} />,
      title: "Set Your Goal",
      description:
        "Take our quick assessment to get a personalized fitness plan tailored to your body type and goals.",
      badge: "2-min quiz",
      image: process1,
    },
    {
      icon: <FiZap size={28} />,
      title: "Start Training",
      description:
        "Join live classes or follow pre-recorded sessions. Track your calories, macros, and progress in real-time.",
      badge: "Instant access",
      image: process2,
    },
    {
      icon: <FiTrendingUp size={28} />,
      title: "See Results",
      description:
        "Watch your body transform with our advanced analytics. Celebrate milestones and unlock achievements.",
      badge: "Track everything",
      image: process3,
    },
  ];

  return (
    <div className="pt-10">
      {/* Hero Section with Image */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={fitnessHero}
            alt="Fitness Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Body, Transform Your Life
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Personalized fitness classes designed for beginners to
                professionals. Achieve your fitness goals with expert guidance
                and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton
                  text="Book Class Now"
                  to="#booking"
                  primary={true}
                  icon={<FiCalendar />}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                />
                <CTAButton
                  text="Explore Categories"
                  to="#categories"
                  className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-emerald-600"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fitness Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              FITNESS OVERVIEW
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Complete Fitness Solution
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive fitness program combines expert guidance,
              personalized plans, and a supportive community to help you achieve
              your health and wellness goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiUsers className="text-3xl" />,
                title: "Expert Trainers",
                description:
                  "Learn from certified professionals with years of experience in fitness training",
              },
              {
                icon: <FiTarget className="text-3xl" />,
                title: "Personalized Plans",
                description:
                  "Get customized workout and nutrition plans tailored to your specific goals",
              },
              {
                icon: <FiTrendingUp className="text-3xl" />,
                title: "Track Progress",
                description:
                  "Monitor your improvement with detailed analytics and progress reports",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <SectionTitle
              title="Your Journey to Fitness"
              subtitle="Three simple steps to a healthier, stronger you"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl overflow-hidden h-full shadow-lg transition-all duration-300 border border-emerald-50 flex flex-col">
                  <div className="h-32 sm:h-40 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover mix-blend-multiply opacity-80"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                        {step.icon}
                      </div>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                        {step.badge}
                      </span>
                    </div>
                    <div className="flex items-center mb-3 sm:mb-4">
                      <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-emerald-600 text-white rounded-full font-bold mr-3 text-sm">
                        {index + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-1 text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <FiArrowRight className="text-gray-400" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fitness Categories Section */}
      <section id="categories" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              FITNESS CATEGORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choose Your Fitness Path
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select from our wide range of fitness categories designed to meet
              your specific goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fitnessCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: category.id * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70`}
                  ></div>
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                  </div>
                  <p className="text-white/90">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Class Booking Works Section */}
      <section
        id="booking"
        className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Class Booking Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get started with your fitness journey in four simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-xl">
                      {step.icon}
                    </div>
                    <span className="flex items-center justify-center w-8 h-8 bg-emerald-600 text-white rounded-full font-bold text-sm">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < bookingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <FiArrowRight className="text-2xl text-emerald-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="#coaches" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              MEET OUR TRAINERS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert Guidance From Certified Professionals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of experienced trainers are dedicated to helping you
              achieve your fitness goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: trainer.id * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {trainer.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-1">
                    {trainer.specialization}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {trainer.experience} Experience
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FiStar className="text-yellow-500 mr-1" />
                      <span className="font-semibold">{trainer.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {trainer.classes}+ Classes
                    </div>
                  </div>

                  {/* <Link
                    to="#"
                    className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    View Profile
                  </Link> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DownloadApp />

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Your First Class Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community of fitness enthusiasts and start your journey
              towards a healthier, stronger you
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                text="Book Class Now"
                to="#"
                primary={true}
                icon={<FiCalendar />}
                className="bg-white text-emerald-600 hover:bg-gray-100"
              />
              <CTAButton
                text="Download App"
                to="#"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-emerald-600"
              />
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Fitness;

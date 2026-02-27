import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import CTAButton from "../components/CTAButton";
import {
  FiTarget,
  FiHeart,
  FiAward,
  FiCheck,
  FiUsers,
  FiShoppingBag,
  FiPlay,
  FiBookOpen,
  FiTrendingUp,
  FiShield,
} from "react-icons/fi";

// Import hero image
import aboutHero from "../assets/images/about-us.avif";
import DownloadApp from "../components/DownloadApp";

const About = () => {
  // Values data
  const values = [
    {
      icon: <FiShield className="text-2xl" />,
      title: "Trusted trainers & verified products",
      description:
        "All our trainers are certified and products are lab-tested for quality",
    },
    {
      icon: <FiUsers className="text-2xl" />,
      title: "Beginner-friendly and expert-approved",
      description:
        "Programs designed for all fitness levels, from beginners to advanced",
    },
    {
      icon: <FiCheck className="text-2xl" />,
      title: "Transparent quality & honest guidance",
      description:
        "No hidden agendas, just genuine advice for your fitness journey",
    },
    {
      icon: <FiTarget className="text-2xl" />,
      title: "Designed for real people and real goals",
      description:
        "Practical solutions that work with your lifestyle, not against it",
    },
  ];

  // What we do data
  const whatWeDo = [
    {
      icon: <FiPlay className="text-2xl" />,
      title: "Expert fitness classes",
      description: "For all levels, from beginner to advanced athletes",
    },
    {
      icon: <FiShoppingBag className="text-2xl" />,
      title: "5000+ trusted protein food products",
      description: "Carefully selected for quality and effectiveness",
    },
    {
      icon: <FiBookOpen className="text-2xl" />,
      title: "Certified trainers & nutrition guidance",
      description: "Expert advice to help you reach your goals faster",
    },
    {
      icon: <FiTrendingUp className="text-2xl" />,
      title: "Easy-to-use mobile app experience",
      description: "Track progress, book classes, and shop from anywhere",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section with Image */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="About Eat Protein"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 sm:mb-6">
                ABOUT US
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                We Are Eat Protein
              </h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-200">
                A modern fitness and nutrition platform built for people who
                want real results — not confusion.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <CTAButton
                  text="Download App"
                  to="#download"
                  primary={true}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto"
                />
                <CTAButton
                  text="Join Fitness"
                  to="#download"
                  className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-emerald-600 w-full sm:w-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                WHO WE ARE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Train Smarter, Eat Better, Live Healthier
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg text-gray-600 leading-relaxed"
            >
              <p className="mb-4 sm:mb-6">
                We are Eat Protein, a modern fitness and nutrition platform
                built for people who want real results — not confusion.
              </p>
              <p className="mb-4 sm:mb-6">
                Our goal is simple: to help you train smarter, eat better, and
                live healthier.
              </p>
              <p className="mb-4 sm:mb-6">
                By combining expert-led fitness classes with high-quality
                protein foods, we make your fitness journey easy, effective, and
                enjoyable — all in one app.
              </p>
              <p>
                Whether you're just starting your fitness journey or leveling up
                your performance, we're here to support you every step of the
                way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              WHAT WE DO
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Everything You Need For A Healthy Lifestyle
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We bring together everything you need for a healthy lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4 sm:mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 lg:mb-0"
            >
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                OUR MISSION
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                To Simplify Fitness And Nutrition For Everyone
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                We believe staying fit should not be complicated or expensive.
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Our mission is to provide affordable, reliable, and
                easy-to-access fitness training and nutrition so anyone can live
                a healthier life.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                OUR VISION
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                To Become India's Most Trusted Fitness And Protein Platform
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                We aim to build a community where people feel confident about:
              </p>
              <ul className="space-y-2 sm:space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">
                    <FiCheck />
                  </span>
                  <span className="text-sm sm:text-base">
                    The workouts they follow
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">
                    <FiCheck />
                  </span>
                  <span className="text-sm sm:text-base">
                    The trainers they learn from
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">
                    <FiCheck />
                  </span>
                  <span className="text-sm sm:text-base">
                    The food they consume
                  </span>
                </li>
              </ul>
              <p className="text-base sm:text-lg text-gray-600 mt-4 sm:mt-6">
                Our vision is to inspire millions to choose a healthier
                lifestyle — every day.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Eat Protein Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              WHY EAT PROTEIN?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              The Right Choice For Your Fitness Journey
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg flex items-start"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-4 sm:mr-6 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                OUR PROMISE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                We Promise To Put Your Health First
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
                Because your body deserves the best.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Put your health first",
                  description:
                    "Your well-being is our top priority in everything we do.",
                },
                {
                  title: "Provide quality you can trust",
                  description:
                    "All our products and services meet the highest standards.",
                },
                {
                  title: "Keep improving your fitness experience",
                  description: "We're constantly evolving to serve you better.",
                },
              ].map((promise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-emerald-50 p-6 sm:p-8 rounded-2xl text-center"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4 sm:mb-6">
                    <FiHeart />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {promise.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {promise.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DownloadApp />
    </div>
  );
};

export default About;

// pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import CTAButton from "../components/CTAButton";
import {
  FiActivity,
  FiShoppingBag,
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiShield,
  FiDownload,
  FiPlay,
  FiCheck,
  FiArrowRight,
  FiStar,
  FiClock,
  FiTarget,
  FiZap,
  FiHeart,
  FiBarChart2,
  FiSmartphone,
  FiUserCheck,
  FiTruck,
  FiChevronRight,
  FiPlayCircle,
  FiBookOpen,
  FiCalendar,
} from "react-icons/fi";
import CarouselComponent from "../components/CarouselComponent";
import TopOffers from "../components/home/TopOffers";
import RecommendedMeals from "../components/home/RecommendedMeals";
import DownloadApp from "../components/DownloadApp";
import screen1 from "../assets/screens/screen1.jpeg";
import screen2 from "../assets/screens/screen2.jpeg";
import screen3 from "../assets/screens/screen3.jpeg";
import ExploreModules from "../components/home/ExploreModules";
import EatProteinModules from "../components/home/EatProteinModules";

// ModuleCard component for the navigation tabs
const ModuleCard = ({ title, icon, desc, to, color }) => {
  const colorClasses = {
    emerald:
      "from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700",
    teal: "from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700",
    orange:
      "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
    purple:
      "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
  };

  return (
    <motion.a
      href={to}
      className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`h-full p-6 bg-gradient-to-br ${colorClasses[color]} text-white`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            {icon}
          </div>
          <FiChevronRight className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/80 text-sm">{desc}</p>
      </div>
    </motion.a>
  );
};

const Home = () => {
  const features = [
    {
      icon: <FiActivity size={32} />,
      title: "Fitness Tracking",
      description:
        "Monitor your workouts, track progress, and achieve your fitness goals with our comprehensive tracking system.",
    },
    {
      icon: <FiShoppingBag size={32} />,
      title: "Premium Products",
      description:
        "Shop from our curated selection of high-quality fitness gear, supplements, and accessories.",
    },
    {
      icon: <FiAward size={32} />,
      title: "Expert Guidance",
      description:
        "Get personalized workout plans and nutrition advice from certified fitness professionals.",
    },
    {
      icon: <FiUsers size={32} />,
      title: "Community Support",
      description:
        "Join a thriving community of fitness enthusiasts who share your goals and motivation.",
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: "Progress Analytics",
      description:
        "Visualize your improvement with detailed analytics and insights on your fitness journey.",
    },
    {
      icon: <FiShield size={32} />,
      title: "Trusted Quality",
      description:
        "All our products and services meet the highest standards of quality and effectiveness.",
    },
  ];

  // Enhanced What You Get Section with more compelling content
  const coreFeatures = [
    {
      icon: <FiActivity size={32} />,
      title: "Live Fitness Classes",
      description:
        "Join 200+ daily live sessions with certified trainers. From HIIT to Yoga, find your perfect workout.",
      stats: "200+ Daily Classes",
      color: "from-purple-500 to-pink-500",
      link: "/fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <FiShoppingBag size={32} />,
      title: "Protein Marketplace",
      description:
        "Shop from 5000+ verified protein products. Compare prices, read reviews, and get personalized recommendations.",
      stats: "5000+ Products",
      color: "from-emerald-500 to-teal-500",
      link: "/shop",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <FiAward size={32} />,
      title: "Expert Coaching",
      description:
        "1-on-1 guidance from top fitness coaches. Get custom plans that fit your lifestyle and goals.",
      stats: "500+ Certified Coaches",
      color: "from-orange-500 to-red-500",
      // link: "#coaches",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  // Enhanced Why Choose Us with more compelling points and images
  const uniqueAdvantages = [
    {
      icon: <FiUserCheck />,
      title: "Verified Trainers",
      description:
        "All coaches are certified with 5+ years experience and proven track records of transforming lives.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <FiShield />,
      title: "100% Authentic Products",
      description:
        "Every supplement is lab-tested and quality assured. No fake products, no compromises.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <FiClock />,
      title: "24/7 Support",
      description:
        "Get help whenever you need it from our team of fitness and nutrition experts.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <FiHeart />,
      title: "Community Driven",
      description:
        "Join 50,000+ members achieving goals together. Share your journey and celebrate victories.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <FiBarChart2 />,
      title: "AI-Powered Insights",
      description:
        "Get smart recommendations based on your progress. Our AI learns your body and optimizes your plan.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <FiTruck />,
      title: "Free Delivery",
      description:
        "On all orders above $30, delivered in 24 hours. No waiting, no hassle.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  // Social proof stats
  // const stats = [
  //   { number: "50K+", label: "Active Users" },
  //   { number: "200+", label: "Daily Classes" },
  //   { number: "4.9", label: "App Rating" },
  //   { number: "5000+", label: "Products" },
  // ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 w-full overflow-x-hidden">
      {/* Enhanced Hero Section with Image Banners */}
      <CarouselComponent />

      {/* Social Proof Stats - Enhanced with subtle gradient */}
      {/* <section className="py-6 sm:py-8 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border-b border-emerald-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-xs sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Module Navigation Tabs */}
      {/* <section className="py-10">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Explore Our Modules"
            subtitle="Discover all the tools you need for your fitness journey"
            centered={true}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {modules.map((module, index) => (
              <ModuleCard
                key={index}
                title={module.title}
                icon={module.icon}
                desc={module.desc}
                to={module.to}
                color={module.color}
              />
            ))}
          </div>
        </div>
      </section> */}
      <ExploreModules />

      <TopOffers />

      <RecommendedMeals />

      <EatProteinModules />

      {/* Enhanced App Preview - Improved background */}
      <section className="py-10 sm:py-16 relative overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-white"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-200 rounded-full filter blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              Mobile Experience
            </span>
            <SectionTitle
              title="App Screens Preview"
              subtitle="Experience our fitness solution on the go"
            />
          </div>

          {/* Phone mockups container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Background accent for the phones */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-3xl transform -rotate-1"></div>

            <div className="relative flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-8">
              {[screen1, screen2, screen3].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                  whileHover={{ y: -10 }}
                >
                  {/* Phone frame shadow */}
                  <div className="absolute inset-0 bg-black/20 rounded-3xl transform translate-y-4 translate-x-4 blur-sm"></div>

                  {/* Phone frame */}
                  <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl overflow-hidden">
                    {/* Phone top bar */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 rounded-t-3xl flex items-center justify-center">
                      <div className="w-20 h-4 bg-black rounded-full"></div>
                    </div>

                    {/* Phone screen container - Responsive sizing */}
                    <div
                      className="bg-white rounded-2xl overflow-hidden mt-6 mb-2 mx-auto"
                      style={{
                        width: "clamp(200px, 90vw, 280px)",
                        height: "clamp(350px, 160vw, 500px)",
                      }}
                    >
                      {/* Image container with proper sizing */}
                      <div className="w-full h-full flex items-center justify-center bg-gray-50">
                        <img
                          src={item}
                          alt={`App screen ${index + 1}`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Phone bottom bar */}
                    <div className="flex justify-center mb-2">
                      <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>

                  {/* Interactive hover effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <CTAButton
              text="View All Screens"
              to="/app-preview"
              primary={true}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section - Enhanced with subtle gradient */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose Eat Protein App?"
            subtitle="We provide everything you need to achieve your fitness goals"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <DownloadApp />
    </div>
  );
};

export default Home;

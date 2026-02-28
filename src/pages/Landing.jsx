// import React from "react";
// import { Link } from "react-router-dom";
// import { FaDumbbell, FaUtensils, FaUserMd, FaBook } from "react-icons/fa";
// import Button from "../components/common/Button";
// import PartnerCard from "../components/cards/PartnerCard";
// import { SiFoodpanda } from "react-icons/si";

// const Landing = () => {
//   const partnerTypes = [
//     {
//       title: "Store Vendor",
//       description: "Sell protein supplements and health products",
//       icon: <FaUtensils />,
//       link: "/auth/store-vendor",
//     },
//     {
//       title: "Diet Coach",
//       description: "Provide personalized nutrition plans",
//       icon: <FaUserMd />,
//       link: "/auth/diet-coach",
//     },
//     {
//       title: "Fitness Trainer / Center",
//       description: "Offer training services and fitness programs",
//       icon: <FaDumbbell />,
//       link: "/auth/fitness",
//     },
//     {
//       title: "Recipe Center",
//       description: "Share healthy recipes and meal plans",
//       icon: <FaBook />,
//       link: "/auth/recipe",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
//         <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
//           <div className="mb-8">
//             <SiFoodpanda className="text-6xl mx-auto" />
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             EatProtein Partner Portal
//           </h1>
//           <p className="text-xl mb-8 max-w-2xl">
//             Join our network of health and fitness professionals to help people
//             achieve their wellness goals
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Link to="/explore-partners">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-white text-white hover:bg-white hover:text-primary"
//               >
//                 Explore Partner Opportunities
//               </Button>
//             </Link>
//             <Link to="/explore-partners">
//               <Button variant="primary" size="lg">
//                 Register Now
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Partner Types Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//             Choose Your Partner Type
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {partnerTypes.map((partner, index) => (
//               <Link key={index} to={partner.link}>
//                 <PartnerCard
//                   title={partner.title}
//                   description={partner.description}
//                   icon={partner.icon}
//                 />
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//             Why Partner With Us?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl text-primary">📈</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Grow Your Business</h3>
//               <p className="text-gray-600">
//                 Reach more customers interested in health and fitness
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl text-primary">🔧</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Easy Management</h3>
//               <p className="text-gray-600">
//                 Simple dashboard to manage your clients and services
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl text-primary">💰</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Earn More</h3>
//               <p className="text-gray-600">
//                 Competitive commission structure and timely payments
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-4 text-center">
//           <p>&copy; 2023 EatProtein. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Landing;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaDumbbell,
  FaUtensils,
  FaUserMd,
  FaBook,
  FaStore,
  FaAppleAlt,
  FaPlay,
  FaCheckCircle,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
  FaLightbulb,
  FaRocket,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaStar,
  FaHeartbeat,
  FaRunning,
  FaCookieBite,
} from "react-icons/fa";
import { SiFoodpanda, SiAppstore, SiGoogleplay } from "react-icons/si";
import Button from "../components/common/Button";
import PartnerCard from "../components/cards/PartnerCard";
import logo from "../assets/images/eat_logo.jpg";
import fitnessBg from "../assets/images/ep-hero-img.avif";
import DownloadApp from "../components/DownloadApp";

const Landing = () => {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const modules = [
    {
      title: "Shop",
      description: "Premium supplements & health products",
      icon: <FaStore className="text-3xl" />,
      color: "from-purple-500 to-purple-700",
      features: ["Quality Products", "Fast Delivery", "Best Prices"],
    },
    {
      title: "Diet",
      description: "Personalized nutrition plans",
      icon: <FaAppleAlt className="text-3xl" />,
      color: "from-green-500 to-green-700",
      features: ["Expert Coaches", "Custom Plans", "Track Progress"],
    },
    {
      title: "Fitness",
      description: "Professional training programs",
      icon: <FaDumbbell className="text-3xl" />,
      color: "from-orange-500 to-orange-700",
      features: ["Certified Trainers", "Live Sessions", "Workout Plans"],
    },
    {
      title: "Recipes",
      description: "Healthy & delicious meal ideas",
      icon: <FaCookieBite className="text-3xl" />,
      color: "from-pink-500 to-pink-700",
      features: ["1000+ Recipes", "Nutrition Info", "Meal Prep"],
    },
  ];

  const partnerTypes = [
    {
      title: "Store Vendor",
      description: "Sell protein supplements and health products",
      icon: <FaUtensils />,
      link: "/auth/store-vendor",
      stats: "500+ Vendors",
      color: "purple",
    },
    {
      title: "Diet Coach",
      description: "Provide personalized nutrition plans",
      icon: <FaUserMd />,
      link: "/auth/diet-coach",
      stats: "200+ Coaches",
      color: "green",
    },
    {
      title: "Fitness Trainer / Center",
      description: "Offer training services and fitness programs",
      icon: <FaDumbbell />,
      link: "/auth/fitness",
      stats: "300+ Trainers",
      color: "orange",
    },
    {
      title: "Recipe Center",
      description: "Share healthy recipes and meal plans",
      icon: <FaBook />,
      link: "/auth/recipe",
      stats: "150+ Centers",
      color: "pink",
    },
  ];

  const benefits = [
    {
      icon: <FaChartLine className="text-3xl text-blue-500" />,
      title: "Grow Your Business",
      description:
        "Reach thousands of health-conscious customers and expand your client base exponentially.",
    },
    {
      icon: <FaUsers className="text-3xl text-green-500" />,
      title: "Join a Thriving Community",
      description:
        "Connect with 10,000+ health professionals and collaborate for mutual growth.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-purple-500" />,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security with encrypted transactions and data protection.",
    },
    {
      icon: <FaLightbulb className="text-3xl text-yellow-500" />,
      title: "Innovative Tools",
      description:
        "Access cutting-edge technology and analytics to optimize your services.",
    },
    {
      icon: <FaRocket className="text-3xl text-red-500" />,
      title: "Fast Onboarding",
      description:
        "Get started in minutes with our streamlined registration process.",
    },
    {
      icon: <FaHeartbeat className="text-3xl text-pink-500" />,
      title: "Make an Impact",
      description:
        "Help people achieve their health goals while building your career.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Diet Coach",
      content:
        "EatProtein helped me reach 3x more clients. The platform is intuitive and the support is amazing!",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Mike Chen",
      role: "Fitness Trainer",
      content:
        "Best decision I made for my fitness business. The tools and community are invaluable.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emily Davis",
      role: "Store Owner",
      content:
        "Our supplement sales increased by 200% after joining. Highly recommended!",
      rating: 5,
      avatar: "ED",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="modules"
        className="relative pt-24 pb-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${fitnessBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Join Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                4 Core Modules
              </span>
            </h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Transform your health and fitness journey with our comprehensive
              ecosystem of wellness solutions
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {modules.map((module, index) => (
              <a
                key={index}
                href="#partners"
                className="group relative block bg-white/95 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="p-6">
                  <div
                    className={`bg-gradient-to-br ${module.color} rounded-xl p-4 w-16 h-16 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {module.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {module.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{module.description}</p>

                  <ul className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <FaCheckCircle className="text-emerald-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/explore-partners">
              <Button
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Explore Partners Section */}
      <section id="partners" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Explore Partner Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Join our growing network of health and wellness professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((partner, index) => (
              <Link key={index} to={partner.link}>
                <div className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div
                    className={`bg-gradient-to-br from-${partner.color}-500 to-${partner.color}-700 rounded-xl p-4 w-16 h-16 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {partner.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {partner.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-600 font-semibold">
                      {partner.stats}
                    </span>
                    <FaArrowRight className="text-gray-400 group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <Link to={partner.link}>
                    <Button
                      variant="primary"
                      className="mt-6 w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 font-bold"
                    >
                      Join Now
                      {/* <FaArrowRight className="ml-2" /> */}
                    </Button>
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join EatProtein Section */}
      <section
        id="benefits"
        className="py-16 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Join EatProtein?
            </h2>
            <p className="text-xl text-gray-600">
              Discover the advantages of partnering with India's leading
              wellness platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">
                10K+
              </div>
              <div className="text-gray-600">Active Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-1">500K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-1">4.8★</div>
              <div className="text-gray-600">App Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Partners Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DownloadApp />

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Landing;

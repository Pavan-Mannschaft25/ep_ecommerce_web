// import React from "react";
// import { Link } from "react-router-dom";
// import { FaDumbbell, FaUtensils, FaUserMd, FaBook } from "react-icons/fa";
// import Button from "../components/common/Button";
// import PartnerCard from "../components/cards/PartnerCard";

// const ExplorePartners = () => {
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
//       {/* Header */}
//       <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between">
//             <Link to="/" className="text-white hover:text-gray-200">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M10 19l-7-7m0 0l7-7m-7 7h18"
//                 />
//               </svg>
//             </Link>
//             <h1 className="text-3xl font-bold">Partner Opportunities</h1>
//             <div className="w-6"></div> {/* Spacer for centering */}
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

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-4 text-center">
//           <p>&copy; 2023 EatProtein. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ExplorePartners;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaDumbbell,
  FaUtensils,
  FaUserMd,
  FaBook,
  FaClock,
  FaFire,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaChartLine,
  FaTrophy,
  FaBolt,
  FaArrowRight,
  FaShieldAlt,
  FaHeadset,
  FaRocket,
} from "react-icons/fa";
import Button from "../components/common/Button";
import PartnerCard from "../components/cards/PartnerCard";
import partnerBg from "../assets/images/partner-img.jpg";
import DownloadApp from "../components/DownloadApp";

const ExplorePartners = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [selectedPartner, setSelectedPartner] = useState(null);

  // Countdown timer for urgency
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7); // 7 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const partnerTypes = [
    {
      title: "Store Vendor",
      description: "Sell protein supplements and health products",
      icon: <FaUtensils />,
      link: "/auth/store-vendor",
      spotsLeft: 23,
      popular: true,
      benefits: [
        "0% Commission for 3 months",
        "Free Marketing Kit",
        "Priority Support",
      ],
    },
    {
      title: "Diet Coach",
      description: "Provide personalized nutrition plans",
      icon: <FaUserMd />,
      link: "/auth/diet-coach",
      spotsLeft: 15,
      benefits: [
        "Client Matching System",
        "Custom Branding",
        "Analytics Dashboard",
      ],
    },
    {
      title: "Fitness Trainer / Center",
      description: "Offer training services and fitness programs",
      icon: <FaDumbbell />,
      link: "/auth/fitness",
      spotsLeft: 31,
      benefits: ["Member Management", "Class Scheduling", "Payment Processing"],
    },
    {
      title: "Recipe Center",
      description: "Share healthy recipes and meal plans",
      icon: <FaBook />,
      link: "/auth/recipe",
      spotsLeft: 18,
      benefits: ["Recipe Analytics", "Monetization Tools", "Community Access"],
    },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Store Vendor",
      content:
        "Joined during the early bird period and got 500+ customers in the first month!",
      rating: 5,
      earnings: "₹2.5L/month",
    },
    {
      name: "Priya Patel",
      role: "Diet Coach",
      content:
        "The platform helped me reach 100+ clients. Best decision I made!",
      rating: 5,
      earnings: "₹1.8L/month",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-12 lg:pt-18">
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaFire className="text-yellow-300 animate-pulse" />
            <span className="font-semibold text-sm">LIMITED TIME OFFER:</span>
            <span className="text-sm">
              Join now and get 6 months FREE! Only 87 spots left
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <FaClock />
              <span>Ends in:</span>
            </div>
            <div className="flex space-x-2">
              <div className="bg-white/20 px-2 py-1 rounded">
                {String(timeLeft.days).padStart(2, "0")}d
              </div>
              <div className="bg-white/20 px-2 py-1 rounded">
                {String(timeLeft.hours).padStart(2, "0")}h
              </div>
              <div className="bg-white/20 px-2 py-1 rounded">
                {String(timeLeft.minutes).padStart(2, "0")}m
              </div>
              <div className="bg-white/20 px-2 py-1 rounded">
                {String(timeLeft.seconds).padStart(2, "0")}s
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <section
        id="partners"
        className="relative text-white py-20 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${partnerBg})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Back Button - Left End */}
        <Link
          to="/partners"
          className="absolute top-6 left-6 z-20 flex items-center space-x-2 text-white hover:text-gray-200 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="hidden sm:inline text-sm font-medium">Back</span>
        </Link>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4 animate-bounce whitespace-nowrap">
              <FaBolt className="mr-2 flex-shrink-0" />
              <span>EARLY BIRD SPECIAL - 50% OFF</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Become a Partner Today
            </h1>

            <p className="text-xl mb-8 text-emerald-100">
              Join 500+ successful partners earning ₹50K - ₹5L monthly
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 text-lg shadow-xl transform hover:scale-105 transition-all inline-flex items-center whitespace-nowrap"
                onClick={() => setSelectedPartner("quick")}
              >
                <FaRocket className="mr-2 flex-shrink-0" />
                <span>Quick Join - Get Started in 2 Minutes</span>
              </Button>

              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <FaShieldAlt className="mr-1" />
                  <span>100% Secure</span>
                </div>
                <div className="flex items-center">
                  <FaHeadset className="mr-1" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-1">
                500+
              </div>
              <div className="text-gray-600">Active Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-1">
                ₹2.5Cr
              </div>
              <div className="text-gray-600">Monthly Payouts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-1">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">4.9★</div>
              <div className="text-gray-600">Partner Rating</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Join Now Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why You Must Join NOW
            </h2>
            <p className="text-xl text-gray-600">
              Limited spots available. First 100 partners get exclusive benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-500 relative">
              <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                URGENT
              </div>
              <FaFire className="text-4xl text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Limited Spots</h3>
              <p className="text-gray-600 mb-4">
                Only 87 spots left this month. We're limiting partners to ensure
                quality.
              </p>
              <div className="bg-red-50 rounded-lg p-3">
                <div className="flex justify-between text-sm mb-2">
                  <span>Spots Filled</span>
                  <span className="font-bold">413/500</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: "82.6%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <FaTrophy className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Early Bird Benefits</h3>
              <p className="text-gray-600 mb-4">Join now and get:</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="text-green-500 mr-2" />6 Months FREE
                  (Save ₹12,000)
                </li>
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Priority Customer Support
                </li>
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Free Marketing Kit Worth ₹5,000
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <FaChartLine className="text-4xl text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast Growth</h3>
              <p className="text-gray-600 mb-4">Partners joining now get:</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  2x More Customer Leads
                </li>
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Featured Placement
                </li>
                <li className="flex items-center text-sm">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  First Access to New Features
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Choose Your Partner Type
            </h2>
            <p className="text-xl text-gray-600">
              Select the category that best fits your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((partner, index) => (
              <div key={index} className="relative group">
                {partner.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-emerald-500 overflow-hidden">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white">
                    <div className="text-4xl mb-3">{partner.icon}</div>
                    <h3 className="text-xl font-bold">{partner.title}</h3>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{partner.description}</p>

                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-500">Spots Left</span>
                        <span className="font-bold text-red-600">
                          {partner.spotsLeft}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-500"
                          style={{
                            width: `${((50 - partner.spotsLeft) / 50) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {partner.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={partner.link}>
                      <Button
                        variant="primary"
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 font-bold"
                      >
                        Join Now
                        {/* <FaArrowRight className="ml-2" /> */}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how our partners are thriving
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-emerald-600">
                    {testimonial.earnings}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
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

      {/* <DownloadApp /> */}

      {/* Quick Join Modal */}
      {selectedPartner === "quick" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setSelectedPartner(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h3 className="text-2xl font-bold mb-4">Quick Join</h3>
            <p className="text-gray-600 mb-6">
              Select your partner type to get started immediately:
            </p>

            <div className="space-y-3">
              {partnerTypes.map((partner, index) => (
                <Link
                  key={index}
                  to={partner.link}
                  onClick={() => setSelectedPartner(null)}
                >
                  <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-emerald-500 hover:bg-emerald-50 transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-2xl mr-3 text-emerald-600">
                          {partner.icon}
                        </div>
                        <div>
                          <div className="font-semibold">{partner.title}</div>
                          <div className="text-sm text-gray-500">
                            {partner.spotsLeft} spots left
                          </div>
                        </div>
                      </div>
                      <FaArrowRight className="text-gray-400" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplorePartners;

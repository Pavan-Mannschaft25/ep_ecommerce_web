// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FiSearch,
//   FiMapPin,
//   FiChevronRight,
//   FiX,
//   FiPhone,
//   FiMail,
//   FiUser,
//   FiCheck,
//   FiClock,
//   FiTrendingUp,
//   FiAward,
//   FiStar,
//   FiFilter,
//   FiPlus,
//   FiShoppingBag,
//   FiHeart,
//   FiActivity,
//   FiBookOpen,
//   FiZap,
// } from "react-icons/fi";

// const FranchisePage = () => {
//   const [activeTab, setActiveTab] = useState("shop");
//   const [selectedModule, setSelectedModule] = useState(null);
//   const [showApplyForm, setShowApplyForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     city: "",
//     module: "",
//   });
//   const [isScrolled, setIsScrolled] = useState(false);
//   const tabsRef = useRef(null);

//   // Swiggy-style module data
//   const modules = {
//     shop: {
//       id: "shop",
//       name: "Shop Module",
//       shortDesc: "Product-based business",
//       fullDesc: "Complete retail solution with health products",
//       investment: "₹5–8L",
//       earnings: "₹60k+/month",
//       roi: "12–15 months",
//       badge: "High Margin",
//       badgeColor: "bg-emerald-100 text-emerald-700",
//       image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400",
//       features: [
//         "Physical Store",
//         "50+ Products",
//         "Staff Training",
//         "Marketing Kit",
//       ],
//       popular: true,
//     },
//     diet: {
//       id: "diet",
//       name: "Diet Module",
//       shortDesc: "Subscription-based plans",
//       fullDesc: "Digital diet consultation and meal planning",
//       investment: "₹2–4L",
//       earnings: "₹40k+/month",
//       roi: "8–10 months",
//       badge: "Low Investment",
//       badgeColor: "bg-blue-100 text-blue-700",
//       image:
//         "https://images.unsplash.com/photo-1490645935967-1de4e4d6b719?w=400",
//       features: [
//         "Online Platform",
//         "Dietitian Team",
//         "Meal Plans",
//         "App Access",
//       ],
//       online: true,
//     },
//     fitness: {
//       id: "fitness",
//       name: "Fitness Module",
//       shortDesc: "Gym & training center",
//       fullDesc: "Complete fitness solution with equipment",
//       investment: "₹8–12L",
//       earnings: "₹80k+/month",
//       roi: "14–18 months",
//       badge: "Most Popular",
//       badgeColor: "bg-orange-100 text-orange-700",
//       image:
//         "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400",
//       features: ["Gym Setup", "Trainers", "Equipment", "Classes"],
//       popular: true,
//     },
//     recipes: {
//       id: "recipes",
//       name: "Recipes Module",
//       shortDesc: "Content & cookbook business",
//       fullDesc: "Recipe content and cooking classes",
//       investment: "₹3–5L",
//       earnings: "₹45k+/month",
//       roi: "10–12 months",
//       badge: "Fast ROI",
//       badgeColor: "bg-purple-100 text-purple-700",
//       image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400",
//       features: [
//         "Recipe Platform",
//         "Cooking Classes",
//         "Content",
//         "Brand Partnerships",
//       ],
//       online: true,
//     },
//   };

//   // Combo suggestions
//   const combos = [
//     {
//       name: "Fitness + Diet",
//       desc: "Best Combo",
//       modules: ["fitness", "diet"],
//       discount: "15%",
//       color: "from-orange-500 to-red-500",
//     },
//     {
//       name: "Shop + Recipes",
//       desc: "Complete Retail",
//       modules: ["shop", "recipes"],
//       discount: "10%",
//       color: "from-emerald-500 to-teal-500",
//     },
//     {
//       name: "All-in-One",
//       desc: "Master Franchise",
//       modules: ["shop", "diet", "fitness", "recipes"],
//       discount: "25%",
//       color: "from-purple-500 to-pink-500",
//     },
//   ];

//   // Handle scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Tab scroll
//   const scrollTab = (direction) => {
//     if (tabsRef.current) {
//       tabsRef.current.scrollBy({
//         left: direction === "left" ? -200 : 200,
//         behavior: "smooth",
//       });
//     }
//   };

//   const handleApply = (moduleId = null) => {
//     setFormData({ ...formData, module: moduleId || "" });
//     setShowApplyForm(true);
//   };

//   const submitApplication = (e) => {
//     e.preventDefault();
//     // Handle submission
//     alert("Application submitted! Our team will contact you soon.");
//     setShowApplyForm(false);
//     setFormData({ name: "", phone: "", city: "", module: "" });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header - Swiggy Style */}
//       <header
//         className={`fixed top-0 w-full z-40 transition-all ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <div className="flex items-center space-x-2">
//               <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center">
//                 <FiZap className="text-white" size={24} />
//               </div>
//               <span className="text-xl font-bold text-gray-800">
//                 HealthFranchise
//               </span>
//             </div>

//             {/* Location Selector */}
//             <div className="hidden md:flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-emerald-600">
//               <FiMapPin size={18} />
//               <span className="font-medium">Select City</span>
//               <FiChevronRight size={16} />
//             </div>

//             {/* CTA Button */}
//             <button
//               onClick={() => handleApply()}
//               className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
//             >
//               Become a Franchise
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="pt-24 pb-8 bg-gradient-to-r from-emerald-600 to-teal-700">
//         <div className="container mx-auto px-4 text-center text-white">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Choose Your Business Module
//           </h1>
//           <p className="text-xl opacity-90">
//             Start earning with a proven health ecosystem
//           </p>
//         </div>
//       </section>

//       {/* Sticky Tabs - Swiggy Style */}
//       <div className="sticky top-16 bg-white border-b z-30 shadow-sm">
//         <div className="container mx-auto px-4">
//           <div className="relative">
//             <div
//               ref={tabsRef}
//               className="flex space-x-8 overflow-x-auto scrollbar-hide py-4"
//               style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//             >
//               {Object.entries(modules).map(([key, module]) => (
//                 <button
//                   key={key}
//                   onClick={() => setActiveTab(key)}
//                   className={`flex items-center space-x-2 pb-2 border-b-2 transition-all whitespace-nowrap ${
//                     activeTab === key
//                       ? "border-emerald-600 text-emerald-600"
//                       : "border-transparent text-gray-600 hover:text-gray-800"
//                   }`}
//                 >
//                   {key === "shop" && <FiShoppingBag size={20} />}
//                   {key === "diet" && <FiHeart size={20} />}
//                   {key === "fitness" && <FiActivity size={20} />}
//                   {key === "recipes" && <FiBookOpen size={20} />}
//                   <span className="font-medium capitalize">{key}</span>
//                   {module.badge && (
//                     <span
//                       className={`text-xs px-2 py-1 rounded-full ${module.badgeColor}`}
//                     >
//                       {module.badge}
//                     </span>
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Module Listing - Swiggy Restaurant Style */}
//       <section className="py-8">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {Object.entries(modules)
//               .filter(([key]) => activeTab === key || activeTab === "all")
//               .map(([key, module]) => (
//                 <motion.div
//                   key={key}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   onClick={() => setSelectedModule(module)}
//                   className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all cursor-pointer overflow-hidden group"
//                 >
//                   {/* Image */}
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={module.image}
//                       alt={module.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                     />
//                     {module.badge && (
//                       <div
//                         className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-medium ${module.badgeColor}`}
//                       >
//                         {module.badge}
//                       </div>
//                     )}
//                     {module.online && (
//                       <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                         Online
//                       </div>
//                     )}
//                   </div>

//                   {/* Content */}
//                   <div className="p-5">
//                     <div className="flex items-start justify-between mb-3">
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-800">
//                           {module.name}
//                         </h3>
//                         <p className="text-gray-600 text-sm mt-1">
//                           {module.shortDesc}
//                         </p>
//                       </div>
//                       <div className="text-right">
//                         <div className="flex items-center text-emerald-600">
//                           <FiStar className="fill-current" size={16} />
//                           <span className="ml-1 font-semibold">4.8</span>
//                         </div>
//                         <p className="text-xs text-gray-500">125 partners</p>
//                       </div>
//                     </div>

//                     {/* Quick Info */}
//                     <div className="grid grid-cols-2 gap-3 mb-4">
//                       <div className="bg-gray-50 rounded-lg p-3">
//                         <p className="text-xs text-gray-500">Investment</p>
//                         <p className="font-bold text-gray-800">
//                           {module.investment}
//                         </p>
//                       </div>
//                       <div className="bg-gray-50 rounded-lg p-3">
//                         <p className="text-xs text-gray-500">Earnings</p>
//                         <p className="font-bold text-emerald-600">
//                           {module.earnings}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Footer */}
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center text-sm text-gray-600">
//                         <FiClock size={14} className="mr-1" />
//                         <span>ROI: {module.roi}</span>
//                       </div>
//                       <button className="text-emerald-600 font-medium flex items-center hover:text-emerald-700">
//                         View Details
//                         <FiChevronRight size={16} className="ml-1" />
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//           </div>
//         </div>
//       </section>

//       {/* Combo Suggestions */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">
//             Recommended Franchise Combos
//           </h2>
//           <div className="flex space-x-4 overflow-x-auto pb-4">
//             {combos.map((combo, index) => (
//               <div
//                 key={index}
//                 className="min-w-[300px] bg-gradient-to-br p-6 rounded-xl text-white"
//                 style={{
//                   backgroundImage: `linear-gradient(to right, ${combo.color.split(" ")[0].replace("from-", "")}, ${combo.color.split(" ")[1].replace("to-", "")})`,
//                 }}
//               >
//                 <div className="flex items-center justify-between mb-3">
//                   <h3 className="text-xl font-bold">{combo.name}</h3>
//                   <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
//                     Save {combo.discount}
//                   </span>
//                 </div>
//                 <p className="text-white/90 mb-4">{combo.desc}</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {combo.modules.map((mod) => (
//                     <span
//                       key={mod}
//                       className="bg-white/20 px-3 py-1 rounded-lg text-sm capitalize"
//                     >
//                       {mod}
//                     </span>
//                   ))}
//                 </div>
//                 <button className="w-full bg-white text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
//                   Explore Combo
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Module Detail - Bottom Sheet/Side Panel */}
//       <AnimatePresence>
//         {selectedModule && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/50 z-40"
//               onClick={() => setSelectedModule(null)}
//             />

//             {/* Panel */}
//             <motion.div
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "100%" }}
//               transition={{ type: "spring", damping: 25 }}
//               className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 max-h-[80vh] overflow-hidden md:max-w-md md:right-0 md:left-auto md:top-0 md:bottom-auto md:rounded-none md:h-full"
//             >
//               <div className="p-6 overflow-y-auto max-h-[80vh]">
//                 {/* Header */}
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     {selectedModule.name}
//                   </h2>
//                   <button
//                     onClick={() => setSelectedModule(null)}
//                     className="p-2 hover:bg-gray-100 rounded-lg"
//                   >
//                     <FiX size={24} />
//                   </button>
//                 </div>

//                 {/* Image */}
//                 <img
//                   src={selectedModule.image}
//                   alt={selectedModule.name}
//                   className="w-full h-48 object-cover rounded-xl mb-6"
//                 />

//                 {/* Description */}
//                 <p className="text-gray-600 mb-6">{selectedModule.fullDesc}</p>

//                 {/* What You Get */}
//                 <div className="mb-6">
//                   <h3 className="font-bold text-gray-800 mb-3">What You Get</h3>
//                   <div className="space-y-2">
//                     {selectedModule.features.map((feature, idx) => (
//                       <div key={idx} className="flex items-center">
//                         <FiCheck className="text-emerald-600 mr-3" size={20} />
//                         <span className="text-gray-700">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Investment & Earnings */}
//                 <div className="bg-gray-50 rounded-xl p-4 mb-6">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <p className="text-sm text-gray-500">Investment</p>
//                       <p className="text-xl font-bold text-gray-800">
//                         {selectedModule.investment}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Monthly Income</p>
//                       <p className="text-xl font-bold text-emerald-600">
//                         {selectedModule.earnings}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Apply Button */}
//                 <button
//                   onClick={() => {
//                     handleApply(selectedModule.id);
//                     setSelectedModule(null);
//                   }}
//                   className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all"
//                 >
//                   Apply for {selectedModule.name}
//                 </button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Floating Apply Button */}
//       <button
//         onClick={() => handleApply()}
//         className="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all z-30 flex items-center space-x-2"
//       >
//         <FiPlus size={20} />
//         <span className="font-medium">Apply for Franchise</span>
//       </button>

//       {/* Apply Form Modal */}
//       <AnimatePresence>
//         {showApplyForm && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/50 z-40"
//               onClick={() => setShowApplyForm(false)}
//             />
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             >
//               <div className="bg-white rounded-2xl max-w-md w-full p-6">
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     Apply for Franchise
//                   </h2>
//                   <button
//                     onClick={() => setShowApplyForm(false)}
//                     className="p-2 hover:bg-gray-100 rounded-lg"
//                   >
//                     <FiX size={24} />
//                   </button>
//                 </div>

//                 <form onSubmit={submitApplication} className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       <FiUser className="inline mr-2" size={16} />
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.name}
//                       onChange={(e) =>
//                         setFormData({ ...formData, name: e.target.value })
//                       }
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                       placeholder="Enter your name"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       <FiPhone className="inline mr-2" size={16} />
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       value={formData.phone}
//                       onChange={(e) =>
//                         setFormData({ ...formData, phone: e.target.value })
//                       }
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                       placeholder="+91 98765 43210"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       <FiMapPin className="inline mr-2" size={16} />
//                       City
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.city}
//                       onChange={(e) =>
//                         setFormData({ ...formData, city: e.target.value })
//                       }
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                       placeholder="Enter your city"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       <FiShoppingBag className="inline mr-2" size={16} />
//                       Interested Module (Optional)
//                     </label>
//                     <select
//                       value={formData.module}
//                       onChange={(e) =>
//                         setFormData({ ...formData, module: e.target.value })
//                       }
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                     >
//                       <option value="">Select a module</option>
//                       {Object.entries(modules).map(([key, module]) => (
//                         <option key={key} value={key}>
//                           {module.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all"
//                   >
//                     Submit Application
//                   </button>
//                 </form>

//                 <p className="text-center text-sm text-gray-500 mt-4">
//                   Our team will contact you within 24 hours
//                 </p>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Trust Indicators */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-emerald-600 mb-2">
//                 50+
//               </div>
//               <p className="text-gray-600">Active Partners</p>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-emerald-600 mb-2">
//                 4.8
//               </div>
//               <p className="text-gray-600">Average Rating</p>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-emerald-600 mb-2">
//                 12M
//               </div>
//               <p className="text-gray-600">Avg. ROI Time</p>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-emerald-600 mb-2">
//                 24/7
//               </div>
//               <p className="text-gray-600">Support</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FranchisePage;

import React, { useState, useEffect, useRef } from "react";
import {
  FiAward,
  FiTrendingUp,
  FiUsers,
  FiMapPin,
  FiCheck,
  FiStar,
  FiChevronDown,
  FiX,
  FiDollarSign,
  FiClock,
  FiTarget,
  FiShield,
  FiUser,
  FiPhone,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiPieChart,
  FiVideo,
  FiArrowRight,
  FiSun,
  FiMoon,
  FiShoppingCart,
  FiHeart,
  FiActivity,
  FiBookOpen,
  FiPlay,
  FiShoppingBag,
  FiCheckCircle,
  FiHeadphones,
} from "react-icons/fi";
import franchiseImg from "../assets/franchise/franchise-bg.avif";
import FranchiseList from "../components/franchise/FranchiseList";
import FAQSection from "../components/franchise/FQASection";
import DownloadApp from "../components/DownloadApp";
import EatProteinShopSection from "../components/franchise/EatProteinShopSection";

const FranchisePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      type: "expert",
      text: "Hello! 👋 Welcome to our franchise program. How can I help you today?",
    },
  ]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    module: "",
  });
  const [calculatorData, setCalculatorData] = useState({
    module: "",
    investment: 5,
    monthlyRevenue: 50000,
    expenses: 20000,
  });

  // Module definitions
  const modules = {
    shop: {
      id: "shop",
      name: "Health Shop",
      price: "₹2.5L",
      investment: "₹2.5L - ₹5L",
      earnings: "₹35K - ₹75K/month",
      roi: "6-8 months",
      successRate: 94,
      icon: FiShoppingCart,
      color: "from-purple-600 to-pink-600",
      image: "https://picsum.photos/seed/shop/400/300",
      features: [
        "Complete inventory management system",
        "Supplier network with 500+ brands",
        "POS software with analytics",
        "Staff training program",
        "Marketing materials & support",
        "Online store integration",
      ],
      specifications: {
        "Space Required": "200-500 sq ft",
        "Staff Needed": "2-3 persons",
        "Franchise Fee": "₹50,000",
        Royalty: "3% of revenue",
        "Marketing Fee": "1% of revenue",
        "Training Period": "2 weeks",
      },
      gallery: [
        "https://picsum.photos/seed/shop1/300/200",
        "https://picsum.photos/seed/shop2/300/200",
        "https://picsum.photos/seed/shop3/300/200",
      ],
    },
    diet: {
      id: "diet",
      name: "Diet Clinic",
      price: "₹3L",
      investment: "₹3L - ₹6L",
      earnings: "₹45K - ₹90K/month",
      roi: "5-7 months",
      successRate: 91,
      icon: FiHeart,
      color: "from-red-600 to-orange-600",
      image: "https://picsum.photos/seed/diet/400/300",
      features: [
        "Certified nutritionist support",
        "Diet planning software",
        "Client management system",
        "Regular health checkups",
        "Workshop materials",
        "Online consultation platform",
      ],
      specifications: {
        "Space Required": "300-600 sq ft",
        "Staff Needed": "2-3 persons",
        "Franchise Fee": "₹75,000",
        Royalty: "4% of revenue",
        "Marketing Fee": "1.5% of revenue",
        "Training Period": "3 weeks",
      },
      gallery: [
        "https://picsum.photos/seed/diet1/300/200",
        "https://picsum.photos/seed/diet2/300/200",
        "https://picsum.photos/seed/diet3/300/200",
      ],
    },
    fitness: {
      id: "fitness",
      name: "Fitness Center",
      price: "₹5L",
      investment: "₹5L - ₹15L",
      earnings: "₹60K - ₹150K/month",
      roi: "8-12 months",
      successRate: 88,
      icon: FiActivity,
      color: "from-blue-600 to-cyan-600",
      image: "https://picsum.photos/seed/fitness/400/300",
      features: [
        "Gym equipment package",
        "Personal trainer network",
        "Membership management system",
        "Class scheduling software",
        "Nutrition counseling",
        "Body composition analysis",
      ],
      specifications: {
        "Space Required": "1000-2500 sq ft",
        "Staff Needed": "4-6 persons",
        "Franchise Fee": "₹100,000",
        Royalty: "5% of revenue",
        "Marketing Fee": "2% of revenue",
        "Training Period": "4 weeks",
      },
      gallery: [
        "https://picsum.photos/seed/fitness1/300/200",
        "https://picsum.photos/seed/fitness2/300/200",
        "https://picsum.photos/seed/fitness3/300/200",
      ],
    },
    recipes: {
      id: "recipes",
      name: "Recipe Studio",
      price: "₹2L",
      investment: "₹2L - ₹4L",
      earnings: "₹30K - ₹60K/month",
      roi: "4-6 months",
      successRate: 92,
      icon: FiBookOpen,
      color: "from-green-600 to-teal-600",
      image: "https://picsum.photos/seed/recipes/400/300",
      features: [
        "Recipe development platform",
        "Video production setup",
        "Content creation tools",
        "Social media management",
        "Cooking class materials",
        "Brand partnership opportunities",
      ],
      specifications: {
        "Space Required": "150-400 sq ft",
        "Staff Needed": "1-2 persons",
        "Franchise Fee": "₹40,000",
        Royalty: "3% of revenue",
        "Marketing Fee": "1% of revenue",
        "Training Period": "2 weeks",
      },
      gallery: [
        "https://picsum.photos/seed/recipes1/300/200",
        "https://picsum.photos/seed/recipes2/300/200",
        "https://picsum.photos/seed/recipes3/300/200",
      ],
    },
  };

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      module: "diet",
      investment: "₹3.5L",
      text: "Starting a diet clinic was the best decision. The support team helped me with everything from setup to marketing.",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      location: "Delhi",
      module: "fitness",
      investment: "₹8L",
      text: "The fitness center franchise exceeded my expectations. I broke even in just 7 months!",
      rating: 5,
    },
    {
      name: "Anjali Patel",
      location: "Bangalore",
      module: "shop",
      investment: "₹4L",
      text: "Amazing business model. The inventory management system makes running the health shop so easy.",
      rating: 5,
    },
    {
      name: "Kumar Reddy",
      location: "Hyderabad",
      module: "recipes",
      investment: "₹2.5L",
      text: "Recipe studio franchise helped me turn my passion into profit. Great community support!",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What is the minimum investment required?",
      answer:
        "Investment starts from ₹2L for Recipe Studio and goes up to ₹15L for Fitness Center. We have flexible payment options available.",
      popular: true,
    },
    {
      question: "How long does it take to break even?",
      answer:
        "Depending on the module, break-even period ranges from 4-12 months. Our average franchisee breaks even in 6 months.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "No prior experience is required. We provide comprehensive training and ongoing support for all franchisees.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide complete support including setup, training, marketing, inventory management, and 24/7 operational assistance.",
    },
    {
      question: "Can I own multiple franchises?",
      answer:
        "Yes! We offer special discounts for multiple franchise owners. Many of our successful partners own 2-3 locations.",
    },
    {
      question: "Is there a guarantee?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your franchise fee completely.",
    },
  ];

  const calculateROI = () => {
    const monthlyProfit =
      calculatorData.monthlyRevenue - calculatorData.expenses;
    const annualProfit = monthlyProfit * 12;
    const totalInvestment = calculatorData.investment * 100000;
    const roiPercentage = ((annualProfit / totalInvestment) * 100).toFixed(1);
    const breakEvenMonths = Math.ceil(totalInvestment / monthlyProfit);

    return {
      monthlyProfit,
      annualProfit,
      roiPercentage,
      breakEvenMonths,
    };
  };

  const submitApplication = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(
      `Application submitted successfully! We'll contact you at ${formData.phone} within 24 hours.`,
    );
    setShowApplyForm(false);
    setFormData({ name: "", phone: "", city: "", module: "" });
  };

  const sendMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, { type: "user", text: chatInput }]);

      // Simulate expert response
      setTimeout(() => {
        const responses = [
          "Thank you for your interest! Let me help you with that.",
          "Great question! Based on your requirements, I recommend...",
          "Our franchise program offers excellent ROI. Would you like to see the calculator?",
          "I can schedule a call with our franchise expert. What time works best for you?",
        ];
        setChatMessages((prev) => [
          ...prev,
          {
            type: "expert",
            text: responses[Math.floor(Math.random() * responses.length)],
          },
        ]);
      }, 1000);

      setChatInput("");
    }
  };

  useEffect(() => {
    // Auto-scroll chat to bottom
    const chatContainer = document.getElementById("chat-messages");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"} transition-colors duration-300`}
    >
      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-32 px-4 bg-cover bg-center"
        style={{
          backgroundImage: `url(${franchiseImg})`,
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

        {/* Optional brand gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 to-teal-700/30" />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1
              className={`text-5xl md:text-6xl font-bold mb-6 ${
                isDarkMode ? "text-white" : "text-white"
              }`}
            >
              Start Your
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {" "}
                Health Franchise
              </span>
              Journey Today
            </h1>

            <p className="text-xl mb-8 text-gray-200">
              Join 437+ successful entrepreneurs. Choose from 4 proven business
              models with 90%+ success rate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowApplyForm(true)}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Modules Section */}
      {/* <section
        id="modules"
        className={`py-16 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={`text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}
            >
              Choose Your Franchise Module
            </h2>
            <p
              className={`text-xl ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Select the perfect business model for your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(modules).map((module) => (
              <div
                key={module.id}
                className={`${isDarkMode ? "bg-gray-700" : "bg-white"} rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105`}
                onClick={() => setSelectedModule(module)}
              >
                <div
                  className={`h-48 bg-gradient-to-r ${module.color} rounded-t-2xl flex items-center justify-center`}
                >
                  <module.icon className="text-white" size={48} />
                </div>
                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}
                  >
                    {module.name}
                  </h3>
                  <p className={`text-3xl font-bold text-emerald-600 mb-4`}>
                    {module.price}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                      >
                        Monthly
                      </span>
                      <span
                        className={`font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
                      >
                        {module.earnings}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                      >
                        ROI
                      </span>
                      <span
                        className={`font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
                      >
                        {module.roi}
                      </span>
                    </div>
                  </div>
                  <button
                    className={`w-full mt-4 py-2 ${isDarkMode ? "bg-gray-600 text-white" : "bg-gray-100 text-gray-800"} rounded-lg font-medium hover:bg-opacity-80 transition-colors`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <EatProteinShopSection isDarkMode={isDarkMode} />
      <FranchiseList isDarkMode={isDarkMode} />

      {/* Testimonials Section */}
      {/* <section
        id="testimonials"
        className={`py-16 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={`text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}
            >
              Success Stories
            </h2>
            <p
              className={`text-xl ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Hear from our successful franchise partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${isDarkMode ? "bg-gray-700" : "bg-gray-50"} rounded-2xl p-6`}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="fill-current text-yellow-400"
                      size={20}
                    />
                  ))}
                </div>
                <p
                  className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className={`font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {testimonial.location} •{" "}
                      {modules[testimonial.module]?.name}
                    </p>
                  </div>
                  <p className="font-bold text-emerald-600">
                    {testimonial.investment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section
        id="testimonials"
        className={`py-20 ${isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-emerald-50 to-blue-50"} relative overflow-hidden`}
      >
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full px-4 py-2 mb-4">
              <FiAward className="text-emerald-600" size={20} />
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold text-sm">
                SUCCESS STORIES
              </span>
            </div>
            <h2
              className={`text-5xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}
            >
              Transforming Dreams Into
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Reality
              </span>
            </h2>
            <p
              className={`text-xl ${isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-3xl mx-auto`}
            >
              Join 2000+ successful entrepreneurs who started their journey with
              us
            </p>
          </div>

          {/* Featured Testimonial */}
          <div
            className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-3xl shadow-2xl p-8 mb-12 relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-full filter blur-3xl opacity-10"></div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt="Rahul Sharma"
                      className="w-32 h-32 rounded-2xl object-cover mx-auto lg:mx-0"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl px-3 py-1 text-sm font-bold">
                      TOP PERFORMER
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="fill-current text-yellow-400"
                        size={24}
                      />
                    ))}
                  </div>

                  <blockquote
                    className={`text-2xl font-medium mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-700"} italic`}
                  >
                    "Starting my Domino's franchise was the best decision I ever
                    made. The support system and brand recognition helped me
                    achieve ₹45L monthly revenue within just 8 months!"
                  </blockquote>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
                    <div>
                      <h4
                        className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
                      >
                        Rahul Sharma
                      </h4>
                      <p
                        className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                      >
                        Domino's Franchise • Delhi
                      </p>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-emerald-600">
                          ₹45L
                        </p>
                        <p className="text-xs text-gray-500">Monthly Revenue</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">8M</p>
                        <p className="text-xs text-gray-500">Break-even</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {[
                      "Quick ROI",
                      "Great Support",
                      "Brand Power",
                      "High Demand",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Testimonial Card 1 */}
            <div
              className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Priya Patel"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4
                      className={`font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
                    >
                      Priya Patel
                    </h4>
                    <p className="text-sm text-gray-500">Amul • Mumbai</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="fill-current text-yellow-400"
                      size={16}
                    />
                  ))}
                </div>
              </div>

              <p
                className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                "Never thought I could run a successful business. Amul's
                franchise model made it possible with minimal investment and
                maximum support."
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">Investment</p>
                    <p className="font-bold text-emerald-600">₹8L</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Monthly</p>
                    <p className="font-bold text-blue-600">₹2.5L</p>
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                  6M Old
                </span>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div
              className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Amit Kumar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4
                      className={`font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
                    >
                      Amit Kumar
                    </h4>
                    <p className="text-sm text-gray-500">
                      Starbucks • Bangalore
                    </p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="fill-current text-yellow-400"
                      size={16}
                    />
                  ))}
                </div>
              </div>

              <p
                className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                "Premium location, premium brand, premium returns. Starbucks
                franchise exceeded all my expectations. The training program was
                exceptional."
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">Investment</p>
                    <p className="font-bold text-emerald-600">₹85L</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Monthly</p>
                    <p className="font-bold text-blue-600">₹12L</p>
                  </div>
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                  18M Old
                </span>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div
              className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Neha Reddy"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4
                      className={`font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
                    >
                      Neha Reddy
                    </h4>
                    <p className="text-sm text-gray-500">Subway • Hyderabad</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="fill-current text-yellow-400"
                      size={16}
                    />
                  ))}
                </div>
              </div>

              <p
                className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                "Health-conscious market + trusted brand = perfect combination.
                Subway helped me tap into the growing wellness segment with
                great margins."
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">Investment</p>
                    <p className="font-bold text-emerald-600">₹20L</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Monthly</p>
                    <p className="font-bold text-blue-600">₹3.5L</p>
                  </div>
                </div>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
                  12M Old
                </span>
              </div>
            </div>
          </div>

          {/* Video Testimonials */}
          {/* <div className="mb-12">
            <h3
              className={`text-2xl font-bold mb-6 text-center ${isDarkMode ? "text-white" : "text-gray-800"}`}
            >
              Video Success Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Vikram Singh",
                  franchise: "KFC",
                  views: "15K",
                  thumbnail:
                    "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                },
                {
                  name: "Anjali Mehta",
                  franchise: "Pizza Hut",
                  views: "12K",
                  thumbnail:
                    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                },
                {
                  name: "Rajesh Kumar",
                  franchise: "McDonald's",
                  views: "18K",
                  thumbnail:
                    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                },
              ].map((video, idx) => (
                <div key={idx} className="relative group cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FiPlay className="text-gray-800 ml-1" size={24} />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold">{video.name}</h4>
                      <p className="text-white/80 text-sm">
                        {video.franchise} • {video.views} views
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Stats Section */}
          <div
            className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-3xl shadow-xl p-8`}
          >
            <h3
              className={`text-2xl font-bold mb-8 text-center ${isDarkMode ? "text-white" : "text-gray-800"}`}
            >
              Community Achievements
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: FiUsers,
                  label: "Total Partners",
                  value: "2000+",
                  color: "emerald",
                },
                {
                  icon: FiTrendingUp,
                  label: "Avg. ROI",
                  value: "75%",
                  color: "blue",
                },
                {
                  icon: FiMapPin,
                  label: "Cities",
                  value: "100+",
                  color: "purple",
                },
                {
                  icon: FiAward,
                  label: "Success Rate",
                  value: "95%",
                  color: "orange",
                },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className={`w-16 h-16 bg-${stat.color}-100 dark:bg-${stat.color}-900/20 rounded-2xl flex items-center justify-center mx-auto mb-3`}
                  >
                    <stat.icon className={`text-${stat.color}-600`} size={28} />
                  </div>
                  <p
                    className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
                  >
                    {stat.value}
                  </p>
                  <p
                    className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transform hover:scale-105 transition-all">
              Share Your Success Story
            </button>
            <p
              className={`mt-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Join our thriving community of successful entrepreneurs
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 437+ successful entrepreneurs in the health industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowApplyForm(true)}
              className="px-8 py-4 bg-white text-gray-800 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Apply Now - Get Started Today
            </button>
            <button
              onClick={() => setShowLiveChat(true)}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-gray-800 transition-all"
            >
              Talk to Expert
            </button>
          </div>
        </div>
      </section> */}
      {/* <DownloadApp /> */}
      {/* Module Detail Modal */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div
            className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl`}
          >
            <div className="relative h-64">
              <img
                src={selectedModule.image}
                alt={selectedModule.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={() => setSelectedModule(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <FiX className="text-white" size={24} />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-4xl font-bold text-white mb-2">
                  {selectedModule.name}
                </h2>
                <p className="text-white/90">{selectedModule.investment}</p>
              </div>
            </div>

            <div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div
                  className={`${isDarkMode ? "bg-gray-700" : "bg-gray-50"} rounded-xl p-4`}
                >
                  <FiDollarSign className="text-emerald-600 mb-2" size={24} />
                  <p
                    className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Investment
                  </p>
                  <p
                    className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
                  >
                    {selectedModule.investment}
                  </p>
                </div>
                <div
                  className={`${isDarkMode ? "bg-gray-700" : "bg-gray-50"} rounded-xl p-4`}
                >
                  <FiTrendingUp className="text-emerald-600 mb-2" size={24} />
                  <p
                    className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Monthly
                  </p>
                  <p
                    className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
                  >
                    {selectedModule.earnings}
                  </p>
                </div>
                <div
                  className={`${isDarkMode ? "bg-gray-700" : "bg-gray-50"} rounded-xl p-4`}
                >
                  <FiClock className="text-emerald-600 mb-2" size={24} />
                  <p
                    className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    ROI
                  </p>
                  <p
                    className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
                  >
                    {selectedModule.roi}
                  </p>
                </div>
                <div
                  className={`${isDarkMode ? "bg-gray-700" : "bg-gray-50"} rounded-xl p-4`}
                >
                  <FiTarget className="text-emerald-600 mb-2" size={24} />
                  <p
                    className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Success
                  </p>
                  <p
                    className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
                  >
                    {selectedModule.successRate}%
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3
                  className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}
                >
                  Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedModule.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <FiCheck className="text-emerald-600" size={20} />
                      <span
                        className={
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3
                  className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}
                >
                  Specifications
                </h3>
                <div
                  className={`${isDarkMode ? "bg-gray-700" : "bg-gray-50"} rounded-xl p-4`}
                >
                  {Object.entries(selectedModule.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className={`flex justify-between py-2 ${isDarkMode ? "border-gray-600" : "border-gray-200"} border-b`}
                      >
                        <span
                          className={
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          }
                        >
                          {key}
                        </span>
                        <span
                          className={`font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
                        >
                          {value}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setFormData({ ...formData, module: selectedModule.id });
                    setSelectedModule(null);
                    setShowApplyForm(true);
                  }}
                  className="flex-1 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => {
                    setSelectedModule(null);
                    setShowCalculator(true);
                  }}
                  className={`flex-1 py-4 ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-800"} rounded-xl font-bold hover:shadow-xl transition-all`}
                >
                  Calculate ROI
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* ROI Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div
            className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-3xl max-w-2xl w-full p-8 shadow-2xl`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2
                className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
              >
                ROI Calculator
              </h2>
              <button
                onClick={() => setShowCalculator(false)}
                className={`p-2 rounded-lg ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
              >
                <FiX
                  size={24}
                  className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Module
                </label>
                <select
                  value={calculatorData.module}
                  onChange={(e) =>
                    setCalculatorData({
                      ...calculatorData,
                      module: e.target.value,
                    })
                  }
                  className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100"}`}
                >
                  <option value="">Select module</option>
                  {Object.values(modules).map((module) => (
                    <option key={module.id} value={module.id}>
                      {module.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Investment (₹ Lakhs): {calculatorData.investment}
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={calculatorData.investment}
                  onChange={(e) =>
                    setCalculatorData({
                      ...calculatorData,
                      investment: parseInt(e.target.value),
                    })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Monthly Revenue (₹)
                </label>
                <input
                  type="number"
                  value={calculatorData.monthlyRevenue}
                  onChange={(e) =>
                    setCalculatorData({
                      ...calculatorData,
                      monthlyRevenue: parseInt(e.target.value),
                    })
                  }
                  className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100"}`}
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Monthly Expenses (₹)
                </label>
                <input
                  type="number"
                  value={calculatorData.expenses}
                  onChange={(e) =>
                    setCalculatorData({
                      ...calculatorData,
                      expenses: parseInt(e.target.value),
                    })
                  }
                  className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100"}`}
                />
              </div>

              <div
                className={`${isDarkMode ? "bg-gray-700" : "bg-gray-50"} rounded-xl p-6`}
              >
                <h3
                  className={`text-lg font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}
                >
                  Results
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Monthly Profit
                    </p>
                    <p className="text-2xl font-bold text-emerald-600">
                      ₹{calculateROI().monthlyProfit.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Annual ROI
                    </p>
                    <p className="text-2xl font-bold text-emerald-600">
                      {calculateROI().roiPercentage}%
                    </p>
                  </div>
                  <div>
                    <p
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Break-even
                    </p>
                    <p className="text-2xl font-bold text-emerald-600">
                      {calculateROI().breakEvenMonths} months
                    </p>
                  </div>
                  <div>
                    <p
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Annual Profit
                    </p>
                    <p className="text-2xl font-bold text-emerald-600">
                      ₹{calculateROI().annualProfit.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowCalculator(false);
                  setShowApplyForm(true);
                }}
                className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl font-bold hover:shadow-xl transition-all"
              >
                Apply Based on Calculation
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Apply Form Modal */}
      {showApplyForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={() => setShowApplyForm(false)} // backdrop close (optional)
        >
          <div
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
            className={`relative ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } rounded-3xl max-w-md w-full p-8 shadow-2xl`}
          >
            {/* ❌ Cancel Button */}
            <button
              onClick={() => setShowApplyForm(false)}
              className={`absolute top-4 right-4 p-2 rounded-full transition ${
                isDarkMode
                  ? "text-gray-400 hover:bg-gray-700 hover:text-white"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              <FiX size={22} />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward size={36} className="text-white" />
              </div>

              <h2
                className={`text-3xl font-bold mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Start Your Journey
              </h2>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Apply now and get exclusive benefits
              </p>
            </div>

            <form onSubmit={submitApplication} className="space-y-4">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Name
                </label>
                <div className="relative">
                  <FiUser
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`w-full pl-10 pr-4 py-3 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100"}`}
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Phone
                </label>
                <div className="relative">
                  <FiPhone
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`w-full pl-10 pr-4 py-3 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100"}`}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  City
                </label>
                <div className="relative">
                  <FiMapPin
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className={`w-full pl-10 pr-4 py-3 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100"}`}
                    placeholder="Enter your city"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Module
                </label>
                <select
                  value={formData.module}
                  onChange={(e) =>
                    setFormData({ ...formData, module: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100"}`}
                >
                  <option value="">Select module</option>
                  {Object.values(modules).map((module) => (
                    <option key={module.id} value={module.id}>
                      {module.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl font-bold hover:shadow-xl transition-all"
              >
                Submit Application
              </button>
            </form>

            <p
              className={`text-center text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"} mt-6`}
            >
              <FiCheck className="inline text-emerald-600 mr-1" />
              Our team will contact you within 24 hours
            </p>
          </div>
        </div>
      )}
      {/* Live Chat Widget */}
      {showLiveChat && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FiMessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Franchise Expert</h3>
                  <p className="text-xs opacity-90">
                    Usually replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowLiveChat(false)}
                className="p-2 hover:bg-white/20 rounded-lg"
              >
                <FiX size={20} />
              </button>
            </div>
          </div>

          <div
            id="chat-messages"
            className="flex-1 overflow-y-auto p-4 space-y-4"
          >
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-xl ${
                    message.type === "user"
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-lg bg-gray-100"
              />
              <button
                onClick={sendMessage}
                className="px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              >
                <FiSend size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Video Modal */}
      {/* {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h2
                className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
              >
                Success Stories
              </h2>
              <button
                onClick={() => setShowVideoModal(false)}
                className={`p-2 rounded-lg ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
              >
                <FiX
                  size={24}
                  className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                />
              </button>
            </div>

            <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center">
              <div className="text-center text-white">
                <FiPlay size={64} className="mx-auto mb-4" />
                <p className="text-xl">Play Success Stories Video</p>
                <p className="text-sm opacity-75 mt-2">
                  See how our franchisees achieved success
                </p>
              </div>
            </div>
          </div>
        </div>
      )} */}
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 flex flex-col space-y-3 z-40">
        <button
          onClick={() => setShowLiveChat(true)}
          className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
        >
          <FiMessageSquare size={24} />
        </button>
        <button
          onClick={() => setShowCalculator(true)}
          className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
        >
          <FiPieChart size={24} />
        </button>
      </div>
      {/* Apply Now Floating Button */}
      <button
        onClick={() => setShowApplyForm(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all z-40 flex items-center space-x-3"
      >
        <span className="font-bold text-lg">Apply Now</span>
        <FiArrowRight size={20} />
      </button>
    </div>
  );
};

export default FranchisePage;

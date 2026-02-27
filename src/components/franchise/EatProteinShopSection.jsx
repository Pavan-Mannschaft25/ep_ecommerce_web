// import {
//   FiTrendingUp,
//   FiStar,
//   FiShoppingBag,
//   FiCheckCircle,
//   FiAward,
//   FiClock,
//   FiHeadphones,
// } from "react-icons/fi";

// export default function EatProteinShopSection({ isDarkMode }) {
//   return (
//     <section
//       id="eatprotein-shop"
//       className={`py-20 ${
//         isDarkMode
//           ? "bg-gray-900"
//           : "bg-gradient-to-br from-gray-50 via-white to-emerald-50"
//       } relative overflow-hidden`}
//     >
//       <div className="container mx-auto px-4 relative z-10">
//         {/* HEADER */}
//         <div className="text-center mb-14">
//           <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-5">
//             <FiTrendingUp className="animate-pulse" />
//             <span className="text-sm font-semibold">
//               EatProtein – Shop Module
//             </span>
//           </div>

//           <h2
//             className={`text-5xl font-bold mb-4 ${
//               isDarkMode ? "text-white" : "text-gray-800"
//             }`}
//           >
//             Best Protein Foods
//             <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
//               Franchise Shop
//             </span>
//           </h2>

//           <p
//             className={`text-xl max-w-3xl mx-auto ${
//               isDarkMode ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             A ready-to-launch protein food & supplement shop model with
//             <span className="font-bold text-emerald-600"> high demand </span>
//             and fast ROI.
//           </p>
//         </div>

//         {/* SHOP CARD */}
//         <div className="max-w-4xl mx-auto">
//           <div className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
//             {/* IMAGE */}
//             <div className="relative h-96 overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25"
//                 alt="EatProtein Shop"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

//               {/* BADGES */}
//               <div className="absolute top-4 left-4 flex flex-col gap-2">
//                 <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
//                   HIGH DEMAND
//                 </span>
//                 <div className="flex items-center gap-1 bg-white/90 rounded-full px-3 py-1">
//                   <FiStar className="text-yellow-500" size={14} />
//                   <span className="text-xs font-bold">4.9</span>
//                 </div>
//               </div>

//               {/* ICON */}
//               <div className="absolute bottom-4 left-4 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
//                 <FiShoppingBag className="text-white" size={24} />
//               </div>
//             </div>

//             {/* CONTENT */}
//             <div className="p-8 space-y-6">
//               <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
//                 EatProtein Healthy Foods Shop
//               </h3>

//               {/* INVESTMENT */}
//               <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4">
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   Starting Investment
//                 </p>
//                 <p className="text-3xl font-bold text-emerald-600">
//                   ₹6 – 12 Lakhs
//                 </p>
//               </div>

//               {/* METRICS */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
//                   <p className="text-xs text-gray-600 dark:text-gray-400">
//                     Monthly Revenue
//                   </p>
//                   <p className="text-xl font-bold text-gray-800 dark:text-white">
//                     ₹2 – 4 Lakhs
//                   </p>
//                 </div>

//                 <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
//                   <p className="text-xs text-gray-600 dark:text-gray-400">
//                     ROI
//                   </p>
//                   <p className="text-xl font-bold text-emerald-600">
//                     90% in 8 Months
//                   </p>
//                 </div>
//               </div>

//               {/* FEATURES */}
//               <div className="space-y-3">
//                 {[
//                   "Premium Protein & Supplements",
//                   "Dietician-Recommended Products",
//                   "Online + Offline Sales Model",
//                   "Central Marketing Support",
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-center gap-2">
//                     <FiCheckCircle className="text-emerald-500" size={18} />
//                     <span className="text-gray-700 dark:text-gray-300">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA */}
//               <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl py-4 font-bold text-lg hover:shadow-lg hover:scale-105 transition-all">
//                 Explore EatProtein Shop
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
//           {[
//             { label: "Active Shops", value: "120+", icon: FiTrendingUp },
//             { label: "Success Rate", value: "95%", icon: FiAward },
//             { label: "Break-even", value: "8 Months", icon: FiClock },
//             { label: "Support", value: "24/7", icon: FiHeadphones },
//           ].map((stat, i) => (
//             <div
//               key={i}
//               className={`${
//                 isDarkMode ? "bg-gray-800" : "bg-white"
//               } rounded-2xl p-6 text-center shadow-md`}
//             >
//               <stat.icon className="mx-auto mb-3 text-emerald-600" size={28} />
//               <div className="text-3xl font-bold text-emerald-600">
//                 {stat.value}
//               </div>
//               <div className="text-sm text-gray-500">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  FiTrendingUp,
  FiStar,
  FiShoppingBag,
  FiCheckCircle,
  FiAward,
  FiClock,
  FiHeadphones,
  FiMapPin,
  FiDollarSign,
  FiBarChart2,
  FiArrowRight,
} from "react-icons/fi";

export default function EatProteinShopSection({ isDarkMode }) {
  return (
    <section
      id="eatprotein-shop"
      className={`py-16 ${
        isDarkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-emerald-50"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <FiTrendingUp className="animate-pulse" />
            <span className="text-sm font-semibold">Featured Franchise</span>
          </div>

          <h2
            className={`text-4xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            EatProtein
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Healthy Foods Shop
            </span>
          </h2>

          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Premium protein foods & supplement franchise with proven business
            model
          </p>
        </div>

        {/* MAIN CONTENT - LEFT IMAGE, RIGHT DETAILS */}
        <div className="max-w-6xl mx-auto">
          <div
            className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-lg overflow-hidden`}
          >
            <div className="flex flex-col lg:flex-row">
              {/* LEFT - IMAGE */}
              <div className="lg:w-2/5 relative">
                <img
                  src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25"
                  alt="EatProtein Shop"
                  className="w-full h-full lg:h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />

                {/* Mobile Badge */}
                <div className="absolute top-4 left-4 lg:hidden">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    HIGH DEMAND
                  </span>
                </div>

                {/* Desktop Overlay Info */}
                <div className="hidden lg:flex absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <FiShoppingBag className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Rating</p>
                      <div className="flex items-center gap-1">
                        <FiStar className="text-yellow-400 fill-current" />
                        <span className="text-white font-bold">4.9</span>
                        <span className="text-white/60 text-sm">
                          (120+ reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT - DETAILS */}
              <div className="lg:w-3/5 p-6 lg:p-8">
                {/* Title and Badges */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <h3
                      className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    >
                      EatProtein Shop
                    </h3>
                    <span className="hidden lg:inline-block bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      HIGH DEMAND
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <FiMapPin className="text-gray-400" />
                      <span
                        className={
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        Pan India Available
                      </span>
                    </div>
                    <div className="flex items-center gap-1 lg:hidden">
                      <FiStar className="text-yellow-500" />
                      <span className="font-medium">4.9</span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div
                    className={`p-4 rounded-xl ${isDarkMode ? "bg-gray-700" : "bg-emerald-50"}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <FiDollarSign className="text-emerald-600" />
                      <span className="text-xs text-gray-600">Investment</span>
                    </div>
                    <p
                      className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    >
                      ₹6-12 Lakhs
                    </p>
                  </div>
                  <div
                    className={`p-4 rounded-xl ${isDarkMode ? "bg-gray-700" : "bg-blue-50"}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <FiBarChart2 className="text-blue-600" />
                      <span className="text-xs text-gray-600">
                        Monthly Revenue
                      </span>
                    </div>
                    <p
                      className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    >
                      ₹2-4 Lakhs
                    </p>
                  </div>
                </div>

                {/* ROI Highlight */}
                <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/90 text-sm mb-1">Expected ROI</p>
                      <p className="text-white text-2xl font-bold">
                        90% in 8 Months
                      </p>
                    </div>
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <FiTrendingUp className="text-white text-2xl" />
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4
                    className={`font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Premium Protein Products",
                      "Dietician Recommended",
                      "Online + Offline Sales",
                      "Marketing Support",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <FiCheckCircle
                          className="text-emerald-500 flex-shrink-0"
                          size={16}
                        />
                        <span
                          className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl py-3 font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                  Explore This Franchise
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            {
              label: "Active Shops",
              value: "120+",
              icon: FiShoppingBag,
              color: "emerald",
            },
            {
              label: "Success Rate",
              value: "95%",
              icon: FiAward,
              color: "blue",
            },
            {
              label: "Break-even",
              value: "8 Months",
              icon: FiClock,
              color: "purple",
            },
            {
              label: "Support",
              value: "24/7",
              icon: FiHeadphones,
              color: "orange",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-4 text-center shadow-md`}
            >
              <stat.icon
                className={`mx-auto mb-2 text-${stat.color}-600`}
                size={24}
              />
              <div className={`text-2xl font-bold text-${stat.color}-600`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

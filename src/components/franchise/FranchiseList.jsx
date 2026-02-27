// // import {
// //   FiSearch,
// //   FiTrendingUp,
// //   FiMapPin,
// //   FiUsers,
// //   FiAward,
// //   FiGrid,
// //   FiList,
// //   FiHeart,
// //   FiStar,
// //   FiClock,
// //   FiPhone,
// // } from "react-icons/fi";

// // const stats = [
// //   {
// //     icon: FiTrendingUp,
// //     label: "Active Franchises",
// //     value: "500+",
// //     color: "emerald",
// //   },
// //   { icon: FiMapPin, label: "Cities", value: "100+", color: "blue" },
// //   { icon: FiUsers, label: "Happy Partners", value: "2000+", color: "purple" },
// //   { icon: FiAward, label: "Success Rate", value: "95%", color: "orange" },
// // ];

// // const categories = [
// //   "All",
// //   "Food & Beverage",
// //   "Health",
// //   "Education",
// //   "Retail",
// //   "Service",
// //   "Technology",
// // ];

// // const franchises = [
// //   {
// //     name: "Amul Ice Cream",
// //     category: "Food & Beverage",
// //     location: "Mumbai",
// //     rating: 4.9,
// //     investment: "₹5-10L",
// //     monthly: "₹1-3L",
// //     roi: "85%",
// //     months: "8M",
// //     badge: "HOT DEAL",
// //     image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
// //   },
// //   {
// //     name: "Domino's Pizza",
// //     category: "Food & Beverage",
// //     location: "Delhi NCR",
// //     rating: 4.8,
// //     investment: "₹30-50L",
// //     monthly: "₹5-8L",
// //     roi: "75%",
// //     months: "18M",
// //     badge: "PREMIUM",
// //     image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
// //   },
// //   {
// //     name: "Starbucks",
// //     category: "Cafe",
// //     location: "Bangalore",
// //     rating: 4.7,
// //     investment: "₹70-1Cr",
// //     monthly: "₹8-15L",
// //     roi: "65%",
// //     months: "24M",
// //     badge: "NEW",
// //     image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
// //   },
// //   {
// //     name: "Starbucks",
// //     category: "Cafe",
// //     location: "Bangalore",
// //     rating: 4.7,
// //     investment: "₹70-1Cr",
// //     monthly: "₹8-15L",
// //     roi: "65%",
// //     months: "24M",
// //     badge: "NEW",
// //     image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
// //   },
// //   {
// //     name: "Domino's Pizza",
// //     category: "Food & Beverage",
// //     location: "Delhi NCR",
// //     rating: 4.8,
// //     investment: "₹30-50L",
// //     monthly: "₹5-8L",
// //     roi: "75%",
// //     months: "18M",
// //     badge: "PREMIUM",
// //     image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
// //   },
// //   {
// //     name: "Starbucks",
// //     category: "Cafe",
// //     location: "Bangalore",
// //     rating: 4.7,
// //     investment: "₹70-1Cr",
// //     monthly: "₹8-15L",
// //     roi: "65%",
// //     months: "24M",
// //     badge: "NEW",
// //     image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
// //   },
// // ];

// // export default function FranchiseList({ isDarkMode }) {
// //   return (
// //     <section
// //       className={`py-20 relative ${
// //         isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 to-white"
// //       }`}
// //     >
// //       <div className="container mx-auto px-4 relative z-10">
// //         {/* HEADER */}
// //         <div className="text-center mb-12">
// //           <h1
// //             className={`text-5xl font-bold mb-4 ${
// //               isDarkMode ? "text-white" : "text-gray-800"
// //             }`}
// //           >
// //             Find Your Perfect
// //             <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
// //               {" "}
// //               Franchise
// //             </span>
// //           </h1>
// //           <p
// //             className={`text-xl ${
// //               isDarkMode ? "text-gray-400" : "text-gray-600"
// //             }`}
// //           >
// //             500+ Verified Business Opportunities Across India
// //           </p>
// //         </div>

// //         {/* FRANCHISE GRID */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {franchises.map((item, idx) => (
// //             <div
// //               key={idx}
// //               className={`rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition ${
// //                 isDarkMode ? "bg-gray-800" : "bg-white"
// //               }`}
// //             >
// //               <div className="relative">
// //                 <img
// //                   src={item.image}
// //                   alt={item.name}
// //                   className="h-56 w-full object-cover hover:scale-110 transition-transform duration-700"
// //                 />
// //                 <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-bold">
// //                   {item.badge}
// //                 </span>
// //               </div>

// //               <div className="p-6">
// //                 <div className="flex justify-between mb-3">
// //                   <div>
// //                     <h3 className="text-xl font-bold">{item.name}</h3>
// //                     <p className="text-sm text-gray-500">
// //                       {item.category} • {item.location}
// //                     </p>
// //                   </div>
// //                   <div className="flex items-center">
// //                     <FiStar className="text-yellow-500" size={16} />
// //                     <span className="ml-1 font-bold">{item.rating}</span>
// //                   </div>
// //                 </div>

// //                 <div className="grid grid-cols-2 gap-3 mb-4">
// //                   <div className="p-3 rounded-xl bg-gray-50">
// //                     <p className="text-xs text-gray-500">Investment</p>
// //                     <p className="font-bold text-emerald-600">
// //                       {item.investment}
// //                     </p>
// //                   </div>
// //                   <div className="p-3 rounded-xl bg-gray-50">
// //                     <p className="text-xs text-gray-500">Monthly</p>
// //                     <p className="font-bold text-blue-600">{item.monthly}</p>
// //                   </div>
// //                 </div>

// //                 <div className="flex justify-between mb-4 text-sm">
// //                   <span className="flex items-center gap-1">
// //                     <FiTrendingUp /> {item.roi} ROI
// //                   </span>
// //                   <span className="flex items-center gap-1">
// //                     <FiClock /> {item.months}
// //                   </span>
// //                 </div>

// //                 <div className="flex gap-2">
// //                   <button className="flex-1 bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 rounded-xl font-bold">
// //                     View Details
// //                   </button>
// //                   <button className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
// //                     <FiPhone />
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* LOAD MORE */}
// //         <div className="text-center mt-12">
// //           <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-2xl font-bold hover:scale-105 transition">
// //             Load More Franchises
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import React, { useState, useMemo, useEffect } from "react";
// import {
//   FiSearch,
//   FiTrendingUp,
//   FiMapPin,
//   FiUsers,
//   FiAward,
//   FiGrid,
//   FiList,
//   FiHeart,
//   FiStar,
//   FiClock,
//   FiPhone,
//   FiChevronDown,
// } from "react-icons/fi";

// const stats = [
//   {
//     icon: FiTrendingUp,
//     label: "Active Franchises",
//     value: "500+",
//     color: "emerald",
//   },
//   { icon: FiMapPin, label: "Cities", value: "100+", color: "blue" },
//   { icon: FiUsers, label: "Happy Partners", value: "2000+", color: "purple" },
//   { icon: FiAward, label: "Success Rate", value: "95%", color: "orange" },
// ];

// const categories = [
//   "All",
//   "Food & Beverage",
//   "Health",
//   "Education",
//   "Retail",
//   "Service",
//   "Technology",
// ];

// // Updated franchise data with location hierarchy and demandScore
// const franchises = [
//   {
//     name: "Amul Ice Cream",
//     category: "Food & Beverage",
//     area: "Dargamitta",
//     city: "Nellore",
//     district: "Sri Potti Sriramulu Nellore",
//     state: "Andhra Pradesh",
//     rating: 4.8,
//     roi: 82,
//     demandScore: 90,
//     investment: "₹5-10L",
//     monthly: "₹1-3L",
//     image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
//   },
//   {
//     name: "KFC",
//     category: "Food & Beverage",
//     area: "RTC Complex",
//     city: "Visakhapatnam",
//     district: "Visakhapatnam",
//     state: "Andhra Pradesh",
//     rating: 4.7,
//     roi: 78,
//     demandScore: 88,
//     investment: "₹20-30L",
//     monthly: "₹3-5L",
//     image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
//   },
//   {
//     name: "Subway",
//     category: "Food & Beverage",
//     area: "MVP Colony",
//     city: "Visakhapatnam",
//     district: "Visakhapatnam",
//     state: "Andhra Pradesh",
//     rating: 4.6,
//     roi: 72,
//     demandScore: 85,
//     investment: "₹15-20L",
//     monthly: "₹2-4L",
//     image: "https://images.unsplash.com/photo-1553909489-cd35e5de2aeb",
//   },
//   {
//     name: "Domino's Pizza",
//     category: "Food & Beverage",
//     area: "Benz Circle",
//     city: "Vijayawada",
//     district: "Krishna",
//     state: "Andhra Pradesh",
//     rating: 4.5,
//     roi: 75,
//     demandScore: 86,
//     investment: "₹30-50L",
//     monthly: "₹5-8L",
//     image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
//   },
//   {
//     name: "Baskin Robbins",
//     category: "Food & Beverage",
//     area: "Balaji Nagar",
//     city: "Tirupati",
//     district: "Tirupati",
//     state: "Andhra Pradesh",
//     rating: 4.7,
//     roi: 80,
//     demandScore: 89,
//     investment: "₹10-15L",
//     monthly: "₹2-4L",
//     image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
//   },
// ];

// // Extract unique values for location filters
// const getUniqueStates = () => [...new Set(franchises.map((f) => f.state))];
// const getUniqueDistricts = (state) => [
//   ...new Set(
//     franchises.filter((f) => f.state === state).map((f) => f.district),
//   ),
// ];
// const getUniqueCities = (state, district) => [
//   ...new Set(
//     franchises
//       .filter((f) => f.state === state && f.district === district)
//       .map((f) => f.city),
//   ),
// ];
// const getUniqueAreas = (state, district, city) => [
//   ...new Set(
//     franchises
//       .filter(
//         (f) => f.state === state && f.district === district && f.city === city,
//       )
//       .map((f) => f.area),
//   ),
// ];

// export default function FranchiseList({ isDarkMode }) {
//   const [selectedState, setSelectedState] = useState("Andhra Pradesh");
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const [selectedArea, setSelectedArea] = useState("");
//   const [showStateDropdown, setShowStateDropdown] = useState(false);
//   const [showDistrictDropdown, setShowDistrictDropdown] = useState(false);
//   const [showCityDropdown, setShowCityDropdown] = useState(false);
//   const [showAreaDropdown, setShowAreaDropdown] = useState(false);

//   // Reset dependent filters when a parent filter changes
//   useEffect(() => {
//     setSelectedDistrict("");
//     setSelectedCity("");
//     setSelectedArea("");
//   }, [selectedState]);

//   useEffect(() => {
//     setSelectedCity("");
//     setSelectedArea("");
//   }, [selectedDistrict]);

//   useEffect(() => {
//     setSelectedArea("");
//   }, [selectedCity]);

//   // Calculate topScore for each franchise
//   const franchisesWithScore = useMemo(() => {
//     return franchises.map((franchise) => ({
//       ...franchise,
//       topScore:
//         franchise.rating * 0.4 +
//         franchise.roi * 0.4 +
//         franchise.demandScore * 0.2,
//     }));
//   }, []);

//   // Filter and sort franchises based on selected location and tab
//   const topFranchises = useMemo(() => {
//     let filtered = franchisesWithScore;

//     if (selectedState)
//       filtered = filtered.filter((f) => f.state === selectedState);

//     if (selectedDistrict)
//       filtered = filtered.filter((f) => f.district === selectedDistrict);

//     if (selectedCity)
//       filtered = filtered.filter((f) => f.city === selectedCity);

//     if (selectedArea)
//       filtered = filtered.filter((f) => f.area === selectedArea);

//     return filtered.sort((a, b) => b.topScore - a.topScore).slice(0, 6);
//   }, [
//     selectedState,
//     selectedDistrict,
//     selectedCity,
//     selectedArea,
//     franchisesWithScore,
//   ]);
//   // Generate smart badges for a franchise
//   const getSmartBadges = (franchise) => {
//     const badges = [];

//     if (franchise.demandScore > 85) {
//       badges.push({
//         text: `🔥 HOT IN ${franchise.city.toUpperCase()}`,
//         color: "bg-red-500",
//       });
//     }

//     if (franchise.rating > 4.8) {
//       badges.push({ text: "🏆 TOP RATED", color: "bg-yellow-500" });
//     }

//     const investmentNum = parseInt(franchise.investment.replace(/[^0-9]/g, ""));
//     if (investmentNum < 10) {
//       badges.push({ text: "💰 LOW INVEST", color: "bg-green-500" });
//     }

//     if (franchise.roi > 80) {
//       badges.push({ text: "⚡ FAST ROI", color: "bg-blue-500" });
//     }

//     return badges;
//   };

//   // Get location display text based on active tab
//   const getLocationText = () => {
//     if (selectedArea) return selectedArea;
//     if (selectedCity) return selectedCity;
//     if (selectedDistrict) return selectedDistrict;
//     if (selectedState) return selectedState;
//     return "Andhra Pradesh";
//   };

//   return (
//     <section
//       className={`py-20 relative ${
//         isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 to-white"
//       }`}
//     >
//       <div className="container mx-auto px-4 relative z-10">
//         {/* HEADER */}
//         <div className="text-center mb-12">
//           <h1
//             className={`text-5xl font-bold mb-4 ${
//               isDarkMode ? "text-white" : "text-gray-800"
//             }`}
//           >
//             Find Your Perfect
//             <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
//               {" "}
//               Franchise
//             </span>
//           </h1>
//           <p
//             className={`text-xl ${
//               isDarkMode ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             500+ Verified Business Opportunities Across India
//           </p>
//         </div>

//         {/* LOCATION FILTERS */}
//         <div className="mb-8">
//           <div className="flex flex-wrap justify-center gap-4 mb-6">
//             <button
//               className={`px-4 py-2 rounded-lg font-medium ${
//                 activeTab === "area"
//                   ? "bg-emerald-600 text-white"
//                   : isDarkMode
//                     ? "bg-gray-800 text-gray-300"
//                     : "bg-white text-gray-700"
//               }`}
//               onClick={() => setActiveTab("area")}
//             >
//               Area Wise
//             </button>
//             <button
//               className={`px-4 py-2 rounded-lg font-medium ${
//                 activeTab === "city"
//                   ? "bg-emerald-600 text-white"
//                   : isDarkMode
//                     ? "bg-gray-800 text-gray-300"
//                     : "bg-white text-gray-700"
//               }`}
//               onClick={() => setActiveTab("city")}
//             >
//               City Wise
//             </button>
//             <button
//               className={`px-4 py-2 rounded-lg font-medium ${
//                 activeTab === "district"
//                   ? "bg-emerald-600 text-white"
//                   : isDarkMode
//                     ? "bg-gray-800 text-gray-300"
//                     : "bg-white text-gray-700"
//               }`}
//               onClick={() => setActiveTab("district")}
//             >
//               District Wise
//             </button>
//             <button
//               className={`px-4 py-2 rounded-lg font-medium ${
//                 activeTab === "state"
//                   ? "bg-emerald-600 text-white"
//                   : isDarkMode
//                     ? "bg-gray-800 text-gray-300"
//                     : "bg-white text-gray-700"
//               }`}
//               onClick={() => setActiveTab("state")}
//             >
//               State Wise
//             </button>
//           </div>

//           <div className="flex flex-wrap justify-center gap-4">
//             {/* State Dropdown */}
//             <div className="relative">
//               <button
//                 className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
//                   isDarkMode
//                     ? "bg-gray-800 text-white"
//                     : "bg-white text-gray-700"
//                 }`}
//                 onClick={() => setShowStateDropdown(!showStateDropdown)}
//               >
//                 <FiMapPin />
//                 <span>{selectedState || "Select State"}</span>
//                 <FiChevronDown />
//               </button>
//               {showStateDropdown && (
//                 <div
//                   className={`absolute top-full mt-2 w-48 rounded-lg shadow-lg z-10 ${
//                     isDarkMode ? "bg-gray-800" : "bg-white"
//                   }`}
//                 >
//                   {getUniqueStates().map((state) => (
//                     <button
//                       key={state}
//                       className={`block w-full text-left px-4 py-2 hover:bg-emerald-600 hover:text-white ${
//                         isDarkMode ? "text-white" : "text-gray-700"
//                       }`}
//                       onClick={() => {
//                         setSelectedState(state);
//                         setShowStateDropdown(false);
//                       }}
//                     >
//                       {state}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* District Dropdown */}
//             {selectedState && (
//               <div className="relative">
//                 <button
//                   className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
//                     isDarkMode
//                       ? "bg-gray-800 text-white"
//                       : "bg-white text-gray-700"
//                   }`}
//                   onClick={() => setShowDistrictDropdown(!showDistrictDropdown)}
//                 >
//                   <FiMapPin />
//                   <span>{selectedDistrict || "Select District"}</span>
//                   <FiChevronDown />
//                 </button>
//                 {showDistrictDropdown && (
//                   <div
//                     className={`absolute top-full mt-2 w-48 rounded-lg shadow-lg z-10 ${
//                       isDarkMode ? "bg-gray-800" : "bg-white"
//                     }`}
//                   >
//                     {getUniqueDistricts(selectedState).map((district) => (
//                       <button
//                         key={district}
//                         className={`block w-full text-left px-4 py-2 hover:bg-emerald-600 hover:text-white ${
//                           isDarkMode ? "text-white" : "text-gray-700"
//                         }`}
//                         onClick={() => {
//                           setSelectedDistrict(district);
//                           setShowDistrictDropdown(false);
//                         }}
//                       >
//                         {district}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* City Dropdown */}
//             {selectedDistrict && (
//               <div className="relative">
//                 <button
//                   className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
//                     isDarkMode
//                       ? "bg-gray-800 text-white"
//                       : "bg-white text-gray-700"
//                   }`}
//                   onClick={() => setShowCityDropdown(!showCityDropdown)}
//                 >
//                   <FiMapPin />
//                   <span>{selectedCity || "Select City"}</span>
//                   <FiChevronDown />
//                 </button>
//                 {showCityDropdown && (
//                   <div
//                     className={`absolute top-full mt-2 w-48 rounded-lg shadow-lg z-10 ${
//                       isDarkMode ? "bg-gray-800" : "bg-white"
//                     }`}
//                   >
//                     {getUniqueCities(selectedState, selectedDistrict).map(
//                       (city) => (
//                         <button
//                           key={city}
//                           className={`block w-full text-left px-4 py-2 hover:bg-emerald-600 hover:text-white ${
//                             isDarkMode ? "text-white" : "text-gray-700"
//                           }`}
//                           onClick={() => {
//                             setSelectedCity(city);
//                             setShowCityDropdown(false);
//                           }}
//                         >
//                           {city}
//                         </button>
//                       ),
//                     )}
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Area Dropdown */}
//             {selectedCity && activeTab === "area" && (
//               <div className="relative">
//                 <button
//                   className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
//                     isDarkMode
//                       ? "bg-gray-800 text-white"
//                       : "bg-white text-gray-700"
//                   }`}
//                   onClick={() => setShowAreaDropdown(!showAreaDropdown)}
//                 >
//                   <FiMapPin />
//                   <span>{selectedArea || "Select Area"}</span>
//                   <FiChevronDown />
//                 </button>
//                 {showAreaDropdown && (
//                   <div
//                     className={`absolute top-full mt-2 w-48 rounded-lg shadow-lg z-10 ${
//                       isDarkMode ? "bg-gray-800" : "bg-white"
//                     }`}
//                   >
//                     {getUniqueAreas(
//                       selectedState,
//                       selectedDistrict,
//                       selectedCity,
//                     ).map((area) => (
//                       <button
//                         key={area}
//                         className={`block w-full text-left px-4 py-2 hover:bg-emerald-600 hover:text-white ${
//                           isDarkMode ? "text-white" : "text-gray-700"
//                         }`}
//                         onClick={() => {
//                           setSelectedArea(area);
//                           setShowAreaDropdown(false);
//                         }}
//                       >
//                         {area}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* TOP FRANCHISES TITLE */}
//         <div className="text-center mb-8">
//           <h2
//             className={`text-3xl font-bold ${
//               isDarkMode ? "text-white" : "text-gray-800"
//             }`}
//           >
//             Top 6 Franchises in {getLocationText()}
//           </h2>
//         </div>

//         {/* FRANCHISE GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {topFranchises.map((item, idx) => (
//             <div
//               key={idx}
//               className={`rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition ${
//                 isDarkMode ? "bg-gray-800" : "bg-white"
//               }`}
//             >
//               <div className="relative">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="h-56 w-full object-cover hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute top-4 left-4 flex flex-col gap-2">
//                   {getSmartBadges(item).map((badge, i) => (
//                     <span
//                       key={i}
//                       className={`${badge.color} text-white text-xs px-3 py-1 rounded-full font-bold`}
//                     >
//                       {badge.text}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="flex justify-between mb-3">
//                   <div>
//                     <h3 className="text-xl font-bold">{item.name}</h3>
//                     <p className="text-sm text-gray-500">
//                       {item.category} • {item.city}
//                     </p>
//                   </div>
//                   <div className="flex items-center">
//                     <FiStar className="text-yellow-500" size={16} />
//                     <span className="ml-1 font-bold">{item.rating}</span>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-3 mb-4">
//                   <div className="p-3 rounded-xl bg-gray-50">
//                     <p className="text-xs text-gray-500">Investment</p>
//                     <p className="font-bold text-emerald-600">
//                       {item.investment}
//                     </p>
//                   </div>
//                   <div className="p-3 rounded-xl bg-gray-50">
//                     <p className="text-xs text-gray-500">Monthly</p>
//                     <p className="font-bold text-blue-600">{item.monthly}</p>
//                   </div>
//                 </div>

//                 <div className="flex justify-between mb-4 text-sm">
//                   <span className="flex items-center gap-1">
//                     <FiTrendingUp /> {item.roi}% ROI
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <FiMapPin /> {item.area}
//                   </span>
//                 </div>

//                 <div className="flex gap-2">
//                   <button className="flex-1 bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 rounded-xl font-bold">
//                     View Details
//                   </button>
//                   <button className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
//                     <FiPhone />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* NO RESULTS MESSAGE */}
//         {topFranchises.length === 0 && (
//           <div className="text-center py-12">
//             <p
//               className={`text-xl ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
//             >
//               No franchises found in the selected location. Please try a
//               different location.
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// import { useState, useMemo } from "react";
// import { FiStar, FiTrendingUp, FiClock } from "react-icons/fi";

// /* =======================
//    FRANCHISE DATA
// ======================= */
// const franchises = [
//   {
//     id: 1,
//     name: "Amul Ice Cream",
//     state: "Andhra Pradesh",
//     district: "Nellore",
//     city: "Kavali",
//     area: "RTC Colony",
//     rating: 4.9,
//     investment: "₹5–10L",
//     monthly: "₹1–3L",
//     roi: "85%",
//     months: "8 Months",
//     topScore: 95,
//     image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
//   },
//   {
//     id: 2,
//     name: "Domino's Pizza",
//     state: "Andhra Pradesh",
//     district: "Krishna",
//     city: "Vijayawada",
//     area: "Benz Circle",
//     rating: 4.8,
//     investment: "₹30–50L",
//     monthly: "₹5–8L",
//     roi: "75%",
//     months: "18 Months",
//     topScore: 92,
//     image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
//   },
//   {
//     id: 3,
//     name: "Reliance Smart",
//     state: "Telangana",
//     district: "Hyderabad",
//     city: "Hyderabad",
//     area: "Madhapur",
//     rating: 4.6,
//     investment: "₹20–40L",
//     monthly: "₹4–6L",
//     roi: "70%",
//     months: "14 Months",
//     topScore: 90,
//     image: "https://images.unsplash.com/photo-1604719312566-8912e9c8a1b8",
//   },
//   {
//     id: 4,
//     name: "Starbucks",
//     state: "Telangana",
//     district: "Hyderabad",
//     city: "Hyderabad",
//     area: "Gachibowli",
//     rating: 4.7,
//     investment: "₹70L–1Cr",
//     monthly: "₹8–15L",
//     roi: "65%",
//     months: "24 Months",
//     topScore: 88,
//     image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
//   },
//   {
//     id: 5,
//     name: "Lenskart",
//     state: "Tamil Nadu",
//     district: "Chennai",
//     city: "Chennai",
//     area: "T Nagar",
//     rating: 4.8,
//     investment: "₹25–40L",
//     monthly: "₹4–7L",
//     roi: "78%",
//     months: "12 Months",
//     topScore: 91,
//     image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
//   },
//   {
//     id: 6,
//     name: "Apollo Pharmacy",
//     state: "Tamil Nadu",
//     district: "Chennai",
//     city: "Chennai",
//     area: "Velachery",
//     rating: 4.6,
//     investment: "₹10–20L",
//     monthly: "₹2–4L",
//     roi: "80%",
//     months: "10 Months",
//     topScore: 89,
//     image: "https://images.unsplash.com/photo-1580281658629-94f7c92b6d4b",
//   },
// ];

// /* =======================
//    COMPONENT
// ======================= */
// export default function FranchiseList({ isDarkMode }) {
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const [selectedArea, setSelectedArea] = useState("");

//   /* ---------- DROPDOWN OPTIONS ---------- */
//   const states = useMemo(
//     () => [...new Set(franchises.map((f) => f.state))],
//     [],
//   );

//   const districts = useMemo(
//     () =>
//       franchises
//         .filter((f) => f.state === selectedState)
//         .map((f) => f.district)
//         .filter((v, i, a) => a.indexOf(v) === i),
//     [selectedState],
//   );

//   const cities = useMemo(
//     () =>
//       franchises
//         .filter(
//           (f) => f.state === selectedState && f.district === selectedDistrict,
//         )
//         .map((f) => f.city)
//         .filter((v, i, a) => a.indexOf(v) === i),
//     [selectedState, selectedDistrict],
//   );

//   const areas = useMemo(
//     () =>
//       franchises
//         .filter(
//           (f) =>
//             f.state === selectedState &&
//             f.district === selectedDistrict &&
//             f.city === selectedCity,
//         )
//         .map((f) => f.area)
//         .filter((v, i, a) => a.indexOf(v) === i),
//     [selectedState, selectedDistrict, selectedCity],
//   );

//   /* ---------- TOP 6 FILTER ---------- */
//   const topFranchises = useMemo(() => {
//     let data = franchises;

//     if (selectedState) data = data.filter((f) => f.state === selectedState);
//     if (selectedDistrict)
//       data = data.filter((f) => f.district === selectedDistrict);
//     if (selectedCity) data = data.filter((f) => f.city === selectedCity);
//     if (selectedArea) data = data.filter((f) => f.area === selectedArea);

//     return data.sort((a, b) => b.topScore - a.topScore).slice(0, 6);
//   }, [selectedState, selectedDistrict, selectedCity, selectedArea]);

//   return (
//     <section
//       className={`py-20 ${
//         isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         {/* HEADER */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-bold mb-2">Top Franchises Near You</h2>
//           <p className="text-gray-500">
//             Choose your location to discover best business opportunities
//           </p>
//         </div>

//         {/* FILTERS */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           <select
//             value={selectedState}
//             onChange={(e) => {
//               setSelectedState(e.target.value);
//               setSelectedDistrict("");
//               setSelectedCity("");
//               setSelectedArea("");
//             }}
//             className="px-4 py-2 rounded-lg border"
//           >
//             <option value="">Select State</option>
//             {states.map((s) => (
//               <option key={s} value={s}>
//                 {s}
//               </option>
//             ))}
//           </select>

//           <select
//             value={selectedDistrict}
//             onChange={(e) => {
//               setSelectedDistrict(e.target.value);
//               setSelectedCity("");
//               setSelectedArea("");
//             }}
//             disabled={!selectedState}
//             className="px-4 py-2 rounded-lg border disabled:opacity-50"
//           >
//             <option value="">Select District</option>
//             {districts.map((d) => (
//               <option key={d} value={d}>
//                 {d}
//               </option>
//             ))}
//           </select>

//           <select
//             value={selectedCity}
//             onChange={(e) => {
//               setSelectedCity(e.target.value);
//               setSelectedArea("");
//             }}
//             disabled={!selectedDistrict}
//             className="px-4 py-2 rounded-lg border disabled:opacity-50"
//           >
//             <option value="">Select City</option>
//             {cities.map((c) => (
//               <option key={c} value={c}>
//                 {c}
//               </option>
//             ))}
//           </select>

//           <select
//             value={selectedArea}
//             onChange={(e) => setSelectedArea(e.target.value)}
//             disabled={!selectedCity}
//             className="px-4 py-2 rounded-lg border disabled:opacity-50"
//           >
//             <option value="">Select Area (Optional)</option>
//             {areas.map((a) => (
//               <option key={a} value={a}>
//                 {a}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {topFranchises.map((item) => (
//             <div
//               key={item.id}
//               className={`rounded-3xl shadow-lg overflow-hidden ${
//                 isDarkMode ? "bg-gray-800" : "bg-white"
//               }`}
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="h-52 w-full object-cover"
//               />

//               <div className="p-6">
//                 <div className="flex justify-between mb-2">
//                   <h3 className="text-xl font-bold">{item.name}</h3>
//                   <span className="flex items-center gap-1">
//                     <FiStar className="text-yellow-400" />
//                     {item.rating}
//                   </span>
//                 </div>

//                 <p className="text-sm text-gray-500 mb-4">
//                   {item.area}, {item.city}
//                 </p>

//                 <div className="flex justify-between text-sm mb-4">
//                   <span className="flex items-center gap-1">
//                     <FiTrendingUp /> {item.roi}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <FiClock /> {item.months}
//                   </span>
//                 </div>

//                 <button className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useMemo, useEffect } from "react";
import {
  FiStar,
  FiTrendingUp,
  FiClock,
  FiMapPin,
  FiSearch,
  FiFilter,
  FiHeart,
  FiShare2,
  FiGrid,
  FiList,
  FiChevronDown,
  FiX,
  FiCheck,
  FiAward,
  FiDollarSign,
  FiUsers,
  FiBarChart2,
  FiCalendar,
  FiArrowUp,
  FiArrowDown,
  FiBookmark,
  FiPhone,
} from "react-icons/fi";

/* =======================
   FRANCHISE DATA
======================= */
const franchises = [
  {
    id: 1,
    name: "Amul Ice Cream",
    state: "Andhra Pradesh",
    district: "Nellore",
    city: "Kavali",
    area: "RTC Colony",
    rating: 4.9,
    investment: "₹5–10L",
    monthly: "₹1–3L",
    roi: "85%",
    months: "8 Months",
    topScore: 95,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    category: "Food & Beverage",
    trending: true,
    verified: true,
    isNew: false,
    description: "India's favorite ice cream brand with 100+ years of trust",
  },
  {
    id: 2,
    name: "Domino's Pizza",
    state: "Andhra Pradesh",
    district: "Krishna",
    city: "Vijayawada",
    area: "Benz Circle",
    rating: 4.8,
    investment: "₹30–50L",
    monthly: "₹5–8L",
    roi: "75%",
    months: "18 Months",
    topScore: 92,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    category: "Food & Beverage",
    trending: true,
    verified: true,
    isNew: false,
    description:
      "World's leading pizza delivery chain with proven business model",
  },
  {
    id: 3,
    name: "Reliance Smart",
    state: "Telangana",
    district: "Hyderabad",
    city: "Hyderabad",
    area: "Madhapur",
    rating: 4.6,
    investment: "₹20–40L",
    monthly: "₹4–6L",
    roi: "70%",
    months: "14 Months",
    topScore: 90,
    image: "https://images.unsplash.com/photo-1604719312566-8912e9c8a1b8",
    category: "Retail",
    trending: false,
    verified: true,
    isNew: true,
    description:
      "India's fastest growing retail chain with massive product range",
  },
  {
    id: 4,
    name: "Starbucks",
    state: "Telangana",
    district: "Hyderabad",
    city: "Hyderabad",
    area: "Gachibowli",
    rating: 4.7,
    investment: "₹70L–1Cr",
    monthly: "₹8–15L",
    roi: "65%",
    months: "24 Months",
    topScore: 88,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    category: "Cafe",
    trending: true,
    verified: true,
    isNew: false,
    description: "Premium coffee experience with global brand recognition",
  },
  {
    id: 5,
    name: "Lenskart",
    state: "Tamil Nadu",
    district: "Chennai",
    city: "Chennai",
    area: "T Nagar",
    rating: 4.8,
    investment: "₹25–40L",
    monthly: "₹4–7L",
    roi: "78%",
    months: "12 Months",
    topScore: 91,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    category: "Healthcare",
    trending: true,
    verified: true,
    isNew: false,
    description: "India's leading eyewear brand with innovative technology",
  },
  {
    id: 6,
    name: "Apollo Pharmacy",
    state: "Tamil Nadu",
    district: "Chennai",
    city: "Chennai",
    area: "Velachery",
    rating: 4.6,
    investment: "₹10–20L",
    monthly: "₹2–4L",
    roi: "80%",
    months: "10 Months",
    topScore: 89,
    image: "https://images.unsplash.com/photo-1580281658629-94f7c92b6d4b",
    category: "Healthcare",
    trending: false,
    verified: true,
    isNew: false,
    description:
      "Trusted pharmacy chain with 40+ years of healthcare excellence",
  },
];

const categories = ["All", "Food & Beverage", "Retail", "Cafe", "Healthcare"];

/* =======================
   REUSABLE COMPONENTS
======================= */
const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-emerald-100 text-emerald-800",
    trending: "bg-red-100 text-red-800",
    new: "bg-blue-100 text-blue-800",
    verified: "bg-purple-100 text-purple-800",
    premium: "bg-yellow-100 text-yellow-800",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

const StatCard = ({ icon: Icon, label, value, trend, color = "emerald" }) => (
  <div className={`bg-${color}-50 rounded-xl p-4 border border-${color}-100`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className={`text-2xl font-bold text-${color}-600`}>{value}</p>
      </div>
      <Icon className={`text-${color}-400 text-2xl`} />
    </div>
    {trend && (
      <div
        className={`flex items-center mt-2 text-sm ${trend > 0 ? "text-green-600" : "text-red-600"}`}
      >
        {trend > 0 ? <FiArrowUp /> : <FiArrowDown />}
        <span className="ml-1">{Math.abs(trend)}%</span>
      </div>
    )}
  </div>
);

const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder,
  disabled,
  icon: Icon,
}) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      {Icon && <Icon className="text-gray-400" />}
    </div>
    <select
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`appearance-none w-full pl-10 pr-10 py-3 rounded-xl border ${
        disabled
          ? "bg-gray-100 opacity-50 cursor-not-allowed"
          : "bg-white hover:border-emerald-400"
      } border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      <FiChevronDown className="text-gray-400" />
    </div>
  </div>
);

/* =======================
   MAIN COMPONENT
======================= */
export default function FranchiseList({ isDarkMode }) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("topScore");
  const [viewMode, setViewMode] = useState("grid");
  const [favorites, setFavorites] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  /* ---------- DROPDOWN OPTIONS ---------- */
  const states = useMemo(
    () => [...new Set(franchises.map((f) => f.state))],
    [],
  );

  const districts = useMemo(
    () => [
      ...new Set(
        franchises
          .filter((f) => f.state === selectedState)
          .map((f) => f.district),
      ),
    ],
    [selectedState],
  );

  const cities = useMemo(
    () => [
      ...new Set(
        franchises
          .filter(
            (f) => f.state === selectedState && f.district === selectedDistrict,
          )
          .map((f) => f.city),
      ),
    ],
    [selectedState, selectedDistrict],
  );

  const areas = useMemo(
    () => [
      ...new Set(
        franchises
          .filter(
            (f) =>
              f.state === selectedState &&
              f.district === selectedDistrict &&
              f.city === selectedCity,
          )
          .map((f) => f.area),
      ),
    ],
    [selectedState, selectedDistrict, selectedCity],
  );

  /* ---------- FILTERED & SORTED DATA ---------- */
  const filteredFranchises = useMemo(() => {
    let data = franchises;

    // Location filters
    if (selectedState) data = data.filter((f) => f.state === selectedState);
    if (selectedDistrict)
      data = data.filter((f) => f.district === selectedDistrict);
    if (selectedCity) data = data.filter((f) => f.city === selectedCity);
    if (selectedArea) data = data.filter((f) => f.area === selectedArea);

    // Category filter
    if (selectedCategory !== "All") {
      data = data.filter((f) => f.category === selectedCategory);
    }

    // Search filter
    if (searchTerm) {
      data = data.filter(
        (f) =>
          f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          f.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          f.category.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Sorting
    data.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "roi":
          return parseInt(b.roi) - parseInt(a.roi);
        case "investment":
          return parseInt(a.investment) - parseInt(b.investment);
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return b.topScore - a.topScore;
      }
    });

    return data;
  }, [
    selectedState,
    selectedDistrict,
    selectedCity,
    selectedArea,
    selectedCategory,
    searchTerm,
    sortBy,
  ]);

  const topFranchises = filteredFranchises.slice(0, 6);

  /* ---------- HANDLERS ---------- */
  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const clearFilters = () => {
    setSelectedState("");
    setSelectedDistrict("");
    setSelectedCity("");
    setSelectedArea("");
    setSelectedCategory("All");
    setSearchTerm("");
  };

  const getLocationText = () => {
    if (selectedArea) return `${selectedArea}, ${selectedCity}`;
    if (selectedCity) return selectedCity;
    if (selectedDistrict) return selectedDistrict;
    if (selectedState) return selectedState;
    return "India";
  };

  /* ---------- EFFECTS ---------- */
  useEffect(() => {
    // Reset dependent filters when parent changes
    if (selectedState) {
      setSelectedDistrict("");
      setSelectedCity("");
      setSelectedArea("");
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedDistrict) {
      setSelectedCity("");
      setSelectedArea("");
    }
  }, [selectedDistrict]);

  useEffect(() => {
    if (selectedCity) {
      setSelectedArea("");
    }
  }, [selectedCity]);

  return (
    <section
      className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 via-white to-emerald-50"}`}
    >
      <div className="container mx-auto px-4">
        {/* HERO SECTION */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-4">
            <FiAward className="text-emerald-600" />
            <span className="text-sm font-medium">
              Top Rated Franchises 2024
            </span>
          </div>
          <h1
            className={`text-5xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Discover Your Perfect
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Business Opportunity
            </span>
          </h1>
          <p
            className={`text-xl ${isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}
          >
            Explore 500+ verified franchises across India with proven success
            rates and high ROI potential
          </p>
        </div>

        {/* STATS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard
            icon={FiTrendingUp}
            label="Active Franchises"
            value="500+"
            trend={12}
          />
          <StatCard
            icon={FiMapPin}
            label="Cities Covered"
            value="100+"
            trend={8}
            color="blue"
          />
          <StatCard
            icon={FiUsers}
            label="Happy Partners"
            value="2000+"
            trend={15}
            color="purple"
          />
          <StatCard
            icon={FiAward}
            label="Success Rate"
            value="95%"
            trend={5}
            color="orange"
          />
        </div>

        {/* SEARCH & FILTERS */}
        <div
          className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-lg p-6 mb-8`}
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search franchises, cities, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-4 rounded-xl ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-gray-50"
              } focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all`}
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-lg ${
                isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-100 hover:bg-gray-200"
              } transition-colors`}
            >
              <FiFilter className="text-gray-600" />
            </button>
          </div>

          {/* Filters */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ${showFilters ? "block" : "hidden md:block"}`}
          >
            <CustomSelect
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedDistrict("");
                setSelectedCity("");
                setSelectedArea("");
              }}
              options={states}
              placeholder="Select State"
              icon={FiMapPin}
            />

            <CustomSelect
              value={selectedDistrict}
              onChange={(e) => {
                setSelectedDistrict(e.target.value);
                setSelectedCity("");
                setSelectedArea("");
              }}
              options={districts}
              placeholder="Select District"
              disabled={!selectedState}
              icon={FiMapPin}
            />

            <CustomSelect
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setSelectedArea("");
              }}
              options={cities}
              placeholder="Select City"
              disabled={!selectedDistrict}
              icon={FiMapPin}
            />

            <CustomSelect
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              options={areas}
              placeholder="Select Area"
              disabled={!selectedCity}
              icon={FiMapPin}
            />

            <CustomSelect
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              options={categories}
              placeholder="Category"
              icon={FiFilter}
            />
          </div>

          {/* Filter Actions */}
          <div className="flex flex-wrap items-center justify-between mt-6 gap-4">
            <div className="flex items-center gap-4">
              <span
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                {filteredFranchises.length} franchises found
              </span>
              {(selectedState ||
                selectedDistrict ||
                selectedCity ||
                selectedArea ||
                selectedCategory !== "All" ||
                searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1"
                >
                  <FiX /> Clear all filters
                </button>
              )}
            </div>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`px-4 py-2 rounded-lg border ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              >
                <option value="topScore">Top Score</option>
                <option value="rating">Highest Rated</option>
                <option value="roi">Best ROI</option>
                <option value="investment">Low Investment</option>
                <option value="name">Name (A-Z)</option>
              </select>

              {/* View Toggle */}
              <div
                className={`flex rounded-lg border ${isDarkMode ? "border-gray-600" : "border-gray-200"}`}
              >
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-emerald-600 text-white" : isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  <FiGrid />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-emerald-600 text-white" : isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  <FiList />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RESULTS HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h2
            className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Top Franchises in {getLocationText()}
          </h2>
          <div className="flex items-center gap-2">
            <Badge variant="trending">🔥 Trending</Badge>
            <Badge variant="new">✨ New</Badge>
            <Badge variant="verified">✓ Verified</Badge>
          </div>
        </div>

        {/* FRANCHISE GRID/LIST */}
        <div
          className={
            viewMode === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }
        >
          {topFranchises.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative rounded-2xl overflow-hidden ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
            >
              {/* Image with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {item.trending && (
                    <Badge variant="trending">🔥 Trending</Badge>
                  )}
                  {item.isNew && <Badge variant="new">✨ New</Badge>}
                  {item.verified && (
                    <Badge variant="verified">✓ Verified</Badge>
                  )}
                </div>

                {/* Quick Actions */}
                <div
                  className={`absolute top-4 right-4 flex flex-col gap-2 transition-opacity duration-300 ${
                    hoveredCard === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className={`p-2 rounded-full ${
                      favorites.has(item.id)
                        ? "bg-red-500 text-white"
                        : isDarkMode
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-700"
                    } shadow-lg hover:scale-110 transition-transform`}
                  >
                    <FiHeart
                      className={favorites.has(item.id) ? "fill-current" : ""}
                    />
                  </button>
                  <button
                    className={`p-2 rounded-full ${
                      isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-700"
                    } shadow-lg hover:scale-110 transition-transform`}
                  >
                    <FiShare2 />
                  </button>
                  <button
                    className={`p-2 rounded-full ${
                      isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-700"
                    } shadow-lg hover:scale-110 transition-transform`}
                  >
                    <FiBookmark />
                  </button>
                </div>

                {/* Score Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <span className="text-sm font-bold text-emerald-600">
                      Score: {item.topScore}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    >
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <FiMapPin className="text-gray-400" />
                      <span
                        className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                      >
                        {item.area}, {item.city}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-lg">
                    <FiStar className="text-yellow-500 fill-current" />
                    <span className="font-bold text-yellow-700">
                      {item.rating}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`text-sm mb-4 line-clamp-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  {item.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div
                    className={`p-3 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}
                  >
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                      <FiDollarSign />
                      <span>Investment</span>
                    </div>
                    <p
                      className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    >
                      {item.investment}
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}
                  >
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                      <FiBarChart2 />
                      <span>Monthly</span>
                    </div>
                    <p
                      className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    >
                      {item.monthly}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <FiTrendingUp className="text-emerald-500" />
                    <span
                      className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    >
                      {item.roi} ROI
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-blue-500" />
                    <span
                      className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    >
                      {item.months}
                    </span>
                  </div>
                  <Badge variant="premium" className="text-xs">
                    {item.category}
                  </Badge>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    View Details
                  </button>
                  <button
                    className={`p-3 rounded-xl ${
                      isDarkMode
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-gray-100 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    <FiPhone className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {topFranchises.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <FiSearch className="text-3xl text-gray-400" />
            </div>
            <h3
              className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
            >
              No franchises found
            </h3>
            <p
              className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-6`}
            >
              Try adjusting your filters or search terms
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More */}
        {topFranchises.length > 0 && filteredFranchises.length > 6 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-2xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Load More Franchises
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// // import React from "react";
// // import { motion } from "framer-motion";

// // const meals = [
// //   {
// //     id: 1,
// //     title: "Grilled Chicken Bowl",
// //     protein: "45g protein",
// //     price: "₹299",
// //     image: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
// //   },
// //   {
// //     id: 2,
// //     title: "Protein Smoothie",
// //     protein: "32g protein",
// //     price: "₹199",
// //     image: "https://images.unsplash.com/photo-1551024709-8f23befc6cf7",
// //   },
// // ];

// // const RecommendedMeals = () => {
// //   return (
// //     <section className="py-10">
// //       <div className="container mx-auto px-4">
// //         {/* Header */}
// //         <div className="flex justify-between items-center mb-4">
// //           <h2 className="text-xl font-semibold">Recommended Meals</h2>
// //           <button className="text-emerald-600 text-sm font-medium">
// //             View All
// //           </button>
// //         </div>

// //         {/* Cards */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
// //           {meals.map((meal) => (
// //             <motion.div
// //               key={meal.id}
// //               whileHover={{ y: -5 }}
// //               className="bg-white rounded-2xl shadow-md overflow-hidden"
// //             >
// //               <img
// //                 src={meal.image}
// //                 alt={meal.title}
// //                 className="w-full h-40 object-cover"
// //               />

// //               <div className="p-4">
// //                 <h3 className="font-semibold">{meal.title}</h3>
// //                 <p className="text-sm text-gray-500">{meal.protein}</p>

// //                 <div className="flex justify-between items-center mt-4">
// //                   <span className="text-emerald-600 font-bold">
// //                     {meal.price}
// //                   </span>
// //                   <button className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-sm">
// //                     Add
// //                   </button>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default RecommendedMeals;

// import React from "react";
// import { motion } from "framer-motion";
// import { Star, Clock, Flame } from "lucide-react";

// const meals = [
//   {
//     id: 1,
//     title: "Grilled Chicken Bowl",
//     protein: "45g protein",
//     price: "₹299",
//     originalPrice: "₹399",
//     image: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
//     rating: 4.8,
//     reviews: 124,
//     time: "25 min",
//     calories: "420 cal",
//     badge: "Bestseller",
//     badgeColor: "bg-orange-500",
//   },
//   {
//     id: 2,
//     title: "Protein Smoothie",
//     protein: "32g protein",
//     price: "₹199",
//     originalPrice: "₹249",
//     image: "https://images.unsplash.com/photo-1551024709-8f23befc6cf7",
//     rating: 4.6,
//     reviews: 89,
//     time: "10 min",
//     calories: "280 cal",
//     badge: "Low Calorie",
//     badgeColor: "bg-blue-500",
//   },
//   {
//     id: 3,
//     title: "Salmon Teriyaki",
//     protein: "38g protein",
//     price: "₹349",
//     originalPrice: "₹449",
//     image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
//     rating: 4.9,
//     reviews: 156,
//     time: "30 min",
//     calories: "380 cal",
//     badge: "Chef's Special",
//     badgeColor: "bg-purple-500",
//   },
//   {
//     id: 4,
//     title: "Vegan Protein Bowl",
//     protein: "28g protein",
//     price: "₹259",
//     originalPrice: "₹329",
//     image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
//     rating: 4.5,
//     reviews: 67,
//     time: "20 min",
//     calories: "350 cal",
//     badge: "Vegan",
//     badgeColor: "bg-green-500",
//   },
// ];

// const RecommendedMeals = () => {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">
//               Recommended Meals
//             </h2>
//             <p className="text-sm text-gray-500 mt-1">
//               High protein options selected for you
//             </p>
//           </div>
//           <button className="text-emerald-600 text-sm font-medium hover:text-emerald-700 transition-colors flex items-center gap-1">
//             View All
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {meals.map((meal) => (
//             <motion.div
//               key={meal.id}
//               whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               className="bg-white rounded-2xl shadow-md overflow-hidden"
//             >
//               {/* Badge */}
//               <div className="relative">
//                 <img
//                   src={meal.image}
//                   alt={meal.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <span
//                   className={`absolute top-3 left-3 ${meal.badgeColor} text-white text-xs px-3 py-1 rounded-full font-medium`}
//                 >
//                   {meal.badge}
//                 </span>
//                 <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5">
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="text-red-500"
//                   >
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                       />
//                     </svg>
//                   </motion.button>
//                 </div>
//               </div>

//               <div className="p-5">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="font-semibold text-gray-800">{meal.title}</h3>
//                   <div className="flex items-center gap-1">
//                     <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                     <span className="text-sm font-medium">{meal.rating}</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
//                   <div className="flex items-center gap-1">
//                     <Clock className="w-3 h-3" />
//                     <span>{meal.time}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Flame className="w-3 h-3" />
//                     <span>{meal.calories}</span>
//                   </div>
//                   <span>{meal.protein}</span>
//                 </div>

//                 <div className="flex justify-between items-center mt-4">
//                   <div>
//                     <div className="flex items-center gap-2">
//                       <span className="text-emerald-600 font-bold text-lg">
//                         {meal.price}
//                       </span>
//                       {meal.originalPrice && (
//                         <span className="text-gray-400 line-through text-sm">
//                           {meal.originalPrice}
//                         </span>
//                       )}
//                     </div>
//                     <span className="text-xs text-gray-500">
//                       {meal.reviews} reviews
//                     </span>
//                   </div>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors"
//                   >
//                     Add
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecommendedMeals;

import React from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaClock,
  FaFire,
  FaHeart,
  FaChevronRight,
} from "react-icons/fa";
import img1 from "../../assets/home/rec-1.avif";
import img2 from "../../assets/home/rec-2.jpg";
import img3 from "../../assets/home/rec-3.avif";
import img4 from "../../assets/home/rec-4.jpg";

const meals = [
  {
    id: 1,
    title: "Grilled Chicken Bowl",
    protein: "45g protein",
    price: "₹299",
    originalPrice: "₹399",
    image: img1,
    rating: 4.8,
    reviews: 124,
    time: "25 min",
    calories: "420 cal",
    badge: "Bestseller",
    badgeColor: "bg-orange-500",
  },
  {
    id: 2,
    title: "Protein Smoothie",
    protein: "32g protein",
    price: "₹199",
    originalPrice: "₹249",
    image: img2,
    rating: 4.6,
    reviews: 89,
    time: "10 min",
    calories: "280 cal",
    badge: "Low Calorie",
    badgeColor: "bg-blue-500",
  },
  {
    id: 3,
    title: "Salmon Teriyaki",
    protein: "38g protein",
    price: "₹349",
    originalPrice: "₹449",
    image: img3,
    rating: 4.9,
    reviews: 156,
    time: "30 min",
    calories: "380 cal",
    badge: "Chef's Special",
    badgeColor: "bg-purple-500",
  },
  {
    id: 4,
    title: "Vegan Protein Bowl",
    protein: "28g protein",
    price: "₹259",
    originalPrice: "₹329",
    image: img4,
    rating: 4.5,
    reviews: 67,
    time: "20 min",
    calories: "350 cal",
    badge: "Vegan",
    badgeColor: "bg-green-500",
  },
];

const RecommendedMeals = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Recommended Meals
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              High protein options selected for you
            </p>
          </div>
          <button className="text-emerald-600 text-sm font-medium hover:text-emerald-700 transition-colors flex items-center gap-1">
            View All
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {meals.map((meal) => (
            <motion.div
              key={meal.id}
              whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              {/* Badge */}
              <div className="relative">
                <img
                  src={meal.image}
                  alt={meal.title}
                  className="w-full h-48 object-cover"
                />
                <span
                  className={`absolute top-3 left-3 ${meal.badgeColor} text-white text-xs px-3 py-1 rounded-full font-medium`}
                >
                  {meal.badge}
                </span>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-red-500"
                  >
                    <FaHeart className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800">{meal.title}</h3>
                  <div className="flex items-center gap-1">
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium">{meal.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <FaClock className="w-3 h-3" />
                    <span>{meal.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaFire className="w-3 h-3" />
                    <span>{meal.calories}</span>
                  </div>
                  <span>{meal.protein}</span>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold text-lg">
                        {meal.price}
                      </span>
                      {meal.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          {meal.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">
                      {meal.reviews} reviews
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors"
                  >
                    Add
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedMeals;

// import React from "react";
// import { motion } from "framer-motion";

// const TopOffers = () => {
//   return (
//     <section className="py-10">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Top Offers</h2>
//           <button className="text-emerald-600 text-sm font-medium">
//             View All
//           </button>
//         </div>

//         {/* Offers */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Offer Card 1 */}
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="bg-red-600 text-white rounded-2xl p-6 relative overflow-hidden"
//           >
//             <span className="absolute top-4 right-4 bg-white text-red-600 text-xs px-3 py-1 rounded-full">
//               Limited
//             </span>

//             <p className="text-sm uppercase opacity-80">Special Offer</p>
//             <h3 className="text-3xl font-bold mt-1">50% OFF</h3>
//             <p className="opacity-90 mb-4">On Protein Bars</p>

//             <button className="bg-white text-red-600 px-5 py-2 rounded-full font-medium">
//               Shop Now
//             </button>
//           </motion.div>

//           {/* Offer Card 2 */}
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="bg-emerald-600 text-white rounded-2xl p-6"
//           >
//             <p className="text-sm uppercase opacity-80">New Arrival</p>
//             <h3 className="text-2xl font-bold mt-1">Buy 2 Get 1</h3>
//             <p className="opacity-90 mb-4">On Protein Shakes</p>

//             <button className="bg-white text-emerald-600 px-5 py-2 rounded-full font-medium">
//               Explore
//             </button>
//           </motion.div>
//         </div>

//         {/* Refer Section */}
//         <div className="mt-6 bg-emerald-700 text-white rounded-2xl p-5 flex justify-between items-center">
//           <div>
//             <h4 className="font-semibold">Refer a Friend</h4>
//             <p className="text-sm opacity-90">
//               Get ₹100 off on your next order
//             </p>
//           </div>
//           <span className="text-3xl">🥚</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopOffers;

import React from "react";
import { motion } from "framer-motion";

const TopOffers = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Top Offers</h2>
          <button className="text-emerald-600 text-sm font-medium hover:text-emerald-700 transition-colors">
            View All
          </button>
        </div>

        {/* Offers - Three Cards in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Offer Card 1 */}
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-6 relative overflow-hidden shadow-lg"
          >
            <span className="absolute top-4 right-4 bg-white text-red-600 text-xs px-3 py-1 rounded-full font-semibold">
              Limited
            </span>

            <p className="text-sm uppercase opacity-80">Special Offer</p>
            <h3 className="text-3xl font-bold mt-1">50% OFF</h3>
            <p className="opacity-90 mb-4">On Protein Bars</p>

            <button className="bg-white text-red-600 px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </motion.div>

          {/* Offer Card 2 */}
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl p-6 relative overflow-hidden shadow-lg"
          >
            <span className="absolute top-4 right-4 bg-white text-emerald-600 text-xs px-3 py-1 rounded-full font-semibold">
              New
            </span>

            <p className="text-sm uppercase opacity-80">New Arrival</p>
            <h3 className="text-2xl font-bold mt-1">Buy 2 Get 1</h3>
            <p className="opacity-90 mb-4">On Protein Shakes</p>

            <button className="bg-white text-emerald-600 px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Explore
            </button>
          </motion.div>

          {/* Offer Card 3 - New Card */}
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6 relative overflow-hidden shadow-lg"
          >
            <span className="absolute top-4 right-4 bg-white text-purple-600 text-xs px-3 py-1 rounded-full font-semibold">
              Bundle
            </span>

            <p className="text-sm uppercase opacity-80">Weekend Deal</p>
            <h3 className="text-2xl font-bold mt-1">30% OFF</h3>
            <p className="opacity-90 mb-4">On Energy Supplements</p>

            <button className="bg-white text-purple-600 px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Grab Deal
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TopOffers;

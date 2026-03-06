// // components/NearToMeCard.jsx
// import { FaStar } from "react-icons/fa";

// const NearToMeCard = ({ item }) => {
//   return (
//     <div className="flex bg-white rounded-xl shadow-md overflow-hidden min-w-[360px]">
//       {/* Left Image */}
//       <img
//         src={item.image}
//         alt={item.name}
//         className="w-28 h-full object-cover"
//       />

//       {/* Right Content */}
//       <div className="flex flex-col justify-between p-3 w-full">
//         {/* Top */}
//         <h3 className="font-semibold text-base leading-tight">{item.name}</h3>

//         {/* Middle */}
//         <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
//           <div className="flex items-center gap-1 text-green-600 font-medium">
//             <FaStar className="text-yellow-400" />
//             {item.rating}
//           </div>
//           <span>{item.time}</span>
//           <span>{item.distance}</span>
//         </div>

//         {/* Bottom */}
//         <div className="flex items-center justify-between mt-2">
//           <span className="text-xs font-semibold text-green-600">
//             {item.status}
//           </span>
//           <span className="text-xs font-semibold text-red-500">
//             {item.offer}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NearToMeCard;

// components/NearToMeCard.jsx
// import { FaStar } from "react-icons/fa";

// const NearToMeCard = ({ item }) => {
//   return (
//     <div className="flex bg-white rounded-2xl shadow-sm border border-gray-100 p-3 gap-3 h-[120px]">
//       {/* Image Wrapper */}
//       <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
//         <img
//           src={item.image}
//           alt={item.name}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Right Content */}
//       <div className="flex flex-col justify-between w-full">
//         {/* Top */}
//         <h3 className="font-semibold text-sm md:text-base leading-tight line-clamp-1">
//           {item.name}
//         </h3>

//         {/* Middle */}
//         <div className="flex items-center gap-3 text-xs md:text-sm text-gray-500">
//           <div className="flex items-center gap-1 text-green-600 font-medium">
//             <FaStar className="text-yellow-400 text-xs" />
//             {item.rating}
//           </div>
//           <span>• {item.time}</span>
//           <span>• {item.distance}</span>
//         </div>

//         {/* Bottom */}
//         <div className="flex items-center justify-between">
//           <span className="text-xs font-semibold text-green-600">
//             {item.status}
//           </span>
//           <span className="text-xs font-semibold text-red-500">
//             {item.offer}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NearToMeCard;

import { FaStar, FaClock, FaMapMarkerAlt, FaPercent } from "react-icons/fa";

const NearToMeCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
      {/* Image Container with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay with Offer Badge */}
        {item.offer && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
            <FaPercent className="text-xs" />
            {item.offer}
          </div>
        )}

        {/* Delivery Time Badge */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-lg flex items-center gap-1">
          <FaClock className="text-green-600" />
          {item.time}
        </div>

        {/* Status Badge */}
        <div className="absolute bottom-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          {item.status}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Restaurant Name */}
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1 group-hover:text-green-600 transition-colors">
          {item.name}
        </h3>

        {/* Rating and Distance Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md">
            <FaStar className="text-green-600 text-sm" />
            <span className="text-sm font-semibold text-gray-800">
              {item.rating}
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <FaMapMarkerAlt className="text-gray-400" />
            <span>{item.distance}</span>
          </div>
        </div>

        {/* Additional Info (Optional) */}
        {item.cuisine && (
          <div className="mt-2 text-xs text-gray-500 line-clamp-1">
            {item.cuisine}
          </div>
        )}

        {/* Price Range (Optional) */}
        {item.priceRange && (
          <div className="mt-1 text-xs text-gray-500">
            {item.priceRange} for two
          </div>
        )}
      </div>
    </div>
  );
};

export default NearToMeCard;

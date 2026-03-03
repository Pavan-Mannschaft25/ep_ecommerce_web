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
import { FaStar } from "react-icons/fa";

const NearToMeCard = ({ item }) => {
  return (
    <div className="flex bg-white rounded-2xl shadow-sm border border-gray-100 p-3 gap-3 h-[120px]">
      {/* Image Wrapper */}
      <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-between w-full">
        {/* Top */}
        <h3 className="font-semibold text-sm md:text-base leading-tight line-clamp-1">
          {item.name}
        </h3>

        {/* Middle */}
        <div className="flex items-center gap-3 text-xs md:text-sm text-gray-500">
          <div className="flex items-center gap-1 text-green-600 font-medium">
            <FaStar className="text-yellow-400 text-xs" />
            {item.rating}
          </div>
          <span>• {item.time}</span>
          <span>• {item.distance}</span>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-green-600">
            {item.status}
          </span>
          <span className="text-xs font-semibold text-red-500">
            {item.offer}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NearToMeCard;

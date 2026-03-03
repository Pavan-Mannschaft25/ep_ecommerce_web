// components/TopRatedCard.jsx
import { FaStar } from "react-icons/fa";

const TopRatedCard = ({ item }) => {
  return (
    <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Offer Tag - Top Left */}
      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
        {item.offer}
      </div>

      {/* Rating - Top Right */}
      <div className="absolute top-3 right-3 flex items-center gap-1 bg-white text-green-600 text-sm font-semibold px-2 py-1 rounded-full">
        <FaStar className="text-yellow-400" />
        {item.rating}.0
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-lg font-bold leading-tight">{item.name}</h3>
        <p className="text-sm opacity-90">{item.time}</p>
      </div>
    </div>
  );
};

export default TopRatedCard;

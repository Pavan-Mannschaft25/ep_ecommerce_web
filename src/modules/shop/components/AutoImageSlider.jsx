// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const AutoImageSlider = ({ images }) => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (!images || images.length === 0) return;

//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images]);

//   return (
//     <div className="relative w-full h-64 md:h-120 overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={index}
//           src={images[index]}
//           alt="category banner"
//           className="absolute w-full h-full object-cover"
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//         />
//       </AnimatePresence>
//     </div>
//   );
// };

// export default AutoImageSlider;

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const AutoImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate("/shop")}
        className="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-md p-2 rounded-full shadow hover:bg-white transition"
        aria-label="Go back to shop"
      >
        <FiArrowLeft className="text-xl text-gray-800" />
      </button>

      {/* Slider */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="category banner"
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default AutoImageSlider;

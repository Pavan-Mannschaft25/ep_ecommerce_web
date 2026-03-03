// sections/TopRatedSection.jsx
import { motion } from "framer-motion";
import TopRatedCard from "../components/TopRatedCard";
import { topRatedData } from "../data/topRatedData";
import { FiChevronRight } from "react-icons/fi";

const TopRatedSection = () => {
  return (
    <section className="py-10">
      {/* Heading Row */}
      <div className="flex items-center justify-between mb-6 px-4 md:px-10 ">
        <h2 className="text-2xl font-bold">Top Rated</h2>

        <button className="flex items-center gap-1 text-sm font-semibold text-green-600 hover:text-green-700 transition">
          See All <FiChevronRight />
        </button>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // increase = slower, decrease = faster
          }}
        >
          {/* Duplicate data for seamless loop */}
          {[...topRatedData, ...topRatedData].map((item, index) => (
            <div key={index} className="min-w-[280px] md:min-w-[380px]">
              <TopRatedCard item={item} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopRatedSection;

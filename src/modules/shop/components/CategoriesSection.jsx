import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CTAButton from "../../../components/CTAButton";
import {
  FiShoppingBag,
  FiShoppingCart,
  FiFilter,
  FiX,
  FiCheck,
  FiTruck,
  FiAward,
  FiDollarSign,
  FiStar,
  FiTrendingUp,
  FiPackage,
  FiHeart,
  FiZap,
  FiCoffee,
  FiHome,
} from "react-icons/fi";

import {
  FaLeaf,
  FaDrumstickBite,
  FaUtensils,
  FaEgg,
  FaCheese,
  FaAppleAlt,
  FaBreadSlice,
} from "react-icons/fa";

import cat1 from "../../../assets/shopModule/category/shop-c1.avif";

const categories = [
  {
    id: "veg",
    name: "Veg",
    icon: <FaLeaf />,
    description: "Fresh and healthy vegetarian food options",
    color: "from-green-500 to-emerald-500",
    image: cat1,
  },
  {
    id: "nonveg",
    name: "Non-Veg",
    icon: <FaDrumstickBite />,
    description: "High-protein non-vegetarian foods",
    color: "from-red-500 to-orange-500",
    image: cat1,
  },
  {
    id: "restaurants",
    name: "Restaurants",
    icon: <FaUtensils />,
    description: "Popular restaurants and ready-to-eat meals",
    color: "from-purple-500 to-pink-500",
    image: cat1,
  },
  {
    id: "eggs",
    name: "Eggs",
    icon: <FaEgg />,
    description: "Farm fresh eggs for daily nutrition",
    color: "from-yellow-400 to-amber-500",
    image: cat1,
  },
  {
    id: "dairy",
    name: "Dairy Foods",
    icon: <FaCheese />,
    description: "Milk, curd, butter, cheese & dairy essentials",
    color: "from-blue-400 to-indigo-500",
    image: cat1,
  },
  {
    id: "fruits-vegetables",
    name: "Fruits & Vegetables",
    icon: <FaAppleAlt />,
    description: "Fresh fruits and green vegetables",
    color: "from-lime-500 to-green-600",
    image: cat1,
  },
  {
    id: "bakery-sweets",
    name: "Bakery & Sweets",
    icon: <FaBreadSlice />,
    description: "Cakes, breads, sweets & baked delights",
    color: "from-pink-400 to-rose-500",
    image: cat1,
  },
  {
    id: "home-foods",
    name: "Home Foods",
    icon: <FiHome />,
    description: "Homemade meals with traditional taste",
    color: "from-orange-400 to-red-500",
    image: cat1,
  },
  {
    id: "diet",
    name: "Diet",
    icon: <FiTrendingUp />,
    description: "Low-calorie & diet-friendly food choices",
    color: "from-teal-500 to-cyan-500",
    image: cat1,
  },
];

function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <>
      <section
        id="categories"
        className="py-10 bg-gradient-to-br from-gray-50 to-emerald-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              SHOP CATEGORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Browse By Category
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop/${category.id}`}
                className="block"
              >
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: category.id * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70`}
                    ></div>
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold">{category.name}</h3>
                    </div>
                    <p className="text-white/90 text-sm">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoriesSection;

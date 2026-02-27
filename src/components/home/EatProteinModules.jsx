import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiShoppingCart,
  FiHeart,
  FiClock,
  FiUsers,
  FiStar,
  FiPlus,
  FiCheck,
  FiTrendingUp,
  FiAward,
  FiBookOpen,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
//shop images
import img1 from "../../assets/home/shop-1.avif";
import img2 from "../../assets/home/shop-5.avif";
import img3 from "../../assets/home/shop-3.jpg";
import img4 from "../../assets/home/shop-4.avif";
//diet images
import d1 from "../../assets/home/diet-1.avif";
import d2 from "../../assets/home/diet-2.jpg";
import d3 from "../../assets/home/diet-3.avif";
import d4 from "../../assets/home/diet-4.jpg";
//fitness images
import f1 from "../../assets/home/fitness-1.avif";
import f2 from "../../assets/home/fitness-2.avif";
import f3 from "../../assets/home/fitness-3.jpg";
import f4 from "../../assets/home/fitness-4.jpg";
//recipes images
import r1 from "../../assets/home/recip-1.jpg";
import r2 from "../../assets/home/recip-2.jpg";
import r3 from "../../assets/home/recip-3.jpg";
import r4 from "../../assets/home/recip-4.jpg";

// Shop Module - Products
const shopProducts = [
  {
    id: 1,
    name: "Whey Protein Pro",
    price: "₹2,499",
    originalPrice: "₹3,299",
    discount: "24%",
    image: img1,
    rating: 4.8,
    reviews: 234,
    badge: "Bestseller",
    protein: "25g per serving",
  },
  {
    id: 2,
    name: "Plant Protein",
    price: "₹1,899",
    originalPrice: "₹2,499",
    discount: "24%",
    image: img2,
    rating: 4.6,
    reviews: 156,
    badge: "Vegan",
    protein: "22g per serving",
  },
  {
    id: 3,
    name: "Creatine Monohydrate",
    price: "₹999",
    originalPrice: "₹1,499",
    discount: "33%",
    image: img3,
    rating: 4.9,
    reviews: 412,
    badge: "Top Rated",
    protein: "5g per serving",
  },
  {
    id: 4,
    name: "BCAA Energy",
    price: "₹1,299",
    originalPrice: "₹1,799",
    discount: "28%",
    image: img4,
    rating: 4.5,
    reviews: 89,
    badge: "Pre-Workout",
    protein: "7g per serving",
  },
];

// Diet Module - Diet Plans
const dietPlans = [
  {
    id: 1,
    name: "Muscle Builder Plan",
    duration: "8 weeks",
    price: "₹3,999",
    image: d1,
    calories: "2500-3000 cal/day",
    protein: "150g protein/day",
    level: "Intermediate",
    meals: 6,
    rating: 4.9,
    users: 1234,
    badge: "Most Popular",
  },
  {
    id: 2,
    name: "Fat Shredder Plan",
    duration: "12 weeks",
    price: "₹4,999",
    image: d2,
    calories: "1800-2200 cal/day",
    protein: "120g protein/day",
    level: "Beginner",
    meals: 5,
    rating: 4.7,
    users: 892,
    badge: "Effective",
  },
  {
    id: 3,
    name: "Athlete Performance",
    duration: "16 weeks",
    price: "₹7,999",
    image: d3,
    calories: "3500-4000 cal/day",
    protein: "200g protein/day",
    level: "Advanced",
    meals: 7,
    rating: 4.8,
    users: 567,
    badge: "Pro Level",
  },
  {
    id: 4,
    name: "Vegan Gain Plan",
    duration: "10 weeks",
    price: "₹3,499",
    image: d4,
    calories: "2400-2800 cal/day",
    protein: "100g protein/day",
    level: "Intermediate",
    meals: 6,
    rating: 4.6,
    users: 445,
    badge: "Plant-Based",
  },
];

// Fitness Module - Workout Plans
const fitnessPlans = [
  {
    id: 1,
    name: "Full Body Strength",
    duration: "6 weeks",
    level: "Beginner",
    image: f1,
    sessions: 3,
    // duration: "45 min",
    equipment: "Basic",
    rating: 4.8,
    users: 2341,
    badge: "Start Here",
  },
  {
    id: 2,
    name: "HIIT Cardio Blast",
    duration: "4 weeks",
    level: "Intermediate",
    image: f2,
    sessions: 4,
    // duration: "30 min",
    equipment: "None",
    rating: 4.7,
    users: 1876,
    badge: "Fat Burn",
  },
  {
    id: 3,
    name: "Muscle Hypertrophy",
    duration: "12 weeks",
    level: "Advanced",
    image: f3,
    sessions: 5,
    // duration: "60 min",
    equipment: "Full Gym",
    rating: 4.9,
    users: 987,
    badge: "Build Mass",
  },
  {
    id: 4,
    name: "Core & Abs",
    duration: "3 weeks",
    level: "All Levels",
    image: f4,
    sessions: 5,
    // duration: "20 min",
    equipment: "Mat",
    rating: 4.6,
    users: 3214,
    badge: "Quick",
  },
];

// Recipes Module - Healthy Recipes
const recipes = [
  {
    id: 1,
    name: "Protein Pancakes",
    time: "20 min",
    difficulty: "Easy",
    image: r1,
    calories: "320 cal",
    protein: "28g protein",
    servings: 2,
    rating: 4.9,
    reviews: 156,
    badge: "Breakfast",
  },
  {
    id: 2,
    name: "Grilled Chicken Bowl",
    time: "30 min",
    difficulty: "Medium",
    image: r2,
    calories: "420 cal",
    protein: "45g protein",
    servings: 1,
    rating: 4.8,
    reviews: 234,
    badge: "Lunch",
  },
  {
    id: 3,
    name: "Salmon & Quinoa",
    time: "35 min",
    difficulty: "Medium",
    image: r3,
    calories: "380 cal",
    protein: "38g protein",
    servings: 2,
    rating: 4.7,
    reviews: 189,
    badge: "Dinner",
  },
  {
    id: 4,
    name: "Protein Smoothie Bowl",
    time: "10 min",
    difficulty: "Easy",
    image: r4,
    calories: "280 cal",
    protein: "32g protein",
    servings: 1,
    rating: 4.6,
    reviews: 98,
    badge: "Snack",
  },
];

// Shop Product Card
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            {product.discount} OFF
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            {product.badge}
          </span>
        </div>
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3"
        >
          <button className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors">
            <FiShoppingCart className="text-gray-800" size={20} />
          </button>
          <button className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors">
            <FiHeart className="text-gray-800" size={20} />
          </button>
        </motion.div> */}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{product.protein}</p>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            <FiStar className="text-yellow-400 fill-current" size={16} />
            <span className="text-sm font-medium ml-1">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-500">
            ({product.reviews} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-emerald-600">
              {product.price}
            </span>
            <span className="text-sm text-gray-400 line-through ml-2">
              {product.originalPrice}
            </span>
          </div>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Diet Plan Card
const DietPlanCard = ({ plan }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg overflow-hidden border border-emerald-100"
    >
      <div className="relative">
        <img
          src={plan.image}
          alt={plan.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
            {plan.badge}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-bold text-emerald-600">
            {plan.duration}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-xl text-gray-800 mb-3">{plan.name}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Calories:</span>
            <span className="font-semibold">{plan.calories}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Protein:</span>
            <span className="font-semibold text-emerald-600">
              {plan.protein}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Meals/Day:</span>
            <span className="font-semibold">{plan.meals} meals</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Level:</span>
            <span className="font-semibold">{plan.level}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FiUsers className="text-gray-400" size={16} />
            <span className="text-sm text-gray-600">{plan.users} joined</span>
          </div>
          <div className="flex items-center gap-1">
            <FiStar className="text-yellow-400 fill-current" size={16} />
            <span className="text-sm font-medium">{plan.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-emerald-600">
            {plan.price}
          </span>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center gap-2">
            Start Now
            <FiArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Fitness Plan Card
const FitnessPlanCard = ({ plan }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={plan.image}
          alt={plan.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute top-3 left-3">
          <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
            {plan.badge}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-bold text-xl">{plan.name}</h3>
        </div>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <FiClock className="mx-auto text-purple-600 mb-1" size={20} />
            <p className="text-xs text-gray-600">Duration</p>
            <p className="font-semibold text-sm">{plan.duration}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <FiTrendingUp className="mx-auto text-purple-600 mb-1" size={20} />
            <p className="text-xs text-gray-600">Level</p>
            <p className="font-semibold text-sm">{plan.level}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <FiBookOpen className="mx-auto text-purple-600 mb-1" size={20} />
            <p className="text-xs text-gray-600">Sessions</p>
            <p className="font-semibold text-sm">{plan.sessions}/week</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <FiAward className="mx-auto text-purple-600 mb-1" size={20} />
            <p className="text-xs text-gray-600">Equipment</p>
            <p className="font-semibold text-sm">{plan.equipment}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FiUsers className="text-gray-400" size={16} />
            <span className="text-sm text-gray-600">{plan.users} members</span>
          </div>
          <div className="flex items-center gap-1">
            <FiStar className="text-yellow-400 fill-current" size={16} />
            <span className="text-sm font-medium">{plan.rating}</span>
          </div>
        </div>

        <button className="w-full mt-4 bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
          Start Workout
        </button>
      </div>
    </motion.div>
  );
};

// Recipe Card
const RecipeCard = ({ recipe }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group"
    >
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
            {recipe.badge}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-bold text-orange-600">
            {recipe.time}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-xl text-gray-800 mb-3">{recipe.name}</h3>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-600">Calories:</span>
            <span className="font-semibold text-sm">{recipe.calories}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-600">Protein:</span>
            <span className="font-semibold text-sm text-orange-600">
              {recipe.protein}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
              {recipe.difficulty}
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
              {recipe.servings} servings
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FiStar className="text-yellow-400 fill-current" size={16} />
            <span className="text-sm font-medium">{recipe.rating}</span>
          </div>
        </div>

        <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
          View Recipe
          <FiPlus size={16} />
        </button>
      </div>
    </motion.div>
  );
};

// Main Component with all sections
const EatProteinModules = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Shop Module */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Shop Supplements
            </h2>
            <p className="text-gray-600">
              Premium quality products for your fitness goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shopProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Diet Module */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Diet Plans
            </h2>
            <p className="text-gray-600">
              Personalized nutrition plans tailored to your goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dietPlans.map((plan) => (
              <DietPlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Fitness Module */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Fitness Programs
            </h2>
            <p className="text-gray-600">
              Expert-designed workout plans for all fitness levels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fitnessPlans.map((plan) => (
              <FitnessPlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Module */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Healthy Recipes
            </h2>
            <p className="text-gray-600">
              Delicious high-protein recipes for every meal
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EatProteinModules;

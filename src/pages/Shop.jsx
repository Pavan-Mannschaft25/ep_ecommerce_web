import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CTAButton from "../components/CTAButton";
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
} from "react-icons/fi";

// Import hero image
// import shopHero from "../assets/shop/product1.jpg";
import shopHero from "../assets/shop/shop-hero.jpg";

// Import product images
import product1 from "../assets/shop/product1.jpg";
import product2 from "../assets/shop/product2.jpg";
import product3 from "../assets/shop/product3.jpg";
import product4 from "../assets/shop/product2.jpg";
import product5 from "../assets/shop/product2.jpg";
import product6 from "../assets/shop/product2.jpg";
import product7 from "../assets/shop/product2.jpg";
import product8 from "../assets/shop/product2.jpg";
import DownloadApp from "../components/DownloadApp";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Shop categories
  const categories = [
    {
      id: "whey",
      name: "Whey Protein",
      icon: <FiPackage />,
      description: "High-quality whey proteins for muscle recovery",
      color: "from-blue-500 to-indigo-500",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "vegan",
      name: "Vegan Protein",
      icon: <FiHeart />,
      description: "Plant-based proteins for vegan athletes",
      color: "from-green-500 to-emerald-500",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "snacks",
      name: "Snacks",
      icon: <FiZap />,
      description: "Healthy and delicious protein snacks",
      color: "from-yellow-500 to-orange-500",
      image:
        "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "supplements",
      name: "Supplements",
      icon: <FiPackage />,
      description: "Essential vitamins and minerals",
      color: "from-purple-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "energy",
      name: "Energy Foods",
      icon: <FiTrendingUp />,
      description: "Natural energy boosters for workouts",
      color: "from-red-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  // Products data
  const products = [
    {
      id: 1,
      name: "Premium Whey Protein",
      price: 49.99,
      originalPrice: 59.99,
      category: "whey",
      image: product1,
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Vegan Power Protein",
      price: 44.99,
      originalPrice: 54.99,
      category: "vegan",
      image: product2,
      rating: 4.7,
      reviews: 89,
      badge: "Popular",
    },
    {
      id: 3,
      name: "Protein Energy Bar",
      price: 29.99,
      originalPrice: 34.99,
      category: "snacks",
      image: product3,
      rating: 4.6,
      reviews: 76,
      badge: "Trending",
    },
    {
      id: 4,
      name: "Pre-Workout Formula",
      price: 39.99,
      originalPrice: 44.99,
      category: "supplements",
      image: product4,
      rating: 4.9,
      reviews: 203,
      badge: "Top Rated",
    },
    {
      id: 5,
      name: "Energy Boost Capsules",
      price: 34.99,
      originalPrice: 39.99,
      category: "energy",
      image: product5,
      rating: 4.5,
      reviews: 67,
      badge: null,
    },
    {
      id: 6,
      name: "Isolate Whey Protein",
      price: 54.99,
      originalPrice: 64.99,
      category: "whey",
      image: product6,
      rating: 4.8,
      reviews: 156,
      badge: "Premium",
    },
    {
      id: 7,
      name: "Plant Protein Blend",
      price: 42.99,
      originalPrice: 48.99,
      category: "vegan",
      image: product7,
      rating: 4.6,
      reviews: 93,
      badge: null,
    },
    {
      id: 8,
      name: "Protein Cookie Bites",
      price: 24.99,
      originalPrice: 29.99,
      category: "snacks",
      image: product8,
      rating: 4.7,
      reviews: 112,
      badge: "New",
    },
  ];

  // Why choose us features
  const whyChooseUs = [
    {
      icon: <FiAward className="text-2xl" />,
      title: "Lab Tested",
      description:
        "All our products undergo rigorous testing for purity and potency",
    },
    {
      icon: <FiShoppingBag className="text-2xl" />,
      title: "Trusted Brands",
      description:
        "We only source from reputable manufacturers with proven track records",
    },
    {
      icon: <FiDollarSign className="text-2xl" />,
      title: "Affordable Prices",
      description: "Get premium quality products at competitive prices",
    },
    {
      icon: <FiTruck className="text-2xl" />,
      title: "Fast Delivery",
      description:
        "Free shipping on orders over $30, delivered within 24 hours",
    },
  ];

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  // Add to cart function
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    // Show a brief notification
    const notification = document.createElement("div");
    notification.className =
      "fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50";
    notification.textContent = `${product.name} added to cart!`;
    document.body.appendChild(notification);

    setTimeout(() => {
      document.body.removeChild(notification);
    }, 3000);
  };

  // Cart functions
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity } : item,
        ),
      );
    }
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div>
      {/* Hero Section with Image */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 pt-10">
          <img
            src={shopHero}
            alt="Protein Shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Healthy Protein Foods for Every Fitness Goal
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Premium quality protein products to fuel your workouts and
                support your fitness journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton
                  text="Shop Now"
                  to="#products"
                  primary={true}
                  icon={<FiShoppingBag />}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                />
                <CTAButton
                  text="View Categories"
                  to="#categories"
                  className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-emerald-600"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        id="categories"
        className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50"
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
              Find What You Need
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our wide range of protein products designed to meet your
              specific fitness goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
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
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {/* <button
              to="#products"
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-3 rounded-full transition-colors ${
                activeCategory === "all"
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              View All Products
            </button> */}
            <CTAButton
              text="View All Products"
              to="#download"
              primary={true}
              icon={<FiShoppingBag />}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            />
          </div>
        </div>
      </section>

      {/* Why Our Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              WHY OUR PRODUCTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quality You Can Trust
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the highest quality protein products
              to support your fitness journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-emerald-50 p-8 rounded-2xl text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section
        id="products"
        className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              PRODUCT HIGHLIGHTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Best Sellers & Trending Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our most popular protein products loved by fitness
              enthusiasts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.badge}
                    </div>
                  )}
                  {product.originalPrice > product.price && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {Math.round(
                        (1 - product.price / product.originalPrice) * 100,
                      )}
                      % OFF
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-500 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={
                            i < Math.floor(product.rating) ? "fill-current" : ""
                          }
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xl font-bold text-emerald-600">
                        ₹{product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    <FiShoppingCart className="mr-2" />
                    Add to Cart
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Fuel Your Body With The Right Nutrition
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get premium quality protein products that support your fitness
              goals and help you achieve optimal results
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                text="Shop Now"
                to="#products"
                primary={true}
                icon={<FiShoppingBag />}
                className="bg-white text-emerald-600 hover:bg-gray-100"
              />
              <CTAButton
                text="View Special Offers"
                to="#offers"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-emerald-600"
              />
            </div>
          </motion.div>
        </div>
      </section> */}
      <DownloadApp />

      {/* Cart Modal */}
      {/* {cartOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex justify-end"
          onClick={() => setCartOpen(false)}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="bg-white w-full max-w-md h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={24} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="p-6 text-center">
                <FiShoppingCart
                  size={48}
                  className="mx-auto text-gray-300 mb-4"
                />
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="p-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center mb-4 pb-4 border-b"
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded mr-4 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">${item.price}</p>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="mx-2 w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t">
                  <div className="flex justify-between mb-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-lg font-bold">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <CTAButton
                    text="Checkout (UI Only)"
                    to="#"
                    primary={true}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(
                        "Checkout functionality is not implemented in this frontend-only version.",
                      );
                    }}
                  />
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )} */}

      {/* Floating Cart Button */}
      {/* <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-8 right-8 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors z-40"
      >
        <FiShoppingCart size={24} />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </button> */}
    </div>
  );
};

export default Shop;

// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { FaDumbbell, FaAppleAlt, FaChartLine, FaUsers } from "react-icons/fa";

// const modules = [
//   {
//     title: "Fitness",
//     icon: <FiActivity size={28} />,
//     desc: "Workouts, trainers & progress",
//     to: "/fitness",
//     color: "emerald",
//   },
//   {
//     title: "Shop",
//     icon: <FiShoppingBag size={28} />,
//     desc: "Supplements & fitness gear",
//     to: "/shop",
//     color: "teal",
//   },
//   {
//     title: "Diet",
//     icon: <FiTarget size={28} />,
//     desc: "Personalized diet plans",
//     to: "/diet",
//     color: "orange",
//   },
//   {
//     title: "Recipes",
//     icon: <FiHeart size={28} />,
//     desc: "Healthy & easy recipes",
//     to: "/recipes",
//     color: "purple",
//   },
// ];

// const modules = [
//   {
//     title: "Workouts",
//     icon: FaDumbbell,
//     desc: "Custom workout plans tailored to your goals",
//     to: "/workouts",
//     color: "from-emerald-400 to-emerald-600",
//     image:
//       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     title: "Nutrition",
//     icon: FaAppleAlt,
//     desc: "Track meals and get personalized nutrition advice",
//     to: "/nutrition",
//     color: "from-orange-400 to-orange-600",
//     image:
//       "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     title: "Progress",
//     icon: FaChartLine,
//     desc: "Monitor your fitness journey with detailed analytics",
//     to: "/progress",
//     color: "from-blue-400 to-blue-600",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     title: "Community",
//     icon: FaUsers,
//     desc: "Connect with like-minded fitness enthusiasts",
//     to: "/community",
//     color: "from-purple-400 to-purple-600",
//     image:
//       "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//   },
// ];

// const ModuleCard = ({ title, icon: Icon, desc, to, color, image }) => {
//   const navigate = useNavigate();

//   return (
//     <motion.div
//       whileHover={{ y: -5, scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//       onClick={() => navigate(to)}
//       className="cursor-pointer group"
//     >
//       <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl">
//         {/* Image Section */}
//         <div className="relative h-32 overflow-hidden">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//           />
//           <div
//             className={`absolute inset-0 bg-gradient-to-t ${color} opacity-60`}
//           ></div>
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//         </div>

//         {/* Content Section */}
//         <div className="p-6">
//           {/* Icon */}
//           <div
//             className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} mb-4`}
//           >
//             <Icon className="w-6 h-6 text-white" />
//           </div>

//           {/* Title and Description */}
//           <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
//           <p className="text-sm text-gray-600 line-clamp-2">{desc}</p>

//           {/* Arrow Indicator */}
//           <div className="mt-4 flex items-center text-emerald-600 text-sm font-medium group-hover:text-emerald-700 transition-colors">
//             <span>Explore</span>
//             <svg
//               className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const SectionTitle = ({ title, subtitle, centered }) => {
//   return (
//     <div className={`${centered ? "text-center" : ""}`}>
//       <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
//       <p className="text-gray-600">{subtitle}</p>
//     </div>
//   );
// };

// const ExploreModules = () => {
//   return (
//     <section className="py-10 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <SectionTitle
//           title="Explore Our Modules"
//           subtitle="Discover all the tools you need for your fitness journey"
//           centered={true}
//         />

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
//           {modules.map((module, index) => (
//             <ModuleCard
//               key={index}
//               title={module.title}
//               icon={module.icon}
//               desc={module.desc}
//               to={module.to}
//               color={module.color}
//               image={module.image}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExploreModules;

import React from "react";
import { motion } from "framer-motion";
import {
  FiActivity,
  FiShoppingBag,
  FiTarget,
  FiHeart,
  FiArrowRight,
} from "react-icons/fi";
import img1 from "../../assets/home/module-1.avif";
import img2 from "../../assets/home/module-2.avif";
import img3 from "../../assets/home/module-3.jpg";
import img4 from "../../assets/home/module-4.avif";

const modules = [
  {
    title: "Shop",
    icon: <FiShoppingBag size={28} />,
    desc: "Supplements & fitness gear",
    to: "/shop",
    color: "teal",
    image: img1,
  },
  {
    title: "Diet",
    icon: <FiTarget size={28} />,
    desc: "Personalized diet plans",
    to: "/diet",
    color: "orange",
    image: img2,
  },
  {
    title: "Fitness",
    icon: <FiActivity size={28} />,
    desc: "Workouts, trainers & progress",
    to: "/fitness",
    color: "emerald",
    image: img3,
  },
  {
    title: "Recipes",
    icon: <FiHeart size={28} />,
    desc: "Healthy & easy recipes",
    to: "/recipes",
    color: "purple",
    image: img4,
  },
];

const ModuleCard = ({ title, icon, desc, to, color, image }) => {
  const colorClasses = {
    emerald: "from-emerald-400 to-emerald-600",
    teal: "from-teal-400 to-teal-600",
    orange: "from-orange-400 to-orange-600",
    purple: "from-purple-400 to-purple-600",
  };

  const iconBgClasses = {
    emerald: "bg-emerald-100 text-emerald-600",
    teal: "bg-teal-100 text-teal-600",
    orange: "bg-orange-100 text-orange-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <motion.a
      href={to}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.95 }}
      className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${colorClasses[color]} opacity-60`}
        ></div>

        {/* Icon Badge */}
        <div className="absolute top-4 right-4">
          <div className={`p-3 rounded-full ${iconBgClasses[color]} shadow-lg`}>
            {icon}
          </div>
        </div>

        {/* Title on Image */}
        <div className="absolute bottom-4 left-4">
          <h3 className="text-white font-bold text-xl">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-gray-600 text-sm mb-4">{desc}</p>

        <div className="flex items-center justify-between">
          <span
            className={`text-${color}-600 font-semibold text-sm group-hover:text-${color}-700 transition-colors`}
          >
            Explore
          </span>
          <div
            className={`p-2 rounded-full ${iconBgClasses[color]} group-hover:scale-110 transition-transform`}
          >
            <FiArrowRight className={`text-${color}-600`} size={16} />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

const SectionTitle = ({ title, subtitle, centered }) => {
  return (
    <div className={`${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
};

const ExploreModules = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Explore Our Modules"
          subtitle="Discover all the tools you need for your fitness journey"
          centered={true}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              icon={module.icon}
              desc={module.desc}
              to={module.to}
              color={module.color}
              image={module.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreModules;

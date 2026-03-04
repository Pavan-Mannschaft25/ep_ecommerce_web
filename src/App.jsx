// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { FaWhatsapp } from "react-icons/fa";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Fitness from "./pages/Fitness";
// import Shop from "./pages/Shop";
// import AppPreview from "./pages/AppPreview";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import ScrollToTop from "./components/ScrollToTop";
// import FranchisePage from "./pages/FranchisePage";
// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <ScrollToTop />
//         <Header />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/fitness" element={<Fitness />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/app-preview" element={<AppPreview />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/franchises" element={<FranchisePage />} />
//           </Routes>
//         </main>
//         <Footer />
//         <a
//           href="https://wa.me/916305070487"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fixed bottom-6 right-6 rounded-full shadow-2xl px-3 py-3 font-semibold z-100 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white transition"
//         >
//           <FaWhatsapp size={42} />
//         </a>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { FaWhatsapp } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Fitness from "./pages/Fitness";
import Shop from "./pages/Shop";
import AppPreview from "./pages/AppPreview";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import FranchisePage from "./pages/FranchisePage";
import PartnerLayout from "./pages/PartnerLayout";
import AppRoutes from "./routes/AppRoutes";
import PartnerRoutes from "./routes/PartnerRoutes";
import StoreVendorLogin from "./pages/auth/StoreVendorLogin";
import DietCoachLogin from "./pages/auth/DietCoachLogin";
import FitnessLogin from "./pages/auth/FitnessLogin";
import RecipeLogin from "./pages/auth/RecipeLogin";
import Landing from "./pages/Landing";
import ExplorePartners from "./pages/ExplorePartners";
import AddTrainer from "./pages/center/AddTrainer";
import RecipeDashboard from "./pages/dashboard/RecipeDashboard";
import TrainerCenterDashboard from "./pages/dashboard/TrainerCenterDashboard";
import CenterDashboard from "./pages/dashboard/CenterDashboard";
import TrainerDashboard from "./pages/dashboard/TrainerDashboard";
import DietDashboard from "./pages/dashboard/DietDashboard";
import StoreDashboard from "./pages/dashboard/StoreDashboard";
import ShopModuleMainPage from "./modules/shop/pages/ShopModuleMainPage";
import ShopCategoryPage from "./modules/shop/pages/ShopCategoryPage";

const ProtectedRoute = ({ children, partnerType, role }) => {
  const {
    isAuthenticated,
    partnerType: userPartnerType,
    role: userRole,
  } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (partnerType && userPartnerType !== partnerType) {
    return <Navigate to="/" replace />;
  }

  if (role && userRole !== role && userRole !== "both") {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/shop" element={<ShopModuleMainPage />} />
            <Route path="/app-preview" element={<AppPreview />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/franchises" element={<FranchisePage />} />

            <Route path="/partners" element={<Landing />} />
            <Route path="/explore-partners" element={<ExplorePartners />} />

            {/* Auth */}
            <Route path="/auth/store-vendor" element={<StoreVendorLogin />} />
            <Route path="/auth/diet-coach" element={<DietCoachLogin />} />
            <Route path="/auth/fitness" element={<FitnessLogin />} />
            <Route path="/auth/recipe" element={<RecipeLogin />} />

            <Route
              path="/dashboard/store"
              element={
                <ProtectedRoute partnerType="store-vendor">
                  <StoreDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/diet"
              element={
                <ProtectedRoute partnerType="diet-coach">
                  <DietDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/trainer"
              element={
                <ProtectedRoute partnerType="fitness" role="trainer">
                  <TrainerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/center"
              element={
                <ProtectedRoute partnerType="fitness" role="center">
                  <CenterDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/trainer-center"
              element={
                <ProtectedRoute partnerType="fitness" role="both">
                  <TrainerCenterDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/recipe"
              element={
                <ProtectedRoute partnerType="recipe">
                  <RecipeDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard/center/add-trainer"
              element={
                <ProtectedRoute partnerType="fitness" role="center">
                  <AddTrainer />
                </ProtectedRoute>
              }
            />

            <Route path="/shop/:category" element={<ShopCategoryPage />} />

            {/* 404 Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <a
          href="https://wa.me/916305070487"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 rounded-full shadow-2xl px-3 py-3 font-semibold z-100 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white transition"
        >
          <FaWhatsapp size={42} />
        </a>
      </div>
    </>
  );
}

export default App;

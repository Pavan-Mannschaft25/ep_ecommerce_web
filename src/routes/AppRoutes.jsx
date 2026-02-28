import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Landing from "../pages/Landing";
import ExplorePartners from "../pages/ExplorePartners";
import StoreVendorLogin from "../pages/auth/StoreVendorLogin";
import AddTrainer from "../pages/center/AddTrainer";
import DietCoachLogin from "../pages/auth/DietCoachLogin";
import FitnessLogin from "../pages/auth/FitnessLogin";
import RecipeLogin from "../pages/auth/RecipeLogin";
import StoreDashboard from "../pages/dashboard/StoreDashboard";
import DietDashboard from "../pages/dashboard/DietDashboard";
import TrainerDashboard from "../pages/dashboard/TrainerDashboard";
import CenterDashboard from "../pages/dashboard/CenterDashboard";
import TrainerCenterDashboard from "../pages/dashboard/TrainerCenterDashboard";
import RecipeDashboard from "../pages/dashboard/RecipeDashboard";
import ScrollToTop from "../components/ScrollToTop";

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

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/explore-partners" element={<ExplorePartners />} />

        {/* Auth Routes */}
        <Route path="/auth/store-vendor" element={<StoreVendorLogin />} />
        <Route path="/auth/diet-coach" element={<DietCoachLogin />} />
        <Route path="/auth/fitness" element={<FitnessLogin />} />
        <Route path="/auth/recipe" element={<RecipeLogin />} />

        {/* Dashboard Routes */}
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

        {/* 404 Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

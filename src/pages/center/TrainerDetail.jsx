import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaEdit,
  FaEnvelope,
  FaPhone,
  FaCalendar,
  FaAward,
  FaUsers,
  FaStar,
} from "react-icons/fa";
import { generateAvatarUrl, formatDate } from "../../utils/helpers";
import DashboardLayout from "../../components/layout/DashboardLayout";

const TrainerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trainer, setTrainer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        // Mock API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockTrainer = {
          id: parseInt(id),
          full_name: "John Smith",
          email: "john.smith@example.com",
          phone: "+91 98765 43210",
          specialization: "Strength Training",
          experience_years: 5,
          certifications: "ACE Certified, NASM CPT",
          bio: "Expert in strength and conditioning with 5+ years of experience. Passionate about helping clients achieve their fitness goals through personalized training programs.",
          profile_image: null,
          join_date: "2023-01-15",
          salary: 30000,
          employment_type: "full-time",
          status: "active",
          total_clients: 15,
          rating: 4.8,
          total_sessions: 450,
          monthly_revenue: 75000,
        };

        setTrainer(mockTrainer);
      } catch (error) {
        console.error("Error fetching trainer:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainer();
  }, [id]);

  if (loading) {
    return (
      <DashboardLayout title="Trainer Details">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </DashboardLayout>
    );
  }

  if (!trainer) {
    return (
      <DashboardLayout title="Trainer Not Found">
        <div className="text-center py-12">
          <p className="text-gray-600">Trainer not found</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title={trainer.full_name}>
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/dashboard/center")}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <FaArrowLeft />
          <span>Back to Center</span>
        </button>

        {/* Trainer Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primaryDark p-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <img
                src={
                  trainer.profile_image || generateAvatarUrl(trainer.full_name)
                }
                alt={trainer.full_name}
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />
              <div className="text-center sm:text-left flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {trainer.full_name}
                </h2>
                <p className="text-white/90 mb-2">{trainer.specialization}</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    {trainer.experience_years} years experience
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    ⭐ {trainer.rating} rating
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm capitalize">
                    {trainer.employment_type}
                  </span>
                </div>
              </div>
              <button
                onClick={() =>
                  navigate(`/dashboard/center/edit-trainer/${trainer.id}`)
                }
                className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FaEdit className="inline mr-2" />
                Edit
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Bio */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-gray-600">{trainer.bio}</p>
            </div>

            {/* Contact Information */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-primary" />
                  <span>{trainer.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-primary" />
                  <span>{trainer.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCalendar className="text-primary" />
                  <span>Joined: {formatDate(trainer.join_date)}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaAward className="text-primary" />
                  <span>{trainer.certifications}</span>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">
                Performance Statistics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <FaUsers className="text-primary text-2xl mx-auto mb-2" />
                  <p className="text-2xl font-bold">{trainer.total_clients}</p>
                  <p className="text-sm text-gray-600">Total Clients</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <FaCalendar className="text-primary text-2xl mx-auto mb-2" />
                  <p className="text-2xl font-bold">{trainer.total_sessions}</p>
                  <p className="text-sm text-gray-600">Total Sessions</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <FaStar className="text-primary text-2xl mx-auto mb-2" />
                  <p className="text-2xl font-bold">{trainer.rating}</p>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="text-primary text-2xl mx-auto mb-2 block">
                    ₹
                  </span>
                  <p className="text-2xl font-bold">
                    {trainer.monthly_revenue.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">Monthly Revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TrainerDetail;

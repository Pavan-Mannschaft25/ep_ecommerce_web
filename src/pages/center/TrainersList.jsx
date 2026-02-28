import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash, FaEye, FaUserTie } from "react-icons/fa";
import { generateAvatarUrl, getStatusColor } from "../../utils/helpers";

const TrainersList = () => {
  const navigate = useNavigate();
  const instituteData = useSelector((state) => state.institute.data);
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecialization, setFilterSpecialization] = useState("all");

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockTrainers = [
          {
            id: 1,
            full_name: "John Smith",
            email: "john.smith@example.com",
            phone: "+91 98765 43210",
            specialization: "Strength Training",
            experience_years: 5,
            certifications: "ACE Certified, NASM CPT",
            bio: "Expert in strength and conditioning with 5+ years of experience.",
            profile_image: null,
            join_date: "2023-01-15",
            salary: 30000,
            employment_type: "full-time",
            status: "active",
            total_clients: 15,
            rating: 4.8,
          },
          {
            id: 2,
            full_name: "Sarah Johnson",
            email: "sarah.j@example.com",
            phone: "+91 98765 43211",
            specialization: "Yoga",
            experience_years: 7,
            certifications: "RYT 500, Yoga Alliance",
            bio: "Certified yoga instructor specializing in Hatha and Vinyasa flow.",
            profile_image: null,
            join_date: "2022-06-20",
            salary: 28000,
            employment_type: "full-time",
            status: "active",
            total_clients: 20,
            rating: 4.9,
          },
          {
            id: 3,
            full_name: "Mike Wilson",
            email: "mike.w@example.com",
            phone: "+91 98765 43212",
            specialization: "CrossFit",
            experience_years: 4,
            certifications: "CrossFit Level 2",
            bio: "CrossFit coach passionate about functional fitness.",
            profile_image: null,
            join_date: "2023-03-10",
            salary: 25000,
            employment_type: "part-time",
            status: "active",
            total_clients: 12,
            rating: 4.7,
          },
        ];

        setTrainers(mockTrainers);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainers();
  }, [instituteData.id]);

  const handleDeleteTrainer = async (trainerId) => {
    if (window.confirm("Are you sure you want to remove this trainer?")) {
      try {
        // Mock API call
        await new Promise((resolve) => setTimeout(resolve, 500));
        setTrainers((prev) =>
          prev.filter((trainer) => trainer.id !== trainerId),
        );
      } catch (error) {
        console.error("Error deleting trainer:", error);
      }
    }
  };

  const filteredTrainers = trainers.filter((trainer) => {
    const matchesSearch =
      trainer.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.specialization.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialization =
      filterSpecialization === "all" ||
      trainer.specialization === filterSpecialization;

    return matchesSearch && matchesSpecialization;
  });

  const specializations = [...new Set(trainers.map((t) => t.specialization))];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="text-xl font-semibold">
          Our Trainers ({filteredTrainers.length})
        </h3>
        <button
          onClick={() => navigate("/dashboard/center/add-trainer")}
          className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primaryDark transition-colors"
        >
          <FaPlus />
          <span>Add Trainer</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search trainers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <select
          value={filterSpecialization}
          onChange={(e) => setFilterSpecialization(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="all">All Specializations</option>
          {specializations.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>

      {/* Trainers Grid */}
      {filteredTrainers.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <FaUserTie className="mx-auto text-4xl text-gray-400 mb-4" />
          <p className="text-gray-600">No trainers found</p>
          <button
            onClick={() => navigate("/dashboard/center/add-trainer")}
            className="mt-4 text-primary hover:underline"
          >
            Add your first trainer
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <img
                    src={
                      trainer.profile_image ||
                      generateAvatarUrl(trainer.full_name)
                    }
                    alt={trainer.full_name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${getStatusColor(trainer.status)}`}
                  >
                    {trainer.status}
                  </span>
                </div>

                <h4 className="font-semibold text-lg mb-1">
                  {trainer.full_name}
                </h4>
                <p className="text-gray-600 text-sm mb-2">
                  {trainer.specialization}
                </p>
                <p className="text-gray-500 text-xs mb-3">
                  {trainer.experience_years} years experience
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Clients:</span>
                    <span className="font-medium">{trainer.total_clients}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-medium">⭐ {trainer.rating}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium capitalize">
                      {trainer.employment_type}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t flex justify-between">
                  <button
                    onClick={() =>
                      navigate(`/dashboard/center/trainer/${trainer.id}`)
                    }
                    className="text-primary hover:text-primaryDark"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() =>
                      navigate(`/dashboard/center/edit-trainer/${trainer.id}`)
                    }
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteTrainer(trainer.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrainersList;

import React from "react";
import { useSelector } from "react-redux";
import StatsCard from "../../components/cards/StatsCard";
import { FaUsers, FaCalendarCheck, FaDollarSign, FaStar } from "react-icons/fa";
import DashboardLayout from "../../components/layout/DashboardLayout";

const TrainerDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const trainerData = useSelector((state) => state.trainer.data);

  // Mock data for trainer dashboard
  const stats = [
    {
      title: "Total Clients",
      value: trainerData.assigned_clients?.length || 0,
      icon: <FaUsers />,
    },
    { title: "Sessions Today", value: "4", icon: <FaCalendarCheck /> },
    {
      title: "Earnings (Month)",
      value: `₹${trainerData.earnings?.toLocaleString() || 0}`,
      icon: <FaDollarSign />,
    },
    {
      title: "Experience",
      value: `${trainerData.experience_years} years`,
      icon: <FaStar />,
    },
  ];

  const upcomingSessions = [
    {
      id: 1,
      client: "Alice Johnson",
      time: "7:00 AM",
      date: "2023-07-15",
      type: "Cardio Training",
    },
    {
      id: 2,
      client: "Bob Smith",
      time: "9:00 AM",
      date: "2023-07-15",
      type: "Strength Training",
    },
    {
      id: 3,
      client: "Carol White",
      time: "5:00 PM",
      date: "2023-07-15",
      type: "Yoga Session",
    },
    {
      id: 4,
      client: "David Brown",
      time: "6:00 PM",
      date: "2023-07-16",
      type: "CrossFit",
    },
  ];

  return (
    <DashboardLayout title="Trainer Dashboard">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome, {user?.full_name || "Fitness Trainer"}
        </h2>
        <p className="text-gray-600">
          Here's an overview of your training sessions and clients
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Your Profile</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <img
              src={
                trainerData.profile_image ||
                "https://picsum.photos/seed/trainer123/200/200.jpg"
              }
              alt="Profile"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 text-sm">Full Name</p>
                <p className="font-medium">
                  {trainerData.full_name || "Fitness Trainer"}
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Specialization</p>
                <p className="font-medium">
                  {trainerData.specialization || "Fitness Training"}
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Experience</p>
                <p className="font-medium">
                  {trainerData.experience_years || 0} years
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Approval Status</p>
                <p className="font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      trainerData.status === "approved"
                        ? "bg-green-100 text-green-800"
                        : trainerData.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {trainerData.status || "pending"}
                  </span>
                </p>
              </div>
            </div>

            {trainerData.certificate_url && (
              <div className="mt-4">
                <p className="text-gray-600 text-sm">Certificate</p>
                <a
                  href={trainerData.certificate_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Assigned Clients */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Assigned Clients</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Client Name</th>
                <th className="text-left py-2">Plan</th>
                <th className="text-left py-2">Next Session</th>
              </tr>
            </thead>
            <tbody>
              {trainerData.assigned_clients?.map((client) => (
                <tr key={client.id} className="border-b">
                  <td className="py-3">{client.name}</td>
                  <td className="py-3">{client.plan}</td>
                  <td className="py-3">Tomorrow, 9:00 AM</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Upcoming Sessions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Client</th>
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Time</th>
                <th className="text-left py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              {upcomingSessions.map((session) => (
                <tr key={session.id} className="border-b">
                  <td className="py-3">{session.client}</td>
                  <td className="py-3">{session.date}</td>
                  <td className="py-3">{session.time}</td>
                  <td className="py-3">{session.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
            Schedule Session
          </button>
          <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
            Create Workout Plan
          </button>
          <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
            View All Clients
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TrainerDashboard;

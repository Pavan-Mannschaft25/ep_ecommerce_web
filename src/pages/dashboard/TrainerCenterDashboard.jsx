import React, { useState } from "react";
import { useSelector } from "react-redux";
import StatsCard from "../../components/cards/StatsCard";
import { FaUsers, FaCalendarCheck, FaDollarSign, FaStar } from "react-icons/fa";
import DashboardLayout from "../../components/layout/DashboardLayout";

const TrainerCenterDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const trainerData = useSelector((state) => state.trainer.data);
  const instituteData = useSelector((state) => state.institute.data);
  const [activeTab, setActiveTab] = useState("trainer");

  // Mock data for trainer dashboard
  const trainerStats = [
    {
      title: "Personal Clients",
      value: trainerData.assigned_clients?.length || 0,
      icon: <FaUsers />,
    },
    { title: "Sessions Today", value: "4", icon: <FaCalendarCheck /> },
    {
      title: "Personal Earnings",
      value: `₹${trainerData.earnings?.toLocaleString() || 0}`,
      icon: <FaDollarSign />,
    },
    {
      title: "Experience",
      value: `${trainerData.experience_years} years`,
      icon: <FaStar />,
    },
  ];

  // Mock data for center dashboard
  const centerStats = [
    {
      title: "Center Members",
      value: instituteData.total_students || 0,
      icon: <FaUsers />,
    },
    { title: "Classes Today", value: "6", icon: <FaCalendarCheck /> },
    { title: "Center Revenue", value: "₹85,000", icon: <FaDollarSign /> },
    {
      title: "Center Rating",
      value: instituteData.rating || 0,
      icon: <FaStar />,
    },
  ];

  return (
    <DashboardLayout title="Trainer & Center Dashboard">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome, {user?.full_name || "Fitness Professional"}
        </h2>
        <p className="text-gray-600">
          Here's an overview of your training practice and fitness center
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-t-2xl shadow-sm p-1 mb-0 flex">
        <button
          className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
            activeTab === "trainer"
              ? "bg-primary text-white"
              : "text-gray-600 hover:text-gray-800"
          }`}
          onClick={() => setActiveTab("trainer")}
        >
          Trainer View
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
            activeTab === "center"
              ? "bg-primary text-white"
              : "text-gray-600 hover:text-gray-800"
          }`}
          onClick={() => setActiveTab("center")}
        >
          Center View
        </button>
      </div>

      <div className="bg-white rounded-b-2xl shadow-lg p-6 mb-8">
        {activeTab === "trainer" ? (
          <div>
            <h3 className="text-xl font-semibold mb-4">Trainer Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trainerStats.map((stat, index) => (
                <StatsCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                />
              ))}
            </div>

            {/* Personal Clients */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">
                Your Personal Clients
              </h4>
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
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold mb-4">Center Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {centerStats.map((stat, index) => (
                <StatsCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                />
              ))}
            </div>

            {/* Center Classes */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Upcoming Classes</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Class Name</th>
                      <th className="text-left py-2">Date</th>
                      <th className="text-left py-2">Time</th>
                      <th className="text-left py-2">Instructor</th>
                      <th className="text-left py-2">Booked</th>
                    </tr>
                  </thead>
                  <tbody>
                    {instituteData.upcoming_classes?.map((cls) => (
                      <tr key={cls.id} className="border-b">
                        <td className="py-3">{cls.name}</td>
                        <td className="py-3">{cls.date}</td>
                        <td className="py-3">{cls.time}</td>
                        <td className="py-3">John Doe</td>
                        <td className="py-3">12/20</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
            Schedule Session
          </button>
          <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
            Schedule Class
          </button>
          <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
            View Clients
          </button>
          <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
            View Classes
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TrainerCenterDashboard;

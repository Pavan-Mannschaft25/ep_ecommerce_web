import React from "react";
import { useSelector } from "react-redux";
import StatsCard from "../../components/cards/StatsCard";
import { FaUsers, FaCalendarCheck, FaDollarSign, FaStar } from "react-icons/fa";
import DashboardLayout from "../../components/layout/DashboardLayout";

const DietDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  // Mock data for diet coach dashboard
  const stats = [
    { title: "Total Clients", value: "42", icon: <FaUsers /> },
    { title: "Appointments Today", value: "5", icon: <FaCalendarCheck /> },
    { title: "Earnings (Month)", value: "₹35,000", icon: <FaDollarSign /> },
    { title: "Average Rating", value: "4.8", icon: <FaStar /> },
  ];

  const upcomingAppointments = [
    {
      id: 1,
      client: "John Doe",
      time: "9:00 AM",
      date: "2023-07-15",
      type: "Initial Consultation",
    },
    {
      id: 2,
      client: "Jane Smith",
      time: "11:00 AM",
      date: "2023-07-15",
      type: "Follow-up",
    },
    {
      id: 3,
      client: "Bob Johnson",
      time: "2:00 PM",
      date: "2023-07-15",
      type: "Meal Plan Review",
    },
    {
      id: 4,
      client: "Alice Brown",
      time: "4:00 PM",
      date: "2023-07-16",
      type: "Progress Check",
    },
  ];

  return (
    <DashboardLayout title="Diet Coach Dashboard">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome, {user?.full_name || "Diet Coach"}
        </h2>
        <p className="text-gray-600">
          Here's an overview of your coaching practice
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
              src="https://picsum.photos/seed/dietcoach123/200/200.jpg"
              alt="Profile"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 text-sm">Full Name</p>
                <p className="font-medium">{user?.full_name || "Diet Coach"}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Specialization</p>
                <p className="font-medium">
                  {user?.specialization || "Nutrition"}
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Experience</p>
                <p className="font-medium">
                  {user?.experience_years || 5} years
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Certification</p>
                <p className="font-medium">
                  {user?.certification || "Certified Nutritionist"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Upcoming Appointments</h3>
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
              {upcomingAppointments.map((appointment) => (
                <tr key={appointment.id} className="border-b">
                  <td className="py-3">{appointment.client}</td>
                  <td className="py-3">{appointment.date}</td>
                  <td className="py-3">{appointment.time}</td>
                  <td className="py-3">{appointment.type}</td>
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
            Create Meal Plan
          </button>
          <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
            Schedule Appointment
          </button>
          <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
            View All Clients
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DietDashboard;

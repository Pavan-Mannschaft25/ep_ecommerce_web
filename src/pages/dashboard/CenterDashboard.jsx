// import React from "react";
// import { useSelector } from "react-redux";
// import StatsCard from "../../components/cards/StatsCard";
// import { FaUsers, FaCalendarCheck, FaDollarSign, FaStar } from "react-icons/fa";
// import DashboardLayout from "../../components/layout/DashboardLayout";

// const CenterDashboard = () => {
//   const { user } = useSelector((state) => state.auth);
//   const instituteData = useSelector((state) => state.institute.data);

//   // Mock data for center dashboard
//   const stats = [
//     {
//       title: "Total Members",
//       value: instituteData.total_students || 0,
//       icon: <FaUsers />,
//     },
//     { title: "Classes Today", value: "6", icon: <FaCalendarCheck /> },
//     { title: "Revenue (Month)", value: "₹85,000", icon: <FaDollarSign /> },
//     { title: "Rating", value: instituteData.rating || 0, icon: <FaStar /> },
//   ];

//   return (
//     <DashboardLayout title="Fitness Center Dashboard">
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-2">
//           Welcome, {user?.full_name || "Center Manager"}
//         </h2>
//         <p className="text-gray-600">
//           Here's an overview of your fitness center
//         </p>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {stats.map((stat, index) => (
//           <StatsCard
//             key={index}
//             title={stat.title}
//             value={stat.value}
//             icon={stat.icon}
//           />
//         ))}
//       </div>

//       {/* Institute Details Card */}
//       <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
//         <h3 className="text-xl font-semibold mb-4">Center Details</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <img
//               src="https://picsum.photos/seed/center123/400/250.jpg"
//               alt="Center"
//               className="w-full h-48 object-cover rounded-lg"
//             />
//           </div>
//           <div>
//             <div className="grid grid-cols-1 gap-4">
//               <div>
//                 <p className="text-gray-600 text-sm">Center Name</p>
//                 <p className="font-medium">
//                   {instituteData.name || "Fitness Center"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-gray-600 text-sm">Description</p>
//                 <p className="font-medium">
//                   {instituteData.description || "Premium fitness center"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-gray-600 text-sm">Address</p>
//                 <p className="font-medium">
//                   {instituteData.address}, {instituteData.city},{" "}
//                   {instituteData.state} - {instituteData.pincode}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-gray-600 text-sm">Contact</p>
//                 <p className="font-medium">
//                   {instituteData.email} | {instituteData.phone}
//                 </p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div>
//                   <p className="text-gray-600 text-sm">Availability</p>
//                   <div className="flex space-x-2 mt-1">
//                     {instituteData.is_online_available && (
//                       <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
//                         Online
//                       </span>
//                     )}
//                     {instituteData.is_offline_available && (
//                       <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
//                         Offline
//                       </span>
//                     )}
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-gray-600 text-sm">Verification Status</p>
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs mt-1 inline-block ${
//                       instituteData.verified
//                         ? "bg-green-100 text-green-800"
//                         : "bg-yellow-100 text-yellow-800"
//                     }`}
//                   >
//                     {instituteData.verified
//                       ? "Verified"
//                       : "Pending Verification"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Upcoming Classes */}
//       <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
//         <h3 className="text-xl font-semibold mb-4">Upcoming Classes</h3>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b">
//                 <th className="text-left py-2">Class Name</th>
//                 <th className="text-left py-2">Date</th>
//                 <th className="text-left py-2">Time</th>
//                 <th className="text-left py-2">Instructor</th>
//                 <th className="text-left py-2">Booked</th>
//               </tr>
//             </thead>
//             <tbody>
//               {instituteData.upcoming_classes?.map((cls) => (
//                 <tr key={cls.id} className="border-b">
//                   <td className="py-3">{cls.name}</td>
//                   <td className="py-3">{cls.date}</td>
//                   <td className="py-3">{cls.time}</td>
//                   <td className="py-3">John Doe</td>
//                   <td className="py-3">12/20</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Quick Actions */}
//       <div className="bg-white rounded-2xl shadow-lg p-6">
//         <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
//             Schedule Class
//           </button>
//           <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
//             Manage Memberships
//           </button>
//           <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
//             View All Classes
//           </button>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default CenterDashboard;

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StatsCard from "../../components/cards/StatsCard";
import TrainersList from "../../components/center/TrainersList";
import {
  FaUsers,
  FaCalendarCheck,
  FaDollarSign,
  FaStar,
  FaUserTie,
} from "react-icons/fa";

const CenterDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const instituteData = useSelector((state) => state.institute.data);
  const navigate = useNavigate();

  // Mock data for stats
  const stats = [
    {
      title: "Total Members",
      value: instituteData.total_students || 0,
      icon: <FaUsers />,
    },
    { title: "Active Trainers", value: "8", icon: <FaUserTie /> },
    { title: "Classes Today", value: "6", icon: <FaCalendarCheck /> },
    { title: "Monthly Revenue", value: "₹85,000", icon: <FaDollarSign /> },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome, {user?.center_name || "Center Manager"}
        </h2>
        <p className="text-gray-600">
          Here's an overview of your fitness center
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Trainers Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <TrainersList />
      </div>

      {/* Upcoming Classes */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Upcoming Classes</h3>
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

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => navigate("/dashboard/center/add-trainer")}
            className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors"
          >
            Add New Trainer
          </button>
          <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
            Schedule Class
          </button>
          <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
            Manage Memberships
          </button>
        </div>
      </div>
    </div>
  );
};

export default CenterDashboard;

import React from "react";
import { useSelector } from "react-redux";
import StatsCard from "../../components/cards/StatsCard";
import { FaBox, FaShoppingCart, FaDollarSign, FaUsers } from "react-icons/fa";
import DashboardLayout from "../../components/layout/DashboardLayout";

const StoreDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  // Mock data for store dashboard
  const stats = [
    { title: "Total Products", value: "156", icon: <FaBox /> },
    { title: "Orders Today", value: "23", icon: <FaShoppingCart /> },
    { title: "Revenue (Month)", value: "₹45,670", icon: <FaDollarSign /> },
    { title: "Total Customers", value: "1,234", icon: <FaUsers /> },
  ];

  const recentOrders = [
    {
      id: 1,
      customer: "John Doe",
      product: "Whey Protein",
      amount: "₹2,499",
      status: "Delivered",
    },
    {
      id: 2,
      customer: "Jane Smith",
      product: "BCAA",
      amount: "₹1,299",
      status: "Processing",
    },
    {
      id: 3,
      customer: "Bob Johnson",
      product: "Creatine",
      amount: "₹899",
      status: "Shipped",
    },
    {
      id: 4,
      customer: "Alice Brown",
      product: "Pre-Workout",
      amount: "₹1,799",
      status: "Delivered",
    },
  ];

  return (
    <DashboardLayout title="Store Dashboard">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome, {user?.store_name || "Store Vendor"}
        </h2>
        <p className="text-gray-600">
          Here's an overview of your store performance
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

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Order ID</th>
                <th className="text-left py-2">Customer</th>
                <th className="text-left py-2">Product</th>
                <th className="text-left py-2">Amount</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-3">#{order.id}</td>
                  <td className="py-3">{order.customer}</td>
                  <td className="py-3">{order.product}</td>
                  <td className="py-3">{order.amount}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Processing"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
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
            Add New Product
          </button>
          <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
            View All Orders
          </button>
          <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
            Manage Inventory
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StoreDashboard;

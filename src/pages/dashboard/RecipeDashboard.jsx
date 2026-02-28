import React from "react";
import { useSelector } from "react-redux";
import StatsCard from "../../components/cards/StatsCard";
import { FaBook, FaUsers, FaHeart, FaEye } from "react-icons/fa";
import DashboardLayout from "../../components/layout/DashboardLayout";

const RecipeDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  // Mock data for recipe dashboard
  const stats = [
    { title: "Total Recipes", value: "84", icon: <FaBook /> },
    { title: "Subscribers", value: "1,245", icon: <FaUsers /> },
    { title: "Total Likes", value: "5,678", icon: <FaHeart /> },
    { title: "Total Views", value: "23,456", icon: <FaEye /> },
  ];

  const recentRecipes = [
    {
      id: 1,
      name: "High Protein Smoothie",
      category: "Breakfast",
      views: 1234,
      likes: 89,
    },
    {
      id: 2,
      name: "Grilled Chicken Salad",
      category: "Lunch",
      views: 987,
      likes: 76,
    },
    {
      id: 3,
      name: "Protein Pancakes",
      category: "Breakfast",
      views: 2345,
      likes: 156,
    },
    { id: 4, name: "Quinoa Bowl", category: "Dinner", views: 876, likes: 65 },
  ];

  const topCategories = [
    { name: "Breakfast", count: 32 },
    { name: "Lunch", count: 28 },
    { name: "Dinner", count: 24 },
  ];

  return (
    <DashboardLayout title="Recipe Center Dashboard">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome, {user?.center_name || "Recipe Center"}
        </h2>
        <p className="text-gray-600">
          Here's an overview of your recipe content and engagement
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

      {/* Recent Recipes */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Recent Recipes</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Recipe Name</th>
                <th className="text-left py-2">Category</th>
                <th className="text-left py-2">Views</th>
                <th className="text-left py-2">Likes</th>
              </tr>
            </thead>
            <tbody>
              {recentRecipes.map((recipe) => (
                <tr key={recipe.id} className="border-b">
                  <td className="py-3">{recipe.name}</td>
                  <td className="py-3">{recipe.category}</td>
                  <td className="py-3">{recipe.views}</td>
                  <td className="py-3">{recipe.likes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Top Categories */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Top Categories</h3>
          <div className="space-y-3">
            {topCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="font-medium">{category.name}</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${(category.count / 32) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-8 text-right">
                    {category.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Recipe */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Featured Recipe</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <img
              src="https://picsum.photos/seed/recipe123/150/150.jpg"
              alt="Featured Recipe"
              className="w-full sm:w-32 h-32 object-cover rounded-lg"
            />
            <div>
              <h4 className="font-semibold mb-2">High Protein Smoothie Bowl</h4>
              <p className="text-gray-600 text-sm mb-2">
                Start your day with this nutritious and delicious smoothie bowl
                packed with protein and fiber.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>⏱️ 10 mins</span>
                <span>👥 2 servings</span>
                <span>🔥 320 cal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
            Add New Recipe
          </button>
          <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
            Create Meal Plan
          </button>
          <button className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primaryDark transition-colors">
            View Analytics
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RecipeDashboard;

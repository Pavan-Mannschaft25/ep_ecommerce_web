// categories.js

export const categories = [
  {
    id: "veg",
    name: "Veg",
    description: "Fresh and healthy vegetarian food options",
  },
  {
    id: "nonveg",
    name: "Non-Veg",
    description: "High-protein non-vegetarian foods",
  },
  {
    id: "restaurants",
    name: "Restaurants",
    description: "Popular restaurants and ready-to-eat meals",
  },
  {
    id: "eggs",
    name: "Eggs",
    description: "Farm fresh eggs for daily nutrition",
  },
  {
    id: "dairy",
    name: "Dairy Foods",
    description: "Milk, curd, butter, cheese & dairy essentials",
  },
  {
    id: "fruits-vegetables",
    name: "Fruits & Vegetables",
    description: "Fresh fruits and green vegetables",
  },
  {
    id: "bakery-sweets",
    name: "Bakery & Sweets",
    description: "Cakes, breads, sweets & baked delights",
  },
  {
    id: "home-foods",
    name: "Home Foods",
    description: "Homemade meals with traditional taste",
  },
  {
    id: "diet",
    name: "Diet",
    description: "Low-calorie & diet-friendly food choices",
  },
];

// ✅ MUST be exported
export const CATEGORY_INFO = categories.reduce((acc, category) => {
  acc[category.id] = {
    title: category.name,
    description: category.description,
  };
  return acc;
}, {});

// import { useParams } from "react-router-dom";
// import { CATEGORY_INFO } from "../../data/categories";

// const ShopCategoryPage = () => {
//   const { category } = useParams();
//   const data = CATEGORY_INFO[category];

//   if (!data) {
//     return <h1 className="text-center mt-20">Category Not Found</h1>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold mb-2">{data.title}</h1>

//       <p className="text-gray-600 mb-8">{data.description}</p>

//       {/* Products grid later */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
//           Product Card
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopPage;

import { useParams } from "react-router-dom";
import AutoImageSlider from "../components/AutoImageSlider";
import { CATEGORY_SLIDERS } from "../data/categorySliders";
import { CATEGORY_INFO } from "../data/categories";
import NearToMeSection from "../sections/NearToMeSection";

const ShopCategoryPage = () => {
  const { category } = useParams();

  const sliderImages = CATEGORY_SLIDERS[category];
  const info = CATEGORY_INFO[category];

  if (!info) {
    return <div className="text-center py-20">Category Not Found</div>;
  }

  return (
    <>
      <div className="pt-18">
        {/* 🔥 Slider */}
        <AutoImageSlider images={sliderImages} />
        {/* Category Info */}
        <h1 className="text-3xl font-bold mt-6 px-4">{info.title} Stores</h1>

        {/* <p className="text-gray-600 mt-2">{info.description}</p> */}
      </div>
      <NearToMeSection />
    </>
  );
};

export default ShopCategoryPage;

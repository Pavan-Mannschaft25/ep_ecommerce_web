import React from "react";
import ShopCarouselComponent from "../components/ShopCarouselComponent";
import CategoriesSection from "../components/CategoriesSection";
import TopRatedSection from "../sections/TopRatedSection";
import NearToMeSection from "../sections/NearToMeSection";

function shopModuleMainPage() {
  return (
    <>
      <ShopCarouselComponent />
      <CategoriesSection />
      <TopRatedSection />
      {/* Heading */}
      <div className="flex items-center justify-between mb-6 px-4 md:px-10">
        <h2 className="text-2xl font-bold">Near to Me</h2>
      </div>
      <NearToMeSection />
    </>
  );
}

export default shopModuleMainPage;

import React from "react";
import ShopCarouselComponent from "../components/ShopCarouselComponent";
import CategoriesSection from "../components/CategoriesSection";
import TopRatedSection from "../sections/TopRatedSection";
import NearToMeSection from "../sections/NearToMeSection";
import DownloadApp from "../../../components/DownloadApp";

function shopModuleMainPage() {
  return (
    <>
      <ShopCarouselComponent />
      <CategoriesSection />
      <TopRatedSection />
      {/* Heading */}
      <div className="flex flex-col justify-between mb-6 px-4 md:px-10 lg:px-16">
        <h2 className="text-2xl font-bold text-center">Top Restaurants</h2>
        <NearToMeSection />
      </div>

      {/* <DownloadApp /> */}
    </>
  );
}

export default shopModuleMainPage;

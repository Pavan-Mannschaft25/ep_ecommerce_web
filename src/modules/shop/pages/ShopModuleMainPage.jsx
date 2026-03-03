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
      <NearToMeSection />
    </>
  );
}

export default shopModuleMainPage;

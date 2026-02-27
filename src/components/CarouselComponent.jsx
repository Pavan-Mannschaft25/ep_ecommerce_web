import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// ✅ Import your images
import img1 from "../assets/banner/banner-img1.avif";
import img2 from "../assets/banner/banner-img5.jpg";
import img3 from "../assets/banner/banner-img2.avif";
import img4 from "../assets/banner/banner-img6.jpg";
import img5 from "../assets/banner/banner-img3.avif";
import img6 from "../assets/banner/banner-img7.jpg";
import img7 from "../assets/banner/banner-img4.avif";
import img8 from "../assets/banner/banner-img-8.jpg";

// ✅ Images array
const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const CarouselComponent = () => {
  return (
    <div className="max-w-8xl mx-auto pt-5">
      {/* Carousel */}
      <Carousel
        showArrows={false}
        autoPlay
        infiniteLoop
        interval={2000}
        transitionTime={600}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={80}
        swipeable
        emulateTouch
        showIndicators
        dynamicHeight={false}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-[350px] pb-18 pl-4 pr-4 pt-16 md:pt-16 lg:pt-20 xl:pt-24 sm:h-[350px] md:h-[450px] lg:h-[570px] xl:h-[620px] relative"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              loading="eager"
              className="w-full h-full object-cover rounded-4xl transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </Carousel>

      {/* Custom dot styling */}
      <style>
        {`
.carousel .control-dots {
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;
}

.carousel .control-dots .dot {
  width: 10px;
  height: 4px;
  border-radius: 4px;
  background: #555;
  opacity: 0.4;
  transition: all 0.4s ease;
}

.carousel .control-dots .dot.selected {
  background: #111112; 
  width: 30px;
  opacity: 1;
}

.carousel .slide {
  transform: scale(0.9);
  transition: transform 0.5s ease-in-out;
  opacity: 0.8;
}

.carousel .slide.selected {
  transform: scale(1.02);
  opacity: 2;
  z-index: 10;
}
`}
      </style>
    </div>
  );
};

export default CarouselComponent;

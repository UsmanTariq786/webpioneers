
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';

// // Slider CSS
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// interface ImageData {
//   src: string;
//   alt: string;
//   width: number;
//   height: number;
// }

// interface ImageDataMap {
//   [key: string]: {
//     path: string;
//     images: number[];
//   };
// }

// interface WorkSliderProps {
//   selectedChip: string | null;
// }

// const WorkSlider: React.FC<WorkSliderProps> = ({ selectedChip }) => {
//   // State object with image arrays keyed by chip values
//   const [workSliderData, setWorkSliderData] = useState<ImageDataMap>({
//     homePage: {
//       path: '/workSlider/homePage/',
//       images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
//     },
//     webDev: {
//       path: '/workSlider/webDevelopment/',
//       images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
//     },
//     mobile: {
//       path: '/workSlider/mobileApp/',
//       images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
//     },
//     webDesign: {
//       path: '/workSlider/webDesign/',
//       images: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
//     },
//     branding: {
//       path: '/workSlider/branding/',
//       images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19],
//     },
//     saas: {
//       path: '/workSlider/saasProduct/',
//       images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
//     },
//   });

//   // Filtered images based on selectedChip and map to the required format
//   const currentCategory = selectedChip ? workSliderData[selectedChip] : workSliderData.all;

//   const filteredImages: ImageData[] = currentCategory.images.map((imgNumber) => ({
//     src: `${currentCategory.path}${imgNumber}.png`,
//     alt: `${selectedChip} work image ${imgNumber}`,
//     width: 1920, // Example width, you may need to adjust
//     height: 1080, // Example height, you may need to adjust
//   }));

//   // Unified slider settings for all categories
//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 3000,
//     slidesToShow: selectedChip==='mobile'? 5 : 2, // Show 2 slides by default for a side-by-side look
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 100,
//     cssEase: 'linear',
//     pauseOnHover: true,
//     nextArrow: undefined,
//     prevArrow: undefined,
//     arrows: false, // ✅ hides both next & prev arrows
//     responsive: [
//       {
//         breakpoint: 768, // md breakpoint
//         settings: {
//           slidesToShow: selectedChip==='mobile'? 4 :  1, // On smaller screens, show 1 slide
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   // Fixed slider height for all categories
//   const sliderHeight = 'h-[202px] md:h-[500px]';


//   return (
//     <div className="w-full py-6">
//       <Slider {...sliderSettings}>
//         {filteredImages.map((image: ImageData, index: number) => (
//           <div key={`${selectedChip}-${index}`} className={`px-1 ${sliderHeight}`}>
//             <Image
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-full object-contain"
//               width={image.width}
//               height={image.height}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default WorkSlider;

































import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Only Autoplay module needed
import 'swiper/css'; // Import Swiper styles

interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageDataMap {
  [key: string]: {
    path: string;
    images: number[];
  };
  homePage: { path: string; images: number[] };
  webDev: { path: string; images: number[] };
  mobile: { path: string; images: number[] };
  webDesign: { path: string; images: number[] };
  branding: { path: string; images: number[] };
  saas: { path: string; images: number[] };
}

type ChipType = 'homePage' | 'webDev' | 'mobile' | 'webDesign' | 'branding' | 'saas';

interface WorkSliderProps {
  selectedChip: ChipType | null;
}

const WorkSlider: React.FC<WorkSliderProps> = ({ selectedChip }) => {
  const swiperRef = useRef<any>(null);

  const workSliderData: ImageDataMap = {
    homePage: {
      path: '/workSlider/homePage/',
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    },
    webDev: {
      path: '/workSlider/webDevelopment/',
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    },
    mobile: {
      path: '/workSlider/mobileApp/',
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    },
    webDesign: {
      path: '/workSlider/webDesign/',
      images: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    },
    branding: {
      path: '/workSlider/branding/',
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    },
    saas: {
      path: '/workSlider/saasProduct/',
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    },
  };

  const currentCategory = selectedChip ? workSliderData[selectedChip] : workSliderData.homePage;

  const filteredImages: ImageData[] = currentCategory.images.map((imgNumber: number) => ({
    src: `${currentCategory.path}${imgNumber}.png`,
    alt: `${selectedChip} work image ${imgNumber}`,
    width: 1920, // Adjust to actual image width
    height: 1080, // Adjust to actual image height
  }));

  // Fixed slider height for all categories
  const sliderHeight = 'h-[202px] md:h-[500px]';

  return (
    <div className="w-full py-6">
<Swiper
  spaceBetween={4} // Small 4px gap between slides
  // freeMode={true}
  // slidesPerView={3} // Default to 3 slides
  loop={true} // Infinite scrolling
  autoplay={{
    delay: 0, // Continuous sliding with 0 delay, handled by speed
    disableOnInteraction: false, // Continues after drag
    pauseOnMouseEnter: true, // Stops immediately on hover
    stopOnLastSlide: false, // Keeps looping
  }}
  speed={2000} // Smooth transition speed (2 seconds per full cycle)
  modules={[Autoplay]} // Only Autoplay module
  navigation={false} // No arrows
  pagination={false} // No pagination
  onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance
  onMouseLeave={() => swiperRef.current?.autoplay.start()} // Resume from current position
  className={sliderHeight} // Apply height
  breakpoints={{
    0: {
      slidesPerView: selectedChip==='mobile'? 3 :  1, // 1 slide on extra small screens (xs: <640px)
    },
    640: {
      slidesPerView: selectedChip==='mobile'? 4 :  2, // 2 slides on small screens (sm: ≥640px)
    },
    1024: {
      slidesPerView: selectedChip==='mobile'? 6 :  2, // Max 3 slides on large screens (lg: ≥1024px), no increase to 4
    },
    2380: {
      slidesPerView: selectedChip==='mobile'? 8 :  3, // Max 4 slides on extra large screens (xl: ≥1280px), no increase to 5
    },
  }}
>
  {filteredImages.map((image: ImageData, index: number) => (
    <SwiperSlide key={`${selectedChip}-${index}`}>
      <div className="w-full h-full">
        <Image
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-contain"
          width={image.width}
          height={image.height}
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  );
};

export default WorkSlider;

























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
//     all: {
//       path: '/workSlider/webDevelopment/',
//       images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
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
//       images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
//     },
//     branding: {
//       path: '/workSlider/branding/',
//       images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
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

//   // Slider settings
//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 3000, // Faster transition
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1500, // Continuous motion
//     cssEase: 'linear', // Smooth, continuous movement
//     pauseOnHover: true, // Pause animation on hover
//     nextArrow: undefined, // Changed from null to undefined
//     prevArrow: undefined,
//     responsive: [
//       {
//         breakpoint: 768, // md breakpoint
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="w-full px-4 py-6">
//       <Slider {...sliderSettings}>
//         {filteredImages.map((image: ImageData, index: number) => (
//           <div key={`${selectedChip}-${index}`} className="px-1 h-[500px]">
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
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

// Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
}

interface WorkSliderProps {
  selectedChip: string | null;
}

const WorkSlider: React.FC<WorkSliderProps> = ({ selectedChip }) => {
  // State object with image arrays keyed by chip values
  const [workSliderData, setWorkSliderData] = useState<ImageDataMap>({
    all: {
      path: '/workSlider/webDevelopment/',
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
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
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    },
    saas: {
      path: '/workSlider/saasProduct/',
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    },
  });

  // Filtered images based on selectedChip and map to the required format
  const currentCategory = selectedChip ? workSliderData[selectedChip] : workSliderData.all;

  const filteredImages: ImageData[] = currentCategory.images.map((imgNumber) => ({
    src: `${currentCategory.path}${imgNumber}.png`,
    alt: `${selectedChip} work image ${imgNumber}`,
    width: 1920, // Example width, you may need to adjust
    height: 1080, // Example height, you may need to adjust
  }));

  // Unified slider settings for all categories
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 2, // Show 2 slides by default for a side-by-side look
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: 'linear',
    pauseOnHover: true,
    nextArrow: undefined,
    prevArrow: undefined,
    responsive: [
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 1, // On smaller screens, show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Fixed slider height for all categories
  const sliderHeight = 'h-[202px] md:h-[500px]';

  return (
    <div className="w-full px-4 py-6">
      <Slider {...sliderSettings}>
        {filteredImages.map((image: ImageData, index: number) => (
          <div key={`${selectedChip}-${index}`} className={`px-1 ${sliderHeight}`}>
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain"
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WorkSlider;


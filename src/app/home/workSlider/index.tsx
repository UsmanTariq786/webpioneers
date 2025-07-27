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
  [key: string]: ImageData[];
  all: ImageData[];
  mobile: ImageData[];
  web: ImageData[];
  branding: ImageData[];
  saas: ImageData[];
}

interface WorkSliderProps {
  selectedChip: string | null;
}

const WorkSlider: React.FC<WorkSliderProps> = ({ selectedChip }) => {
  // State object with image arrays keyed by chip values
  const [imageData, setImageData] = useState<ImageDataMap>({
    all: [
      { src: '/leftImage.svg', alt: 'All Design 1', width: 600, height: 340 },
      { src: '/rightImage.svg', alt: 'All Design 2', width: 320, height: 340 },
      { src: '/leftImage.svg', alt: 'All Design 3', width: 600, height: 340 },
    ],
    mobile: [
      { src: '/mobile1.svg', alt: 'Mobile 1', width: 400, height: 300 },
      { src: '/mobile2.svg', alt: 'Mobile 2', width: 350, height: 300 },
    ],
    web: [
      { src: '/web1.svg', alt: 'Web 1', width: 500, height: 280 },
      { src: '/web2.svg', alt: 'Web 2', width: 450, height: 280 },
    ],
    branding: [
      { src: '/workSlider/branding/1.svg', alt: 'Branding 1', width: 550, height: 320 },
      { src: '/workSlider/branding/2.svg', alt: 'Branding 1', width: 550, height: 320 },
      { src: '/workSlider/branding/3.svg', alt: 'Branding 1', width: 550, height: 320 },
      { src: '/workSlider/branding/4.svg', alt: 'Branding 1', width: 550, height: 320 },
      { src: '/workSlider/branding/5.svg', alt: 'Branding 1', width: 550, height: 320 },
      { src: '/workSlider/branding/6.svg', alt: 'Branding 1', width: 550, height: 320 },
      { src: '/workSlider/branding/7.svg', alt: 'Branding 1', width: 550, height: 320 },
      { src: '/workSlider/branding/8.svg', alt: 'Branding 1', width: 550, height: 320 },
      { src: '/workSlider/branding/9.svg', alt: 'Branding 1', width: 550, height: 320 },
      { src: '/workSlider/branding/10.svg', alt: 'Branding 1', width: 550, height: 320 },
      { src: '/workSlider/branding/11.svg', alt: 'Branding 1', width: 550, height: 320 },
      { src: '/workSlider/branding/12.svg', alt: 'Branding 1', width: 550, height: 320 },
      { src: '/workSlider/branding/13.svg', alt: 'Branding 1', width: 550, height: 320 },
      { src: '/workSlider/branding/14.svg', alt: 'Branding 1', width: 550, height: 320 },
    ],
    saas: [
      { src: '/saas1.svg', alt: 'SaaS 1', width: 480, height: 290 },
      { src: '/saas2.svg', alt: 'SaaS 2', width: 380, height: 290 },
    ],
  });

  // Filtered images based on selectedChip
  const filteredImages: ImageData[] = selectedChip ? imageData[selectedChip] || [] : imageData.all;

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000, // Faster transition
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // Continuous motion
    cssEase: 'linear', // Smooth, continuous movement
    pauseOnHover: true, // Pause animation on hover
    nextArrow: null, // Hide right arrow
    prevArrow: null, // Hide left arrow
    responsive: [
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 py-6">
      <Slider {...sliderSettings}>
        {filteredImages.map((image: ImageData, index: number) => (
          <div key={index} className="px-1 h-[300px]"> {/* Reduced from px-2 to px-1 */}
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
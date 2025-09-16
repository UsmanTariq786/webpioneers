import React from "react";
import WebCard from "../webCard/WebCard";
import Image from "next/image";
import "./webdevelopment.css";

const WebsiteDevelopment = () => {
  interface cardProps {
    title: string;
    description: string;
    image: string;
  }

  const cardData = {
    image: "/new-web.png",
    title: "Website development",
    description:
      " We build fast, responsive sites that work smoothly on any device—no stress, no mess.",
  };

  return (
    <section
      style={{
        background: `
          linear-gradient(180deg, rgba(248, 248, 248, 0.02) 0%, rgba(248, 248, 248, 0.0002) 100%),
          linear-gradient(123.8deg, rgba(248, 248, 248, 0.03) 0%, rgba(248, 248, 248, 0) 46.5%)`,
        borderImageSource: `
          linear-gradient(
            158.39deg,
            rgba(255, 255, 255, 0.06) 14.19%,
            rgba(255, 255, 255, 0.000015) 50.59%,
            rgba(255, 255, 255, 0.000015) 68.79%,
            rgba(255, 255, 255, 0.015) 105.18%
          )`,
        borderImageSlice: 1,
      }}
      className="relative mt-10 mb-[30px] w-[90%] mx-auto flex flex-col lg:flex-row rounded-[30px] items-center min-h-[456px]"
    >
      {/* Left Web Card */}
      <div className="w-full lg:w-[50%] flex flex-col md:gap-4 justify-end lg:justify-center">
        <WebCard
          title={cardData.title}
          image={cardData.image}
          description={cardData.description}
        />
         {/* Image only for mobile/tablet, hidden on xl */}
         <div className='block md:hidden pb-[46px]'>
         <Image
              src="/homePage/ServicesMobile/3.png"
              width={310}
              height={370}
              alt="Decorative"
              className="object-contain w-full mt-6 px-1"
            />
          </div>
      </div>

      {/* Right Section: Logos + Code Image */}
      <div
        className="hidden md:flex gap-4 w-full md:w-[70%] lg:w-[50%] p-10 justify-end lg:justify-center"
        style={{ background: "url('/web-star.svg')" }}
      >

        {/* Main Code Image */}
        <div className="relative flex justify-center md:justify-end items-start">
          <Image
            src="/homePage/ServicesDesktop/3.png"
            width={470}
            height={400}
            alt="Code"
          />
        </div>
      </div>
    </section>
  );
};

export default WebsiteDevelopment;

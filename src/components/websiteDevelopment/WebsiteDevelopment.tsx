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
    image: "/web.png",
    title: "Website development",
    description:
      "We design websites that look great, feel right, and turn visitors into happy customers.",
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
      className="relative mt-10 mb-[30px] max-w-[1100px] mx-auto flex flex-col sm:flex-row rounded-[40px]"
    >
      {/* Left Web Card */}
      <div className="flex justify-end w-full sm:w-[40%] pr-[100px]">
        <WebCard
          title={cardData.title}
          image={cardData.image}
          description={cardData.description}
        />
      </div>

      {/* Right Section: Logos + Code Image */}
      <div
        className="flex gap-4 w-full sm:w-[60%] p-10 justify-end"
        style={{ background: "url('/Starts.svg')" }}
      >
        {/* Vertical Logos */}
        <div className="md:hidden sm:flex flex-col gap-3">
          <Image src="/react.png" width={62} height={62} alt="React" />
          <Image src="/shopify.png" width={62} height={62} alt="Shopify" />
          <Image src="/w.png" width={78} height={78} alt="W" />
          <Image src="/desktop.png" width={62} height={62} alt="Desktop" />
          <Image src="/wordpress.png" width={62} height={62} alt="WordPress" />
        </div>

        {/* Main Code Image */}
        <div className="relative">
          <Image
            src="/webdevelopment.svg"
            width={470}
            height={400}
            alt="Code"
          />
          <Image
            src="/Fileitem.png"
            width={200}
            height={72}
            alt="Floating UI"
            className="md:hidden sm:block absolute top-[310px] -right-[15px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WebsiteDevelopment;

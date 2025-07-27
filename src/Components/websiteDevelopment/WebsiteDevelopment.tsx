import React from "react";
import WebCard from "../webCard/WebCard";
import Image from "next/image";

const WebsiteDevelopment = () => {
    
      interface cardProps{
          title: string,
          description: string,
          image:string
      }
      
      const cardData = 
        {
          image: "/web.png",
          title: "Website design (UX UI)",
          description: " We design websites that look great, feel right, and turn visitors into happy customers."
        }
      
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
        borderRadius: '40px',
      }}
      className="relative mt-10 sm:max-w-[1100px] h-[600px] mx-auto px-10 py-10 sm:flex items-start justify-between gap-10"
    >
      {/* Left Web Card */}
      <div className="pt-2 sm:p-12">
        <WebCard
         title={cardData.title}
         image={cardData.image}
         description= {cardData.description}
        />
      </div>

      {/* Right Section: Logos + Code Image */}
      <div className="pt-8 flex gap-4">
        {/* Vertical Logos */}
        <div className="hidden sm:flex flex-col gap-3">
          <Image src="/react.png" width={62} height={62} alt="React" />
          <Image src="/shopify.png" width={62} height={62} alt="Shopify" />
          <Image src="/w.png" width={78} height={78} alt="W" />
          <Image src="/desktop.png" width={62} height={62} alt="Desktop" />
          <Image src="/wordpress.png" width={62} height={62} alt="WordPress" />
        </div>

        {/* Main Code Image */}
        <div className="relative">
          <Image
            src="/code.png"
            width={470}
            height={400}
            alt="Code"
            className="sm:mt-6"
          />
          <Image
            src="/Fileitem.png"
            width={200}
            height={72}
            alt="Floating UI"
            className="hidden sm:absolute top-[310px] right-[-15px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WebsiteDevelopment;

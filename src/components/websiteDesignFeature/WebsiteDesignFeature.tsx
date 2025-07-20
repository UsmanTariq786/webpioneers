import Image, { StaticImageData } from 'next/image';
import React from 'react';
import WebCard from '../webCard/WebCard';

const WebsiteDesignFeature = () => {

  interface cardProps{
      title: string,
      description: string,
      image: string
  }

  const cardData = 
    {
      image: "/ux.png",
      title: "Website design (UX UI)",
      description: " We design websites that look great, feel right, and turn visitors into happy customers."
    }
  
  return (
    <section
      className="
        mt-10 px-4 py-16 max-w-[1100px] mx-auto
        rounded-[40px] border border-transparent
        bg-gradient-to-br from-white/5 via-white/0 to-white/5
        flex flex-col sm:flex-col md:flex-row items-center md:items-start gap-10"
    >
      {/*  LEFT SECTION (Hidden only on very small devices)  */}
      <div className="hidden sm:flex flex-col justify-between h-[320px]">
        <Image
          src="/main-container-content.png"
          width={260}
          height={180}
          alt="Main Stack"
        />
        <div className="flex justify-between gap-1 w-[260px]">
          <Image src="/Group31.png" width={80} height={60} alt="Card 1" />
          <Image src="/clip-path.png" width={80} height={60} alt="Card 2" />
          <Image src="/Group32.png" width={80} height={60} alt="Card 3" />
        </div>
      </div>

      {/* === CENTER SECTION === */}
      <div className="relative w-full max-w-[340px]">
        <Image
          src="/main-container-content-center.png"
          width={340}
          height={320}
          alt="Center UI"
          className="w-full h-auto"
        />
        <Image
          src="/main-container-content-end.png"
          width={160}
          height={60}
          alt="Color Dots"
          className="absolute bottom-34 left-55"
        />
      </div>

      {/* === RIGHT SECTION === */}
      <div className="flex flex-col items-start text-left max-w-[300px] md:mt-10 md:ml-10">
     <WebCard
         title={cardData.title}
         image ={cardData.image}
         description= {cardData.description}
        />
      </div>
    </section>
  );
};

export default WebsiteDesignFeature;

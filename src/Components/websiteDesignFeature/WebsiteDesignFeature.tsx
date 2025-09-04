import Image from 'next/image';
import React from 'react';
import WebCard from '../webCard/WebCard';

const WebsiteDesignFeature = () => {



  const cardData = 
    {
      image: "/scales.png",
      title: "Website design (UX UI)",
      description: " We design websites that look great, feel right, and turn visitors into happy customers."
    }
  
  return (
    <section
      className="
        mt-10 mb-10 w-[90%] mx-auto
        rounded-[30px]
    
        bg-gradient-to-br
         from-white/5 
         via-white/0
          to-white/5
        flex flex-col sm:flex-col md:flex-row  items-center md:items-center min-h-[456px]"
    >

      {/* === CENTER SECTION === */}
      <div className="hidden md:flex relative w-full md:w-[60%] lg:w-[50%] py-5 pl-2 justify-center items-center"
      style={{background:"url('/starstwo.svg')", backgroundSize:'100% 100%'}}
      >
        <div className="relative flex justify-center md:justify-start items-start">
        <Image
          src="/homePage/ServicesDesktop/2.png"
          width={500}
          height={275}
          alt="Center UI"
        />
        </div>
       
      </div>

      {/* === RIGHT SECTION === */}
      <div className="w-full md:w-[30%] lg:w-[50%] flex flex-col md:flex-row xl:flex-row md:gap-4 justify-end lg:justify-center">
     <WebCard
         title={cardData.title}
         image ={cardData.image}
         description= {cardData.description}
        />


          {/* Image only for mobile/tablet, hidden on xl */}
          <div className='block md:hidden pb-[46px]'>
          <Image
              src="/homePage/ServicesMobile/2.png"
              width={310}
              height={370}
              alt="Decorative"
              className="object-contain w-full mt-6 px-2"
            />
            </div>
      </div>
    </section>
  );
};

export default WebsiteDesignFeature;

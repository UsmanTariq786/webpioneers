import Image from 'next/image';
import React from 'react';
import WebCard from '../webCard/WebCard';

const WebsiteDesignFeature = () => {



  const cardData = 
    {
      image: "/scales.svg",
      title: "Website design (UX UI)",
      description: " We design websites that look great, feel right, and turn visitors into happy customers."
    }
  
  return (
    <section
      className="
        mt-10 mb-10 w-[90%] max-w-[1100px] mx-auto
        rounded-[30px] border border-transparent
        bg-gradient-to-br from-white/5 via-white/0 to-white/5
        flex flex-col sm:flex-col md:flex-row  items-center md:items-center"
    >
      {/*  LEFT SECTION (Hidden only on very small devices)  */}
      {/* <div className="hidden xl:flex md:hidden sm:flex flex-col justify-between h-[320px]">
        <Image
          src="/websitedesigngroup.svg"
          width={260}
          height={180}
          alt="Main Stack"
        />
        <div className="flex justify-between gap-1 w-[260px]">
          <Image src="/Group31.png" width={80} height={60} alt="Card 1" />
          <Image src="/clip-path.png" width={80} height={60} alt="Card 2" />
          <Image src="/Group32.png" width={80} height={60} alt="Card 3" />
        </div>
      </div> */}

      {/* === CENTER SECTION === */}
      <div className="hidden xl:flex relative w-[60%] py-5 pl-2"
      style={{background:"url('/starstwo.svg')", backgroundSize:'100% 100%'}}
      >
        <div className="h-[80%]">
        <Image
          src="/websitedesigngroup.svg"
          width={240}
          height={220}
          alt="Center UI"
          className="w-full h-auto"
        />
        </div>
       
      </div>

      {/* === RIGHT SECTION === */}
      <div className="w-full xl:w-[30%] flex flex-col md:flex-row xl:flex-row md:gap-4 justify-end">
     <WebCard
         title={cardData.title}
         image ={cardData.image}
         description= {cardData.description}
        />


          {/* Image only for mobile/tablet, hidden on xl */}
          <div className='block xl:hidden pb-[46px]'>
          <Image
              src="/main-container-content-res1.svg"
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

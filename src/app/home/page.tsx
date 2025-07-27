'use client'

import BrandIdentity from "@/components/brandIdentity/BrandIdentity";
import Button from "@/components/button/Button";
// import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import PartnersSection from "@/components/partnersSection/PartnersSection";
import ProcessStepsSection from "@/components/processStepsSection/ProcessStepsSection";
import Logo from "@/components/ui/Logo";
import Reuse from "@/components/ui/Reuse";
import WebsiteDesignFeature from "@/components/websiteDesignFeature/WebsiteDesignFeature";
import WebsiteDevelopment from "@/components/websiteDevelopment/WebsiteDevelopment";
import serviceCards, { buttonData } from "../constData/data";
import ServicesCard from "@/components/serviceCard/ServicesCard";
import Image from "next/image";
import ReuseAbleBtn from "@/components/ui/ReuseAbleBtn";
import WorkWeDoChips from "@/components/workWeDoChips";
import { useState } from "react";
import WorkSlider from "./workSlider";


export default function Home() {
  const [selectedChip, setSelectedChip] = useState<string | null>('all');
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <Hero />
      <PartnersSection />

      <div className="flex justify-center items-center">
        <video width="1000px" height="200px" controls className="border rounded-2xl">
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <ProcessStepsSection />
      <BrandIdentity />
      <WebsiteDesignFeature />
      <WebsiteDevelopment />

      <div className="sm:ml-20 mt-4 mb-12 max-w-md">
        <Reuse title="Stuff We've Made" text="A peek at our work" />
      </div>

     

{/* desktop Slider */}
 <div className="sm:flex sm:ml-34 gap-3">
 <WorkWeDoChips selectedChip={selectedChip} setSelectedChip={setSelectedChip} />
 </div>
  {/* <Button title="All design" />
  {buttonData.slice(0, 4).map((item) => (
    <ReuseAbleBtn key={item.id} text={item.text} />
  ))} */}
   <div className="sm:flex sm:ml-34 gap-3">
   <WorkSlider selectedChip={selectedChip}/>
 </div>
  

{/* Mobile Slider */}
{/* <div className="flex sm:hidden overflow-x-auto gap-3 px-2 scroll-smooth snap-x snap-mandatory">
  {[{ id: 0, text: 'All design' }, ...buttonData.slice(0, 4)].map((item) => (
    <div key={item.id} className="flex-shrink-0 snap-center">
      {item.id === 0 ? (
        <Button title={item.text} />
      ) : (
        <ReuseAbleBtn text={item.text} />
      )}
    </div>
  ))}
</div> */}



      <div className="sm:ml-20 mt-10 mb-12 max-w-md">
        <Reuse title="LET’S GET STARTED" text="Start with a free project quote" />
      </div>


      <div className="px-5 sm:px-20 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((card: any) => (
            <ServicesCard
              key={card.id}
              cardNumber={card.id}
              imageUrl={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

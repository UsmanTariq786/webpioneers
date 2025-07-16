import BrandIdentity from "@/components/brandIdentity/BrandIdentity";
import Button from "@/components/button/Button";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import PartnersSection from "@/components/partnersSection/PartnersSection";
import ProcessStepsSection from "@/components/processStepsSection/ProcessStepsSection";
import Logo from "@/components/ui/Logo";
import Reuse from "@/components/ui/Reuse";
import WebsiteDesignFeature from "@/components/websiteDesignFeature/WebsiteDesignFeature";
import WebsiteDevelopment from "@/components/websiteDevelopment/WebsiteDevelopment";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <PartnersSection />
      <div className="flex justify-center items-center">
      <video width="1000px" height="200px" controls 
          className=" border rounded-2xl" >
        <source src="video.mp4" type="video/mp4" />
         Your browser does not support the video tag.
      </video>
      </div>
      <ProcessStepsSection/>
      <BrandIdentity/>
      <WebsiteDesignFeature/>
      <WebsiteDevelopment/>
      
    </div>
  );
}

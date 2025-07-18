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
import serviceCards, { buttonData } from "../constData/data";
import ServicesCard from "@/components/serviceCard/ServicesCard";
import Image from "next/image";
import ReuseAbleBtn from "@/components/ui/ReuseAbleBtn";
import Testimonials from "@/components/testiminals/Testimonials";
import PioneerDetail from "@/components/pioneerDetail/PioneerDetail";
import ServiceExcellenceGrid from "@/components/ServiceExcellenceGrid/ServiceExcellenceGrid";
import { HeroStatement } from "@/components/HeroStatement/HeroStatement";
import { FAQAccordion } from "@/components/fAQAccordion/FAQAccordion";
import ContactForm from "@/components/contactForm/ContactForm";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
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
 <div className="sm:flex sm:ml-34 gap-3 hidden">
  <Button title="All design" />
  {buttonData.slice(0, 4).map((item) => (
    <ReuseAbleBtn key={item.id} text={item.text} />
  ))}
</div>

{/* Mobile Slider */}
<div className="flex sm:hidden overflow-x-auto gap-3 px-2 scroll-smooth snap-x snap-mandatory">
  {[{ id: 0, text: 'All design' }, ...buttonData.slice(0, 4)].map((item) => (
    <div key={item.id} className="flex-shrink-0 snap-center">
      {item.id === 0 ? (
        <Button title={item.text} />
      ) : (
        <ReuseAbleBtn text={item.text} />
      )}
    </div>
  ))}
</div>

     <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto items-start justify-start gap-4 px-4 py-6">
  {/* Left Image */}
  <div className="w-full md:flex-1 h-auto">
    <Image
      src="/leftImage.svg"
      alt="Left Image"
      className="w-full h-auto object-contain"
      width={600}
      height={340}
    />
  </div>

  {/* Right Image */}
  <div className="w-full md:w-[320px] h-auto">
    <Image
      src="/rightImage.svg"
      alt="Right Image"
      className="w-full h-auto object-contain"
      width={320}
      height={340}
    />
  </div>
</div>


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
      <Testimonials/>
      <PioneerDetail/>
      <ServiceExcellenceGrid/>
      <FAQAccordion/>
      <HeroStatement/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

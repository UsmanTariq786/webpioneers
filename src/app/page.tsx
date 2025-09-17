import BrandIdentity from "@/Components/brandIdentity/BrandIdentity";
import Button from "@/Components/button/Button";
// import Header from "@/Components/header/Header";
import Hero from "@/Components/hero/Hero";
import PartnersSection from "@/Components/partnersSection/PartnersSection";
import ProcessStepsSection from "@/Components/processStepsSection/ProcessStepsSection";
import Reuse from "@/Components/ui/Reuse";
import WebsiteDesignFeature from "@/Components/websiteDesignFeature/WebsiteDesignFeature";
import WebsiteDevelopment from "@/Components/websiteDevelopment/WebsiteDevelopment";
import serviceCards, { buttonData } from "./constData/data";
import ServicesCard from "@/Components/serviceCard/ServicesCard";
import Image from "next/image";
import ReuseAbleBtn from "@/Components/ui/ReuseAbleBtn";
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";
import CommonQuestion from "@/Components/commonQuestion";
import Testimonials from "@/Components/testiminals/Testimonials";

 import PioneerDetail from "@/Components/pioneerDetail/PioneerDetail";

import ServiceExcellenceGrid from "@/Components/ServiceExcellenceGrid/ServiceExcellenceGrid";
import WorkWeDoChips from "@/Components/workWeDoChips";
import WorkSlider from "@/Components/workSlider";
import ProgressBar from "@/Components/progressBar/index";
import TestimonialsResponsive from "@/Components/testiminals/TestimonialsResponsive";
import { FAQAccordion } from "@/Components/fAQAccordion/FAQAccordion";
import { HeroStatement } from "@/Components/HeroStatement/HeroStatement";
import ContactForm from "@/Components/contactForm";
import FreeProjectQuoteCards from "@/Components/FreeProjectQuoteCards";
// import PioneerDetailResponsive from "@/Components/PioneerDetailResponsive/PioneerDetailResponsive";
// import { HeroStatement } from "@/Components/HeroStatement/HeroStatement";
// import { FAQAccordion } from "@/Components/fAQAccordion/FAQAccordion";
// import ContactForm from "@/Components/contactForm/ContactForm";
// import Footer from "@/Components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <section>
  <div className="w-full flex">
    <div className="w-[5%] md:w-[7%] lg:w-[10%] border-r border-b border-[#373737]"></div>
    <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%] ">
      <Hero />
    </div>
    <div className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%] border-l border-b border-[#373737]"></div>
  </div>
</section>

<section>
  <div className="w-full flex">
    <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%] border-b border-[#373737]"></div>
    <div className="w-[90.08%] md:w-[86.08%] lg:w-[80.08%]">
      <RoundCornerWrapper>
        <PartnersSection />
      </RoundCornerWrapper>
    </div>
    <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%] border-b border-[#373737]"></div>
  </div>
</section>

<section>
  <div className="w-full flex">
    <div className="w-[5%] md:w-[7%] lg:w-[10%] border-r border-b border-[#373737]"></div>
    <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%] ">
      <div className="flex justify-center items-center py-15">
       <video
         controls
         poster="/homepagevideo/Thumbnail.png"
         className="border rounded-[30px] h-[285px] md:h-[600px] lg:h-[600px]"
        //  autoPlay
       >
         <source src="/homepagevideo/zohebHassan.mp4" type="video/mp4" />
         Your browser does not support the video tag.
       </video>
      </div>
    </div>
    <div className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%] border-l border-b border-[#373737]"></div>
  </div>
</section>

<section>
  <div className="w-full flex">
    <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%] border-b border-[#373737]"></div>
    <div className="w-[90.08%] md:w-[86.08%] lg:w-[80.08%]">
      <RoundCornerWrapper>
        <ProcessStepsSection />
      </RoundCornerWrapper>
    </div>
    <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%] border-b border-[#373737]"></div>
  </div>
</section>


      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div className="w-[5%] md:w-[7%] lg:w-[10%]"
            style={{
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%]"
          >
            <BrandIdentity />
          </div>
          <div className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%]"
            style={{
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>
      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[90.08%] md:w-[86.08%] lg:w-[80.08%]" 
            >
            <RoundCornerWrapper>
              <WebsiteDesignFeature />
            </RoundCornerWrapper>
          </div>
          <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>
      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div className="w-[5%] md:w-[7%] lg:w-[10%]"
            style={{
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%]">
            <WebsiteDevelopment />
          </div>
          <div className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%]"
            style={{
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[90.08%] md:w-[86.08%] lg:w-[80.08%]" >
            <RoundCornerWrapper>
             <div className="ml-[20px] mr-[20px] sm:ml-20 max-w-md my-14">
              <div className="w-[200px]">
                <CommonQuestion question="Stuff We've Made" />
              </div>
              <div className="w-full md:w-[250px] mt-[10px]">
                <p className="w-full font-rubik font-normal text-[28px]  md:text-[32px] lg:text-[42px] leading-[36px] md:leading-[46px] lg:leading-[56px] tracking-[-0.02em] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent">
                  A peek at <br className="hidden md:block" /> our work
                </p>
              </div>
            </div>

            </RoundCornerWrapper>
          </div>
          <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      {/* <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "10%",
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%]" >
           
              <WorkWeDoChips selectedChip={selectedChip} setSelectedChip={setSelectedChip} />
            
          </div>
          <div
            style={{
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section> */}

      {/* <section className="block md:hidden">
  <div className="w-full flex">
    <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%] box-border border-b border-[#373737]"></div>
    <div className="w-[90.08%] ">
      <RoundCornerWrapper>
        <ProgressBar progress={40} />
      </RoundCornerWrapper>
    </div>
    <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%] box-border border-b border-[#373737]"></div>
  </div>
</section> */}



      {/* Mobile Slider */}

      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[90.08%] md:w-[86.08%] lg:w-[80.08%]" >
            <RoundCornerWrapper top={false}>
            <WorkSlider selectedChip={'homePage'} />
            </RoundCornerWrapper>
          </div>
          <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      
      <FreeProjectQuoteCards/>



       <section className="block md:hidden">
          <div style={{ width: "100%", display: "flex" }}>
            <div className="w-[5%] md:w-[7%] lg:w-[10%]"
              style={{
                boxSizing: "border-box",
                borderRight: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
            <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%]">
              {/* desktop Slider */}
              {/* <Testimonials /> */}
              <TestimonialsResponsive />
            </div>
            <div className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%]"
              style={{
                boxSizing: "border-box",
                borderLeft: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
          </div>
        </section>

        <section className="hidden md:block">
          <div style={{ width: "100%", display: "flex" }}>
            <div className="w-[5%] md:w-[7%] lg:w-[10%]"
              style={{
                boxSizing: "border-box",
                borderRight: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
            <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%]">
              {/* desktop Slider */}
              <Testimonials />
            </div>
            <div className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%]"
              style={{
                boxSizing: "border-box",
                borderLeft: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
          </div>
        </section>


      <section className="">
        <div style={{ width: "100%", display: "flex" }}>
          <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[90.08%] md:w-[86.08%] lg:w-[80.08%]" >
            <RoundCornerWrapper>
               <PioneerDetail/>
            </RoundCornerWrapper>
          </div>
          <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      {/* <section className="block md:hidden lg:hidden xl:hidden">
        <div style={{ width: "100%", display: "flex" }}>
          <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[90.08%] md:w-[86.08%] lg:w-[80.08%]" >
            <RoundCornerWrapper>
               <PioneerDetailResponsive />
            </RoundCornerWrapper>
          </div>
          <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section> */}


       <section>
          <div style={{ width: "100%", display: "flex" }}>
            <div className="w-[5%] md:w-[7%] lg:w-[10%]"
              style={{
                boxSizing: "border-box",
                borderRight: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
            <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%]">
              {/* desktop Slider */}
                <ServiceExcellenceGrid/>
            </div>
            <div className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%]"
              style={{
                boxSizing: "border-box",
                borderLeft: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
          </div>
        </section>
    
        <FAQAccordion /> 

<section>
  <div style={{ width: "100%", display: "flex" }}>
    <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
      style={{
        boxSizing: "border-box",
        borderBottom: "1px solid #373737",
      }}
    ></div>
    <div className="w-[90.08%] md:w-[86.08%] lg:w-[80.08%]" 
    >
      <RoundCornerWrapper>
        <div className="px-[20px]">
        <HeroStatement />
        </div>
      </RoundCornerWrapper>
    </div>
    <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
      style={{
        boxSizing: "border-box",
        borderBottom: "1px solid #373737",
      }}
    ></div>
  </div>
</section>


<ContactForm />

    </div>
  );
}

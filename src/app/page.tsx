'use client'

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
import { useState } from "react";
import WorkSlider from "@/Components/workSlider";
import ProgressBar from "@/Components/progressBar/index";
import TestimonialsResponsive from "@/Components/testiminals/TestimonialsResponsive";
import PioneerDetailResponsive from "@/Components/PioneerDetailResponsive/PioneerDetailResponsive";
// import { HeroStatement } from "@/Components/HeroStatement/HeroStatement";
// import { FAQAccordion } from "@/Components/fAQAccordion/FAQAccordion";
// import ContactForm from "@/Components/contactForm/ContactForm";
// import Footer from "@/Components/footer/Footer";

export default function Home() {
  const [selectedChip, setSelectedChip] = useState<string | null>('all');
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <section>
  <div className="w-full flex">
    <div className="w-[10%] border-r border-b border-[#373737]"></div>
    <div className="w-[79.95%]">
      <Hero />
    </div>
    <div className="w-[10.05%] border-l border-b border-[#373737]"></div>
  </div>
</section>

<section>
  <div className="w-full flex">
    <div className="w-[9.95%] border-b border-[#373737]"></div>
    <div className="w-[80.08%]">
      <RoundCornerWrapper>
        <PartnersSection />
      </RoundCornerWrapper>
    </div>
    <div className="w-[9.95%] border-b border-[#373737]"></div>
  </div>
</section>

<section>
  <div className="w-full flex">
    <div className="w-[10%] border-r border-b border-[#373737]"></div>
    <div className="w-[79.95%] h-[200]">
      <div className="flex justify-center items-center py-15">
       <video
        width="90%"
        controls
        className="border rounded-[30px] h-[285px] md:h-[600px]"
      >

          <source src="https://www.youtube.com/watch?v=lkqyHdmUpBY" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div className="w-[10.05%] border-l border-b border-[#373737]"></div>
  </div>
</section>

<section>
  <div className="w-full flex">
    <div className="w-[9.95%] border-b border-[#373737]"></div>
    <div className="w-[80.08%]">
      <RoundCornerWrapper>
        <ProcessStepsSection />
      </RoundCornerWrapper>
    </div>
    <div className="w-[9.95%] border-b border-[#373737]"></div>
  </div>
</section>


      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "10%",
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "79.95%"}}>
            <BrandIdentity />
          </div>
          <div
            style={{
              width: "10.05%",
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>
      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "9.95%",
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "80.08%" }}>
            <RoundCornerWrapper>
              <WebsiteDesignFeature />
            </RoundCornerWrapper>
          </div>
          <div
            style={{
              width: "9.95%",
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>
      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "10%",
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "79.95%" }}>
            <WebsiteDevelopment />
          </div>
          <div
            style={{
              width: "10.05%",
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "9.95%",
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "80.08%" }}>
            <RoundCornerWrapper>
             <div className="ml-[20px] mr-[20px] sm:ml-20 max-w-md  mt-[25px] mb-[30px]">
              <div className="w-[200px]">
                <CommonQuestion question="Stuff We've Made" />
              </div>
              <div className="w-full md:w-[250px] mt-[10px]">
                <p className="w-full font-rubik font-normal text-[32px]  md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.02em] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent">
                  A peek at our work
                </p>
              </div>
            </div>

            </RoundCornerWrapper>
          </div>
          <div
            style={{
              width: "9.95%",
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "10%",
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "79.95%", }} >
            {/* desktop Slider */}
           
              <WorkWeDoChips selectedChip={selectedChip} setSelectedChip={setSelectedChip} />
            
          </div>
          <div
            style={{
              width: "10.05%",
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      <section className="block md:hidden">
  <div className="w-full flex">
    <div className="w-[9.95%] box-border border-b border-[#373737]"></div>
    <div className="w-[80.08%]">
      <RoundCornerWrapper>
        <ProgressBar progress={40} />
      </RoundCornerWrapper>
    </div>
    <div className="w-[9.95%] box-border border-b border-[#373737]"></div>
  </div>
</section>



      {/* Mobile Slider */}

      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "9.95%",
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "80.08%" }}>
            <RoundCornerWrapper>
            <WorkSlider selectedChip={selectedChip} />
            </RoundCornerWrapper>
          </div>
          <div
            style={{
              width: "9.95%",
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      

      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "10%",
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "79.95%" }}>
            {/* desktop Slider */}
                <div className="ml-[20px] mr-[20px] sm:ml-20 max-w-md  mt-[25px] mb-[30px]">
                  <div className="w-[200px]">
                    <CommonQuestion question="LET’S GET STARTED" />
                  </div>
                  <div className="w-full md:w-[350px] mt-[10px]">
                    <p className="w-full font-rubik font-normal text-[32px] sm:text-[48px] leading-tight sm:leading-[56px] tracking-[-0.02em] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent">
                      Start with a free project quote
                    </p>
                  </div>
                </div>
          </div>
          <div
            style={{
              width: "10.05%",
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "9.95%",
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "80.08%"}}>
            <RoundCornerWrapper>
                <div className="flex overflow-x-auto no-scrollbar" style={{display:'flex',width:'100%'}}>
                  {serviceCards.map((card: any) => (
                    
                    <div                       
                       key={card.id+'card-servicespage'}
                       style={{position:'relative',borderRight:'1px solid #373737',}} 
                       className="w-[320px] lg:w-[25%]"
                       >
                      <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -right-[5px] -top-[5px]"></div>
                      <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>

                    <ServicesCard
                      cardNumber={card.id}
                      imageUrl={card.image}
                      title={card.title}
                      description={card.description}
                    />
                    </div>

                  ))}
                </div>
            </RoundCornerWrapper>
          </div>
          <div
            style={{
              width: "9.95%",
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      <section className="block md:hidden">
  <div className="w-full flex">
    <div className="w-[9.95%] box-border border-b border-[#373737]"></div>
    <div className="w-[80.08%]">
      <RoundCornerWrapper>
        <ProgressBar progress={40} />
      </RoundCornerWrapper>
    </div>
    <div className="w-[9.95%] box-border border-b border-[#373737]"></div>
  </div>
</section>

       <section className="block md:hidden">
          <div style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                width: "10%",
                boxSizing: "border-box",
                borderRight: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
            <div style={{ width: "79.95%" }}>
              {/* desktop Slider */}
              {/* <Testimonials /> */}
              <TestimonialsResponsive />
            </div>
            <div
              style={{
                width: "10.05%",
                boxSizing: "border-box",
                borderLeft: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
          </div>
        </section>

        <section className="hidden md:block">
          <div style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                width: "10%",
                boxSizing: "border-box",
                borderRight: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
            <div style={{ width: "79.95%" }}>
              {/* desktop Slider */}
              <Testimonials />
            </div>
            <div
              style={{
                width: "10.05%",
                boxSizing: "border-box",
                borderLeft: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
          </div>
        </section>


      <section className="block md:block">
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "9.95%",
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "80.08%"}}>
            <RoundCornerWrapper>
               <PioneerDetail/>
            </RoundCornerWrapper>
          </div>
          <div
            style={{
              width: "9.95%",
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      <section className="block md:hidden lg:hidden xl:hidden">
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "9.95%",
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "80.08%"}}>
            <RoundCornerWrapper>
               <PioneerDetailResponsive />
            </RoundCornerWrapper>
          </div>
          <div
            style={{
              width: "9.95%",
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>


       <section>
          <div style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                width: "10%",
                boxSizing: "border-box",
                borderRight: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
            <div style={{ width: "79.95%" }}>
              {/* desktop Slider */}
      <ServiceExcellenceGrid/>
            </div>
            <div
              style={{
                width: "10.05%",
                boxSizing: "border-box",
                borderLeft: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
          </div>
        </section>
    
      {/* <FAQAccordion/>
      <HeroStatement/>
      <ContactForm/>
       <Footer/> */}
    </div>
  );
}

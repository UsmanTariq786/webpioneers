import BrandIdentity from "@/components/brandIdentity/BrandIdentity";
import Button from "@/components/button/Button";
// import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import PartnersSection from "@/components/partnersSection/PartnersSection";
import ProcessStepsSection from "@/components/processStepsSection/ProcessStepsSection";
import Reuse from "@/components/ui/Reuse";
import WebsiteDesignFeature from "@/components/websiteDesignFeature/WebsiteDesignFeature";
import WebsiteDevelopment from "@/components/websiteDevelopment/WebsiteDevelopment";
import serviceCards, { buttonData } from "../constData/data";
import ServicesCard from "@/components/serviceCard/ServicesCard";
import Image from "next/image";
import ReuseAbleBtn from "@/components/ui/ReuseAbleBtn";
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";
import CommonQuestion from "@/Components/commonQuestion";
import Testimonials from "@/components/testiminals/Testimonials";

 import PioneerDetail from "@/components/pioneerDetail/PioneerDetail";

import ServiceExcellenceGrid from "@/components/ServiceExcellenceGrid/ServiceExcellenceGrid";
// import { HeroStatement } from "@/components/HeroStatement/HeroStatement";
// import { FAQAccordion } from "@/components/fAQAccordion/FAQAccordion";
// import ContactForm from "@/components/contactForm/ContactForm";
// import Footer from "@/components/footer/Footer";

export default function Home() {
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
  className="border rounded-[30px]
 h-[600px]"
>

          <source src="video.mp4" type="video/mp4" />
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
             <div className="sm:ml-20 max-w-md  mt-[25px] mb-[30px]">
  <div className="w-[200px]">
    <CommonQuestion question="Stuff We've Made" />
  </div>
  <div className="w-[250px] mt-[10px]">
    <p className="w-full font-rubik font-normal text-[32px] sm:text-[48px] leading-tight sm:leading-[56px] tracking-[-0.02em] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent">
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
          <div style={{ width: "79.95%" }}>
            {/* desktop Slider */}
            <div className="sm:flex sm:ml-34 gap-3 hidden">
              <Button title="All design" />
              {buttonData.slice(0, 4).map((item) => (
                <ReuseAbleBtn key={item.id} text={item.text} />
              ))}
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
              width: "10%",
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "79.95%" }}>
            {/* desktop Slider */}
            <div className="flex sm:hidden overflow-x-auto gap-3 px-2 scroll-smooth snap-x snap-mandatory">
              {[{ id: 0, text: "All design" }, ...buttonData.slice(0, 4)].map(
                (item) => (
                  <div key={item.id} className="flex-shrink-0 snap-center">
                    {item.id === 0 ? (
                      <Button title={item.text} />
                    ) : (
                      <ReuseAbleBtn text={item.text} />
                    )}
                  </div>
                )
              )}
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
                <div className="sm:ml-20 max-w-md  mt-[25px] mb-[30px]">
  <div className="w-[200px]">
    <CommonQuestion question="LET’S GET STARTED" />
  </div>
  <div className="w-[350px] mt-[10px]">
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
                <div className="" style={{display:'flex',width:'100%'}}>
                  {serviceCards.map((card: any) => (
                    <div                       
                       key={card.id}
                       style={{position:'relative',borderRight:'1px solid #373737',width:'25%'}}>
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

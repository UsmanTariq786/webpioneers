import BrandIdentity from "@/Components/brandIdentity/BrandIdentity";
import ButtonComp from "@/Components/button/Button";
// import Header from "@/Components/header/Header";
import Hero from "@/Components/hero/Hero";
import PartnersSection from "@/Components/partnersSection/PartnersSection";
import ProcessStepsSection from "@/Components/processStepsSection/ProcessStepsSection";
import Reuse from "@/Components/ui/Reuse";
import WebsiteDesignFeature from "@/Components/websiteDesignFeature/WebsiteDesignFeature";
import WebsiteDevelopment from "@/Components/websiteDevelopment/WebsiteDevelopment";
import serviceCards, { buttonData } from "@/app/constData/data";
import ServicesCard from "@/Components/serviceCard/ServicesCard";
import Image from "next/image";
import ReuseAbleBtn from "@/Components/ui/ReuseAbleBtn";
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";

// import Testimonials from "@/Components/testiminals/Testimonials";
// import PioneerDetail from "@/Components/pioneerDetail/PioneerDetail";
// import ServiceExcellenceGrid from "@/Components/ServiceExcellenceGrid/ServiceExcellenceGrid";
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
              <div className="sm:ml-20 mt-4 mb-12 max-w-md">
                <Reuse title="Stuff We've Made" text="A peek at our work" />
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
              <ButtonComp title="All design" />
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
                      <ButtonComp title={item.text} />
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
            <div className="sm:ml-20 mt-10 mb-12 max-w-md">
              <Reuse
                title="LET’S GET STARTED"
                text="Start with a free project quote"
              />
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
          <div style={{ width: "80.08%" }}>
            <RoundCornerWrapper>
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
      {/* <Testimonials/> */}
      {/* <PioneerDetail/> */}
      {/* <ServiceExcellenceGrid/> */}
      {/* <FAQAccordion/> */}
      {/* <HeroStatement/> */}
      {/* <ContactForm/> */}
      {/* <Footer/> */}
    </div>
  );
}

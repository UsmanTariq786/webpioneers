import FreeProjectQuoteCards from "@/Components/FreeProjectQuoteCards";
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";
import ContactForm from "@/Components/contactForm";
import ContactUsComp from "@/Components/contactUsComp";
import React from "react";
import HeadingPartners from "../about/headingPartners";
import PartnerLogos from "../about/partnerLogos";
import ServiceExcellenceGrid from "@/Components/ServiceExcellenceGrid/ServiceExcellenceGrid";

const ContactUsPage = () => {
  return (
    <div>
      <section>
        <div className="w-full flex">
          <div className="w-[5%] md:w-[7%] lg:w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%] border-b border-[#373737] ">
            <ContactUsComp />
          </div>
          <div className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>
      <section>
        <div className="w-full flex">
          <div className="w-[5%] md:w-[7%] lg:w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%] border-b border-[#373737] ">
            <RoundCornerWrapper
              bottom={false}
              right={false}
              left={false}
              dotBottomLeft={false}
              dotBottomRight={false}
              top={false}
            >
              {""}
            </RoundCornerWrapper>
          </div>
          <div className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>

      <ContactForm />

      <section>
        <div className="w-full flex">
          <div className="w-[5%] md:w-[7%] lg:w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%] border-b border-[#373737] ">
            <RoundCornerWrapper
              bottom={false}
              right={false}
              left={false}
              dotBottomLeft={false}
              dotBottomRight={false}
              top={false}
            >
              {""}
            </RoundCornerWrapper>
          </div>
          <div className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>

      <FreeProjectQuoteCards />
      <section>
        <div className="w-full flex">
          <div className="w-[5%] md:w-[7%] lg:w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%]  border-1 border-[#373737]">
            <HeadingPartners />
          </div>
          <div className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>
      <section>
        <div className="w-full flex">
          <div className="w-[5%] md:w-[7%] lg:w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%] ">
            <PartnerLogos />
          </div>
          <div className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>
      <section>
        <div className="w-full flex">
          <div className="w-[5%] md:w-[7%] lg:w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%] border-b border-[#373737] ">
            <RoundCornerWrapper
              bottom={false}
              right={false}
              left={false}
              dotBottomLeft={false}
              dotBottomRight={false}
              top={false}
            >
              {""}
            </RoundCornerWrapper>
          </div>
          <div className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>
      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            className="w-[5%] md:w-[7%] lg:w-[10%]"
            style={{
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%]">
            {/* desktop Slider */}
            <ServiceExcellenceGrid />
          </div>
          <div
            className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%]"
            style={{
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;

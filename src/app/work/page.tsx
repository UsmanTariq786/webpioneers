"use client";

import { useState } from "react";
import WorkPageHeading from "./workPageHeading";
import WorkWeDoChips from "@/Components/workWeDoChips";
import MapProjects from "./mapProjects";
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";
import ProgressBar from "@/Components/progressBar/index";
import Testimonials from "@/Components/testiminals/Testimonials";
import TestimonialsResponsive from "@/Components/testiminals/TestimonialsResponsive";
import { HeroStatement } from "@/Components/HeroStatement/HeroStatement";
import ContactForm from "@/Components/contactForm";

export default function Home() {
  const [selectedChip, setSelectedChip] = useState<string | null>("all");

  return (
    <div className="">
      <section>
        <div className="w-full flex">
          <div className="w-[5%] md:w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[89.95%] md:w-[79.95%] ">
            <WorkPageHeading />
          </div>
          <div className="w-[5.05%] md:w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>



  <section>
  <div className="w-full flex">
    <div className="w-[4.95%] md:w-[9.95%] border-b border-[#373737]"></div>
    <div className="w-[90.08%] md:w-[80.08%]">
      <RoundCornerWrapper>
      <WorkWeDoChips
        selectedChip={selectedChip}
        setSelectedChip={setSelectedChip}
      />
      </RoundCornerWrapper>
    </div>
    <div className="w-[4.95%] md:w-[9.95%] border-b border-[#373737]"></div>
  </div>
</section>
<section className="block md:hidden">
  <div className="w-full flex">
    <div className="w-[4.95%] md:w-[9.95%] box-border border-b border-[#373737]"></div>
    <div className="w-[90.08%] md:w-[80.08%]">
      <RoundCornerWrapper top={false}>
        <ProgressBar progress={90} />
      </RoundCornerWrapper>
    </div>
    <div className="w-[4.95%] md:w-[9.95%] box-border border-b border-[#373737]"></div>
  </div>
</section>
  {/* <section>
  <div className="w-full flex">
    <div className="w-[4.95%] md:w-[9.95%] border-b border-[#373737]"></div>
    <div className="w-[90.08%] md:w-[80.08%]">
     
    </div>
    <div className="w-[4.95%] md:w-[9.95%] border-b border-[#373737]"></div>
  </div>
</section> */}
<section>
        <div className="w-full flex">
          <div className="w-[5%] md:w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[89.95%] md:w-[79.95%] ">
          <MapProjects selectedChip={selectedChip} />
          </div>
          <div className="w-[5.05%] md:w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>
      <section className="hidden md:block">
          <div style={{ width: "100%", display: "flex" }}>
            <div className="w-[5%] md:w-[10%]"
              style={{
                boxSizing: "border-box",
                borderRight: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
            <div className="w-[89.95%] md:w-[79.95%]">
              {/* desktop Slider */}
              <Testimonials />
            </div>
            <div className="w-[5.05%] md:w-[10.05%]"
              style={{
                boxSizing: "border-box",
                borderLeft: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
          </div>
        </section>
        <section className="block md:hidden">
          <div style={{ width: "100%", display: "flex" }}>
            <div className="w-[5%] md:w-[10%]"
              style={{
                boxSizing: "border-box",
                borderRight: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
            <div className="w-[89.95%] md:w-[79.95%]">
              {/* desktop Slider */}
              {/* <Testimonials /> */}
              <TestimonialsResponsive />
            </div>
            <div className="w-[5.05%] md:w-[10.05%]"
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
    <div className="w-[4.95%] md:w-[9.95%]"
      style={{
        boxSizing: "border-box",
        borderBottom: "1px solid #373737",
      }}
    ></div>
    <div className="w-[90.08%] md:w-[80.08%]" 
    >
      <RoundCornerWrapper>
        <div className="px-[20px]">
        <HeroStatement />
        </div>
      </RoundCornerWrapper>
    </div>
    <div className="w-[4.95%] md:w-[9.95%]"
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

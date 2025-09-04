import React from "react";
import smallCard from "@/app/Data/SmallCardData";
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";

const cardsData = [
  {
    id: "01",
    heading: "90%",
    description: "90% of our clients choose us again for their next project.",
  },
  {
    id: "02",
    heading: "200+",
    description:
      "Building great stuff isn’t easy but we’ve done it a lot. And we’re just getting started",
  },
  {
    id: "03",
    heading: "2020",
    description: "In 5 years, we’ve helped bring bold ideas to life.",
  },
  {
    id: "04",
    heading: "Authenticity",
    description:
      "No templates. No shortcuts. Just honest design that feels like you not everyone else.  ",
  },
  {
    id: "05",
    heading: "Chasing Excellence",
    description:
      "We don’t do just okay. Every project gets our full attention creative brainpower and a little extra just because we care.",
  },
];

function WhyPickUsSection() {
  return (
    <div>
      <DeskTopCardsView />
      <RoundCornerWrapper right={false} left={false} bottom={false}>
        <div className="flex no-scrollbar flex-nowrap overflow-x-auto overflow-y-hidden py-1 my-[-5px] lg:hidden">
          {cardsData.map((card, index) => (
            <div key={index + "whyusCrsdradwhatisthiscard"}>
              {/* ✅ Mobile / <md: without RoundCornerWrapper */}
              <div className="block">
                <RoundCornerWrapper
                  dotTopLeft={false}
                  dotBottomRight={false}
                  dotTopRight={index === 4 ? false : true}
                //   right={index === 4 ? false : true}
                  right={false}
                >
                  <div
                    className={`m-5 p-10 border-1 border-t-1 border-b-0 border-x-0 border-[#313131] rounded-2xl h-[350px] w-[300px]  ${
                      index === 0 ? "bg-[#D4541DF2]" : "#242424"
                    }`}
                    style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#FFFFFF] rounded-full mr-2"></div>
                      <span className="text-[16px] text-[#FFFFFF]"> {card.id}</span>
                    </div>
                    <h2 className={`pt-30 text-[20px] mb-2 text-[#F8F8F8] `}>
                      {card.heading}
                    </h2>
                    <p
                      className={` text-[#F8F8F8] text-[16px] opacity-75`}
                    >
                      {card.description}
                    </p>
                  </div>
                </RoundCornerWrapper>
              </div>
            </div>
          ))}
        </div>
      </RoundCornerWrapper>
    </div>
  );
}

export default WhyPickUsSection;

const DeskTopCardsView = () => {
  return (
    <>
      <div className="hidden lg:block">
        <section className="w-full flex flex-col">
          {/* 1st 2nd 3rd */}
          <section className="w-full flex ">
            <RoundCornerWrapper className="object-contain flex-1" right={false} left={false}>
              <div
                className={`p-5 m-7 rounded-2xl  border-1 border-t-1 border-b-0 border-x-0 border-[#313131] bg-[#D4541DF2]  
                  h-[280px]`}
                style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#FFFFFF] rounded-full mr-2"></div>
                  <span className="text-[16px] text-[#FFFFFF]"> 01</span>
                </div>
                <h2
                  className={`pt-20 text-[20px] md:text-[40px] mb-2 text-[#F8F8F8]  `}
                >
                  90%
                </h2>
                <p
                  className={` text-[#F8F8F8]  opacity-75 text-[16px] w-full max-w-60 min-w-40 ${""}`}
                >
                  90% of our clients choose us again for their next project.
                </p>
              </div>
            </RoundCornerWrapper>
            <RoundCornerWrapper  className="flex-2 object-contain" right={false}>
              <div
                className="p-5 m-7 rounded-2xl 
                  h-[280px]  border-1 border-t-1 border-b-0 border-x-0 border-[#313131] bg-[#242424]"
                style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#FFFFFF] rounded-full mr-2"></div>
                  <span className="text-[16px] text-[#FFFFFF]"> 02</span>
                </div>
                <h2
                  className={`pt-15 text-[20px] md:text-[40px] mb-2 text-[#F8F8F8]  `}
                >
                  200+
                </h2>
                <p
                  className={` text-[#F8F8F8] opacity-75 text-[16px] w-full max-w-100 ${""} `}
                >
                  Building great stuff isn’t easy but we’ve done it a lot. And we’re just getting started
                </p>
              </div>
            </RoundCornerWrapper>
            <RoundCornerWrapper  className="flex-1 object-contain" right={false}>
              <div
                className="p-5 m-7 rounded-2xl 
                  h-[280px]  border-1 border-t-1 border-b-0 border-x-0 border-[#313131] bg-[#242424]"
                style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#FFFFFF] rounded-full mr-2"></div>
                  <span className="text-[16px] text-[#FFFFFF]"> 03</span>
                </div>
                <h2
                  className={`pt-15 text-[20px] md:text-[40px] mb-2 text-[#F8F8F8]  `}
                >
                  2020
                </h2>
                <p
                  className={` text-[#F8F8F8] opacity-75 text-[16px] w-full max-w-60 min-w-40 ${""} `}
                >
                  In 5 years, we’ve helped bring bold ideas to life.
                </p>
              </div>
            </RoundCornerWrapper>
            
          </section>
          {/* 2st 4rd */}
          <section className="w-full flex ">
            <RoundCornerWrapper left={false} top={false} bottom={false} className='flex-1 object-contain'>
              <div
                className="p-5 m-7 rounded-2xl  
                  h-[280px]  border-1 border-t-1 border-b-0 border-x-0 border-[#313131] bg-[#242424]"
                style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#FFFFFF] rounded-full mr-2"></div>
                  <span className="text-[16px] text-[#FFFFFF]"> 04</span>
                </div>
                <h2 className={`pt-15 text-[20px] md:text-[40px] mb-2 text-[#F8F8F8] `}>
                Authenticity
                </h2>
                <p
                  className={` text-[#F8F8F8]  opacity-75 text-[16px] w-full max-w-90 min-w-40 ${""}`}
                >
                  No templates. No shortcuts. Just honest design that feels like you not everyone else.
                </p>
              </div>
            </RoundCornerWrapper>
            <RoundCornerWrapper top={false} left={false} bottom={false} right={false} className='flex-2 object-contain'>
              <div
                className="p-5 m-7 rounded-2xl 
                  h-[280px]  border-1 border-t-1 border-b-0 border-x-0 border-[#313131] bg-[#242424]"
                style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#FFFFFF] rounded-full mr-2"></div>
                  <span className="text-[16px]  text-[#FFFFFF]"> 05</span>
                </div>
                <h2
                  className={`pt-20 text-[20px] md:text-[40px] mb-2 text-[#F8F8F8]  `}
                >
                 Chasing Excellence
                </h2>
                <p
                  className={` text-[#F8F8F8]  opacity-75 text-[16px]  max-w-130 min-w-40 ${""}`}
                >
                  We don’t do just okay. Every project gets our full attention creative brainpower and a little extra just because we care.
                </p>
              </div>
            </RoundCornerWrapper>
          </section>
        </section>
      </div>
    </>
  );
};


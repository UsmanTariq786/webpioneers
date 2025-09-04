import React from "react";
import smallCard from "@/app/Data/SmallCardData";
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";

const data = [
  {
    id: "• 01",
    heading: "You first",
    description:
      "We're here for your vision. With teamwork, we'll make it real.",
  },
  {
    id: "• 02",
    heading: "Cutting edge",
    description:
      "We use the latest tech to create solutions that grow and evolve.",
  },
  {
    id: "• 03",
    heading: "Hide nothing",
    description: "To us, transparency means you're part of our team's journey ",
  },
  {
    id: "• 04",
    heading: "Fresh angles",
    description: "We inspire through exploration, adaptation and curiosity",
  },
];

function SmallCardData() {
  return (
    <div>
      <DeskTopCardsView />
      <RoundCornerWrapper>

      <div className="flex no-scrollbar flex-nowrap overflow-x-auto overflow-y-hidden py-1 my-[-5px] md:hidden">
        {smallCard.map((card, index) => (
          <div key={index + "smallcradwhatisthiscard"} >
            {/* ✅ Mobile / <md: without RoundCornerWrapper */}
            <div className="block md:hidden   ">
            <RoundCornerWrapper dotTopLeft={false} dotBottomRight={false} dotTopRight={index===3 ? false : true} right={index===3 ? false : true}>
              <div
                className={`m-5 p-10 m-5border-1 border-t-1 border-b-0 border-x-0 border-[#313131] rounded-2xl  ${
                  index === 0 ? "bg-[#D4541DF2]" : "#242424"
                }`}
                style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
              >
                <div className="flex items-center">
            <div className="w-2 h-2 bg-[#FFFFFF] rounded-full mr-2"></div>
            <span className="text-[16px]"> {card.id}</span>
            </div>
                <h2 className={`pt-30 text-[20px] mb-2 text-[#F8F8F8] `}>
                  {card.heading}
                </h2>
                <p className={` text-[#F8F8F8] text-[16px] opacity-75 ${"w-[180px]"}`}>
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

export default SmallCardData;

const DeskTopCardsView = () => {
  return (
    <>
      <div className="hidden md:block">
     <section className="w-full flex flex-row">
       {/* 1st 3rd */}
        <section className="w-full flex flex-col">
        <RoundCornerWrapper>
          <div
            className={`p-5 m-5 rounded-2xl  border-1 border-t-1 border-b-0 border-x-0 border-[#313131] bg-[#D4541DF2]  
                  h-[380px]`}
                  style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
          >
             <div className="flex items-center">
            <div className="w-2 h-2 bg-[#FFFFFF] rounded-full mr-2"></div>
            <span className="text-[16px]"> 01</span>
            </div>
            <h2 className={`pt-40 text-[20px] mb-2 text-[#F8F8F8] font-semibold `}>
              You first
            </h2>
            <p className={` text-[#F8F8F8]  opacity-75 text-[16px] ${"w-[180px]"}`}>
              We're here for your vision. With teamwork, we'll make it real.
            </p>
          </div>
        </RoundCornerWrapper>
        <RoundCornerWrapper top={false} >
          <div
            className="p-5 m-5 rounded-2xl 
                  h-[280px]  border-1 border-t-1 border-b-0 border-x-0 border-[#313131] bg-[#242424]"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
          >
            <div className="flex items-center">
            <div className="w-2 h-2 bg-[#FFFFFF] rounded-full mr-2"></div>
            <span className="text-[16px]"> 03</span>
            </div>
            <h2 className={`pt-15 text-[20px] mb-2 text-[#F8F8F8] font-semibold `}>
            Hide nothing
            </h2>
            <p className={` text-[#F8F8F8] opacity-75 text-[16px] ${"w-[180px]"} `}>
            To us, transparency means you're part of our team's journey.
            </p>
          </div>
        </RoundCornerWrapper>
        </section>
         {/* 2st 4rd */}
        <section className="w-full flex flex-col">
        <RoundCornerWrapper left={false}>
          <div
            className="p-5 m-5 rounded-2xl  
                  h-[280px]  border-1 border-t-1 border-b-0 border-x-0 border-[#313131] bg-[#242424]"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
          >
              <div className="flex items-center">
            <div className="w-2 h-2 bg-[#FFFFFF] rounded-full mr-2"></div>
            <span className="text-[16px]"> 02</span>
            </div>
            <h2 className={`pt-15 text-[20px] mb-2 text-[#F8F8F8] `}>
            Cutting edge
            </h2>
            <p className={` text-[#F8F8F8]  opacity-75 text-[16px] ${"w-[180px]"}`}>
            We use the latest tech to create solutions that grow and evolve.
            </p>
          </div>
        </RoundCornerWrapper>
        <RoundCornerWrapper top={false}  left={false}>
          <div
            className="p-5 m-5 rounded-2xl 
                  h-[380px]  border-1 border-t-1 border-b-0 border-x-0 border-[#313131] bg-[#242424]"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
          >
            <div className="flex items-center">
            <div className="w-2 h-2 bg-[#FFFFFF] rounded-full mr-2"></div>
            <span className="text-[16px]"> 04</span>
            </div>
            <h2 className={`pt-35 text-[20px] mb-2 text-[#F8F8F8] font-semibold `}>
            Fresh angles
            </h2>
            <p className={` text-[#F8F8F8]  opacity-75 text-[16px] ${"w-[180px]"}`}>
            We inspire through exploration, adaptation and curiosity.
            </p>
          </div>
        </RoundCornerWrapper>
        </section>
     </section>

      </div>
    </>
  );
};

// <div
// className={`p-5 m-5 border-1 border-[#2b2b2b] border-opacity-40    rounded-2xl ${
//   index === 0 || 3 ? "h-[320px]" : "h-[220px]"
// } h-[320px] sm:h-60 ${index === 0 ?"bg-[#D4541DF2]":"" } `}
// style={{
//   boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
// }}
// >
// <span>{card.id}</span>
// <h2
//   className={`pt-15 text-[20px] mb-2 text-[#F8F8F8] ${
//     index === 0 ? "mt-22" : ""
//   }`}
// >
//   {card.heading}
// </h2>
// <p
//   className={` text-[#F8F8F8] opacity-95 ${
//     index === 1 ? "w-[170px]" : "w-[180px]"
//   }`}
// >
//   {card.description}
// </p>
// </div>

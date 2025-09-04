import RoundCornerWrapper from "@/Components/RoundCornerWrapper";
import React from "react";

const qualitiesList = [
  {
    num: "01",
    title: "Innovative",
    chip1: "We lead change.",
    chip2: "We create cutting-edge solutions that set trends.",
  },
  {
    num: "02",
    title: "Creative",
    chip1: "Endless possibilities.",
    chip2: "Our designs push boundaries and spark fresh ideas.",
  },
  {
    num: "03",
    title: "Collaborative",
    chip1: "Stronger together",
    chip2: "We work closely with you to bring ideas to life.",
  },
  {
    num: "04",
    title: "Detail-Oriented",
    chip1: "Every detail matters",
    chip2: "We perfect every element for flawless results.",
  },
  {
    num: "05",
    title: "Efficient",
    chip1: "Time is valuable.",
    chip2: "We deliver quality on time, every time.",
  },
];

const WorkingWithUsSection = () => {
  return (<>
  <div className="xl:flex  ">
        <RoundCornerWrapper top={false} bottom={false} left={false} className="hidden xl:block">
        <div className="w-50">
        </div>
        </RoundCornerWrapper>
  
    <div className="flex flex-col flex-wrap">
      {qualitiesList.map((item, index) => (
        <div key={index} className="w-full flex flex-col">
        <RoundCornerWrapper top={false} right={false} left={false} bottom={item.num==='05' ? false:true}>          {/* Num, Title, and Chips Container */}
          <div className="flex flex-col lg:flex-row items-start gap-4 p-4 py-10 md:py-4">
            {/* Num */}
            <div className="text-[40px] md:text-[60px] text-[#D4541DF2] md:mr-10 md:mt-5">
              {item.num}.
            </div>
            {/* Title and Chips Column */}
            <div className="flex flex-col gap-4 w-full lg:w-auto">
              {/* Title */}
              <div className="text-[40px] md:text-[80px]  text-[#959595]">
                {item.title}
              </div>
              {/* Chips Container */}
              <div className="flex flex-col lg:flex-row gap-2.5">
                <div className="border border-[#373737] rounded-full text-[16px] text-[#959595] p-3 whitespace-nowrap w-fit">
                  <div className="w-[8px] h-[8px] bg-[#F8F8F880] rounded-full inline-block mr-2"></div>{" "}
                  {item.chip1}
                </div>
                <div className="border border-[#373737] rounded-full text-[16px] text-[#959595] p-3 w-fit lg:whitespace-nowrap flex items-center">
                  <div className="min-w-[8px] min-h-[8px] bg-[#F8F8F880] rounded-full inline-block mr-2"></div>{" "}
                  {item.chip2}
                </div>
              </div>
            </div>
          </div>
          </RoundCornerWrapper>

        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default WorkingWithUsSection;

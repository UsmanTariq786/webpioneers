import React from "react";

let textArray = [
  "Results That Last",
  "Achieve More, Together",
  "Focused on Success",
  "Skills That Deliver",
  "Results That Matter",
];

const ServiceExcellenceGrid = () => {
  return (
    <>
      <section className="overflow-x-auto hide-scrollbar px-4 py-6 hidden xl:block">
        <div className="whitespace-nowrap flex gap-x-10 text-[#F8F8F8]/70 justify-center ">
          {textArray.map((text, index) => (
            <p
              key={index}
              className={`font-rubik font-normal text-[27px] leading-[56px] tracking-[-0.02em] shrink-0
          ${index === 2 ? "text-[#D4541D]" : ""}`}
            >
              {text}
            </p>
          ))}
        </div>
      </section>

      <div className="flex overflow-hidden py-4  text-[#F8F8F8]/70 xl:hidden">
        <div className="flex flex-nowrap animate-slide infinite gap-x-10">
          {textArray.map((item: string, index: number) => {
            return (
              <p
                key={item}
                className={`font-rubik font-normal text-[27px] leading-[56px] tracking-[-0.02em] shrink-0
          ${index === 2 ? "text-[#D4541D]" : ""}`}
              >
                {item}
              </p>
            );
          })}
          {textArray.map((item: string, index: number) => {
            return (
              <p
                key={item + 23423}
                className={`font-rubik font-normal text-[27px] leading-[56px] tracking-[-0.02em] shrink-0
      ${index === 2 ? "text-[#D4541D]" : ""}`}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServiceExcellenceGrid;

"use client";

import React, { useEffect, useState } from "react";
import tableData from "@/app/Data/tableData";
// import Button1 from '../Button1'
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";
import Button from "../button/Button";
import { useRouter } from "next/navigation";
import WorkSlider from "../workSlider";
function TableData() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
        // This is a common way to check for a mobile breakpoint in JS.
        // Tailwind's 'lg' breakpoint is 1024px.
        setIsMobile(window.innerWidth < 650);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <div>
      <div className="">
        {tableData.map((card, index) => (
          <div key={index + "tabledatasss"} className="">
            <div>
              {/* top heading */}
              <RoundCornerWrapper top={false}>
                <div className="flex flex-col items-center justify-center px-[20px] md:px-0 py-10 pt-20">
                  <img
                    src={card.image}
                    alt=""
                    className="w-[66px] h-[66px] md:w-[75px] md:h-[75px] mb-8"
                  />
                 <h1
                    className="text-[28px] md:text-[42px] leading-[36px] md:leading-[56px] bg-[linear-gradient(92.95deg,rgba(248,248,248,0.9)_0%,rgba(248,248,248,0.5)_100%)] text-transparent bg-clip-text pb-1"
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {card.heading}
                  </h1>
                </div>
              </RoundCornerWrapper>

              <div className="">
                <RoundCornerWrapper
                  top={false}
                  bottom={false}
                  right={false}
                  left={false}
                >
                  {/* <div className="sm:flex md:flex-wrap grid grid-cols-1"> */}
                  <div className="sm:flex sm:flex-wrap grid grid-cols-1">
                    {/* left side */}
                    <div className=" w-full  sm:w-1/2 border-l-1 border-b-1 border-[#373737]">
                      <RoundCornerWrapper left={false} top={false}>
                        <div className=" p-8 ">
                          <p className="text-[18px] text-[#F8F8F880]">
                            {card.sub1}
                          </p>
                        </div>
                      </RoundCornerWrapper>
                      <RoundCornerWrapper top={false} right={isMobile ? true: false} left={false} bottom={false} dotBottomLeft={false} dotBottomRight={false}>
                        <div className=" p-8 ">
                          <p
                            style={{
                              background:
                                "linear-gradient(92.95deg, rgba(248, 248, 248, 0.9) 0.1%, rgba(248, 248, 248, 0.5) 100.1%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                            className="text-[24px] md:text-[32px]"
                          >
                            {card.description1}
                          </p>{" "}
                          <br />
                          <Button
                            title="Let’s get started"
                            onClick={() => {
                              router.push("/contactUs");
                            }}
                          />
                        </div>
                      </RoundCornerWrapper>
                    </div>
                    {/* right side */}
                    <div className="flex flex-col  sm:w-1/2 ">
                      <RoundCornerWrapper left={false} top={false} className="hidden md:block">
                        <div className="p-8 hidden md:block">
                          <p className="text-[18px] text-[#F8F8F880]">
                            {card.sub2}
                          </p>
                        </div>
                      </RoundCornerWrapper>
                      <RoundCornerWrapper className="block md:hidden" top={false}>
                        <div className="p-8 block md:hidden">
                          <p className="text-[18px] text-[#F8F8F880]">
                            {card.sub2}
                          </p>
                        </div>
                      </RoundCornerWrapper>
                      {/* <RoundCornerWrapper> */}
                      <div className="">
                        <ul>
                          {[
                            card.des1,
                            card.des2,
                            card.des3,
                            card.des4,
                            card.des5,
                            card.des6,
                          ]
                            .filter((item) => item?.trim())
                            .map((item, index) => (
                              <RoundCornerWrapper top={false} key={index}>
                                <div key={index + "serrser3ds"}>
                                  <div className="flex p-8 ">
                                    <div className=" flex items-center mr-8">
                                      <div className="w-2 h-2 rounded-full bg-[#F8F8F880] mr-[15px] md:mr-2"></div>
                                      <p className="text-[#F8F8F880]">
                                        0{index + 1}
                                      </p>
                                    </div>
                                    <li
                                      key={index}
                                      className="text-[18px] md:text-[20px] text-[#F8F8F8F2]"
                                    >
                                      {item}{" "}
                                    </li>
                                  </div>
                                </div>
                              </RoundCornerWrapper>
                            ))}
                        </ul>
                      </div>
                      {/* </RoundCornerWrapper> */}
                    </div>
                  </div>
                </RoundCornerWrapper>

                {/* slider */}
                <RoundCornerWrapper top={false}>
                  <div className="">
                    <WorkSlider selectedChip={card.superCategory} />
                  </div>
                </RoundCornerWrapper>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableData;

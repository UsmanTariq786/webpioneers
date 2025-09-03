import React from "react";
import Box from "../Data/Box";
import CardData from "@/Components/cardData/CardData";
import TableData from "@/Components/tableData/TableData";
import SmallCardData from "@/Components/SmallCardData";
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";
import CommonQuestion from "@/Components/commonQuestion";
import ProgressBar from "@/Components/progressBar/index";
import Button from "@/Components/button/Button";
const ServicesPage = () => {
  return (
    <div className="min-h-screen text-white">
      <section>
        <div className="w-full flex">
          <div className="w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[79.95%] md:p-15 p-10">
            <div className="w-40 mb-3">
              <CommonQuestion question={Box[0].boxhead} />
            </div>
            <h1
              className="md:text-[42px] md:w-150  text-[32px] "
              style={{
                background:
                  "linear-gradient(92.95deg, rgba(248, 248, 248, 0.9) 0.1%, rgba(248, 248, 248, 0.5) 100.1%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services that actually <br />move the needle
            </h1>
          </div>
          <div className="w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>

      <section>
  <div className="w-full flex">
    <div className="w-[9.95%] border-b border-[#373737]"></div>
    <div className="w-[80.08%]">
      <CardData />
    </div>
    <div className="w-[9.95%] border-b border-[#373737]"></div>
  </div>
</section>

<section className="block lg:hidden">
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

<section>
  <div className="w-full flex">
    <div className="w-[9.95%] "></div>
    <div className="w-[80.08%]">
    <TableData />
    </div>
    <div className="w-[9.95%]"></div>
    {/* <div className="w-[9.95%] border-b border-[#373737]"></div> */}
  </div>
</section>

   
<section>
  <div className="w-full flex">
    <div className="w-[9.95%] border-b border-[#373737]"></div>
    
    <div className="w-[80.08%]">
    <RoundCornerWrapper top={false} bottom={false}>
      <div className="p-10 pb-14">
        <div className="w-50 my-5">
         <CommonQuestion question={Box[1].boxhead} />
        </div>
      <h1
              className="text-[32px] leading-[40px] md:text-[42px] md-leading-[56px] w-70"
              style={{
                background:
                  "linear-gradient(92.95deg, rgba(248, 248, 248, 0.9) 0.1%, rgba(248, 248, 248, 0.5) 100.1%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
          What sets <br /> us apart?
            </h1>
      </div>
    </RoundCornerWrapper>
    </div>
    <div className="w-[9.95%] border-b border-[#373737]"></div>
  </div>
</section>
       


      {/* <section className="block md:hidden">
        <div className="w-full flex">
          <div className="w-[9.95%] box-border border-b border-[#373737]"></div>
          <div className="w-[80.08%]">
            <RoundCornerWrapper>
              <SmallCardData />
            </RoundCornerWrapper>
            {
              <RoundCornerWrapper>
                <div className="px-6 py-8">
                  <span className="border-1 rounded-xl text-sm p-1">
                    {Box[2].boxhead}
                  </span>
                  <br />
                  <h1 className="text-[32px] leading-[40px] md:text-4xl md:leading-[56px] mt-2">{Box[2].boxdes}</h1> <br />
                  <Button title="More About us" />
                </div>
              </RoundCornerWrapper>
            }
          </div>
          <div className="w-[9.95%] box-border border-b border-[#373737]"></div>
        </div>
      </section> */}

<div className="">
<section>
  <div className="w-full flex">
    <div className="w-[9.95%] border-b border-[#373737]"></div>
    
    <div className="w-[80.08%]">
    <div className="flex flex-col lg:flex-col xl:flex-row">
        <div className="w-full ">
            <SmallCardData />
        </div>
        <div className="w-full ">
          <div>
            <div className="hidden xl:block">
            <RoundCornerWrapper left={false}>
              <div className="flex flex-row justify-center p-7">
              <div className="h-[265px]"> 
                * * * * * * * * * * * * * * * * * * * *
                * * * * * * * * * * * * * * * * * * * *
                * * * * * * * * * * * * * * * * * * * *
                * * * * * * * * * * * * * * * * * * * *
                * * * * * * * * * * * * * * * * * * * *
                * * * * * * * * * * * * * * * * * * * *
                * * * * * * * * * * * * * * * * * * * *
                * * * * * * * * * * * * * * * * * * * *
              </div>
       
        

              </div>
            </RoundCornerWrapper>
            </div>
            <div className="">
                <RoundCornerWrapper bottom={false} top={false} dotBottomLeft={false} dotBottomRight={false}>
                  <div className="p-6">
                    <div className="w-30">
                    <CommonQuestion question={Box[2].boxhead} />
                    </div>
                    <br />
                    <h1 className="text-[26px] md:text-[32px] md:leading-[52px] mt-2">{Box[2].boxdes}</h1> <br />
                    <Button title="More About us" />
                    
                  </div>
                </RoundCornerWrapper>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[9.95%] border-b border-[#373737]"></div>
  </div>
</section>
     
  </div>
    </div>
  );
};

export default ServicesPage;

import React from "react";
import Box from "../Data/Box";
import CardData from "@/Components/cardData/CardData";
import TableData from "@/Components/tableData/TableData";
import SmallCardData from "@/Components/SmallCardData";
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";
import CommonQuestion from "@/Components/commonQuestion";
import ProgressBar from "@/Components/progressBar/index";
const ServicesPage = () => {
  return (
    <div className="min-h-screen text-white">
      <section>
        <div className="w-full flex">
          <div className="w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[79.95%] p-5 md:p-12">
            <div className="w-40 mb-3">
              <CommonQuestion question={Box[0].boxhead} />
            </div>
            <h1
              className="md:text-5xl md:w-150  text-[32px] "
              style={{
                background:
                  "linear-gradient(92.95deg, rgba(248, 248, 248, 0.9) 0.1%, rgba(248, 248, 248, 0.5) 100.1%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {Box[0].boxdes}
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

<section className="block md:hidden">
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
    <RoundCornerWrapper top={false}>
      <div className="p-6">
        <div className="w-50 my-5 mt-5 md:mt-15">
         <CommonQuestion question={Box[1].boxhead} />
        </div>
      <h1
              className="text-5xl w-70"
              style={{
                background:
                  "linear-gradient(92.95deg, rgba(248, 248, 248, 0.9) 0.1%, rgba(248, 248, 248, 0.5) 100.1%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
           {Box[1].boxdes}
            </h1>
      </div>
    </RoundCornerWrapper>
    </div>
    <div className="w-[9.95%] border-b border-[#373737]"></div>
  </div>
</section>
       


      

      <div className="grid grid-cols-1  md:flex  mx-8">
        <div className="w-full md:w-1/2 ">
          <RoundCornerWrapper>
            <SmallCardData />
          </RoundCornerWrapper>
        </div>
        <div className="w-full md:w-1/2 ">
          <div>
            <div className="hidden md:flex">
            <RoundCornerWrapper>
              <div className=" flex-row  p-6">
                <div>
                  {Array.from({ length: 13 }, (_, index) => (
                    <div key={index + "starrs"}>
                      <span>
                        * * * * * * * * * * * * * * * * * * * * * * * * * * *
                      </span>
                    </div>
                  ))}
                </div>
                <div className="ml-1">
                  {Array.from({ length: 13 }, (_, index) => (
                    <div key={index + "starrsagain"}>
                      <span>
                        * * * * * * * * * * * * * * * * * * * * * * * * * * *
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RoundCornerWrapper>
            </div>
            <div className=" w-full   p-6 ">
              {
                <RoundCornerWrapper>
                  <div>
                    <span className="border-1 rounded-xl text-sm p-1">
                      {Box[2].boxhead}
                    </span>
                    <br />
                    <h1 className="text-4xl mt-2">{Box[2].boxdes}</h1> <br />
                    <button className="border rounded-2xl p-1 bg-orange-600">
                      More About us
                    </button>
                  </div>
                </RoundCornerWrapper>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

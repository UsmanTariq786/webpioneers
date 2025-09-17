'use client'
import React, { useRef } from "react";
import RoundCornerWrapper from "../RoundCornerWrapper";
import CommonQuestion from "../commonQuestion";
import serviceCards from "@/app/constData/data";
import ServicesCard from "@/Components/serviceCard/ServicesCard";
import ProgressBar from "../progressBar";


const FreeProjectQuoteCards = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <>
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
            <div className="ml-[20px] mr-[20px] sm:ml-20 max-w-md  mt-[25px] mb-[30px]">
              <div className="w-[200px]">
                <CommonQuestion question="LET’S GET STARTED" />
              </div>
              <div className="w-full md:w-[350px] mt-[10px]">
                <p className="w-full font-rubik font-normal text-[28px] md:text-[32px] lg:text-[42px] leading-[36px] md:leading-[46px] lg:leading-[56px] tracking-[-0.02em] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent">
                  Start with a free project quote
                </p>
              </div>
            </div>
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

      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[90.08%] md:w-[86.08%] lg:w-[80.08%]">
            <RoundCornerWrapper>
              <div className="flex lg:hidden relative overflow-x-auto overflow-y-hidden no-scrollbar"
              ref={scrollContainerRef}
              >
                {serviceCards.map((card: any, index: number) => (
                  <div
                    key={card.id + "card-servicespage"}
                    style={{
                      position: "relative",
                      borderRight:
                        index === serviceCards.length - 1
                          ? "none"
                          : "1px solid #373737",
                    }}
                    className="w-[320px] lg:w-[25%] m-1.25"
                  >
                    {/* Render dots only if NOT last index */}
                    {index !== serviceCards.length - 1 && (
                      <>
                        <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -right-[5px] -top-[5px]"></div>
                        <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>
                      </>
                    )}

                    <ServicesCard
                      cardNumber={card.id}
                      imageUrl={card.image}
                      title={card.title}
                      description={card.description}
                    />
                  </div>
                ))}
              </div>
              <div className="hidden lg:flex" style={{ width: "100%" }}>
                {serviceCards.map((card: any, index: number) => (
                  <div
                    key={card.id + "card-servicespage"}
                    style={{
                      position: "relative",
                      borderRight:
                        index === serviceCards.length - 1
                          ? "none"
                          : "1px solid #373737",
                    }}
                    className="w-[320px] lg:w-[25%]"
                  >
                    {/* Render dots only if NOT last index */}
                    {index !== serviceCards.length - 1 && (
                      <>
                        <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -right-[5px] -top-[5px]"></div>
                        <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>
                      </>
                    )}

                    <ServicesCard
                      cardNumber={card.id}
                      imageUrl={card.image}
                      title={card.title}
                      description={card.description}
                    />
                  </div>
                ))}
              </div>
            </RoundCornerWrapper>
          </div>
          <div
            className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      <section className="block lg:hidden">
        <div className="w-full flex">
          <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%] box-border border-b border-[#373737]"></div>
          <div className="w-[90.08%] md:w-[86.08%] lg:w-[80.08%]">
            <RoundCornerWrapper>
              <ProgressBar scrollableRef={scrollContainerRef} />
            </RoundCornerWrapper>
          </div>
          <div className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%] box-border border-b border-[#373737]"></div>
        </div>
      </section>
    </>
  );
};

export default FreeProjectQuoteCards;

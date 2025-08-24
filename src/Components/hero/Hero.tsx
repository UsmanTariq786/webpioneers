import React from "react";
import Image from "next/image";
import Button from "../button/Button";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center mt-12 px-4 pb-8  text-white font-rubik">
      {/* Top Badge */}

      {/* <div className="p-[1.5px] mb-4 rounded-[32px] bg-[linear-gradient(0deg,_rgba(248,248,248,0.05),_rgba(248,248,248,0.05)),conic-gradient(from_90deg_at_50%_50%,_rgba(255,255,255,0)_-35.78deg,_rgba(255,255,255,0)_256.65deg,_rgba(255,255,255,0.3)_354.14deg,_rgba(255,255,255,0)_324.22deg,_rgba(255,255,255,0)_616.65deg)]">
        <div className="rounded-[32px] backdrop-blur-[32px] bg-[rgba(18,18,18,0.4)]">
          <p className="px-4 py-1.5 text-sm font-medium text-center rounded-full text-[rgba(118,118,118,1)]">
            200+ companies have scaled faster with our design solutions
          </p>
        </div>
      </div> */}

       <div className="w-[90%] mx-auto md:w-auto p-[1.5px] mb-4 rounded-[32px] bg-[url('/border-hero-section-mobile.svg')] md:bg-[url('/border-hero-section.svg')] bg-no-repeat bg-cover">
        <div className="rounded-[32px] backdrop-blur-[32px] bg-[rgba(18,18,18,0.4)]">
          <p className="px-[10px] md:px-[32px] py-[12px] md:py-[14px] text-[14px] md:text-lg leading-[24px] md:leading-[24px] font-medium text-center rounded-full text-[rgba(118,118,118,1)]">
            200+ companies have scaled faster with our design solutions
          </p>
        </div>
      </div>


      <div className="absolute left-10 xl:left-10 top-[25%] hidden lg:flex items-center gap-1">
        <p
          className="px-4 py-1.5 text-sm font-medium rounded-full text-[rgba(248,248,248,0.95)] 
         
        bg-[var(--color-accent-orange)]
        "
        >
          You
        </p>
        <Image
          src="/Polygon.svg"
          alt="arrow"
          width={20}
          height={20}
          className="absolute top-[-40%] left-13"
        />
      </div>

      {/* Center Headline */}
      <h1 className="max-w-[850px] text-center text-[35px] leading-[44px]  md:text-[70px] md:leading-[80px] font-medium tracking-[-0.02em] text-transparent bg-clip-text bg-[linear-gradient(to_right,rgba(248,248,248,0.9),rgba(248,248,248,0.5))] mb-4">
        We’re a design & development agency that delivers results
      </h1>

      <p className="text-[18px] leading-[29px] md:text-[20px] md:leading-[32px] font-normal text-center max-w-[556px] text-[rgba(248,248,248,0.7)]">
        At Web Pioneers, we mix smart design with clean code to help your brand
        stand out and sell more.
      </p>

      <div className="absolute right-8 xl:right-10 top-[42%] hidden lg:flex items-center gap-1 ">
        <Image
          src="/polygon-two.svg"
          alt="arrow"
          width={20}
          height={20}
          className="rotate-350 absolute bottom-[75%] right-23"
        />
        <div className="p-[1px] rounded-[32px] ">
          <div
            className="[background:linear-gradient(0deg,_rgba(18,18,18,0.4),_rgba(18,18,18,0.4)),linear-gradient(0deg,_rgba(53,61,244,0.95),_rgba(53,61,244,0.95))] 
              backdrop-blur-[32px] shadow-[inset_2px_4px_16px_rgba(248,248,248,0.06),_0px_24px_32px_-12px_var(--NeutralNeutral410)] 
              rounded-[32px] text-white"
          >
            <p className="px-4 py-1.5 text-sm font-medium rounded-full">
              Pioneers
            </p>
          </div>
        </div>
      </div>
      <div className="sm:hidden mt-6">
        <Button title="Let’s get started" />
      </div>
    </section>
  );
};

export default Hero;

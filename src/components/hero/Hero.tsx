import React from "react";
import Image from "next/image";
import Button from "../button/Button";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center mt-12 px-4 text-white font-rubik">
      {/* Top Badge */}
      <div className="mb-4">
        <p
          className="
             relative
             text-[16px] font-medium font-rubik text-white
             border-t border-white/14
             rounded-xl p-2 text-center
             
"
        >
          200+ companies have scaled faster with our design solutions
        </p>
      </div>

      <div className="absolute left-40 top-[40%] hidden sm:flex items-center gap-1">
        <p className="px-4 py-1.5 text-sm font-medium rounded-full text-white bg-[linear-gradient(0deg,var(--neutral-neutral-440,rgba(18,18,18,0.4)),var(--neutral-neutral-440,rgba(18,18,18,0.4))),linear-gradient(0deg,rgba(212,84,29,0.95),rgba(212,84,29,0.95))]">
          You
        </p>
        <Image
          src="/Polygon.png"
          alt="arrow"
          width={20}
          height={20}
          className="absolute top-[-30%] left-12"
        />
      </div>

      {/* Center Headline */}
      <h1 className="max-w-[600px] text-center md:text-[48px] text-4xl leading-[58px] font-medium tracking-[-0.02em] text-transparent bg-clip-text bg-[linear-gradient(to_right,rgba(248,248,248,0.9),rgba(248,248,248,0.5))] mb-4">
        We’re a design & development agency that delivers results
      </h1>

      <p className="text-[20px] sm:text-[18px] text-gray-400 text-center max-w-[500px]">
        At Web Pioneers, we mix smart design with clean code to help your brand
        stand out and sell more.
      </p>

      <div className="absolute right-50 top-[52%] hidden sm:flex items-center gap-1">
        <Image
          src="/Polygon.png"
          alt="arrow"
          width={20}
          height={20}
          className="rotate-180 absolute top-[-31%] right-19"
        />
        <p className="px-4 py-1.5 text-sm font-medium rounded-full text-white bg-[linear-gradient(0deg,var(--neutral-neutral-440,rgba(18,18,18,0.4)),var(--neutral-neutral-440,rgba(18,18,18,0.4))),linear-gradient(0deg,#2F3AFF,#2F3AFF)]">
          Pioneers
        </p>
      </div>
      <div className="sm:hidden mt-6">
        <Button title="Let’s get started" />
      </div>
    </section>
  );
};

export default Hero;

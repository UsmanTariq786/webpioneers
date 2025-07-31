import Image from "next/image";
import React from "react";
import Button from "../button/Button";

export const HeroStatement = () => {
  return (
    <section
      className="mx-auto my-8 px-4 sm:px-6 py-10 w-full max-w-[1000px] flex flex-col items-center text-center rounded-[2rem]"
      style={{
        backgroundColor: "rgba(248, 248, 248, 0.02)",
        border: "1px solid",
        
      }}
    >
      <Image
        src="/main.svg"
        width={240}
        height={240}
        alt="Hero Graphic"
        className="mb-4 w-[180px] sm:w-[240px] h-auto"
      />
      <p className="text-white/80 text-[28px] sm:text-[36px] lg:text-[43px] font-reguler mb-2 font-rubik">
        Here’s Where the Fun Starts
      </p>
      <p className="font-[300] text-[16px] sm:text-[18px] lg:text-[20px] leading-[28px] sm:leading-[30px] lg:leading-[32px] font-rubik text-white/70 mb-6 text-center w-full max-w-[90%] sm:max-w-[457px] px-2">
        Our team turns your ideas into real, thoughtful products that are ready to launch.
      </p>
      <Button title="Let’s get started" />
    </section>
  );
};

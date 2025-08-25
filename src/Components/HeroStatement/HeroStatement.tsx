'use client';
import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import { useRouter } from "next/navigation";
import CommonQuestion from "../commonQuestion/index";

export const HeroStatement = () => {
  const router = useRouter();
  return (
    <section
    className="mx-auto my-8 px-4 sm:px-6 py-10 md:py-10 w-full flex flex-col items-center text-center rounded-[2rem] 
    relative overflow-hidden 
    bg-[rgba(248,248,248,0.02)] border border-[#F8F8F805] 
    bg-[url('/bg-border-quest.svg')]
    md:bg-[url('/bg-border-quest-resp.svg')]
     bg-no-repeat bg-cover bg-center"
      // className="mx-auto my-8 px-4 sm:px-6 py-10 md:py-10 w-full  flex flex-col items-center text-center rounded-[2rem]"
      // style={{
      //   backgroundColor: "rgba(248, 248, 248, 0.02)",
      //   border: "1px solid #F8F8F805",
        
      // }}
    >
      <div className="flex md:hidden mb-[10px]">
      <CommonQuestion question="Got Questions?" />
      </div>
      <Image
        src="/main.svg"
        width={240}
        height={240}
        alt="Hero Graphic"
        className="mb-4 w-[180px] sm:w-[240px] h-auto hidden md:flex"
      />
    <p className="w-full font-rubik font-normal text-[32px] md:text-[42px] leading-[40px] md:leading-[50px] tracking-[-0.02em] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent mb-[15px]">
        Here’s Where the Fun Starts
      </p>
      <p className="font-[300] text-[16px]  leading-[28px] font-rubik text-[rgba(248,248,248,0.7)] mb-6 text-center w-full max-w-[98%] sm:max-w-[457px] px-2">
        Our team turns your ideas into real, thoughtful products that are ready to launch.
      </p>
      <Button title="Let’s get started" onClick={() => {router.push('/contactUs')}} />
    </section>
  );
};

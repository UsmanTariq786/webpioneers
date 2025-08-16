'use client';
import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import { useRouter } from "next/navigation";

export const HeroStatement = () => {
  const router = useRouter();
  return (
    <section
      className="mx-auto my-8 px-4 sm:px-6 py-10 w-full  flex flex-col items-center text-center rounded-[2rem]"
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
        className="mb-4 w-[180px] sm:w-[240px] h-auto hidden md:flex"
      />
    <p className="w-full font-rubik font-normal text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.02em] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent">
        Here’s Where the Fun Starts
      </p>
      <p className="font-[300] text-[16px] sm:text-[18px] lg:text-[20px] leading-[28px] sm:leading-[30px] lg:leading-[32px] font-rubik text-[rgba(248,248,248,0.7)] mb-6 text-center w-full max-w-[90%] sm:max-w-[457px] px-2">
        Our team turns your ideas into real, thoughtful products that are ready to launch.
      </p>
      <Button title="Let’s get started" onClick={() => {router.push('/contactUs')}} />
    </section>
  );
};

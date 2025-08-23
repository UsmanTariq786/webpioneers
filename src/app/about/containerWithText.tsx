import RoundCornerWrapper from "@/Components/RoundCornerWrapper";
import Image from "next/image";
import React from "react";

const ContainerWithText = () => {
  return (
    <div className="hidden lg:block">
    <div className=" w-full flex ">
      <RoundCornerWrapper>
        <div className=" flex justify-center h-full py-5 ">
          <Image
            src="/aboutUs/secondContainer.png"
            alt="container showing our motto"
            width={360}
            height={350}
            className="min-w-[280px]"
          />
        </div>
      </RoundCornerWrapper>
      <div className="flex flex-col">
        <RoundCornerWrapper bottom={false} left={false}>
          <div className=" w-[600px] flex justify-center px-10 py-10">
            <p className="text-[22px] text-[#959595] ">
              ② Leading brands trust us because we honor their identity while
              daring to push creative limits. Specializing in website and
              branding design, we bring your vision to life, piece by piece.
            </p>
          </div>
        </RoundCornerWrapper>
        <RoundCornerWrapper left={false}>
          <div className=" w-[600px] flex justify-center px-10 py-10">
            <p className="text-[22px] text-[#959595] ">
              ① Where brands discover their voice, creativity clicks into place,
              and ideas come to life. At Web Pioneers, each team member is a
              unique building block, innovating with confidence,
            </p>
          </div>
        </RoundCornerWrapper>
      </div>
    </div>
    </div>
  );
};

export default ContainerWithText;

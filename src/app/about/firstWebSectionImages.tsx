import RoundCornerWrapper from "@/Components/RoundCornerWrapper";
import Image from "next/image";
import React from "react";

const FirstWebSectionImages = () => {
  return (
    <div className="w-full hidden sm:hidden md:flex md:items-center md:justify-center">
      {/* <RoundCornerWrapper right={false} left={false} bottom={false} className="border-2 border-accent-orange"> */}
      <div className="w-[70%] border-t-[#373737] flex  justify-center border-t-1 relative">
      <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -left-[5px]" />
        <div className=" h-[400px] max-w-100  m-4 p-5 border-0">
          <img
            src="/aboutUs/dots.png"
            alt="dots image"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      {/* </RoundCornerWrapper> */}
      <RoundCornerWrapper right={false} bottom={false} className="flex justify-end">
        <div className=" h-[400px] m-4 mr-0 max-w-[700px]">
          <img
            src="aboutUs/firstContainer.png"
            alt="container image"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </RoundCornerWrapper>
    </div>
  );
};

export default FirstWebSectionImages;

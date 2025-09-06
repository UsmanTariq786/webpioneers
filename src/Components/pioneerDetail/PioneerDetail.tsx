"use client";
import React, { useState } from "react";
import Button from "../button/Button";
import CommonQuestion from "../commonQuestion";
import { useRouter } from "next/navigation";
import NewCustomChip from "../NewCustomChip/index";
import RoundCornerWrapper from "../RoundCornerWrapper";
import Image from "next/image";

const PioneerDetail = () => {
  const [selectedChip, setSelectedChip] = useState<string>();
  const router = useRouter();
  const handleChipSelect = (value: string) => {
    if (value === selectedChip) {
      return;
    }
    setSelectedChip(value);
    console.log("Selected chip:", value);
  };

  const chipdata = [
    "Curiosity",
    "Kindness",
    "Culture",
    "Transparency",
    "Originality",
    "Code",
    "Commitment",
    "Quality",
    "People",
    "CRO",
    "Design",
    "Transformation",
  ];


  return (
    <section className="flex flex-col lg:flex-row items-start justify-center mx-auto">
      {/* Left Side - Image */}
      <RoundCornerWrapper top={false} left={false}>
      <div
        className="w-[100%] p-5 py-[40px] md:px-[15px] md:py-[60px] "
        style={{
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="md:w-[100%] max-w-[400px]">
          {chipdata.map((item, index) => (
            <div
              key={"chipbox" + index}
              style={{
                display: "inline-block",
                marginRight: "8px",
                marginTop: "8px",
              }}
            >

             <div className="h-[58px]">
               <Image
                 src={`/chips/${index + 1}.png`}
                 alt="item"
                 width={100} 
                 height={58} 
                 style={{ objectFit: 'contain', width: '100%', height: '100%' }} // <--- Change 'cover' to 'contain'
               />
             </div>
            </div>
          ))}
        </div>
      </div>
      </RoundCornerWrapper>

      {/* Right Side - Text Content */}
      <section className="flex flex-col lg:flex-row items-start justify-center mx-auto">
        <div className="w-full flex-col justify-start p-[20px] md:p-[40px] md:py-[50px] py-[40px]">
      <div className=''>
      <CommonQuestion question='our vibe'/>
      </div>
      <p className="font-rubik text-[26px] md:text-[32px] md:leading-[40px] tracking-[-0.02em] font-normal bg-[linear-gradient(92.95deg,rgba(248,248,248,0.9)_0%,rgba(248,248,248,0.5)_100%)] text-transparent bg-clip-text my-3 rounded-xl">
        We help brands grow by designing smooth, smart experiences people actually enjoy using.
      </p>

      <div className="pt-2">
        <Button title="More about us" onClick={() =>router.push('/about') }/>
      </div>
    </div>
  </section>
  {/* </RoundCornerWrapper> */}
    </section>
  );
};

export default PioneerDetail;

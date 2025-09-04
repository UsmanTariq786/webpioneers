"use client";
import React, { useState } from "react";
import Button from "../button/Button";
import CommonQuestion from "../commonQuestion";
import { useRouter } from "next/navigation";
import NewCustomChip from "../NewCustomChip/index";
import RoundCornerWrapper from "../RoundCornerWrapper";

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
  const chipImageData =[1,2,3,4,5,6,7,8,9,10,11,12]


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

              <div className="h-[58px]"><img src={`/chips/${[index+1]}.png`} alt="item" style={{width:'100%',height:'100%'}} /></div>


              {/* <NewCustomChip
                key={"chip" + index}
                label={item}
                value={item}
                isSelected={selectedChip === item}
                onSelect={handleChipSelect}
              /> */}
            </div>
          ))}
        </div>
      </div>
      </RoundCornerWrapper>

      {/* Right Side - Text Content */}
      {/* <RoundCornerWrapper top={false} left={false}> */}
      <section className="flex flex-col lg:flex-row items-start justify-center mx-auto">
        <div className="w-full flex-col justify-start p-[20px] md:p-[40px] md:py-[50px] py-[40px]">
      <div className='w-[120px]'>
      <CommonQuestion question='our vibe'/>
      </div>
      <p className="font-rubik text-[30px] md:text-[42px] leading-[46px] tracking-[-0.02em] font-normal text-white/70 my-3 rounded-xl">
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

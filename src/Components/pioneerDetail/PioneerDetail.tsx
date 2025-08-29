"use client";
import React, { useState } from "react";
import Button from "../button/Button";
import CommonQuestion from "../commonQuestion";
import { useRouter } from "next/navigation";
import NewCustomChip from "../NewCustomChip/index";

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
    <section className="flex flex-col md:flex-row items-start justify-center  max-w-7xl mx-auto">
      {/* Left Side - Image */}
      <div
        className="w-[100%] md:w-[40%]  p-[10px] md:px-[10px] md:py-[60px] lg:p-[60px] lg:py-[50px]"
        style={{
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="md:w-[100%]">
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

      {/* Right Side - Text Content */}
      <div className="hidden border-l border-[#373737] sm:flex w-[100%] md:w-[60%] flex-col justify-start p-[20px] md:px-[30px] md:py-[60px] lg:p-[60px]">
        <div className="w-[120px]">
          <CommonQuestion question="our vibe" />
        </div>
        <p className="font-rubik text-[38px] leading-[52px] tracking-[-0.02em] font-normal text-white/70 my-3 rounded-xl">
          We help brands grow by designing smooth, smart experiences people
          actually enjoy using.
        </p>

        <div className="pt-2">
          <Button title="More about us" onClick={() => router.push("/about")} />
        </div>
      </div>
    </section>
  );
};

export default PioneerDetail;

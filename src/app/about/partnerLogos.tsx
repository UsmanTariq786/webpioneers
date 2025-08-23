import React from "react";
import Image from "next/image";
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";

let brandlogos = [1, 2, 3, 4, 5, 6, 7, 8,9,10];

const PartnerLogos = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5">
      {brandlogos.map((logoNumber: number) => {
        return (
          <div key={logoNumber + 'imagelogoicons'}>
            <RoundCornerWrapper bottom={false} right={false}> 
              <div className="flex justify-center items-center">
                <div className="w-50 h-50 flex justify-center items-center">

                  <div className="w-[120px] h-[50px]">
                      <Image
                        src={`/aboutUs/partners/${logoNumber}.png`}
                        alt=""
                        width={120}
                        height={50}
                        />
                  </div>
                </div>
              </div>
            </RoundCornerWrapper>
          </div>
        );
      })}
    </div>
  );
};

export default PartnerLogos;
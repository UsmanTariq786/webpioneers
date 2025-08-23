import RoundCornerWrapper from "@/Components/RoundCornerWrapper";
import React from "react";
import Image from "next/image";

const duoDetails = [
  {
    id: 1,
    name: "Justin Bundt",
    title: "Project Manager",
    image: "/aboutUs/justinImage.png",
    description:
      "Justin’s the “let’s try something wild” guy. He kicked things off with a big idea and somehow keeps everything running smoothly. He’s the one making sure we’re dreaming big, staying focused, and having a laugh along the way.",
  },
  {
    id: 2,
    name: "Zoheb Hassan",
    title: "Art Direction",
    image: "/aboutUs/zohebImage.png",
    description:
      "Zoheb’s the kind of guy who’ll spend 20 minutes nudging a button till it feels perfect — and somehow enjoy every second of it. Friendly, focused, and dangerously close to redesigning this page while you’re reading it.",
  },
];

const DuoSection = () => {
  return (
    <>
      <div className="w-full flex md:flex-row flex-col ">
        {duoDetails.map((item, index) => {
          return (
            
              <section key={index+item.id+'griftar'} className="flex-1">
                  <RoundCornerWrapper bottom={false} left={false}>
                    <div className="  p-3 flex flex-col xl:flex-row items-center justify-center ">
                      <div className="max-w-[320px] max-h-[460px] min-w-[260px] min-h-[380px]  ">
                        <Image
                          src={item.image}
                          alt=""
                          width={320}
                          height={350}
                          className="w-[100%] h-[100%]"
                        />
                      </div>
                      <div className="px-2 mt-3 xl:w-60 xl:ml-4 h-[180px]">
                      <p className="text-[#959595] text-[16px]">
                        {item.description}
                      </p>

                      </div>
                    </div>
                    <div className="flex">
                      <RoundCornerWrapper
                        className="flex-grow"
                        bottom={false}
                        left={false}
                      >
                        <div className="p-6">
                          <p className="gradien-text text-[20px] my-2">
                            {item.name}
                          </p>
                          <p className="text-[#959595] text-[14px]">
                            {item.title}
                          </p>
                        </div>
                      </RoundCornerWrapper>
                      <RoundCornerWrapper
                        bottom={false}
                        left={false}
                        className="!w-auto"
                      >
                        <div className="px-7 flex justify-center items-center h-full">
                          <div className="!w-[30px] h-[30px]">
                            <Image
                              src="/aboutUs/LinkedIn.png"
                              alt="linked in icon"
                              width={30}
                              height={30}
                              className="!w-[50px] !h-[30px]"
                            />
                          </div>
                        </div>
                      </RoundCornerWrapper>
                      <RoundCornerWrapper
                        bottom={false}
                        left={false}
                        right={false}
                        className="!w-auto"
                      >
                        <div className="px-7 flex justify-center items-center h-full">
                          <div className="!w-[30px] h-[30px]">
                            <Image
                              src="/aboutUs/Instagram.png"
                              alt="instagram icon"
                              width={30}
                              height={30}
                              className="!w-[100%] !h-[100%]"
                            />
                          </div>
                        </div>
                      </RoundCornerWrapper>
                    </div>
                  </RoundCornerWrapper>
               
              </section>
            
          );
        })}
      </div>
    </>
  );
};

export default DuoSection;

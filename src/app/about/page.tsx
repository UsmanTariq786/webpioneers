import React from "react";
import HeadingAbout from "./headingAbout";
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";
import Image from "next/image";
import HeadingDuo from "./headingDuo";
import DuoSection from "./duoSection";
import HeadingPartners from "./headingPartners";
import PartnerLogos from "./partnerLogos";
import HeadingWhyPickUs from "./headingWhyPickUs";
import HeadingWorkWithUs from "./headingWorkWithUs";
import WorkingWithUsSection from "./workingWithUsSection";
import FirstWebSectionImages from "./firstWebSectionImages";
import ContainerWithText from "./containerWithText";

const chipsSliding = [
  "01",
  "Digital Product",
  "Testing",
  "Interaction Design",
  "UI Design",
  "Visual Design",
  "02",
  "Branding Studio",
  "Visual Identity",
  "Brand Experiences",
  "03",
  "Websites",
  "Web Design",
  "Interactive Experiences",
  "Framer Development",
];

const AboutPage = () => {
  return (
    <div>
      <section>
        <div className="w-full flex">
          <div className="w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[79.95%]">
            <HeadingAbout />
          </div>
          <div className="w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>
      <section className="hidden lg:block">
        <div className="w-full flex">
          <div className="w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[79.95%]">
            <FirstWebSectionImages />
          </div>
          <div className="w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>

      <section className="block lg:hidden">
        <div className="w-full flex">
          <div className="w-[9.95%] border-b border-[#373737]"></div>
          <div className="w-[80.08%]">
            <RoundCornerWrapper bottom={false}>
              <div className=" w-full flex justify-center p-3">
                <Image
                  src="/aboutUs/secondContainer.png"
                  alt="container showing our motto"
                  width={350}
                  height={350}
                />
              </div>
            </RoundCornerWrapper>
          </div>
          <div className="w-[9.95%] border-b border-[#373737]"></div>
        </div>
      </section>
      <section>
        <div className="w-full flex">
          <div className="w-[9.95%] border-b border-[#373737]"></div>
          <div className="w-[80.08%]">
            <RoundCornerWrapper bottom={false}>
              <div className="flex overflow-hidden py-4">
                <div className="flex flex-nowrap animate-slide infinite">
                  {chipsSliding.map((item: string) => {
                    return (
                      <div
                        key={item + "maikda"}
                        className="border border-[#373737] rounded-full text-[#959595] p-3 px-4 mx-2.5 inline-block"
                      >
                        <p className="whitespace-nowrap">{item}</p>
                      </div>
                    );
                  })}
                  {chipsSliding.map((item: string) => {
                    return (
                      <div
                        key={item + "maikda2"}
                        className="border border-[#373737] rounded-full text-[#959595] p-3 px-4 mx-2.5 inline-block"
                      >
                        <p className="whitespace-nowrap">{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </RoundCornerWrapper>
          </div>
          <div className="w-[9.95%] border-b border-[#373737]"></div>
        </div>
      </section>
      <section className="block lg:hidden">
        <div className="w-full flex">
          <div className="w-[9.95%] border-b border-[#373737]"></div>
          <div className="w-[80.08%]">
            <RoundCornerWrapper bottom={false}>
              <div className=" w-full flex justify-center p-3 py-10">
                <p className="text-[22px] text-[#959595] ">
                  ① Where brands discover their voice, creativity clicks into
                  place, and ideas come to life. At Web Pioneers, each team
                  member is a unique building block, innovating with confidence,
                </p>
              </div>
            </RoundCornerWrapper>
          </div>
          <div className="w-[9.95%] border-b border-[#373737]"></div>
        </div>
      </section>
      <section className="block lg:hidden">
        <div className="w-full flex">
          <div className="w-[9.95%] border-b border-[#373737]"></div>
          <div className="w-[80.08%]">
            <RoundCornerWrapper>
              <div className=" w-full flex justify-center p-3 py-10">
                <p className="text-[22px] text-[#959595] ">
                  ② Leading brands trust us because we honor their identity
                  while daring to push creative limits. Specializing in website
                  and branding design, we bring your vision to life, piece by
                  piece.
                </p>
              </div>
            </RoundCornerWrapper>
          </div>
          <div className="w-[9.95%] border-b border-[#373737]"></div>
        </div>
      </section>
      <section className="">
        <div className="w-full flex">
          <div className="w-[9.95%] border-b border-[#373737]"></div>
          <div className="w-[80.08%]">
          <ContainerWithText/>
          </div>
          <div className="w-[9.95%] border-b border-[#373737]"></div>
        </div>
      </section>
      <section>
        <div className="w-full flex">
          <div className="w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[79.95%]">
            <HeadingDuo />
          </div>
          <div className="w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>
      <section>
        <div className="w-full flex">
          <div className="w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[79.95%]">
          <DuoSection/>
          </div>
          <div className="w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>

      
      <section>
        <div className="w-full flex">
          <div className="w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[79.95%] border-1 border-[#373737]">
          <HeadingPartners/>
          </div>
          <div className="w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>
      <section>
        <div className="w-full flex">
          <div className="w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[79.95%]">
          <PartnerLogos/>
          </div>
          <div className="w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>
      <section>
        <div className="w-full flex">
          <div className="w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[79.95%]  border-[#373737] border-t-1">
          <HeadingWhyPickUs/>
          </div>
          <div className="w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>
      <section>
        <div className="w-full flex">
          <div className="w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[79.95%]  border-[#373737] border-t-1">
          <HeadingWorkWithUs/>
          </div>
          <div className="w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>
      <section>
        <div className="w-full flex">
          <div className="w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[79.95%]  border-[#373737] border-t-1">
          <WorkingWithUsSection/>
          </div>
          <div className="w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>
      <section>
        <div className="w-full flex">
          <div className="w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[79.95%]  border-[#373737] border-t-1">
          <div className="py-8 flex justify-center">
            <Image
                    src="/aboutUs/theater.png"
                    alt="container showing our motto"
                    width={1600}
                    height={500}
                  />
            </div>
          </div>
          <div className="w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>
   
    </div>
  );
};

export default AboutPage;

import React from "react";
import Button from "../button/Button";
import Image from "next/image";
import CommonQuestion from "@/Components/commonQuestion";

const BrandIdentity = () => {
  return (
    <section className="py-[50px]">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-10 text-center">
        <CommonQuestion question="WHAT WE OFFER" />

        <p className="text-[48px] leading-[56px] font-normal font-['Rubik'] text-center tracking-[-0.02em]
          bg-[linear-gradient(92.95deg,_rgba(248,248,248,0.9)_0.1%,_rgba(248,248,248,0.5)_100.1%)]
          bg-clip-text text-transparent max-w-[550px] mt-[20px]">
          Everything You Need (and Nothing You Don't)
        </p>

        <div className="mt-7">
          <Button title="Check all services" />
        </div>
      </div>

      {/* Article Section */}
      <div
        className="rounded-[16px] w-[80%] mx-auto"
        style={{
          background:
            "linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 0.000015) 50.59%, rgba(255, 255, 255, 0.000015) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)",
        }}
      >
        <div
          className="rounded-[15px] flex h-[619px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(248, 248, 248, 0.02) 0%, rgba(248, 248, 248, 0.0002) 100%), linear-gradient(123.8deg, rgba(248, 248, 248, 0.03) 0%, rgba(248, 248, 248, 0) 46.5%)",
          }}
        >
          {/* Left Text Column */}
          <div className="w-[30%] flex justify-end">
            <div className="w-[240px] space-y-4 self-center">
              <div className="flex items-center">
                <img src="/rings.svg" alt="rings" />
              </div>

              <p className="text-[40px] leading-[100%] font-normal font-['Rubik'] tracking-[-0.02em]
                bg-[linear-gradient(92.95deg,_rgba(248,248,248,0.9)_0.1%,_rgba(248,248,248,0.5)_100.1%)]
                bg-clip-text text-transparent max-w-[550px] mt-[20px]">
                Brand guidelines
              </p>

              <p className="w-[292px] h-[72px] opacity-80 text-[rgba(248,248,248,0.5)]
                font-['Rubik'] font-normal text-[16px] leading-[24px]">
                Not long enough your brand is particularly important to yourself either that already finds the price.
              </p>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-[70%] px-[4%] pr-[4%] pl-[15%] py-[3%] bg-[url('/Stars.svg')] bg-no-repeat bg-cover">
            <div
              className="relative w-[609px] h-[419px] bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: "url('/maincontainer.svg')" }}
            >
              {/* Top Right Tag */}
              <div className="absolute top-[-15px] right-[-42px] flex rounded-[64px] p-[12px_12px_6px_12px]"
                style={{
                  backdropFilter: "blur(32px)",
                  WebkitBackdropFilter: "blur(32px)",
                  boxShadow: "2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset, 0px 24px 32px -12px var(--NeutralNeutral410)",
                  background: "var(--neutral-neutral-110, rgba(255, 255, 255, 0.1))",
                }}>
                <Image src="/designsystem.svg" width={44} height={44} alt="Brand icon" className="rounded-full" />
                <p className="pl-2 pt-[1px] text-[16px] leading-[24px] font-medium text-[rgba(248,248,248,0.95)] font-['Rubik']">
                  Design System
                </p>
              </div>

              {/* Top Left Tag */}
              <div className="absolute top-[42px] left-[-120px] flex rounded-[64px] p-[12px_12px_6px_12px]"
                style={{
                  backdropFilter: "blur(32px)",
                  WebkitBackdropFilter: "blur(32px)",
                  boxShadow: "2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset, 0px 24px 32px -12px var(--NeutralNeutral410)",
                  background: "var(--neutral-neutral-110, rgba(255, 255, 255, 0.1))",
                }}>
                <Image src="/designsystem.svg" width={44} height={44} alt="Brand icon" className="rounded-full" />
                <p className="pl-2 pt-[1px] text-[16px] leading-[24px] font-medium text-[rgba(248,248,248,0.95)] font-['Rubik']">
                  Brand Book
                </p>
              </div>

              {/* Bottom Left Card */}
              <div
                className="absolute bottom-[-100px] left-[-100px] w-[326px] h-[304px] rounded-[32px]"
                style={{
                  background:
                    "linear-gradient(158.39deg, rgba(255, 255, 255, 0.12) 14.19%, rgba(255, 255, 255, 0.04) 50.59%, rgba(255, 255, 255, 0.04) 68.79%, rgba(255, 255, 255, 0.06) 105.18%)",
                }}
              >
                <div
                  className="relative w-full h-full rounded-[31px] p-[10px] overflow-hidden"
                  style={{
                    background: "var(--neutral-neutral-25, rgba(248, 248, 248, 0.05))",
                    backdropFilter: "blur(100px)",
                    WebkitBackdropFilter: "blur(100px)",
                    boxShadow: "2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset, 0px 24px 32px -12px var(--NeutralNeutral410)",
                  }}
                >
                  <img src="/icons.svg" width="100%" height="100%" alt="icons" />
                  <img src="/colors.svg" width="100%" height="100%" style={{ marginTop: "10px" }} alt="colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentity;

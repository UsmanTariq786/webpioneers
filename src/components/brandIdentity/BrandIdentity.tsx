import React from "react";
import Button from "../button/Button";
import Image from "next/image";
import CommonQuestion from "@/Components/commonQuestion";
import { url } from "inspector";

const BrandIdentity = () => {
  return (
    <section className="py-[50px]">
      {/* Header Section */}

      <div className="flex flex-col items-center mb-10 text-center ">
        <CommonQuestion question="WHAT WE OFFER" />

        <p
          className="text-[48px] leading-[56px] font-normal font-['Rubik'] text-center tracking-[-0.02em]
               bg-[linear-gradient(92.95deg,_rgba(248,248,248,0.9)_0.1%,_rgba(248,248,248,0.5)_100.1%)]
               bg-clip-text text-transparent max-w-[550px] mt-[20px]"
        >
          Everything You Need (and Nothing You Don't)
        </p>

        <div className="mt-7">
          <Button title="Check all services" />
        </div>
      </div>

      {/* Article Section */}

      <div
        className="rounded-[16px]"
        style={{
          background:
            "linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 0.000015) 50.59%, rgba(255, 255, 255, 0.000015) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)",
          margin: "auto",
          width: "80%",
          // backgroundColor: "orange",
        }}
      >
        <div
          className="rounded-[15px] "
          style={{
            background: `
        linear-gradient(180deg, rgba(248, 248, 248, 0.02) 0%, rgba(248, 248, 248, 0.0002) 100%),
        linear-gradient(123.8deg, rgba(248, 248, 248, 0.03) 0%, rgba(248, 248, 248, 0) 46.5%)
      `,
            display: "flex",
            height: "619px",
          }}
        >
          <div className="w-[30%]" style={{display:'flex',justifyContent:'flex-end'}}>
            <div className="w-[240px] space-y-4 self-center">
              <div className="flex items-center">
                <img
                  src="/rings.svg"
                
                />
              </div>

                <p className="text-[40px] leading-[100%]
 font-normal font-['Rubik'] tracking-[-0.02em]
               bg-[linear-gradient(92.95deg,_rgba(248,248,248,0.9)_0.1%,_rgba(248,248,248,0.5)_100.1%)]
               bg-clip-text text-transparent max-w-[550px] mt-[20px]">Brand guidelines</p>
             

              <p   className="
    w-[292px] 
    h-[72px] 
    opacity-80 
    text-[rgba(248,_248,_248,_0.5)]
    font-['Rubik'] 
    font-normal 
    text-[16px] 
    leading-[24px] 
    tracking-[0] 
    
  ">
                Not long enough your brand is particularly important to yourself
                either that already finds the price.
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundImage:'url("/Stars.svg")',
              padding: "3% 4% 3% 15%",
              width: "70%",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "609px",
                height: "419px",
                backgroundImage: 'url("/maincontainer.svg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                // backgroundColor: 'pink', // fallback in case image doesn't load
              }}
            >
              <div
                className="rounded-[16px] absolute"
                style={{
                  backdropFilter: "blur(32px)",
                  WebkitBackdropFilter: "blur(32px)", // for Safari support
                  boxShadow: `
      2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset,
      0px 24px 32px -12px var(--NeutralNeutral410)
    `,
                  background:
                    "var(--neutral-neutral-110, rgba(255, 255, 255, 0.1))",
                  right: "-42px",
                  top: "-15px",
                  padding: "12px 12px 6px 12px",
                  borderRadius: "64px",
                  display: "flex",
                }}
              >
                <Image
                  src="/designsystem.svg"
                  width={44}
                  height={44}
                  alt="Brand icon"
                  className="radious-[44px]"
                />
                <p
                  style={{
                    paddingTop: "1px",
                    color:
                      "var(--Text-Text-Primary, rgba(248, 248, 248, 0.95))",
                    fontFamily: "Rubik, sans-serif",
                    fontWeight: 500, // "Medium" corresponds to 500
                    fontSize: "16px",
                    fontStyle: "normal", // "Medium" is not a valid fontStyle
                    lineHeight: "24px",
                    letterSpacing: "0",
                  }}
                >
                  Design System
                </p>
              </div>
              <div
                className="rounded-[16px] absolute"
                style={{
                  backdropFilter: "blur(32px)",
                  WebkitBackdropFilter: "blur(32px)", // for Safari support
                  boxShadow: `
      2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset,
      0px 24px 32px -12px var(--NeutralNeutral410)
    `,
                  background:
                    "var(--neutral-neutral-110, rgba(255, 255, 255, 0.1))",
                  top: "42px",
                  left: "-120px",
                  padding: "12px 12px 6px 12px",
                  borderRadius: "64px",
                  display: "flex",
                }}
              >
                <Image
                  src="/designsystem.svg"
                  width={44}
                  height={44}
                  alt="Brand icon"
                  className="radious-[44px]"
                />
                <p
                  style={{
                    paddingTop: "1px",
                    color:
                      "var(--Text-Text-Primary, rgba(248, 248, 248, 0.95))",
                    fontFamily: "Rubik, sans-serif",
                    fontWeight: 500, // "Medium" corresponds to 500
                    fontSize: "16px",
                    fontStyle: "normal", // "Medium" is not a valid fontStyle
                    lineHeight: "24px",
                    letterSpacing: "0",
                  }}
                >
                  Brand Book
                </p>
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "-100px",
                  left: "-100px",
                  width: "326px",
                  height: "304px",
                  borderRadius: "32px",
                  background:
                    "linear-gradient(158.39deg, rgba(255, 255, 255, 0.12) 14.19%, rgba(255, 255, 255, 0.04) 50.59%, rgba(255, 255, 255, 0.04) 68.79%, rgba(255, 255, 255, 0.06) 105.18%)",
                }}
              >
                <div
                  style={{
                    position: "relative", // 🔥 This is required for Image with fill
                    width: "100%",
                    height: "100%",
                    borderRadius: "31px",
                    background:
                      "var(--neutral-neutral-25, rgba(248, 248, 248, 0.05))",
                    backdropFilter: "blur(100px)",
                    WebkitBackdropFilter: "blur(100px)",
                    boxShadow: `
        2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset,
        0px 24px 32px -12px var(--NeutralNeutral410)
      `,
                    overflow: "hidden", // Optional: ensures rounded corners clip the image
                    padding: "10px",
                  }}
                >
                  <img src="/icons.svg" width="100%" height="100%" />
                  <img
                    src="/colors.svg"
                    width="100%"
                    height="100%"
                    style={{ marginTop: "10px" }}
                  />
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

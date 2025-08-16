import Logo from "../ui/Logo";
import Link from "next/link";
import { Mail, Phone, X } from "lucide-react";
import Image from "next/image";
import RoundCornerWrapper from "../RoundCornerWrapper";
const Footer = () => {
  return (
    <footer className="text-white">
      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "10%",
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "79.95%" }}>
            <div className="flex flex-col sm:flex-row">
              {/* Logo and Description */}
              <div
                className="
                  pl-2 pt-5
                  border-b border-dotted md:border-b-0 md:border-r md:border-dotted
                  border-[#373737]
                  relative
                  w-[100%]
                  md:w-[45%]
                "
                // style={{ width: "45%" }}
              >
                {/* Dots for desktop (right border) */}
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px] hidden md:block"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px] hidden md:block"></div>

                {/* Dots for mobile (bottom border) */}
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -left-[5px] md:hidden"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px] md:hidden"></div>

                <div className="ml-5">
                  <Logo />
                </div>
                <p className="text-[#F8F8F8B3] w-[300px] text-sm mt-4 p-4">
                  Web Panorama is a global agency that fuses brand goals with
                  creative design and development solutions.
                </p>
              </div>


              {/* Quick Links */}
              <div
                className="
                pt-5 
                pl-6
                md:pl-20 

                pb-10
                border-b border-dotted md:border-b-0 md:border-r md:border-dotted
                border-[#373737]
                relative
                w-[100%]
                md:w-[20%]
                "
                style={{
                  // borderRight: "1px solid #373737",
                  // width: "20%",
                  position: "relative",
                }}
              >
         {/* Dots for desktop (right border) */}
         <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px] hidden md:block"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px] hidden md:block"></div>

                {/* Dots for mobile (bottom border) */}
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -left-[5px] md:hidden"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px] md:hidden"></div>


                <div>
                  <h3 className="mb-4 font-medium leading-[100%] tracking-[-0.02em] font-[Rubik] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent">
                    • Quick
                  </h3>

                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/"
                        className="text-[#F8F8F8B3] hover:text-white transition-colors text-sm"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/portfolio"
                        className="text-[#F8F8F8B3] hover:text-white transition-colors text-sm"
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="text-[#F8F8F8B3] hover:text-white transition-colors text-sm"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className="text-[#F8F8F8B3] hover:text-white transition-colors text-sm"
                      >
                        Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div className="pt-5 
               pl-6
               md:pl-20 
               pb-10
               w-[100%] 
               md:w-[35%]" 
              // style={{ width: "35%" }}
              >
                <h3 className="mb-4 font-medium leading-[100%] tracking-[-0.02em] font-[Rubik] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent">
                  • Contact
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full flex items-center justify-center">
                      <div
                        className="absolute inset-0 rounded-full p-[1.5px]"
                        style={{
                          background:
                            "linear-gradient(158.39deg, rgba(255,255,255,0.1) 14.19%, rgba(255,255,255,0.000025) 50.59%, rgba(255,255,255,0.000025) 68.79%, rgba(255,255,255,0.025) 105.18%)",
                        }}
                      >
                        <div
                          className="w-full h-full rounded-full"
                          style={{
                            background: `
          linear-gradient(0deg, rgba(40, 40, 40, 0.7), rgba(40, 40, 40, 0.7)),
          linear-gradient(0deg, rgba(248, 248, 248, 0.1), rgba(248, 248, 248, 0.1))
        `,
                            backdropFilter: "blur(100px)",
                            WebkitBackdropFilter: "blur(100px)",
                            boxShadow:
                              "inset 2px 4px 16px 0px rgba(248, 248, 248, 0.06)",
                          }}
                        />
                      </div>

                      <Mail className="absolute w-4 h-4 text-white" />
                    </div>

                    <a
                      href="mailto:business@webpanorama.com"
                      className="text-[#F8F8F8B3] hover:text-white transition-colors text-sm"
                    >
                      business@webpanorama.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full flex items-center justify-center">
                      {/* Border layer */}
                      <div
                        className="absolute inset-0 rounded-full p-[1.5px] z-0"
                        style={{
                          background:
                            "linear-gradient(158.39deg, rgba(255,255,255,0.1) 14.19%, rgba(255,255,255,0.000025) 50.59%, rgba(255,255,255,0.000025) 68.79%, rgba(255,255,255,0.025) 105.18%)",
                        }}
                      >
                        {/* Inner blurred background */}
                        <div
                          className="w-full h-full rounded-full z-0"
                          style={{
                            background: `
          linear-gradient(0deg, rgba(40, 40, 40, 0.7), rgba(40, 40, 40, 0.7)),
          linear-gradient(0deg, rgba(248, 248, 248, 0.1), rgba(248, 248, 248, 0.1))
        `,
                            backdropFilter: "blur(100px)",
                            WebkitBackdropFilter: "blur(100px)",
                            boxShadow:
                              "inset 2px 4px 16px 0px rgba(248, 248, 248, 0.06)",
                          }}
                        />
                      </div>

                      {/* Phone Icon - now above everything else */}
                      <Phone className="w-4 h-4 text-white z-10" />
                    </div>

                    <a
                      href="tel:+16305502000"
                      className="text-[#F8F8F8B3] hover:text-white transition-colors text-sm"
                    >
                      +1(630) 550-2000
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "10.05%",
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "9.95%",
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "80.08%" }}>
            <RoundCornerWrapper>
              {/* desktop Slider */}
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                <div className="flex items-center justify-between  pt-6 px-6">
                  <h3 className="text-white font-medium">• Socials</h3>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-col gap-8 p-6">
                  <Link
                    href="#"
                    className="text-[#F8F8F8]/90 text-lg hover:text-white transition-colors"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="#"
                    className="text-[#F8F8F8]/90 text-lg hover:text-white transition-colors"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="#"
                    className="text-[#F8F8F8]/90 text-lg hover:text-white transition-colors"
                  >
                    Dribbble
                  </Link>
                  <Link
                    href="#"
                    className="text-[#D4541D] text-lg hover:text-[#D4541D]/80 transition-colors"
                  >
                    Behance
                  </Link>
                  <Link
                    href="#"
                    className="text-[#F8F8F8]/90 text-lg hover:text-white transition-colors"
                  >
                    WhatsApp
                  </Link>
                  <Link
                    href="#"
                    className="text-[#F8F8F8]/90 text-lg hover:text-white transition-colors"
                  >
                    Twitter
                  </Link>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:flex flex-row flex-wrap justify-start gap-20 p-5">
                <Link
                  href="#"
                  className=" text-[30px] hover:text-white transition-colors leading-[100%] tracking-[-0.02em] font-[Rubik] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent"
                >
                  LinkedIn
                </Link>
                <Link
                  href="#"
                  className=" text-[30px] hover:text-white transition-colors leading-[100%] tracking-[-0.02em] font-[Rubik] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className=" text-[30px] hover:text-white transition-colors leading-[100%] tracking-[-0.02em] font-[Rubik] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent"
                >
                  Dribbble
                </Link>
                <Link
                  href="#"
                  className=" text-[30px] hover:text-white transition-colors leading-[100%] tracking-[-0.02em] font-[Rubik] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent"
                >
                  Behance
                </Link>
                <Link
                  href="#"
                  className=" text-[30px] hover:text-white transition-colors leading-[100%] tracking-[-0.02em] font-[Rubik] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent"
                >
                  WhatsApp
                </Link>
                <Link
                  href="#"
                  className=" text-[30px] hover:text-white transition-colors leading-[100%] tracking-[-0.02em] font-[Rubik] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent"
                >
                  Twitter
                </Link>
              </div>
            </RoundCornerWrapper>
          </div>
          <div
            style={{
              width: "9.95%",
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "10%",
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "79.95%" }}>
          <div
  style={{
    backgroundColor: "rgba(212, 84, 29, 0.95)",
    padding: "20px 0",
  }}
  className="flex w-full overflow-x-auto whitespace-nowrap scrollbar-hide"
>
  <p className="font-[Rubik] font-normal text-[50px] leading-[100%] md:text-[138px] tracking-[-0.02em] mr-4 shrink-0">
    Get in touch
  </p>
  <p className="font-[Rubik] font-normal text-[50px] leading-[100%] md:text-[138px] tracking-[-0.02em] text-transparent bg-clip-text bg-[linear-gradient(92.95deg,rgba(248,248,248,0.9)_0.1%,rgba(248,248,248,0.5)_100.1%)] mr-4 shrink-0">
    Get in touch
  </p>
  <p className="font-[Rubik] font-normal text-[50px] leading-[100%] md:text-[138px] tracking-[-0.02em] text-transparent bg-clip-text bg-[linear-gradient(92.95deg,rgba(248,248,248,0.9)_0.1%,rgba(248,248,248,0.5)_100.1%)] shrink-0">
    Get in touch
  </p>
</div>


          </div>
          <div
            style={{
              width: "10.05%",
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      <div style={{ width: "100%", display: "flex", height: "49px" }}>
        <div
          style={{
            width: "10%",
            // height: "50px",
            borderRight: "1px solid #373737",
            borderBottom: "1px solid #373737",
            // backgroundColor:'blue',
          }}
        ></div>
        <div
          style={{
            width: "80%",
            // height: "49px",
            borderRight: "1px solid #373737",
          }}
        >
          <div
            className="flex justify-center items-center pt-4"
            style={{ position: "relative", borderTop: "1px solid #373737" }}
          >
            <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -left-[5px]"></div>
            <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px]"></div>
            <p className="text-[10px] text-[#F8F8F8]/70">
              © 2025, Web Pioneers, All Rights Reserved.
            </p>
          </div>
        </div>
        <div
          style={{
            width: "10%",
            // height: "50px",
            // backgroundColor:'green',
            borderBottom: "1px solid #373737",
          }}
        ></div>
      </div>
    </footer>
  );
};

export default Footer;

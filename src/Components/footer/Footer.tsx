import Logo from "../ui/Logo";
import Link from "next/link";
import { Mail, Phone, X } from "lucide-react";
import Image from "next/image";
import RoundCornerWrapper from "../RoundCornerWrapper";
import { relative } from "path";
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
              <div style={{borderRight: "1px solid #373737",width:'45%',position:'relative'}}>
                    <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px]"></div>
      <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>
                <div className="ml-5"><Logo /></div>
                <p className="text-gray-400 w-[300px] text-sm mt-4 p-4">
                  Web Panorama is a global agency that fuses brand goals with
                  creative design and development solutions.
                </p>
              </div>

              {/* Quick Links */}
              <div   style={{borderRight: "1px solid #373737",width:'20%',position:'relative'}}>
                    <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px]"></div>
      <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>
                <div>
                  <h3 className="text-white font-medium mb-4">• Quick</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/portfolio"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div  style={{width:'35%'}}>
                <h3 className="text-white font-medium mb-4">• Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a
                      href="mailto:business@webpanorama.com"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      business@webpanorama.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a
                      href="tel:+16305502000"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
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
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-medium">• Socials</h3>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-col gap-4">
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
              <div className="hidden sm:flex flex-row flex-wrap justify-start gap-20">
                <Link
                  href="#"
                  className="text-[#F8F8F8]/90 text-[30px] hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
                <Link
                  href="#"
                  className="text-[#F8F8F8]/90 text-[30px] hover:text-white transition-colors"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="text-[#F8F8F8]/90 text-[30px] hover:text-white transition-colors"
                >
                  Dribbble
                </Link>
                <Link
                  href="#"
                  className="text-[#D4541D]/70 text-[30px] hover:text-[#D4541D] transition-colors"
                >
                  Behance
                </Link>
                <Link
                  href="#"
                  className="text-[#F8F8F8]/90 text-[30px] hover:text-white transition-colors"
                >
                  WhatsApp
                </Link>
                <Link
                  href="#"
                  className="text-[#F8F8F8]/90 text-[30px] hover:text-white transition-colors"
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
          <div style={{ width: "79.95%",backgroundColor:'blue' }}>
            
              <Image
                src="/btn.svg"
                width={1100}
                height={300}
                alt="get in touch"
                className="w-full h-auto"
              />
            
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

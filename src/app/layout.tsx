import type { Metadata } from "next";
import rubik from "./fonts"; // Import Rubik font
import "./globals.css";
// import PioneerDetail from "@/Components/pioneerDetail/PioneerDetail";
// import ServiceExcellenceGrid from "@/Components/ServiceExcellenceGrid/ServiceExcellenceGrid";
import { HeroStatement } from "@/Components/HeroStatement/HeroStatement";
import { FAQAccordion } from "@/Components/fAQAccordion/FAQAccordion";
import ContactForm from "@/Components/contactForm";
import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";

export const metadata: Metadata = {
  title: "webpioneers",
  description: "A design agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>
        <div style={{ width: "100%", display: "flex", height: "49px" }}>
          <div className="w-[5%] md:w-[10%]"
            style={{
              height: "50px",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[90%] md:w-[80%]"
            style={{
              height: "49px",
              borderRight: "1px solid #373737",
            }}
          ></div>
          <div className="w-[5%] md:w-[10%]"
            style={{
              height: "50px",
              borderRight: "1px slid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
        <div style={{ width: "100%", display: "flex" }}>
          <div className="w-[4.95%] md:w-[9.95%]"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[90.08%] md:w-[80.08%]" 
            >
            <RoundCornerWrapper>
              <Header />
            </RoundCornerWrapper>
          </div>
          <div className="w-[4.95%] md:w-[9.95%]"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>

        {children}

        <FAQAccordion />

        <section>
          <div style={{ width: "100%", display: "flex" }}>
            <div className="w-[4.95%] md:w-[9.95%]"
              style={{
                boxSizing: "border-box",
                borderBottom: "1px solid #373737",
              }}
            ></div>
            <div className="w-[90.08%] md:w-[80.08%]" 
            >
              <RoundCornerWrapper>
                <div className="px-[20px]">
                <HeroStatement />
                </div>
              </RoundCornerWrapper>
            </div>
            <div className="w-[4.95%] md:w-[9.95%]"
              style={{
                boxSizing: "border-box",
                borderBottom: "1px solid #373737",
              }}
            ></div>
          </div>
        </section>


              <ContactForm />

       

        <section>
          <div style={{ width: "100%", display: "flex" }}>
            <div className="w-[4.95%] md:w-[9.95%]"
              style={{
                boxSizing: "border-box",
                borderBottom: "1px solid #373737",
              }}
            ></div>
            <div className="w-[90.08%] md:w-[80.08%]" >
              <RoundCornerWrapper>
                <div className="h-[50px] md:h-[140px]"></div>
              </RoundCornerWrapper>
            </div>
            <div className="w-[4.95%] md:w-[9.95%]"
              style={{
                boxSizing: "border-box",
                borderBottom: "1px solid #373737",
              }}
            ></div>
          </div>
        </section>

        <Footer />
      </body>
    </html>
  );
}

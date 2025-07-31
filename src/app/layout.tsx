import type { Metadata } from "next";
import rubik from "./fonts"; // Import Rubik font
import "./globals.css";
import Testimonials from "@/Components/testiminals/Testimonials";
// import PioneerDetail from "@/Components/pioneerDetail/PioneerDetail";
// import ServiceExcellenceGrid from "@/Components/ServiceExcellenceGrid/ServiceExcellenceGrid";
import { HeroStatement } from "@/Components/HeroStatement/HeroStatement";
import { FAQAccordion } from "@/Components/fAQAccordion/FAQAccordion";
import ContactForm from "@/Components/contactForm/ContactForm";
import Footer from "@/Components/footer/Footer";
import Header from "@/Components/Header/Header";
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
          <div
            style={{
              width: "10%",
              height: "50px",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div
            style={{
              width: "80%",
              height: "49px",
              borderRight: "1px solid #373737",
            }}
          ></div>
          <div
            style={{
              width: "10%",
              height: "50px",
              borderRight: "1px slid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
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
              <Header />
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

        {children}
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
              {/* desktop Slider */}
              <Testimonials />
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
                width: "10%",
                boxSizing: "border-box",
                borderRight: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
            <div style={{ width: "79.95%" }}>
              {/* desktop Slider */}
              <RoundCornerWrapper>
                <FAQAccordion />
              </RoundCornerWrapper>
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
                width: "10%",
                boxSizing: "border-box",
                borderRight: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
            <div style={{ width: "79.95%" }}>
              {/* desktop Slider */}
              <HeroStatement />
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
                width: "10%",
                boxSizing: "border-box",
                borderRight: "1px solid #373737",
                borderBottom: "1px solid #373737",
              }}
            ></div>
            <div style={{ width: "79.95%" }}>
              {/* desktop Slider */}
              <RoundCornerWrapper>
                <ContactForm />
              </RoundCornerWrapper>
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
              height: "50px",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
                            // backgroundColor:'blue',

            }}
          ></div>
          <div
            style={{
              width: "80%",
              height: "49px",
              borderRight: "1px solid #373737",
            }}
          ></div>
          <div
            style={{
              width: "10%",
              height: "50px",
                            // backgroundColor:'green',
              borderBottom: "1px solid #373737",
            }}
          >
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

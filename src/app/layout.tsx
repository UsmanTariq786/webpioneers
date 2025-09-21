import type { Metadata } from "next";
import rubik from "./fonts"; // Import Rubik font
import "./globals.css";
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
        <div
          style={{
            width: "100%",
            display: "flex",
            height: "49px",
            borderTop: "1px solid #373737",
          }}
        >
          <div
            className="w-[5%] md:w-[7%] lg:w-[10%]"
            style={{
              height: "50px",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div
            className="w-[90%] md:w-[86%] lg:w-[80%]"
            style={{
              height: "49px",
              borderRight: "1px solid #373737",
            }}
          ></div>
          <div
            className="w-[5%] md:w-[7%] lg:w-[10%]"
            style={{
              height: "50px",
              borderRight: "1px slid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[90.08%] md:w-[86.08%] lg:w-[80.08%]">
            <RoundCornerWrapper>
              <Header />
            </RoundCornerWrapper>
          </div>
          <div
            className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>

        {children}

        <section>
          <div style={{ width: "100%", display: "flex" }}>
            <div
              className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
              style={{
                boxSizing: "border-box",
                borderBottom: "1px solid #373737",
              }}
            ></div>
            <div className="w-[90.08%] md:w-[86.08%] lg:w-[80.08%]">
              <RoundCornerWrapper>
                <div className="h-[50px] md:h-[140px]"></div>
              </RoundCornerWrapper>
            </div>
            <div
              className="w-[4.95%] md:w-[6.95%] lg:w-[9.95%]"
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

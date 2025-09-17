"use client";

import { useEffect, useState } from "react";
import RoundCornerWrapper from "../RoundCornerWrapper";
import CommonQuestion from "../commonQuestion";
import Cal, { getCalApi } from "@calcom/embed-react";
import RequestQuoteForm from "./requestQuote";

export default function ContactForm() {
  const [tab, setTab] = useState("quote"); // quote , book

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: { light: { "cal-brand": "#cb521e" }, dark: { "cal-brand": "#cb521e" }  },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  // useEffect(() => {
  //   (async function () {
  //     const cal = await getCalApi({ namespace: "30min" });
  //     cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
  //   })();
  // }, []);

  return (
    <div>
      {/* Header */}

      <section>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            className="w-[5%] md:w-[7%] lg:w-[10%]"
            style={{
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%]">
            <div className="p-[20px] md:p-0 sm:ml-20 max-w-md my-12">
              <div className="">
                <CommonQuestion question="We’re Available for New Projects" />
              </div>
              <div className="w-full md:w-[100%] mt-[16px]">
                <p className="w-full font-rubik font-normal text-[28px] md:text-[32px] lg:text-[42px] leading-[36px] md:leading-[46px] lg:leading-[56px] tracking-[-0.02em] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent">
                  Ready to share <br /> your vision?
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%]"
            style={{
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
            className="w-[5%] md:w-[7%] lg:w-[10%]"
            style={{
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%]">
            <div className="flex">
              <div
                className={`w-[50%] ${
                  tab === "quote" ? "bg-[rgba(40,40,40,0.7)]" : ""
                } `}
                onClick={() => setTab("quote")}
              >
                <RoundCornerWrapper>
                  <p className="text-center text-[16px] md:text-[20px] py-5 font-normal leading-[100%] tracking-[-0.02em] font-[Rubik] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent">
                    Request a quote
                  </p>
                </RoundCornerWrapper>
              </div>

              <div
                className={`w-1/2 relative border-t border-b border-t-[#373737] border-b-[#373737]
               ${tab === "book" ? "bg-[rgba(40,40,40,0.7)]" : ""} `}
                onClick={() => setTab("book")}
              >
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px]"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>

                <p className="text-center py-5 text-[16px] md:text-[20px] font-normal leading-[100%] tracking-[-0.02em] font-[Rubik] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent">
                  Book a call
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%]"
            style={{
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      {tab === "quote" && <RequestQuoteForm />}

      {tab === "book" && (
        <div style={{ width: "100%", display: "flex" }}>
          <div
            className="w-[5%] md:w-[7%] lg:w-[10%]"
            style={{
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[89.95%] md:w-[85.95%] lg:w-[79.95%] mt-5">
            {/* <Cal
              namespace="30min"
              calLink="justinbundt/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
            ; */}
            <Cal
          namespace="30min"
          calLink="webpioneers/30min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view", theme: "dark" }}
          />
          </div>
          <div
            className="w-[5.05%] md:w-[7.05%] lg:w-[10.05%]"
            style={{
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

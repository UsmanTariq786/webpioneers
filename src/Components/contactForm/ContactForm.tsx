"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import RoundCornerWrapper from "../RoundCornerWrapper";
import CommonQuestion from "../commonQuestion";

const services = [
  "UI UX / Branding",
  "Development",
  "Design + Development",
  "Not Sure",
];

const budgets = ["Under $3k", "$3k–5k", "$5k–10k", "$10k+", "Not sure"];

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState("");
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);

  return (
    <div>
      {/* Header */}

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
            <div className="sm:ml-20 max-w-md  mt-[25px] mb-[30px]">
              <div className="w-[320px]">
                <CommonQuestion question="We’re Available for New Projects" />
              </div>
              <div className="w-[400px] mt-[10px]">
                <p className="w-full font-rubik font-normal text-[32px] sm:text-[48px] leading-tight sm:leading-[56px] tracking-[-0.02em] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent">
                  Ready to Share Your Vision?
                </p>
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
              width: "10%",
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "79.95%" }}>
            <div className="flex">
              <div className="w-[50%] bg-[rgba(40,40,40,0.7)]">
                <RoundCornerWrapper>
                  <p className="text-center text-[24px] py-5 font-normal leading-[100%] tracking-[-0.02em] font-[Rubik] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent">
                    Request a quote
                  </p>
                </RoundCornerWrapper>
              </div>

              <div className="w-1/2 relative border-t border-b border-t-[#373737] border-b-[#373737]">
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px]"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>

                <p className="text-center py-5 text-[24px] font-normal leading-[100%] tracking-[-0.02em] font-[Rubik] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent">
                  Book a call
                </p>
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
              width: "10%",
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "79.95%" }}>
            <div className="flex">
              <div className="w-[50%] border-r  border-r-[#373737]">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full  rounded-lg px-4 py-4 text-white placeholder-[rgba(118, 118, 118, 1)] focus:outline-none "
                />
              </div>

              <div className="w-[50%]">
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full   rounded-lg px-4 py-4 text-white placeholder-[rgba(118, 118, 118, 1)] focus:outline-none "
                />
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
              width: "10%",
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "79.95%" }}>
            <div className="flex">
              <div className="w-[50%]">
                <RoundCornerWrapper>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full placeholder-[rgba(118, 118, 118, 1)] rounded-lg px-4 py-4 text-white"
                  />
                </RoundCornerWrapper>
              </div>

              <div className="w-1/2 relative border-t border-b border-t-[#373737] border-b-[#373737]">
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px]"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full  rounded-lg px-4 py-4 text-white placeholder-[rgba(118, 118, 118, 1)] focus:outline-none "
                />
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
              width: "10%",
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "79.95%" }}>
            <div className="flex">
              <div className="w-[50%] border-r  border-r-[#373737]">
                <div className="relative">
                  <button
                    onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                    className="flex justify-between items-center w-full   rounded-lg px-4 py-4  focus:outline-none "
                  >
                    <span
                      className={
                        selectedService ? "text-[#767676]" : "text-[#767676]"
                      }
                    >
                      {selectedService || "Service required"}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        showServiceDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showServiceDropdown && (
                    <div className="absolute z-20 mt-2 w-full bg-gray-700 rounded-lg shadow-xl border border-gray-600 overflow-hidden">
                      {services.map((service) => (
                        <label
                          key={service}
                          className="flex items-center justify-between px-4 py-3 hover:bg-gray-600/50 cursor-pointer transition-colors"
                          onClick={() => {
                            setSelectedService(service);
                            setShowServiceDropdown(false);
                          }}
                        >
                          <span className="text-white text-sm">{service}</span>
                          <div className="relative">
                            <input
                              type="radio"
                              name="service"
                              value={service}
                              checked={selectedService === service}
                              onChange={() => {}}
                              className="sr-only"
                            />
                            <div
                              className={`w-4 h-4 rounded-full border-2 transition-colors ${
                                selectedService === service
                                  ? "border-orange-500 bg-orange-500"
                                  : "border-gray-400 bg-transparent"
                              }`}
                            >
                              {selectedService === service && (
                                <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                              )}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="w-[50%]">
                <div className="relative">
                  <button
                    onClick={() => setShowBudgetDropdown(!showBudgetDropdown)}
                    className="flex justify-between items-center w-full  rounded-lg px-4 py-4  focus:outline-none"
                  >
                    <span
                      className={
                        selectedBudget ? "text-[#767676]" : "text-[#767676]"
                      }
                    >
                      {selectedBudget || "Project Budget"}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        showBudgetDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showBudgetDropdown && (
                    <div className="absolute z-20 mt-2 w-4/5 bg-gray-700 rounded-lg shadow-xl border border-gray-600 overflow-hidden">
                      {budgets.map((budget) => (
                        <label
                          key={budget}
                          className="flex items-center justify-between px-4 py-4 hover:bg-gray-600/50 cursor-pointer transition-colors"
                          onClick={() => {
                            setSelectedBudget(budget);
                            setShowBudgetDropdown(false);
                          }}
                        >
                          <span className="text-white text-sm">{budget}</span>
                          <div className="relative">
                            <input
                              type="radio"
                              name="budget"
                              value={budget}
                              checked={selectedBudget === budget}
                              onChange={() => {}}
                              className="sr-only"
                            />
                            <div
                              className={`w-4 h-4 rounded-full border-2 transition-colors ${
                                selectedBudget === budget
                                  ? "border-orange-500 bg-orange-500"
                                  : "border-gray-400 bg-transparent"
                              }`}
                            >
                              {selectedBudget === budget && (
                                <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                              )}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  )}
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
              width: "10%",
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "79.95%" }}>
            <div className="flex">
              <div className="w-[50%]">
                <RoundCornerWrapper>
                  <textarea
                    placeholder="Project detail"
                    className="w-full  rounded-lg px-4 py-4 text-white placeholder-text-[#767676] focus:outline-none  transition-colors min-h-[120px] resize-none"
                  />
                </RoundCornerWrapper>
              </div>

              <div className="w-1/2 relative border-t border-b border-t-[#373737] border-b-[#373737]">
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px]"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>

                <textarea
                  placeholder="Tell us about your project"
                  className="w-full  rounded-lg px-4 py-4 text-white placeholder-text-[#767676] focus:outline-none min-h-[120px] resize-none"
                />
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
              width: "10%",
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div style={{ width: "79.95%" }}>
            <div className="flex">
              <div className="w-[50%]">
                <p className="text-sm text-white/60">
                  By sending this form I confirm that I have read and accept the{" "}
                  <a
                    href="#"
                    className="text-[#D4541D] hover:text-[#D4541D]/80 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>

              <div className="w-[50%]">
                <button className="bg-[#D4541D] hover:bg-[#D4541D]/90 text-white text-[17px] px-6 py-3 rounded-full transition-colors">
                  Send Inquiry
                </button>
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

      {/* Footer */}
    </div>
  );
}

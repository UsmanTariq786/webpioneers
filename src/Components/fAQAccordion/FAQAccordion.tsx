"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import RoundCornerWrapper from "../RoundCornerWrapper";
import CommonQuestion from "../commonQuestion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQAccordion = () => {
  const [activeId, setActiveId] = useState<string | null>("1"); // First item open by default

  const faqs: FAQItem[] = [
    {
      id: "1",
      question:
        "What is the typical turnaround time for a design or development project?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    },
    {
      id: "2",
      question: "Can you accommodate rush projects or tight deadlines?",
      answer:
        "Yes, we offer expedited services for time-sensitive projects with a 15-30% rush fee depending on scope.",
    },
    {
      id: "3",
      question: "Do you have experience working in our industry or niche?",
      answer:
        "Our team has served 120+ clients across 8 industries including healthcare, fintech, and e-commerce.",
    },
    {
      id: "4",
      question: "What types of services do you offer?",
      answer:
        "End-to-end product development: UX/UI design, frontend/backend development, QA testing, and DevOps.",
    },
    {
      id: "5",
      question: "How do you handle revisions or changes during a project?",
      answer:
        "We include 2 rounds of revisions in all contracts, with clear change request protocols to prevent scope creep.",
    },
  ];

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div>
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
                <div className="p-[20px] md:[0px] sm:ml-20 max-w-md  mt-[25px] mb-[30px]">
  <div className="w-[200px]">
    <CommonQuestion question="Got Questions?" />
  </div>
  <div className="w-full md:w-[400px] mt-[10px]">
    <p className="w-full font-rubik font-normal text-[32px] sm:text-[48px] leading-tight sm:leading-[56px] tracking-[-0.02em] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent">
      Frequently Asked Questions
    </p>
  </div>
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
            <div className="space-y-0">
              {/* FAQ 1 */}
              <div className={`py-6 px-6  sm:py-8`}>
                <div
                  onClick={() => toggleAccordion("1")}
                  className="flex justify-between items-start w-full text-left group cursor-pointer"
                  aria-expanded={activeId === "1"}
                  aria-controls="faq-content-1"
                >
                  <h3 className="text-base sm:text-lg lg:text-xl text-[rgba(248,248,248,0.95)] pr-8 leading-relaxed group-hover:text-gray-300 transition-colors">
                    What is the typical turnaround time for a design or
                    development project?
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeId === "1"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-700 text-gray-400 group-hover:bg-gray-600"
                    }`}
                  >
                    {activeId === "1" ? (
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </div>
                </div>
                <div
                  id="faq-content-1"
                  className={`grid transition-all duration-500 ease-in-out ${
                    activeId === "1"
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  } overflow-hidden`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 pr-12 sm:pr-16">
                      <p className="text-sm sm:text-base text-[rgba(248,248,248,0.5)] leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repeat for FAQ 3, 4, and 5 similarly... */}
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
            <div className="space-y-0">
              {/* FAQ 2 */}
              <div className={`py-6 px-6  sm:py-8`}>
                <div
                  onClick={() => toggleAccordion("2")}
                  className="flex justify-between items-start w-full text-left group cursor-pointer"
                  aria-expanded={activeId === "2"}
                  aria-controls="faq-content-2"
                >
                  <h3 className="text-base sm:text-lg lg:text-xl text-[rgba(248,248,248,0.95)] pr-8 leading-relaxed group-hover:text-gray-300 transition-colors">
                    Can you accommodate rush projects or tight deadlines?
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeId === "2"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-700 text-gray-400 group-hover:bg-gray-600"
                    }`}
                  >
                    {activeId === "2" ? (
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </div>
                </div>
                <div
                  id="faq-content-2"
                  className={`grid transition-all duration-500 ease-in-out ${
                    activeId === "2"
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  } overflow-hidden`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 pr-12 sm:pr-16">
                      <p className="text-sm sm:text-base text-[rgba(248,248,248,0.5)] leading-relaxed">
                        Yes, we offer expedited services for time-sensitive
                        projects with a 15-30% rush fee depending on scope.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repeat for FAQ 3, 4, and 5 similarly... */}
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
              <div className="space-y-0">
              {/* FAQ 3 */}
              <div className={`py-6 px-6  sm:py-8 border-b `}>
                <div
                  onClick={() => toggleAccordion("3")}
                  className="flex justify-between items-start w-full text-left group cursor-pointer"
                  aria-expanded={activeId === "3"}
                  aria-controls="faq-content-3"
                >
                  <h3 className="text-base sm:text-lg lg:text-xl text-[rgba(248,248,248,0.95)] pr-8 leading-relaxed group-hover:text-gray-300 transition-colors">
                    Do you have experience working in our industry or niche?
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeId === "3"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-700 text-gray-400 group-hover:bg-gray-600"
                    }`}
                  >
                    {activeId === "3" ? (
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </div>
                </div>
                <div
                  id="faq-content-3"
                  className={`grid transition-all duration-500 ease-in-out ${
                    activeId === "3"
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  } overflow-hidden`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 pr-12 sm:pr-16">
                      <p className="text-sm sm:text-base text-[rgba(248,248,248,0.5)] leading-relaxed">
                        Our team has served 120+ clients across 8 industries
                        including healthcare, fintech, and e-commerce.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repeat for FAQ 3, 4, and 5 similarly... */}
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
            <div className="space-y-0">
              {/* FAQ 4 */}
              <div className={`py-6 px-6 sm:py-8`}>
                <div
                  onClick={() => toggleAccordion("4")}
                  className="flex justify-between items-start w-full text-left group cursor-pointer"
                  aria-expanded={activeId === "4"}
                  aria-controls="faq-content-4"
                >
                  <h3 className="text-base sm:text-lg lg:text-xl text-[rgba(248,248,248,0.95)] pr-8 leading-relaxed group-hover:text-gray-300 transition-colors">
                    What types of services do you offer?
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeId === "4"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-700 text-gray-400 group-hover:bg-gray-600"
                    }`}
                  >
                    {activeId === "4" ? (
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </div>
                </div>
                <div
                  id="faq-content-4"
                  className={`grid transition-all duration-500 ease-in-out ${
                    activeId === "4"
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  } overflow-hidden`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 pr-12 sm:pr-16">
                      <p className="text-sm sm:text-base text-[rgba(248,248,248,0.5)] leading-relaxed">
                        End-to-end product development: UX/UI design,
                        frontend/backend development, QA testing, and DevOps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="space-y-0">
              {/* FAQ 5 */}
              <div className={`py-6 px-6  sm:py-8 `}>
                <div
                  onClick={() => toggleAccordion("5")}
                  className="flex justify-between items-start w-full text-left group cursor-pointer"
                  aria-expanded={activeId === "5"}
                  aria-controls="faq-content-5"
                >
                  <h3 className="text-base sm:text-lg lg:text-xl text-[rgba(248,248,248,0.95)] pr-8 leading-relaxed group-hover:text-gray-300 transition-colors">
                    How do you handle revisions or changes during a project?
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeId === "5"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-700 text-gray-400 group-hover:bg-gray-600"
                    }`}
                  >
                    {activeId === "5" ? (
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </div>
                </div>
                <div
                  id="faq-content-5"
                  className={`grid transition-all duration-500 ease-in-out ${
                    activeId === "5"
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  } overflow-hidden`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 pr-12 sm:pr-16">
                      <p className="text-sm sm:text-base text-[rgba(248,248,248,0.5)] leading-relaxed">
                        We include 2 rounds of revisions in all contracts, with
                        clear change request protocols to prevent scope creep.
                      </p>
                    </div>
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
    </div>
  );
};

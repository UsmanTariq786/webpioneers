"use client"

import { Plus, Minus } from "lucide-react"
import { useState } from "react"

interface FAQItem {
  id: string
  question: string
  answer: string
}

export const FAQAccordion = () => {
  const [activeId, setActiveId] = useState<string | null>("1") // First item open by default

  const faqs: FAQItem[] = [
    {
      id: "1",
      question: "What is the typical turnaround time for a design or development project?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    },
    {
      id: "2",
      question: "Can you accommodate rush projects or tight deadlines?",
      answer: "Yes, we offer expedited services for time-sensitive projects with a 15-30% rush fee depending on scope.",
    },
    {
      id: "3",
      question: "Do you have experience working in our industry or niche?",
      answer: "Our team has served 120+ clients across 8 industries including healthcare, fintech, and e-commerce.",
    },
    {
      id: "4",
      question: "What types of services do you offer?",
      answer: "End-to-end product development: UX/UI design, frontend/backend development, QA testing, and DevOps.",
    },
    {
      id: "5",
      question: "How do you handle revisions or changes during a project?",
      answer:
        "We include 2 rounds of revisions in all contracts, with clear change request protocols to prevent scope creep.",
    },
  ]

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section className=" min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl ml-8 sm:ml-12 lg:ml-16">
        {/* Heading */}
        <div className="mb-10 space-y-2.5">
        <button className="font-rubik text-xs uppercase tracking-wider py-2 px-3 font-semibold text-white/80 border border-white/10 rounded-full">
      Got Questions?
      </button>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
            Frequently asked
            <br />
            questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={faq.id} className={`py-6 sm:py-8 ${index !== faqs.length - 1 ? "border-b border-gray-700" : ""}`}>
              <div button
                onClick={() => toggleAccordion(faq.id)}
                className="flex justify-between items-start w-full text-left group"
                aria-expanded={activeId === faq.id}
                aria-controls={`faq-content-${faq.id}`}
              >
                <h3 className="text-base sm:text-lg lg:text-xl text-white pr-8 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {faq.question}
                </h3>

                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeId === faq.id
                      ? "bg-orange-500 text-white"
                      : "bg-gray-700 text-gray-400 group-hover:bg-gray-600"
                  }`}
                >
                  {activeId === faq.id ? (
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </div>
              </div>

              {/* Answer */}
              <div
                id={`faq-content-${faq.id}`}
                className={`grid transition-all duration-500 ease-in-out ${
                  activeId === faq.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                } overflow-hidden`}
              >
                <div className="overflow-hidden">
                  <div className="pt-4 pr-12 sm:pr-16">
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

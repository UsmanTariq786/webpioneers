"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const services = ["UI UX / Branding", "Development", "Design + Development", "Not Sure"]

const budgets = ["Under $3k", "$3k–5k", "$5k–10k", "$10k+", "Not sure"]

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState("")
  const [showServiceDropdown, setShowServiceDropdown] = useState(false)
  const [selectedBudget, setSelectedBudget] = useState("")
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false)

  return (
    <section className=" text-white py-20 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 max-w-md">
          <button className="text-xs uppercase tracking-wider py-2 px-4 font-semibold text-white/80 border border-white/20 rounded-full">
            We're Available for New Projects
          </button>
          <h2 className="mt-4 text-[28px] sm:text-[36px] md:text-[44px] leading-tight text-white/90">
            Ready to Share Your Vision?
          </h2>
        </div>

        {/* Section Headers */}
        <div className="flex justify-between mb-8">
          <div className="sm:ml-40">
            <p className="text-[18px] sm:text-[24px] font-normal text-[#F8F8F8]/90">Request a quote</p>
          </div>
          <div className="sm:mr-60">
            <p className="text-[18px] sm:text-[24px] font-normal text-[#F8F8F8]/90">Book a Call</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Request a Quote */}
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-gray-800/60 border border-gray-700/50 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none "
            />

            <input
              type="tel"
              placeholder="Phone number"
              className="w-full bg-gray-800/60 border border-gray-700/50 rounded-lg px-4 py-4 text-white"
            />

            {/* Service Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                className="flex justify-between items-center w-full bg-gray-800/60 border border-gray-700/50 rounded-lg px-4 py-4 text-white focus:outline-none "
              >
                <span className={selectedService ? "text-white" : "text-gray-400"}>
                  {selectedService || "Service required"}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${showServiceDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showServiceDropdown && (
                <div className="absolute z-20 mt-2 w-full bg-gray-700 rounded-lg shadow-xl border border-gray-600 overflow-hidden">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="flex items-center justify-between px-4 py-3 hover:bg-gray-600/50 cursor-pointer transition-colors"
                      onClick={() => {
                        setSelectedService(service)
                        setShowServiceDropdown(false)
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

            <textarea
              placeholder="Project detail"
              className="w-full bg-gray-800/60 border border-gray-700/50 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none  transition-colors min-h-[120px] resize-none"
            />
          </div>

          {/* Book a Call */}
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Company name"
              className="w-full bg-gray-800/60 border border-gray-700/50 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none "
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-800/60 border border-gray-700/50 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none "
            />

            {/* Budget Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowBudgetDropdown(!showBudgetDropdown)}
                className="flex justify-between items-center w-full bg-gray-800/60 border border-gray-700/50 rounded-lg px-4 py-4 text-white focus:outline-none"
              >
                <span className={selectedBudget ? "text-white" : "text-gray-400"}>
                  {selectedBudget || "Project Budget"}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${showBudgetDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showBudgetDropdown && (
                <div className="absolute z-20 mt-2 w-4/5 bg-gray-700 rounded-lg shadow-xl border border-gray-600 overflow-hidden">
                  {budgets.map((budget) => (
                    <label
                      key={budget}
                      className="flex items-center justify-between px-4 py-4 hover:bg-gray-600/50 cursor-pointer transition-colors"
                      onClick={() => {
                        setSelectedBudget(budget)
                        setShowBudgetDropdown(false)
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

            <textarea
              placeholder="Tell us about your project"
              className="w-full bg-gray-800/60 border border-gray-700/50 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none min-h-[120px] resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-8 gap-4">
          <p className="text-sm text-white/60">
            By sending this form I confirm that I have read and accept the{" "}
            <a href="#" className="text-[#D4541D] hover:text-[#D4541D]/80 transition-colors">
              Privacy Policy
            </a>
          </p>
          <button className="bg-[#D4541D] hover:bg-[#D4541D]/90 text-white text-[17px] px-6 py-3 rounded-full transition-colors">
            Send Inquiry
          </button>
        </div>
      </div>
    </section>
  )
}

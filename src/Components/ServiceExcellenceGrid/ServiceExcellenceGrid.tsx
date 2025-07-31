import React from 'react'

const ServiceExcellenceGrid = () => {
  return (
    <section className="overflow-x-auto hide-scrollbar px-4 py-6">
      <div className="whitespace-nowrap flex gap-x-10 text-[#F8F8F8]/70">
        {[
          "Sults That Last",
          "Achieve More, Together",
          "Focused on Success",
          "Skills That Deliver",
          "Results That Matter",
        ].map((text, index) => (
          <p
            key={index}
            className={`font-rubik font-normal text-[27px] leading-[56px] tracking-[-0.02em] shrink-0
            ${index === 2 ? "text-[#D4541D]" : ""}`}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  )
}

export default ServiceExcellenceGrid;

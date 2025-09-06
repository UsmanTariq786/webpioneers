import React from 'react'
import CommonQuestion from "@/Components/commonQuestion";
import rubik from "@/app/fonts";



const HeadingWhyPickUs = () => {
  return (
    <div className=" p-10 md:px-25 md:pt-15 md:pb-10">
    <div className="w-40">
      <CommonQuestion question="Why Choose Us" />
    </div>
    <h1
      className={`${rubik.className} w-full text-[28px] mt-[10px] md:text-[42px] font-[400] mb-6 bg-[linear-gradient(92.95deg,rgba(248,248,248,0.9)_0%,rgba(248,248,248,0.5)_100%)] text-transparent bg-clip-text leading-[36px] md:leading-[56px]`}
    >
      Why Pick Us Over the <br className="hidden md:block" />
      Other 1,000 Tabs?
    </h1>
  </div>
  )
}

export default HeadingWhyPickUs

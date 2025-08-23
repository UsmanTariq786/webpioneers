import React from 'react'
import CommonQuestion from "@/Components/commonQuestion";
import rubik from "@/app/fonts";



const HeadingDuo = () => {
  return (
    <div className=" p-10 md:px-25 md:pt-15 md:pb-10">
    <div className="w-50">
      <CommonQuestion question="Zero boring vibes" />
    </div>
    <h1
      className={`${rubik.className} w-full text-[2rem] mt-[10px] sm:text-[2rem] md:text-[3rem] font-[400] mb-6 bg-[linear-gradient(92.95deg,rgba(248,248,248,0.9)_0%,rgba(248,248,248,0.5)_100%)] text-transparent bg-clip-text leading-tight`}
    >
      Duo behind <br />
      the scenes
    </h1>
  </div>
  )
}

export default HeadingDuo

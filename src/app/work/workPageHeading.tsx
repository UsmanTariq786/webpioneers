import React from 'react'
import rubik from "@/app/fonts";

const WorkPageHeading = () => {
  return (
    <div>
      <img src='tagline.svg' alt="stuff we have made" />
        <h1
         className={`${rubik.className} md:w-100 w-full text-[3rem] font-[400] mb-6 bg-[linear-gradient(92.95deg,rgba(248,248,248,0.9)_0%,rgba(248,248,248,0.5)_100%)] text-transparent bg-clip-text md:text-[3rem] sm:text-[2rem]`}
       >
         Projects we're proud of
       </h1>
    </div>
  )
}

export default WorkPageHeading

import React from 'react';
import rubik from "@/app/fonts";

const WorkPageHeading = () => {
  return (
    <div className='p-4 pl-4 md:p-10 md:pl-20'>
      <img src='tagline.svg' alt="stuff we have made" />
      <h1
        className={`${rubik.className} w-full text-[2rem] mt-[10px] sm:text-[2rem] md:text-[3rem] font-[400] mb-6 bg-[linear-gradient(92.95deg,rgba(248,248,248,0.9)_0%,rgba(248,248,248,0.5)_100%)] text-transparent bg-clip-text leading-tight`}
      >
        Projects we're proud of
      </h1>
    </div>
  )
}

export default WorkPageHeading
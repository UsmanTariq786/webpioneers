import React from 'react';
import rubik from "@/app/fonts";

const WorkPageHeading = () => {
  return (
    <div className='p-4 pl-4 md:p-10 md:pl-20 mt-4'>
      <img src='tagline.svg' alt="stuff we have made" />
      <h1
        className={`${rubik.className} w-full text-[28px] leading-[36px] mt-[10px] md:text-[42px] md:leading-[56] font-[400] mb-6 bg-[linear-gradient(92.95deg,rgba(248,248,248,0.9)_0%,rgba(248,248,248,0.5)_100%)] text-transparent bg-clip-text `}
      >
        Projects we're <br className='hidden md:block' /> proud of
      </h1>
    </div>
  )
}

export default WorkPageHeading
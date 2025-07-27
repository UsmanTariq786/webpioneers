import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface cardProps{
    title: string,
    description: string,
    image: string
}
const WebCard = ({title , image , description}: cardProps) => {

   
  return (
    <div>
       <div className="flex flex-col items-start text-left max-w-[300px] ">
        <div className=" mb-6">
          <Image src={image} width={70} height={70} alt="UX Icon" />
        </div>
        <h1 className="text-[#F8F8F8]/90  sm:text-[30px]  font-rubik font-normal text-[27px] leading-[40px] tracking-[-0.02em]">
        {title}
        </h1>
        <p className="text-[#F8F8F8]/50 text-base mt-3 leading-[27px] tracking-normal">
         {description}
        </p>
      </div>
    </div>
  )
}

export default WebCard

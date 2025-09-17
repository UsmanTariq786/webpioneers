import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface cardProps{
    title: string,
    description: string,
    image: string
}
const WebCard = ({title , image , description}: cardProps) => {

   
  return (
      <div className="w-full lg:w-[300px] self-center md:px-14 md:pt-5 lg:px-4 px-10 pt-3 mt-4">
              <div className="flex items-center">
                <img src={image} alt="rings" width={70} height={70} />
              </div>

              <p className="text-[24px] leading-[42px] md:text-[28px] lg:text-[36px] md:leading-[42px] font-normal font-['Rubik'] tracking-[-0.02em]
                bg-[linear-gradient(92.95deg,_rgba(248,248,248,0.9)_0.1%,_rgba(248,248,248,0.5)_100.1%)]
                bg-clip-text text-transparent max-w-[900px] mt-[20px]">
                {title}
              </p>

              <p className="w-full xl:w-[292px] min-h-[72px] opacity-80 text-[rgba(248,248,248,0.5)]
                font-['Rubik'] font-normal text-[16px] leading-[29px] md:leading-[24px] mt-[10px]">
              {description}             
              </p>
            </div>
  )
}

export default WebCard

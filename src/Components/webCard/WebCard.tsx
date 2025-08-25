import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface cardProps{
    title: string,
    description: string,
    image: string
}
const WebCard = ({title , image , description}: cardProps) => {

   
  return (
      <div className="w-full xl:w-[270px] self-center px-4 mt-4">
              <div className="flex items-center">
                <img src={image} alt="rings" width={70} height={70} />
              </div>

              <p className="text-[24px] leading-[28px] md:text-[40px] md:leading-[46px] font-normal font-['Rubik'] tracking-[-0.02em]
                bg-[linear-gradient(92.95deg,_rgba(248,248,248,0.9)_0.1%,_rgba(248,248,248,0.5)_100.1%)]
                bg-clip-text text-transparent max-w-[900px] mt-[20px]">
                {title}
              </p>

              <p className="w-full xl:w-[292px] min-h-[72px] opacity-80 text-[rgba(248,248,248,0.5)]
                font-['Rubik'] font-normal text-[18px] leading-[29px] md:text-[16px] md:leading-[24px] mt-[10px] md:mt-0">
              {description}             
              </p>
            </div>
  )
}

export default WebCard

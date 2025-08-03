import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface cardProps{
    title: string,
    description: string,
    image: string
}
const WebCard = ({title , image , description}: cardProps) => {

   
  return (
      <div className="w-[240px] self-center">
              <div className="flex items-center">
                <img src={image} alt="rings" />
              </div>

              <p className="text-[40px] leading-[100%] font-normal font-['Rubik'] tracking-[-0.02em]
                bg-[linear-gradient(92.95deg,_rgba(248,248,248,0.9)_0.1%,_rgba(248,248,248,0.5)_100.1%)]
                bg-clip-text text-transparent max-w-[900px] mt-[20px]">
                {title}
              </p>

              <p className="w-[292px] h-[72px] opacity-80 text-[rgba(248,248,248,0.5)]
                font-['Rubik'] font-normal text-[16px] leading-[24px]">
{description}             
 </p>
            </div>
  )
}

export default WebCard

import React from 'react'

interface SmallcardProps
{
    Heading:string,
    description:string,
    imageUrl:string,

}
const Smallcard = ({ Heading,imageUrl,description }: SmallcardProps)=> {
  return (
        <div className="w-[240px] space-y-4 self-center">
              <div className="flex items-center">
                <img src={imageUrl} alt="rings" />
              </div>

              <p className="text-[40px] leading-[100%] font-normal font-['Rubik'] tracking-[-0.02em]
                bg-[linear-gradient(92.95deg,_rgba(248,248,248,0.9)_0.1%,_rgba(248,248,248,0.5)_100.1%)]
                bg-clip-text text-transparent max-w-[550px] mt-[20px]">
                {Heading}
              </p>

              <p className="w-[292px] h-[72px] opacity-80 text-[rgba(248,248,248,0.5)]
                font-['Rubik'] font-normal text-[16px] leading-[24px]">
{description}             
 </p>
            </div>
  )
}

export default Smallcard
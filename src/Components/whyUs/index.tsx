'use client'
import React from 'react'
import RoundCornerWrapper from '../RoundCornerWrapper'
import SmallCardData from '../SmallCardData'
import CommonQuestion from '../commonQuestion'
import Button from '../button/Button'
import { useRouter } from 'next/navigation'

const WhyUs = () => {
    const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row">
    <div className="w-[50%]">
    {/* <RoundCornerWrapper top={false}> */}
        <SmallCardData />
    {/* </RoundCornerWrapper> */}
    </div>
    <div className="w-[50%]">
      <div>
        <RoundCornerWrapper bottom={false}>

          <div className="hidden  sm:flex flex-row  p-6">
            <div>
              {Array.from({ length: 13 }, (_, index) => (
                <div key={index + "starrs"}>
                  <span>
                    * * * * * * * * * * * * * * * * * * * * * * * 
                  </span>
                </div>
              ))}
            </div>
            <div className="ml-1">
              {Array.from({ length: 13 }, (_, index) => (
                <div key={index + "starrsagain"}>
                  <span>
                    * * * * * * * * * * * * * * * * * * * * * * * * * * *
                  </span>
                </div>
              ))}
            </div>
          </div>
        </RoundCornerWrapper>

        <div className=" w-full ">
          {
            <RoundCornerWrapper bottom={false}>
              <div className='p-10'>
                <div className='w-30'>
              <CommonQuestion question='OUR VIBE' />

                </div>
                
                <br />
                <h1 className="text-[32px] leading-[40px] md:text-4xl md:leading-[56px] mt-2">We help brands grow by designing smooth,smart experiences people actually enjoy using.</h1> <br />
                <Button title="More About Us" onClick={() => {router.push('/about')}} />
              </div>
            </RoundCornerWrapper>
          }
        </div>
      </div>
    </div>
  </div>
  )
}

export default WhyUs

'use client'

import React from 'react'
import tableData from '@/app/Data/tableData'
// import Button1 from '../Button1'
import RoundCornerWrapper from '@/Components/RoundCornerWrapper';
import Button from '../button/Button';
import { useRouter } from 'next/navigation';
function TableData() {

  const router = useRouter();

  return (
    <div>
      <div className=''>
        {
          tableData.map((card, index) => (
            <div key={index+'tabledatasss'} className=''>
              <div>
                {/* top heading */}
                <RoundCornerWrapper top={false}>
                  <div className='flex flex-col items-center justify-center py-10'>
                    <img src={card.image} alt="" className='w-[66px] h-[66px] md:w-[75px] md:h-[75px] mb-8' />
                    <h1 className='text-[32px] md:text-5xl' 
                     style={{
                      background:
                        "linear-gradient(92.95deg, rgba(248, 248, 248, 0.9) 0.1%, rgba(248, 248, 248, 0.5) 100.1%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    >{card.heading}</h1>
                  </div>
                </RoundCornerWrapper>

              
                <div className='grid grid-cols-1 w-full sm:flex md:flex-wrap'>
                <RoundCornerWrapper top={false} bottom={false}>
                  <div className='sm:flex md:flex-wrap grid grid-cols-1'>
                  {/* left side */}
                  <div className=' w-full  sm:w-1/2'>
                    <RoundCornerWrapper >
                      <div className=' p-5 '>
                        <p className='text-[18px] text-[#F8F8F880]'>{card.sub1}</p>
                      </div>
                    </RoundCornerWrapper>
                    <RoundCornerWrapper top={false} bottom={false}>
                      <div className=' p-5 '>
                        <p  style={{
                      background:
                        "linear-gradient(92.95deg, rgba(248, 248, 248, 0.9) 0.1%, rgba(248, 248, 248, 0.5) 100.1%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }} className='text-[24px] md:text-[32px]'>{card.description1}</p> <br />
                         <Button title="Let’s get started" onClick={() => {router.push('/contactUs')}} />
                      </div>
                    </RoundCornerWrapper>

                  </div>
                  {/* right side */}
                  <div className='flex flex-col  sm:w-1/2 '>
                    <div className='  p-5'>
                      <p className='text-[18px] text-[#F8F8F880]'>{card.sub2}</p>
                    </div>
                    <RoundCornerWrapper>
                      <div className=''>
                        <ul>
                          {[card.des1, card.des2, card.des3, card.des4, card.des5, card.des6]
                            .filter((item) => item?.trim())
                            .map((item, index) => (
                              <RoundCornerWrapper top={false} key={index}>
                                <div className='flex p-5 '>
                                <div className=' flex items-center mr-8'>
                                <div className='w-2 h-2 rounded-full bg-[#F8F8F880] mr-2'></div>
                                 <p className='text-[#F8F8F880]'>0{index+1}</p>

                                </div>
                                <li key={index} className='text-[20px] text-[#F8F8F8F2]'>{item} </li>
                                </div>
                              </RoundCornerWrapper>

                            ))

                          }

                        </ul>
                      </div>
                    </RoundCornerWrapper>

                  </div> 
                  </div>
                  </RoundCornerWrapper>

                  {/* slider */}
                  <RoundCornerWrapper>
                    <div className='m-20'>
                      <img src={card.img} alt="" />
                    </div>
                  </RoundCornerWrapper>

                </div>
              </div>
            </div>


          ))
        }
      </div>
    </div>
  )
}

export default TableData

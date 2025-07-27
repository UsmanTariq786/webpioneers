import React from 'react'
import Box from '../Data/Box';
import CardData from '@/components/cardData/CardData';
import TableData from '@/components/tableData/TableData';
import SmallCardData from '@/components/SmallCardData';
const ServicesPage = () => {
  return (
    <div className='text-white'>
      <div className='pl-15 pt-8'>
        <span className='text-xs border-2 rounded'>{Box[0].boxhead}</span>
        <h1 className='text-4xl w-100'>{Box[0].boxdes}</h1>
      </div>

      <CardData />
      <TableData />

      <div className='pl-15 pt-8 mb-7'>
        <span className='text-xs border-2 rounded'>{Box[1].boxhead}</span>
        <h1 className='text-4xl w-[170px]'>{Box[1].boxdes}</h1>
      </div>
      <div className='grid grid-cols-1  sm:flex  mx-8'>
        <div className='w-full sm:w-1/2 '>
          <SmallCardData />
        </div>
        <div className='w-full sm:w-1/2 '>
          <div>
            <div className='hidden  sm:flex flex-row border p-6'>
              <div>
                {
                  Array.from({ length: 13 }, (_, index) => (
                    <div key={index}>
                      <span>*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *</span>
                    </div>
                  ))
                }
              </div>
              <div className='ml-1'>
                {
                  Array.from({ length: 13 }, (_, index) => (
                    <div key={index}>
                      <span>*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *</span>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className=' w-full   p-6 '>
              {
                <div>
                  <span className='border-1 rounded-xl text-sm p-1'>{Box[2].boxhead}</span><br />
                  <h1 className='text-4xl mt-2'>{Box[2].boxdes}</h1> <br />
                  <button className='border rounded-2xl p-1 bg-orange-600'>More About us</button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage

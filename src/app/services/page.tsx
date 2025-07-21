import React from 'react'
import Box from '../Data/Box';
import CardData from '@/Components/CardData';
import TableData from '@/Components/TableData';
import SmallCardData from '@/Components/SmallCardData';
const ServicesPage = () => {
  return (
    <div>
      <div className='pl-15 pt-8'>
        <span className='text-xs border-2 rounded'>{Box[0].boxhead}</span>
        <h1 className='text-4xl'>{Box[0].boxdes}</h1>
      </div>

      <CardData />
      <TableData />

      <div className='pl-15 pt-8'>
        <span className='text-xs border-2 rounded'>{Box[1].boxhead}</span>
        <h1 className='text-4xl'>{Box[1].boxdes}</h1>
      </div>
      <div className='flex'>
        <div className='w-1/2 '>
          <SmallCardData />
        </div>
        <div className='w-1/2'>
          <div>
            <div className='border-1 p-6 flex flex-row'>
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
            <div className='p-6'>
              {
                <div>
                  <span className='border-1 rounded-xl text-sm p-1'>{Box[2].boxhead}</span><br />
                  <h1 className='text-4xl mt-2'>{Box[2].boxdes}</h1> <br />
                  <button className='border-1 rounded-2xl p-1 bg-orange-600'>More About us</button>
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

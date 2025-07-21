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
      <div>
        <span className=''>{Box[1].boxhead}</span>
        <h1>{Box[1].boxdes}</h1>
      </div>
      <TableData />
      <SmallCardData />
      <div>

        <div>
          <div>
            {
              Array.from({ length: 10 }, (_, index) => (
                <div key={index}>
                  <span>* * * * * * * * * * * * * * * * * * * * * * * * * * *</span>
                </div>
              ))
            }
          </div>
          <div >
            {
              <div>
                <span>{Box[2].boxhead}</span>
                <h1>{Box[2].boxdes}</h1>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage

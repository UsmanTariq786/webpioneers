import React from 'react'
import Box from '../Data/Box';
import CardData from '@/Components/CardData';
import TableData from '@/Components/TableData';
import SmallCardData from '@/Components/SmallCardData';
const ServicesPage = () => {
  return (
    <div>

      Services Page
      <div>
        <span>{Box[0].boxhead}</span>
        <h1>{Box[0].boxdes}</h1>
      </div>

      <CardData />
      <div>
        <span>{Box[1].boxhead}</span>
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

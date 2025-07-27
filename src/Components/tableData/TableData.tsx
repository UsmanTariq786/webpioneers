import React from 'react'
import tableData from '@/app/Data/tableData'
import Button1 from '../Button1'
function TableData() {
  return (
    <div>
      <div className='m-8'>
        {
          tableData.map((card, index) => (

            <div key={index}>
              <div className='flex flex-col items-center justify-center h-50 border'>
                <img src={card.image} alt="" className='w-15' />
                <br /><h1 className='text-4xl'>{card.heading}</h1>
              </div>
              <div className='grid grid-cols-1 w-full sm:flex sm:flex-wrap  border '>
                <div className=' w-full  sm:w-1/2  '>
                  <div className='border pl-5 '>
                    <span className=' m-3'>{card.sub1}</span>
                  </div>
                  <div className=' w-90 p-5 '>
                    <p className='text-2xl'>{card.description1}</p> <br />
                    <Button1 />
                  </div>
                </div>
                <div className='flex flex-col  sm:w-1/2 '>
                  <div className='  pl-5'>
                    <span>{card.sub2}</span>
                  </div>
                  <div className=''>
                    <ol className='list-decimal list-inside '>
                      {[card.des1, card.des2, card.des3, card.des4, card.des5, card.des6]
                        .filter((item) => item?.trim())
                        .map((item, index) => (
                          <li key={index} className='border p-3'>{item} </li>
                        ))

                      }

                    </ol>
                  </div>
                </div> <br />
                <div className='m-20'>
                  <img src={card.img} alt="" />
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

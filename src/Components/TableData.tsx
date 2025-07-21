import React from 'react'
import tableData from '@/app/Data/tableData'
import Button1 from './Button1'
function TableData() {
  return (
    <div>
      <div>
        {
          tableData.map((card, index) => (

            <div key={index}>
              <div className='flex flex-col items-center justify-center h-50 border-1'>
                <p>{card.image} </p>
                <br /><h1 className='text-4xl'>{card.heading}</h1>
              </div>
              <div className='flex flex-wrap  border-1'>

                <div className='w-1/2 '>
                  <div className='border-1 pl-5'>
                    <span className=' m-3'>{card.sub1}</span> 
                  </div>
                  <div className=' w-90 p-5 '>
                    <p className='text-2xl'>{card.description1}</p> <br />
                    <Button1 />
                  </div>
                </div>
                <div className='w-1/2 border-1'>
                  <div className='border-1 pl-5'>
                    <span>{card.sub2}</span>
                  </div>
                  <div className=''>
                    <ol className='list-decimal list-inside '>
                      {card.des1 && <li className='border-1 p-3'>{card.des1}</li>}
                      {card.des2 && <li className='border-1 p-3'>{card.des2}</li>}
                      {card.des3 && <li className='border-1 p-3'>{card.des3}</li>}
                      {card.des4 && <li className='border-1 p-3'>{card.des4}</li>}
                      {card.des5 && <li className='border-1 p-3'>{card.des5}</li>}
                      {card.des6 && <li className='border-1 p-3'>{card.des6}</li>}
                    </ol>

                  </div>
                </div> <br />
              </div>
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default TableData

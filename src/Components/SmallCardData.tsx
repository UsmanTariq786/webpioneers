import React from 'react'
import smallCard from '@/app/Data/SmallCardData'
function SmallCardData() {
  return (
    <div>
      <div className='flex flex-nowrap  overflow-x-auto sm:grid sm:grid-cols-2 '>
        {
          smallCard.map((card, index) => (
            <div key={index} className={`border`}>
              <div className={`p-5 m-5 bg-orange-600 rounded-2xl  ${index===0 ? 'h-[320px] sm:h-80' : " bg-zinc-700"} h-[320px] sm:h-60  `}>
                <span>{card.id}</span>
                <h2 className={`pt-15 text-2xl mb-2 ${index===0 ? 'mt-22' : ""}` }>{card.heading}</h2>
                <p className={`${index===1 ? "w-[170px]" : "w-[180px]"}`}>{card.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SmallCardData

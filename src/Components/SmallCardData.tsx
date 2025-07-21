import React from 'react'
import smallCard from '@/app/Data/SmallCardData'
function SmallCardData() {
  return (
    <div>
      <div className=' grid grid-cols-2 '>
        {
          smallCard.map((card, index) => (
            <div key={index} className={`border-1 `}>
              <div className={`p-5 m-5 bg-orange-600 rounded-2xl  ${index===0 ? 'h-80' : " bg-zinc-700"} ${index === 3 ? 'h-80 bg-amber-600': ""}`}>
                <span>{card.id}</span>
                <h2 className='pt-15 text-xl'>{card.heading}</h2>
                <p>{card.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SmallCardData

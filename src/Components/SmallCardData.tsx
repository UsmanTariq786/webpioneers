import React from 'react'
import smallCard from '@/app/Data/SmallCardData'
function SmallCardData() {
  return (
    <div>
      <div>
          {
            smallCard.map((card, index) => (
              <div key={index} style={{ background: "purple", marginTop: "10px" }}>
                <span>{card.id}</span>
                <h2>{card.heading}</h2>
                <p>{card.description}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default SmallCardData

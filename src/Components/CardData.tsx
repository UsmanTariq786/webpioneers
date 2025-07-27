import React from 'react'
import cardsData from '@/app/Data/CardData'

function CardData() {
    return (
        <div className="m-8">
            <div className="flex md:flex-wrap  flex-nowrap overflow-x-auto gap-4 md:grid md:grid-cols-4">
                {cardsData.map((card) => (
                    <div
                        key={card.id}
                        className="border p-6 shrink-0 w-4/5 sm:w-1/4 md:w-auto" 
                    >
                        <span>{card.id}</span><br />
                        <img src={card.image} alt="" className="w-20 mt-15 mb-7" />
                        <h3 className="text-xl mt-6">{card.title}</h3>
                        <p className="mt-2 ">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardData

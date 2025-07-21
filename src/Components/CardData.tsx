import React from 'react'
import cardsData from '@/app/Data/CardData'
function CardData() {
    return (
        <div>
            <div >
                {cardsData.map((card) => (
                    <div key={card.id}>
                        <span>{card.id}</span>
                        <span>{card.image}</span>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardData

import React from 'react'
import cardsData from '@/app/Data/CardData'
function CardData() {
    return (
        <div>
            <div className='flex flex-wrap mt-5 mb-5 ml-5'>
                {cardsData.map((card) => (
                    <div key={card.id} className='border-1 p-10 w-1/4 '>
                        <span className='pb-7'>{card.id}</span>
                        <span className='mb-38 block'>{card.image}</span>
                        <h3 className=' text-xl'>{card.title}</h3><br />
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardData

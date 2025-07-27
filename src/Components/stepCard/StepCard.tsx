import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CardProps {
  cardNumber: number
  title: string
  description: string
  image: string
}

const StepCard = ({ cardNumber, title, description, image }: CardProps) => (
  <article className="relative rounded-2xl bg-[#1a1a1a] p-6 text-white/90 h-[500px] flex flex-col items-center justify-center">
    
    <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 grid place-content-center
                     rounded-full bg-[#333] text-sm font-medium text-center">
      {cardNumber}
    </span>

    <h3 className="mt-6 mb-3 text-lg font-semibold">{title}</h3>
    <p className="text-sm mb-4 text-white/60">{description}</p>

    <Image
      src={image}
      alt={title}
      className="rounded-lg object-cover"
      width={360}
      height={200}
    />
  </article>
)

export default StepCard

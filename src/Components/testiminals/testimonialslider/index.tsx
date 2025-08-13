'use client'

import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import UserCard from '@/Components/UserCard'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Daniel',
    companyName: 'Art of Mondays',
    image: '/david.svg',
    quote: 'I can highly recommend you to anyone looking for a clean, conversion-focused redesign.',
  },
  {
    id: 2,
    name: 'Emily',
    companyName: 'Moonlight Studio',
    image: '/emily.svg',
    quote: 'Working with you was seamless. Our brand finally feels alive.',
  },
  {
    id: 3,
    name: 'Alex',
    companyName: 'Nova Corp',
    image: '/alex.svg',
    quote: 'A huge improvement over our previous design. Very happy with the results.',
  },
]

const TestimonialsSlider = () => {
  const sliderRef = useRef<Slider | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const settings = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    arrows: false, // disable default arrows
    dots: false, // disable default dots
    beforeChange: (_: number, next: number) => setActiveIndex(next),
  }

  const goToNext = () => {
    sliderRef.current?.slickNext()
  }

  const goToPrev = () => {
    sliderRef.current?.slickPrev()
  }

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index)
    setActiveIndex(index)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 text-white">
      {/* Slider section */}
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((t, idx) => (
          <div key={t.id +'ssssssgew3r'} className="px-2">
            <UserCard
              name={t.name}
              companyName={t.companyName}
              image={t.image}
              selected={idx === activeIndex}
            />
          </div>
        ))}
      </Slider>

      {/* Custom Text Section */}
      <div className="mt-6 text-center px-4 max-w-3xl mx-auto">
        <p
          style={{
            fontFamily: 'Rubik, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '27px',
            color: 'var(--Text-Tertiary, rgba(248, 248, 248, 0.5))',
          }}
        >
          “{testimonials[activeIndex].quote}”
        </p>
      </div>

      {/* Custom Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={goToPrev}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <Image src="/arrow-left.svg" alt="Previous" width={16} height={16} />
        </button>

        {/* Custom Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i+'okswskwksr3s'}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full ${
                i === activeIndex
                  ? 'bg-white'
                  : 'bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <Image src="/arrow-right.svg" alt="Next" width={16} height={16} />
        </button>
      </div>
    </div>
  )
}

export default TestimonialsSlider

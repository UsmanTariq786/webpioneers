'use client'

import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import UserCard from '../UserCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const Testimonials = () => {
  const sliderRef = useRef<Slider | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const onBeforeChange = (current: number, next: number) => {
    let dir: 'left' | 'right' = 'right'
    if (next === 0 && current === testimonials.length - 1) dir = 'right'
    else if (next === testimonials.length - 1 && current === 0) dir = 'left'
    else dir = next > current ? 'right' : 'left'

    setDirection(dir)
    setPrevIndex(current)
  }

  const onAfterChange = (current: number) => {
    setActiveIndex(current)
  }

  const goToIndex = (index: number) => {
    if (sliderRef.current) {
      let dir: 'left' | 'right' = 'right'
      if (index === 0 && activeIndex === testimonials.length - 1) dir = 'right'
      else if (index === testimonials.length - 1 && activeIndex === 0) dir = 'left'
      else dir = index > activeIndex ? 'right' : 'left'

      setDirection(dir)
      setPrevIndex(activeIndex)
      sliderRef.current.slickGoTo(index)
      setActiveIndex(index)
    }
  }

  const settings = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    arrows: false,
    dots: false,
    beforeChange: onBeforeChange,
    afterChange: onAfterChange,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerMode: false },
      },
    ],
  }

  // Width of the quote container matches maxWidth from your original style (960px)
  const quoteContainerWidth = 960

  // Calculate translateX for quote sliding effect
  const translateX = -activeIndex * quoteContainerWidth

  return (
    <div className="px-4 text-white">
      {/* Title Section */}
      <div className="flex flex-col items-center mb-10 text-center">
        <button className="font-rubik text-xs uppercase tracking-wider py-2 px-3 font-semibold text-white/80 border border-white/10 rounded-full">
          Testimonials
        </button>
        <p className="mt-4 font-rubik text-white/80 text-2xl sm:text-3xl md:text-[48px] leading-tight max-w-lg">
          Clients We’ve Worked With (and Impressed)
        </p>
      </div>

      {/* Slider Section */}
      <div className="flex justify-center">
        <div
          style={{
            padding: '30px',
            backgroundImage: 'url(/background.svg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            borderRadius: '30px',
            width: '100%',
            maxWidth: quoteContainerWidth,
          }}
        >
          <div
            style={{
              padding: '1.5px',
              borderRadius: '16px',
              background:
                'linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 0.000015) 50.59%, rgba(255, 255, 255, 0.000015) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)',
              boxShadow: `
                0px 5px 1.5px -4px rgba(5, 5, 5, 0.25),
                0px 6px 4px -4px rgba(5, 5, 5, 0.1),
                0px 6px 13px 0px rgba(5, 5, 5, 0.1),
                0px 24px 24px -16px rgba(5, 5, 5, 0.09),
                inset 2px 4px 16px 0px rgba(248, 248, 248, 0.06)
              `,
              backdropFilter: 'blur(100px)',
              WebkitBackdropFilter: 'blur(100px)',
            }}
          >
            <div
              style={{
                borderRadius: '14.5px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                overflow: 'hidden',
              }}
            >
              <Slider ref={sliderRef} {...settings}>
                {testimonials.map((t, idx) => (
                  <div key={`${t.id}-${idx}`} className="px-4 py-6">
                    <UserCard
                      name={t.name}
                      companyName={t.companyName}
                      image={t.image}
                      selected={idx === activeIndex}
                    />
                  </div>
                ))}
              </Slider>
                  {/* Quote sliding container */}
      <div
        style={{
          overflow: 'hidden',
          width: quoteContainerWidth,
          margin: '2rem auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems:'center',
            transition: 'transform 0.5s ease',
            transform: `translateX(${translateX}px)`,
            whiteSpace: 'nowrap',
            fontFamily: 'Rubik, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '27px',
            color: 'rgba(248, 248, 248, 0.5)',
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              style={{
                minWidth: quoteContainerWidth,
                padding: '0 20px',
                boxSizing: 'border-box',
                userSelect: 'none',
                textAlign: 'center',
              }}
            >
              “{t.quote}”
            </div>
          ))}
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>

  

      {/* Slider Navigation */}
      <div 
      className="flex items-center justify-center gap-4 mt-8"
        style={{
    // width: '200px',
     width: 'fit-content',
    margin: '2rem auto',
    padding: '8px',
    background: 'var(--Surface-Background, rgba(40, 40, 40, 0.7))',
    border: '1.5px solid',
    borderImageSource:
      'linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 0.000015) 50.59%, rgba(255, 255, 255, 0.000015) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)',
    backdropFilter: 'blur(100px)',
    WebkitBackdropFilter: 'blur(100px)',
    boxShadow: 'inset 2px 4px 16px 0px rgba(248, 248, 248, 0.06)',
    borderRadius: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
  }}
      >
        {/* <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <Image src="/arrow-left.svg" alt="Prev" width={16} height={16} />
        </button> */}
  <button
    onClick={() => sliderRef.current?.slickPrev()}
    style={{
    width: '40px',
    height: '40px',
    borderRadius: '32px',
    padding: '8px',
    borderWidth: '1.5px',
    borderStyle: 'solid',
    borderImageSource:
      'linear-gradient(158.39deg, rgba(255, 255, 255, 0.1) 14.19%, rgba(255, 255, 255, 0.000025) 50.59%, rgba(255, 255, 255, 0.000025) 68.79%, rgba(255, 255, 255, 0.025) 105.18%)',
    background: 'var(--neutral-neutral-210, rgba(248, 248, 248, 0.1))',
    backdropFilter: 'blur(100px)',
    WebkitBackdropFilter: 'blur(100px)', // for Safari support
    boxShadow: 'inset 2px 4px 16px rgba(248, 248, 248, 0.06)',
    opacity: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  
    }}
  >
    <img
      src="/arrowleft.svg"
      alt="Previous"
      style={{ transform: 'rotate(180deg)', width: '16px', height: '16px' }}
    />
  </button>
        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
  <button
    key={i}
    onClick={() => goToIndex(i)}
    style={{
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background:
        i === activeIndex
          ? 'var(--neutral-neutral-270, rgba(248, 248, 248, 0.7))'
          : 'var(--neutral-neutral-225, rgba(248, 248, 248, 0.25))',
    }}
  />
))}
        </div>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
          style={{
              width: '40px',
    height: '40px',
    borderRadius: '32px',
    padding: '8px',
    borderWidth: '1.5px',
    borderStyle: 'solid',
    borderImageSource:
      'linear-gradient(158.39deg, rgba(255, 255, 255, 0.1) 14.19%, rgba(255, 255, 255, 0.000025) 50.59%, rgba(255, 255, 255, 0.000025) 68.79%, rgba(255, 255, 255, 0.025) 105.18%)',
    background: 'var(--neutral-neutral-210, rgba(248, 248, 248, 0.1))',
    backdropFilter: 'blur(100px)',
    WebkitBackdropFilter: 'blur(100px)', // for Safari support
    boxShadow: 'inset 2px 4px 16px rgba(248, 248, 248, 0.06)',
    opacity: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
          }}
        >
          <img src="/arrowright.svg" alt="Next" style={{width: '16px', height: '16px'}} />
        </button>
      </div>
    </div>
  )
}

export default Testimonials

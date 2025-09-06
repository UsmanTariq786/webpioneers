'use client'

import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import CommonQuestion from '../commonQuestion'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserCardTestimonialResponsive from '../UserCardTestimonialResponsive/index';

const testimonials = [
  {
    id: 1,
    name: 'Ole Klovgaard',
    companyName: 'Co-Founder Headshots',
    image: '/testimonials/headshot.png',
    quote: 'I can highly recommend you to anyone looking for a clean, conversion-focused redesign. Great work all around. The process was smooth, and you really understood what the brand needed',
  },
  {
    id: 2,
    name: 'Daniel Refn',
    companyName: 'Section Store',
    image: '/testimonials/sectionstore.png',
    quote: 'These guys did a great job improving the layout and CRO sections of our Shopify app. The landing page design was spot on, and I’m looking forward to working with them again',
  },
  {
    id: 3,
    name: 'Richard Amat',
    companyName: 'Founder Vividora',
    image: '/testimonials/vivdora.png',
    quote: 'They designed the Vividora AI project from scratch, including the 3D editor and layout improvements. Super easy to work with and great at collaboration throughout',
  },
  {
    id: 4,
    name: 'Cristofer',
    companyName: 'Sync Thy Self',
    image: '/testimonials/cristofer.png',
    quote: 'After trying multiple designers, these guys finally nailed it. They redesigned my product visuals with a clean, Apple-like feel and I’m excited to work with them on my next store',
  },
  {
    id: 5,
    name: 'Pierluigi Giglio',
    companyName: 'GD International LLC',
    image:  '/testimonials/giglio.png',
    quote: 'They helped design my landing page for a new product launch and really understood the requirements. The process was smooth from start to finish and highly recommended',
  },
  {
    id: 6,
    name: 'Evan Bryce',
    companyName: 'Founder FSC Club',
    image:  '/testimonials/bryce.png',
    quote: 'Approached them through a friend’s referral and the design turned out great. They improved both our admin portal and mobile app and I’m glad I found them.',
  },
  {
    id: 7,
    name: 'Jai Howitt',
    companyName: 'Art of Mondays',
    image: '/testimonials/jai.png',
    quote: 'We needed a clear design direction for our Art of Mondays app and they handled it perfectly. Looking forward to more opportunities together',
  },
]

const TestimonialsResponsive = () => {
  const sliderRef = useRef<Slider | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const onBeforeChange = (current: number, next: number) => {
    let dir: 'left' | 'right' = 'right'
    if (next === 0 && current === testimonials.length - 1) dir = 'right'
    else if (next === testimonials.length - 1 && current === 0) dir = 'left'
    else dir = next > current ? 'right' : 'left'

    setDirection(dir)
    setPrevIndex(current)
    setIsTransitioning(true)
  }

  const onAfterChange = (current: number) => {
    setActiveIndex(current)
    setIsTransitioning(false)
  }

  const goToIndex = (index: number) => {
    if (sliderRef.current) {
      let dir: 'left' | 'right' = 'right'
      if (index === 0 && activeIndex === testimonials.length - 1) dir = 'right'
      else if (index === testimonials.length - 1 && activeIndex === 0) dir = 'left'
      else dir = index > activeIndex ? 'right' : 'left'

      setDirection(dir)
      setPrevIndex(activeIndex)
      setIsTransitioning(true)
      sliderRef.current.slickGoTo(index)
    }
  }

  const settings = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    infinite: true,
    variableWidth: true, // enable variable width
    speed: 500,
    arrows: false,
    dots: false,
    beforeChange: onBeforeChange,
    afterChange: onAfterChange,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, centerMode: false },
      },
    ],
  }

  return (
    <div className="px-4 text-white">
      {/* Title Section */}
      <div className="flex flex-col items-center mb-10 text-center mt-10">
        <CommonQuestion question='Testimonials'/>
        <p className="mt-4 font-rubik text-white/80 text-[28px] leading-[36px] md:text-[42px] md:leading-[56px] max-w-lg">
          Clients We've Worked With (and Impressed)
        </p>
      </div>

      {/* Slider Section */}
      <div className="flex justify-center">
        <div
          style={{
            padding: '20px',
            backgroundImage: 'url(/test-bg-resp.svg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            borderRadius: '30px',
            width: '100%',
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              padding: '1.5px',
              borderRadius: '16px',
            }}
          >
            <Slider className='h-[100px]' ref={sliderRef} {...settings}>
              {testimonials.map((t, idx) => (
                <div key={`${t.id}-${idx}`} className="px-2 py-6 w-[180px]">
                  <UserCardTestimonialResponsive
                    name={t.name}
                    companyName={t.companyName}
                    image={t.image}
                    selected={idx === activeIndex}
                  />
                </div>
              ))}
            </Slider>
            
            {/* Quote Container */}
            <div
              style={{
                borderRadius: '14.5px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                // background: 'linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 0.000015) 50.59%, rgba(255, 255, 255, 0.000015) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)',
                boxShadow: `
                  0px 5px 1.5px -4px rgba(5, 5, 5, 0.25),
                  0px 6px 4px -4px rgba(5, 5, 5, 0.1),
                  0px 6px 13px 0px rgba(5, 5, 5, 0.1),
                  0px 24px 24px -16px rgba(5, 5, 5, 0.09),
                  inset 2px 4px 16px 0px rgba(248, 248, 248, 0.06)
                `,
                backdropFilter: 'blur(100px)',
                WebkitBackdropFilter: 'blur(100px)',
                overflow: 'hidden',
                padding: '2rem 1rem',
                marginTop: '1rem',
              }}
            >
              <div className="w-full text-center min-h-[80px] flex items-center justify-center">
                <div
                  className="font-rubik text-[16px] leading-[25px] text-[rgba(248,248,248,0.5)] transition-opacity duration-500"
                  style={{
                    opacity: isTransitioning ? 0 : 1,
                  }}
                >
                  "{testimonials[activeIndex].quote}"
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
          width: 'fit-content',
          margin: '2rem auto',
          padding: '8px',
          background: 'var(--Surface-Background, rgba(40, 40, 40, 0.7))',
          border: '1.5px solid',
          borderImageSource: 'linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 0.000015) 50.59%, rgba(255, 255, 255, 0.000015) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)',
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
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '32px',
            padding: '8px',
            borderWidth: '1.5px',
            borderStyle: 'solid',
            borderImageSource: 'linear-gradient(158.39deg, rgba(255, 255, 255, 0.1) 14.19%, rgba(255, 255, 255, 0.000025) 50.59%, rgba(255, 255, 255, 0.000025) 68.79%, rgba(255, 255, 255, 0.025) 105.18%)',
            background: 'var(--neutral-neutral-210, rgba(248, 248, 248, 0.1))',
            backdropFilter: 'blur(100px)',
            WebkitBackdropFilter: 'blur(100px)',
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
                background: i === activeIndex
                  ? 'var(--neutral-neutral-270, rgba(248, 248, 248, 0.7))'
                  : 'var(--neutral-neutral-225, rgba(248, 248, 248, 0.25))',
              }}
            />
          ))}
        </div>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '32px',
            padding: '8px',
            borderWidth: '1.5px',
            borderStyle: 'solid',
            borderImageSource: 'linear-gradient(158.39deg, rgba(255, 255, 255, 0.1) 14.19%, rgba(255, 255, 255, 0.000025) 50.59%, rgba(255, 255, 255, 0.000025) 68.79%, rgba(255, 255, 255, 0.025) 105.18%)',
            background: 'var(--neutral-neutral-210, rgba(248, 248, 248, 0.1))',
            backdropFilter: 'blur(100px)',
            WebkitBackdropFilter: 'blur(100px)',
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

export default TestimonialsResponsive
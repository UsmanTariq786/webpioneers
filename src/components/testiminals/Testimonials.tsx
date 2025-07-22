import React from 'react'
import Reuse from '../ui/Reuse'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className="px-4">
      {/* Title Section */}
      <div className="flex flex-col items-center mb-10 text-center">
        <button className="font-rubik text-xs uppercase tracking-wider py-2 px-3 font-semibold text-white/80 border border-white/10 rounded-full">
          Testimonials
        </button>
        <p className="mt-4 font-rubik text-white/80 text-2xl sm:text-3xl md:text-[48px] leading-tight max-w-lg">
          Clients We’ve Worked With (and Impressed)
        </p>
      </div>

      {/* Overlapping Images Section */}
      <div className="relative flex justify-center items-center w-full max-w-5xl mx-auto">
        <Image
          src="/background.svg"
          alt="Background"
          width={600}
          height={400}
          className="w-full max-w-[600px] h-auto"
        />
        <Image
          src="/foreground.svg"
          alt="Foreground"
          width={500}
          height={300}
          className="absolute w-[80%] max-w-[500px] h-auto"
        />
      </div>

      {/* Slider Navigation */}
      <div className="flex items-center justify-center mt-7">
        <Image
          src="/navigation-indicator-container.svg"
          alt="navigation-indicator"
          width={200}
          height={200}
          className="w-[120px] sm:w-[160px] md:w-[200px] h-auto"
        />
      </div>
    </div>
  )
}

export default Testimonials

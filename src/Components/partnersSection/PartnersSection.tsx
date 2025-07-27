// components/PartnersSection.tsx
import Image from 'next/image'

const logos = [
  '/Frame7.png',
  '/Frame4.png',
  '/Frame3.png',
  '/Frame2.png',
  '/Frame8.png',
  '/Frame9.png',
  '/Frame10.png',
]

const PartnersSection = () => (
  <section className="py-12 text-white text-center">
    <h2 className="text-xs tracking-wider uppercase mb-6 text-gray-300">
      Our Partners in Growth
    </h2>

    <div className="flex flex-wrap items-center justify-center gap-6">
      {logos.map((logo, i) => (
        <Image
          key={logo}            
          src={logo}
          alt=""
          width={120}
          height={32}
          loading={i > 2 ? 'lazy' : undefined} 
          className={`
            opacity-70 hover:opacity-100 transition
            ${i > 2 ? 'hidden sm:block' : ''}
          `}
        />
      ))}
    </div>
  </section>
)

export default PartnersSection

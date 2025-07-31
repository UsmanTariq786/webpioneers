// components/PartnersSection.tsx
import Image from 'next/image'

const logos = [
  '/art.svg',
  '/rewind.svg',
  '/sectionstore.svg',
  '/vividora.svg',
  '/justthrive.svg',
  '/sync.svg',
  '/headshots.svg',
]

const PartnersSection = () => (
  <section className="py-8 text-center">
    
    <h2 className="text-[18px] leading-[24px] font-medium text-center align-middle text-[rgba(183,183,183,1)] font-['Rubik']">
  Our Partners in Growth
</h2>


   <div className="flex flex-wrap items-center justify-between px-6 mt-3">
  {logos.map((logo, i) => (
    <Image
      key={logo}
      src={logo}
      alt=""
      width={120}
      height={28}
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

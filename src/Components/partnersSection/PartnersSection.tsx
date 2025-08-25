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
    <h2 className="text-[16px] leading-[22px] font-medium text-center text-[rgba(183,183,183,1)] font-rubik">
      Our Partners in Growth
    </h2>

    {/* ✅ Horizontal scroll on mobile, wrap on larger screens */}
    <div className="flex overflow-x-auto xl:overflow-visible no-scrollbar gap-6 px-6 mt-[40px] xl:flex-wrap xl:justify-between">
      {logos.map((logo, i) => (
        <Image
          key={logo + 'whatlogisthis'}
          src={logo}
          alt="Partner logo"
          width={120}
          height={28}
          loading={i > 2 ? 'lazy' : undefined}
          className="opacity-70 hover:opacity-100 transition flex-shrink-0"
        />
      ))}
    </div>
  </section>
)

export default PartnersSection

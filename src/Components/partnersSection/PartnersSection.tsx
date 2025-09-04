// components/PartnersSection.tsx
import Image from "next/image";

const logos = [
  "/art.svg",
  "/rewind.svg",
  "/sectionstore.svg",
  "/vividora.svg",
  "/justthrive.svg",
  "/sync.svg",
  "/headshots.svg",
];

let mobileInfinity = [
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
];

const PartnersSection = () => (
  <section className="py-8 text-center">
    <h2 className="text-[16px] leading-[22px] font-medium text-center text-[rgba(183,183,183,1)] font-rubik">
      Our Partners in Growth
    </h2>

    <div className="hidden xl:flex flex-row overflow-x-auto xl:overflow-visible no-scrollbar gap-6 px-6 mt-[25px] md:mt-[40px] xl:flex-wrap xl:justify-between">
      {logos.map((logo, i) => (
        <div
          key={logo + "whatlogisthis"}
          className="w-[135px] h-[80px] flex items-center justify-center flex-shrink-0"
        >
          <Image
            src={logo}
            alt="Partner logo"
            width={135}
            height={80}
            loading={i > 2 ? "lazy" : undefined}
            className="object-contain opacity-70 hover:opacity-100 transition"
          />
        </div>
      ))}
    </div>
    <div className="flex flex-row xl:hidden overflow-x-auto xl:overflow-visible no-scrollbar gap-6 px-6 mt-[25px] md:mt-[40px] xl:flex-wrap xl:justify-between">
      {mobileInfinity.map((logo, i) => (
        <div
          key={logo + "whatlogisthismobile"+i}
          className="w-[135px] h-[80px] flex items-center justify-center flex-shrink-0"
        >
          <Image
            src={logo}
            alt="Partner logo"
            width={135}
            height={80}
            loading={i > 2 ? "lazy" : undefined}
            className="object-contain opacity-70 hover:opacity-100 transition"
          />
        </div>
      ))}
    </div>
  </section>
);

export default PartnersSection;

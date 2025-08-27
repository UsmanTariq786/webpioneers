import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  cardNumber: number;
  title: string;
  description: string;
  image: string;
  resImage:string
}

const StepCard = ({ cardNumber, title, description, image,resImage }: CardProps) => (
  <div className="relative">
    {cardNumber === 2 && (
      <div className="absolute top-[-40px] hidden md:block">
        <Image
          src="/borderstyleimg.svg"
          alt={title}
          width={360}
          height={200}
          className="rounded-lg object-contain w-full"
        />
      </div>
    )}

    {cardNumber === 1 && (
      <div className="absolute top-[-40px] md:hidden">
        <Image
          src="/borderstyleimg.svg"
          alt={title}
          width={200}
          height={200}
          className="rounded-lg object-contain w-full"
        />
      </div>
    )}
    <div
      style={{
        borderRadius: '32px',
        padding: '1.5px',
        background: 'linear-gradient(158.39deg, rgba(255, 255, 255, 0.4) 15%, rgba(255, 255, 255, 0.1) 85%)',
        backdropFilter: 'blur(100px)',
        width: '65px',
        height: '40px',
        position: 'absolute',
        zIndex: 10,
        top: "8px",
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        style={{
          borderRadius: 'inherit',
          background: 'rgba(40, 40, 40, 0.7)',
          padding: '0', // Remove inner padding to keep exact dimensions
          width: '100%',
          height: '100%',
          backdropFilter: 'blur(100px)',
          boxShadow: 'inset 2px 4px 16px rgba(255, 255, 255, 0.03)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: 'rgba(248, 248, 248, 0.95)',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          {cardNumber}
        </span>
      </div>
    </div>




    <div
      style={{
        border: "1.5px solid transparent",
        // borderImage: `linear-gradient(158.39deg, rgba(255,255,255,0.12), rgba(255,255,255,0))`,
        // borderImageSlice: 1,
        background: "rgba(248, 248, 248, 0.02)",
        boxShadow: `
      0px 5px 1.5px -4px rgba(5, 5, 5, 0.25),
      0px 6px 4px -4px rgba(5, 5, 5, 0.1),
      0px 6px 13px 0px rgba(5, 5, 5, 0.1),
      0px 24px 24px -16px rgba(5, 5, 5, 0.09),
      inset 2px 4px 16px 0px rgba(248, 248, 248, 0.06)
    `,
        backdropFilter: "blur(100px)",
        borderRadius: "40px",
        clipPath: "inset(0 round 40px)",
        overflow: "hidden", /* ensures child content stays clipped */
        textAlign: "center",
      }}
      className="block md:hidden"
    >

      <div className="w-[100%] mx-auto">
        <h3
          className="
    font-rubik        /* custom font, explained below */
    font-medium 
    mt-[50px]       /* font-weight: 500 */
    text-[20px]        /* font-size */
    leading-[24px]     /* line-height */
    tracking-normal    /* letter-spacing: 0% */
   
  "
          style={{ color: "rgba(248, 248, 248, 0.95)" }}
        >
          {title}
        </h3>
        <p
          className="font-rubik font-normal mt-[15px] max-w-[220px] text-[16px] leading-[24px] tracking-normal text-[rgba(248,248,248,0.5)] mb-[20px] mx-auto min-h-[74px]"
        >
          {description}
        </p>
      </div>
      <Image
        src={resImage}
        alt={title}
        layout="responsive" // makes the image responsive to container width
        width={360} // intrinsic width (aspect ratio)
        height={200} // intrinsic height (aspect ratio)
        className="rounded-lg object-contain w-full" // w-full for full container width
      />
    </div>

    <div
    className="
    hidden md:block relative rounded-[40px] overflow-hidden 
    text-center p-0
    bg-[url('/home-card-mobile-bg.png')] bg-cover bg-center bg-no-repeat 
    bg-[rgba(248,248,248,0.02)] 
    backdrop-blur-[100px]
    shadow-[0px_5px_1.5px_-4px_rgba(5,5,5,0.25),
            0px_6px_4px_-4px_rgba(5,5,5,0.1),
            0px_6px_13px_0px_rgba(5,5,5,0.1),
            0px_24px_24px_-16px_rgba(5,5,5,0.09),
            2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]
    border-[1.5px] border-transparent
    before:content-[''] before:absolute before:inset-0 before:rounded-[40px] 
    before:p-[1.5px] before:bg-[linear-gradient(158.39deg,rgba(255,255,255,0.06)_14.19%,rgba(255,255,255,0.000015)_50.59%,rgba(255,255,255,0.000015)_68.79%,rgba(255,255,255,0.015)_105.18%)] before:pointer-events-none
  "

    >

      <div className="w-[100%] mx-auto">
        <h3
          className="
    font-rubik        /* custom font, explained below */
    font-medium 
    mt-[50px]       /* font-weight: 500 */
    text-[20px]        /* font-size */
    leading-[24px]     /* line-height */
    tracking-normal    /* letter-spacing: 0% */
   
  "
          style={{ color: "rgba(248, 248, 248, 0.95)" }}
        >
          {title}
        </h3>
        <p
          className=" font-rubik font-normal mt-[15px] text-[14px] leading-[22px] tracking-normal text-[rgba(248,248,248,0.5)] max-w-[200px] mb-[20px] mx-auto min-h-[74px]"
        >
          {description}
        </p>
      </div>
      <Image
        src={image}
        alt={title}
        layout="responsive" // makes the image responsive to container width
        width={360} // intrinsic width (aspect ratio)
        height={200} // intrinsic height (aspect ratio)
        className="rounded-lg object-contain w-full" // w-full for full container width
      />
    </div>

  </div>
);

export default StepCard;

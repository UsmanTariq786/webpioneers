import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  cardNumber: number;
  title: string;
  description: string;
  image: string;
}

const StepCard = ({ cardNumber, title, description, image }: CardProps) => (
  <div className="relative">
    {/* <div
      style={{
        width: "65px",
        height: "40px",
        position: "absolute",
        zIndex: 10,

        top: 0,
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="absolute inset-0 rounded-[32px] z-0"
        style={{
          background:
            "linear-gradient(158.39deg, rgba(255, 255, 255, 0.1) 14.19%, rgba(255, 255, 255, 0.000025) 50.59%, rgba(255, 255, 255, 0.000025) 68.79%, rgba(255, 255, 255, 0.025) 105.18%)",
          padding: "2px",
          boxShadow: `2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset, 
           0px 0px 0px 2px var(--NeutralNeutral420)`,
          backdropFilter: "blur(100px)",
          WebkitBackdropFilter: "blur(100px)",
        }}
      >
        <div
          className="w-full h-full rounded-[32px]"
          style={{
            background:
              "linear-gradient(0deg, var(--neutral-neutral-370, rgba(40, 40, 40, 0.7)), var(--neutral-neutral-370, rgba(40, 40, 40, 0.7))), linear-gradient(0deg, var(--neutral-neutral-210, rgba(248, 248, 248, 0.1)), var(--neutral-neutral-210, rgba(248, 248, 248, 0.1)))",
          }}
        />
      </div>

      <div
        className={`relative z-10 flex justify-center items-center w-full h-full rounded-[32px] transition-colors`}
      >
        <span
          style={{
            color: "rgba(248, 248, 248, 0.95)",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          {cardNumber}
        </span>
      </div>
    </div> */}
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
        top: 0,
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
        borderImage: `linear-gradient(158.39deg, rgba(255,255,255,0.12), rgba(255,255,255,0))`,
        borderImageSlice: 1,
        background: "rgba(248, 248, 248, 0.02)",
        // padding: '40px',
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
        overflow: "visible",
        textAlign: "center",
      }}
    >
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
        className=" font-rubik font-normal mt-[15px] text-[16px] leading-[24px] tracking-normal text-[rgba(248,248,248,0.5)] w-[90%] xl:w-[292px] mb-[20px] mx-auto min-h-[74px]"
      >
        {description}
      </p>

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

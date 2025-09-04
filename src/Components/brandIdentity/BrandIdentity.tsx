import React from "react";
import Button from "../button/Button";
import Image from "next/image";
import CommonQuestion from "@/Components/commonQuestion";
import Smallcard from "../smallcard/smallcard";
import WebCard from "../webCard/WebCard";
import ButtonAllServices from "./buttonAllServices";


const BrandIdentity = () => {
 
  return (
    <section className="py-[50px]">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-10 text-center">
        <CommonQuestion question="WHAT WE OFFER" />

        <p className="w-[90%] text-[32px] leading-[40px] md:text-[42px] md:leading-[56px] font-normal font-['Rubik'] text-center tracking-[-0.02em]
          bg-[linear-gradient(92.95deg,_rgba(248,248,248,0.9)_0.1%,_rgba(248,248,248,0.5)_100.1%)]
          bg-clip-text text-transparent max-w-[550px] mt-[20px]">
          Everything you need <br />(and nothing you don’t)
        </p>

        <div className="mt-7">
          <ButtonAllServices/>
        </div>
      </div>

      {/* Article Section */}
      <section
      style={{
        background: `
          linear-gradient(180deg, rgba(248, 248, 248, 0.02) 0%, rgba(248, 248, 248, 0.0002) 100%),
          linear-gradient(123.8deg, rgba(248, 248, 248, 0.03) 0%, rgba(248, 248, 248, 0) 46.5%)`,
        borderImageSource: `
          linear-gradient(
            158.39deg,
            rgba(255, 255, 255, 0.06) 14.19%,
            rgba(255, 255, 255, 0.000015) 50.59%,
            rgba(255, 255, 255, 0.000015) 68.79%,
            rgba(255, 255, 255, 0.015) 105.18%
          )`,
        borderImageSlice: 1,
      }}
      className="relative mt-10 mb-[30px] w-[90%] mx-auto flex flex-col sm:flex-row rounded-[30px] items-center min-h-[456px]"
    >
      {/* Left Web Card */}
      <div className="w-full md:w-[30%] lg:w-[50%] flex flex-col md:flex-row xl:flex-row md:gap-4 justify-end lg:justify-center">
      <WebCard
         image="/advice-step-icon-container.png"
         title="Brand guidelines"
         description="We help shape your brand’s personality and build a visual style that actually feels like you."
       />
         {/* Image only for mobile/tablet, hidden on xl */}
         <div className='block md:hidden pb-[46px]'>
         <Image
              src="/homePage/ServicesMobile/1.png"
              width={310}
              height={370}
              alt="Decorative"
              className="object-contain w-full mt-6 px-2"
            />
          </div>
      </div>

      {/* Right Section: Logos + Code Image */}
      <div
        className="hidden md:flex gap-4 w-full md:w-[70%] lg:w-[50%] p-10 justify-end lg:justify-center"
        style={{ background: "url('/web-star.svg')" }}
      >

        {/* Main Code Image */}
        <div className="relative flex justify-center md:justify-end items-start">
          <Image
            src="/homePage/ServicesDesktop/1.png"
            width={470}
            height={400}
            alt="Code"
          />
        </div>
      </div>
    </section>
    </section>
  );
};

export default BrandIdentity;


































// <div
// className="rounded-[30px] w-[90%] mx-auto"
// style={{
//   background:
//     "linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 0.000015) 50.59%, rgba(255, 255, 255, 0.000015) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)",
// }}
// >
// <div
//   className="rounded-[30px] flex pb-[0px] xl:pb-[70px]"
//   style={{
//     background:
//       "linear-gradient(180deg, rgba(116, 47, 47, 0.02) 0%, rgba(248, 248, 248, 0.0002) 100%), linear-gradient(123.8deg, rgba(248, 248, 248, 0.03) 0%, rgba(248, 248, 248, 0) 46.5%)",
//   }}
// >

//   <div className="w-full xl:w-[30%] flex flex-col md:flex-row xl:flex-row md:gap-4 justify-end">
 
//     <WebCard
//       image="/advice-step-icon-container.png"
//       title="Brand guidelines"
//       description="We help shape your brand’s personality and build a visual style that actually feels like you."
//     />


//   <div className='block xl:hidden pb-[46px]'>
//     <Image
//       src="/main-container-content-res.svg"
//       width={310}
//       height={370}
//       alt="Decorative"
//       className="object-contain w-full mt-6 px-2"
//     />
//     </div>
//   </div>



//   <div className="hidden xl:flex w-[70%] justify-center px-[4%] pr-[1%] pl-[15%] py-[3%] bg-[url('/Stars.svg')] bg-no-repeat bg-cover">
//     <div
//       className="relative w-[500px] h-[319px] bg-center bg-no-repeat bg-contain"
//       style={{ backgroundImage: "url('/maincontainer.svg')"}}
//     >
 
//       <div className="absolute top-[-15px] right-[-42px] flex rounded-[64px] p-[12px_24px_6px_12px]"
//         style={{
//           backdropFilter: "blur(32px)",
//           WebkitBackdropFilter: "blur(32px)",
//           boxShadow: "2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset, 0px 24px 32px -12px var(--NeutralNeutral410)",
//           background: "var(--neutral-neutral-110, rgba(255, 255, 255, 0.1))",
//         }}>
//         <Image src="/designsystem.svg" width={44} height={44} alt="Brand icon" className="rounded-full"/>
//         <p className="pt-[1px] text-[16px] leading-[24px] font-medium text-[rgba(248,248,248,0.95)] font-['Rubik']">
//           Design System
//         </p>
//       </div>

   
//       <div className="absolute top-[42px] left-[-86px] flex rounded-[64px] p-[12px_24px_6px_12px]"
//         style={{
//           backdropFilter: "blur(32px)",
//           WebkitBackdropFilter: "blur(32px)",
//           boxShadow: "2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset, 0px 24px 32px -12px var(--NeutralNeutral410)",
//           background: "var(--neutral-neutral-110, rgba(255, 255, 255, 0.1))",
//         }}>
//         <Image src="/brand-icon-home.svg" width={44} height={44} alt="Brand icon" className="rounded-full" />
//         <p className=" pt-[1px] text-[16px] leading-[24px] font-medium text-[rgba(248,248,248,0.95)] font-['Rubik']">
//           Brand Book
//         </p>
//       </div>

    
//       <div
//         className="absolute bottom-[-50px] left-[-30px] w-[226px] h-[204px] rounded-[32px]"
//         style={{
//           background:
//             "linear-gradient(158.39deg, rgba(255, 255, 255, 0.12) 14.19%, rgba(255, 255, 255, 0.04) 50.59%, rgba(255, 255, 255, 0.04) 68.79%, rgba(255, 255, 255, 0.06) 105.18%)",
//         }}
//       >
//         <div
//           className="relative w-full h-full rounded-[31px] p-[10px] overflow-hidden"
//           style={{
//             background: "var(--neutral-neutral-25, rgba(248, 248, 248, 0.05))",
//             backdropFilter: "blur(100px)",
//             WebkitBackdropFilter: "blur(100px)",
//             boxShadow: "2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset, 0px 24px 32px -12px var(--NeutralNeutral410)",
//           }}
//         >
//           <img src="/icons.svg" width="100%" height="100%" alt="icons" />
//           <img src="/colors.svg" width="100%" height="100%" style={{ marginTop: "10px" }} alt="colors" />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
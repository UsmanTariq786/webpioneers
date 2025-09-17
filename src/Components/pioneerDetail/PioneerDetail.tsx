// "use client";
// import React, { useState } from "react";
// import Button from "../button/Button";
// import CommonQuestion from "../commonQuestion";
// import { useRouter } from "next/navigation";
// import NewCustomChip from "../NewCustomChip/index";
// import RoundCornerWrapper from "../RoundCornerWrapper";
// import Image from "next/image";

// const PioneerDetail = () => {
//   const [selectedChip, setSelectedChip] = useState<string>();
//   const router = useRouter();
//   const handleChipSelect = (value: string) => {
//     if (value === selectedChip) {
//       return;
//     }
//     setSelectedChip(value);
//     console.log("Selected chip:", value);
//   };

//   const chipdata = [
//     "Curiosity",
//     "Kindness",
//     "Culture",
//     "Transparency",
//     "Originality",
//     "Code",
//     "Commitment",
//     "Quality",
//     "People",
//     "CRO",
//     "Design",
//     "Transformation",
//   ];

//   // Manually slice the chipdata into 4 rows of 3 chips each
//   const rows = [];
//   for (let i = 0; i < chipdata.length; i += 3) {
//     rows.push(chipdata.slice(i, i + 3));
//   }

//   return (
//     <section className="flex flex-col lg:flex-row items-start justify-center mx-auto">
//       {/* Left Side - Image */}
//       <RoundCornerWrapper top={false} left={false}>
//         <div
//           className="w-[100%] min-w-[340px] md:min-w-[390px] p-5 py-[40px] md:px-[15px] md:py-[60px]"
//           style={{
//             boxSizing: "border-box",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <div className="w-[100%] max-w-[400px] flex flex-col gap-2">
//             {rows.map((row, rowIndex) => (
//               <div key={`row-${rowIndex}`} className="flex gap-2 justify-center">
//                 {row.map((item, colIndex) => {
//                   const index = rowIndex * 3 + colIndex;
//                   return (
//                     <div
//                       key={"chipbox" + index}
//                       className="flex-shrink-0 inline-flex"
//                       style={{ marginRight: "5px" , marginBottom: "5px" }}
//                     >
//                       <div className="h-[43px] md:h-[48px] lg:h-[58px]">
//                         <Image
//                           src={`/chips/${index + 1}.png`}
//                           alt={item}
//                           width={100}
//                           height={58}
//                           style={{ objectFit: "contain", width: "auto", height: "100%" }}
//                         />
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             ))}
//           </div>
//         </div>
//       </RoundCornerWrapper>

//       {/* Right Side - Text Content */}
//       <section className="flex flex-col lg:flex-row items-start justify-center mx-auto">
//         <div className="w-full flex-col justify-start p-[20px] md:p-[40px] md:py-[50px] py-[40px]">
//           <div className="">
//             <CommonQuestion question="our vibe" />
//           </div>
//           <p className="font-rubik text-[26px] md:text-[32px] md:leading-[40px] tracking-[-0.02em] font-normal bg-[linear-gradient(92.95deg,rgba(248,248,248,0.9)_0%,rgba(248,248,248,0.5)_100%)] text-transparent bg-clip-text my-3 rounded-xl">
//             We help brands grow by designing smooth, smart experiences people actually enjoy using.
//           </p>

//           <div className="pt-2">
//             <Button title="More about us" onClick={() => router.push("/about")} />
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default PioneerDetail;


"use client";
import React, { useState } from "react";
import Button from "../button/Button";
import CommonQuestion from "../commonQuestion";
import { useRouter } from "next/navigation";
import NewCustomChip from "../NewCustomChip/index";
import RoundCornerWrapper from "../RoundCornerWrapper";
import Image from "next/image";

const PioneerDetail = () => {
  const [selectedChip, setSelectedChip] = useState<string>();
  const router = useRouter();
  const handleChipSelect = (value: string) => {
    if (value === selectedChip) {
      return;
    }
    setSelectedChip(value);
    console.log("Selected chip:", value);
  };

  const chipdata = [
    "Curiosity",
    "Kindness",
    "Culture",
    "Transparency",
    "Originality",
    "Code",
    "Commitment",
    "Quality",
    "People",
    "CRO",
    "Design",
    "Transformation",
  ];

  // Manually slice chipdata into 4 rows of 3 chips each
  const rows = [];
  for (let i = 0; i < chipdata.length; i += 3) {
    rows.push(chipdata.slice(i, i + 3));
  }

  return (
    <section className="flex flex-col lg:flex-row items-start justify-center mx-auto">
      {/* Left Side - Image */}
      <RoundCornerWrapper top={false} left={false}>
        <div
          className="w-[100%] min-w-[340px] md:min-w-[390px] p-5 py-[40px] md:px-[15px] md:py-[60px]"
          style={{
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="w-[100%] max-w-[400px] flex flex-col gap-2">
            {rows.map((row, rowIndex) => (
              <div
                key={`row-${rowIndex}`}
                className="flex flex-nowrap gap-2 justify-center"
                style={{ boxSizing: "border-box" }}
              >
                {row.map((item, colIndex) => {
                  const index = rowIndex * 3 + colIndex;
                  return (
                    <div
                      key={"chipbox" + index}
                      className="flex flex-shrink-0"
                      style={{
                        minWidth: "60px", // Minimum width to prevent tiny chips
                        maxWidth: "calc(33.33% - 10px)", // Max width to fit 3 chips
                        marginRight: "5px",
                        marginBottom: "5px",
                      }}
                    >
                      <div className="h-[43px] md:h-[48px] lg:h-[58px]">
                        <Image
                          src={`/chips/${index + 1}.png`}
                          alt={item}
                          width={100}
                          height={58}
                          style={{
                            objectFit: "contain",
                            width: "auto",
                            height: "100%",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </RoundCornerWrapper>

      {/* Right Side - Text Content */}
      <section className="flex flex-col lg:flex-row items-start justify-center mx-auto">
        <div className="w-full flex-col justify-start p-[20px] md:p-[40px] md:py-[50px] py-[40px]">
          <div className="">
            <CommonQuestion question="our vibe" />
          </div>
          <p className="font-rubik text-[26px] md:text-[32px] md:leading-[40px] tracking-[-0.02em] font-normal bg-[linear-gradient(92.95deg,rgba(248,248,248,0.9)_0%,rgba(248,248,248,0.5)_100%)] text-transparent bg-clip-text my-3 rounded-xl">
            We help brands grow by designing smooth, smart experiences people actually enjoy using.
          </p>
          <div className="pt-2">
            <Button title="More about us" onClick={() => router.push("/about")} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default PioneerDetail;
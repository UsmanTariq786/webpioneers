// import React from 'react';

// interface RoundCornerWrapperProps {
//   children: React.ReactNode;
//   top?: boolean
//   bottom?: boolean
// }

// const RoundCornerWrapper: React.FC<RoundCornerWrapperProps> = ({ children,top=true,bottom=true }) => {

//   let wrapperObject = {
//     'topZero':  <div className="relative w-full  border border-[#373737] border-t-0">
//                 <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -left-[5px]"></div>
//                 <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>
//                 {children}
//                 </div>,

//     'bottomZero': <div className="relative w-full  border border-[#373737] border-b-0">
//                  <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -left-[5px]"></div>
//                  <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px]"></div>
//                  {/* <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -left-[5px]"></div>
//                  <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div> */}
//                      {children}
//                </div>  ,
//           'topBottomZero':     <div className="relative w-full  border border-[#373737] border-b-0">
//           {/* <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -left-[5px]"></div> */}
//           {/* <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px]"></div> */}
//           {/* <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -left-[5px]"></div>
//           <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div> */}
//               {children}
//         </div> 
//   }



//   return (<>
  
//   {
//     top=== false && bottom === false ? wrapperObject['topBottomZero'] :
//     top === false ? wrapperObject['topZero'] : 
//     bottom === false ? wrapperObject['bottomZero'] :
//     <div className="relative w-full  border border-[#373737]">
//       <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -left-[5px]"></div>
//       <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px]"></div>
//       <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -left-[5px]"></div>
//       <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>
//           {children}
//     </div>
  
//   }
    
//     </>);
// };

// export default RoundCornerWrapper;





import React from 'react';

interface RoundCornerWrapperProps {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  dotTopLeft?: boolean;
  dotTopRight?: boolean;
  dotBottomLeft?: boolean;
  dotBottomRight?: boolean;
  className?: string; // 👈 1. Add className prop to the interface
}

const RoundCornerWrapper: React.FC<RoundCornerWrapperProps> = ({
  children,
  top = true,
  bottom = true,
  left = true,
  right = true,
  dotTopLeft = true,
  dotTopRight = true,
  dotBottomLeft = true,
  dotBottomRight = true,
  className = '', // 👈 2. Destructure and set a default value
}) => {
  // Base class with dynamic border sides
  const baseClasses = `relative w-full border border-[#373737] ${
    !top ? 'border-t-0' : ''
  } ${!bottom ? 'border-b-0' : ''} ${!left ? 'border-l-0' : ''} ${
    !right ? 'border-r-0' : ''
  }`;

  // 3. Combine baseClasses with the passed className
  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <div className={combinedClasses}>
      {/* Top-Left Dot */}
      {dotTopLeft && (
        <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -left-[5px]" />
      )}
      {/* Top-Right Dot */}
      {dotTopRight && (
        <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px]" />
      )}
      {/* Bottom-Left Dot */}
      {dotBottomLeft && (
        <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -left-[5px]" />
      )}
      {/* Bottom-Right Dot */}
      {dotBottomRight && (
        <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]" />
      )}
      {children}
    </div>
  );
};

export default RoundCornerWrapper;
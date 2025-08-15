import React from 'react';

interface RoundCornerWrapperProps {
  children: React.ReactNode;
  top?: boolean
  bottom?: boolean
}

const RoundCornerWrapper: React.FC<RoundCornerWrapperProps> = ({ children,top=true,bottom=true }) => {

  let wrapperObject = {
    'topZero':  <div className="relative w-full  border border-[#373737] border-t-0">
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -left-[5px]"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>
                {children}
                </div>,

    'bottomZero': <div className="relative w-full  border border-[#373737] border-b-0">
                 <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -left-[5px]"></div>
                 <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px]"></div>
                 {/* <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -left-[5px]"></div>
                 <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div> */}
                     {children}
               </div>  ,
          'topBottomZero':     <div className="relative w-full  border border-[#373737] border-b-0">
          {/* <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -left-[5px]"></div> */}
          {/* <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px]"></div> */}
          {/* <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -left-[5px]"></div>
          <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div> */}
              {children}
        </div> 
  }



  return (<>
  
  {
    top=== false && bottom === false ? wrapperObject['topBottomZero'] :
    top === false ? wrapperObject['topZero'] : 
    bottom === false ? wrapperObject['bottomZero'] :
    <div className="relative w-full  border border-[#373737]">
      <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -left-[5px]"></div>
      <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px]"></div>
      <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -left-[5px]"></div>
      <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>
          {children}
    </div>
  
  }
    
    </>);
};

export default RoundCornerWrapper;

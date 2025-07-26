import React from 'react';

interface RoundCornerWrapperProps {
  children: React.ReactNode;
}

const RoundCornerWrapper: React.FC<RoundCornerWrapperProps> = ({ children }) => {
  return (
    <div className="relative w-full  border border-[#373737]">
      <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -left-[5px]"></div>
      <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px]"></div>
      <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -left-[5px]"></div>
      <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>
          {children}
    </div>
  );
};

export default RoundCornerWrapper;

import React from "react";

type ProgressBarProps = {
  progress: number; // percentage (0 - 100)
};

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="flex items-center justify-center w-full py-8">
      <div className="w-[152px] bg-[#3a3a3a] rounded-full h-[6px] overflow-hidden">
        <div
          className="bg-[#e4572e] h-[6px] rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

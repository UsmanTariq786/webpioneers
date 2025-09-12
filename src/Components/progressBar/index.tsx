'use client'

import React, { useEffect, useState } from "react";

// The new HorizontalScrollbar component
type HorizontalScrollbarProps = {
  // This is the correct type. It says the ref object itself can contain either
  // an HTMLDivElement or null.
  scrollableRef: React.RefObject<HTMLDivElement | null>;
};

const ProgressBar = ({ scrollableRef }: HorizontalScrollbarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = scrollableRef?.current;
    if (!element) return;

    const handleScroll = () => {
      // Calculate scroll progress
      const scrollLeft = element.scrollLeft;
      const scrollWidth = element.scrollWidth - element.clientWidth;
      const currentProgress = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
      setProgress(currentProgress);
    };

    // Add scroll listener
    element.addEventListener("scroll", handleScroll);

    // Initial check in case of pre-filled scroll position
    handleScroll();

    // Cleanup the event listener
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [scrollableRef]);

  // Define a constant for the minimum width
  const MIN_WIDTH_PERCENTAGE = 15;
  
  // Ensure the progress is never below the minimum width
  const calculatedWidth = Math.max(MIN_WIDTH_PERCENTAGE, progress);

  return (
    <div className="flex items-center justify-center w-full py-8">
      <div className="w-full max-w-[152px] bg-[#3a3a3a] rounded-full h-[6px] overflow-hidden">
        <div
          className="bg-[#e4572e] h-[6px] rounded-full transition-all duration-200 ease-linear"
          style={{ width: `${calculatedWidth}%` }}
        ></div>
      </div>
    </div>
  );
};


export default ProgressBar

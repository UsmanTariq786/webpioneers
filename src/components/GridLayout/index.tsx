"use client";

import { useEffect, useRef } from "react";

const GridLayout = ({ children }: { children: React.ReactNode }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (grid) {
      const handleResize = () => {
        // Ensure grid lines adapt to container size (optional dynamic adjustment)
        grid.style.backgroundSize = "50px 50px"; // Adjust grid size as needed
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div
      ref={gridRef}
      className="min-h-screen bg-dark-bg text-white relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, ${"#33333333"} 1px, transparent 1px), 
                          linear-gradient(to bottom, ${"#33333333"} 1px, transparent 1px)`,
        backgroundSize: "50px 50px",
      }}
    >
      <div className="container mx-auto p-6">
        {children}
      </div>
    </div>
  );
};

export default GridLayout;
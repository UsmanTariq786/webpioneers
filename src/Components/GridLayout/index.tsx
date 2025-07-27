"use client";

import { useEffect, useRef } from "react";

const GridLayout = ({ children }: { children: React.ReactNode }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (grid) {
      grid.style.backgroundSize = "50px 50px";
    }
  }, []);

  return (
    <div
      ref={gridRef}
      style={{
        minHeight: "100vh",
        backgroundColor: "#1A1A1A",
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `linear-gradient(to right, rgba(51, 51, 51, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(51, 51, 51, 0.2) 1px, transparent 1px)`,
      }}
    >
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          padding: "1.5rem",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GridLayout;
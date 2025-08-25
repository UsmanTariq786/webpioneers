"use client";

import rubik from "@/app/fonts";

interface ChipProps {
  label: string;
  value: string;
  isSelected: boolean;
  onSelect: (value: string) => void;
}

const Chip = ({ label, value, isSelected, onSelect }: ChipProps) => {
  const handleClick = () => {
    onSelect(value);
  };

  return (
    <button
      onClick={handleClick}
      className={`${rubik.className} relative flex items-center justify-center px-[0.9rem] py-[0.7rem] md:px-[1.3rem] md:py-[1rem] text-[0.875rem] font-[600] cursor-pointer text-nowrap transition-all duration-200 rounded-full overflow-hidden`}
    >
      {/* Background (Selected = solid orange, Not selected = bg image) */}
      <span
        className={`absolute inset-0 -z-10 rounded-full ${
          isSelected
            ? "bg-[var(--color-accent-orange)]"
            : "bg-[url('/chip-bg.png')] bg-cover bg-center"
        }`}
      />

      {/* Label */}
      <span
        className={`relative z-10 ${
          isSelected ? "text-[var(--color-white)]" : "text-[#B0B0B0]"
        }`}
      >
        {label}
      </span>
    </button>
  );
};

export default Chip;

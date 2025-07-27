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
      className={`${rubik.className} px-[0.7rem] py-[0.8rem] rounded-full text-[0.875rem] font-[600] cursor-pointer text-nowrap      transition-colors duration-200 ${
        isSelected
          ? "bg-[var(--color-accent-orange)] text-[var(--color-white)]"
          : "bg-[#333333] text-[#B0B0B0] hover:bg-opacity-80" // Hardcoded colors for unselected state
      } md:px-[1.1rem] md:py-[1.2rem]`}
    >
      {label}
    </button>
  );
};

export default Chip;
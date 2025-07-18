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
      className={`${rubik.className} px-[0.7rem] py-[0.8rem] rounded-full text-[0.875rem] font-[600] cursor-pointer transition-colors duration-200 ${
        isSelected
          ? "bg-[var(--color-accent-orange)] text-[var(--color-white)]"
          : "bg-[var(--color-dark-gray)] text-[var(--color-text-light)] hover:bg-opacity-80"
      } md:px-[1.1rem] md:py-[1.2rem]`}
    >
      {label}
    </button>
  );
};

export default Chip;
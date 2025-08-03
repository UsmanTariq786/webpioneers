import React from 'react'
import Chip from '@/Components/CustomChip';

const WorkWeDoChips = ({ setSelectedChip, selectedChip }: any) => {
  const handleChipSelect = (value: string) => {
    if (value === selectedChip) {
      return;
    }
    setSelectedChip(value);
    console.log("Selected chip:", value);
  };

  return (
    <div className="flex space-x-2 my-1.5 overflow-x-auto whitespace-nowrap sm:overflow-x-visible sm:whitespace-normal sm:flex-nowrap">
      <Chip label="All design" value="all" isSelected={selectedChip === "all"} onSelect={handleChipSelect} />
      <Chip label="Mobile App" value="mobile" isSelected={selectedChip === "mobile"} onSelect={handleChipSelect} />
      <Chip label="Web Design" value="web" isSelected={selectedChip === "web"} onSelect={handleChipSelect} />
      <Chip label="Branding" value="branding" isSelected={selectedChip === "branding"} onSelect={handleChipSelect} />
      <Chip label="SaaS Product" value="saas" isSelected={selectedChip === "saas"} onSelect={handleChipSelect} />
    </div>
  )
}

export default WorkWeDoChips
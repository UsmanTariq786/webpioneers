'use client'
import React, { useState } from 'react';
import Button from '../button/Button';
import CommonQuestion from '../commonQuestion';
import Chip from '@/Components/CustomChip';
import { useRouter } from 'next/navigation';


const PioneerDetailResponsive = () => {
    const [selectedChip,setSelectedChip]=useState<string>()
    const router = useRouter();
  const handleChipSelect = (value: string) => {
      if(value === selectedChip){
        return 
      }
        setSelectedChip(value);
        console.log("Selected chip:", value);
      };
      
      const chipdata=["Curiosity","Kindness","Culture","Transparency"
        ,"Originality","Code","Commitment","Quality","People","CRO","Design","Transformation"]
  return (


    <section className="flex flex-col lg:flex-row items-start justify-center  max-w-7xl mx-auto">
    

      {/* Right Side - Text Content */}
      <div className="w-full flex-col justify-start p-[20px]">
        <div className='w-[120px]'>
        <CommonQuestion question='our vibe'/>
        </div>
        <p className="font-rubik text-[30px] leading-[38px] tracking-[-0.02em] font-normal text-white/70 my-3 rounded-xl">
          We help brands grow by designing smooth, smart experiences people actually enjoy using.
        </p>

        <div className="pt-2">
          <Button title="More about us" onClick={() =>router.push('/about') }/>
        </div>
      </div>
    </section>
  );
};

export default PioneerDetailResponsive;

import { buttonData } from '@/app/constData/data';
import React from 'react';
import ReuseAbleBtn from '../ui/ReuseAbleBtn';
import Button from '../button/Button';
import Image from 'next/image';

const PioneerDetail = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-24 px-4 md:px-10 lg:px-20 py-16 max-w-7xl mx-auto">
      {/* Left Side - Image */}
      <div className="w-full max-w-xs sm:max-w-sm mx-auto h-auto flex justify-center items-center p-4 bg-transparent">
        <Image
          src="/btns.png"
          width={414}
          height={300}
          alt="dfjl"
          className="rounded-xl object-contain w-full h-auto"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-[746px] flex flex-col justify-start">
        <button className="font-rubik text-xs uppercase tracking-wider py-2 px-4 font-normal text-white/80 border border-white/10 rounded-full hover:bg-white/5 transition-colors self-start">
          our vibe
        </button>

        <p className="font-rubik text-[38px] leading-[52px] tracking-[-0.02em] font-normal text-white/70 px-4 py-4 rounded-xl">
          We help brands grow by designing smooth, smart experiences people actually enjoy using.
        </p>

        <div className="pt-2">
          <Button title="More about us" />
        </div>
      </div>
    </section>
  );
};

export default PioneerDetail;

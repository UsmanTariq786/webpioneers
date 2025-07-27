import React from 'react';
import Button from '../button/Button';
import Image from 'next/image';

const BrandIdentity = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-10 text-center">
        <button className="font-rubik text-xs uppercase tracking-wider py-2 px-3 font-semibold text-white/80 border border-white/10 rounded-full">
          what we offer
        </button>

        <p className="mt-4 font-rubik text-white/80 text-[28px] sm:text-[36px] md:text-[48px] leading-tight max-w-xl">
          Everything You Need (and Nothing You Don't)
        </p>

        <div className="mt-7">
          <Button title="Check all services" />
        </div>
      </div>

      {/* Article Section */}
      <article className="max-w-[1200px] mx-auto bg-[#1a1a1a] p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          {/* Left Side: Text */}
          <div className="col-span-2 flex justify-start md:ml-14">
            <div className="w-[240px] space-y-4 self-center">
              <div className="flex items-center">
                <Image
                  src="/Vector1.png"
                  width={70}
                  height={70}
                  alt="Brand icon"
                  className="w-[70px] h-[70px]"
                />
              </div>

              <div className="text-white font-medium text-2xl leading-[1.2]">
                <p>Brand</p>
                <p>Guidelines</p>
              </div>

              <p className="text-white/60 text-base leading-relaxed w-[260px]">
                Not long enough your brand is particularly important to yourself either that already finds the price.
              </p>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="col-span-3">
            <Image
              src="/Group.png"
              alt="Brand visual"
              width={617}
              height={480}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default BrandIdentity;

import React from 'react';

interface ServiceCardProps {
  cardNumber: number;
  title: string;
  description: string;
  imageUrl: string;
}

const ServicesCard = ({ cardNumber, title, description, imageUrl }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-start justify-start text-white px-10 py-5 space-y-3 sm:space-y-0 
     ">

      <div className="flex items-center space-x-3 sm:mb-14">
        <span className="w-[7px] h-[7px] rounded-full bg-[#F8F8F880] opacity-100"></span>
        <span className="text-[14px] leading-[28px]  text-white/50">
          {cardNumber.toString().padStart(2, '0')}
        </span>
      </div>
      {imageUrl && (
        <div className="mb-8">
          <img src={imageUrl} alt={title} width={60} height={60} />
        </div>
      )}

     
<h3 className="text-[16px] md:text-[20px] font-semibold mb-3 w-[100%] text-left gradien-text">
  {title}
</h3>
      {/* Description */}
      <p className="text-[14px] md:text-[16px] leading-[24px] text-[#F8F8F8]/50 w-[190px] text-left">{description}</p>
    </div>
  );
};

export default ServicesCard;

'use client';

import React, { useState } from 'react';
import { HiCheck } from 'react-icons/hi';
import { IoCopyOutline } from 'react-icons/io5';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

const ContactUsComp = () => {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const emailToCopy = 'business@webpioneers.com';
  const whatsappNumber = '+16315302666'; // Ensure proper format without spaces

  const handleCopy = () => {
    navigator.clipboard
      .writeText(emailToCopy)
      .then(() => {
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus(null), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
        setCopyStatus('Failed to copy');
      });
  };

  const handleStartChat = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const contactArray = [
    'We will respond to you within 24 hrs.',
    'We’ll sign an NDA if requested.',
    'Access to dedicated product specialists.',
  ];

  const CheckedBox = () => {
    return (
      <div className="h-6 w-6 rounded-[18px] bg-[#D4541DF2] flex justify-center items-center">
        <HiCheck className="w-4 h-4 text-white" />
      </div>
    );
  };

  const CustomDiv = ({ children }: { children: React.ReactNode }) => {
    return (
      <div
        className="w-full max-w-full lg:max-w-[600px] min-h-[90px] flex items-center opacity-100 rounded-[25px] border border-transparent bg-[#F8F8F805] mb-4"
      >
        {children}
      </div>
    );
  };

  return (
    <div className="bg-[#202020] text-[#F8F8F8B2] p-4 rounded-lg shadow-lg my-4 mx-1 md:mx-8">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Left Section (Header and Contact Points) */}
        <div className="w-full md:w-1/2">
          <img src="/reachouttagline.png" alt="Reach Out Tagline" className="mb-4" />
          <h1 className="text-xl md:text-3xl font-normal leading-[32px] tracking-[-0.02em] text-[#F8F8F8]/90 mb-4">
            Got a project? <br /> We’re listening.
          </h1>
          {contactArray.map((item, index) => (
            <div key={index} className="flex items-center mb-3">
              <CheckedBox />
              <p className="ml-3 text-xs md:text-sm">{item}</p>
            </div>
          ))}
        </div>

        {/* Right Section (Contact Options) */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <CustomDiv>
            <div className="flex flex-col md:flex-row justify-between w-full px-3 md:px-4 py-[20px] md:py-[0px]">
              <div>
                <p className="text-[#767676] text-xs md:text-sm">Prefer email?</p>
                <p className="text-[#F8F8F8] text-sm md:text-lg mt-[10px] md:mt-[0px]">
                  {emailToCopy}
                </p>
              </div>
              <div
                className="w-[60px] md:w-auto justify-center mt-[20px] md:mt-[0px] flex gap-1 items-center bg-[#FFFFFFF2] rounded-full p-1 md:p-3 py-1 md:py-4 group cursor-pointer hover:bg-[#D4541DF2]"
                onClick={handleCopy}
              >
                <IoCopyOutline className="w-3 h-3 md:w-6 md:h-6 text-[#202020] group-hover:text-white" />
                <p className="text-[#202020] text-xs md:text-sm group-hover:text-white">Copy</p>
              </div>
            </div>
          </CustomDiv>
          <CustomDiv>
            <div className="flex flex-col md:flex-row justify-between w-full px-3 md:px-4 py-[20px] md:py-[0px]">
              <div>
                <p className="text-[#767676] text-xs md:text-sm">Whatsapp</p>
                <p className="text-[#F8F8F8] text-sm md:text-lg mt-[10px] md:mt-[0px]">
                  {whatsappNumber}
                </p>
              </div>
              <div
                className="w-[60px] md:w-auto justify-center mt-[20px] md:mt-[0px]  flex gap-1 items-center bg-[#FFFFFFF2] rounded-full p-1 md:p-3 py-1 md:py-4 group hover:bg-[#25D366] cursor-pointer"
                onClick={handleStartChat}
              >
                <IoChatbubbleEllipsesOutline className="w-3 h-3 md:w-6 md:h-6 text-[#202020] group-hover:text-white" />
                <p className="text-[#202020] text-xs md:text-sm group-hover:text-white">Chat</p>
              </div>
            </div>
          </CustomDiv>
        </div>
      </div>
      {copyStatus && (
        <p className="text-xs text-green-400 mt-2">{copyStatus}</p>
      )}
    </div>
  );
};

export default ContactUsComp;
"use client";

import React, { useState } from "react";
import { HiCheck } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import CommonQuestion from "../commonQuestion";
import RoundCornerWrapper from "../RoundCornerWrapper";

const contactArray = [
  "We will respond to you within 24 hrs.",
  "We’ll sign an NDA if requested.",
  "Access to dedicated product specialists.",
];

const CheckedBox = () => {
  return (
    <div className="h-6 w-6 rounded-[18px] bg-[#D4541DF2] flex justify-center items-center">
      <HiCheck className="w-4 h-4 text-white" />
    </div>
  );
};

const ContactUsComp = () => {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const emailToCopy = "business@webpioneers.com";
  const whatsappNumber = "+16315302666"; // Ensure proper format without spaces

  const handleCopy = () => {
    navigator.clipboard
      .writeText(emailToCopy)
      .then(() => {
        setCopyStatus("Copied!");
        setTimeout(() => setCopyStatus(null), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
        setCopyStatus("Failed to copy");
      });
  };

  const handleStartChat = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };





  return (
    <div className="bg-[#202020] text-[#F8F8F8B2]">
      <div className="flex flex-col xl:flex-row justify-between gap-6 items-center">
        {/* Left Section (Header and Contact Points) */}
        <RoundCornerWrapper top={false} right={false} left={false} dotTopRight={false} className="w-full xl:hidden">
        <RightSideHeading/>
        </RoundCornerWrapper>
        <div className="w-full hidden xl:block">
        <RightSideHeading/>
        </div>
    

        <div className="w-full mt-6 p-4 mx-1 md:mx-8 my-10">
          <div className="w-full flex flex-col gap-6 max-w-[600px] ">
            <ContactEmail handleCopy={handleCopy} emailToCopy={emailToCopy} />
            <ContactPhone
              whatsappNumber={whatsappNumber}
              handleStartChat={handleStartChat}
              />
          </div>
        </div>
      {/* </RoundCornerWrapper> */}
      </div>
      {copyStatus && (
        <p className="text-xs text-green-400 mt-2">{copyStatus}</p>
      )}
    </div>
  );
};

export default ContactUsComp;

const ContactEmail = ({ emailToCopy, handleCopy }: any) => {
  return (
    <>
      <div
        className=" p-5 sm:pl-20 py-10 md:py-5 md:p-5 rounded-3xl border-1 border-t-1 border-b-0 border-x-0 border-[#313131] bg-[#242424]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
      >
        <div className="flex flex-col md:flex-row justify-between md:px-4">
          <div>
            <p className="text-[#767676] text-[16px] md:text-[18px]">
              Prefer email?
            </p>
            <p className="text-[#F8F8F8] wrap-anywhere md:wrap-normal  text-[18px] md:text-[20px]    mt-[10px] md:mt-[0px]">
              {emailToCopy}
            </p>
          </div>
          <button
            className="min-w-[100px] max-w-[120px] md:w-auto justify-center mt-[20px] md:mt-[0px] flex gap-1 items-center bg-[#FFFFFFF2] rounded-full  p-6 py-4 md:p-6 md:py-4 group cursor-pointer hover:bg-[#D4541DF2]"
            onClick={handleCopy}
          >
            <IoCopyOutline className="w-6 h-6 text-[#202020] group-hover:text-white" />
            <p className="text-[#202020] text-[16px] md:text-sm group-hover:text-white">
              Copy
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

const ContactPhone = ({ whatsappNumber, handleStartChat }: any) => {
  return (
    <>
      <div
        className=" p-5 sm:pl-20 py-10 md:py-5 md:p-5 rounded-3xl border-1 border-t-1 border-b-0 border-x-0 border-[#313131] bg-[#242424]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
      >
        <div className="flex flex-col md:flex-row justify-between md:px-4 ">
          <div>
            <p className="text-[#767676] text-[16px] md:text-[18px]">
              Whatsapp
            </p>
            <p className="text-[#F8F8F8] text-[18px] md:text-[20px] mt-[10px] md:mt-[0px]">
              {whatsappNumber}
            </p>
          </div>
          <button
            className="min-w-[100px] max-w-[120px] md:w-auto justify-center mt-[20px] md:mt-[0px]  flex gap-1 items-center bg-[#FFFFFFF2] rounded-full p-6 py-4 md:p-6 md:py-4 group hover:bg-[#25D366] cursor-pointer"
            onClick={handleStartChat}
          >
            <IoChatbubbleEllipsesOutline className="w-6 h-6 text-[#202020] group-hover:text-white" />
            <p className="text-[#202020] text-[16px] bold group-hover:text-white">
              Chat
            </p>
          </button>
        </div>
      </div>
    </>
  );
};



const RightSideHeading =()=>{
  return(<>
          <div className="w-full p-5 mx-4 md:mx-8 md:ml-12 my-10">
          <div className="w-[150px] mb-5 ">
            <CommonQuestion question="REACH OUT" />
          </div>
          <h1 className="text-[28px] md:text-[42px] font-normal leading-[36px] md:leading-[56px] tracking-[-0.02em] gradien-text mb-7">
            Got a project? <br /> We’re listening.
          </h1>

          {contactArray.map((item, index) => (
            <div key={index} className="flex items-center mb-3">
              <CheckedBox />
              <p className="ml-3 text-[16px] md:text-[20px] md:text-sm">
                {item}
              </p>
            </div>
          ))}
        </div>
  
  
  </>)
}

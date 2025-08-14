"use client";

import React, { useState } from "react";
import { HiCheck } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const ContactUsComp = () => {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const textToCopy = "Hello, let’s start a chat!";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopyStatus("Copied!");
        setTimeout(() => setCopyStatus(null), 2000); // Clear status after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
        setCopyStatus("Failed to copy");
      });
  };

  const handleStartChat = () => {
    // Placeholder for chat action (e.g., open modal or navigate)
    alert("Chat started! Implement your chat logic here.");
  };

  const contactArray = [
    "We will respond  to you within 24 hrs.",
    "We’ll sing an NDA if requested.",
    "Access to dedicated product specialists.",
  ];

  const CheckedBox = () => {
    return (
      <div className="h-7 w-7 rounded-4xl bg-[#D4541DF2] flex justify-center items-center">
        <HiCheck size={20} />
      </div>
    );
  };

  const CustomDiv = ({ children }: any) => {
    return (
      <div
        className=" w-[644px] h-[110px] flex  items-center opacity-100 rounded-[30px] border border-transparent bg-[#F8F8F805]"

      >
        {children}
        {/* Content can be added here */}
      </div>
    );
  };

  return (
    <div className="bg-[#202020] text-[#F8F8F8B2] p-6 rounded-lg shadow-lg my-4 flex justify-between">
      {/* Header */}
      <div>
        <img src="/reachouttagline.png" alt="" />
        <h1 className="text-4xl font-normal leading-[40px] tracking-[-0.02em] text-[#F8F8F8]/90 mb-4">
          Got a project? <br />
          We’re listening.
        </h1>

        {contactArray.map((item, index) => {
          return (
            <div className="flex items-center mb-4">
              <CheckedBox />
              <p className="ml-4">{item}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4">
        <CustomDiv>
          <div className="flex justify-between w-full px-6">
            <div>
              <p className="text-[#767676] text-1xl">Prefer email?</p>
              <p className="text-[#F8F8F8] text-2xl">
                business@webpioneers.com
              </p>
            </div>
            <div className="flex gap-2 items-center bg-[#FFFFFFF2] rounded-full p-4 py-5">
              <IoCopyOutline size={24} onClick={handleCopy} color="#202020" />{" "}
              <p className="text-[#202020] text-2xl ">Copy</p>
            </div>
          </div>
        </CustomDiv>
        <CustomDiv>
        <div className="flex justify-between w-full px-6">
            <div>
              <p className="text-[#767676] text-1xl">Whatsapp</p>
              <p className="text-[#F8F8F8] text-2xl">
              +1 (631) 530-2666
              </p>
            </div>
            <div className="flex gap-2 items-center bg-[#FFFFFFF2] rounded-full p-4 py-5">
              <IoChatbubbleEllipsesOutline size={24} onClick={handleCopy} color="#202020" />{" "}
              <p className="text-[#202020] text-2xl ">Chat</p>
            </div>
          </div>
          
        </CustomDiv>
        
      </div>
    </div>
  );
};

export default ContactUsComp;

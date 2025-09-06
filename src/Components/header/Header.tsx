"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { HiMenuAlt4 } from "react-icons/hi";
import Logo from "../ui/Logo";
import Button from "@/Components/button/Button";
import { MdOutlineClose } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { HiEquals } from "react-icons/hi2";
import { HiOutlineEquals } from "react-icons/hi2";


const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = ["/", "Work", "About", "Services"];


  return (
    <header className="w-full px-5 py-4 text-white z-50 relative">
      <div className="mx-auto grid grid-cols-[auto_1fr_auto] ">
        {/* Logo – left */}
        <Link href="/" className="flex items-center gap-2 md:ml-12">
          <Logo />
        </Link>

        {/* <div className="w-[40px] h-[40px] border-2">
        </div> */}

        {/* Nav – center (desktop) */}
        <nav className="hidden md:block place-self-center">
          <ul className="flex gap-4 text-sm tracking-wide">
            {navItems.map((item) => (
              <li key={item+'navbar'} className="relative cursor-pointer">
                <Link
                  href={`/${item.toLowerCase()}`}
                  className={`px-2 py-2 rounded-full transition-colors ${
                    pathname === `/${item==='/' ? '': item.toLowerCase()}`
                      ? "bg-[linear-gradient(0deg,rgba(40,40,40,0.7),rgba(40,40,40,0.7)),linear-gradient(0deg,rgba(248,248,248,0.1),rgba(248,248,248,0.1))] text-white"
                      : "hover:bg-gray-700"
                  }`}
                >
                  {item==='/'?'Home':item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA – right (desktop) */}
        <div className="hidden md:block md:mr-10">
          <Button title="Let’s get started" onClick={()=>router.push('/contactUs')}/>
        </div>

        {/* Hamburger – mobile only */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden justify-self-end focus:outline-none px-2 rounded-[8px] bg-[url('/menu-bg-hyper.svg')] bg-cover bg-center min-w-[45px] flex items-center justify-center h-[45px] mt-1"
          aria-label="Toggle menu"
        >
          {open ? <IoCloseOutline className="w-8" style={{
    width: '35px',
    height: '35px',
  }}/> : <HiOutlineEquals  style={{
    width: '35px',
    height: '35px',
  }}/>}
          {/* {open ? <HiX className="h-1 w-8" /> : <HiMenuAlt4 className="h-2 !w-8"/>} */}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden absolute top-[220px] left-1/2 -translate-x-1/2 w-[100%] max-w-sm bg-[#282828]/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/10 px-5 py-6 z-50">
          {/* Top Row: Logo + Close */}
          <div className="flex justify-between items-center mb-6">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              className="text-[16px] leading-[20px] border-0 rounded-[9px] p-[10px] bg-[url('/closebtn.png')] bg-cover bg-center text-transparent"
            >
              Close

            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-5 text-[15px]">
            {navItems.map((item) => (
              <li key={item+'navitemsss'} className="flex items-center justify-between px-1 text-[#F8F8F8F2]">
                <Link
                  href={`/${item==='Home' ? '/':item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className=" text-[#F8F8F8F2]"
                >
                  {item==='/'?'Home':item}
                </Link>
                {(pathname === `/${item==='/' ? '':item.toLowerCase()}`) ? (
                  
                  <span className="w-4.5 h-4.5 bg-[#727272] rounded-full"></span>

                ) : (
                
                <span className="w-4 h-4 border border-[#727272] rounded-full"></span>
                )}
              </li>
            ))}
          </ul>

          {/* Footer Buttons */}
          <div className="flex gap-3 mt-8">
            <button className="flex-1 bg-[#D4541D]/94 transition text-sm rounded-lg py-2 font-semibold">
              Copy email
            </button>
            <button className="flex-1 bg-[#D4541D]/94 transition text-sm rounded-lg py-2 font-semibold">
              Chat
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
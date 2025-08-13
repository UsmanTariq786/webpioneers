"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../ui/Logo";
import Button from "@/Components/button/Button";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = ["/", "Work", "About", "Services"];

  return (
    <header className="w-full px-5 py-4 text-white z-50 relative">
      <div className="max-w-[1280px] mx-auto grid grid-cols-[auto_1fr_auto] items-center">
        {/* Logo – left */}
        <Link href="/" className="flex items-center gap-2 md:ml-24">
          <Logo />
        </Link>

        {/* Nav – center (desktop) */}
        <nav className="hidden md:block place-self-center">
          <ul className="flex gap-4 text-sm tracking-wide">
            {navItems.map((item) => (
              <li key={item+'navbar'} className="relative cursor-pointer">
                <Link
                  href={`/${item.toLowerCase()}`}
                  className={`px-4 py-2 rounded-full transition-colors ${
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
        <div className="hidden md:block">
          <Button title="Let’s get started" />
        </div>

        {/* Hamburger – mobile only */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden justify-self-end text-2xl focus:outline-none bg-[#181818] p-2 rounded-full"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden absolute top-[110px] left-1/2 -translate-x-1/2 w-[95%] max-w-sm bg-[#181818]/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 px-5 py-6 z-50">
          {/* Top Row: Logo + Close */}
          <div className="flex justify-between items-center mb-6">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              className="text-sm border px-2 py-1 rounded-lg"
            >
              Close
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-5 text-[15px]">
            {navItems.map((item) => (
              <li key={item+'navitemsss'} className="flex items-center justify-between px-1">
                <Link
                  href={`/${item==='Home' ? '/':item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className={
                    pathname === `/${ item==='Home' ? '/': item.toLowerCase()}`
                      ? "text-xl font-medium"
                      : "hover:text-gray-300"
                  }
                >
                  {item}
                </Link>
                {(pathname === `/${item==='Home' ? '/':item.toLowerCase()}` || '/') ? (
                  <span className="w-4 h-4 bg-white rounded-full"></span>
                ) : (
                  <span className="w-4 h-4 border border-white rounded-full"></span>
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
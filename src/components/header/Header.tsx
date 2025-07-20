'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'
import Logo from '../ui/Logo'
import Button from '../button/Button'

const Header = () => {
  const [open, setOpen] = useState(false)

  const navItems = ['Home', 'Work', 'About', 'Services']

  return (
    <header className="w-full px-5 py-4 text-white z-50 relative">
      <div className="max-w-[1280px] mx-auto grid grid-cols-[auto_1fr_auto] items-center">
        {/* Logo – left */}
        <Link href="/" className="flex items-center gap-2 md:ml-24">
          <Logo />
        </Link>

        {/* Nav – center (desktop) */}
        <nav className="hidden md:block place-self-center">
          <ul className="flex gap-8 text-sm tracking-wide">
            {navItems.map(item => (
              <li key={item} className="relative cursor-pointer">
                {item}
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
          className="md:hidden justify-self-end text-2xl focus:outline-none bg-[#181818]"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden absolute top-[110px] left-1/2 -translate-x-1/2 w-[95%] max-w-sm bg-[#181818] rounded-2xl shadow-lg border border-white/10 backdrop-blur-md px-5 py-6 z-50">

          {/* Top Row: Logo + Close */}
          <div className="flex justify-between items-center mb-6">
            <Logo />
            <button onClick={() => setOpen(false)} className="text-sm border px-2 py-1 rounded-lg">
              Close
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-5 text-[15px]">
            {navItems.map((item, index) => (
              <li
                key={item}
                className="flex justify-between items-center px-1"
              >
                <span>{item}</span>
                <span className="w-4 h-4 border rounded-full"></span>
              </li>
            ))}
          </ul>

          {/* Footer Buttons */}
          <div className="flex gap-3 mt-8">
            <button className="flex-1 bg-[#D4541D]/94  transition text-sm rounded-lg py-2 font-semibold">
              Copy email
            </button>
            <button className="flex-1 bg-[#D4541D]/94  transition text-sm rounded-lg py-2 font-semibold">
              Chat
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'
import Logo from '../ui/Logo'
import Button from '../button/Button'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full px-5 py-4  text-white z-50 relative">
      <div className="max-w-[1280px] mx-auto grid grid-cols-[auto_1fr_auto] items-center">
        {/* Logo – left */}
        <Link
          href="/"
          className="flex items-center gap-2 md:ml-24"  
         >
        <Logo />
       </Link>

        {/* Nav – center */}
        <nav className="hidden md:block place-self-center">
          <ul className="flex gap-8 text-sm tracking-wide">
            {['Home', 'Work', 'About', 'Services'].map(item => (
              <li
                key={item}
                className="relative cursor-pointer "
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA – right */}
         <div className="hidden md:block">
          <Button title="Let’s get started" />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden justify-self-end text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full border-t border-white/10 backdrop-blur-sm bg-[#181818]/90">
          <ul className="flex flex-col items-center gap-4 py-6 text-[15px]">
            {['Home', 'Work', 'About', 'Services'].map(item => (
              <li
                key={item}
                className="w-full text-center py-2 hover:bg-white/10 active:scale-95 transition"
              >
                {item}
              </li>
            ))}
            
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header

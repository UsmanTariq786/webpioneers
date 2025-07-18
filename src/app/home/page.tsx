'use client'

import GridLayout from '@/components/GridLayout';
import React from 'react'
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter()
  console.log('router', router)
  return (
      <div>

      <header className="flex justify-between items-center py-4">
        <div className="text-2xl">✨</div>
        <nav className="space-x-4">
          <div className="flex space-x-4 bg-amber-300 p-2 rounded-full">
          <a href="#" className="text-[#F8F8F8] hover:text-white">Home</a>
          </div>

          <a href="#" className="text-[#F8F8F8] hover:text-white">Work</a>
          <a href="#" className="text-[#F8F8F8] hover:text-white">About</a>
          <a href="#" className="text-[#F8F8F8] hover:text-white">Services</a>
        </nav>
        <button className="bg-themeOrange-500 text-themeWhite-500 px-6 py-6 rounded-full text-1xl font-bold ">
  Let’s get started
 </button>

      </header>
      <main className="text-center py-20">
        <p className="text-text-light mb-4">200+ companies have scaled faster with our design solutions</p>
        <h1 className="text-5xl font-bold mb-4">
          We’re a design & development agency that delivers results
        </h1>
        <p className="text-text-light mb-6">
          At Web Pioneers, we mix smart design with clean code to help your brand stand out and sell more.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-accent-orange text-white px-4 py-2 rounded-full">You</button>
          <button className="bg-accent-blue text-white px-4 py-2 rounded-full">Pioneers</button>
        </div>
      </main>
      <footer className="text-center py-10 text-text-light">
        <p>Our Partners in Growth</p>
        <div className="flex justify-center space-x-8 mt-4">
          <span>Art of Mondays</span>
          <span>REWIND</span>
          <span>section.store</span>
          <span>VIVIDORA</span>
          <span>justthrive</span>
          <span>SYNC</span>
          <span>Headshots</span>
        </div>
      </footer>
      </div>

  );
}

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position and update the state
  useEffect(() => {
    const handleScroll = () => {
      // If the user has scrolled down 100px, set isScrolled to true
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex items-center justify-between py-6 px-12 z-10 transition-all duration-300 ${
        isScrolled ? 'bg-white nav-text text-gray-800' : 'bg-transparent text-white'
      }`}
    >
      {/* Dropdown Button on the Left */}
      <div className="relative group">
        <button className="focus:outline-none flex flex-col items-center pr-20">
          {/* Hamburger Icon with 2 Bars */}
          <span
            className={`block w-9 sm:w-10 h-1 rounded-md my-2 transition-all ${
              isScrolled ? 'bg-gray-800' : 'bg-[#c4ae86]'
            }`}
          ></span>
          <span
            className={`block w-9 sm:w-10 h-1 rounded-md transition-all ${
              isScrolled ? 'bg-gray-800' : 'bg-[#c4ae86]'
            }`}
          ></span>
        </button>
        {/* Dropdown Menu */}
        <div className="absolute left-0 hidden w-48 mt-2 bg-white rounded-md shadow-lg group-hover:block">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Item 1
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Item 2
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Item 3
          </a>
        </div>
      </div>

      {/* Center Logo */}
      <div className="flex justify-center items-center">
        <Image
          src={`${basePath}/logo-crystal-white.png`}
          alt="Logo"
          width={200}
          height={200}
          className="hidden sm:block"
        />
      </div>

      {/* Button on the Right */}
      <div>
        <button
          className={`px-4 py-2 focus:outline-none w-32 h-[43px] rounded-sm transition-all ${
            isScrolled
              ? 'bg-[#c4ae86] text-white border border-[#c4ae86]'
              : 'bg-transparent text-[#c4ae86] border border-[#c4ae86]'
          }`}
        >
          BOOK NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

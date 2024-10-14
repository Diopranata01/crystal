// Navbar.js
import React from 'react';
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-transparent fixed top-0 nav-text left-0 right-0 flex items-center justify-between py-6 px-12 z-10">
      {/* Dropdown Button on the Left */}
      <div className="relative group">
        <button className="focus:outline-none flex flex-col items-center pr-20">
          {/* Hamburger Icon with 2 Bars */}
          <span className="block w-9 sm:w-12 h-1 bg-[#c4ae86] rounded-md my-2"></span>
          <span className="block w-9 sm:w-12 h-1 bg-[#c4ae86] rounded-md"></span>
        </button>
        {/* Dropdown Menu */}
        <div className="absolute left-0 hidden w-48 mt-2 bg-white rounded-md shadow-lg group-hover:block">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 1</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 2</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 3</a>
        </div>
      </div>

      {/* Center Logo */}
      <div className="flex justify-center items-center">
        <Image
            src='/logo-crystal-white.png'
            alt="Logo"
            width={200}
            height={200}
        />
      </div>

      {/* Button on the Right */}
      <div>
        <button className="bg-transparent border border-[#c4ae86] px-4 py-2 focus:outline-none w-32 h-[43px] rounded-sm">
          BOOK NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

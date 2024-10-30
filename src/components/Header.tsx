import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Button_2 from './Button_2';

const Header: React.FC = () => {
  // State to manage the menu open/close status
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent w-full h-auto p-6 px-4 md:p-[24px] md:px-[80px] flex items-center justify-between z-20">
      <div className="grid grid-cols-2 items-center w-full">
        <div className="flex items-center relative">
          {/* Logo and menu toggle button for mobile devices */}
          <h1 className="logo text-dark-blue text-custom font-bold font-roboto flex items-center">
            soller
            <button
              onClick={() => setMenuOpen(!menuOpen)} // Toggle menu open state
              aria-label="Toggle Menu"
              className="ml-2 md:hidden text-dark-blue text-2xl"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </h1>
          
          {/* Navigation for desktop version */}
          <nav className="navigation ml-[38px] hidden md:block">
            <ul className="menu flex space-x-[38px]">
              <li><a href="#products" className="text-dark-blue text-s font-medium">Products</a></li>
              <li><a href="#solutions" className="text-dark-blue text-s font-medium">Solutions</a></li>
              <li><a href="#services" className="text-dark-blue text-s font-medium">Services</a></li>
              <li><a href="#configure" className="text-dark-blue text-s font-medium">Configure</a></li>
            </ul>
          </nav>
        </div>
        
        {/* Contact information and button for desktop */}
        <div className="hidden md:flex items-center justify-end space-x-[40px]">
          <span className="flex items-center text-s font-medium text-blue">
            <img src="/dist/icons/headset.svg" alt="Headphones Icon" className="mr-4" />
            <span>555 818 282</span>
          </span>
          <Button_2>Request a Quote</Button_2>
        </div>
      </div>

      {/* Responsive Menu */}
      {menuOpen && (
        <div
          className={`absolute left-3 bg-white shadow-md z-10 md:hidden transition-transform duration-500 ease-in-out ${
            menuOpen ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-full opacity-0'
          }`}
          style={{
            top: 'calc(100% - 20px)', // Position the menu just below the header
            width: 'fit-content',
            minWidth: '120px', // Minimum width for the menu
            padding: '0 16px',
          }}
        >
          <ul className="flex flex-col space-y-2 py-4">
            <li><a href="#products" className="text-dark-blue text-s font-medium">Products</a></li>
            <li><a href="#solutions" className="text-dark-blue text-s font-medium">Solutions</a></li>
            <li><a href="#services" className="text-dark-blue text-s font-medium">Services</a></li>
            <li><a href="#configure" className="text-dark-blue text-s font-medium">Configure</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;











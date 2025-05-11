import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-[96px] bg-white px-4 md:px-[80px] flex items-center justify-between shadow-sm relative">
      <div className="grid grid-cols-2 items-center w-full">
        <div className="flex items-center">
          {/* Logo */}
          <img 
            src="https://res.cloudinary.com/diuvgclpk/image/upload/v1746847491/logo-teach_cq1qu7.png" 
            alt="Teach Logo" 
            className="logo flex items-center"
          />

          {/* Desktop Navigation */}
          <nav className="ml-[38px] hidden md:block">
            <ul className="flex space-x-[38px]">
              <li>
                <a 
                  href="#products" 
                  className="relative text-dark-blue text-s font-medium after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-dark-blue after:transition-all after:duration-300 hover:after:w-full"
                  title="Explore our products"
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="#solutions" 
                  className="relative text-dark-blue text-s font-medium after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-dark-blue after:transition-all after:duration-300 hover:after:w-full"
                  title="Learn about our solutions"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="relative text-dark-blue text-s font-medium after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-dark-blue after:transition-all after:duration-300 hover:after:w-full"
                  title="View our services"
                >
                  Pricing
                </a>
              </li>
              <li className="relative group">
                <button 
                  className="flex items-center gap-1 pr-2 text-dark-blue text-s font-medium after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-dark-blue after:transition-all after:duration-300 group-hover:after:w-full"
                  title="Explore resources"
                >
                  Resources
                  <MdKeyboardArrowDown className="text-dark-blue w-4 h-4" />
                </button>
                <ul className="absolute left-0 mt-2 hidden w-40 rounded-md bg-white shadow-lg group-hover:block z-10">
                  <li>
                    <a href="#docs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" title="View documentation">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#tutorials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" title="Access tutorials">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" title="Read our blog">
                      Blog
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        {/* Desktop Actions (Login & Sign Up) */}
        <div className="hidden md:flex items-center justify-end space-x-[24px]">
          <span 
            className="relative text-s font-medium text-dark-blue cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-dark-blue after:transition-all after:duration-300 hover:after:w-full"
            title="Login to your account"
          >
            Log In
          </span>
          <span 
            className="relative w-[153px] h-[48px] flex items-center justify-center border-2 border-dark-blue rounded-lg px-4 py-2 text-s font-medium text-dark-blue cursor-pointer transition-colors duration-300 hover:bg-dark-blue hover:text-white"
            title="Sign up for an account"
          >
            Sign Up Now
          </span>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
        className="ml-2 md:hidden text-dark-blue text-2xl z-10"
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md right-4 px-4 py-4 space-y-3 w-36 absolute top-[96px] z-20">
          <a 
            href="#products" 
            className="block text-dark-blue font-medium"
            title="Explore our products"
          >
            Products
          </a>
          <a 
            href="#solutions" 
            className="block text-dark-blue font-medium"
            title="Learn about our solutions"
          >
            Solutions
          </a>
          <a 
            href="#services" 
            className="block text-dark-blue font-medium"
            title="View our services"
          >
            Services
          </a>
          <details className="text-dark-blue">
            <summary className="cursor-pointer font-medium">Resources</summary>
            <ul className="pl-4 mt-2 space-y-1">
              <li><a href="#docs" className="block text-sm text-gray-700" title="View documentation">Documentation</a></li>
              <li><a href="#tutorials" className="block text-sm text-gray-700" title="Access tutorials">Tutorials</a></li>
              <li><a href="#blog" className="block text-sm text-gray-700" title="Read our blog">Blog</a></li>
            </ul>
          </details>
          <div className="pt-3 border-t border-gray-200">
            <a 
              href="#login" 
              className="block text-dark-blue font-medium mb-2"
              title="Login to your account"
            >
              Login
            </a>
            <a 
              href="#signup" 
              className="block bg-dark-blue text-white text-center py-2 rounded"
              title="Sign up for an account"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;












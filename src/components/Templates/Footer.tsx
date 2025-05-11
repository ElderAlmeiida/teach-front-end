import React from 'react';
import { BsGlobe, BsUniversalAccessCircle } from 'react-icons/bs';
import { LiaUniversalAccessSolid } from "react-icons/lia";
import { MdEuro } from 'react-icons/md';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-dark-blue text-blue-gray px-2 pt-12 pb-8 fill-inherit">
      {/* Main container for the footer */}
      <div className="container mx-auto">

        {/* Top row with logo on the left and 5 columns on the right */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-start mb-12 gap-12">

          {/* Logo section on the left */}
          <div className="flex items-start ">
            <img
              src="https://res.cloudinary.com/diuvgclpk/image/upload/v1746858116/logo-teach-alt_prasws.png"
              alt="Teach Logo"
              className=""
            />
          </div>

          {/* Columns 1 to 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-12 gap-y-8 w-full">
            
            {/* Product */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold mb-4 hover:text-[#ea580c]">Product</h4>
              <a href="/" className="relative m-y text-blue-gray text-s mb-3 font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Pricing</a>
              <a href="/" className="relative m-y text-blue-gray text-s mb-3 font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Overview</a>
              <a href="/" className="relative m-y text-blue-gray text-s mb-3 font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Browse</a>
              <a href="/" className="relative m-y flex items-center text-blue-gray text-s font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Accessibility
                <span className="ml-2 bg-[#F3E8FF] text-purple w-10 h-5 rounded-md flex items-center justify-center text-xs">BETA</span>
              </a>
            </div>

            {/* Solutions */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold mb-4 hover:text-[#ea580c]">Solutions</h4>
              <a href="/solution1" className="relative m-y text-blue-gray text-s mb-3 font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Brainstorming</a>
              <a href="/solution2" className="relative m-y text-blue-gray text-s mb-3 font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Ideation</a>
              <a href="/solution3" className="relative m-y text-blue-gray text-s mb-3 font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Wireframing</a>
              <a href="/solution4" className="relative m-y text-blue-gray text-s font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Research</a>
            </div>

            {/* Resources */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold mb-4 hover:text-[#ea580c]">Resources</h4>
              <a href="/resource1" className="relative m-y text-blue-gray text-s mb-3 font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Help Center</a>
              <a href="/resource2" className="relative m-y text-blue-gray text-s mb-3 font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Blog</a>
              <a href="/resource3" className="relative m-y text-blue-gray text-s mb-3 font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Tutorials</a>
              <a href="/resource4" className="relative m-y text-blue-gray text-s font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">FAQs</a>
            </div>

            {/* Support */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold mb-4 hover:text-[#ea580c]">Support</h4>
              <a href="/support1" className="relative m-y text-blue-gray text-s mb-3 font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact Us</a>
              <a href="/support2" className="relative m-y text-blue-gray text-s mb-3 font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Developers</a>
              <a href="/support3" className="relative m-y text-blue-gray text-s mb-3 font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Documentation</a>
              <a href="/support4" className="relative m-y text-blue-gray text-s font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Integrations</a>
            </div>

            {/* Company */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold mb-4 hover:text-[#ea580c]">Company</h4>
              <a href="/company1" className="relative m-y text-blue-gray text-s mb-3 font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">About</a>
              <a href="/company2" className="relative m-y text-blue-gray text-s mb-3 font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Press</a>
              <a href="/company3" className="relative m-y text-blue-gray text-s mb-3 font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Events</a>
              <a href="/company4" className="relative m-y text-blue-gray text-s font-normal after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Request Demo</a>
            </div>
          </div>
        </div>

        {/* Horizontal line */}
        <hr className="w-full my-1 border-blue-gray opacity-50" />

        {/* Copyright and footer base */}
        <div className="flex flex-col sm:flex-row justify-between w-full items-center text-s mt-4 mx-3">
          <span className="text-left w-full sm:w-auto">uteach @ 2023. All rights reserved.</span>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="/terms" className="text-blue-gray hover:underline">Terms</a>
            <a href="/privacy" className="text-blue-gray hover:underline">Privacy</a>
            <a href="/contact" className="text-blue-gray hover:underline">Contact</a>
            <div className="flex items-center space-x-3 text-blue-gray">
              <BsGlobe />
              <span>EN</span>
              <MdEuro />
              <span>EUR</span>
              <BsUniversalAccessCircle className="w-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;










import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-transparent text-yellow font-bold border-2 pl-12 border-yellow rounded-[100px] w-[306px] h-[64px] opacity-1 transition-colors duration-300 ease-in-out hover:bg-yellow hover:text-custom-brown flex items-center justify-between py-[20px] px-[24px] hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <span className="flex items-center text-l"> 
        {children}
      </span>
      <span className="flex items-center ml-2 p-[5px] relative top-[75%] translate-y-[-50%]"> 
        <FaArrowRight className='w-50 h-50' /> 
      </span>
    </button>
  );
};

export default Button;











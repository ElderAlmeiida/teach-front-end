import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const Button_2: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className=" bg-transparent text-dark-purple   pl-12 font-bold border-2 border-dark-purple rounded-[100px] w-[306px] h-[64px] opacity-1 transition-colors duration-300 ease-in-out hover:bg-dark-purple hover:text-yellow flex items-center justify-between py-5 px-6 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <span className="flex items-center text-l"> 
        {children}
      </span>
      <span className="flex items-center ml-2 p-[5px] relative top-[75%] translate-y-[-50%]"> 
        <FaArrowRight className='w-50 h-50' /> 
      </span>
    </button>
  );
};

export default Button_2;

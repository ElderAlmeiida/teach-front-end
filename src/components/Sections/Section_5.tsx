import React from 'react';
import Button_1 from '../Button';
import Comments_type2 from '../Comments/Comments_type2';

const Section_5: React.FC = () => {
  return (
    <div className="bg-dark-purple lg:grid-rows-2 lg:w-full lg:h-auto items-center lg:pl-20 lg:pt-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start lg:text-left custom:items-center custom:text-center relative z-10 px-4 lg:px-0"> {/* Responsive grid adjustment */}
        
        {/* Content container with centered text */}
        <div className="flex flex-col w-full h-auto p-3 lg:mb-20 sm:mb-4 items-center text-center lg:items-start lg:text-left"> {/* Center text on mobile and adjust alignment on larger screens */}
          <p className="text-yellow lg:text-m lg:font-medium leading-[30px] custom:text-s">
            Join other Sun harvesters
          </p>
          <h2 className="text-white lg:text-xl custom:text-mobile-h1 font-bolder leading-[61.6px] font-roboto">
            Make something awesome
          </h2>
          <p className="text-white lg:text-left lg:text-[18px] custom:text-s font-regular pt-4 font-roboto">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-auto lg:ml-16 custom:ml-1 lg:pt-12 custom:pt-4"> {/* Adjust width and padding */}
          <div>
            <Button_1>
              Request a Quote
            </Button_1>
          </div>
        </div>
      </div>

      <div className="flex justify-center relative z-10 pr-0 lg:pr-56"> {/* Adjust right padding */}
        <Comments_type2 />
      </div>
    </div>
  );
};

export default Section_5;




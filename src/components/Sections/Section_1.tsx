import React from 'react';
import Button_2 from '../Button_2';
import Comments_type1 from '../Comments/Comments_type1'; // Changed to Comments_type2

const Section_1: React.FC = () => {
  return (
    <section className="section1-class flex flex-col lg:flex-row justify-between items-start relative w-full overflow-hidden px-4 lg:pb-1 custom:pb-32 lg:px-0">
      <div className="flex flex-col items-center lg:items-start w-full lg:w-[920px] h-auto gap-8 lg:gap-[128px] pt-10 lg:pt-[139px] lg:pl-20">
        
        {/* Image and Text Content */}
        <div className="flex flex-col items-center lg:items-start w-full max-w-[600px] text-center lg:text-left relative">
          {/* Image - Visible on mobile only */}
          <img
            src="/public/images/forms/form-section-1-1.png"
            alt="Solar Panel Installation"
            className="w-[307.31px] sm:w-[50%] sm:m-4 lg:hidden mb-8 ml-32 mt-[-4rem]"
          />

          <h1 className="text-dark-blue text-mobile-h1 lg:text-xxl font-roboto font-bold mb-4">
            Get the Sun to Power Your Home
          </h1>
          <p className="mb-4 text-dark-blue text-l">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
          </p>
          <Button_2>Request a Quote</Button_2>
        </div>

        {/* Comments Section - Maintains responsiveness */}
        <Comments_type1 className="w-full lg:w-auto mt-4 lg:mt-0" />
      </div>

      {/* Image for Desktop Layout */}
      <div className="hidden lg:flex lg:w-[50%] h-auto items-start justify-end relative">
        <img
          src="/public/images/forms/form-section-1-1.png"
          alt="Solar Panel Installation"
          className="relative z-10 w-auto h-auto"
        />
      </div>
    </section>
  );
};

export default Section_1;




import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button_1 from '../Button'; // Importing a custom button component

const Section_6: React.FC = () => {
  // Intersection observers to track visibility of elements
  const [textRef, inViewText] = useInView({ threshold: 0.1 });
  const [buttonRef, inViewButton] = useInView({ threshold: 0.1 });
  const [subtitleRef, inViewSubtitle] = useInView({ threshold: 0.01 });
  const [imageRef, inViewImage] = useInView({ threshold: 0.1 });

  // Animation definitions for different elements
  const textAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonAnimation = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  const subtitleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    persist: { opacity: 1, y: 0 },
  };

  const imageAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative bg-purple w-full h-auto p-10 lg:p-20 grid gap-10 lg:gap-20 overflow-hidden">
      {/* First row with text, button, and subtitle */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-10">
        
        {/* Background image behind the button */}
        <div className="absolute top-[420px] -ml-12 rotate-180 right-0 lg:rotate-0 lg:-top-20 lg:-right-32 lg:z-0 lg:scale-100">
          <img
            src="/images/forms/form-section-6-1.png"
            alt="Circle Background Image"
            className="max-w-full h-auto"
          />
        </div>

        {/* Text section with animations */}
        <motion.div
          ref={textRef}
          className="text-yellow lg:text-m text-s font-medium leading-[30px] text-center lg:text-left"
          initial="hidden"
          animate={inViewText ? "visible" : "hidden"}
          variants={textAnimation}
          transition={{ duration: 0.5 }}
        >
          <p>Get the Sun to power your home</p>
          <h2 className="text-white lg:text-xl text-[32px] font-bold leading-[61.6px] font-roboto">
            All the power that you need for your house is now available
          </h2>
        </motion.div>

        {/* Button and subtitle section */}
        <div className="flex flex-col items-center lg:items-end lg:mr-14 text-center">
          <motion.div
            ref={buttonRef}
            initial="hidden"
            animate={inViewButton ? "visible" : "hidden"}
            variants={buttonAnimation}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="z-10" // Ensures the button appears above other elements
          >
            <Button_1>
              Request a Quote
            </Button_1>
          </motion.div>

          <motion.p
            ref={subtitleRef}
            className="text-white text-center lg:text[18px] custom:text-s font-regular pt-4 font-roboto z-20 lg:mr-10"
            initial="hidden"
            animate={inViewSubtitle ? "visible" : "hidden"}
            variants={subtitleAnimation}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Egestas fringilla aliquam leo
          </motion.p>
        </div>
      </div>

      {/* Second row with centered image */}
      <motion.div
        ref={imageRef}
        className="flex justify-center mt-10 lg:mt-0 z-20" // Higher z-index to ensure visibility
        initial="hidden"
        animate={inViewImage ? "visible" : "hidden"}
        variants={imageAnimation}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <img
          src="/images/forms/form-section-6-2.png"
          alt="Central Image"
          className="lg:max-w-[full] lg:h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Section_6;



















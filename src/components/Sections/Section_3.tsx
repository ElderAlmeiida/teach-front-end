import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Section_3: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track if the section is visible
  const [blockVisible, setBlockVisible] = useState(Array(4).fill(false)); // State to track visibility of each service block
  
  const sectionRef = useRef<HTMLDivElement>(null); // Ref for the section to observe its visibility

  // Effect to observe the visibility of the section in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set the section as visible when it intersects
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup on component unmount
      }
    };
  }, []);

  // Function to handle visibility of service blocks
  const handleBlockVisible = (index: number) => {
    if (!blockVisible[index]) {
      setBlockVisible((prev) => {
        const newVisible = [...prev];
        newVisible[index] = true; // Mark the block as visible
        return newVisible;
      });
    }
  };

  return (
    <section ref={sectionRef} className="lg:grid lg:grid-cols-2 mt-12 custom:w-[auto] custom:">
      {/* Left section - First Image with animation */}
      <div className="relative lg:w-[auto] custom:w-[300px]">
        {/* First service image */}
        <motion.img 
          src="/images/forms/form-section-3-1.png" 
          alt="Service Image 1" 
          initial={{ x: '-100%', opacity: 0 }} // Initial position off-screen to the left
          animate={isVisible ? { x: 0, opacity: 1 } : {}} // Final position when visible
          transition={{ duration: 0.5 }} // Transition duration
        />

        {/* Second service image overlayed with effects */}
        <motion.img 
          src="/images/forms/form-section-3-2.png" 
          alt="Service Image 2" 
          className="lg:absolute lg:top-[69px] lg:left-[85px] lg:w-[auto] custom:absolute custom:top-[100px] custom:left-[30px] custom:w-[220px] " 
          initial={{ y: '-50%', opacity: 0 }} // Initial position above
          animate={isVisible ? { y: 0, opacity: 1 } : {}} // Final position when visible
          transition={{ duration: 0.5, delay: 0.2 }} // Transition duration with delay
        />
      </div>

      {/* Right section - Text and service grid */}
      <div className="lg:flex lg:flex-col lg:pt-52 lg:pr-20 lg:ml-[-250px] custom:center ">
        {/* Title and description */}
        <div className="lg:mb-8 lg:text-left custom:p-4 custom:text-center">
          <span className="text-orange text-m font-medium ">Services</span>
          <h1 className="text-dark-blue font-bold lg:text-xl custom:text-mobile-h1 mt--2">Personalized services</h1>
          <p className="mt-4 text-dark-blue font-regular text-m">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
        </div>

        {/* 2x2 grid with service description blocks */}
        <div className="grid grid-cols-2 gap-12 lg:mt-24 lg:text-left custom:mt-4 custom:p-4 custom:text-center">
          {/* Block 1 */}
          <motion.div
            initial={{ scale: 0 }} // Initial scale
            animate={blockVisible[0] ? { scale: 1 } : {}} // Final scale when visible
            transition={{ duration: 0.5, delay: isVisible ? 0.5 : 0 }} // Transition duration with delay
            onViewportEnter={() => handleBlockVisible(0)} // Detect when the block enters the viewport
          >
            <h3 className="text-l font-semibold text-dark-blue mb-2">Et mauris</h3>
            <p className="text-dark-blue lg:text-[18px] custom:text-[16px] font-regular mb-32">
              Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.
            </p>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            initial={{ scale: 0 }} // Initial scale
            animate={blockVisible[1] ? { scale: 1 } : {}} // Final scale when visible
            transition={{ duration: 0.5, delay: isVisible ? 0.6 : 0 }} // Transition duration with delay
            onViewportEnter={() => handleBlockVisible(1)} // Detect when the block enters the viewport
          >
            <h3 className="text-l font-semibold text-dark-blue mb-2">Eget sit</h3>
            <p className="text-dark-blue lg:text-[18px] custom:text-[16px] font-regular mb-32">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
            </p>
          </motion.div>

          {/* Block 3 */}
          <motion.div
            initial={{ scale: 0 }} // Initial scale
            animate={blockVisible[2] ? { scale: 1 } : {}} // Final scale when visible
            transition={{ duration: 0.5, delay: isVisible ? 0.7 : 0 }} // Transition duration with delay
            onViewportEnter={() => handleBlockVisible(2)} // Detect when the block enters the viewport
          >
            <h3 className="text-l font-semibold text-dark-blue mb-2">Imperdiet pellentesque</h3>
            <p className="text-dark-blue lg:text-[18px] custom:text-[16px] font-regular">
              Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.
            </p>
          </motion.div>

          {/* Block 4 */}
          <motion.div
            initial={{ scale: 0 }} // Initial scale
            animate={blockVisible[3] ? { scale: 1 } : {}} // Final scale when visible
            transition={{ duration: 0.5, delay: isVisible ? 0.8 : 0 }} // Transition duration with delay
            onViewportEnter={() => handleBlockVisible(3)} // Detect when the block enters the viewport
          >
            <h3 className="text-l font-semibold text-dark-blue mb-2">Non libero</h3>
            <p className="text-dark-blue lg:text-[18px] custom:text-[16px] font-regular">
              Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section_3;










import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Section_4: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(
    y,
    [-100, 100],
    ['10deg', '-10deg']
  );
  const rotateY = useTransform(
    x,
    [-100, 100],
    ['-10deg', '10deg']
  );
  const perspective = 600;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mt-12 pb-24 w-auto flex flex-col lg:flex-row lg:gap-8" // Adicionado gap-8
    >
      <motion.div
        ref={imageContainerRef}
        className="relative flex justify-start items-start lg:pl-[80px] custom:pl-0 lg:w-1/2" // Adicionado lg:w-1/2
        style={{ perspective }}
        onMouseMove={(e) => {
          const rect = imageContainerRef.current?.getBoundingClientRect();
          if (rect) {
            x.set(e.clientX - rect.left - rect.width / 2);
            y.set(e.clientY - rect.top - rect.height / 2);
          }
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
      >
        <motion.img
          src="https://res.cloudinary.com/diuvgclpk/image/upload/v1746916733/Col_xheo9o.png"
          alt="Conjunto de imagens com fundo e elementos sobrepostos"
          className="lg:w-[100%] custom:w-[calc(100vw - 48px)] h-auto rounded-xl mr-4 lg:mr-0" // Removido w-[600px] e adicionado responsividade
          initial={{ opacity: 0, x: -20, rotateX: 0, rotateY: 0 }}
          animate={isVisible ? { opacity: 1, x: 0, rotateX: 0, rotateY: 0 } : {}}
          transition={{ type: 'spring', stiffness: 260, damping: 20, duration: 0.5 }}
          style={{ rotateX, rotateY }}
        />
      </motion.div>

      <div className="flex flex-col w-[600px] lg:pt-52 lg:pr-20 lg:pl-0 custom:p-4 ">  
        <div className="mb-8 lg:text-left custom:text-center relative">
          <h1 className="text-dark-blue font-bold lg:text-xl custom:text-mobile-h1 mt--2 relative"> {/* Alterado tamanho da fonte no mobile */}
            Meet international students & teachers
          </h1>
          <p className="mt-4 text-dark-blue font-regular lg:text-m custom:text-lg text-left lg:w-auto "> 
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
          </p>
          <button className="mt-6 text-blue font-medium flex items-center gap-2 lg:justify-start custom:justify-center">
            Explore teachers and students
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.16-3.968H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section_4;

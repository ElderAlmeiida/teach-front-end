import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Section_7: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [blockVisible, setBlockVisible] = useState(Array(4).fill(false));

  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(
    y,
    [-100, 100],
    ["10deg", "-10deg"]
  );
  const rotateY = useTransform(
    x,
    [-100, 100],
    ["-10deg", "10deg"]
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

  useEffect(() => {
    if (isVisible) {
      blockVisible.forEach((_, index) => {
        setTimeout(() => {
          setBlockVisible((prev) => {
            const newVisible = [...prev];
            newVisible [index] = true;
            return newVisible;
          });
        }, index * 300);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="lg:grid lg:grid-cols-2 mt-12 pb-24 custom:w-[auto]">
      <div className="flex flex-col lg:pt-52 lg:pl-20 lg:pr-0 custom:p-4">
        <div className="mb-8 lg:text-left custom:text-center relative">
          <span className="lg:text-left text-m font-medium">System features</span>
          <h1 className="text-dark-blue font-bold lg:text-xl custom:text-mobile-h1 mt--2 relative">
            All the cool{' '}
            <span className="inline-block relative">
              <img
                src="https://res.cloudinary.com/diuvgclpk/image/upload/v1746910043/Vector_14_b6wsqo.png"
                alt="Marcação laranja"
                className="absolute inset-x-0 bottom-0 w-full h-6 z-0"
              />
              features
            </span>
          </h1>
          <p className="mt-4 text-dark-blue font-regular text-m text-left w-[600px]">
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
          </p>
          <button className="mt-6 text-blue font-medium flex items-center gap-2 lg:justify-start custom:justify-center">
            View all the features
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

      <motion.div
        ref={imageContainerRef}
        className="relative flex justify-end items-start lg:pr-[80px] custom:pr-0"
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
          src="https://res.cloudinary.com/diuvgclpk/image/upload/v1746910664/Right_nhijk7.png"
          alt="Conjunto de imagens com fundo e elementos sobrepostos"
          className="w-[100%] lg:w-[100%] custom:w-[auto] h-auto rounded-xl"
          initial={{ opacity: 0, x: 20, rotateX: 0, rotateY: 0 }}
          animate={isVisible ? { opacity: 1, x: 0, rotateX: 0, rotateY: 0 } : {}}
          transition={{ type: "spring", stiffness: 260, damping: 20, duration: 0.5 }}
          style={{ rotateX, rotateY }}
        />
      </motion.div>
    </section>
  );
};

export default Section_7;








import React, { useEffect, useRef, useState } from 'react';

const Section_2: React.FC = () => {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const [isCenterVisible, setIsCenterVisible] = useState(false);
  
  const leftImageRef = useRef<HTMLDivElement | null>(null);
  const rightImageRef = useRef<HTMLDivElement | null>(null);
  const centerImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === leftImageRef.current && !isLeftVisible) {
              setIsLeftVisible(true);
            } else if (entry.target === rightImageRef.current && !isRightVisible) {
              setTimeout(() => setIsRightVisible(true), 500);
            } else if (entry.target === centerImageRef.current && !isCenterVisible) {
              setTimeout(() => setIsCenterVisible(true), 1500);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftImageRef.current) observer.observe(leftImageRef.current);
    if (rightImageRef.current) observer.observe(rightImageRef.current);
    if (centerImageRef.current) observer.observe(centerImageRef.current);

    return () => {
      if (leftImageRef.current) observer.unobserve(leftImageRef.current);
      if (rightImageRef.current) observer.unobserve(rightImageRef.current);
      if (centerImageRef.current) observer.unobserve(centerImageRef.current);
    };
  }, [isLeftVisible, isRightVisible, isCenterVisible]);

  return (
    <section className="section2-class flex flex-col items-center p-8 relative overflow-hidden">
      <div className="text-center mb-12">
        <span className="text-orange lg:text-m sm:text-s">No more waste</span>
        <h1 className="text-dark-blue font-bold lg:text-xl sm:text-[30px] custom:text-[30px]">Pick the Sun</h1>
        <p className="mt-4 text-dark-blue lg:text-m lg:m-0  sm:text-s sm:m-3 lg:w-[848px] lg:h-[72px]">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>

      <div className="relative mt-[80px] flex justify-center items-center">
        <div
          ref={leftImageRef}
          className={`absolute left-[-200px] top-[-200px] transition-all duration-500 transform ${
            isLeftVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <img 
            src="/images/forms/form-section-2-1.png" 
            alt="Solar Left"
            className="w-[249.86px] h-[250.22px] lg:w-[auto] lg:h-[auto]"
          />
        </div>

        <div
          ref={rightImageRef}
          className={`absolute right-[-200px] top-[56px] transition-all duration-500 transform ${
            isRightVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <img 
            src="/images/forms/form-section-2-2.png" 
            alt="Solar Right"
            className="w-[249.86px] h-[250.22px] lg:w-[auto] lg:h-[auto] sm:mt-[]"
          />
        </div>

        <div
          ref={centerImageRef}
          className={`relative transition-all duration-500 transform ${
            isCenterVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <img 
            src="/images/Desktop.png"	 
            alt="Solar Center"
            className="relative z-10" // Ajustado para que a imagem fique atrás
          />
          <div className="absolute inset-0 flex items-center justify-center p-0 lg:p-16"> {/* Padding apenas em lg */}
            <p className="text-dark-blue" style={{ fontSize: '16px' }}>Seu texto aqui</p> {/* Insira o texto desejado */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_2;






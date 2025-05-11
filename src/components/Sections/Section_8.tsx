import React from 'react';
import Tilt from 'react-parallax-tilt';

const Section_8: React.FC = () => {
  return (
    <div className="relative bg-yellow overflow-hidden min-h-[48.6875rem] flex flex-col lg:flex-row items-center justify-center">
      
      {/* Imagem esquerda fixada no canto esquerdo no desktop */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-0">
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={250}>
          <img
            src="https://res.cloudinary.com/diuvgclpk/image/upload/v1746906493/Cards_Round_wyxmjy.png"
            alt="Imagem esquerda"
            className="object-contain max-w-none h-auto"
          />
        </Tilt>
      </div>

      {/* Imagem direita fixada no canto direito no desktop */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-0">
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={250}>
          <img
            src="https://res.cloudinary.com/diuvgclpk/image/upload/v1746906524/Cards_Round_1_rv9jc7.png"
            alt="Imagem direita"
            className="object-contain max-w-none h-auto"
          />
        </Tilt>
      </div>

      {/* Imagem esquerda responsiva (mobile) */}
      <div className="block lg:hidden w-full px-4 py-4 z-10">
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={250}>
          <img
            src="https://res.cloudinary.com/diuvgclpk/image/upload/v1746906493/Cards_Round_wyxmjy.png"
            alt="Imagem esquerda"
            className="object-contain max-w-full h-auto mx-auto"
          />
        </Tilt>
      </div>

      {/* Conteúdo central */}
      <div className="z-10 text-center flex flex-col items-center justify-center w-full lg:w-1/3 px-6 py-10">
        <h2 className="text-dark-blue text-xl sm:text-4xl lg:text-5xl font-bolder mb-10 font-roboto">
          Join a world of learning
        </h2>
        <p className="text-m text-dark-blue mb-8 font-roboto">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
          <br className="hidden lg:block" />
          Risus elit et fringilla habitant ut facilisi.
        </p>
        <button className="bg-orange hover:bg-dark-blue text-white font-bold py-3 px-6 rounded-md transition duration-300 font-roboto w-[240px]">
          Sign Up Now
        </button>
      </div>

      {/* Imagem direita responsiva (mobile) */}
      <div className="block lg:hidden w-full px-4 py-4 z-10">
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={250}>
          <img
            src="https://res.cloudinary.com/diuvgclpk/image/upload/v1746906524/Cards_Round_1_rv9jc7.png"
            alt="Imagem direita"
            className="object-contain max-w-full h-auto mx-auto"
          />
        </Tilt>
      </div>
    </div>
  );
};

export default Section_8;

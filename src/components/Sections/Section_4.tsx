import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Section_4: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [blockVisible, setBlockVisible] = useState(Array(4).fill(false));

  const sectionRef = useRef<HTMLDivElement>(null);

  // Função para observar a entrada do elemento na viewport
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

  // Atrasar a visibilidade de cada bloco
  useEffect(() => {
    if (isVisible) {
      blockVisible.forEach((_, index) => {
        setTimeout(() => {
          setBlockVisible((prev) => {
            const newVisible = [...prev];
            newVisible[index] = true;
            return newVisible;
          });
        }, index * 300); // Atraso de 300ms para cada bloco
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="lg:grid lg:grid-cols-2 mt-12 pb-24 custom:w-[auto]">
      {/* Setor esquerdo - Texto e grid de serviços */}
      <div className="flex flex-col lg:pt-52 lg:pl-20 lg:pr-0 custom:p-4">
        {/* Título e descrição */}
        <div className="mb-8 lg:text-left custom:text-center">
          <span className="text-orange lg:text-left text-m font-medium">System features</span>
          <h1 className="text-dark-blue font-bold lg:text-xl custom:text-mobile-h1 mt--2">Powerful features</h1>
          <p className="mt-4 text-dark-blue font-regular text-m">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
        </div>

        {/* Grid de 2x2 com retângulos de descrição de serviços */}
        <div className="grid grid-cols-2 gap-12 lg:mt-24 lg:text-left custom:mt-4 custom:p-4 custom:text-center">
          {/* Blocos de serviço com animação */}
          {[
            {
              title: 'Erat sit',
              description:
                'Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.',
            },
            {
              title: 'Ullamcorper arcut',
              description:
                'Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.',
            },
            {
              title: 'Et pellentesque',
              description:
                'Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.',
            },
            {
              title: 'Amet egestas',
              description:
                'Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis.',
            },
          ].map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={blockVisible[index] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-l font-semibold text-dark-blue mb-2">{block.title}</h3>
              <p className="text-dark-blue lg:text-[18px] custom:text-[16px] font-regular mb-32">
                {block.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Setor direito - Imagens */}
      <div className="relative flex justify-end items-start lg:pr-0 custom:pr-0">
        <motion.img
          src="/images/forms/form-section-4-1.png"
          alt="Illustration of personalized services offered"
          className="w-[80%] lg:w-[70%] custom:w-[auto] h-auto " // Ajuste no tamanho da imagem
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        />

        {/* Segunda Imagem sobreposta com efeitos apenas nesta imagem */}
        <motion.img
          src="/images/forms/form-section-4-2.png"
          alt="Illustration of services in action"
          className="absolute top-[200px] lg:top-[270px] left-[30%] lg:left-[38%] w-[50%] lg:w-[50%] h-auto custom:w-[70%] custom:left-[15%] " // Ajuste no tamanho e posicionamento
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        />
      </div>
    </section>
  );
};

export default Section_4;










import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CommentsType2 = () => {
  const commonImageUrl =
    'https://res.cloudinary.com/diuvgclpk/image/upload/v1746925234/Col_2_jyyuam.png';

  const commentsData = [
    {
      imageUrl: commonImageUrl,
      quote:
        'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.',
      author: 'Marie Poirot',
      company: 'Bigapp',
    },
    {
      imageUrl: commonImageUrl,
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'John Doe',
      company: 'TechCorp',
    },
    {
      imageUrl: commonImageUrl,
      quote:
        'A third comment with different content. Testing the slideshow effect and the wrapping of the text.',
      author: 'Jane Smith',
      company: 'WebDev Inc.',
    },
  ];

  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentCommentIndex((prevIndex) => (prevIndex + 1) % commentsData.length);
    }, 5000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [commentsData.length]);

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
  };

  const nextSlide = () => {
    setCurrentCommentIndex((prevIndex) => (prevIndex + 1) % commentsData.length);
  };

  const prevSlide = () => {
    setCurrentCommentIndex((prevIndex) =>
      prevIndex === 0 ? commentsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-yellow relative py-20 overflow-visible flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCommentIndex}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex items-center justify-center relative w-full max-w-[1200px]"
        >
          {/* Texto */}
          <div className="w-1/2 px-10 flex flex-col justify-center">
            <p className="text-2xl text-darkblue italic mb-6 leading-relaxed">
              {commentsData[currentCommentIndex].quote}
            </p>
            <div>
              <div className="font-semibold text-2xl text-darkblue mb-1">
                {commentsData[currentCommentIndex].author}
              </div>
              <div className="text-darkblue text-lg">
                {commentsData[currentCommentIndex].company}
              </div>
            </div>
          </div>

          {/* Imagem solta */}
          <div className="relative w-[528px] h-[415px] z-10 translate-y-10">
            {/* Forma azul escura */}
            <div
              className="absolute w-[550px] h-[435px] bg-darkblue rounded-[80px] transform rotate-[45deg] -z-10"
              style={{ top: '50px', left: '30px' }}
            />
            {/* Imagem */}
            <img
              src={commentsData[currentCommentIndex].imageUrl}
              alt={`Foto de ${commentsData[currentCommentIndex].author}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Botões de Navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/70 text-darkblue font-bold py-2 px-3 rounded-full z-20 cursor-pointer"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/70 text-darkblue font-bold py-2 px-3 rounded-full z-20 cursor-pointer"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default CommentsType2;





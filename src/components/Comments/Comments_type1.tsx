import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

const testimonials = [
  {
    text: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    author: 'Hellen Jummy',
    title: 'Financial Counselor',
    image: 'https://res.cloudinary.com/diuvgclpk/image/upload/v1746913205/User_Thumb_5_tx9y5v.png',
  },
  {
    text: 'Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultricies nisi, nec tortor. Vestibulum, ultricies ultricies neque, hac ultricies dolor.',
    author: 'Ralph Edwards',
    title: 'Math Teacher',
    image: 'https://res.cloudinary.com/diuvgclpk/image/upload/v1746913185/User_Thumb_1_dm3xos.png',
  },
  {
    text: 'Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.',
    author: 'Helena John',
    title: 'Psychology Student',
    image: 'https://res.cloudinary.com/diuvgclpk/image/upload/v1746913185/User_Thumb_2_q2nq92.png',
  },
  {
    text: 'Sed adipiscing diam donec adipiscing tristique risus nec feugiat. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque sit amet porttitor eget dolor morbi non.',
    author: 'John Smith',
    title: 'Software Engineer',
    image: 'https://res.cloudinary.com/diuvgclpk/image/upload/v1746913205/User_Thumb_5_tx9y5v.png',
  },
];

type Testimonial = {
  text: string;
  author: string;
  title: string;
  image: string;
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white border border-gray-200 rounded-[20px] p-6 min-w-[412px] max-w-[412px] h-[305px] shadow-md flex-shrink-0 flex flex-col justify-center items-left text-left">
    <div className="mb-4">
      <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
    </div>
    <div className="flex items-center space-x-4">
      <img
        src={testimonial.image}
        alt={testimonial.author}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="text-gray-900 font-semibold">{testimonial.author}</h4>
        <p className="text-gray-500 text-sm">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

const Comments_type1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Função para navegar para o próximo item com loop infinito
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: (currentIndex + 1) * 412, // Deslocamento para o próximo card
        behavior: 'smooth',
      });
    }
  };

  // Função para navegar para o item anterior com loop infinito
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: (currentIndex - 1 + testimonials.length) * 412, // Deslocamento para o card anterior
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="w-full px-20 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-5xl font-bolder text-gray-900">What everyone says</h2> {/* Ajuste para título */}
          <div className="flex space-x-3">
            <button
              onClick={goToPrev}
              className="bg-white border border-orange text-orange hover:bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={goToNext}
              className="bg-white border border-orange text-orange hover:bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div
          className="overflow-hidden flex space-x-6 py-4" // Ajustando para evitar a barra de rolagem
          ref={containerRef}
        >
          {testimonials.concat(testimonials).map((testimonial, index) => ( // Concatenando os cards para loop
            <div key={index} className="w-[412px] flex-shrink-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments_type1;


import React, { useState, useEffect, useMemo } from 'react';

// Interface for comments
interface Comment {
  image: string;
  name: string;
  site: string;
  quote: string;
}

// List of comments
const comments: Comment[] = [
  {
    image: '/public/images/image-users/User Thumb.png',
    name: 'Rwanda Melflor',
    site: 'zerowaste.com',
    quote: 'Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.',
  },
  {
    image: '/public/images/image-users/User Thumb 2.png',
    name: 'Jane Cooper',
    site: '10KWh.com',
    quote: 'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla.',
  },
  {
    image: '/public/images/image-users/User Thumb 3.png',
    name: 'Ralph Edwards',
    site: 'j32KWh.org',
    quote: 'Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque.',
  },
  {
    image: '/public/images/image-users/User Thumb 4.png',
    name: 'Cameron Williamson',
    site: '12KWh.org',
    quote: 'Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet.',
  },
];

// Comments component
const CommentsType1: React.FC = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // Controls fade transition

  // Automatically change comment every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out current comment
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
        setFade(true); // Start fading in next comment
      }, 500); // Match the fade-out duration
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const currentComment = useMemo(() => comments[currentIndex], [currentIndex]); // Memoize current comment

  return (
    <div className="w-full sm:w-[600px] h-auto md:h-[302px] text-s p-4 md:p-0">
      <p className={`mt-6 text-dark-blue transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'} text-base md:text-lg`}>
        “{currentComment.quote}”
      </p>
      <div className={`flex items-center mt-4 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <img
          src={currentComment.image}
          alt={`${currentComment.name} Thumbnail`}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4"
          loading="lazy" // Lazy loading of image
        />
        <div>
          <p className="text-[16px] md:text-[18px] font-bold text-dark-blue">{currentComment.name}</p>
          <p className="text-xs md:text-s text-[#475569] font-regular">{currentComment.site}</p>
        </div>
      </div>
    </div>
  );
});

export default CommentsType1;

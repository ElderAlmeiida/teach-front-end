import React, { useState, useEffect } from 'react';

// Define the Comment interface to type-check the comment objects
interface Comment {
  image: string;  // URL of the user's image
  name: string;   // Name of the user
  site: string;   // Site or company of the user
  quote: string;  // Quote from the user
}

// Array of comments to be displayed in the slideshow
const comments: Comment[] = [
  {
    image: '/public/images/image-users/User Thumb.png',
    name: 'Jane Cooper',
    site: '10KWh',
    quote: 'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
  },
  {
    image: '/public/images/image-users/User Thumb 2.png',
    name: 'Ralph Edwards',
    site: '32KWh',
    quote: 'Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.',
  },
  {
    image: '/public/images/image-users/User Thumb 3.png',
    name: 'Courtney Henry',
    site: '6KWh',
    quote: 'Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.',
  },
  {
    image: '/public/images/image-users/User Thumb 4.png',
    name: 'Cameron Williamson',
    site: '12KWh',
    quote: 'Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.',
  }
];

// Main functional component for the comments slideshow
const Comments_type2: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State for the current comment index
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // State to check if the device is mobile

  // Function to handle window resizing and update the isMobile state
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  // Effect to add and clean up the resize event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to go to the next comment
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  // Function to go to the previous comment
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
  };

  return (
    <div className="relative p-8 bg-purple-700 flex flex-col items-start">
      <div className="flex space-x-4 overflow-hidden items-start">
        {comments.map((comment, index) => (
          <div
            key={index} // Unique key for each comment
            className={`transition-all duration-300 ease-in-out flex-shrink-0 ${
              isMobile
                ? (index === currentIndex ? 'w-[364px] h-[490px] border border-gray-300 opacity-100 rounded-lg' : 'hidden') // Show only the current comment in mobile view
                : (index === currentIndex 
                  ? 'w-[364px] h-[490px] border border-gray-300 opacity-100 rounded-lg' 
                  : 'w-[364px] h-[442px] border border-gray-300 opacity-50 rounded-lg') // Adjust for inactive card size in desktop view
            } bg-white p-6 shadow-lg flex flex-col items-start justify-center`}
          >
            <p className="text-dark-blue text-sm mb-8 text-left">“{comment.quote}”</p> {/* Quote text */}
            <div className="flex items-center">
              <img
                src={comment.image}
                alt={`${comment.name} Thumbnail`} // Alt text for the user's image
                className="w-10 h-10 rounded-full mb-2"
              />
              <div className="ml-3">
                <p className="text-sm font-bold text-dark-blue">{comment.name}</p> {/* User name */}
                <p className="text-xs text-gray-500">{comment.site}</p> {/* User site */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons for previous and next comments */}
      <div className="flex mt-6 lg:justify-start custom:justify-center w-full">
        <button
          onClick={handlePrev} // Previous button handler
          className="bg-transparent p-4"
          aria-label="Previous Comment"
        >
          <img src="/public/icons/Button-Left.svg" alt="Previous" />
        </button>

        <button
          onClick={handleNext} // Next button handler
          className="bg-transparent"
          aria-label="Next Comment"
        >
          <img src="/public/icons/Button-Right.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Comments_type2; // Export the component for use in other parts of the application





import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section_9: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-[#EA580C] py-16 md:py-24 s" 
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      <div className="container mx-auto text-center text-white px-4">
        <motion.h2
          variants={variants}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-4xl font-bold mb-6"
        >
          Ready for your next project?
        </motion.h2>
        <motion.p
          variants={variants}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 text-lg font-small"
        >
          Sit elit feugiat turpis sed integer integer accumsan turpis.
        </motion.p>
        <motion.form
          variants={variants}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="max-w-md mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-left text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none "
              placeholder="What are you say ?"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-dark-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Request Demo
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Section_9;

















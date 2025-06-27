import React from 'react';
import { logo, earthbg } from '../assets';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <motion.div className="absolute inset-0 flex justify-center items-center">
        <div className="w-full h-[calc(100vh + 200px)] overflow-hidden relative">
          <img src={earthbg} alt="Logo" className="object-cover w-full h-full" style={{ marginTop: '660px' }} />
          <div className="border-blur absolute top-0 left-0 w-full h-[25vh]" style={{ filter: 'blur(20px)' }}></div>
          <motion.div variants={textVariant()} className="flex justify-center items-center absolute inset-0">
            <h1 className="text-white text-center text-4xl md:text-6xl font-poppins" style={{ marginTop: '-10vh', marginBottom: '-10vh' }}>
              USTS Solutions
              for Your Business!
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

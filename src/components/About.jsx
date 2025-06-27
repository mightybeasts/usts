import React from 'react';
import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion';
import { EarthCanvas } from './canvas';
import { styles } from '../style';
import { services } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const About = () => {

  return (
    <>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>About Us</p>
      </motion.div>

      <div className='flex flex-col md:flex-row gap-10'>
        <motion.div variants={textVariant()} className='md:w-1/2 text-neutral-400 text-[17px] leading-[30px]'>
          "USTS has continued to grow in size & strength since it was founded in 2012. We continue to adapt and grow, embracing new technologies so we continue to be at the forefront of network infrastructure design, installation and support services. Through constant innovation our comprehensive service offering is continually evolving to ensure we add value to our growing client base. Our professional and flexible approach to business delivery has established usts as the physical network infrastructure integrator of choice to some of the world’s leading organisations."
        </motion.div>
        <motion.div className='md:w-1/2 w-full md:h-[550px] h-[350px]'>
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");

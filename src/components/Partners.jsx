import React, { useState } from 'react';
import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Servicecard = ({ index, title, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tilt className='xs:w-[250px] w-full '>
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col cursor-pointer transition-transform ease-in-out hover:scale-125 ${isHovered ? 'hovered' : ''}`}>
          {isHovered ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className='text-slate-200 text-center text-sm'
            >
              {services[index].desc}
            </motion.p>
          ) : (
            <>
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                src={icon} alt={title} className='w-16 h-16 object-contain '
              />
              <motion.h3
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className='text-white text-[20px] font-bold text-center'
              >
                {title}
              </motion.h3>
            </>
          )}
        </div>
      </motion.div>
    </Tilt>
  )
}

function Partners() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Our Services</p>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service, index) => (
          <Servicecard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Partners, "services");

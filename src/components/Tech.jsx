import React,{useState,useEffect} from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import {textVariant,fadeIn} from '../utils/motion'
import { technologies } from "../constants";

const Tech = () => {
  
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >Our Support systems</p>
       
      </motion.div  >
      <motion.div variants={textVariant()} className=" flex flex-wrap gap-10 ">
      {technologies.map((technology) => (
        <div className='w-32 h-12' key={technology.name}>
          <img src={technology.icon} alt="image" />
        </div>
      ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
import React from 'react';
import { motion } from 'framer-motion';
import style from './styles/work.module.css';
import SectionWrapper from '../hoc';
import { textVariant } from '../utils/motion';

const Work = () => {
  return (
    <div className="relative">
      {/* You can keep this or remove it */}
      {/* <motion.h1 variants={textVariant()} className={style.title}>
        My Recent Works
      </motion.h1> */}
      
      {/* All project content removed */}
    </div>
  );
};

export default SectionWrapper(Work, 'work', 'my-8');

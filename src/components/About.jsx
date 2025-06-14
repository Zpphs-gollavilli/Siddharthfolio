import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        Hey there! I&apos;m
        {' '}
        <a
          href="https://www.linkedin.com/in/your-link"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Guttula Siddharth (Siddu),
        </a>
        {' '}
        a dedicated software developer and a passionate national-level badminton player. I enjoy building impactful applications using modern technologies like React, Node.js, and MongoDB.
      </motion.p>

      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        My journey is a blend of tech and sports. On one hand, I love crafting real-world web projects and learning full-stack development. On the other, I’m a competitive badminton player who has represented my state at various levels. This balance of discipline and creativity shapes my approach to every challenge I take on.
      </motion.p>

      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        When I’m not coding or debugging, I’m probably on the court training for my next badminton tournament. I believe in continuous learning, whether it’s through building apps or pushing my limits in sports.
        {' '}
       contact me at{' '}
        <a href="mailto:guttulasiddharth1109@gmail.com" className={style.link}>
         guttulasiddharth1109@gmail.com
        </a>
        {' '}
        I’m always eager to connect with fellow developers and sports enthusiasts, so feel free to reach out!
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');

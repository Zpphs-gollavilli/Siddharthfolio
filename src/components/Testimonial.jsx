import React from 'react';
import SectionWrapper from '../hoc';
import style from './styles/testimonial.module.css';

const Testimonial = () => {
  return (
    <div className={style.container}>
      {/* Testimonials section removed */}
    </div>
  );
};

export default SectionWrapper(Testimonial, 'testimonial', 'my-0');

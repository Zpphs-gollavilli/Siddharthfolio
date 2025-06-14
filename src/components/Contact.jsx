import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import { fadeIn, textVariant, slideIn } from '../utils/motion';
import contact from '../assets/contact.svg';
import style from './styles/contact.module.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_k0zoxi9',          // ✅ Your Service ID
      'template_rcmaf84',         // ✅ Your Template ID
      {
        from_name: form.name,
        to_name: 'Siddharth',     // Optional: your name
        from_email: form.email,
        to_email: 'guttulasiddharth1109@gmail.com', // Optional if template handles it
        message: form.message,
      },
      'eFFnvBh7YKicvN14v'         // ✅ Your Public Key
    ).then(() => {
      setLoading(false);
      alert('✅ Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    }, (error) => {
      setLoading(false);
      console.error(error);
      alert('❌ Something went wrong. Please try again later.');
    });
  };

  return (
    <>
      <motion.h1 variants={textVariant()} className={style.title}>
        Get in Touch!
      </motion.h1>
      <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.subtitle}>
        I&apos;m always excited to hear about new opportunities and collaborations. Don&apos;t hesitate to reach out and let&apos;s make something great.
      </motion.p>
      <div className={style.container}>
        <motion.form
          ref={formRef}
          variants={slideIn('left', '', 0, 1)}
          onSubmit={handleSubmit}
          className={style.form_container}
        >
          <div className={style.form}>
            <h4 className={style.form_title}>Contact Me</h4>
            <input
              type="text"
              placeholder="Name"
              required
              maxLength="30"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={style.input}
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={form.email}
              onChange={handleChange}
              className={style.input}
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Your message"
              required
              maxLength="500"
              name="message"
              value={form.message}
              onChange={handleChange}
              className={`${style.input} ${style.textarea}`}
            />
            <button type="submit" className={style.btn_container}>
              <span className={style.btn_hover}>
                {loading ? 'Sending...' : 'Get in touch'}
              </span>
              <span className={style.btn}>
                {loading ? 'Sending...' : 'Get in touch'}
              </span>
            </button>
          </div>
        </motion.form>
        <motion.div variants={slideIn('right', '', 0, 1)} className={style.img_container}>
          <img src={contact} alt="contact" className={style.img} loading="lazy" />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact', 'my-0');

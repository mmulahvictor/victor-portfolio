// src/pages/ContactPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

const ContactForm = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  label {
    font-size: 1rem;
    color: #2c3e50;
  }

  input, textarea {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    color: #2c3e50;

    &:focus {
      border-color: #3498db;
      outline: none;
    }
  }

  button {
    width: 100%;
    background-color: #3498db;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2980b9;
    }
  }
`;

const contactVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Send form data to the backend or email service
  };

  return (
    <ContactSection>
      <ContactForm variants={contactVariants} initial="hidden" animate="visible" onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label htmlFor="message">Message</label>
        <textarea name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
        
        <button type="submit">Send Message</button>
      </ContactForm>
    </ContactSection>
  );
};

export default ContactPage;

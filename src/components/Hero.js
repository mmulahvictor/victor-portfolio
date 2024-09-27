// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #3498db 0%, #2ecc71 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 2;
  position: relative;
`;

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
};

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent as={motion.div} initial="hidden" animate="visible" variants={heroVariants}>
        <motion.h1 variants={heroVariants}>Victor Mmulah</motion.h1>
        <motion.p variants={heroVariants}>ICT Officer | Software Developer | Tech Enthusiast</motion.p>
        <motion.a href="/projects" className="cta" variants={heroVariants}>View My Work</motion.a>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;

// src/components/Hero.js
import React from 'react';
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

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  a.cta {
    margin-top: 2rem;
    display: inline-block;
  }
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Hero = () => {
  return (
    <HeroSection>
      <BackgroundOverlay />
      <HeroContent>
        <h1>Victor Mmulah</h1>
        <p>ICT Officer | Software Developer | Tech Enthusiast</p>
        <a href="/projects" className="cta">View My Work</a>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;

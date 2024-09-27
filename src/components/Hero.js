// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  color: white;
  text-align: center;
`;

const Hero = () => {
  return (
    <HeroSection>
      <div>
        <h1>Hi, I'm Victor Mmulah</h1>
        <p>ICT Officer | Software Developer | Tech Enthusiast</p>
        <a href="/projects" className="cta">View My Work</a>
      </div>
    </HeroSection>
  );
};

export default Hero;

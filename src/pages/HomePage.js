// src/pages/HomePage.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #f4f4f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroText = styled.div`
  max-width: 800px;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #2c3e50;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
  margin: 1rem 0;
`;

const CTAContainer = styled.div`
  margin-top: 2rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 2rem;
  margin: 0.5rem;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  font-weight: 500;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }
`;

const SkillsSection = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

const SkillsTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
`;

const SkillsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  list-style-type: none;
  padding: 0;
`;

const Skill = styled.li`
  font-size: 1rem;
  color: #7f8c8d;
  padding: 0.5rem 1rem;
  border: 1px solid #7f8c8d;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3498db;
    color: white;
    border-color: #3498db;
  }
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <HeroText>
        <Title>Hello, I'm Victor Mmulah</Title>
        <Subtitle>
          I'm a passionate Software Developer and ICT Officer with a focus on building responsive, dynamic, and impactful web applications.
          Let's explore how I can help bring ideas to life.
        </Subtitle>
      </HeroText>

      <CTAContainer>
        <CTAButton to="/projects">View My Projects</CTAButton>
        <CTAButton to="/contact">Contact Me</CTAButton>
      </CTAContainer>

      <SkillsSection>
        <SkillsTitle>Skills & Technologies</SkillsTitle>
        <SkillsList>
          <Skill>React.js</Skill>
          <Skill>JavaScript</Skill>
          <Skill>HTML & CSS</Skill>
          <Skill>Styled-Components</Skill>
          <Skill>Git & Version Control</Skill>
          <Skill>Linux Operating System</Skill>
        </SkillsList>
      </SkillsSection>
    </HomeContainer>
  );
};

export default HomePage;

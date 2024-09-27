// src/components/ProjectItem.js
import React from 'react';
import styled from 'styled-components';

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1rem;
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  span {
    background-color: #3498db;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 5px;
    font-size: 0.75rem;
  }
`;

const ProjectLink = styled.a`
  color: #3498db;
  font-size: 1rem;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9;
  }
`;

const ProjectItem = ({ project }) => {
  const { title, description, image, techStack, link } = project;

  return (
    <ProjectCard>
      <ProjectImage src={image} alt={title} />
      <ProjectInfo>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <TechStack>
          {techStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </TechStack>
        <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </ProjectLink>
      </ProjectInfo>
    </ProjectCard>
  );
};

export default ProjectItem;

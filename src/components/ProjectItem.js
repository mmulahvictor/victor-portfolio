// src/components/ProjectItem.js
import React from 'react';
import styled from 'styled-components';

const ProjectCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    background-color: #61dafb;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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

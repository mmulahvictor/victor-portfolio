// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ProjectCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'Description for project 1' },
    { title: 'Project 2', description: 'Description for project 2' },
    { title: 'Project 3', description: 'Description for project 3' },
  ];

  return (
    <ProjectsContainer>
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;

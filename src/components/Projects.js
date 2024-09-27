// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const projectsData = [
  {
    title: 'Edutab Africa Website',
    description: 'A website for educational tools and resources, built using React and Node.js.',
    image: '/path/to/image1.jpg',
    techStack: ['React', 'Node.js', 'CSS'],
    link: 'https://example.com/edutab'
  },
  {
    title: 'JavaScript Quiz App',
    description: 'An interactive quiz app developed using vanilla JavaScript and localStorage.',
    image: '/path/to/image2.jpg',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://example.com/quiz-app'
  },
  {
    title: 'Personal Blog',
    description: 'A blog website built with Gatsby and Markdown for easy content management.',
    image: '/path/to/image3.jpg',
    techStack: ['Gatsby', 'GraphQL', 'Markdown'],
    link: 'https://example.com/blog'
  }
];

const Projects = () => {
  return (
    <ProjectsContainer>
      {projectsData.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </ProjectsContainer>
  );
};

export default Projects;

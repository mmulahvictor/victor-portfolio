// src/components/ProjectItem.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectCard = styled(motion.div)`
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

const projectVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeIn' } },
};

const ProjectItem = ({ project }) => {
  const { title, description, image, techStack, link } = project;

  return (
    <ProjectCard variants={projectVariants} initial="hidden" animate="visible">
      <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '1rem', textAlign: 'center' }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {techStack.map((tech, index) => <span key={index} style={{ backgroundColor: '#3498db', padding: '0.25rem 0.75rem', borderRadius: '5px', color: 'white', fontSize: '0.75rem' }}>{tech}</span>)}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ marginTop: '1rem', display: 'block', color: '#3498db', fontWeight: 'bold' }}>View Project</a>
      </div>
    </ProjectCard>
  );
};

export default ProjectItem;

// src/pages/ProjectsPage.js
import React from 'react';
import Projects from '../components/Projects';
import styled from 'styled-components';

const ProjectsPageContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ProjectsPage = () => {
  return (
    <ProjectsPageContainer>
      <h2>Projects</h2>
      <Projects />
    </ProjectsPageContainer>
  );
};

export default ProjectsPage;

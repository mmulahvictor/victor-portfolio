// src/pages/HomePage.js
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <h1>Welcome to My Portfolio</h1>
      <p>This is a showcase of my work and skills.</p>
    </HomeContainer>
  );
};

export default HomePage;

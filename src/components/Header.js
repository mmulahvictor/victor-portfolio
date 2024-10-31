// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50; /* Dark background */
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #3498db; /* Logo color */
  
  &:hover {
    color: #2980b9; /* Darker shade on hover */
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding-top: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db; /* Change color on hover */
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    width: 100%;
    text-align: center;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Victor's Portfolio</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink> {/* Added Blog link */}
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

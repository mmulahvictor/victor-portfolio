// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  transition: transform 0.3s ease-in-out;

  ${(props) => (props.scrolled ? 'transform: translateY(-100%);' : '')}
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    font-size: 1.1rem;
    color: #ecf0f1;
    text-transform: uppercase;
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #e74c3c;
      bottom: -5px;
      left: 0;
      opacity: 0;
      transform: scaleX(0);
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    &:hover:before {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <h1>Victor</h1>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </Nav>
  );
};

export default Header;

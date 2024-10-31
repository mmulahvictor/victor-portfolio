// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem 0;
  background-color: #2c3e50;
  color: white;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Your Portfolio. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

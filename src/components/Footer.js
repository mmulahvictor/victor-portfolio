// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  padding: 2rem 0;
  color: white;
  text-align: center;

  a {
    color: #3498db;
    font-weight: bold;
    margin: 0 1rem;
    text-decoration: none;
    
    &:hover {
      color: #2980b9;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Made with ❤️ by Victor Mmulah | Connect with me on 
        <a href="https://github.com/mmulahvictor" target="_blank"> GitHub</a> and 
        <a href="https://www.linkedin.com/in/victor-mmulah-51666819b/" target="_blank"> LinkedIn</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;

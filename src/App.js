// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';
import styled from 'styled-components';

const MainContent = styled.main`
  padding-top: 80px; /* Adjust this based on your header's height */
  min-height: calc(100vh - 80px); /* To ensure it occupies the full viewport */
`;

function App() {
  return (
    <Router>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainContent>
      <Footer />
    </Router>
  );
}

export default App;

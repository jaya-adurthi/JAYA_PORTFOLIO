import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { GithubShowcase } from './components/GithubShowcase';
import { Education } from './components/Education';
import { HireMe } from './components/HireMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BottomDock } from './components/BottomDock';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-wrapper">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubShowcase />
        <Education />
        <HireMe />
        <Contact />
      </main>
      <Footer />
      <BottomDock theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;

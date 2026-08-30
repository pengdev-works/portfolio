import React, { useState, useEffect } from 'react';
import AetherField from './components/AetherField';
import CustomCursor from './components/CustomCursor';
import EasterEgg from './components/EasterEgg';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Stack from './components/Stack';
import Now from './components/Now';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('aether_portfolio_theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('aether_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {/* 1. WebGL2 Starfield Background Canvas */}
      <AetherField />

      {/* 2. SVG Fractal Noise Overlay */}
      <div className="aether-noise-overlay" aria-hidden="true" />

      {/* 3. Custom Cursor */}
      <CustomCursor />

      {/* 4. Easter Egg Key Listener */}
      <EasterEgg />

      {/* A. Top Bar */}
      <TopBar theme={theme} toggleTheme={toggleTheme} />

      {/* Main content */}
      <main id="main-content">
        {/* B. Hero — full-viewport with embedded 3D canvas */}
        <Hero />

        {/* C. Projects — AbraVenture flagship case study */}
        <Projects />

        {/* D. About */}
        <About />

        {/* E. Stack & Tools */}
        <Stack />

        {/* F. Now — current status */}
        <Now />

        {/* G. Contact */}
        <Contact />
      </main>

      {/* H. Footer */}
      <Footer />
    </>
  );
}

export default App;

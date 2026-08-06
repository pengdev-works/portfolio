import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

function App() {
  const containerRef = useScrollReveal();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-radial-gradient"></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main ref={containerRef}>
        <Hero />
        <div className="reveal">
          <About />
        </div>
        <div className="reveal reveal-delay-1">
          <Projects />
        </div>
        <div className="reveal reveal-delay-2">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

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

  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-radial-gradient"></div>

      <Navbar />
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

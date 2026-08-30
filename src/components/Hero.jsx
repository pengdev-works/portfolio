import React, { useState, useEffect, useRef } from 'react';
import HeroCanvas from './HeroCanvas';
import './Hero.css';

const line1Text = "Designing code,";
const line2Text = "engineering";
const line3Text = "experiences.";

const Hero = () => {
  const [isNearCue, setIsNearCue] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const cueRef = useRef(null);

  // Trigger entrance animation after mount
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cueRef.current) return;
      const rect = cueRef.current.getBoundingClientRect();
      const cueX = rect.left + rect.width / 2;
      const cueY = rect.top + rect.height / 2;
      setIsNearCue(Math.hypot(e.clientX - cueX, e.clientY - cueY) < 200);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* 3D WebGL canvas — fills the full hero background */}
      <div className="hero-canvas-wrapper" aria-hidden="true">
        <HeroCanvas />
      </div>

      {/* Radial gradient vignette over the canvas */}
      <div className="hero-vignette" aria-hidden="true" />

      <div className={`container hero-container ${isLoaded ? 'hero-loaded' : ''}`}>
        <div className="hero-content">
          {/* Eyebrow Pill */}
          <div className="hero-eyebrow-pill font-mono reveal-hero" style={{ animationDelay: '0.1s' }}>
            <span className="eyebrow-dot" aria-hidden="true" />
            <span>Designing from La Paz, Abra · Philippines · Available for remote</span>
          </div>

          {/* Kinetic Star-Text Headline */}
          <h1 className="star-headline">
            <span className="star-line star-line1">
              {line1Text.split('').map((char, i) => (
                <span
                  key={`l1-${i}`}
                  className="star-char"
                  style={{ animationDelay: `${0.3 + i * 0.03}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
            <br />
            <span className="star-line star-line2 gradient-text-plasma">
              {line2Text.split('').map((char, i) => (
                <span
                  key={`l2-${i}`}
                  className="star-char star-flicker"
                  style={{ animationDelay: `${0.5 + i * 0.03}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
            <br />
            <span className="star-line star-line3 gradient-text-ember">
              {line3Text.split('').map((char, i) => (
                <span
                  key={`l3-${i}`}
                  className="star-char star-flicker"
                  style={{ animationDelay: `${0.72 + i * 0.03}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h1>

          {/* Supporting paragraph */}
          <p className="hero-paragraph text-soft reveal-hero" style={{ animationDelay: '1.1s' }}>
            I craft immersive, high-performance web applications that merge
            striking aesthetics with robust, scalable architecture. Built for the
            modern web.
          </p>

          {/* CTAs */}
          <div className="hero-cta-group reveal-hero" style={{ animationDelay: '1.3s' }}>
            <a href="#projects" className="btn-primary" id="hero-cta-work">
              Explore Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn-secondary" id="hero-cta-contact">
              Make Contact
            </a>
          </div>

          {/* Tech pill row */}
          <div className="hero-tech-pills reveal-hero" style={{ animationDelay: '1.5s' }}>
            {['React', 'Node.js', 'Three.js', 'Tailwind', 'Vercel'].map((tech) => (
              <span key={tech} className="tech-pill font-mono">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div ref={cueRef} className="hero-descend-cue font-mono">
        <a href="#projects" className="descend-link" aria-label="Scroll to projects">
          {isNearCue ? (
            <span className="pulsating-star-cue" aria-hidden="true">✦</span>
          ) : (
            <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          )}
          <span>scroll</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;

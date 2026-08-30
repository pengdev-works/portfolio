import React, { useEffect, useRef } from 'react';
import profileImg from '../assets/images/profile.jpg';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('active'), i * 130);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding about-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="about-header">
          <span className="section-eyebrow reveal">✦ Spectral Identity</span>
          <h2 className="section-title reveal reveal-delay-1">About the Engineer</h2>
        </div>

        {/* Two-column layout */}
        <div className="about-grid">
          {/* Left: Portrait with animated glow ring + float */}
          <div className="about-portrait-col reveal reveal-delay-2">
            <div className="portrait-frame">
              <img
                src={profileImg}
                alt="Jhon Christopher Paragas — Full-Stack Engineer"
                className="portrait-img"
              />
              {/* Animated aurora ring */}
              <div className="rotating-aurora-ring" aria-hidden="true" />
              {/* Glow halo behind portrait */}
              <div className="portrait-glow" aria-hidden="true" />
            </div>

            {/* Availability badge below portrait */}
            <div className="portrait-availability font-mono">
              <span className="avail-dot" aria-hidden="true" />
              <span>Open to remote contracts</span>
            </div>
          </div>

          {/* Right: Bio text */}
          <div className="about-text-col glass-panel reveal reveal-delay-3">
            <p className="about-paragraph">
              I'm <strong>Jhon Christopher Paragas</strong>, a Full-Stack Engineer
              and Design-Engineer hybrid with a passion for building high-performance web
              applications that merge precision engineering with striking visual identity.
            </p>

            <p className="about-paragraph text-muted">
              My craft sits at the intersection of production-grade software architecture and
              modern frontend design. From government enterprise portals like AbraVenture to
              custom interactive web experiences, I bridge design systems directly into clean,
              scalable TypeScript code.
            </p>

            <p className="about-paragraph text-muted">
              I'm currently open to select full-stack or lead design-engineering engagements
              with teams that prioritize clean systems design, bold digital storytelling, and
              exceptional user experience.
            </p>

            {/* Quick stats */}
            <div className="about-quick-stats">
              <div className="stat-item">
                <span className="stat-value font-mono gradient-text-aurora">React</span>
                <span className="stat-label font-mono">Primary Stack</span>
              </div>
              <div className="stat-item">
                <span className="stat-value font-mono gradient-text-plasma">Node.js</span>
                <span className="stat-label font-mono">Backend</span>
              </div>
              <div className="stat-item">
                <span className="stat-value font-mono gradient-text-ember">Remote</span>
                <span className="stat-label font-mono">Work Mode</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

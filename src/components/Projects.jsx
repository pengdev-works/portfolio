import React, { useState, useEffect, useRef } from 'react';
import {
  ExternalLink, Globe, ShieldCheck, MapPin,
  LayoutDashboard, FileBarChart2, Users, CheckCircle
} from 'lucide-react';
import abraHero       from '../assets/images/abraventure-hero.png';
import abraProvincial from '../assets/images/abraventure-provincial.png';
import abraMunicipal  from '../assets/images/abraventure-municipal.png';
import abraLogin      from '../assets/images/abraventure-login.png';
import './Projects.css';

const screens = [
  {
    id: 'main',
    title: 'Main Tourism Portal',
    subtitle: 'Public landing & interactive map',
    img: abraHero,
  },
  {
    id: 'provincial',
    title: 'Provincial DOT Panel',
    subtitle: 'Province-wide oversight & analytics',
    img: abraProvincial,
  },
  {
    id: 'municipal',
    title: 'Municipal DOT Dashboard',
    subtitle: 'Accreditation & local attractions',
    img: abraMunicipal,
  },
  {
    id: 'auth',
    title: 'Auth & Security',
    subtitle: 'Multi-role authentication portal',
    img: abraLogin,
  },
];

const highlights = [
  {
    icon: ShieldCheck,
    text: 'Multi-Tier DOT Administration (Provincial & Municipal)',
  },
  {
    icon: MapPin,
    text: '27 Municipalities & 100+ Attractions Directory',
  },
  {
    icon: LayoutDashboard,
    text: 'Accreditation Verification & Approval Workflows',
  },
  {
    icon: FileBarChart2,
    text: 'Automated PDF & CSV Analytics Report Generation',
  },
  {
    icon: Users,
    text: 'Multi-Role Authentication (Admin, Provincial, Municipal)',
  },
];

const tags = ['React', 'Node.js', 'Vercel', 'Tailwind CSS', 'Interactive Map', 'PostgreSQL'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fading, setFading] = useState(false);
  const sectionRef = useRef(null);

  // Scroll reveal
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('active'), i * 120);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (idx) => {
    if (idx === activeTab) return;
    setFading(true);
    setTimeout(() => {
      setActiveTab(idx);
      setFading(false);
    }, 220);
  };

  return (
    <section id="projects" className="section-padding projects-section" ref={sectionRef}>
      <div className="container">

        {/* ── Section Header ── */}
        <div className="projects-header">
          <span className="section-eyebrow reveal">✦ Featured Case Study</span>
          <h2 className="section-title reveal reveal-delay-1">AbraVenture Platform</h2>
          <p className="projects-subtitle text-muted reveal reveal-delay-2">
            An end-to-end provincial tourism management system built for the Province of Abra (CAR), Philippines.
          </p>
        </div>

        {/* ── Flagship Card ── */}
        <div className="flagship-card glass-panel reveal reveal-delay-2">

          {/* ── Top badge row ── */}
          <div className="flagship-meta font-mono reveal reveal-delay-3">
            <span className="project-index-badge">01</span>
            <span className="flagship-badge">
              <CheckCircle size={13} />
              Flagship Enterprise Application
            </span>
            <span className="flagship-year text-muted">2024–2025</span>
          </div>

          {/* ── Main 2-column grid ── */}
          <div className="flagship-grid">

            {/* LEFT: Info */}
            <div className="flagship-info">
              <p className="flagship-subtitle-sm font-mono gradient-text-plasma">
                Integrated Tourism & DOT Governance Portal
              </p>

              <p className="flagship-desc text-muted">
                Built an enterprise provincial tourism management system for the Province of Abra (CAR).
                Empowers provincial & municipal tourism officers to manage 27 municipalities,
                verify accreditation for homestays & guides, and publish local events.
              </p>

              {/* Highlights */}
              <ul className="flagship-highlights">
                {highlights.map(({ icon: Icon, text }) => (
                  <li key={text} className="highlight-item">
                    <Icon size={16} className="highlight-icon" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="project-tags">
                {tags.map((tag) => (
                  <span key={tag} className="project-tag font-mono">{tag}</span>
                ))}
              </div>

              {/* CTA */}
              <div className="flagship-actions">
                <a
                  href="https://abraventure2-0.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  id="abraventure-live-link"
                >
                  Visit Live Platform <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* RIGHT: Browser Mockup */}
            <div className="flagship-preview">
              <div className="browser-mockup glass-panel">

                {/* Browser chrome */}
                <div className="browser-header">
                  <div className="browser-dots" aria-hidden="true">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <div className="browser-address-bar font-mono">
                    <Globe size={12} className="address-icon" aria-hidden="true" />
                    <span>https://abraventure2-0.vercel.app/</span>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="browser-content">
                  <img
                    src={screens[activeTab].img}
                    alt={screens[activeTab].title}
                    className={`preview-img ${fading ? 'preview-fading' : ''}`}
                    key={activeTab}
                  />
                  <div className="preview-caption">
                    <span className="caption-title">{screens[activeTab].title}</span>
                    <span className="caption-sub font-mono">{screens[activeTab].subtitle}</span>
                  </div>
                </div>
              </div>

              {/* Screen tabs */}
              <div className="screen-tabs font-mono" role="tablist">
                {screens.map((screen, idx) => (
                  <button
                    key={screen.id}
                    role="tab"
                    aria-selected={activeTab === idx}
                    className={`screen-tab ${activeTab === idx ? 'active' : ''}`}
                    onClick={() => handleTabChange(idx)}
                    id={`tab-${screen.id}`}
                  >
                    <span className="tab-num">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="tab-title">{screen.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Linkedin, Menu, X } from 'lucide-react';
import './TopBar.css';

const TopBar = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`topbar ${scrolled ? 'topbar-compressed' : ''}`}>
      <div className="container topbar-container">
        {/* Left: Blue Circle + Wordmark (Swaps 'Portfolio' -> 'Peng 𓆉' on scroll > 80px) */}
        <a href="#home" className="topbar-brand" aria-label="Peng Portfolio Home">
          <span className="brand-blue-circle" aria-hidden="true" />
          <span className="brand-wordmark">
            {scrolled ? 'Peng 𓆉' : 'Portfolio'}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="topbar-nav desktop-nav" aria-label="Main Navigation">
          <div className="nav-items font-mono">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            {/* Social-area icons receive 1px cyan ring on hover (§1 A) */}
            <button
              onClick={toggleTheme}
              className="icon-btn theme-toggle cyan-hover-ring"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="https://github.com/pengdev-works"
              target="_blank"
              rel="noreferrer"
              className="icon-btn cyan-hover-ring"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="icon-btn cyan-hover-ring"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </nav>

        {/* Mobile Actions (<768px): Hamburger trigger before theme toggle */}
        <div className="mobile-actions">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="icon-btn hamburger-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button
            onClick={toggleTheme}
            className="icon-btn theme-toggle cyan-hover-ring"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Sheet */}
      {mobileMenuOpen && (
        <div className="mobile-sheet glass-panel">
          <nav className="mobile-sheet-nav font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mobile-sheet-socials">
            <a
              href="https://github.com/pengdev-works"
              target="_blank"
              rel="noreferrer"
              className="mobile-social-link font-mono"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="mobile-social-link font-mono"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default TopBar;

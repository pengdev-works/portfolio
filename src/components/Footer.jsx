import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Left: Wordmark + tagline */}
          <div className="footer-col footer-col-left">
            <a href="#home" className="footer-brand" aria-label="Portfolio Home">
              <span className="brand-blue-circle" aria-hidden="true" />
              <span className="brand-wordmark">Jhon Christopher Paragas</span>
            </a>
            <p className="footer-tagline text-muted">
              Full-stack engineer building high-performance web applications
              with clean architecture and bold visual design.
            </p>
          </div>

          {/* Middle: Links */}
          <div className="footer-col footer-col-middle">
            <h4 className="footer-heading font-mono">Navigate</h4>
            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          {/* Right: Socials */}
          <div className="footer-col footer-col-right">
            <h4 className="footer-heading font-mono">Connect</h4>
            <div className="footer-social-icons">
              <a
                href="https://github.com/pengdev-works"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="footer-social-link"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="footer-social-link"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:topelparagas@gmail.com"
                aria-label="Send Email"
                className="footer-social-link"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="footer-bottom-row">
          <p className="copyright-text font-mono">
            © 2025 Jhon Christopher Paragas (pengzzz) · La Paz, Abra, Philippines · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Github, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <span className="text-gradient logo-text">Portfolio</span>
                    <p className="text-muted mt-2">
                        Building digital experiences that combine beautiful design with exceptional engineering.
                    </p>
                </div>

                <div className="footer-links">
                    <div className="footer-links-group">
                        <h4 className="footer-title">Links</h4>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">Socials</h4>
                        <div className="footer-socials">
                            <a href="#" aria-label="GitHub"><Github size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="text-muted">
                    &copy; {new Date().getFullYear()} Your Name. All rights reserved. Built with React & Vite.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

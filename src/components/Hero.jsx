import { ArrowRight, Sparkles, Monitor, Figma, Code } from 'lucide-react';
import profileImg from '../assets/images/profile.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text-wrapper reveal">
                    <div className="hero-badge">
                    </div>

                    <h1 className="heading-xl">
                        Designing code, <br />
                        <span className="text-gradient">engineering</span> <br />
                        <span className="text-gradient-secondary">experiences.</span>
                    </h1>

                    <p className="hero-description text-muted">
                        I craft immersive, high-performance web applications that merge striking
                        aesthetics with robust, scalable architecture. Built for the modern web.
                    </p>

                    <div className="hero-cta-group reveal reveal-delay-1">
                        <a href="#projects" className="btn btn-primary">
                            Explore Work <ArrowRight size={18} />
                        </a>
                        <a href="#about" className="btn btn-secondary">
                            Discover More
                        </a>
                    </div>
                </div>

                {/* Hero Profile Visual Card */}
                <div className="hero-visuals mobile-hidden reveal reveal-delay-2">
                    <div className="hero-portrait-card">
                        <div className="portrait-glow"></div>
                        <div className="portrait-image-wrapper">
                            <img src={profileImg} alt="Developer Portrait" className="hero-portrait-img" />
                            <div className="portrait-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

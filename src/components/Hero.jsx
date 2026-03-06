import { ArrowRight, Sparkles, Monitor, Figma } from 'lucide-react';
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

                {/* Floating Abstract Elements */}
                <div className="hero-visuals mobile-hidden">
                    <div className="glass-panel floating-card card-1 animate-float" style={{ animationDelay: '0s' }}>
                        <Monitor size={32} color="var(--accent-blue)" />
                        <span>Clean Architecture</span>
                    </div>
                    <div className="glass-panel floating-card card-2 animate-float" style={{ animationDelay: '2s' }}>
                        <Figma size={32} color="var(--accent-pink)" />
                        <span>Pixel Perfect UI</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

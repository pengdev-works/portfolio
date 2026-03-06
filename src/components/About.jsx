import { Code, Database, Layout, Smartphone } from 'lucide-react';
import profileImg from '../assets/images/profile.png';
import reactLogo from '../assets/images/react-logo.png';
import nodeLogo from '../assets/images/node-logo.png';
import './About.css';

const About = () => {
    const skills = [
        { name: 'React Ecology', icon: <img src={reactLogo} alt="React" className="skill-img" />, desc: 'React, Next.js, Vite, Solid.js architecture.' },
        { name: 'Node Backend', icon: <img src={nodeLogo} alt="Node.js" className="skill-img" />, desc: 'Express, Fastify, Microservices, and APIs.' },
        { name: 'Database Systems', icon: <Database size={24} />, desc: 'PostgreSQL, Redis, MongoDB, ORMs.' },
        { name: 'Responsive UI', icon: <Smartphone size={24} />, desc: 'Mobile-first, CSS Architecture, Tailwind.' },
    ];

    return (
        <section id="about" className="section-padding">
            <div className="container">
                <h2 className="heading-md">About <span className="text-gradient">Me</span></h2>

                <div className="about-content">
                    <div className="about-profile-section">
                        <div className="profile-image-container">
                            <div className="profile-glow"></div>
                        </div>
                    </div>
                    <div className="about-text glass-panel">
                        <p className="text-muted">
                            I am a passionate software engineer with a strong foundation in modern web technologies.
                            My journey in tech is driven by a desire to build intuitive, scalable, and visually stunning applications.
                        </p>
                        <p className="text-muted mt-4">
                            When I'm not coding, you can find me exploring new design trends, contributing to open source,
                            or optimizing performance metrics for fun.
                        </p>
                    </div>

                    <div className="skills-grid">
                        {skills.map((skill) => (
                            <div key={skill.name} className="skill-card glass-panel">
                                <div className="skill-icon">{skill.icon}</div>
                                <h3 className="skill-title">{skill.name}</h3>
                                <p className="skill-desc text-muted">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

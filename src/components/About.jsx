import { Code, Database, Layout, Smartphone } from 'lucide-react';
import './About.css';

const About = () => {
    const skills = [
        { name: 'Frontend Development', icon: <Layout size={24} />, desc: 'React, Vue, Next.js, Solid.js' },
        { name: 'Backend Systems', icon: <Database size={24} />, desc: 'Node.js, Python, PostgreSQL, Redis' },
        { name: 'API Design', icon: <Code size={24} />, desc: 'RESTful APIs, GraphQL, gRPC' },
        { name: 'Responsive UI', icon: <Smartphone size={24} />, desc: 'Mobile-first, CSS Architecture' },
    ];

    return (
        <section id="about" className="section-padding">
            <div className="container">
                <h2 className="heading-md">About <span className="text-gradient">Me</span></h2>

                <div className="about-content">
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

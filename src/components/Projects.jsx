import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with dynamic product routing, cart state management, and Stripe payments integration.',
            tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
            github: '#',
            live: '#',
        },
        {
            title: 'Real-time Dashboard',
            description: 'Analytics dashboard featuring real-time data visualization via WebSockets and custom hook-based state management.',
            tags: ['Vue 3', 'D3.js', 'Socket.io', 'Express'],
            github: '#',
            live: '#',
        },
        {
            title: 'Task Management API',
            description: 'Scalable REST API architecture built with microservices pattern, featuring robust authentication and task tracking.',
            tags: ['Go', 'Redis', 'Docker', 'JWT'],
            github: '#',
            live: '#',
        }
    ];

    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <h2 className="heading-md">Featured <span className="text-gradient">Projects</span></h2>

                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <div key={idx} className="project-card glass-panel">
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc text-muted">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noreferrer" aria-label={`GitHub rep for ${project.title}`}>
                                    <Github size={20} />
                                </a>
                                <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Live demo for ${project.title}`}>
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

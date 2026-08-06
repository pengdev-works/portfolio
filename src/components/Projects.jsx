import { useState } from 'react';
import { ExternalLink, Github, Sparkles, MapPin, ShieldCheck, LayoutDashboard, Globe } from 'lucide-react';
import abraHero from '../assets/images/abraventure-hero.png';
import abraProvincial from '../assets/images/abraventure-provincial.png';
import abraMunicipal from '../assets/images/abraventure-municipal.png';
import abraLogin from '../assets/images/abraventure-login.png';
import './Projects.css';

const Projects = () => {
    const [activeTab, setActiveTab] = useState(0);

    const abraScreens = [
        { title: 'Main Tourism Portal', subtitle: 'Public landing & interactive map', img: abraHero },
        { title: 'Provincial DOT Panel', subtitle: 'Province-wide oversight & analytics', img: abraProvincial },
        { title: 'Municipal DOT Dashboard', subtitle: 'Accreditation & local attractions', img: abraMunicipal },
        { title: 'Auth & Security', subtitle: 'Multi-role authentication portal', img: abraLogin }
    ];

    const projects = [
        {
            title: 'AbraVenture Tourism Portal',
            badge: 'Flagship Project',
            liveUrl: 'https://abraventure2-0.vercel.app/',
            description: 'A multi-tier provincial tourism & government administration platform for Abra Province (CAR). Manages 27 municipalities, accredited tour guides, homestays, local events, and real-time tourism inquiries.',
            tags: ['React', 'Node.js', 'Vercel', 'Tailwind', 'Interactive Map'],
            highlights: [
                'Provincial & Municipal DOT multi-tenant dashboards',
                'Homestay & Tour Guide accreditation verification system',
                'Real-time inquiry logs & automated PDF/CSV report exports'
            ],
            isFlagship: true
        },
    ];

    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="heading-md">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="section-subtitle text-muted">
                        Explore my latest full-stack applications, enterprise portals, and interactive digital products.
                    </p>
                </div>

                {/* Flagship Showcase Card: AbraVenture */}
                <div className="flagship-card glass-panel reveal">
                    <div className="flagship-badge">
                        <Sparkles size={16} />
                        <span>Flagship Enterprise Application</span>
                    </div>

                    <div className="flagship-grid">
                        <div className="flagship-info">
                            <h3 className="flagship-title">AbraVenture</h3>
                            <p className="flagship-subtitle">Integrated Tourism & DOT Governance Portal</p>

                            <p className="flagship-desc text-muted">
                                Built an enterprise provincial tourism management system for the Province of Abra (CAR).
                                Empowers provincial & municipal tourism officers to manage 27 municipalities, verify accreditation for homestays & guides, and publish local events.
                            </p>

                            <div className="flagship-highlights">
                                <div className="highlight-item">
                                    <ShieldCheck size={18} className="highlight-icon" />
                                    <span>Multi-Tier DOT Administration (Provincial & Municipal)</span>
                                </div>
                                <div className="highlight-item">
                                    <MapPin size={18} className="highlight-icon" />
                                    <span>27 Municipalities & 100+ Attractions Directory</span>
                                </div>
                                <div className="highlight-item">
                                    <LayoutDashboard size={18} className="highlight-icon" />
                                    <span>Accreditation Verification & CSV/PDF Analytics Reports</span>
                                </div>
                            </div>

                            <div className="project-tags flagship-tags">
                                {projects[0].tags.map(tag => (
                                    <span key={tag} className="tag tag-flagship">{tag}</span>
                                ))}
                            </div>

                            <div className="flagship-actions">
                                <a
                                    href="https://abraventure2-0.vercel.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary"
                                >
                                    Visit Live Platform <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Interactive Screen Previewer */}
                        <div className="flagship-preview">
                            <div className="browser-mockup">
                                <div className="browser-header">
                                    <div className="browser-dots">
                                        <span className="dot dot-red"></span>
                                        <span className="dot dot-yellow"></span>
                                        <span className="dot dot-green"></span>
                                    </div>
                                    <div className="browser-address-bar">
                                        <Globe size={14} className="address-icon" />
                                        <span>https://abraventure2-0.vercel.app/</span>
                                    </div>
                                </div>

                                <div className="browser-content">
                                    <img
                                        src={abraScreens[activeTab].img}
                                        alt={abraScreens[activeTab].title}
                                        className="preview-img animate-fade-in"
                                        key={activeTab}
                                    />
                                    <div className="preview-caption">
                                        <span className="caption-title">{abraScreens[activeTab].title}</span>
                                        <span className="caption-sub">{abraScreens[activeTab].subtitle}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Screen Selector Tabs */}
                            <div className="screen-tabs">
                                {abraScreens.map((screen, idx) => (
                                    <button
                                        key={idx}
                                        className={`screen-tab ${activeTab === idx ? 'active' : ''}`}
                                        onClick={() => setActiveTab(idx)}
                                    >
                                        <span className="tab-title">{screen.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Projects Grid */}
                <div className="projects-grid mt-12">
                    {projects.slice(1).map((project, idx) => (
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
                                <a href={project.github} target="_blank" rel="noreferrer" aria-label={`GitHub repo for ${project.title}`}>
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

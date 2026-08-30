import React, { useEffect, useRef } from 'react';
import './Stack.css';

const spectralClasses = [
  {
    classHeading: 'Languages',
    tags: ['TypeScript', 'JavaScript', 'PHP', 'SQL'],
  },
  {
    classHeading: 'Frameworks',
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'Laravel'],
  },
  {
    classHeading: 'Styling & 3D',
    tags: ['Tailwind CSS', 'Three.js', 'CSS / GSAP'],
  },
  {
    classHeading: 'Design',
    tags: ['Figma', 'Framer'],
  },
  {
    classHeading: 'Infra & Tools',
    tags: ['Vercel', 'PostgreSQL', 'MySQL', 'Git', 'Vite'],
  },
];

const Stack = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('active'), i * 110);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding stack-section" ref={sectionRef}>
      <div className="container">
        <div className="stack-header">
          <span className="section-eyebrow reveal">✦ Spectral Classification</span>
          <h2 className="section-title reveal reveal-delay-1">Stack & Tools</h2>
        </div>

        <div className="stack-groups-container glass-panel reveal reveal-delay-2">
          {spectralClasses.map((group, idx) => (
            <div key={group.classHeading} className="stack-group-row">
              <h3 className="stack-heading font-display">{group.classHeading}</h3>
              <div className="stack-tags-list font-mono">
                {group.tags.map((tag) => (
                  <span key={tag} className="spectral-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;

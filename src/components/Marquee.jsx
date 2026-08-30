import React from 'react';
import './Marquee.css';

const tags = [
  'React',
  'Next.js',
  'TypeScript',
  'WebGL',
  'Three.js',
  'Node',
  'Tailwind',
  'Figma',
];

const Marquee = () => {
  // Duplicate tags list to allow 100% seamless infinite marquee scrolling
  const marqueeItems = [...tags, ...tags, ...tags, ...tags];

  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {marqueeItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="marquee-tag font-mono">{item}</span>
            <span className="marquee-middot">·</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

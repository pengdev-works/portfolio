import React, { useEffect, useState } from 'react';
import './EasterEgg.css';

const targetSequence = ['p', 'e', 'n', 'g'];

const EasterEgg = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let keyBuffer = [];

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      keyBuffer.push(key);

      // Keep only last 4 characters
      if (keyBuffer.length > 4) {
        keyBuffer.shift();
      }

      // Check match
      if (keyBuffer.join('') === 'peng') {
        setActive(true);
        keyBuffer = [];
        setTimeout(() => {
          setActive(false);
        }, 8000); // Trigger resets after 8s (§6)
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!active) return null;

  return (
    <div className="penguin-easter-egg-container" aria-hidden="true">
      {/* Dashed Aurora Cyan Trail (§6) */}
      <svg className="penguin-trail-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="100" x2="60" y2="40" stroke="#00E5FF" strokeWidth="2" strokeDasharray="6 6" className="trail-line-anim" />
      </svg>

      {/* 24px Cyan SVG Penguin flying to singularity (§6) */}
      <div className="flying-penguin">
        <svg viewBox="0 0 100 100" width="24" height="24" fill="none" stroke="#00E5FF" strokeWidth="6">
          <ellipse cx="50" cy="55" rx="25" ry="35" />
          <ellipse cx="50" cy="25" rx="15" ry="15" />
          <polygon points="50,25 65,28 50,32" fill="#00E5FF" />
          <circle cx="45" cy="20" r="3" fill="#00E5FF" />
          <path d="M 25 55 Q 10 50, 20 65" />
          <path d="M 75 55 Q 90 50, 80 65" />
        </svg>
      </div>
    </div>
  );
};

export default EasterEgg;

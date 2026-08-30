import React from 'react';
import './Now.css';

const Now = () => {
  return (
    <section className="now-section">
      <div className="container">
        <div className="now-card glass-panel font-mono">
          <span className="warm-pulse-dot" aria-hidden="true" />
          <span className="now-text">
            <strong>Currently:</strong> Building and shipping AbraVenture — a full-stack provincial tourism
            platform for the Province of Abra (CAR), Philippines.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Now;

import React, { useEffect, useRef } from 'react';
import { initAetherField } from '../lib/aether/aetherField';
import './AetherField.css';

const AetherField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize WebGL2 Starfield
    const cleanup = initAetherField(canvas);
    return () => {
      cleanup();
    };
  }, []);

  return (
    <>
      {/* Accessible Screen Reader Fallback Description (§8) */}
      <span className="sr-only">
        Animated starfield with a black-hole singularity at centre.
      </span>

      {/* WebGL2 Canvas Layered at z-index: 1 (§2) */}
      <canvas
        id="aether-field"
        ref={canvasRef}
        className="aether-canvas"
        aria-hidden="true"
      />
    </>
  );
};

export default AetherField;

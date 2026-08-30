import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    let animId;
    let targetX = -100;
    let targetY = -100;

    let dotX = -100;
    let dotY = -100;

    let ringX = -100;
    let ringY = -100;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      const target = e.target;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button')
      ) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updateCursor = () => {
      // 120ms easing for dot (~0.25 lerp factor)
      dotX += (targetX - dotX) * 0.25;
      dotY += (targetY - dotY) * 0.25;
      setDotPos({ x: dotX, y: dotY });

      // 240ms easing for ring (~0.12 lerp factor)
      ringX += (targetX - ringX) * 0.12;
      ringY += (targetY - ringY) * 0.12;
      setRingPos({ x: ringX, y: ringY });

      animId = requestAnimationFrame(updateCursor);
    };

    animId = requestAnimationFrame(updateCursor);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={active ? 'custom-cursor-active' : ''} aria-hidden="true">
      <div
        className="custom-cursor-dot"
        style={{ left: `${dotPos.x}px`, top: `${dotPos.y}px` }}
      />
      <div
        className="custom-cursor-ring"
        style={{ left: `${ringPos.x}px`, top: `${ringPos.y}px` }}
      />
    </div>
  );
};

export default CustomCursor;

import React from 'react';

export function TechIcon({ name, className = "w-7 h-7" }) {
  switch (name?.toLowerCase()) {
    case 'react':
      return (
        <svg viewBox="0 0 115.3 100" className={className} fill="none" stroke="currentColor">
          <ellipse cx="57.65" cy="50" rx="55" ry="21" stroke="#00d8ff" strokeWidth="6" transform="rotate(30 57.65 50)" />
          <ellipse cx="57.65" cy="50" rx="55" ry="21" stroke="#00d8ff" strokeWidth="6" transform="rotate(90 57.65 50)" />
          <ellipse cx="57.65" cy="50" rx="55" ry="21" stroke="#00d8ff" strokeWidth="6" transform="rotate(150 57.65 50)" />
          <circle cx="57.65" cy="50" r="10" fill="#00d8ff" />
        </svg>
      );

    case 'javascript':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <rect width="100" height="100" rx="18" fill="#F7DF1E" />
          <path d="M28 72c2 3.5 5.5 5.8 10 5.8 5.6 0 9.2-2.8 9.2-8.4V42h-7.8v27.2c0 2.4-1.4 3.7-3.8 3.7-2.3 0-3.6-1.3-4.6-3.4l-3 2.5zm31 0c2.5 3.8 6.5 6 12 6 8.3 0 13.8-4.4 13.8-11.8 0-6.8-4.5-9.6-11.2-12.5-4.4-1.9-6.6-3.4-6.6-6.2 0-2.3 1.9-4.2 5.2-4.2 3.3 0 5.4 1.5 6.8 4l6.4-4.2c-2.4-4-6.8-6.6-13.2-6.6-8.2 0-13 4.8-13 11.2 0 6.6 4.3 9.4 10.8 12.1 4.6 2 7 3.5 7 6.6 0 2.8-2.3 4.6-6 4.6-4.2 0-6.8-2.2-8.4-5.2l-7.6 4.2z" fill="#000000" />
        </svg>
      );

    case 'tailwind css':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <path
            d="M26 44c4.6-13.8 15.3-17.5 24.6-10.7 7.7 5.6 11 11.6 18.4 11.6 6.2 0 10.8-4.6 13.9-10.8-4.6 13.8-15.3 17.5-24.6 10.7-7.7-5.6-11-11.6-18.4-11.6-6.2 0-10.8 4.6-13.9 10.8zm-15 24c4.6-13.8 15.3-17.5 24.6-10.7 7.7 5.6 11 11.6 18.4 11.6 6.2 0 10.8-4.6 13.9-10.8-4.6 13.8-15.3 17.5-24.6 10.7-7.7-5.6-11-11.6-18.4-11.6-6.2 0-10.8 4.6-13.9 10.8z"
            fill="#38BDF8"
          />
        </svg>
      );

    case 'html5':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <polygon points="12,8 20,84 50,92 80,84 88,8" fill="#E34F26" />
          <polygon points="50,14 50,86 74,80 81,14" fill="#EF652A" />
          <polygon points="50,42 36,42 35,30 50,30 50,18 21,18 24,54 50,54" fill="#EBEBEB" />
          <polygon points="50,68 50,80 68,75 70,54 59,54 60,67" fill="#FFFFFF" />
          <polygon points="50,42 50,54 68,54 70,30 50,30 50,42" fill="#FFFFFF" />
          <polygon points="50,68 39,65 38,58 28,58 30,73 50,79" fill="#EBEBEB" />
        </svg>
      );

    case 'css3':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <polygon points="12,8 20,84 50,92 80,84 88,8" fill="#1572B6" />
          <polygon points="50,14 50,86 74,80 81,14" fill="#33A9DC" />
          <polygon points="50,42 36,42 35,30 50,30 50,18 21,18 24,54 50,54" fill="#EBEBEB" />
          <polygon points="50,68 50,80 68,75 70,54 59,54 60,67" fill="#FFFFFF" />
          <polygon points="50,42 50,54 68,54 70,30 50,30 50,42" fill="#FFFFFF" />
          <polygon points="50,68 39,65 38,58 28,58 30,73 50,79" fill="#EBEBEB" />
        </svg>
      );

    case 'node.js':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" fill="#539E43" />
          <path d="M50 22 L76 37 L76 63 L50 78 L24 63 L24 37 Z" fill="#2d3748" />
          <path d="M46 36v28h8V49l10 15h9V36h-8v15l-10-15z" fill="#83CD29" />
        </svg>
      );

    case 'express.js':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="18" fill="#1e293b" />
          <text x="50" y="60" textAnchor="middle" fontSize="32" fontWeight="900" fill="#f8fafc" fontFamily="monospace">ex</text>
          <path d="M22 75h56" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'rest apis':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="40" stroke="#F59E0B" strokeWidth="6" strokeDasharray="8 6" />
          <circle cx="50" cy="50" r="16" fill="#F59E0B" />
          <circle cx="22" cy="50" r="9" fill="#F59E0B" />
          <circle cx="78" cy="50" r="9" fill="#F59E0B" />
          <circle cx="50" cy="22" r="9" fill="#F59E0B" />
          <circle cx="50" cy="78" r="9" fill="#F59E0B" />
          <line x1="31" y1="50" x2="42" y2="50" stroke="#F59E0B" strokeWidth="4" />
          <line x1="58" y1="50" x2="69" y2="50" stroke="#F59E0B" strokeWidth="4" />
          <line x1="50" y1="31" x2="50" y2="42" stroke="#F59E0B" strokeWidth="4" />
          <line x1="50" y1="58" x2="50" y2="69" stroke="#F59E0B" strokeWidth="4" />
        </svg>
      );

    case 'postgresql':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="18" fill="#336791" />
          <path d="M50 18c-16 0-27 11-27 24 0 13 9 21 19 23v17h8V65c15 0 27-11 27-23 0-14-12-24-27-24zm-3 38c-10 0-17-7-17-15s8-15 17-15 17 7 17 15-8 15-17 15z" fill="#ffffff" />
          <circle cx="42" cy="38" r="3.5" fill="#336791" />
          <circle cx="58" cy="38" r="3.5" fill="#336791" />
        </svg>
      );

    case 'neon db':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="18" fill="#0c0e12" />
          <path d="M54 16L24 56h24l-4 28 32-40H50z" fill="#00E599" stroke="#00E599" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );

    case 'mysql':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="18" fill="#00758F" />
          <text x="50" y="60" textAnchor="middle" fontSize="26" fontWeight="bold" fill="#F29111" fontFamily="sans-serif">SQL</text>
          <path d="M22 28c8-6 30-10 46 2 10 7 12 18 8 26-4 8-16 14-30 12" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="18" fill="#F05032" />
          <path d="M72 44L56 28a4 4 0 0 0-6 0L42 36l8 8a5 5 0 0 1 6 6l8 8a5 5 0 0 1 0 7 5 5 0 0 1-7 0l-8-8a5 5 0 0 1-1-5l-8-8L28 50a4 4 0 0 0 0 6l16 16a4 4 0 0 0 6 0l22-22a4 4 0 0 0 0-6z" fill="#ffffff" />
          <circle cx="54" cy="54" r="3.5" fill="#F05032" />
          <circle cx="68" cy="68" r="3.5" fill="#F05032" />
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="18" fill="#181717" />
          <path fillRule="evenodd" clipRule="evenodd" d="M50 18C32.3 18 18 32.3 18 50c0 14.1 9.2 26.1 21.9 30.4 1.6.3 2.2-.7 2.2-1.5v-5.4c-8.9 1.9-10.8-4.3-10.8-4.3-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-2 .2-2 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7.3-2.1 1.1-3.5 2.1-4.3-7.1-.8-14.6-3.6-14.6-15.8 0-3.5 1.2-6.4 3.3-8.6-.3-.8-1.4-4.1.3-8.5 0 0 2.7-.9 8.8 3.3a30.7 30.7 0 0 1 16 0c6.1-4.2 8.8-3.3 8.8-3.3 1.8 4.4.7 7.7.3 8.5 2.1 2.2 3.3 5.1 3.3 8.6 0 12.3-7.5 15-14.7 15.8 1.2 1 2.2 3 2.2 6.1v9c0 .9.6 1.8 2.2 1.5C72.8 76.1 82 64.1 82 50c0-17.7-14.3-32-32-32z" fill="#ffffff" />
        </svg>
      );

    case 'vite':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <path d="M79 16L51 72a2 2 0 0 1-3.6 0L21 16a2 2 0 0 1 2.6-2.7l26 9 26.7-9a2 2 0 0 1 2.7 2.7z" fill="url(#vite-brand-grad)" />
          <path d="M54 22L36 50h14l-6 26 24-34H52l6-16-4-4z" fill="#FFD62E" />
          <defs>
            <linearGradient id="vite-brand-grad" x1="21" y1="13" x2="79" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'vercel':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="18" fill="#000000" />
          <path d="M50 24L78 72H22L50 24Z" fill="#ffffff" />
        </svg>
      );

    case 'render':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="18" fill="#141923" />
          <path d="M50 22c-15 0-27 12-27 27 0 7.8 3.3 14.8 8.6 19.8L50 78l18.4-9.2C73.7 63.8 77 56.8 77 49c0-15-12-27-27-27z" fill="#46E3B7" />
          <circle cx="50" cy="49" r="11" fill="#141923" />
        </svg>
      );

    default:
      return (
        <div className={`rounded-xl flex items-center justify-center font-mono font-bold text-xs uppercase ${className} bg-emerald-500/20 text-emerald-400 border border-emerald-500/30`}>
          {name?.slice(0, 2) || 'SK'}
        </div>
      );
  }
}

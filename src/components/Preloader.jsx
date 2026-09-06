import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete?.();
          }, 320);
          return 100;
        }
        // Smooth organic step
        const jump = Math.floor(Math.random() * 16) + 10;
        return Math.min(prev + jump, 100);
      });
    }, 85);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -30, 
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#090A0F] flex flex-col items-center justify-center select-none"
    >
      <div className="w-full max-w-xs px-6 flex flex-col items-center space-y-5">
        
        {/* Developer Monogram / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm shadow-sm shadow-emerald-500/10">
            P
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-white font-mono tracking-tight">
              peng.dev
            </span>
            <span className="text-[11px] font-mono text-emerald-400/80 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {progress < 100 ? 'loading portfolio...' : 'system ready'}
            </span>
          </div>
        </div>

        {/* Minimalist Progress Bar */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-100 ease-out shadow-sm shadow-emerald-500/40"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Metadata Footer */}
        <div className="flex items-center justify-between w-full text-[11px] font-mono text-slate-500">
          <span>v2.0.26</span>
          <span className="text-slate-300 font-semibold">{progress}%</span>
        </div>

      </div>
    </motion.div>
  );
}

import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { processSteps } from '../data/process';
import { Search, Compass, Hammer, ShieldCheck, Rocket, ArrowRight, GitPullRequest } from 'lucide-react';

const icons = [Search, Compass, Hammer, ShieldCheck, Rocket];

export default function Process() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  // Track natural scroll progress as user moves through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 35%"]
  });

  // Map scroll progress across the 5 steps (0 to 4)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = processSteps.length;
    const stepIndex = Math.min(Math.max(Math.floor(latest * total), 0), total - 1);
    setActiveStep(stepIndex);
  });

  const currentActive = hoveredStep !== null ? hoveredStep : activeStep;

  return (
    <section 
      id="process" 
      ref={sectionRef} 
      className="py-24 relative bg-[#090A0F] border-t border-white/5 overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header (Original clean layout) */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <GitPullRequest className="w-3.5 h-3.5" />
            <span>Workflow & Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            How I turn ideas into{' '}
            <span className="text-gradient-emerald">working software.</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            A structured 5-stage development pipeline ensuring high quality, reliable databases, and intuitive UI on every project.
          </p>
        </div>

        {/* Process Steps — 5 cards side-by-side with scroll-driven hover progression */}
        <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-1.5 lg:gap-2.5">
          {processSteps.map((step, idx) => {
            const StepIcon = icons[idx] || Search;
            const isLast = idx === processSteps.length - 1;
            const isActive = currentActive === idx;
            const isPassed = currentActive > idx;

            return (
              <div 
                key={idx} 
                className="flex flex-col md:flex-row items-stretch flex-1 relative"
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setActiveStep(idx)}
              >

                {/* Step Card */}
                <motion.div
                  animate={{
                    y: isActive ? -8 : 0,
                    x: isActive ? [ -10, 0 ] : 0,
                  }}
                  transition={{ 
                    duration: 0.35, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={`flex-1 p-6 rounded-2xl transition-all duration-300 flex flex-col cursor-pointer relative ${
                    isActive
                      ? 'bg-[#121826] border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20 z-20 ring-1 ring-emerald-500/40'
                      : isPassed
                        ? 'bg-[#10141F] border border-emerald-500/30 opacity-80 hover:opacity-100 hover:border-emerald-500/50'
                        : 'bg-[#10141F] border border-white/10 opacity-60 hover:opacity-100 hover:border-white/20'
                  }`}
                >
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span 
                      className={`text-3xl font-black font-mono transition-colors duration-300 ${
                        isActive 
                          ? 'text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]' 
                          : isPassed
                            ? 'text-emerald-500/70'
                            : 'text-slate-600'
                      }`}
                    >
                      {step.step}
                    </span>
                    
                    <div 
                      className={`p-2.5 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 scale-110 shadow-md shadow-emerald-500/20'
                          : isPassed
                            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                            : 'bg-white/5 border-white/10 text-slate-500'
                      }`}
                    >
                      <StepIcon className="w-5 h-5 transition-colors" />
                    </div>
                  </div>

                  {/* Step Name */}
                  <h3 
                    className={`text-base font-bold transition-colors mb-1 ${
                      isActive ? 'text-white' : 'text-slate-200'
                    }`}
                  >
                    {step.name}
                  </h3>

                  {/* Step Subtitle */}
                  <p 
                    className={`text-[11px] font-mono mb-3 font-semibold transition-colors ${
                      isActive ? 'text-emerald-400' : 'text-emerald-500/60'
                    }`}
                  >
                    {step.title}
                  </p>

                  {/* Step Description */}
                  <p 
                    className={`text-xs leading-relaxed flex-1 transition-colors ${
                      isActive ? 'text-slate-200' : 'text-slate-400'
                    }`}
                  >
                    {step.description}
                  </p>

                  {/* Stage Progress Bar Indicator */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span 
                      className={`text-[10px] font-mono uppercase tracking-wider transition-colors ${
                        isActive ? 'text-emerald-400 font-bold' : 'text-slate-600'
                      }`}
                    >
                      Stage {idx + 1} of {processSteps.length}
                    </span>

                    {/* Progress Dots */}
                    <div className="flex gap-1">
                      {processSteps.map((_, pIdx) => (
                        <div
                          key={pIdx}
                          className={`h-1 w-3.5 rounded-full transition-all duration-300 ${
                            pIdx <= idx
                              ? isActive
                                ? 'bg-emerald-400 shadow-sm shadow-emerald-400/50'
                                : 'bg-emerald-500/60'
                              : 'bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Connector Arrow (desktop only) */}
                {!isLast && (
                  <div className="hidden md:flex items-center justify-center px-1.5 shrink-0 z-10">
                    <div
                      className={`transition-all duration-300 ${
                        isPassed || isActive
                          ? 'text-emerald-400 opacity-100 drop-shadow-[0_0_6px_rgba(16,185,129,0.5)]'
                          : 'text-slate-700 opacity-40'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

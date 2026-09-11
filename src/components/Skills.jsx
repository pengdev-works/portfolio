import React, { useRef, useState } from 'react';
import { skillsData } from '../data/skills';

export default function Skills() {
  const [mouseShift, setMouseShift] = useState(0);
  const marqueeContainerRef = useRef(null);

  // Extract ONLY the exact skills from skillsData
  const allSkills = skillsData.flatMap((group) =>
    group.skills.map((skill) => ({
      name: skill.name.toUpperCase(),
      originalName: skill.name,
      level: skill.level,
      category: group.category,
      description: skill.description
    }))
  );

  // Split the user's 16 skills into two balanced 8-skill rows
  const midpoint = Math.ceil(allSkills.length / 2);
  const row1Skills = allSkills.slice(0, midpoint);
  const row2Skills = allSkills.slice(midpoint);

  // Duplicate for seamless 50% infinite marquee loop
  const infiniteRow1 = [...row1Skills, ...row1Skills];
  const infiniteRow2 = [...row2Skills, ...row2Skills];

  // Interactive mouse move: hovering left and right dynamically shifts the perspective
  const handleMouseMove = (e) => {
    if (!marqueeContainerRef.current) return;
    const rect = marqueeContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width - 0.5) * 2; // -1 to 1
    setMouseShift(percent * 35); // Smooth shift up to 35px
  };

  const handleMouseLeave = () => {
    setMouseShift(0);
  };

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#090A0F] border-t border-white/5 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/[0.04] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-12">
        
        {/* Brutalist Section Header Label */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm text-emerald-400 font-semibold tracking-[0.25em] uppercase">
              04 — TECHNICAL ARSENAL
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 uppercase tracking-widest">
            <span>[ HOVER TO INSPECT ]</span>
          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          BRUTALIST VOID DUAL-ROW INFINITE MARQUEE
          Row 1 moves Left, Row 2 moves Right
          Interactive left-and-right hover responsiveness
          Outlined editorial typography that fills solid on hover
      ───────────────────────────────────────────────────────────── */}
      <div 
        ref={marqueeContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translateX(${mouseShift}px)`,
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        className="w-full relative py-4 sm:py-8 overflow-hidden mask-edges-fade group select-none cursor-default"
      >
        
        {/* Lane 1: Drifting Left */}
        <div className="py-2 sm:py-4 overflow-hidden flex items-center">
          <div className="animate-drift-left group-hover-pause flex items-center whitespace-nowrap">
            {infiniteRow1.map((skill, idx) => (
              <div
                key={`lane1-${skill.name}-${idx}`}
                className="group/word relative inline-flex items-center cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                {/* Outlined Brutalist Serif Word */}
                <span className="font-editorial-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-stroke-brutalist transition-all duration-300 px-3 sm:px-5">
                  {skill.name}
                </span>

                {/* Bullet separator */}
                <span className="text-white/20 dark:text-white/20 text-2xl sm:text-4xl md:text-5xl mx-4 sm:mx-8 select-none transition-colors duration-300 group-hover/word:text-emerald-400">
                  •
                </span>

                {/* Floating Micro-Badge on Hover */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-slate-900/95 border border-emerald-500/40 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-emerald-300 opacity-0 pointer-events-none group-hover/word:opacity-100 transition-all duration-200 shadow-xl whitespace-nowrap z-30 flex items-center gap-2">
                  <span>{skill.category}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-white font-semibold">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lane 2: Drifting Right */}
        <div className="py-2 sm:py-4 overflow-hidden flex items-center">
          <div className="animate-drift-right group-hover-pause flex items-center whitespace-nowrap">
            {infiniteRow2.map((skill, idx) => (
              <div
                key={`lane2-${skill.name}-${idx}`}
                className="group/word relative inline-flex items-center cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                {/* Outlined Brutalist Serif Word */}
                <span className="font-editorial-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-stroke-brutalist transition-all duration-300 px-3 sm:px-5">
                  {skill.name}
                </span>

                {/* Bullet separator */}
                <span className="text-white/20 dark:text-white/20 text-2xl sm:text-4xl md:text-5xl mx-4 sm:mx-8 select-none transition-colors duration-300 group-hover/word:text-emerald-400">
                  •
                </span>

                {/* Floating Micro-Badge on Hover */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-slate-900/95 border border-emerald-500/40 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-emerald-300 opacity-0 pointer-events-none group-hover/word:opacity-100 transition-all duration-200 shadow-xl whitespace-nowrap z-30 flex items-center gap-2">
                  <span>{skill.category}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-white font-semibold">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

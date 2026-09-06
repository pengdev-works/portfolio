import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/skills';
import { TechIcon } from './TechIcons';
import { Cpu, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Flatten all skills with category info attached
  const allSkills = skillsData.flatMap((group) =>
    group.skills.map((skill) => ({
      ...skill,
      category: group.category
    }))
  );

  const categories = ['All', ...skillsData.map((s) => s.category)];

  // Filter skills when a specific category is selected
  const isFiltered = activeCategory !== 'All';
  const filteredSkills = isFiltered
    ? allSkills.filter((s) => s.category === activeCategory)
    : allSkills;

  // Split into two balanced rows for sideways drift when showing "All"
  const row1 = allSkills.slice(0, 8); // Frontend & Tools
  const row2 = allSkills.slice(8);    // Backend & Databases

  // Duplicate each row for seamless 50% infinite loop
  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

  return (
    <section id="skills" className="py-24 relative bg-[#090A0F] border-t border-white/5 overflow-hidden">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack & Tools</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Technologies I build with <span className="text-gradient-emerald">every day.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Practical tools, backend frameworks, databases, and deployment platforms I actively use across my projects.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-xl bg-[#10141F] border border-white/10">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Mode 1: All Categories (Floating & Sideways Drift) ── */}
        {!isFiltered ? (
          <div className="space-y-6 my-4">
            
            {/* Lane 1: Drifting Left */}
            <div className="relative mask-edges-fade overflow-hidden py-3 group">
              <div className="animate-drift-left group-hover-pause flex gap-5 items-center">
                {marqueeRow1.map((skill, idx) => {
                  const isGold = skill.accent === 'gold';
                  const floatDelay = (idx % 8) * 0.4;
                  const isAlt = idx % 2 === 1;

                  return (
                    <div
                      key={`lane1-${idx}`}
                      style={{ animationDelay: `${floatDelay}s` }}
                      className={isAlt ? 'animate-float-b' : 'animate-float-a'}
                    >
                      <div className="group/icon relative flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#10141F] border border-white/10 hover:border-emerald-400/50 hover:bg-[#141926] hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer whitespace-nowrap">
                        
                        {/* Authentic Tech Vector Icon */}
                        <div className="w-8 h-8 flex items-center justify-center shrink-0 group-hover/icon:scale-110 transition-transform duration-300">
                          <TechIcon name={skill.name} className="w-7 h-7" />
                        </div>

                        {/* Tech Label & Level */}
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-white group-hover/icon:text-emerald-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {skill.category}
                          </span>
                        </div>

                        {/* Floating Proficiency Tooltip on Hover */}
                        <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-slate-900 border border-emerald-500/30 text-[10px] font-mono font-semibold text-emerald-300 opacity-0 pointer-events-none group-hover/icon:opacity-100 -translate-y-1 group-hover/icon:translate-y-0 transition-all duration-200 shadow-lg whitespace-nowrap z-20">
                          {skill.level}
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Lane 2: Drifting Right */}
            <div className="relative mask-edges-fade overflow-hidden py-3 group">
              <div className="animate-drift-right group-hover-pause flex gap-5 items-center">
                {marqueeRow2.map((skill, idx) => {
                  const isGold = skill.accent === 'gold';
                  const floatDelay = (idx % 8) * 0.45;
                  const isAlt = idx % 2 === 0;

                  return (
                    <div
                      key={`lane2-${idx}`}
                      style={{ animationDelay: `${floatDelay}s` }}
                      className={isAlt ? 'animate-float-b' : 'animate-float-a'}
                    >
                      <div className="group/icon relative flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#10141F] border border-white/10 hover:border-emerald-400/50 hover:bg-[#141926] hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer whitespace-nowrap">
                        
                        {/* Authentic Tech Vector Icon */}
                        <div className="w-8 h-8 flex items-center justify-center shrink-0 group-hover/icon:scale-110 transition-transform duration-300">
                          <TechIcon name={skill.name} className="w-7 h-7" />
                        </div>

                        {/* Tech Label & Level */}
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-white group-hover/icon:text-emerald-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {skill.category}
                          </span>
                        </div>

                        {/* Floating Proficiency Tooltip on Hover */}
                        <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-slate-900 border border-emerald-500/30 text-[10px] font-mono font-semibold text-emerald-300 opacity-0 pointer-events-none group-hover/icon:opacity-100 -translate-y-1 group-hover/icon:translate-y-0 transition-all duration-200 shadow-lg whitespace-nowrap z-20">
                          {skill.level}
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Subtle Hint */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-mono pt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Hover any floating icon to pause sideways glide & inspect</span>
            </div>

          </div>
        ) : (
          /* ── Mode 2: Filtered Category (Floating Flex Cloud) ── */
          <div className="my-8 max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-5">
              {filteredSkills.map((skill, idx) => {
                const floatDelay = (idx % 6) * 0.35;
                const isAlt = idx % 2 === 1;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, delay: idx * 0.05 }}
                    style={{ animationDelay: `${floatDelay}s` }}
                    className={isAlt ? 'animate-float-b' : 'animate-float-a'}
                  >
                    <div className="group/icon relative flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-[#10141F] border border-white/10 hover:border-emerald-400/50 hover:bg-[#141926] hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/15 transition-all duration-300 cursor-pointer">
                      
                      <div className="w-9 h-9 flex items-center justify-center shrink-0 group-hover/icon:scale-110 transition-transform duration-300">
                        <TechIcon name={skill.name} className="w-8 h-8" />
                      </div>

                      <div className="flex flex-col pr-1">
                        <span className="text-base font-bold text-white group-hover/icon:text-emerald-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-emerald-400">
                          {skill.level}
                        </span>
                      </div>

                      {/* Tooltip description */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-slate-900 border border-emerald-500/30 text-xs font-mono font-semibold text-emerald-300 opacity-0 pointer-events-none group-hover/icon:opacity-100 -translate-y-1 group-hover/icon:translate-y-0 transition-all duration-200 shadow-xl whitespace-nowrap z-20">
                        {skill.level} Proficiency
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

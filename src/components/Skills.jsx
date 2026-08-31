import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import { 
  Code2, FileCode2, Palette, Layout, Sparkles, Server, Cpu, Network, 
  Database, Cloud, HardDrive, GitBranch, Github, Zap, Globe, Layers 
} from 'lucide-react';

const iconMap = {
  Code2, FileCode2, Palette, Layout, Sparkles, Server, Cpu, Network,
  Database, Cloud, HardDrive, GitBranch, Github, Zap, Globe, Layers
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredData = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-noise bg-[#090A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Technologies I build with <span className="text-gradient-emerald">every day.</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Strictly practical tools, backend frameworks, databases, and deployment services I actively use in production-ready projects.
          </p>

          {/* Category Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-xl bg-[#10141F] border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="space-y-12">
          {filteredData.map((catGroup, groupIdx) => (
            <div key={groupIdx} className="space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-white/10">
                <h3 className="text-lg font-bold text-white font-mono tracking-tight">
                  // {catGroup.category}
                </h3>
                <span className="text-xs text-slate-400 font-normal">
                  — {catGroup.description}
                </span>
              </div>

              {/* Grid of Skill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {catGroup.skills.map((skill, skillIdx) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  const isGold = skill.accent === 'gold';

                  return (
                    <motion.div
                      key={skillIdx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIdx * 0.05 }}
                      whileHover={{ y: -4 }}
                      className={`group p-5 rounded-xl bg-[#10141F] border transition-all duration-300 relative overflow-hidden ${
                        isGold
                          ? 'border-white/10 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10'
                          : 'border-white/10 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10'
                      }`}
                    >
                      {/* Top Bar inside card */}
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`p-2.5 rounded-lg border transition-all duration-300 ${
                            isGold
                              ? 'bg-amber-500/10 text-amber-400 border-amber-500/20 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950'
                              : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950'
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border uppercase tracking-wider ${
                            isGold
                              ? 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                              : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      {/* Tech Name */}
                      <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                        {skill.name}
                      </h4>

                      {/* Description */}
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

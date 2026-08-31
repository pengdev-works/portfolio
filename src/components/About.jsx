import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Terminal, Layers, Zap, MapPin, FolderGit2, Cpu, Calendar, Network } from 'lucide-react';
import profileImg from '../assets/images/profile.jpg';

// ─── Animated Counter ────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = '', duration = 1600 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;
    const stepTime = Math.max(Math.floor(duration / end), 25);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

// ─── Stats Aligned with Portfolio Journey ─────────────────────────────────────
const stats = [
  { 
    label: 'Projects & Systems', 
    value: 10, 
    suffix: '+', 
    subtext: 'Web & Integrated Platforms',
    icon: FolderGit2
  },
  { 
    label: 'Technologies', 
    value: 15, 
    suffix: '+', 
    subtext: 'React, Node, DBs & Tooling',
    icon: Cpu
  },
  { 
    label: 'Years Coding', 
    value: 3, 
    suffix: '+', 
    subtext: 'Engineering Journey (2024–2026)',
    icon: Calendar
  },
  { 
    label: 'Systems Architected', 
    value: 5, 
    suffix: '+', 
    subtext: 'Databases & Logic Engines',
    icon: Network
  },
];

const corePillars = [
  {
    title: 'Practical Systems',
    description: 'Building production software that solves tangible problems for local government units, businesses, and academic departments.',
    icon: Terminal,
  },
  {
    title: 'Clean Architecture',
    description: 'Writing maintainable, modular JavaScript & React code with well-structured relational PostgreSQL and MySQL schemas.',
    icon: Layers,
  },
  {
    title: 'User-Centric UX',
    description: 'Crafting responsive, high-contrast dark interfaces that are effortless to navigate across mobile and desktop devices.',
    icon: Zap,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#090A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Code className="w-3.5 h-3.5" />
            <span>About The Engineer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Turning complex requirements into <span className="text-gradient-emerald">functional software.</span>
          </h2>
        </div>

        {/* Profile & Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

          {/* Profile Picture Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            <div className="relative group w-64 h-64 sm:w-72 sm:h-72 rounded-2xl p-1 bg-gradient-to-br from-emerald-500/40 via-white/10 to-amber-500/30 shadow-2xl shadow-emerald-950/50">
              <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#0D0F17] relative">
                <img
                  src={profileImg}
                  alt="Jhon Christopher Paragas — Full-Stack Developer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F17] via-transparent to-transparent opacity-40" />
              </div>
            </div>

            {/* Profile Meta Info */}
            <div className="mt-5 space-y-2 text-center lg:text-left">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Jhon Christopher Paragas
              </h3>
              <p className="text-xs font-mono text-emerald-400 font-semibold">
                @pengzzz · Full-Stack Developer & System Builder
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Poblacion, La Paz, Abra, Philippines 🇵🇭</span>
              </div>
            </div>
          </motion.div>

          {/* Main Story & Core Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            <p className="font-semibold text-slate-100 text-xl leading-snug">
              I'm <span className="text-emerald-400">Jhon Christopher Paragas</span>, a Filipino student full-stack developer with a passion for engineering integrated web applications, custom management systems, and practical digital solutions.
            </p>

            <p className="text-sm sm:text-base">
              My craft sits at the intersection of robust software architecture and intuitive frontend design. Rather than creating static landing pages, I focus on full-stack application development—connecting responsive React interfaces with Node.js/Express REST APIs, authentication pipelines, and optimized PostgreSQL/MySQL relational databases.
            </p>

            <p className="text-sm sm:text-base text-slate-300">
              My development journey spans a continuous progression: from mastering programming fundamentals and web applications in 2024, to engineering complex management systems with automated logic in 2025, and focusing on full-stack architecture, cloud databases, deployment, and capstone platforms like ABRAVENTURE in 2026.
            </p>

            {/* Quoted Positioning Statement */}
            <div className="relative p-6 rounded-xl bg-gradient-to-r from-emerald-950/40 to-slate-900/60 border border-emerald-500/20 shadow-inner overflow-hidden my-6">
              <div className="absolute top-3 left-4 text-5xl font-serif text-emerald-500/20 leading-none select-none">"</div>
              <p className="relative text-emerald-300 font-mono text-sm sm:text-base italic leading-relaxed pl-4">
                I enjoy turning ideas into functional systems. From tourism platforms like ABRAVENTURE to management systems, I focus on building applications that are useful, scalable, and easy to use.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {corePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#10141F] border border-white/10 hover:border-emerald-500/30 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit mb-2 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </motion.div>
        </div>

        {/* Animated Statistics Grid Aligned with Portfolio */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10">
          {stats.map((stat, idx) => {
            const StatIcon = stat.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#10141F] border border-white/10 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-950/20 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                    <StatIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                    Verified
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono group-hover:text-emerald-400 transition-colors mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>

                <div>
                  <div className="text-sm font-bold text-slate-100 group-hover:text-emerald-300 transition-colors mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    {stat.subtext}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

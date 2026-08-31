import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Mail, ArrowRight, MapPin } from 'lucide-react';
import HeroTerminal from './HeroTerminal';

function DotGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none dot-grid-pattern"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage:
          'radial-gradient(ellipse 70% 70% at 50% 30%, black 40%, transparent 100%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 70% 70% at 50% 30%, black 40%, transparent 100%)',
      }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-[#090A0F]"
    >
      <DotGrid />

      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left: Hero Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Single Clean Eyebrow Pill (Consolidated to avoid text clutter) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for projects • La Paz, Abra, PH 🇵🇭</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Building digital{' '}
              <br className="hidden sm:block" />
              experiences that{' '}
              <span className="text-gradient-emerald">
                solve real problems.
              </span>
            </h1>

            {/* Supporting Description (Clear & Direct) */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl mb-8">
              I'm <strong className="text-white">Jhon Christopher Paragas</strong>, a full-stack developer building modern web applications, integrated tourism platforms (ABRAVENTURE), and practical digital solutions.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-colors shadow-lg shadow-emerald-500/30"
              >
                <FolderGit2 className="w-5 h-5" />
                <span>View My Work</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/10 hover:border-emerald-500/40 transition-all"
              >
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>Let's Connect</span>
              </motion.a>
            </div>

            {/* Core Stack Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 pt-4 border-t border-white/10 w-full max-w-xl">
              <span className="text-slate-500 font-semibold whitespace-nowrap">Core Stack:</span>
              <div className="flex flex-wrap gap-2 text-slate-300">
                {['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Vercel'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:text-emerald-300 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Developer Visual Proof Window ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full"
          >
            <HeroTerminal />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="hidden lg:flex items-center gap-2 mt-4 text-xs font-mono text-slate-500"
            >
              <ArrowRight className="w-3.5 h-3.5 text-emerald-400 rotate-90" />
              <span>Explore verified code & projects below</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

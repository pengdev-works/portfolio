import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Mail, ArrowRight } from 'lucide-react';
import profileImg from '../assets/images/profile-nobg.png';

function DotGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage:
          'radial-gradient(ellipse 80% 80% at 50% 30%, black 30%, transparent 100%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 80% 80% at 50% 30%, black 30%, transparent 100%)',
      }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-[#090A0F]"
    >
      <DotGrid />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-emerald-500/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-slate-700/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

          {/* ── Left: Hero Copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1"
          >
            {/* Availability pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for projects • La Paz, Abra, PH 🇵🇭</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-5">
              Building digital{' '}
              <br className="hidden sm:block" />
              experiences that{' '}
              <span className="text-gradient-emerald">
                solve real problems.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg mb-8">
              I'm <strong className="text-white">Jhon Christopher Paragas</strong>, a full-stack developer building modern web applications, integrated tourism platforms (ABRAVENTURE), and practical digital solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-colors shadow-lg shadow-emerald-500/25"
              >
                <FolderGit2 className="w-5 h-5" />
                <span>View My Work</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/10 hover:border-emerald-500/40 transition-all"
              >
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>Let's Connect</span>
              </motion.a>
            </div>

            {/* Stack */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono pt-4 border-t border-white/8 w-full max-w-lg">
              <span className="text-slate-500 font-semibold">Core Stack:</span>
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

          {/* ── Right: Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-end order-1 lg:order-2 relative"
          >
            {/* Decorative ring behind photo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 m-auto w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full border border-emerald-500/10 hero-photo-ring"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 m-auto w-56 h-56 sm:w-64 sm:h-64 lg:w-[300px] lg:h-[300px] rounded-full border border-emerald-500/8 hero-photo-ring-2"
            />

            {/* Subtle glow behind the figure */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-40 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

            {/* The photo itself */}
            <div className="relative hero-photo-container">
              <img
                src={profileImg}
                alt="Jhon Christopher Paragas — Full-Stack Developer"
                className="hero-profile-photo w-64 sm:w-72 lg:w-[340px] xl:w-[380px] object-contain object-bottom select-none"
                draggable="false"
              />

              {/* Floating name badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-xl bg-[#10141F]/90 border border-white/10 backdrop-blur-sm shadow-xl whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span className="text-xs font-mono text-slate-200 font-semibold">
                  Jhon Christopher · Full-Stack Dev
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

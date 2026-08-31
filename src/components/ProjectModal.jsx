import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Cpu, Award, Layers, Target, ShieldCheck } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="modal-container relative w-full max-w-4xl max-h-[90vh] bg-[#0D0F17] border border-emerald-500/30 rounded-2xl shadow-2xl shadow-emerald-950/40 overflow-y-auto z-10 font-sans"
        >
          {/* Top Banner Image Header */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-slate-900 border-b border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F17] via-[#0D0F17]/40 to-transparent" />

            {/* Category Tag */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-semibold tracking-wide backdrop-blur-md">
                {project.category}
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/60 text-slate-400 hover:text-white hover:bg-slate-900 border border-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner Title overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-emerald-400 font-medium mt-1">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Quick Actions & Tech Stack Tags */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors shadow-md shadow-emerald-500/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Project Overview</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Problem */}
              <div className="p-5 rounded-xl bg-[#121522] border border-rose-500/20">
                <h4 className="text-sm font-bold text-rose-400 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  <span>The Problem</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-xl bg-[#121522] border border-emerald-500/20">
                <h4 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span>The Solution</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>

            </div>

            {/* Key Features List */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Key Features & Functional Modules</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* My Role & Technical Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              
              {/* Role */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>My Role ({project.role})</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.roleDetails}
                </p>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>Technical Challenges</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Outcome */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-3">
              <Award className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-0.5">
                  Achieved Outcome
                </h5>
                <p className="text-xs sm:text-sm text-slate-300">
                  {project.outcome}
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

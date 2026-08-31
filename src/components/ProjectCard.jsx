import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Star, Layers } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`group rounded-2xl bg-[#10141F] border transition-all duration-300 flex flex-col overflow-hidden ${
        project.featured
          ? 'border-emerald-500/40 shadow-xl shadow-emerald-950/20 hover:border-emerald-400'
          : 'border-white/10 hover:border-emerald-500/30'
      }`}
    >
      {/* Card Image Banner */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10141F] via-transparent to-black/30" />

        {/* Flagship Star Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/30">
              <Star className="w-3.5 h-3.5 fill-slate-950" />
              <span>Flagship System</span>
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2.5 py-1 rounded-md bg-slate-950/70 backdrop-blur-md border border-white/10 text-slate-300 text-xs font-mono">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-1.5 flex items-center justify-between">
            <span>{project.title}</span>
          </h3>

          {/* Tagline / Subtitle */}
          <p className="text-xs font-mono text-emerald-400/90 mb-3 font-semibold">
            {project.subtitle}
          </p>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-slate-400">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons & Detail Trigger */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 font-mono tracking-wide group-hover:translate-x-0.5 transition-transform"
          >
            <span>View Full System Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="View GitHub repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                title="View Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

        </div>

      </div>
    </motion.div>
  );
}

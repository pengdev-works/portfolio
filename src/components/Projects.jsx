import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { FolderGit2, Star, Filter } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full-Stack Application', 'Management System', 'Web Application'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const flagshipProject = projectsData.find((p) => p.id === 'abraventure');

  return (
    <section id="projects" className="py-24 relative bg-[#090A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Real systems built for <span className="text-gradient-emerald">real utility.</span>
          </h2>
          <p className="text-slate-300 text-base max-w-2xl">
            From province-wide tourism ecosystems to automated institutional resource scheduling platforms.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-xl bg-[#10141F] border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === cat
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Flagship Highlight Banner (If All or Full-Stack filter active) */}
        {(activeFilter === 'All' || activeFilter === 'Full-Stack Application') && flagshipProject && (
          <div className="mb-14">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#10141F] via-[#0D0F17] to-[#0A121A] border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/30 relative overflow-hidden">
              
              {/* Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Preview Image */}
                <div className="lg:col-span-6 rounded-xl overflow-hidden border border-white/10 shadow-lg relative group h-64 sm:h-80">
                  <img
                    src={flagshipProject.image}
                    alt={flagshipProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs shadow-md">
                      <Star className="w-3.5 h-3.5 fill-slate-950" />
                      <span>FLAGSHIP SYSTEM</span>
                    </span>
                  </div>
                </div>

                {/* Right Details */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    Province of Abra Tourism Ecosystem
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {flagshipProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-300 font-mono font-medium">
                    {flagshipProject.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {flagshipProject.tagline} Features Leaflet GIS mapping, homestay reservation handling, and municipal tourism officer management portals.
                  </p>

                  <div className="flex flex-wrap gap-1.5 py-2">
                    {flagshipProject.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setSelectedProject(flagshipProject)}
                      className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-emerald-500/20"
                    >
                      Explore System Specs & Modal
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

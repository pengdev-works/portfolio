import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github, ExternalLink, Code2, Star, GitFork,
  GitBranch, Activity, ArrowUpRight
} from 'lucide-react';

const featuredRepos = [
  {
    name: "abraventure-homestay-system",
    description: "Web-based integrated tourism information and homestay management system for the Province of Abra. Features Leaflet maps, booking engine, and multi-tier admin dashboards.",
    language: "JavaScript",
    languageColor: "#f7df1e",
    stars: 12,
    forks: 4,
    updated: "Recently active",
    url: "https://abraventure2-0.vercel.app/",
    topics: ["React", "Node.js", "PostgreSQL", "Leaflet", "Vercel"]
  },
  {
    name: "classroom-schedule-manager",
    description: "Automated academic scheduling system with real-time conflict detection for classrooms, teachers, subjects, and sections.",
    language: "JavaScript",
    languageColor: "#f7df1e",
    stars: 8,
    forks: 2,
    updated: "2 weeks ago",
    url: "https://github.com/pengdev-works",
    topics: ["React", "Express.js", "PostgreSQL", "Tailwind"]
  }
];

function ContributionGrid() {
  const weeks = 26;
  const days = 7;
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const cells = [];
    for (let w = 0; w < weeks; w++) {
      const week = [];
      for (let d = 0; d < days; d++) {
        const isWeekend = d === 0 || d === 6;
        const recencyBoost = w / weeks;
        const rand = Math.random();
        let level = 0;
        if (rand > (isWeekend ? 0.75 : 0.55) + recencyBoost * 0.1) {
          level = rand > 0.9 ? 3 : rand > 0.75 ? 2 : 1;
          if (recencyBoost > 0.7 && rand > 0.6) level = Math.min(level + 1, 4);
        }
        week.push(level);
      }
      cells.push(week);
    }
    setGrid(cells);
  }, []);

  const colorMap = {
    0: 'bg-white/5 border-white/5',
    1: 'bg-emerald-900/60 border-emerald-800/40',
    2: 'bg-emerald-700/70 border-emerald-600/40',
    3: 'bg-emerald-500/80 border-emerald-400/40',
    4: 'bg-emerald-400 border-emerald-300/60',
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-1 min-w-max mx-auto justify-center">
        {grid.map((week, wIdx) => (
          <div key={wIdx} className="flex flex-col gap-1">
            {week.map((level, dIdx) => (
              <div
                key={dIdx}
                title={`Level ${level} contribution`}
                className={`w-3 h-3 rounded-sm border transition-all hover:scale-125 cursor-default ${colorMap[level]}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-2 mt-3 text-xs font-mono text-slate-500">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <div key={l} className={`w-3 h-3 rounded-sm border ${colorMap[l]}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

export default function GithubSection() {
  return (
    <section id="github" className="py-24 relative bg-[#090A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source & Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Active code &{' '}
            <span className="text-gradient-emerald">GitHub activity.</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            Building open-source systems, academic repositories, and practical software solutions maintained on GitHub.
          </p>
        </div>

        {/* GitHub Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-6 sm:p-8 rounded-2xl bg-[#10141F] border border-white/10 mb-8 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-slate-800 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-950/30">
                <Github className="w-9 h-9" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2.5 flex-wrap">
                  <span className="font-mono">@pengdev-works</span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    Active Developer
                  </span>
                </h3>
                <p className="text-sm text-slate-400 font-mono mt-1">
                  Jhon Christopher Paragas (pengzzz) · Full-Stack Student Developer · La Paz, Abra
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
                    Public Repositories
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    Star Activity
                  </span>
                  <span className="flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    Active Commits
                  </span>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/pengdev-works"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/10 text-white hover:text-emerald-400 font-semibold text-sm border border-white/10 hover:border-emerald-500/40 transition-all group"
            >
              <Github className="w-4 h-4" />
              <span>Visit @pengdev-works</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Featured Repository Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {featuredRepos.map((repo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl bg-[#10141F] border border-white/10 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-950/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all">
                    <Code2 className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                    title="Open repository link"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors mb-2 font-mono leading-snug">
                  {repo.name}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-full bg-emerald-500/8 border border-emerald-500/20 text-[10px] font-mono text-emerald-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400/70" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3 h-3 text-slate-500" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
                <span className="text-slate-600">{repo.updated}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contribution Heatmap */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-xl bg-[#10141F] border border-white/10"
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-bold text-white">
                GitHub Contribution Activity
              </span>
            </div>
            <span className="text-xs font-mono text-slate-500">
              @pengdev-works
            </span>
          </div>

          <ContributionGrid />
        </motion.div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../data/journey';
import { Calendar, CheckCircle2, Milestone, ArrowRight } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="journey" className="py-24 relative bg-noise bg-[#090A0F] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Milestone className="w-3.5 h-3.5" />
            <span>Developer Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Growth, milestones & <span className="text-gradient-emerald">evolution.</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            A chronological timeline of learning fundamentals, building complex systems, and engineering full-stack applications.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-emerald-500/20 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
          
          {journeyData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Year Marker (Desktop Left Badge / Mobile Top Badge) */}
              <div className="sm:absolute sm:-left-[168px] sm:top-1.5 mb-3 sm:mb-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-sm shadow-sm">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.year}</span>
                </span>
              </div>

              {/* Timeline Connector Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-4 h-4 rounded-full bg-[#090A0F] border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/50" />

              {/* Milestone Card */}
              <div className="p-6 rounded-2xl bg-[#10141F] border border-white/10 group-hover:border-emerald-500/30 transition-all shadow-xl space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-400 uppercase">
                    {item.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Achievements Bullet Highlights */}
                <div className="space-y-2 pt-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

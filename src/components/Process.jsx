import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../data/process';
import { Search, Compass, Hammer, ShieldCheck, Rocket, ArrowRight, GitPullRequest } from 'lucide-react';

const icons = [Search, Compass, Hammer, ShieldCheck, Rocket];

export default function Process() {
  return (
    <section id="process" className="py-24 relative bg-[#090A0F] border-t border-white/5">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <GitPullRequest className="w-3.5 h-3.5" />
            <span>Workflow & Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            How I turn ideas into{' '}
            <span className="text-gradient-emerald">working software.</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            A structured 5-stage development pipeline ensuring high quality, reliable databases, and intuitive UI on every project.
          </p>
        </div>

        {/* Process Steps — desktop: horizontal with arrows, mobile: stacked */}
        <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-0">
          {processSteps.map((step, idx) => {
            const StepIcon = icons[idx] || Search;
            const isLast = idx === processSteps.length - 1;

            return (
              <div key={idx} className="flex flex-col md:flex-row items-stretch flex-1">

                {/* Step Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex-1 p-6 rounded-2xl bg-[#10141F] border border-white/10 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-950/20 transition-all duration-300 group flex flex-col"
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black font-mono text-emerald-400/80 group-hover:text-emerald-400 transition-colors">
                      {step.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all">
                      <StepIcon className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                    </div>
                  </div>

                  {/* Step Name */}
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                    {step.name}
                  </h3>
                  <p className="text-[11px] font-mono text-emerald-400/70 mb-3 font-semibold">
                    {step.title}
                  </p>

                  {/* Step Description */}
                  <p className="text-xs text-slate-400 leading-relaxed flex-1">
                    {step.description}
                  </p>

                  {/* Stage Indicator */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-600 uppercase tracking-wider">
                      Stage {idx + 1} of {processSteps.length}
                    </span>
                    {/* Progress Bar */}
                    <div className="flex gap-0.5">
                      {processSteps.map((_, pIdx) => (
                        <div
                          key={pIdx}
                          className={`h-1 w-4 rounded-full transition-colors ${
                            pIdx <= idx ? 'bg-emerald-500' : 'bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Connector Arrow (between cards on desktop only) */}
                {!isLast && (
                  <div className="hidden md:flex items-center justify-center px-2 flex-shrink-0">
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5 text-emerald-500/40" />
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

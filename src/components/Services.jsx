import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import { Globe, LayoutDashboard, Layers, Palette, Wrench, Check } from 'lucide-react';

const iconMap = {
  Globe, LayoutDashboard, Layers, Palette
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-[#090A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>Development Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            What I Can <span className="text-gradient-emerald">Build.</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            Practical digital services tailored for startups, academic departments, local organizations, and business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Layers;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-[#10141F] border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black font-mono text-slate-700 group-hover:text-emerald-500/40 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  {service.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

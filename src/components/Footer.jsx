import React from 'react';
import { ArrowUp, Code2, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/images/profile.jpg';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#06070B] border-t border-white/10 text-slate-400 text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-emerald-500/40">
              <img
                src={profileImg}
                alt="Jhon Christopher Paragas"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight">
                Jhon Christopher Paragas<span className="text-emerald-400 font-mono"> (pengzzz)</span>
              </span>
              <p className="text-xs text-slate-500 font-mono">
                Full-Stack Developer · La Paz, Abra, Philippines 🇵🇭
              </p>
            </div>
          </div>

          {/* Quick Footer Navigation */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <span>•</span>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <span>•</span>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <span>•</span>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <span>•</span>
            <a href="#journey" className="hover:text-emerald-400 transition-colors">Journey</a>
            <span>•</span>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Scroll to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/pengdev-works"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 border border-white/10 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:topelparagas@gmail.com"
              className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 border border-white/10 transition-colors"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all flex items-center gap-1 text-xs font-mono"
              title="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3">
          <p>© {new Date().getFullYear()} Jhon Christopher Paragas. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with React, Vite & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

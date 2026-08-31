import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Process from './components/Process';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Section IDs in scroll order
const SECTION_IDS = [
  'home', 'about', 'projects', 'skills',
  'journey', 'services', 'process', 'github', 'contact'
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // ── Scroll Spy & Back-to-Top Visibility ──────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      setShowScrollTop(window.scrollY > 600);

      for (const sectionId of SECTION_IDS) {
        const el = document.getElementById(sectionId);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-200 antialiased overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Page Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Services />
        <Process />
        <GithubSection />
        <Contact />
      </main>

      <Footer />

      {/* Floating Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 p-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/30 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

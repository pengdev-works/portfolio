import React, { useState } from 'react';
import { Terminal, Copy, Check, FileCode, Server, ExternalLink, ShieldCheck, MapPin, Code2 } from 'lucide-react';
import profileImg from '../assets/images/profile.jpg';
import abraHero from '../assets/images/abraventure-hero.png';

const tabs = [
  {
    id: 'status',
    filename: 'developer_status.json',
    icon: Terminal,
    content: `{
  "developer": "Jhon Christopher Paragas",
  "role": "Full-Stack Developer & System Builder",
  "location": "Poblacion, La Paz, Abra, Philippines 🇵🇭",
  "status": "Available for full-stack engineering & contracts",
  "github": "https://github.com/pengdev-works",
  "flagship_system": "ABRAVENTURE Tourism Ecosystem",
  "live_url": "https://abraventure2-0.vercel.app/",
  "core_stack": ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
  "philosophy": "Building digital experiences that solve real problems."
}`
  },
  {
    id: 'abraventure',
    filename: 'AbraVenture.config.js',
    icon: FileCode,
    content: `export const abraVentureSystem = {
  name: "ABRAVENTURE Tourism & Homestay Platform",
  target_region: "Province of Abra (CAR), Philippines",
  live_url: "https://abraventure2-0.vercel.app/",
  modules: [
    "27 Municipalities Tourism Directory",
    "Homestay Inventory & Booking Engine",
    "Interactive Leaflet GIS Mapping",
    "Multi-Tier DOT Officer Analytics"
  ],
  database: "Neon PostgreSQL Cloud",
  status: "LIVE_PRODUCTION"
};`
  },
  {
    id: 'metrics',
    filename: 'system_metrics.sh',
    icon: Server,
    content: `# System Verification Status
$ npm test -- --coverage
✔ ABRAVENTURE API & Role RBAC: PASS (100%)
✔ Leaflet Spatial Query Engine: PASS
✔ Schedule Conflict Detection: PASS

$ git status -s
## main...origin/main
✔ 100% production ready & verified`
  }
];

export default function HeroTerminal() {
  const [activeTab, setActiveTab] = useState('status');
  const [copied, setCopied] = useState(false);

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="terminal-window w-full max-w-xl mx-auto lg:max-w-none rounded-2xl border border-white/10 bg-[#0D0F17] shadow-2xl shadow-emerald-950/30 overflow-hidden font-sans text-xs sm:text-sm">
      
      {/* Personal Developer Profile Header Card */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-[#121522] via-[#0F121D] to-[#141926] border-b border-white/10 relative overflow-hidden">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {/* Real Avatar */}
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-emerald-500/50 shadow-md flex-shrink-0">
              <img
                src={profileImg}
                alt="Jhon Christopher Paragas"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0D0F17]" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white font-sans tracking-tight">
                  Jhon Christopher Paragas
                </h3>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3" />
                  Verified Developer
                </span>
              </div>
              <p className="text-xs font-mono text-slate-400 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>La Paz, Abra, Philippines 🇵🇭</span>
              </p>
            </div>
          </div>

          {/* Flagship Quick Link Pill */}
          <a
            href="https://abraventure2-0.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold transition-all"
            title="View Live ABRAVENTURE Platform"
          >
            <span>ABRAVENTURE</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Code Window Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#090A0F] border-b border-white/10 select-none">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-slate-500 font-mono hidden sm:inline-block">
            ~/paragas-portfolio/inspect
          </span>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200 text-xs transition-colors font-mono"
          title="Copy snippet"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy JSON</span>
            </>
          )}
        </button>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center bg-[#090A0F] border-b border-white/5 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono border-r border-white/5 transition-colors whitespace-nowrap ${
                isActive
                  ? 'bg-[#0D0F17] text-emerald-400 border-t-2 border-t-emerald-500 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.filename}</span>
            </button>
          );
        })}
      </div>

      {/* Code Display Container */}
      <div className="p-4 sm:p-5 bg-[#0D0F17] overflow-x-auto min-h-[220px] max-h-[280px]">
        <pre className="text-slate-300 leading-relaxed font-mono text-xs sm:text-sm">
          <code>
            {currentTab.content.split('\n').map((line, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="select-none text-slate-600 w-5 text-right font-mono text-xs">
                  {idx + 1}
                </span>
                <span className="flex-1 font-mono">
                  {line.includes('": "') ? (
                    <span>
                      {line.split('": "')[0]}": "<span className="text-emerald-300">{line.split('": "')[1]?.replace('"', '')}</span>"
                    </span>
                  ) : line.includes('//') || line.startsWith('#') ? (
                    <span className="text-slate-500 italic">{line}</span>
                  ) : line.includes('export') || line.includes('const') || line.includes('import') ? (
                    <span className="text-amber-400">{line}</span>
                  ) : line.includes('✔') ? (
                    <span className="text-emerald-400 font-semibold">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Terminal Footer Indicator */}
      <div className="px-4 py-2 bg-[#090A0F] border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>React 19 · Node.js · PostgreSQL</span>
        </div>
        <span className="text-slate-500 hidden sm:inline">Verified Proof</span>
      </div>

    </div>
  );
}

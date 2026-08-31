import React, { useState } from 'react';
import { Terminal, Copy, Check, FileCode, Server } from 'lucide-react';

const tabs = [
  {
    id: 'status',
    filename: 'developer_status.json',
    icon: Terminal,
    content: `{
  "developer": "Jhon Christopher Paragas (pengzzz)",
  "location": "Poblacion, La Paz, Abra, Philippines 🇵🇭",
  "status": "Available for full-stack engineering & projects",
  "github": "https://github.com/pengdev-works",
  "contact": "topelparagas@gmail.com",
  "flagship_system": "ABRAVENTURE Tourism & Homestay Platform",
  "live_demo": "https://abraventure2-0.vercel.app/",
  "core_stack": ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
  "code_philosophy": "Building digital experiences that solve real problems."
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
  architecture: "Full-Stack Client-Server & REST API",
  modules: [
    "27 Municipalities Tourism Discovery",
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
    content: `# Live System Verification
$ npm test -- --coverage
✔ ABRAVENTURE API & Role RBAC: PASS (100%)
✔ Leaflet Spatial Query Engine: PASS
✔ Classroom Schedule Conflict Algorithm: PASS

$ git status -s
## main...origin/main
✔ All systems compiled & production ready`
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
    <div className="w-full max-w-xl mx-auto lg:max-w-none rounded-xl border border-white/10 bg-[#0D0F17] shadow-2xl shadow-emerald-950/20 overflow-hidden font-mono text-xs sm:text-sm">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#121522] border-b border-white/10 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-slate-400 font-mono hidden sm:inline-block">
            ~/jhon-christopher-paragas
          </span>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200 text-xs transition-colors"
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
              <span>Copy</span>
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
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono border-r border-white/5 transition-colors whitespace-nowrap ${
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
      <div className="p-4 sm:p-5 bg-[#0D0F17] overflow-x-auto min-h-[260px] max-h-[340px]">
        <pre className="text-slate-300 leading-relaxed">
          <code>
            {currentTab.content.split('\n').map((line, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="select-none text-slate-600 w-6 text-right font-mono text-xs">
                  {idx + 1}
                </span>
                <span className="flex-1 font-mono">
                  {line.includes('": "') ? (
                    <span>
                      {line.split('": "')[0]}": "<span className="text-emerald-300">{line.split('": "')[1]?.replace('"', '')}</span>"
                    </span>
                  ) : line.includes('//') ? (
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
      <div className="px-4 py-2.5 bg-[#090A0F] border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Node.js · React 19 · PostgreSQL</span>
        </div>
        <span className="text-slate-500 hidden sm:inline">Abra, PH 🇵🇭</span>
      </div>
    </div>
  );
}

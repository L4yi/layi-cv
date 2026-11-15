import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Maximize2, Minimize2, Activity } from 'lucide-react';
import { profileData, projectsData, skillsData } from '../data/portfolioData';

interface InteractiveTerminalProps {
  toggleTheme?: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ toggleTheme }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'system.init()',
      output: (
        <div className="space-y-1.5 text-stone-300">
          <p className="text-amber-300 font-semibold">
            Layi Cloud Architecture Console [v2.8.0-gold-edition]
          </p>
          <p className="text-stone-400 text-xs">
            Type <span className="text-amber-300 font-mono font-semibold">help</span> to explore verified systems, or select any command below.
          </p>
        </div>
      )
    }
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const parts = trimmed.split(' ');
    const mainCmd = parts[0].toLowerCase();

    let responseOutput: React.ReactNode = null;

    switch (mainCmd) {
      case 'help':
        responseOutput = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-amber-300 font-semibold">Executable System Queries:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-stone-300">
              <div><span className="text-amber-400 font-bold">whoami</span> - Executive bio & engineering role</div>
              <div><span className="text-amber-400 font-bold">skills</span> - Full-stack technical capabilities</div>
              <div><span className="text-amber-400 font-bold">projects</span> - Production verified architectures</div>
              <div><span className="text-amber-400 font-bold">nshs</span> - Launch New State High School portal</div>
              <div><span className="text-amber-400 font-bold">mobeki</span> - Launch MOB Eki Ventures E-Store</div>
              <div><span className="text-amber-400 font-bold">quickdrop</span> - Launch QuickDrop P2P file radar</div>
              <div><span className="text-amber-400 font-bold">contact</span> - Direct transmission channels</div>
              <div><span className="text-amber-400 font-bold">hire</span> - Priority inquiry pipeline</div>
              <div><span className="text-amber-400 font-bold">theme</span> - Toggle liquid glass brightness</div>
              <div><span className="text-amber-400 font-bold">clear</span> - Flush console buffer</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
      case 'about':
        responseOutput = (
          <div className="space-y-1.5 text-xs text-stone-300 font-mono p-3.5 rounded-2xl bg-amber-500/[0.03] border border-amber-500/15">
            <p><span className="text-amber-400 font-bold">Engineer:</span> {profileData.name}</p>
            <p><span className="text-amber-400 font-bold">Role:</span> {profileData.role}</p>
            <p><span className="text-amber-400 font-bold">Location:</span> {profileData.location}</p>
            <p><span className="text-amber-400 font-bold">Status:</span> {profileData.status.text}</p>
            <p className="text-stone-400 pt-1 leading-relaxed">{profileData.bio}</p>
          </div>
        );
        break;

      case 'skills':
        responseOutput = (
          <div className="space-y-2 text-xs font-mono">
            {skillsData.map((cat, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-amber-500/[0.02] border border-amber-500/10">
                <p className="text-amber-300 font-semibold mb-1">{cat.title}:</p>
                <p className="text-stone-300">
                  {cat.skills.map(s => `${s.name} (${s.experience})`).join(' • ')}
                </p>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        responseOutput = (
          <div className="space-y-2.5 text-xs font-mono">
            <p className="text-amber-300 font-semibold">Verified Deployed Systems:</p>
            {projectsData.map((p) => (
              <div key={p.id} className="p-3 rounded-2xl bg-amber-500/[0.03] border border-amber-500/15">
                <p className="text-amber-400 font-bold flex items-center justify-between">
                  <span>{p.title}</span>
                  <span className="text-[10px] text-stone-400 font-normal">[{p.category}]</span>
                </p>
                <p className="text-stone-300 text-[11px] mt-0.5">{p.tagline}</p>
                {p.liveUrl && (
                  <p className="text-amber-300 text-[11px] mt-1">Live URL: <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="underline">{p.liveUrl}</a></p>
                )}
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        responseOutput = (
          <div className="space-y-1.5 text-xs font-mono text-stone-300 p-3.5 rounded-2xl bg-amber-500/[0.03] border border-amber-500/15">
            <p><span className="text-amber-400 font-bold">Email:</span> {profileData.email}</p>
            <p><span className="text-amber-400 font-bold">GitHub:</span> {profileData.socials.github}</p>
            <p><span className="text-amber-400 font-bold">LinkedIn:</span> {profileData.socials.linkedin}</p>
          </div>
        );
        break;

      case 'hire':
      case 'sudo':
        responseOutput = (
          <div className="space-y-2 text-xs font-mono text-amber-300 bg-amber-950/40 p-4 rounded-2xl border border-amber-500/30">
            <p className="font-bold text-sm">✨ Priority Inquiry Channel Open</p>
            <p className="text-stone-200">Looking forward to engineering high-impact web products and scalable architectures with your team.</p>
            <p className="text-amber-300">
              Transmit directly to: <a href={`mailto:${profileData.email}?subject=Full-Stack Project Collaboration`} className="underline font-bold text-white">{profileData.email}</a>
            </p>
          </div>
        );
        break;

      case 'nshs':
      case 'newstate':
      case 'newstatehighschool':
        responseOutput = (
          <div className="space-y-2 text-xs font-mono text-amber-300 bg-amber-950/40 p-4 rounded-2xl border border-amber-500/30">
            <p className="font-bold text-sm">🏫 New State High School Web Portal</p>
            <p className="text-stone-200">Live production secondary school management platform with WAEC/NECO broadsheet computations and official cryptographic print engine.</p>
            <p className="text-amber-300">
              Opening Live URL: <a href="https://newstatehighschool.web.app" target="_blank" rel="noopener noreferrer" className="underline font-bold text-white">https://newstatehighschool.web.app</a>
            </p>
          </div>
        );
        window.open('https://newstatehighschool.web.app', '_blank');
        break;

      case 'mobeki':
      case 'mob-eki':
      case 'estore':
      case 'store':
        responseOutput = (
          <div className="space-y-2 text-xs font-mono text-amber-300 bg-amber-950/40 p-4 rounded-2xl border border-amber-500/30">
            <p className="font-bold text-sm">🛍️ MOB Eki Ventures — E-Commerce Storefront</p>
            <p className="text-stone-200">Production commercial e-commerce platform built with React, TypeScript, Node.js server, and Supabase cloud persistence.</p>
            <p className="text-amber-300">
              Opening Live URL: <a href="https://mob-website-phi.vercel.app" target="_blank" rel="noopener noreferrer" className="underline font-bold text-white">https://mob-website-phi.vercel.app</a>
            </p>
          </div>
        );
        window.open('https://mob-website-phi.vercel.app', '_blank');
        break;

      case 'quickdrop':
      case 'p2p':
        responseOutput = (
          <div className="space-y-2 text-xs font-mono text-amber-300 bg-amber-950/40 p-4 rounded-2xl border border-amber-500/30">
            <p className="font-bold text-sm">⚡ QuickDrop — Universal P2P File Radar</p>
            <p className="text-stone-200">Universal cross-device local-network file and clipboard bridge built with React, Node.js WebSockets, and Docker.</p>
            <p className="text-amber-300">
              Opening Repository / Demo: <a href="https://github.com/L4yi/quickdrop" target="_blank" rel="noopener noreferrer" className="underline font-bold text-white">https://github.com/L4yi/quickdrop</a>
            </p>
          </div>
        );
        window.open('https://github.com/L4yi/quickdrop', '_blank');
        break;

      case 'theme':
        if (toggleTheme) {
          toggleTheme();
          responseOutput = <p className="text-amber-300 text-xs font-mono">Theme switched successfully.</p>;
        } else {
          responseOutput = <p className="text-stone-400 text-xs font-mono">Theme toggle unavailable.</p>;
        }
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        responseOutput = (
          <p className="text-rose-400 text-xs font-mono">
            Unrecognized query: <span className="font-bold">{trimmed}</span>. Type <span className="text-amber-300 underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: trimmed, output: responseOutput }]);
    setInput('');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const quickCommands = ['help', 'nshs', 'mobeki', 'quickdrop', 'whoami', 'skills', 'projects', 'contact', 'hire', 'clear'];

  return (
    <section id="terminal" className="py-24 relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="mb-12 text-center max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass text-xs font-mono font-medium mb-3 text-amber-300 border border-amber-500/30">
          <TerminalIcon className="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive Execution</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          System <span className="text-luxury-gradient">Command Console</span>
        </h2>
        <p className="mt-2 text-stone-400 text-xs sm:text-sm">
          Query architecture details, inspect tech stack, or initiate a priority contact pipeline.
        </p>
      </div>

      {/* Luxury Obsidian Glass Console */}
      <div className={`rounded-3xl overflow-hidden liquid-glass border border-amber-500/20 shadow-2xl font-mono transition-all duration-300 ${isMaximized ? 'fixed inset-4 z-50 max-w-none max-h-none flex flex-col' : 'w-full'}`}>
        
        {/* Titlebar with Specular Capsule */}
        <div className="bg-white/[0.02] px-5 py-3.5 border-b border-amber-500/15 flex items-center justify-between select-none">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm"></span>
            <span className="ml-3 text-xs text-stone-400 font-medium hidden sm:inline-block">
              layi@gold-orchestrator:~
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-[11px] text-amber-400/80 font-mono">
              <Activity className="w-3 h-3 text-amber-400" />
              <span>TLS 1.3 Verified</span>
            </div>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="text-stone-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              title={isMaximized ? "Restore" : "Maximize"}
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Console Body */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className={`p-5 sm:p-7 overflow-y-auto space-y-4 text-xs sm:text-sm ${isMaximized ? 'flex-1 min-h-0' : 'h-[360px]'}`}
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              {item.command !== 'system.init()' && (
                <div className="flex items-center gap-2 text-stone-400">
                  <span className="text-amber-400 font-bold">layi@gold:~$</span>
                  <span className="text-white font-medium">{item.command}</span>
                </div>
              )}
              <div>{item.output}</div>
            </div>
          ))}

          {/* Active Prompt Line */}
          <div className="flex items-center gap-2 text-stone-300">
            <span className="text-amber-400 font-bold">layi@gold:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="run query (e.g. 'help', 'projects')..."
              className="flex-1 bg-transparent text-white outline-none border-none placeholder-stone-600 text-xs sm:text-sm font-mono"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              onClick={() => handleCommand(input)}
              aria-label="Run command"
              className="p-1 text-stone-500 hover:text-amber-300 transition-colors"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Quick Command Pills Dock */}
        <div className="bg-white/[0.02] px-5 py-3 border-t border-amber-500/15 flex flex-wrap items-center gap-2">
          <span className="text-[11px] text-stone-400 font-mono mr-1">Direct Actions:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-3 py-1 rounded-xl liquid-btn-secondary text-stone-300 hover:text-amber-300 text-[11px] font-mono transition-all active:scale-95"
            >
              {cmd}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

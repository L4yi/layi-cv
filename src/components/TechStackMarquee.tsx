import React from 'react';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Smartphone, 
  Database, 
  Server, 
  ShieldCheck, 
  GitBranch, 
  Palette, 
  Globe, 
  Flame, 
  Terminal,
  Zap,
  Box
} from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  icon: React.FC<{ className?: string }>;
}

export const TechStackMarquee: React.FC = () => {
  const lane1: TechItem[] = [
    { name: 'React 18 / 19', category: 'Frontend', icon: Code2 },
    { name: 'TypeScript', category: 'Language', icon: Layers },
    { name: 'Next.js', category: 'Framework', icon: Globe },
    { name: 'Tailwind CSS', category: 'Styling', icon: Palette },
    { name: 'Capacitor Android', category: 'Mobile', icon: Smartphone },
    { name: 'JavaScript (ESNext)', category: 'Language', icon: Terminal },
    { name: 'Vite Tooling', category: 'Bundler', icon: Zap },
    { name: 'HTML5 & Modern CSS', category: 'Standards', icon: Box },
    { name: 'REST & Axios', category: 'Networking', icon: Globe },
  ];

  const lane2: TechItem[] = [
    { name: 'Node.js Engine', category: 'Backend', icon: Server },
    { name: 'Express.js', category: 'Backend', icon: Server },
    { name: 'Firebase Hosting', category: 'Cloud', icon: Flame },
    { name: 'MongoDB Atlas', category: 'Database', icon: Database },
    { name: 'JWT & Strict RBAC', category: 'Security', icon: ShieldCheck },
    { name: 'Git & GitHub', category: 'DevOps', icon: GitBranch },
    { name: 'Figma UI/UX', category: 'Design', icon: Palette },
    { name: 'Vercel Deployment', category: 'Cloud', icon: Cpu },
    { name: 'Clean Architecture', category: 'Engineering', icon: Code2 },
  ];

  // Repeat for continuous seamless looping
  const repeatedLane1 = [...lane1, ...lane1, ...lane1, ...lane1];
  const repeatedLane2 = [...lane2, ...lane2, ...lane2, ...lane2];

  return (
    <div className="w-full flex flex-col items-center mb-6">
      
      {/* Robinson Exact Dimension Header Container */}
      <div className="relative w-full max-w-[53rem] overflow-hidden py-3">
        
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute top-0 left-0 w-16 sm:w-28 z-20 h-full bg-gradient-to-r from-[#fafafa] dark:from-[#0c0c0e] via-[#fafafa]/80 dark:via-[#0c0c0e]/80 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 sm:w-28 z-20 h-full bg-gradient-to-l from-[#fafafa] dark:from-[#0c0c0e] via-[#fafafa]/80 dark:via-[#0c0c0e]/80 to-transparent pointer-events-none" />

        {/* Marquee Track 1: Moving Left */}
        <div className="overflow-hidden w-full mb-2.5">
          <div className="animate-marquee-left pause-hover flex items-center gap-3">
            {repeatedLane1.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`lane1-${idx}`}
                  className="px-3.5 py-1.5 rounded-full bg-[#fafafa] dark:bg-[#151518] border border-black/[0.08] dark:border-white/10 text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-2 hover:border-black/25 dark:hover:border-white/25 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)] cursor-default select-none shrink-0"
                >
                  <Icon className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Marquee Track 2: Moving Right */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee-right pause-hover flex items-center gap-3">
            {repeatedLane2.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`lane2-${idx}`}
                  className="px-3.5 py-1.5 rounded-full bg-[#fafafa] dark:bg-[#151518] border border-black/[0.08] dark:border-white/10 text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-2 hover:border-black/25 dark:hover:border-white/25 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)] cursor-default select-none shrink-0"
                >
                  <Icon className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};
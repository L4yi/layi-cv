import React, { useState, useEffect } from 'react';
import { 
  User, 
  MapPin, 
  Clock, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Copy, 
  Check, 
  Sparkles, 
  Rocket,
  ArrowUpRight
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const AboutBento: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const principles = [
    {
      title: "End-to-End Precision",
      desc: "Full architectural cohesion from MongoDB & Express backend services to polished React interfaces.",
      icon: Layers,
      gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
      accent: "text-amber-300"
    },
    {
      title: "Sub-Second Velocity",
      desc: "Optimized bundle sizes, instant client-side transitions, and zero layout shift on mobile screens.",
      icon: Zap,
      gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
      accent: "text-yellow-300"
    },
    {
      title: "Defensive Security",
      desc: "Hardened against IDOR, injection attacks, and credential stuffing via verified JWTs and RBAC layers.",
      icon: ShieldCheck,
      gradient: "from-amber-600/20 via-yellow-600/10 to-transparent",
      accent: "text-amber-400"
    }
  ];

  return (
    <section id="about" className="py-28 relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-14 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass text-xs font-mono font-medium mb-3 text-amber-300 border border-amber-500/30">
          <User className="w-3.5 h-3.5 text-amber-400" />
          <span>Executive Overview</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Crafted with <span className="text-luxury-gradient">Modern Mastery</span>
        </h2>
        <p className="mt-3 text-stone-400 text-sm sm:text-base">
          A panoramic view of technical execution, engineering philosophy, and architectural depth.
        </p>
      </div>

      {/* Luxury Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        
        {/* Large Core Bio Panel */}
        <div className="md:col-span-2 lg:col-span-2 liquid-glass-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-500/10 via-yellow-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
                // Full-Stack Architecture
              </span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-4 leading-snug">
              Transforming complex real-world workflows into intuitive, resilient digital systems.
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed mb-4">
              {profileData.detailedBio}
            </p>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Proven experience building enterprise school management portals (New State High School), commercial e-commerce storefronts (MOB Eki Ventures), and universal cross-device P2P bridges (QuickDrop).
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-amber-500/15 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-stone-400">Direct Inquiries:</span>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl liquid-btn-secondary text-xs font-mono text-stone-200 hover:text-amber-300 transition-all active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-amber-300 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-400" />
                    <span>{profileData.email}</span>
                  </>
                )}
              </button>
            </div>

            <a
              href="#projects"
              className="text-xs font-medium text-amber-300 hover:text-amber-200 hover:underline flex items-center gap-1 font-mono"
            >
              <span>View Systems</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Live Location & Local Time Orb */}
        <div className="liquid-glass-card rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-stone-400 uppercase tracking-wider font-semibold">
                Timezone & Hub
              </span>
              <MapPin className="w-4 h-4 text-amber-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              {profileData.location}
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed mb-6">
              Available for full-time on-site/hybrid roles in Lagos and remote engineering worldwide.
            </p>
          </div>

          <div className="p-4 rounded-2xl liquid-glass border border-amber-500/20 flex items-center justify-between shadow-inner">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono text-stone-400">WAT (UTC+1):</span>
            </div>
            <span className="text-sm font-mono font-bold text-amber-300">
              {time || 'Loading...'}
            </span>
          </div>
        </div>

        {/* Current Focus Panel */}
        <div className="liquid-glass-card rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
                // Active Focus
              </span>
              <Rocket className="w-4 h-4 text-amber-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Current Engineering Horizon
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              Scaling enterprise full-stack web portals, microservice security patterns, and cloud orchestration.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/25 text-[11px] font-mono font-semibold">
              #EnterprisePortals
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-yellow-500/10 text-yellow-300 border border-yellow-500/25 text-[11px] font-mono font-semibold">
              #RBACSecurity
            </span>
          </div>
        </div>

        {/* Executive Stats Strip */}
        <div className="md:col-span-3 lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="liquid-glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-platinum-gradient font-mono mb-1">
              {profileData.stats.yearsExperience}
            </div>
            <div className="text-xs text-stone-400 font-medium uppercase tracking-wider">
              Years Experience
            </div>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-luxury-gradient font-mono mb-1">
              {profileData.stats.projectsCompleted}
            </div>
            <div className="text-xs text-stone-400 font-medium uppercase tracking-wider">
              Projects Shipped
            </div>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-platinum-gradient font-mono mb-1">
              {profileData.stats.contributions}
            </div>
            <div className="text-xs text-stone-400 font-medium uppercase tracking-wider">
              Git Commits
            </div>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono mb-1">
              {profileData.stats.satisfaction}
            </div>
            <div className="text-xs text-stone-400 font-medium uppercase tracking-wider">
              Code Reliability
            </div>
          </div>
        </div>

        {/* Engineering Pillars */}
        <div className="md:col-span-3 lg:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="liquid-glass-card rounded-3xl p-7 flex flex-col justify-start">
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${item.gradient} border border-amber-500/20 flex items-center justify-center mb-5 shadow-md`}>
                  <Icon className={`w-5 h-5 ${item.accent}`} />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

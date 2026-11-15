import React, { useState } from 'react';
import { Cpu, Layout, Server, Cloud, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | 'all'>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return Layout;
      case 'Server':
        return Server;
      case 'Cloud':
        return Cloud;
      case 'Cpu':
      default:
        return Cpu;
    }
  };

  const displayedCategories = activeTab === 'all' 
    ? skillsData 
    : [skillsData[activeTab]];

  return (
    <section id="skills" className="py-28 relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-14 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass text-xs font-mono font-medium mb-3 text-amber-300 border border-amber-500/30">
          <Cpu className="w-3.5 h-3.5 text-amber-400" />
          <span>Technical Stack</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Capabilities & <span className="text-luxury-gradient">Core Arsenal</span>
        </h2>
        <p className="mt-3 text-stone-400 text-sm sm:text-base">
          Full-stack proficiencies and modern toolchains deployed across production environments.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 ${
            activeTab === 'all'
              ? 'liquid-btn-primary text-black shadow-lg shadow-amber-500/20'
              : 'liquid-btn-secondary text-stone-400 hover:text-amber-200'
          }`}
        >
          All Domains
        </button>
        {skillsData.map((cat, idx) => {
          const Icon = getCategoryIcon(cat.iconName);
          return (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === idx
                  ? 'liquid-btn-primary text-black shadow-lg shadow-amber-500/20'
                  : 'liquid-btn-secondary text-stone-400 hover:text-amber-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedCategories.map((category) => {
          const Icon = getCategoryIcon(category.iconName);
          return (
            <div
              key={category.title}
              className="liquid-glass-card rounded-3xl p-7 sm:p-8 relative overflow-hidden"
            >
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-yellow-500/10 border border-amber-500/25 flex items-center justify-center text-amber-300 shadow-md">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                  <span className="text-xs font-mono text-stone-400">
                    {category.skills.length} verified technologies
                  </span>
                </div>
              </div>

              {/* Skill Fill Tracks */}
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-2">
                      <span className="text-stone-200 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 opacity-80 group-hover:opacity-100 transition-opacity" />
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono text-stone-400">
                          {skill.experience}
                        </span>
                        <span className="text-xs font-mono font-bold text-amber-300">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    {/* Glass Progress Track */}
                    <div className="w-full h-2 bg-stone-900 rounded-full overflow-hidden p-0.5 border border-amber-500/15">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-full transition-all duration-1000 group-hover:brightness-110 shadow-sm"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

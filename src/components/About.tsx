import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';
import { 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Compass, 
  Headphones, 
  Code2, 
  Flame, 
  Heart, 
  BookOpen, 
  Terminal,
  Zap,
  MapPin
} from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'origin' | 'founder' | 'flow' | 'beyond'>('origin');

  const principles = [
    {
      title: "Think Deep Before Building",
      desc: "Sketching user journeys, typography tokens, and Figma prototypes before writing a single line of code.",
      icon: Compass,
      tag: "Design First"
    },
    {
      title: "Real-World Resilience",
      desc: "Engineering for flaky mobile networks, offline caching, sub-second delivery, and zero layout shifts.",
      icon: ShieldCheck,
      tag: "Architecture"
    },
    {
      title: "Obsession With Craft",
      desc: "Fluid spring animations, tactile micro-interactions, and dark mode palettes that feel alive.",
      icon: Sparkles,
      tag: "UI / UX"
    },
    {
      title: "Continuous Mastery",
      desc: "Combining the velocity of self-taught engineering with computer science rigor and algorithms at NIIT.",
      icon: Cpu,
      tag: "Engineering"
    }
  ];

  const personalTabs = {
    origin: {
      title: "Roots & The Self-Taught Hustle",
      subtitle: "How a curious kid in Lagos fell in love with software craft",
      content: (
        <div className="space-y-3 text-[14.5px] leading-relaxed text-[#5a5a5a] dark:text-zinc-300">
          <p>
            I didn't start with a traditional computer science degree. I grew up in <strong className="text-black dark:text-white font-semibold">Lagos, Nigeria</strong>, where the rhythm of the city teaches you resourcefulness from day one. I learned to code by staying up late into the night, dissecting website source code, rebuilding components from scratch, and experimenting relentlessly.
          </p>
          <p>
            Building on spotty internet and erratic power taught me two permanent engineering instincts: <span className="text-black dark:text-white font-medium italic">always save your state, and build software resilient enough to withstand real-world failure</span>. That grit is why I don't build toy projects—I build tools that solve genuine human bottlenecks, like the automated broadsheet computation engine for over 1,000 students at New State High School and offline-first mobile systems for Nigerian warehouses.
          </p>
        </div>
      )
    },
    founder: {
      title: "The Founder Mindset & Holdr",
      subtitle: "Why building from scratch is where I do my best work",
      content: (
        <div className="space-y-3 text-[14.5px] leading-relaxed text-[#5a5a5a] dark:text-zinc-300">
          <p>
            Founding <strong className="text-black dark:text-white font-semibold">Holdr</strong> (formerly CONNECT) was born from observing how African creators, producers, and local businesses struggle to conduct transactions and showcase work through disjointed chats and spreadsheets. I wanted to build something tailor-made for our creative economy.
          </p>
          <p>
            Being a founder taught me product empathy at a visceral level. I spent weeks in Figma drafting spatial systems, designing custom vector icons, and refining user onboarding before writing a single line of React code. It taught me that beautiful UI without solid backend state is just a painting—and solid backend code without intuitive design is inaccessible. I live to unite both.
          </p>
        </div>
      )
    },
    flow: {
      title: "The Flow State & Creative Rituals",
      subtitle: "What powers my late-night engineering sessions",
      content: (
        <div className="space-y-3 text-[14.5px] leading-relaxed text-[#5a5a5a] dark:text-zinc-300">
          <p>
            When I enter deep work, time disappears. My ritual is simple: dark mode across everything, VS Code with <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">JetBrains Mono</code>, Chrome DevTools pinned on a secondary screen, and a steaming cup of tea or water.
          </p>
          <p>
            In my headphones? A steady mix of <strong className="text-black dark:text-white font-semibold">Afrobeats</strong> (Asake, Burna Boy, Olamide, Wizkid) to keep the adrenaline up, transitioning into atmospheric synthwave and lo-fi instrumental beats when tackling complex architectural algorithms and math-heavy broadsheets.
          </p>
        </div>
      )
    },
    beyond: {
      title: "Beyond The Screen & The Next Level",
      subtitle: "Curiosity, computer science rigor, and building in public",
      content: (
        <div className="space-y-3 text-[14.5px] leading-relaxed text-[#5a5a5a] dark:text-zinc-300">
          <p>
            While I love the rapid shipping speed of self-taught engineering, I never stop there. Enrolling at <strong className="text-black dark:text-white font-semibold">NIIT</strong> for formal software engineering was a deliberate decision to master the deep fundamentals—analyzing algorithm Big-O complexities, binary search trees, and relational database internals.
          </p>
          <p>
            Off the clock, you'll find me exploring emerging UI interactions, discussing modern web architecture on X as <a href="https://x.com/L4yiAgain" target="_blank" rel="noopener noreferrer" className="font-mono font-medium text-black dark:text-white underline">@L4yiAgain</a>, or dreaming up new product interfaces. For me, creating isn't a 9-to-5 job; it's how I explore the world.
          </p>
        </div>
      )
    }
  };

  const quickFacts = [
    { label: "Based in", val: "Lagos, Nigeria (WAT / UTC+1)", icon: MapPin },
    { label: "Music & Fuel", val: "Afrobeats, ambient lo-fi & late-night tea", icon: Headphones },
    { label: "Design Creed", val: "If it doesn't feel tactile and fluid, it's not done", icon: Heart },
    { label: "Current Deep Dive", val: "Algorithms & Enterprise Systems @ NIIT", icon: BookOpen },
    { label: "Core Superpower", val: "Translating Figma vision into rock-solid TypeScript", icon: Zap },
    { label: "Daily Driver", val: "VS Code, Figma, Chrome DevTools & Git", icon: Terminal }
  ];

  return (
    <section id="about" className="w-full flex justify-center">
      <div className="w-full max-w-[53rem] p-4 sm:p-6 flex flex-col py-[50px] sm:py-[70px] md:py-[100px] px-[1.25rem] sm:px-[1.5rem] md:px-[6rem] items-start gap-[25px]">
        
        {/* About Heading */}
        <div className="flex items-center gap-2">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold tracking-[-.03em] leading-[110%] text-black dark:text-white">
            About Me
          </h2>
          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium">
            Story & Identity
          </span>
        </div>

        {/* Narrative Paragraphs */}
        <div className="flex flex-col gap-5 sm:gap-6 w-full">
          
          <p className="text-[15px] sm:text-[16px] font-normal tracking-[.01em] leading-[1.6em] text-[#5a5a5a] dark:text-zinc-300">
            I'm <strong className="font-semibold text-black dark:text-white">{profileData.name}</strong>, a Nigerian frontend engineer, product designer, and software builder based in Lagos. Across the developer community and on X, I build and share as <a href="https://x.com/L4yiAgain" target="_blank" rel="noopener noreferrer" className="font-mono font-medium text-black dark:text-white underline decoration-zinc-400 hover:decoration-black dark:hover:decoration-white transition-colors">@L4yi</a>.
          </p>

          <p className="text-[15px] sm:text-[16px] font-normal tracking-[.01em] leading-[1.6em] text-[#5a5a5a] dark:text-zinc-400">
            My journey began with relentless curiosity—staying up through the night teaching myself to code, turning raw thoughts into interactive prototypes, and exploring the delicate balance where visual design meets engineering precision. I don't just consume design files; I shape them in Figma, refine the user flows, and translate them into high-performance, accessible React and TypeScript systems.
          </p>

          <p className="text-[15px] sm:text-[16px] font-normal tracking-[.01em] leading-[1.6em] text-[#5a5a5a] dark:text-zinc-400">
            I believe software is only as good as the real human friction it solves. At <strong className="font-semibold text-black dark:text-white">New State High School</strong>, I replaced stacks of paper grading books with an automated broadsheet engine computing grades and printing verified report cards for over 1,000 students. For <strong className="font-semibold text-black dark:text-white">MOB Eki Ventures</strong> in Mushin, Lagos, I engineered a high-conversion commercial storefront. And for <strong className="font-semibold text-black dark:text-white">InStock Mobile</strong>, I built an offline-first inventory Android application with local caching and barcode scanning because African warehouse operations can't stop when the network drops.
          </p>

          <p className="text-[15px] sm:text-[16px] font-normal tracking-[.01em] leading-[1.6em] text-[#5a5a5a] dark:text-zinc-400">
            Currently, I'm actively engineering <strong className="font-semibold text-black dark:text-white">Holdr</strong> (a multi-role marketplace ecosystem for producers and creators) while deepening my foundational computer science mastery through professional software engineering coursework at <strong className="font-semibold text-black dark:text-white">NIIT</strong>, focusing on advanced algorithms, enterprise architectures, and distributed databases.
          </p>

          {/* Floating Polaroid Image Stack Animation (Responsive with User's Real Photos) */}
          <div className="relative w-full h-[220px] sm:h-[260px] my-2 sm:my-4 group select-none flex justify-center overflow-visible">
            
            {/* Left Polaroid Card */}
            <div className="absolute top-0 left-[2%] xs:left-[8%] sm:left-[18%] bg-white dark:bg-[#1a1a1e] p-1.5 sm:px-2 sm:pt-2 -rotate-12 shadow-xl rounded-xl overflow-hidden transition-all duration-500 group-hover:-rotate-12 group-hover:-translate-x-3 sm:group-hover:-translate-x-5 group-hover:scale-105 border border-black/[0.08] dark:border-white/10 z-10">
              <div className="w-[130px] h-[130px] xs:w-[155px] xs:h-[155px] sm:w-[190px] sm:h-[190px] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <img
                  alt="Layi — Fit & Focus"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="object-cover w-full h-full"
                  src="/images/layi-fit.jpg"
                />
              </div>
              <span className="text-[11px] sm:text-xs flex justify-center py-1.5 sm:py-2 italic text-black dark:text-zinc-200 w-full text-center font-mono font-medium">
                @L4yi
              </span>
            </div>

            {/* Right Polaroid Card */}
            <div className="absolute top-6 sm:top-8 right-[2%] xs:right-[8%] sm:right-[18%] bg-white dark:bg-[#1a1a1e] p-1.5 sm:px-2 sm:pt-2 rotate-12 shadow-xl rounded-xl overflow-hidden transition-all duration-500 group-hover:rotate-12 group-hover:translate-x-3 sm:group-hover:translate-x-5 group-hover:scale-105 border border-black/[0.08] dark:border-white/10 z-20">
              <div className="w-[130px] h-[130px] xs:w-[155px] xs:h-[155px] sm:w-[190px] sm:h-[190px] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <img
                  alt="Layi — Studio Mirror"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="object-cover w-full h-full"
                  src="/images/layi-mirror.jpg"
                />
              </div>
              <span className="text-[11px] sm:text-xs flex justify-center py-1.5 sm:py-2 italic text-black dark:text-zinc-200 w-full text-center font-mono font-medium">
                @L4yiAgain
              </span>
            </div>

          </div>

          {/* ===================== A DEEPER LOOK INTO WHO I AM ===================== */}
          <div className="w-full mt-4 sm:mt-6 rounded-[22px] bg-zinc-50 dark:bg-[#141417] border border-black/[0.06] dark:border-white/10 p-5 sm:p-7 md:p-8 transition-all">
            
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 pb-4 border-b border-black/[0.06] dark:border-white/10">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-0.5">
                  Behind The Screen
                </span>
                <h3 className="text-[20px] sm:text-[22px] font-bold text-black dark:text-white tracking-tight">
                  A Deeper Look Into Who I Am
                </h3>
              </div>
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                Personal Ethos & Journey
              </span>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 mb-5">
              <button
                onClick={() => setActiveTab('origin')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'origin'
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                    : 'bg-white dark:bg-[#1f1f24] text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white border border-black/[0.06] dark:border-white/10'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Roots & Hustle</span>
              </button>

              <button
                onClick={() => setActiveTab('founder')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'founder'
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                    : 'bg-white dark:bg-[#1f1f24] text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white border border-black/[0.06] dark:border-white/10'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Founder Mindset</span>
              </button>

              <button
                onClick={() => setActiveTab('flow')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'flow'
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                    : 'bg-white dark:bg-[#1f1f24] text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white border border-black/[0.06] dark:border-white/10'
                }`}
              >
                <Headphones className="w-3.5 h-3.5" />
                <span>Flow State & Music</span>
              </button>

              <button
                onClick={() => setActiveTab('beyond')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'beyond'
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                    : 'bg-white dark:bg-[#1f1f24] text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white border border-black/[0.06] dark:border-white/10'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Beyond Code</span>
              </button>
            </div>

            {/* Tab Body */}
            <div className="bg-white dark:bg-[#1b1b1f] p-4 sm:p-6 rounded-2xl border border-black/[0.06] dark:border-white/10 shadow-sm min-h-[140px] transition-all">
              <h4 className="text-[17px] font-bold text-black dark:text-white mb-1">
                {personalTabs[activeTab].title}
              </h4>
              <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-3">
                {personalTabs[activeTab].subtitle}
              </p>
              {personalTabs[activeTab].content}
            </div>

            {/* Quick Facts / Personal DNA Grid */}
            <div className="mt-6 pt-5 border-t border-black/[0.06] dark:border-white/10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white block mb-3">
                Personal DNA & Preferences
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {quickFacts.map((fact, idx) => {
                  const Icon = fact.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-white dark:bg-[#1b1b1f] border border-black/[0.04] dark:border-white/10 flex items-start gap-2.5"
                    >
                      <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 text-black dark:text-white">
                        <Icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10.5px] font-mono text-zinc-400 dark:text-zinc-500 uppercase">
                          {fact.label}
                        </span>
                        <span className="text-xs font-medium text-black dark:text-white leading-snug">
                          {fact.val}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Core Engineering Principles Bento Grid */}
          <div className="w-full mt-4 sm:mt-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white">
                How I Build & Think
              </span>
              <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                Guiding Principles
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {principles.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-[#16161a] border border-black/[0.06] dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-800 border border-black/[0.06] dark:border-white/10 flex items-center justify-center text-black dark:text-white shadow-sm">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {p.tag}
                      </span>
                    </div>
                    <h3 className="text-[15px] font-bold text-black dark:text-white mb-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#5a5a5a] dark:text-zinc-400 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

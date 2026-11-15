import React from 'react';
import { Layers, Smartphone, Palette, ShieldCheck } from 'lucide-react';

export const Services: React.FC = () => {
  const capabilities = [
    {
      title: "Frontend & Full-Stack Web Development",
      desc: "Building fast, accessible, responsive web products with React, TypeScript, Next.js, and Node.js. Sub-second performance and clean architecture.",
      icon: Layers
    },
    {
      title: "Mobile & Capacitor Android Systems",
      desc: "Cross-platform mobile apps with native hardware bridges, offline-first local data syncing, and touch-optimized handheld interfaces.",
      icon: Smartphone
    },
    {
      title: "UI/UX & Interactive Design Systems",
      desc: "High-fidelity Figma wireframes, pixel-perfect design translation, micro-interactions, and scalable design token systems.",
      icon: Palette
    },
    {
      title: "Cloud Deployment, RBAC & Security",
      desc: "Strict role-based access control (RBAC), JWT authentication, automated CI/CD pipelines on Firebase and Vercel, and secure API gateways.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="w-full flex justify-center px-3 sm:px-4">
      <div className="relative w-full max-w-[53rem] bg-black rounded-[20px] sm:rounded-[26px] overflow-hidden p-5 sm:p-8 md:p-12 text-white shadow-2xl my-6 sm:my-8">
        
        {/* Subtle Doodle / Radial Pattern Overlay */}
        <div className="absolute inset-0 doodle-bg opacity-20 pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold tracking-[-.03em] leading-[110%] text-white text-center w-full mb-[12px] sm:mb-[16px]">
            How Can I Help?
          </h2>
          
          <p className="text-[15px] sm:text-[18px] text-[#a4a2a2] text-center w-full mb-[30px] sm:mb-[40px]">
            Let's turn your vision into something amazing.
          </p>

          {/* 2-Column Capability Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            {capabilities.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 sm:p-6 rounded-[16px] sm:rounded-[18px] bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.07] flex flex-col justify-between"
              >
                <div>
                  <item.icon className="w-6 h-6 text-white mb-3" />
                  <h3 className="text-[18px] font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#a4a2a2] leading-[1.6em]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Discussion Link */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#a4a2a2]">
              Open for full-time engineering roles, remote contracts & startup builds.
            </span>
            <a
              href="#contact"
              className="text-xs font-semibold text-white hover:text-zinc-300 font-mono underline transition-colors"
            >
              Discuss your project →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

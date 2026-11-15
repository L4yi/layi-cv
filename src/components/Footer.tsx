import React from 'react';
import { profileData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 sm:py-12 border-t border-black/[0.06] dark:border-white/10 max-w-[53rem] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400 dark:text-zinc-500 w-full text-center sm:text-left">
      <div>
        <span>© {new Date().getFullYear()} · </span>
        <span className="text-zinc-900 dark:text-zinc-200 font-semibold">{profileData.name}</span>
        <span> · All rights reserved</span>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href={profileData.socials.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          GitHub
        </a>
        <span>·</span>
        <a 
          href={profileData.socials.twitter} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          Twitter / X
        </a>
        <span>·</span>
        <button
          onClick={scrollToTop}
          className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
};

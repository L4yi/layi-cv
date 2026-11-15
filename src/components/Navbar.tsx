import React from 'react';
import { Home, FileText, Sun, Moon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { profileData } from '../data/portfolioData';
import { GithubIcon, TwitterIcon } from './Icons';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/');
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/#contact');
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 md:top-6 left-0 right-0 w-full z-50 flex justify-center px-2 pointer-events-none">
      <nav className="pointer-events-auto liquidGlass-nav animate-nav-slide-down flex items-center justify-between sm:justify-center gap-0.5 sm:gap-1 p-1 sm:p-[6px] relative z-10 rounded-full shadow-lg max-w-[98vw] sm:max-w-none">
        
        {/* Home */}
        <div className="flex items-center">
          <a
            href="/#top"
            onClick={handleHomeClick}
            className="p-2.5 sm:p-3 md:p-[14px] hover:px-3 sm:hover:px-3.5 md:hover:px-[20px] hover:mr-0.5 md:hover:mr-1 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white relative group transition-all duration-[300ms] hover:bg-[#ededed]/50 dark:hover:bg-white/10 rounded-[12px] sm:rounded-[15px]"
            aria-label="Home"
          >
            <Home className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 transition-transform duration-200 group-hover:scale-110" />
            <span className="hidden md:block absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-xs font-mono rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
              Home
            </span>
          </a>
          <div className="h-4 sm:h-5 w-[1px] bg-zinc-200 dark:bg-white/15 mx-0.5 sm:mx-1 md:mx-2" />
        </div>

        {/* Twitter / X */}
        {profileData.socials.twitter && (
          <div className="flex items-center">
            <a
              href={profileData.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 md:p-[14px] hover:px-3 sm:hover:px-3.5 md:hover:px-[20px] hover:mr-0.5 md:hover:mr-1 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white relative group transition-all duration-[300ms] hover:bg-[#ededed]/50 dark:hover:bg-white/10 rounded-[12px] sm:rounded-[15px]"
              aria-label="Twitter / X"
            >
              <TwitterIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:scale-110" />
              <span className="hidden md:block absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-xs font-mono rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                Twitter / X
              </span>
            </a>
          </div>
        )}

        {/* GitHub */}
        <div className="flex items-center">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 md:p-[14px] hover:px-3 sm:hover:px-3.5 md:hover:px-[20px] hover:mr-0.5 md:hover:mr-1 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white relative group transition-all duration-[300ms] hover:bg-[#ededed]/50 dark:hover:bg-white/10 rounded-[12px] sm:rounded-[15px]"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 transition-transform duration-200 group-hover:scale-110" />
            <span className="hidden md:block absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-xs font-mono rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
              GitHub
            </span>
          </a>
        </div>

        {/* Resume / CV - Direct Download (Robinson Exact Behavior) */}
        <div className="flex items-center">
          <a
            href="/resume.pdf"
            download="Layi-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 md:p-[14px] hover:px-3 sm:hover:px-3.5 md:hover:px-[20px] hover:mr-0.5 md:hover:mr-1 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white relative group transition-all duration-[300ms] hover:bg-[#ededed]/50 dark:hover:bg-white/10 rounded-[12px] sm:rounded-[15px]"
            aria-label="Download Resume"
          >
            <FileText className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 transition-transform duration-200 group-hover:scale-110" />
            <span className="hidden md:block absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-xs font-mono rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
              Resume / CV
            </span>
          </a>
          <div className="h-4 sm:h-5 w-[1px] bg-zinc-200 dark:bg-white/15 mx-0.5 sm:mx-1 md:mx-2" />
        </div>

        {/* Dark Mode Button */}
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2.5 sm:p-3 md:p-[14px] hover:px-3 sm:hover:px-3.5 md:hover:px-[20px] hover:mr-0.5 md:hover:mr-1 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white relative group transition-all duration-[300ms] hover:bg-[#ededed]/50 dark:hover:bg-white/10 rounded-[12px] sm:rounded-[15px]"
            aria-label="Toggle Dark Mode"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 text-amber-400 animate-spin-slow transition-transform duration-300 group-hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 text-zinc-700 dark:text-zinc-300 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
            )}
            <span className="hidden md:block absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-xs font-mono rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>
          <div className="h-4 sm:h-5 w-[1px] bg-zinc-200 dark:bg-white/15 mx-0.5 sm:mx-1 md:mx-2" />
        </div>

        {/* Action Button: Get in touch */}
        <a
          href="/#contact"
          onClick={handleContactClick}
          className="bg-black dark:bg-white text-white dark:text-black py-2 sm:py-[10px] md:py-[12px] px-3 sm:px-4 md:px-[22px] hover:px-4 sm:hover:px-5 md:hover:px-[28px] rounded-[12px] sm:rounded-[14px] text-xs sm:text-sm font-medium hover:opacity-90 duration-[300ms] transition-all ml-0.5 sm:ml-1 shadow-sm shrink-0"
        >
          <span className="hidden sm:inline">Get in touch</span>
          <span className="sm:hidden">Contact</span>
        </a>

      </nav>
    </header>
  );
};
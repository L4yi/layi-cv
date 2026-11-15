import React, { useState, useEffect } from 'react';
import { profileData } from '../data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const titles = profileData.titles || [
    "Frontend Engineer",
    "Product Designer",
    "React & TypeScript Architect",
    "Founder of Holdr (In Progress)",
    "Systems Builder"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);

      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setIsExiting(false);
      }, 350);

      return () => clearTimeout(timeout);
    }, 2800);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="top" className="w-full flex justify-center">
      <div className="w-full max-w-[53rem] p-4 sm:p-6 flex flex-col pt-[105px] sm:pt-[135px] md:pt-[170px] pb-[1.5rem] md:pb-[3rem] px-[1.25rem] sm:px-[1.5rem] md:px-[6rem] items-start gap-[20px] sm:gap-[25px]">
        
        {/* Profile Picture with Entrance Animation */}
        <div 
          className="animate-blur-up" 
          style={{ animationDelay: '0.1s' }}
        >
          <img
            alt={profileData.name}
            width="100"
            height="100"
            className="w-[84px] h-[84px] sm:w-[100px] sm:h-[100px] rounded-full object-cover object-center aspect-square shadow-md border-2 border-white dark:border-zinc-800 ring-1 ring-black/[0.08] dark:ring-white/10"
            src="/images/layi-mirror.jpg"
          />
        </div>

        {/* Text Content with Dynamic Animated Multi-Role Title */}
        <div className="text-start w-full">
          
          {/* Greeting & Name */}
          <h1 className="text-[28px] sm:text-[38px] md:text-[44px] font-bold tracking-[-.03em] leading-[110%] text-black dark:text-white text-start no-underline normal-case mb-2 md:mb-2">
            <span className="inline-block mr-[0.25em] animate-blur-up" style={{ animationDelay: '0.2s' }}>
              Hey,
            </span>
            <span className="inline-block mr-[0.25em] animate-blur-up" style={{ animationDelay: '0.3s' }}>
              I'm
            </span>
            <span className="inline-block mr-[0.25em] animate-blur-up" style={{ animationDelay: '0.4s' }}>
              Layi.
            </span>
          </h1>

          {/* Dynamic Animated Role Rotator */}
          <div className="h-[34px] sm:h-[46px] md:h-[54px] flex items-center overflow-hidden">
            <h2
              key={currentIndex}
              className={`text-[21px] xs:text-[24px] sm:text-[32px] md:text-[42px] font-bold tracking-[-.03em] leading-[110%] text-black dark:text-white text-start no-underline normal-case whitespace-nowrap overflow-hidden text-ellipsis ${
                isExiting ? 'animate-title-out' : 'animate-title-in'
              }`}
            >
              {titles[currentIndex]}
            </h2>
          </div>

          {/* Subtitle & Mission Statement */}
          <p 
            className="text-[15px] sm:text-[16px] text-[#5a5a5a] dark:text-zinc-400 text-start mt-[16px] sm:mt-[20px] no-underline normal-case animate-blur-up leading-[1.6em]" 
            style={{ animationDelay: '0.8s' }}
          >
            Creating innovative solutions and captivating designs.<br />
            Founder by day, visionary creator by night.
          </p>

          {/* Subtle Role Indicator Dots */}
          <div className="flex items-center gap-1.5 mt-4">
            {titles.map((title, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsExiting(true);
                  setTimeout(() => {
                    setCurrentIndex(idx);
                    setIsExiting(false);
                  }, 200);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-6 bg-black dark:bg-white' 
                    : 'w-1.5 bg-black/15 dark:bg-white/20 hover:bg-black/30 dark:hover:bg-white/40'
                }`}
                title={title}
                aria-label={`Switch to ${title}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
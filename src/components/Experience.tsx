import React from 'react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full flex justify-center">
      <div className="w-full max-w-[53rem] p-4 sm:p-6 flex flex-col py-[40px] sm:py-[50px] px-[1.25rem] sm:px-[1.5rem] md:px-[6rem] items-start gap-[20px] sm:gap-[25px]">
        
        {/* Subtle Divider */}
        <div className="w-full h-[1px] bg-[#E5E5E5] dark:bg-white/10 mb-[10px]" />

        {/* Section Heading */}
        <h2 className="text-[22px] font-bold tracking-[-.03em] leading-[110%] text-black dark:text-white mb-[30px]">
          Work Experience
        </h2>

        {/* Rows (Robinson exact replica) */}
        <div className="flex flex-col gap-[30px] w-full">
          {experienceData.map((exp) => (
            <div 
              key={exp.id}
              className="flex flex-col md:flex-row gap-[12px] md:gap-0 md:items-center md:justify-between transition-colors hover:text-black dark:hover:text-white"
            >
              {/* Period */}
              <div className="text-[#8F8F8F] dark:text-zinc-500 font-medium text-[13px] font-mono">
                {exp.period}
              </div>

              {/* Role + Company Tag Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="text-[16px] text-black dark:text-white md:text-[#5a5a5a] dark:md:text-zinc-300 font-medium">
                  {exp.role} at
                </div>
                
                <div className="flex items-center gap-1.5 bg-[#EEF4FF] dark:bg-blue-950/60 text-[#3B82F6] dark:text-blue-400 px-3 py-1 rounded-md text-[14px] font-medium border border-transparent dark:border-blue-900/30">
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6] flex items-center justify-center shrink-0">
                    <svg width="5" height="5" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 0L9.33013 2.5V7.5L5 10L0.669873 7.5V2.5L5 0Z" fill="white" />
                    </svg>
                  </div>
                  <span>{exp.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

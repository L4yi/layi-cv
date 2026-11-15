import React, { useState } from 'react';
import { ChevronRight, ExternalLink, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { TechStackMarquee } from './TechStackMarquee';
import { ProjectSlideshow } from './ProjectSlideshow';
import { InStockDownloadModal } from './InStockDownloadModal';

export const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const navigate = useNavigate();

  // Show first 4 by default, expand to all 8 on View All
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);

  const handleCardClick = (project: Project) => {
    navigate(`/projects/${project.id}`);
  };

  const handleActionClick = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    if (project.id === 'instock-mobile') {
      setIsDownloadModalOpen(true);
      return;
    }
    const dest = project.liveUrl || project.githubUrl;
    if (dest) {
      window.open(dest, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="works" className="w-full flex justify-center">
      <div className="w-full max-w-[53rem] flex flex-col pt-[30px] pb-[70px] px-[1.5rem] items-center gap-[20px]">
        
        {/* Animated Horizontal Tech Stack & Skills Marquee */}
        <TechStackMarquee />

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] text-center font-bold tracking-[-.03em] leading-[110%] text-black dark:text-white">
            Here's What I've Been Up To.
          </h2>
        </div>

        {/* 1. Horizontal Slideshow Carousel for Featured Projects */}
        <ProjectSlideshow 
          projects={projectsData} 
          onOpenInStockModal={() => setIsDownloadModalOpen(true)}
        />

        {/* Subtle Section Subheader for the Stack */}
        <div className="w-full flex items-center justify-between pt-4 pb-2 border-t border-black/[0.06] dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white">
              Complete Project Stack
            </span>
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
              ({projectsData.length} Verified Repositories & Deployments)
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 hidden sm:inline">
            Click any card to read specifications
          </span>
        </div>

        {/* 2. Responsive 2-Column Stacked Project Grid */}
        <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {displayedProjects.map((project) => {
            const isInStock = project.id === 'instock-mobile';

            return (
              <div
                key={project.id}
                onClick={() => handleCardClick(project)}
                className="w-full rounded-[20px] overflow-hidden border-[1.5px] border-[#0000001a] dark:border-white/10 relative transition-all bg-white dark:bg-[#151518] robinson-card cursor-pointer group"
                style={{ boxShadow: 'inset 0px 3px 0px 0px rgb(255, 255, 255)' }}
              >
                {/* Image Frame with Smooth 1000ms Zoom */}
                <div className="px-3.5 pt-3.5 pb-3 sm:px-5 sm:pt-5 sm:pb-4 rounded-[20px]">
                  <div className="relative w-full h-[180px] sm:h-[200px] border border-[#00000015] dark:border-white/10 rounded-[16px] sm:rounded-[20px] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <img
                      alt={project.title}
                      loading="lazy"
                      width="800"
                      height="600"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      src={project.image}
                    />
                    {isInStock ? (
                      <button
                        onClick={(e) => handleActionClick(e, project)}
                        className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full border border-black/10 shadow-sm transition-all hover:scale-110"
                        title="Download InStock APK"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </button>
                    ) : project.liveUrl ? (
                      <button
                        onClick={(e) => handleActionClick(e, project)}
                        className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md hover:bg-white dark:hover:bg-zinc-800 text-black dark:text-white p-2 rounded-full border border-black/10 dark:border-white/10 shadow-sm transition-all hover:scale-110"
                        title="Launch live site in new tab"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    ) : null}
                  </div>
                </div>

                {/* Card Content Block */}
                <div className="px-4 pb-5 sm:px-7 sm:pb-7">
                  <h3 className="text-[19px] sm:text-[22px] font-semibold mb-2 text-black dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors leading-[120%]">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#5a5a5a] dark:text-zinc-400 text-[14px] sm:text-[15px] line-clamp-2 leading-[1.5em] mb-4">
                    {project.description}
                  </p>

                  {/* View Details Button with Robinson's exact hover transition */}
                  <div className="flex items-center justify-between mt-3">
                    <button
                      onClick={() => handleCardClick(project)}
                      className="bg-[#f2f2f2] dark:bg-white/10 hover:bg-[#e5e5e5] dark:hover:bg-white/15 flex items-center rounded-[12px] sm:rounded-[14px] px-3.5 sm:px-[20px] py-2 sm:py-[12px] text-[13.5px] sm:text-[15px] font-normal text-black dark:text-white text-start no-underline transition-all duration-300"
                    >
                      <span className="flex items-center font-medium transition-all duration-300">
                        View Details
                      </span>
                      <ChevronRight className="ml-1 sm:ml-1.5 w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-1 transition-transform text-black dark:text-white shrink-0" />
                    </button>

                    {isInStock ? (
                      <button
                        onClick={(e) => handleActionClick(e, project)}
                        className="text-xs font-mono text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors px-2 py-1 bg-emerald-50 dark:bg-emerald-950/60 rounded-lg border border-emerald-200/60 dark:border-emerald-800/40"
                      >
                        <Download className="w-3 h-3" />
                        <span>Download APK</span>
                      </button>
                    ) : project.liveUrl ? (
                      <button
                        onClick={(e) => handleActionClick(e, project)}
                        className="text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors px-2 py-1"
                      >
                        <span>Live App</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    ) : null}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All / Toggle Button */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 mx-auto bg-[#000] dark:bg-white hover:bg-[#121212] dark:hover:bg-zinc-200 flex items-center rounded-[14px] px-[24px] py-[14px] text-[16px] font-normal text-white dark:text-black text-start no-underline transition-all duration-500 group shadow-md"
        >
          <span className="flex items-center group-hover:pr-2 font-medium text-[16px] transition-all duration-300">
            {showAll ? 'Show Less' : 'View All Projects'}
          </span>
          <ChevronRight className={`ml-2 w-5 h-5 transition-transform ${showAll ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
        </button>

      </div>

      {/* InStock Offline APK Download Modal */}
      <InStockDownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </section>
  );
};
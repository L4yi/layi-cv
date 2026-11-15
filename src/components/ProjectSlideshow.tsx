import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../types';

interface ProjectSlideshowProps {
  projects: Project[];
  onOpenInStockModal?: () => void;
}

export const ProjectSlideshow: React.FC<ProjectSlideshowProps> = ({ projects, onOpenInStockModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const featured = projects.slice(0, 4);
  const active = featured[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
  };

  // Touch Swipe for mobile gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard arrow listener when in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!active) return null;

  const isInStock = active.id === 'instock-mobile';

  return (
    <div className="w-full mb-12">
      
      {/* Top Slider Navigation Bar */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
            Featured Highlights
          </span>
          <span className="text-xs font-mono text-zinc-300">•</span>
          <span className="text-xs font-mono text-black font-semibold">
            0{currentIndex + 1} / 0{featured.length}
          </span>
        </div>

        {/* Prev / Next Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full bg-[#f2f2f2] dark:bg-[#202024] hover:bg-[#e5e5e5] dark:hover:bg-[#28282e] text-black dark:text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full bg-[#f2f2f2] dark:bg-[#202024] hover:bg-[#e5e5e5] dark:hover:bg-[#28282e] text-black dark:text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Slide Card */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-full rounded-[22px] overflow-hidden border-[1.5px] border-[#0000001a] dark:border-white/10 bg-white dark:bg-[#151518] robinson-card transition-all"
        style={{ boxShadow: 'inset 0px 3px 0px 0px rgb(255, 255, 255)' }}
      >
        <div className="flex flex-col md:flex-row">
          
          {/* Big Project Image Frame */}
          <div 
            className="w-full md:w-3/5 p-3 sm:p-5 group cursor-pointer"
            onClick={() => navigate(`/projects/${active.id}`)}
          >
            <div className="relative w-full h-[190px] xs:h-[230px] sm:h-[280px] md:h-[320px] border border-[#00000015] dark:border-white/10 rounded-[18px] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-medium text-black dark:text-white border border-black/[0.08] dark:border-white/10 shadow-sm">
                {active.metrics || active.category.toUpperCase()}
              </div>
            </div>
          </div>

          {/* Slide Details Content */}
          <div className="w-full md:w-2/5 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#EEF4FF] dark:bg-blue-950/60 text-[#3B82F6] dark:text-blue-400 font-medium uppercase">
                  {active.category}
                </span>
                {isInStock && (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-semibold">
                    Offline App
                  </span>
                )}
              </div>

              <h3 
                onClick={() => navigate(`/projects/${active.id}`)}
                className="text-[19px] sm:text-[22px] md:text-[26px] font-bold text-black dark:text-white tracking-tight cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors leading-[120%] mb-2 sm:mb-3"
              >
                {active.title}
              </h3>

              <p className="text-[14px] sm:text-[15px] text-[#5a5a5a] dark:text-zinc-400 line-clamp-3 leading-relaxed mb-3 sm:mb-4">
                {active.description}
              </p>

              {/* Technologies Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-6">
                {active.tags.slice(0, 4).map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10.5px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#fafafa] dark:bg-[#1d1d22] border border-black/[0.06] dark:border-white/10 text-zinc-600 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
              <button
                onClick={() => navigate(`/projects/${active.id}`)}
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-[#1f1f1f] dark:hover:bg-zinc-200 flex items-center justify-center rounded-[12px] sm:rounded-[14px] px-4 sm:px-5 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-medium transition-all duration-300 group shadow-sm flex-1 sm:flex-initial"
              >
                <span>View Details</span>
                <ArrowRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* InStock Offline Download Trigger */}
              {isInStock && onOpenInStockModal ? (
                <button
                  onClick={onOpenInStockModal}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center rounded-[12px] sm:rounded-[14px] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-medium transition-all duration-300 shadow-sm flex-1 sm:flex-initial"
                  title="Download offline Android app"
                >
                  <Download className="mr-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Download APK</span>
                </button>
              ) : active.liveUrl ? (
                <a
                  href={active.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f2f2f2] dark:bg-white/10 hover:bg-[#e5e5e5] dark:hover:bg-white/15 text-black dark:text-white flex items-center justify-center rounded-[12px] sm:rounded-[14px] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-medium transition-all duration-300 group flex-1 sm:flex-initial"
                  title="Launch live site"
                >
                  <span>Live Site</span>
                  <ExternalLink className="ml-1.5 w-3 sm:w-3.5 h-3 sm:h-3.5 text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </a>
              ) : null}
            </div>
          </div>

        </div>

        {/* Progress Indicator Dots */}
        <div className="p-3 bg-zinc-50 dark:bg-[#121215] border-t border-black/[0.04] dark:border-white/10 flex items-center justify-center gap-2">
          {featured.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-black dark:bg-white' : 'w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600'
              }`}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </div>
  );
};
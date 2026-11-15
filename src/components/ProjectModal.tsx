import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Layers } from 'lucide-react';
import { Project } from '../types';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden text-zinc-900 flex flex-col max-h-[90vh] border border-black/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-zinc-50 border-b border-black/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-200 text-zinc-800 font-semibold uppercase">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-400">~/spec</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-zinc-200 text-zinc-500 hover:text-black transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Title & Tagline */}
          <div>
            <h3 className="text-2xl font-extrabold text-black tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-zinc-500 mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Project Image */}
          <div className="relative h-60 w-full overflow-hidden rounded-xl border border-black/[0.06] bg-zinc-100">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
              System Overview
            </h4>
            <p className="text-sm text-zinc-700 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-600" />
                Technical Architecture
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-xs sm:text-sm text-zinc-600 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-zinc-500" />
              Technologies & Infrastructure
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-100 text-zinc-700 border border-black/[0.04]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-zinc-50 border-t border-black/[0.06] flex items-center justify-end gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-soft px-4 py-2 text-xs font-semibold flex items-center gap-1.5 text-zinc-700 hover:text-black"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid-black px-4 py-2 text-xs font-semibold flex items-center gap-1.5 shadow-sm"
            >
              <span>Visit Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

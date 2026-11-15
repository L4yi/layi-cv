import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2, Calendar, FolderGit2, Building2, Activity, Download } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { InStockDownloadModal } from '../components/InStockDownloadModal';

export const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[currentIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [id]);

  if (!project) {
    return (
      <main className="flex-grow flex flex-col items-center justify-center p-6 pt-36 pb-20">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="text-[#5a5a5a] mb-6">The project you are looking for does not exist or has been moved.</p>
        <Link
          to="/"
          className="bg-black text-white px-5 py-2.5 rounded-[14px] text-sm font-medium hover:bg-zinc-800 transition-colors"
        >
          ← Return to Portfolio
        </Link>
      </main>
    );
  }

  const isInStock = project.id === 'instock-mobile';
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  const clientMap: Record<string, string> = {
    'mob-eki-ventures': 'MOB Eki Ventures',
    'new-state-portal': 'New State High School',
    'tradeflow-erp': 'Independent Enterprise',
    'instock-mobile': 'Internal Product',
    'nova-research': 'Research Initiative',
    'belarjayuk-portal': 'Belarjayuk Client',
    'mine-invest': 'MineInvest Platform',
    'e-commerce-site': 'Open Source Practice'
  };

  const dateMap: Record<string, string> = {
    'mob-eki-ventures': '2026 — Present',
    'new-state-portal': '2024 — Present',
    'tradeflow-erp': '2024',
    'instock-mobile': '2024',
    'nova-research': '2024',
    'belarjayuk-portal': '2023',
    'mine-invest': '2023',
    'e-commerce-site': '2022'
  };

  const typeMap: Record<string, string> = {
    'mob-eki-ventures': 'Commercial E-Commerce',
    'new-state-portal': 'Secondary School Portal',
    'tradeflow-erp': 'Enterprise ERP Suite',
    'instock-mobile': 'Cross-Platform Mobile App',
    'nova-research': 'Academic Discovery Engine',
    'belarjayuk-portal': 'Authentication Engine',
    'mine-invest': 'Investment Ledger Suite',
    'e-commerce-site': 'Responsive Web Store'
  };

  const statusMap: Record<string, string> = {
    'mob-eki-ventures': 'Production Live',
    'new-state-portal': 'Production Live',
    'tradeflow-erp': 'Production Live',
    'instock-mobile': 'Android Native Bridge (Offline)',
    'nova-research': 'Active Repository',
    'belarjayuk-portal': 'Verified Prototype',
    'mine-invest': 'Full-Stack System',
    'e-commerce-site': 'Public Template'
  };

  return (
    <main className="flex-grow flex justify-center w-full">
      <div className="w-full max-w-[53rem] px-[1.25rem] sm:px-[1.5rem] md:px-[4rem] pt-[95px] sm:pt-[115px] md:pt-[145px] pb-[60px] sm:pb-[70px] flex flex-col items-start">
        
        {/* Breadcrumb Back Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white mb-6 px-3 py-1.5 rounded-lg hover:bg-zinc-200/60 dark:hover:bg-white/10 transition-all duration-200"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </button>

        {/* Header Block */}
        <div className="w-full text-start mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#EEF4FF] dark:bg-blue-950/60 text-[#3B82F6] dark:text-blue-400 font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            {isInStock && (
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-semibold uppercase tracking-wider">
                Offline Android App
              </span>
            )}
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">~/spec</span>
          </div>

          <h1 className="text-[26px] sm:text-[34px] md:text-[44px] font-bold tracking-[-.03em] leading-[115%] text-black dark:text-white mb-3">
            {project.title}
          </h1>

          <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[#5a5a5a] dark:text-zinc-400 leading-relaxed max-w-[750px]">
            {project.tagline || project.description}
          </p>
        </div>

        {/* Full-Width Hero Preview Image */}
        <div className="w-full h-[210px] sm:h-[300px] md:h-[420px] rounded-[18px] sm:rounded-[22px] overflow-hidden border border-black/10 dark:border-white/10 shadow-sm bg-zinc-100 dark:bg-zinc-800 my-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Robinson Exact Specs Card Container */}
        <div className="w-full gap-6 bg-[#fafafa] dark:bg-[#151518] p-4 sm:p-7 md:p-10 rounded-[18px] sm:rounded-[22px] border-[1.5px] border-[#f0f0f0] dark:border-white/10 my-6 shadow-sm">
          
          {/* System Overview / Description */}
          <div className="prose max-w-none">
            <h3 className="text-[16px] font-bold mb-2 text-black dark:text-white uppercase tracking-wider font-mono text-xs">
              Description
            </h3>
            <p className="text-[16px] text-[#5a5a5a] dark:text-zinc-400 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Subtle Divider */}
          <div className="flex w-full h-[1px] bg-[#E5E5E5] dark:bg-white/10 my-[25px]" />

          {/* Technologies: Robinson's exact green pills */}
          <div>
            <h3 className="text-[16px] font-bold mb-3 text-black dark:text-white uppercase tracking-wider font-mono text-xs">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-[#e1f9dc] dark:bg-emerald-950/70 text-[#178d00] dark:text-emerald-400 px-3.5 py-1 rounded-full text-[13px] font-medium font-mono border border-transparent dark:border-emerald-800/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Subtle Divider */}
          <div className="flex w-full h-[1px] bg-[#E5E5E5] dark:bg-white/10 my-[25px]" />

          {/* Metadata Grid (Date, Type, Client, Status) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-[13px] font-bold mb-1 text-black dark:text-white font-mono flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                <span>Date</span>
              </h4>
              <p className="text-[14px] text-[#5a5a5a] dark:text-zinc-400">
                {dateMap[project.id] || '2024'}
              </p>
            </div>

            <div>
              <h4 className="text-[13px] font-bold mb-1 text-black dark:text-white font-mono flex items-center gap-1.5">
                <FolderGit2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>Type</span>
              </h4>
              <p className="text-[14px] text-[#5a5a5a] dark:text-zinc-400">
                {typeMap[project.id] || project.category}
              </p>
            </div>

            <div>
              <h4 className="text-[13px] font-bold mb-1 text-black dark:text-white font-mono flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>Client / Org</span>
              </h4>
              <p className="text-[14px] text-[#5a5a5a] dark:text-zinc-400">
                {clientMap[project.id] || 'L4yi Project'}
              </p>
            </div>

            <div>
              <h4 className="text-[13px] font-bold mb-1 text-black dark:text-white font-mono flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-zinc-400" />
                <span>Status</span>
              </h4>
              <p className="text-[14px] text-emerald-700 dark:text-emerald-400 font-medium">
                {statusMap[project.id] || 'Active'}
              </p>
            </div>
          </div>

          {/* Technical Highlights / Architecture Checklist */}
          {project.highlights && project.highlights.length > 0 && (
            <>
              <div className="flex w-full h-[1px] bg-[#E5E5E5] dark:bg-white/10 my-[25px]" />
              <div>
                <h3 className="text-[16px] font-bold mb-3 text-black dark:text-white uppercase tracking-wider font-mono text-xs">
                  Key Architectural Implementations
                </h3>
                <ul className="space-y-2.5">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[14px] text-[#5a5a5a] dark:text-zinc-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

        </div>

        {/* Bottom Action Bar (Robinson Replica + InStock Download Trigger) */}
        <div className="w-full flex flex-col sm:flex-row gap-4 justify-between items-center my-6">
          
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {/* If InStock, show Download APK popup trigger */}
            {isInStock && (
              <button
                onClick={() => setIsDownloadModalOpen(true)}
                className="w-full sm:w-auto bg-emerald-600 text-white flex items-center justify-center gap-2 px-6 py-3.5 rounded-[14px] hover:bg-emerald-700 transition-all duration-300 font-medium text-[15px] shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Download Android APK (18.4 MB)</span>
              </button>
            )}

            {/* Primary Action: Visit Project Live or GitHub */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className={`w-full sm:w-auto ${isInStock ? 'bg-[#f2f2f2] dark:bg-white/10 text-black dark:text-white hover:bg-[#e5e5e5] dark:hover:bg-white/15' : 'bg-black dark:bg-white text-white dark:text-black hover:bg-[#121212] dark:hover:bg-zinc-200'} flex items-center justify-center gap-2 px-6 py-3.5 rounded-[14px] transition-all duration-300 font-medium text-[15px] shadow-sm hover:scale-[1.02] active:scale-[0.98]`}>
                  <span>{isInStock ? 'View Repository' : 'Visit Project'}</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </a>
            )}
          </div>

          {/* Cross-Project Navigation: Previous / Next */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => navigate(`/projects/${prevProject.id}`)}
              className="flex items-center gap-1.5 bg-[#f2f2f2] dark:bg-[#1f1f23] hover:bg-[#e5e5e5] dark:hover:bg-[#27272c] px-4 py-3 rounded-[14px] transition-all duration-300 text-sm font-medium text-black dark:text-white"
              title={prevProject.title}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </button>

            <button
              onClick={() => navigate(`/projects/${nextProject.id}`)}
              className="flex items-center gap-1.5 bg-[#f2f2f2] dark:bg-[#1f1f23] hover:bg-[#e5e5e5] dark:hover:bg-[#27272c] px-4 py-3 rounded-[14px] transition-all duration-300 text-sm font-medium text-black dark:text-white"
              title={nextProject.title}
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* InStock Download Modal */}
      <InStockDownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </main>
  );
};
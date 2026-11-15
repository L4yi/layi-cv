import React, { useEffect } from 'react';
import { X, Printer, MapPin, Mail, Phone, Globe, Award, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { profileData, skillsData, experienceData, educationData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const values = [
    "Think deep before building",
    "Make it work and make it beautiful",
    "Fail fast, learn faster",
    "Design with empathy. Code with clarity."
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden text-zinc-900 flex flex-col max-h-[90vh] border border-black/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 bg-zinc-50 border-b border-black/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
            <span>CURRICULUM VITAE</span>
            <span>•</span>
            <span className="text-black font-bold">{profileData.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="btn-solid-black px-3.5 py-1.5 rounded-lg text-white font-semibold text-xs font-mono flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-zinc-200 text-zinc-500 hover:text-black transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Printable View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans">
          
          {/* Header */}
          <div className="border-b border-black/[0.06] pb-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight uppercase">
              {profileData.name}
            </h2>
            <p className="text-sm font-semibold text-blue-600 mt-1 font-mono">
              {profileData.role}
            </p>
            
            <div className="flex flex-wrap gap-y-1.5 gap-x-5 mt-4 text-xs text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                {profileData.location}
              </span>
              {profileData.phone && (
                <a href={`tel:${profileData.phone}`} className="flex items-center gap-1.5 hover:text-black">
                  <Phone className="w-3.5 h-3.5 text-zinc-400" />
                  {profileData.phone}
                </a>
              )}
              <a href={`mailto:${profileData.email}`} className="flex items-center gap-1.5 hover:text-black">
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                {profileData.email}
              </a>
              <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-black">
                <Globe className="w-3.5 h-3.5 text-zinc-400" />
                github.com/L4yi
              </a>
            </div>
          </div>

          {/* Profile Statement */}
          <div>
            <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              Profile
            </h3>
            <p className="text-sm text-zinc-700 leading-relaxed">
              {profileData.detailedBio}
            </p>
          </div>

          {/* Key Skills */}
          <div>
            <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Key Skills & Methodologies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillsData.map((cat, i) => (
                <div key={i} className="p-4 rounded-xl bg-zinc-50 border border-black/[0.04]">
                  <span className="font-bold text-zinc-900 block mb-2 font-mono">{cat.title}</span>
                  <ul className="space-y-1 text-zinc-600">
                    {cat.skills.map((s, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-blue-600" />
                        <span>{s.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              Experience
            </h3>
            <div className="space-y-5">
              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-1.5 p-4 rounded-xl bg-zinc-50 border border-black/[0.04]">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="font-bold text-sm text-black">
                      {exp.role} <span className="text-blue-600 font-medium">@ {exp.company}</span>
                    </span>
                    <span className="text-xs font-mono text-zinc-500">{exp.period}</span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">{exp.description}</p>
                  {exp.highlights && (
                    <ul className="list-disc list-inside text-xs text-zinc-600 space-y-1 pl-1 pt-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-2.5">
              Education
            </h3>
            {educationData.map((edu, i) => (
              <div key={i} className="text-xs space-y-1 p-4 rounded-xl bg-zinc-50 border border-black/[0.04]">
                <div className="flex justify-between font-bold text-black">
                  <span>{edu.degree}</span>
                  <span className="font-mono text-zinc-500">{edu.period}</span>
                </div>
                <div className="text-zinc-600">{edu.institution} - {edu.location}</div>
                {edu.details && <p className="text-zinc-500 pt-1 leading-relaxed">{edu.details}</p>}
              </div>
            ))}
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-blue-600" />
              Core Engineering Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {values.map((v, vIdx) => (
                <div key={vIdx} className="p-3 rounded-lg bg-zinc-50 border border-black/[0.04] text-xs text-zinc-700 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export interface Profile {
  name: string;
  role: string;
  titles: string[];
  headline: string;
  bio: string;
  detailedBio: string;
  location: string;
  email: string;
  phone?: string;
  status: {
    available: boolean;
    text: string;
  };
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    discord?: string;
  };
  stats: {
    yearsExperience: string;
    projectsCompleted: string;
    contributions: string;
    satisfaction: string;
  };
}

export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'ai' | 'systems' | 'mobile';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  tags: string[];
  featured: boolean;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    experience: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'full-time' | 'contract' | 'freelance' | 'internship' | 'startup';
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string;
}

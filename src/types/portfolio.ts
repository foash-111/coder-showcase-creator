
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    linkedinUrl: string;
    githubUrl: string;
    bio: string;
    profileImageUrl: string;
  };
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
}

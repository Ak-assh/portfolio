export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  stack: string[];
  links: { name: string; url: string }[];
  size: 'large' | 'tall' | 'medium' | 'wide';
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  bullets: string[];
  stack?: string;
}

export interface BlogPost {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
}

export interface SkillCategory {
  name: string;
  skills: string;
}

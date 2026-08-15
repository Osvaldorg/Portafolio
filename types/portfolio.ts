export type Language = 'en' | 'es';

export interface StatItem {
  value: string;
  label: { en: string; es: string };
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  githubUrl: string;
  linkedinUrl: string;
  summary: {
    en: string;
    es: string;
  };
  keywords: {
    en: string[];
    es: string[];
  };
  highlights: {
    en: string[];
    es: string[];
  };
  stats: StatItem[];
}

export interface SkillCategory {
  title: { en: string; es: string };
  skills: { name: string; level?: string; iconName?: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  id: string;
  role: { en: string; es: string };
  company: string;
  type: { en: string; es: string };
  period: string;
  location: string;
  bullets: { en: string[]; es: string[] };
  techStack: string[];
  category: 'mobile' | 'qa' | 'fullstack';
}

export interface EducationItem {
  degree: { en: string; es: string };
  institution: string;
  location: string;
  period: string;
}

export interface ProjectItem {
  id: string;
  title: { en: string; es: string };
  category: 'mobile' | 'fullstack' | 'ai' | 'qa';
  period: string;
  type: { en: string; es: string };
  description: { en: string; es: string };
  highlights: { en: string[]; es: string[] };
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  gallery?: { url: string; caption_en?: string; caption_es?: string }[];
  demoType: 'mobile-app' | 'web-app' | 'ai-transcription';
}

export interface CertificationItem {
  id: string;
  title: { en: string; es: string };
  issuer: string;
  date: string;
  details: { en: string; es: string };
  badgeText: string;
  credentialUrl?: string;
  score?: string;
}

export interface TestCase {
  id: string;
  name: string;
  module: 'AUTH' | 'API' | 'DATA' | 'XSS' | 'RATE_LIMIT';
  description: { en: string; es: string };
  status: 'passed' | 'failed' | 'pending';
  executionTimeMs: number;
  assertion: string;
}

export interface SecurityMetric {
  title: { en: string; es: string };
  score: string;
  status: 'compliant' | 'warning';
  description: { en: string; es: string };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  cta: string[];
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  projects: Project[];
  social: SocialLink[];
}

export type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };



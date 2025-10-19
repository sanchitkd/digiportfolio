export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
 ] as const;

export const PERSONAL_INFO = {
  name: "Sanchit Dikshit",
  title: "Platform Engineer",
  tagline: "Crafting Digital Experiences with Code & Creativity",
  cta: ["View Projects", "Contact Me"],
} as const;

export const SKILL_CATEGORIES = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  DevOps: ["Docker", "AWS", "CI/CD", "Kubernetes"],
  Design: ["Figma", "UI/UX", "Responsive Design"],
  Other: ["Git", "Agile", "Testing"],
} as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/yourname" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yourname" },
  { label: "Twitter", href: "https://twitter.com/yourname" },
  { label: "Email", href: "mailto:you@example.com" },
] as const;



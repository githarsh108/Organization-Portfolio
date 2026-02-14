
import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EcoTrack",
    category: "Sustainability Platform",
    image: "https://picsum.photos/seed/eco/1200/800",
    link: "#"
  },
  {
    id: 2,
    title: "Nexus Finance",
    category: "Fintech Dashboard",
    image: "https://picsum.photos/seed/nexus/1200/800",
    link: "#"
  },
  {
    id: 3,
    title: "Lumina AI",
    category: "Machine Learning Interface",
    image: "https://picsum.photos/seed/lumina/1200/800",
    link: "#"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "TechFlow Solutions",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    description: "Leading frontend development for enterprise SaaS applications, optimizing performance and user experience."
  },
  {
    id: 2,
    company: "Innova Web",
    role: "Frontend Developer",
    period: "2020 — 2022",
    description: "Developed high-performance React components and implemented complex GSAP animations for marketing sites."
  },
  {
    id: 3,
    company: "Creative Sync",
    role: "Junior Developer",
    period: "2018 — 2020",
    description: "Collaborated with designers to translate UI/UX designs into responsive web interfaces."
  }
];

export const SKILLS: Skill[] = [
  { id: 1, name: "React" },
  { id: 2, name: "TypeScript" },
  { id: 3, name: "Node.js" },
  { id: 4, name: "GSAP" },
  { id: 5, name: "Tailwind CSS" },
  { id: 6, name: "Framer Motion" },
  { id: 7, name: "Next.js" },
  { id: 8, name: "GraphQL" }
];

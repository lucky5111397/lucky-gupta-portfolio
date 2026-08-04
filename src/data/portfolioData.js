import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPostman,
  SiRender,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";

export const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "Education", to: "education" },
  { label: "Contact", to: "contact" },
];

export const stats = [
  { label: "Projects Completed", value: 12, suffix: "+" },
  { label: "GitHub Repositories", value: 25, suffix: "+" },
  { label: "LeetCode Problems", value: 150, suffix: "+" },
  { label: "Technologies Learned", value: 18, suffix: "+" },
];

export const skillGroups = [
  {
    title: "Frontend",
    route: "/frontend",
    skills: [
      { name: "React", icon: FaReact, level: 85 },
      { name: "JavaScript", icon: FaJs, level: 88 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
      { name: "HTML", icon: FaHtml5, level: 95 },
      { name: "CSS", icon: FaCss3Alt, level: 90 },
    ],
  },
  {
    title: "Backend",
    route: "/backend",
    skills: [
      { name: "Java", icon: FaJava, level: 90 },
      { name: "Spring Boot", icon: SiSpringboot, level: 82 },
      { name: "Node.js", icon: FaNodeJs, level: 78 },
      { name: "Express", icon: SiExpress, level: 76 },
    ],
  },
  {
    title: "Database",
    route: "/database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 80 },
      { name: "MySQL", icon: SiMysql, level: 85 },
      { name: "Firebase", icon: SiFirebase, level: 75 },
    ],
  },
  {
    title: "Tools",
    route: "/tools",
    skills: [
      { name: "Git", icon: FaGitAlt, level: 88 },
      { name: "GitHub", icon: FaGithub, level: 88 },
      { name: "Postman", icon: SiPostman, level: 85 },
      { name: "VS Code", icon: FiCode, level: 92 },
      { name: "Render", icon: SiRender, level: 80 },
    ],
  },
];

export const projects = [
  {
    id: "intellivora",
    name: "INTELLIVORA",
    tagline: "AI-powered interview preparation platform",
    description:
      "A full-stack platform that helps candidates prepare for technical interviews using AI. Includes resume analysis, live AI-driven mock interviews with real-time feedback, downloadable PDF performance reports, and a complete history of past sessions — all secured with authentication and integrated Razorpay payments for premium access.",
    features: [
      "Resume Analysis",
      "AI Interview Simulation",
      "AI Feedback",
      "PDF Reports",
      "Authentication",
      "Razorpay Payments",
      "Interview History",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "Razorpay", "JWT"],
    liveDemo: "#",
    github: "#",
    featured: true,
    status: "In Production",
  },
  {
    id: "placeholder-1",
    name: "Project Name",
    tagline: "Short one-line description goes here",
    description:
      "Add a short paragraph describing the problem this project solves, the approach taken, and the outcome or impact.",
    features: ["Feature One", "Feature Two", "Feature Three"],
    tech: ["Java", "Spring Boot", "MySQL"],
    liveDemo: "#",
    github: "#",
    featured: false,
    status: "Coming Soon",
  },
  {
    id: "placeholder-2",
    name: "Project Name",
    tagline: "Short one-line description goes here",
    description:
      "Add a short paragraph describing the problem this project solves, the approach taken, and the outcome or impact.",
    features: ["Feature One", "Feature Two", "Feature Three"],
    tech: ["React", "Firebase"],
    liveDemo: "#",
    github: "#",
    featured: false,
    status: "Coming Soon",
  },
  {
    id: "placeholder-3",
    name: "Project Name",
    tagline: "Short one-line description goes here",
    description:
      "Add a short paragraph describing the problem this project solves, the approach taken, and the outcome or impact.",
    features: ["Feature One", "Feature Two", "Feature Three"],
    tech: ["Node.js", "MongoDB", "Express"],
    liveDemo: "#",
    github: "#",
    featured: false,
    status: "Coming Soon",
  },
];

export const experience = [
  {
    role: "Aspiring Java Backend Developer",
    org: "Open to Opportunities",
    period: "2026 — Present",
    route: "/experience/current",
    points: [
      "Actively building production-grade backend systems with Java and Spring Boot.",
      "Exploring AI integration patterns for full-stack applications.",
      "Seeking backend / full-stack roles at product-based companies.",
    ],
  },
  {
    role: "Personal & Academic Projects",
    org: "Self-Directed",
    period: "2024 — 2026",
    route: "/experience/projects",
    points: [
      "Designed and shipped full-stack applications end-to-end, from schema to deployment.",
      "Practiced clean architecture and RESTful API design principles.",
      "Solved 150+ data structures and algorithms problems on LeetCode.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institute: "Your Institute Name",
    period: "2022 — 2026",
    route: "/education/btech",
    detail: "Focused on Data Structures, Algorithms, DBMS, Operating Systems, and Software Engineering.",
  },
  {
    degree: "Higher Secondary (XII)",
    institute: "Your School Name",
    period: "2021 — 2022",
    route: "/education/xii",
    detail: "Science stream with Computer Science.",
  },
];

export const certifications = [
  { title: "Java Programming", issuer: "Certification Body", year: "2025" },
  { title: "Spring Boot Fundamentals", issuer: "Certification Body", year: "2025" },
  { title: "Full Stack Web Development", issuer: "Certification Body", year: "2025" },
  { title: "Data Structures & Algorithms", issuer: "Certification Body", year: "2024" },
];

export const socials = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  email: "mailto:lucky.gupta@example.com",
};

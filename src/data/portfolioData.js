import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaRobot,
  FaBrain,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPostman,
  SiRedis,
  SiDocker,
  SiLangchain,
  SiGooglegemini,
  SiQdrant,
} from "react-icons/si";
import { FiServer, FiZap, FiDatabase } from "react-icons/fi";

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
  { label: "Projects Completed", value: 5, suffix: "+" },
  { label: "GitHub Repositories", value: 7, suffix: "+" },
  { label: "LeetCode Problems", value: 150, suffix: "+" },
  { label: "Technologies Learned", value: 18, suffix: "+" },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "REST APIs", icon: FiServer },
    ],
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
      { name: "Redis", icon: SiRedis },
      { name: "Qdrant", icon: SiQdrant },
    ],
  },
  {
    title: "AI & GenAI",
    skills: [
      { name: "Generative AI", icon: FaBrain },
      { name: "LLM APIs", icon: FaRobot },
      { name: "OpenRouter", icon: FaRobot },
      { name: "LangChain", icon: SiLangchain },
      { name: "Multi-Agent Systems", icon: FaBrain },
      { name: "RAG & Vector Search", icon: FiDatabase },
    ],
  },
  {
    title: "Tools & Infrastructure",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: SiDocker },
    ],
  },
];

export const projects = [
  {
    id: "omnix",
    name: "OMNIX",
    tagline: "Multi-agent AI platform for intelligent productivity",
    description:
      "A full-stack Generative AI platform that brings conversational AI, coding assistance, web search, PDF and PowerPoint intelligence, vision analysis, and AI-powered artifact generation into a unified interface. Built with a modular multi-agent architecture using LangChain StateGraph, microservices, RAG with Qdrant, multiple LLM providers, Redis sessions, MongoDB persistence, and credit-based usage management.",
    features: [
      "Multi-Agent AI Architecture",
      "AI Coding Assistant",
      "Web Search",
      "PDF & PDF-RAG Analysis",
      "PowerPoint Intelligence",
      "Vision & Image Analysis",
      "AI Artifact Generation",
      "Credit-Based Usage System",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "LangChain",
      "Gemini",
      "Groq",
      "OpenRouter",
      "Qdrant",
      "Docker",
    ],
    liveDemo: "#",
    github: "#",
    featured: true,
    status: "In Production",
  },
  {
    id: "intellivora",
    name: "INTELLIVORA",
    tagline: "AI-powered technical interview preparation platform",
    description:
      "A full-stack AI interview simulator that helps candidates prepare for technical interviews using their resumes, personalized question generation, AI-powered answer evaluation, and detailed performance reports. The platform combines PDF processing, secure authentication, interview history, credit-based usage, and Razorpay payments into a complete interview preparation workflow.",
    features: [
      "AI Resume Analysis",
      "Personalized Interview Questions",
      "AI Answer Evaluation",
      "Performance Reports",
      "Interview History",
      "Secure Authentication",
      "Credit-Based Usage",
      "Razorpay Payments",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenRouter",
      "JWT",
      "Multer",
      "PDF.js",
      "Razorpay",
    ],
    liveDemo: "#",
    github: "#",
    featured: false,
    status: "In Production",
  },
  {
    id: "zyven",
    name: "Zyven",
    tagline: "AI-powered React UI component generator",
    description:
      "Zyven is an AI-powered UI component generator that transforms natural-language prompts into reusable React components with live preview. Users can generate components using OpenRouter, preview them directly in the browser, manually save components to their personal library, and manage their saved components through a secure My Components dashboard. The platform also includes Google authentication, AI credits, and Razorpay-powered payments.",
    features: [
      "AI-powered React component generation",
      "Live interactive component preview",
      "Manual component saving",
      "Personal My Components library",
      "User-specific component isolation",
      "Google authentication",
      "JWT HTTP-only cookie authentication",
      "AI credit system",
      "Razorpay payments",
      "Secure payment signature verification",
    ],
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redux Toolkit",
      "OpenRouter",
      "Firebase",
      "Razorpay",
      "Axios",
      "Framer Motion",
      "React Live",
    ],
    liveDemo: "#",
    github: "https://github.com/lucky5111397/Zyven",
    featured: false,
    status: "In Development",
  },
];

export const experience = [
  {
    role: "Generative AI Training",
    org: "EiSystems Technologies",
    period: "Hands-on Training",
    points: [
      "Developed responsive web application features using React.js, Node.js, Express.js, and MongoDB.",
      "Built and integrated REST APIs for seamless communication between frontend and backend.",
      "Collaborated on application testing, debugging, and feature implementation.",
      "Gained practical exposure to Generative AI concepts and their integration into web applications.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
    institute: "School of Management Sciences, Lucknow",
    period: "Expected Graduation: 2027",
    detail: "Focused on core Computer Science and Engineering principles, software development, and modern technologies.",
  },
];

export const certifications = [
  {
    title: "Winner – Cyber Security Quiz",
    issuer: "Datapro Computers Pvt. Ltd.",
  },
  {
    title: "Certificate of Excellence – Java Programming Quiz",
    issuer: "PVPSIT (Unstop)",
  },
  {
    title: "Generative AI Training",
    issuer: "EiSystems Technologies",
  },
];

export const socials = {
  github: "https://github.com/lucky5111397",
  linkedin: "",
  email: "mailto:luckyncg@gmail.com",
};
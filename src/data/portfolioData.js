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
  { label: "Projects Completed", value: 4, suffix: "+" },
  { label: "GitHub Repositories", value: 7, suffix: "+" },
  { label: "LeetCode Problems", value: 150, suffix: "+" },
  { label: "Core Technologies", value: 18, suffix: "+" },
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
    id: "optimus",
    name: "OPTIMUS",
    tagline:
      "Autonomous software engineering platform for repository-aware AI development",
    description:
      "OPTIMUS is an autonomous software engineering platform engineered to take development tasks from codebase analysis to verified pull requests. It indexes repositories for deep codebase intelligence, formulates structured implementation plans, and enforces an explicit human-approval gate before running code. Agentic execution is delegated to an isolated Docker worker sandbox with process isolation, shell-disabled execution, resource ceilings, and path containment to safely run untrusted repository workloads. Once changes are executed, the platform runs automated validation, tracks execution state, facilitates code review, and delivers changes directly through GitHub pull requests.",
    features: [
      "Repository-aware codebase intelligence and analysis",
      "AI-assisted task planning with explicit human approval",
      "Isolated Docker worker for sandboxed agentic execution",
      "Resource-limited, timeout-controlled execution with process isolation",
      "Automated validation, evaluation, and execution-state handling",
      "GitHub-integrated review and pull-request delivery",
    ],
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Docker",
      "AI Agents",
      "GitHub API",
      "Sandboxing",
    ],
    liveDemo: "#",
    github: "https://github.com/lucky5111397/OPTIMUS",
    featured: true,
    status: "Phases 0–18 Complete",
  },
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
    github: "https://github.com/lucky5111397/omnix.git",
    featured: true,
    status: "Completed",
  },
  {
    id: "intellivora",
    name: "INTELLIVORA",
    tagline:
      "AI-powered career preparation, assessment, and evaluation platform",
    description:
      "Intellivora is a full-stack AI career preparation and assessment platform engineered to simulate realistic recruitment workflows. It brings together adaptive AI mock technical interviews, timed aptitude evaluations, and ATS resume analysis with an interactive multi-agent group discussion simulator featuring real-time speech interaction. Backed by resilient multi-provider AI orchestration across Gemini and OpenRouter, the platform implements robust safeguards including secure PDF processing, defensive JSON output parsing, transactional credit safety, verified Razorpay payments, and unified performance analytics.",
    features: [
      "AI mock technical interviews with adaptive questioning and granular scorecards",
      "Timed aptitude assessments with recovery, automated grading, and verified reports",
      "ATS resume analysis with role matching and secure PDF processing",
      "Multi-agent group discussion simulator with real-time STT/TTS interaction",
      "Unified assessment history with searchable scorecards and performance analytics",
      "Resilient AI orchestration with provider fallbacks, credit safety, and verified payments",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Gemini",
      "OpenRouter",
      "Razorpay",
    ],
    liveDemo: "#",
    github: "https://github.com/lucky5111397/Intellivora",
    featured: false,
    status: "Major Update",
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
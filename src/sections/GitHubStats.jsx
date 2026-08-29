import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiGitBranch,
  FiTerminal,
  FiMapPin,
  FiExternalLink,
  FiCheck,
} from "react-icons/fi";
import SectionHeader from "../components/SectionHeader";
import { socials } from "../data/portfolioData";

const primaryStacks = [
  { name: "JavaScript / TypeScript", desc: "React, Node.js, Express", color: "#F1E05A" },
  { name: "Generative AI & LLMs", desc: "LangChain, RAG, Multi-Agent", color: "#22D3EE" },
  { name: "Databases & Caching", desc: "MongoDB, Redis, Qdrant", color: "#8B5CF6" },
  { name: "Backend & Systems", desc: "Java, Spring Boot, REST APIs", color: "#3B82F6" },
];

export default function GitHubStats() {
  const [githubUser, setGithubUser] = useState(null);

  useEffect(() => {
    // Fetch public unauthenticated profile info (no secrets/tokens required)
    fetch("https://api.github.com/users/lucky5111397")
      .then((res) => {
        if (res.ok) return res.json();
        return null;
      })
      .then((data) => {
        if (data && data.login) {
          setGithubUser(data);
        }
      })
      .catch(() => {
        // Graceful fallback for offline / rate limits
      });
  }, []);

  const statTiles = [
    {
      icon: FiGithub,
      label: "GitHub Handle",
      value: "@lucky5111397",
    },
    {
      icon: FiGitBranch,
      label: "Public Repositories",
      value: "7",
    },
    {
      icon: FiTerminal,
      label: "Stack Focus",
      value: "MERN & AI",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: githubUser?.location || "Lucknow, India",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="GitHub Activity &amp; Code"
          subtitle="Direct access to my open-source projects, full-stack repositories, and codebases."
        />

        {/* Stat tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statTiles.map((tile, i) => (
            <motion.div
              key={tile.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 text-center hover:border-white/20 transition-colors"
            >
              <tile.icon className="mx-auto mb-2 text-cyan-400" size={20} />
              <div className="font-display text-xl md:text-2xl font-bold truncate">
                {tile.value}
              </div>
              <p className="text-text-faint text-xs font-mono-ui mt-1">{tile.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* GitHub Profile Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass rounded-2xl p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-brand-soft border border-white/10 flex items-center justify-center text-cyan-400">
                    <FiGithub size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {githubUser?.name || "Lucky Gupta"}
                    </h3>
                    <p className="font-mono-ui text-xs text-text-dim">@lucky5111397</p>
                  </div>
                </div>
                <span className="font-mono-ui text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400">
                  Public Profile
                </span>
              </div>

              <p className="text-text-dim text-sm md:text-base leading-relaxed mb-6">
                {githubUser?.bio ||
                  "Full-Stack Developer building scalable web applications and AI-powered products. MERN Stack • Generative AI • Backend Systems"}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-sm text-text-dim">
                  <FiCheck className="text-online shrink-0 mt-0.5" size={16} />
                  <span>
                    Flagship codebases for <strong>OMNIX</strong> (Multi-Agent AI Platform) and{" "}
                    <strong>INTELLIVORA</strong> (AI Interview Simulator).
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-text-dim">
                  <FiCheck className="text-online shrink-0 mt-0.5" size={16} />
                  <span>
                    Clean architecture, modular microservices, RESTful APIs, and full-stack MERN workflows.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-text-dim">
                  <FiCheck className="text-online shrink-0 mt-0.5" size={16} />
                  <span>
                    Multi-agent orchestrations with LangChain StateGraph, Qdrant RAG, and Redis persistence.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-brand text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-glow"
              >
                <FiGithub size={16} /> View GitHub Profile
                <FiExternalLink size={14} />
              </a>
              <a
                href={`${socials.github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium hover:border-white/25 transition-colors"
              >
                <FiGitBranch size={16} /> View Repositories
              </a>
            </div>
          </motion.div>

          {/* Repository Technical Focus */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-mono-ui text-sm text-text-dim">repository_stack.json</h3>
                <span className="font-mono-ui text-xs text-text-faint">Ecosystem</span>
              </div>

              <div className="space-y-4">
                {primaryStacks.map((stack) => (
                  <div
                    key={stack.name}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: stack.color }}
                      />
                      <span className="text-sm font-medium text-text-primary">{stack.name}</span>
                    </div>
                    <p className="text-xs text-text-faint font-mono-ui ml-4.5">{stack.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/5">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full glass text-sm font-medium hover:border-cyan-400/30 hover:text-cyan-400 transition-colors"
              >
                <FiGithub size={15} /> @lucky5111397
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

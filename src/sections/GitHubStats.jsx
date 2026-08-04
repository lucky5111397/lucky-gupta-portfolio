import { useMemo } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiGitCommit, FiGitBranch, FiStar } from "react-icons/fi";
import SectionHeader from "../components/SectionHeader";
import { socials } from "../data/portfolioData";

const languages = [
  { name: "Java", pct: 38, color: "#B07219" },
  { name: "JavaScript", pct: 27, color: "#F1E05A" },
  { name: "HTML/CSS", pct: 18, color: "#22D3EE" },
  { name: "Others", pct: 17, color: "#8B5CF6" },
];

const statTiles = [
  { icon: FiGitCommit, label: "Total Commits", value: "1,200+" },
  { icon: FiGitBranch, label: "Repositories", value: "25+" },
  { icon: FiStar, label: "Stars Earned", value: "40+" },
  { icon: FiGithub, label: "Contribution Streak", value: "60 days" },
];

// Deterministic pseudo-contribution grid (52 weeks x 7 days), seeded for consistency
function generateContributions() {
  const weeks = 52;
  const days = 7;
  const grid = [];
  for (let w = 0; w < weeks; w++) {
    const col = [];
    for (let d = 0; d < days; d++) {
      const seed = Math.sin(w * 12.9898 + d * 78.233) * 43758.5453;
      const val = Math.abs(seed - Math.floor(seed));
      let level = 0;
      if (val > 0.85) level = 4;
      else if (val > 0.68) level = 3;
      else if (val > 0.5) level = 2;
      else if (val > 0.3) level = 1;
      col.push(level);
    }
    grid.push(col);
  }
  return grid;
}

const levelColors = [
  "bg-white/5",
  "bg-violet-500/30",
  "bg-violet-500/55",
  "bg-blue-500/75",
  "bg-cyan-400",
];

export default function GitHubStats() {
  const contributions = useMemo(() => generateContributions(), []);

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          route="/github"
          title="GitHub Activity"
          subtitle="A snapshot of my open-source contributions and coding activity."
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
              className="glass rounded-2xl p-5 text-center"
            >
              <tile.icon className="mx-auto mb-2 text-cyan-400" size={20} />
              <div className="font-display text-xl md:text-2xl font-bold">{tile.value}</div>
              <p className="text-text-faint text-xs font-mono-ui mt-1">{tile.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contribution graph */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass rounded-2xl p-6 overflow-x-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono-ui text-sm text-text-dim">contribution_graph.log</h3>
              <span className="font-mono-ui text-xs text-text-faint">last 52 weeks</span>
            </div>
            <div className="flex gap-[3px] min-w-[600px]">
              {contributions.map((col, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {col.map((level, di) => (
                    <div
                      key={di}
                      className={`w-[9px] h-[9px] rounded-[2px] ${levelColors[level]}`}
                      title={`${level} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4 justify-end">
              <span className="text-xs text-text-faint font-mono-ui">Less</span>
              {levelColors.map((c, i) => (
                <div key={i} className={`w-[9px] h-[9px] rounded-[2px] ${c}`} />
              ))}
              <span className="text-xs text-text-faint font-mono-ui">More</span>
            </div>
          </motion.div>

          {/* Top languages */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-mono-ui text-sm text-text-dim mb-5">top_languages.json</h3>
            <div className="space-y-4">
              {languages.map((lang, i) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span>{lang.name}</span>
                    <span className="text-text-faint font-mono-ui">{lang.pct}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.pct}%` }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-full glass text-sm font-medium hover:border-white/25 transition-colors"
            >
              <FiGithub size={15} /> View Full Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

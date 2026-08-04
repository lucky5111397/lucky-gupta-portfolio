import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiCheck } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-3xl overflow-hidden glass hover:border-white/20 transition-all duration-400 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Ambient hover glow */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-brand opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500 pointer-events-none" />

      <div className="relative p-6 md:p-9">
        <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
          <div>
            <span className="route-tag mb-2">
              {project.featured ? "PROD" : "DEV"} —{" "}
              <span className="text-text-faint">{project.status}</span>
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mt-2">
              {project.name}
            </h3>
            <p className="text-cyan-400 text-sm mt-1 font-medium">{project.tagline}</p>
          </div>
        </div>

        <p className="text-text-dim text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
          {project.description}
        </p>

        {project.features?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 max-w-xl">
            {project.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-text-dim">
                <FiCheck className="text-online shrink-0" size={14} />
                {f}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-7">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-mono-ui bg-white/5 border border-white/10 text-text-dim"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-brand text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <FiExternalLink size={15} /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium hover:border-white/25 transition-colors"
          >
            <FiGithub size={15} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 md:px-10 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Experience &amp; Training"
          subtitle="Hands-on technical training, feature development, and engineering exposure."
        />

        <div className="relative pl-10 md:pl-14">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500 via-blue-500 to-transparent" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: i * 0.15 + 0.2, type: "spring" }}
                className="absolute -left-10 md:-left-14 top-1.5 w-4 h-4 rounded-full bg-gradient-brand shadow-glow ring-4 ring-bg"
              />

              <div className="glass rounded-2xl p-6 md:p-7 hover:border-white/20 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono-ui text-xs text-cyan-400 font-medium">{exp.org}</span>
                  {exp.period && (
                    <span className="font-mono-ui text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-dim">
                      {exp.period}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-3">
                  {exp.role}
                </h3>
                <ul className="space-y-2.5">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-text-dim leading-relaxed">
                      <span className="text-cyan-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

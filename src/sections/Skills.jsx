import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { skillGroups } from "../data/portfolioData";

function SkillCard({ skill, index }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group relative glass rounded-2xl p-4 md:p-5 hover:border-cyan-400/30 transition-colors duration-300 hover:shadow-glow-cyan flex items-center gap-3.5"
    >
      <div className="w-10 h-10 shrink-0 rounded-lg bg-surface-raised flex items-center justify-center text-2xl text-text-primary group-hover:text-cyan-400 transition-colors">
        <Icon />
      </div>
      <span className="font-medium text-sm md:text-base text-text-primary group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-10 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Skills &amp; Technologies"
          subtitle="The modern technologies, frameworks, and AI tools I use to build scalable full-stack applications."
        />

        <div className="space-y-12 md:space-y-14">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5 }}
                className="flex items-baseline gap-3 mb-5"
              >
                <h3 className="font-display text-xl md:text-2xl font-semibold">
                  {group.title}
                </h3>
              </motion.div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {group.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

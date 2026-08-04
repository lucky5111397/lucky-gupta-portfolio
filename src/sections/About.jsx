import { motion } from "framer-motion";
import { FiCode, FiCpu, FiLayers, FiTarget } from "react-icons/fi";
import SectionHeader from "../components/SectionHeader";
import AnimatedCounter from "../components/AnimatedCounter";
import { stats } from "../data/portfolioData";

const focusAreas = [
  {
    icon: FiCode,
    title: "Java Backend Development",
    desc: "Designing robust, well-structured backend services with Java and Spring Boot.",
  },
  {
    icon: FiCpu,
    title: "Artificial Intelligence",
    desc: "Integrating AI models into real products to solve genuine user problems.",
  },
  {
    icon: FiLayers,
    title: "Full Stack Development",
    desc: "Building cohesive experiences end-to-end, from database to interface.",
  },
  {
    icon: FiTarget,
    title: "Clean Architecture & Problem Solving",
    desc: "Writing maintainable code and breaking down complex problems methodically.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          route="/about"
          title="About Me"
          subtitle="A Computer Science Engineering student building at the intersection of backend engineering and applied AI."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 md:p-7 hover:border-white/20 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-brand-soft border border-white/10 flex items-center justify-center mb-4 text-cyan-400">
                <area.icon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{area.title}</h3>
              <p className="text-text-dim text-sm leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center glass rounded-2xl py-8 px-4"
            >
              <div className="font-display text-3xl md:text-5xl font-bold text-gradient mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-text-dim text-xs md:text-sm font-mono-ui tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import SectionHeader from "../components/SectionHeader";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Education" />

        <div className="grid md:grid-cols-1 max-w-2xl mx-auto gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-7 md:p-8 hover:border-white/20 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-brand-soft border border-white/10 flex items-center justify-center mb-4 text-cyan-400">
                <FiBookOpen size={20} />
              </div>
              <h3 className="font-display text-xl font-semibold mt-2 mb-1">{edu.degree}</h3>
              <p className="text-text-dim text-sm mb-1">{edu.institute}</p>
              <p className="font-mono-ui text-xs text-cyan-400 mb-4">{edu.period}</p>
              <p className="text-text-dim text-sm leading-relaxed">{edu.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

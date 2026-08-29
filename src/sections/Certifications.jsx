import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import SectionHeader from "../components/SectionHeader";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Certifications &amp; Achievements" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center hover:border-cyan-400/30 hover:shadow-glow-cyan transition-all duration-300 flex flex-col items-center justify-between"
            >
              <div>
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-brand-soft border border-white/10 flex items-center justify-center mb-4 text-cyan-400">
                  <FiAward size={22} />
                </div>
                <h3 className="font-display font-semibold mb-2 text-sm md:text-base">
                  {cert.title}
                </h3>
                <p className="text-text-dim text-xs mb-1">{cert.issuer}</p>
              </div>
              {cert.year && (
                <span className="font-mono-ui text-xs text-text-faint mt-2">{cert.year}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

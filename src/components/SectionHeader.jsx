import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle, align = "center" }) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment} mb-12 md:mb-16`}>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-3xl md:text-5xl font-semibold tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-text-dim max-w-2xl text-base md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

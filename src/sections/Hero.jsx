import { useRef } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import TraceNetwork from "../components/TraceNetwork";
import useMousePosition from "../hooks/useMousePosition";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const { x, y } = useMousePosition();

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden pt-24"
    >
      {/* Mouse-follow glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(500px circle at ${x}px ${y}px, rgba(139,92,246,0.10), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Signature trace network background */}
      <div className="absolute inset-0 z-0 opacity-70">
        <TraceNetwork density="normal" />
      </div>

      {/* Floating blurred shapes */}
      <div
        className="absolute top-1/4 -left-20 w-72 h-72 bg-violet-500/20 rounded-full blur-[100px] animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-[110px] animate-float-delayed"
        aria-hidden="true"
      />

      {/* Gradient overlay to keep text legible over network */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-bg/40 via-bg/70 to-bg" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full"
      >
        <motion.span variants={item} className="route-tag mb-6">
          system.status — <span className="text-online">online &amp; hiring-ready</span>
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-[15vw] leading-[0.95] sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold tracking-tight"
        >
          Lucky
          <br />
          <span className="text-gradient">Gupta</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap gap-3 font-mono-ui text-sm md:text-base text-text-dim"
        >
          <span className="px-3 py-1.5 rounded-full glass">Full-Stack MERN Developer</span>
          <span className="px-3 py-1.5 rounded-full glass">Generative AI &amp; Agentic Systems</span>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-lg md:text-xl text-text-dim leading-relaxed"
        >
          I build scalable full-stack web applications, multi-agent AI systems,
          and intelligent products powered by modern backend architectures.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <ScrollLink
            to="projects"
            smooth
            duration={500}
            offset={-80}
            className="group cursor-pointer flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-brand text-white font-medium shadow-glow hover:shadow-lg hover:opacity-95 transition-all"
          >
            View Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </ScrollLink>
          <a
            href="/resume/Lucky_Gupta_Resume.pdf"
            download
            className="flex items-center gap-2 px-7 py-3.5 rounded-full glass font-medium hover:border-white/20 transition-colors"
          >
            <FiDownload /> Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

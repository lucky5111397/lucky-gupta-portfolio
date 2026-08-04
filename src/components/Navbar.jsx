import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { navLinks } from "../data/portfolioData";
import useActiveSection from "../hooks/useActiveSection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.to));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav border-b border-white/5 py-3" : "py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <ScrollLink
            to="home"
            smooth
            duration={500}
            className="font-display text-lg font-semibold tracking-tight cursor-pointer"
          >
            Lucky<span className="text-gradient">.dev</span>
          </ScrollLink>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1 font-mono-ui text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  spy={false}
                  className={`relative px-4 py-2 rounded-full cursor-pointer transition-colors duration-200 ${
                    activeSection === link.to
                      ? "text-cyan-400"
                      : "text-text-dim hover:text-text-primary"
                  }`}
                >
                  {activeSection === link.to && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white/5 border border-cyan-400/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </ScrollLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/resume/Lucky_Gupta_Resume.pdf"
              download
              className="flex items-center gap-2 font-mono-ui text-sm px-4 py-2 rounded-full bg-gradient-brand text-white hover:opacity-90 transition-opacity shadow-glow"
            >
              <FiDownload size={15} /> Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-primary"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center gap-2"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <ScrollLink
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-40}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-3xl font-medium text-text-primary hover:text-gradient cursor-pointer block py-3"
                >
                  {link.label}
                </ScrollLink>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * navLinks.length }}
              href="/resume/Lucky_Gupta_Resume.pdf"
              download
              className="mt-6 flex items-center gap-2 font-mono-ui text-sm px-6 py-3 rounded-full bg-gradient-brand text-white"
            >
              <FiDownload size={16} /> Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

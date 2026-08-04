import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheck } from "react-icons/fi";
import SectionHeader from "../components/SectionHeader";
import { socials } from "../data/portfolioData";

const socialLinks = [
  { icon: FiGithub, label: "GitHub", href: socials.github },
  { icon: FiLinkedin, label: "LinkedIn", href: socials.linkedin },
  { icon: FiMail, label: "Email", href: socials.email },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    // EmailJS-ready: replace this block with your EmailJS call, e.g.:
    // emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
    //   .then(() => setStatus('sent'))
    //   .catch(() => setStatus('idle'));
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3500);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-10 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          route="/contact"
          title="Let's Connect"
          subtitle="Have a role, project, or idea in mind? I'd love to hear from you."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-6 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-text-dim mb-2 font-mono-ui">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-faint focus:border-cyan-400/50 focus:bg-white/[0.07] outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-text-dim mb-2 font-mono-ui">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-faint focus:border-cyan-400/50 focus:bg-white/[0.07] outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-text-dim mb-2 font-mono-ui">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-faint focus:border-cyan-400/50 focus:bg-white/[0.07] outline-none transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status !== "idle"}
              whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
              whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-brand text-white font-medium shadow-glow disabled:opacity-80 transition-opacity"
            >
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <FiSend size={16} /> Send Message
                  </motion.span>
                )}
                {status === "sending" && (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                    />
                    Sending...
                  </motion.span>
                )}
                {status === "sent" && (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <FiCheck size={16} /> Message Sent!
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>

          <div className="flex items-center justify-center gap-4 mt-8 pt-8 border-t border-white/10">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-11 h-11 rounded-full glass flex items-center justify-center hover:border-cyan-400/40 hover:text-cyan-400 transition-colors"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

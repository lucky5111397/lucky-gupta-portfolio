import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import SectionHeader from "../components/SectionHeader";
import { socials } from "../data/portfolioData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState("");

  const socialLinks = [
    { icon: FiGithub, label: "GitHub", href: socials.github },
    ...(socials.linkedin ? [{ icon: FiLinkedin, label: "LinkedIn", href: socials.linkedin }] : []),
    { icon: FiMail, label: "Email", href: socials.email },
  ];

  const handleChange = (e) => {
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setErrorMessage("Please fill in all fields.");
      setStatus("error");
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setErrorMessage(
        "Contact form service is not yet configured. Please email me directly at luckyncg@gmail.com."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          message: message,
          subject: `Portfolio Message from ${name}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setErrorMessage(data.message || "Failed to deliver message. Please try again or email directly.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection or contact directly via email.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-10 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
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

            {status === "error" && errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono-ui flex items-center gap-2"
              >
                <FiAlertCircle size={16} className="shrink-0" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
              whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-brand text-white font-medium shadow-glow disabled:opacity-80 transition-opacity cursor-pointer"
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
                    className="flex items-center gap-2 text-online"
                  >
                    <FiCheck size={16} /> Message Sent!
                  </motion.span>
                )}
                {status === "error" && (
                  <motion.span
                    key="error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <FiSend size={16} /> Retry Message
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
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
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

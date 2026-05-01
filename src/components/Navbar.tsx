import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Moon, Sun } from "lucide-react";
import { useThemeContext } from "../contexts/ThemeContext";
import { useLang } from "../contexts/LangContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggle } = useThemeContext();
  const { lang, t, toggle: toggleLang } = useLang();

  const navLinks = [
    { label: t.nav.home,      href: "#home" },
    { label: t.nav.about,     href: "#about" },
    { label: t.nav.skills,    href: "#skills" },
    { label: t.nav.github,    href: "#github" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.contact,   href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "about", "skills", "portfolio", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bg/95 backdrop-blur-sm border-b border-border" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <Terminal size={18} className="text-gold group-hover:animate-spin transition-all" />
          <span className="text-gold font-mono font-bold text-lg tracking-widest terminal-glow">
            MFH
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link font-mono text-sm tracking-wider transition-colors duration-200 ${
                  active === link.href.slice(1)
                    ? "text-gold active"
                    : "text-muted hover:text-text"
                }`}
              >
                <span className="text-gold-dim mr-1">./</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Lang toggle */}
          <button
            onClick={toggleLang}
            className="p-2 border border-border text-muted hover:border-gold/50 hover:text-gold transition-all duration-300 font-mono text-xs tracking-wider"
          >
            {lang === "en" ? "ID" : "EN"}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="p-2 border border-border text-muted hover:border-gold/50 hover:text-gold transition-all duration-300"
            title={theme === "dark" ? "Switch to Light" : "Switch to Dark"}
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:block font-mono text-xs px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-bg transition-all duration-300 tracking-widest"
          >
            {t.nav.hire}
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gold p-1"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-mono text-sm text-muted hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <span className="text-gold">{">"}</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
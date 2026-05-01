import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, GitBranch, Link, Send, Terminal } from "lucide-react";
import { SectionHeader } from "./About";
import emailjs from "@emailjs/browser";
import { useLang } from "../contexts/LangContext";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
const InstagramIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#888888">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const socialLinks = [
  {
    label: "GitHub",
    handle: "fahmihfdz",
    icon: GitBranch,
    href: "https://github.com/fahmihfdz",
  },
  {
    label: "LinkedIn",
    handle: "Fahmi Hafidz",
    icon: Link,
    href: "https://www.linkedin.com/in/fahmi-hafidz-10610b386",
  },
  {
    label: "Instagram",
    handle: "fahmihfdz_",
    icon: InstagramIcon,
    href: "https://www.instagram.com/fahmihfdz_/",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { t } = useLang();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        // hapus baris ini → import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      setError("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface/50 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label={t.contact.title} index="04" inView={inView} />

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Terminal size={18} className="text-gold" />
              <p className="font-mono text-sm text-muted">
                {t.contact.subtitle}
              </p>
            </div>

            <h3 className="font-mono text-2xl font-bold text-text mb-4">
              {t.contact.heading}{" "}
              <span className="text-gold">{t.contact.highlight}</span>
            </h3>
            <p className="font-mono text-sm text-muted leading-relaxed mb-8">
              {t.contact.desc}
            </p>

            {/* Email */}
            <div className="flex items-center gap-3 mb-8 p-4 bg-card border border-border hover:border-gold/30 transition-colors group">
              <Mail size={16} className="text-gold" />
              <a
                href="fahmihfdzb@gmail.com"
                className="font-mono text-sm text-muted group-hover:text-gold transition-colors"
              >
                fahmihfdzb@gmail.com
              </a>
            </div>

            {/* Social */}
            <div>
              <p className="font-mono text-xs text-muted/60 tracking-widest mb-4">
                {t.contact.social}
              </p>
              <div className="space-y-3">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <s.icon
                      size={14}
                      className="text-muted group-hover:text-gold transition-colors"
                    />
                    <span className="font-mono text-xs text-muted group-hover:text-gold transition-colors">
                      @{s.handle}
                    </span>
                    <span className="font-mono text-xs text-border group-hover:text-gold/40 transition-colors ml-auto">
                      —{s.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-card border border-border overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green/70" />
                </div>
                <span className="font-mono text-xs text-muted ml-2">
                  contact_form.tsx
                </span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {[
                  {
                    name: "name",
                    label: "name",
                    type: "text",
                    placeholder: t.contact.form.name,
                  },
                  {
                    name: "email",
                    label: "email",
                    type: "email",
                    placeholder: t.contact.form.email,
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="font-mono text-xs text-muted/60 mb-1 block">
                      <span className="text-gold/60">const </span>
                      <span className="text-cyan">{field.label}</span>
                      <span className="text-muted/60"> = </span>
                    </label>
                    <input
                      type={field.type}
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, [field.name]: e.target.value }))
                      }
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-bg border border-border focus:border-gold/60 outline-none px-4 py-2.5 font-mono text-sm text-text placeholder:text-muted/30 transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-mono text-xs text-muted/60 mb-1 block">
                    <span className="text-gold/60">const </span>
                    <span className="text-cyan">message</span>
                    <span className="text-muted/60"> = </span>
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder={t.contact.form.email}
                    required
                    className="w-full bg-bg border border-border focus:border-gold/60 outline-none px-4 py-2.5 font-mono text-sm text-text placeholder:text-muted/30 transition-colors resize-none"
                  />
                </div>

                {/* Error message */}
                {error && <p>{t.contact.form.error}</p>}

                <motion.button
                  type="submit"
                  disabled={loading || sent}
                  whileHover={{ scale: loading || sent ? 1 : 1.02 }}
                  whileTap={{ scale: loading || sent ? 1 : 0.98 }}
                  className={`w-full font-mono text-sm py-3 flex items-center justify-center gap-2 tracking-widest transition-all duration-300 font-bold border disabled:cursor-not-allowed ${
                    sent
                      ? "bg-green-500/20 text-green-400 border-green-500/40"
                      : loading
                        ? "bg-gold/20 text-gold border-gold/40"
                        : "bg-gold text-bg hover:bg-gold-light border-gold"
                  }`}
                >
                  <Send size={14} className={loading ? "animate-spin" : ""} />
                  {sent
                    ? t.contact.form.sent
                    : loading
                      ? t.contact.form.sending
                      : t.contact.form.send}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

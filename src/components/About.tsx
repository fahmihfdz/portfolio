import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Briefcase, GraduationCap, Coffee } from "lucide-react";
import { useDownloadTracker } from "../hooks/useDownloadTracker";
import { useLang } from "../contexts/LangContext";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { trackDownload } = useDownloadTracker();
  const { t } = useLang();

  const stats = [
    { label: t.about.stats.projects, value: "20+", icon: Briefcase },
    { label: t.about.stats.experience, value: "2yr", icon: GraduationCap },
    { label: t.about.stats.coffees, value: "∞", icon: Coffee },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <SectionHeader label="ABOUT_ME" index="01" inView={inView} />

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-start">
          {/* Terminal card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Terminal window */}
            <div className="bg-card border border-border overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green/70" />
                </div>
                <span className="font-mono text-xs text-muted ml-2">
                  about.json
                </span>
              </div>

              {/* Content */}
              <div className="p-6 font-mono text-sm">
                <div className="text-muted">{`{`}</div>
                {[
                  {
                    key: "name",
                    val: '"M. Fahmi Hafidz B"',
                    color: "text-gold",
                  },
                  {
                    key: "role",
                    val: '"Junior Web Developer"',
                    color: "text-cyan",
                  },
                  {
                    key: "location",
                    val: '"Indramayu, Jawa Barat"',
                    color: "text-green",
                  },
                  { key: "available", val: "true", color: "text-green" },
                  {
                    key: "passion",
                    val: '"Building great products"',
                    color: "text-gold",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="ml-4 py-0.5"
                  >
                    <span className="text-muted">"</span>
                    <span className="text-text">{item.key}</span>
                    <span className="text-muted">"</span>
                    <span className="text-muted">: </span>
                    <span className={item.color}>{item.val}</span>
                    <span className="text-muted">,</span>
                  </motion.div>
                ))}
                <div className="text-muted">{`}`}</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="bg-card border border-border p-4 text-center hover:border-gold/50 transition-colors group"
                >
                  <s.icon
                    size={16}
                    className="text-gold mx-auto mb-2 group-hover:scale-110 transition-transform"
                  />
                  <div className="font-mono text-xl font-bold text-gold terminal-glow">
                    {s.value}
                  </div>
                  <div className="font-mono text-xs text-muted mt-1">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <User size={20} className="text-gold" />
              <h3 className="font-mono text-lg text-text">
                I'm <span className="text-gold">M. Fahmi Hafidz B</span>
              </h3>
            </div>
            <p className="font-mono text-sm text-muted leading-relaxed mb-4">
              {t.about.bio1}
            </p>
            <p className="font-mono text-sm text-muted leading-relaxed mb-4">
              <p>{t.about.bio2}</p>
            </p>
            <p className="font-mono text-sm text-muted leading-relaxed mb-8">
              <p>{t.about.bio3}</p>
            </p>

            {/* What I do */}
            <div className="space-y-3">
              {(
                t.about.doing ?? [
                  "> Frontend development with React & TypeScript",
                  "> REST API design with Express.js & Node.js",
                  "> Database design with MySQL & MongoDB",
                  "> Responsive UI with Tailwind CSS",
                ]
              ).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="font-mono text-sm"
                >
                  <span className="text-gold">{line.slice(0, 1)}</span>
                  <span className="text-muted">{line.slice(1)}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href="/cv.pdf"
                download="Fahmi_Hafidz_CV.pdf"
                onClick={trackDownload}
                className="font-mono text-sm px-6 py-3 border border-gold/40 text-gold hover:bg-gold hover:text-bg transition-all duration-300 tracking-widest flex items-center gap-2 group"
              >
                <span>↓</span>
                {/* DOWNLOAD_CV.pdf */}
                {t.about.download}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  label,
  index,
  inView,
}: {
  label: string;
  index: string;
  inView: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="font-mono text-xs text-gold/40 tracking-[0.3em]"
      >
        {index}
      </motion.span>
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: 40 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-px bg-gold/40"
      />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-mono text-2xl md:text-3xl font-bold text-text tracking-wider"
      >
        {label.split("_").map((word, i) => (
          <span key={i}>
            {i > 0 && <span className="text-gold">_</span>}
            {word}
          </span>
        ))}
      </motion.h2>
    </div>
  );
}

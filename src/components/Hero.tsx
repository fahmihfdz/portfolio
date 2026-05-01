import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code2, ChevronDown } from 'lucide-react';
import { useLang } from '../contexts/LangContext';

const rolesEn = [
  'Junior Web Developer',
  'Backend Developer',
  'Frontend Developer',
  'Cybersecurity Enthusiast',
];

const rolesId = [
  'Junior Web Developer',
  'Backend Developer',
  'Frontend Developer',
  'Cybersecurity Enthusiast',
];

function TypingText({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx % texts.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setIdx(i => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, texts]);

  return (
    <span className="text-gold terminal-glow">
      {displayed}
      <span className="animate-blink text-gold-light">_</span>
    </span>
  );
}

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section
      id="home"
      className="min-h-screen grid-bg relative flex items-center overflow-hidden pt-16"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text */}
          <div className="flex-1 order-2 lg:order-1">
            {/* Terminal prompt */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-green green-glow font-mono text-sm">user@portfolio</span>
              <span className="text-muted">:</span>
              <span className="text-cyan font-mono text-sm">~/home</span>
              <span className="text-muted">$</span>
              <span className="text-text font-mono text-sm ml-1 animate-blink">whoami</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-mono text-sm text-muted mb-2 tracking-wider"
            >
              {t.hero.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-3 tracking-tight"
            >
              M.Fahmi Hafidz
              <br />
              <span className="text-gold terminal-glow">Bahrul'ilmi</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="font-mono text-base md:text-lg text-muted mb-6 h-8"
            >
              <span className="text-muted mr-2">{'>'}</span>
              <TypingText texts={lang === 'en' ? rolesEn : rolesId} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="font-mono text-sm text-muted leading-relaxed mb-8 max-w-lg border-l-2 border-gold/30 pl-4"
            >
              {t.hero.desc}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-2 font-mono text-xs text-muted mb-8"
            >
              <MapPin size={12} className="text-gold" />
              <span>{t.hero.location}</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#portfolio"
                className="font-mono text-sm px-6 py-3 bg-gold text-bg font-bold hover:bg-gold-light transition-all duration-300 tracking-widest group flex items-center gap-2"
              >
                <Code2 size={14} />
                {t.hero.viewWork}
              </a>
              <a
                href="#contact"
                className="font-mono text-sm px-6 py-3 border border-border text-muted hover:border-gold hover:text-gold transition-all duration-300 tracking-widest"
              >
                {t.hero.getInTouch}
              </a>
            </motion.div>
          </div>

          {/* Right: ID Card */}
          <motion.div
            className="order-1 lg:order-2 flex-shrink-0"
            initial={{ y: '-100vh', opacity: 0, rotate: -5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <IDCard t={t} />
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-muted tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={16} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function IDCard({ t }: { t: any }) {
  return (
    <div className="id-card relative w-64 md:w-72" style={{ perspective: '1000px' }}>
      {/* Lanyard string */}
      <div className="flex justify-center mb-0">
        <div className="w-0.5 h-16 bg-gradient-to-b from-transparent via-gold/40 to-gold/60" />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ rotateY: 6, rotateX: -4, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative bg-card border border-gold/30 overflow-hidden"
        style={{
          boxShadow: '0 0 40px rgba(201,168,76,0.15), 0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        {/* Top stripe */}
        <div className="h-2 bg-gradient-to-r from-gold via-gold-light to-gold" />

        {/* Card header */}
        <div className="bg-gold/10 border-b border-gold/20 px-4 py-2 flex items-center justify-between">
          <span className="font-mono text-xs text-gold tracking-widest font-bold">ENGINEERING_ID </span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500/70" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <div className="w-2 h-2 rounded-full bg-green/70" />
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center pt-6 pb-3">
          <div className="relative">
            <div
              className="w-24 h-24 bg-gradient-to-br from-gold/20 to-surface border-2 border-gold/40 overflow-hidden"
              style={{ boxShadow: '0 0 20px rgba(201,168,76,0.3)' }}
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gold/10 to-card">
                <img src="/assets/profil.png" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green rounded-full border-2 border-card flex items-center justify-center">
              <div className="w-2 h-2 bg-green rounded-full animate-ping absolute" />
              <div className="w-2 h-2 bg-green rounded-full" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="px-4 pb-4 text-center">
          <h3 className="font-mono font-bold text-base text-text tracking-wide">M. Fahmi Hafidz B</h3>
          <p className="font-mono text-xs text-gold mt-1">ENGINEERING </p>

          <div className="mt-3 space-y-1.5 text-left">
            {[
              ['ID', '#MFH-2026'],
              ['DEPT', 'Engineering'],
              ['STATUS', t.about.available],
              ['LOC', 'Indramayu, Jawa Barat'],
            ].map(([key, val]) => (
              <div key={key} className="flex items-center gap-2 font-mono text-xs">
                <span className="text-gold/60 w-14">{key}:</span>
                <span className={`text-text/80 ${key === 'STATUS' ? 'text-green' : ''}`}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Barcode */}
        <div className="px-4 pb-4">
          <div className="h-8 flex items-center gap-px justify-center opacity-40">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="bg-gold"
                style={{
                  width: Math.random() > 0.5 ? '2px' : '1px',
                  height: `${60 + Math.random() * 40}%`,
                }}
              />
            ))}
          </div>
          <p className="font-mono text-xs text-center text-muted/50 mt-1 tracking-[0.3em]">RKMG2026NRDZ</p>
        </div>

        {/* Bottom stripe */}
        <div className="h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

        {/* Scan line animation */}
        <motion.div
          animate={{ y: ['0%', '100%'] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent pointer-events-none top-0"
        />
      </motion.div>

      {/* Hole */}
      <div className="absolute top-[66px] left-1/2 -translate-x-1/2 w-3 h-3 bg-bg border border-gold/40 rounded-full z-10" />
    </div>
  );
}
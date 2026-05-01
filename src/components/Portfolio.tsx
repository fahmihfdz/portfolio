import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, Code2 } from 'lucide-react';
import { SectionHeader } from './About';

const categories = ['All', 'Web Design', 'Development', 'Fullstack', 'API'];

const projects = [
  {
    id: 1,
    title: 'Psychology Information Website',
    desc: ' Information Website with Javascript, HTML, CSS. Features authentication, cart, Responsive Mobile.',
    tags: ['Javascript', 'HTML', 'CSS', 'Github', 'Vscode'],
    category: 'Development',
    color: '#c9a84c',
    year: '2025',
    status: 'LIVE',
    image: '/assets/port3.png',
  },
  {
    id: 2,
    title: 'Organization Website',
    desc: 'Developed this Website, it was with javascript, tailwind,HTML, and figma',
    tags: ['Javascript', 'HTML', 'Tailwind', 'Github', 'Vscode'],
    category: 'Development',
    color: '#22d3ee',
    year: '2025',
    status: 'COMPLETE',
    image: '/assets/port2.png',
  },
  {
    id: 3,
    title: 'REST API Blog',
    desc: 'REST API backend for blog application with authentication and post management features.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 'Postman', 'Github'],
    category: 'API',
    color: '#4ade80',
    year: '2026',
    status: 'COMPLETE',
    image: '/assets/port1.png',
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="PORTFOLIO" index="03" inView={inView} />

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mt-10 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-xs px-3 py-1.5 border transition-all tracking-wider ${
                filter === cat
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-border text-muted hover:border-gold/50 hover:text-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={0.1 * i} inView={inView} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay, inView }: { project: typeof projects[0]; delay: number; inView: boolean }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="bg-card border border-border group hover:border-gold/30 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
      style={{ '--project-color': project.color } as React.CSSProperties}
    >
      {/* Top accent */}
      <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)` }} />

      {/* Preview area */}
<div className="h-36 relative overflow-hidden flex items-center justify-center"
  style={{ background: `${project.color}15`}}
>
  {/* Foto project — tampil jika ada, fallback ke placeholder jika tidak */}
  {project.image ? (
    <img
      src={project.image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
    />
  ) : (
    <div
      className="text-5xl font-mono font-bold opacity-10 select-none group-hover:opacity-20 transition-opacity"
      style={{ color: project.color }}
    >
      {'{_}'}
    </div>
  )}

  {/* Overlay gradient bawah supaya teks terbaca */}
  <div
    className="absolute inset-0"
    style={{ background: `linear-gradient(to top, ${project.color}22, transparent)` }}
  />

  {/* Badge status */}
  <div className="absolute top-3 right-3 z-10">
    <span
      className="font-mono text-xs px-2 py-0.5 border backdrop-blur-sm"
      style={{
        color: project.status === 'LIVE' ? '#4ade80' : '#888',
        borderColor: project.status === 'LIVE' ? '#4ade8040' : '#2a2a2a',
        background: 'rgba(0,0,0,0.5)',
      }}
    >
      ● {project.status}
    </span>
  </div>

  {/* Tahun */}
  <div className="absolute bottom-3 left-3 z-10 font-mono text-xs text-muted">{project.year}</div>

  {/* Hover overlay dengan tombol */}
  <div className="absolute inset-0 bg-bg/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
    <button className="p-2 border border-gold/40 text-gold hover:bg-gold hover:text-bg transition-all">
      <ExternalLink size={16} />
    </button>
    <button className="p-2 border border-border text-muted hover:border-gold/40 hover:text-gold transition-all">
      <GitBranch size={16} />
    </button>
  </div>
</div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-mono font-bold text-sm text-text group-hover:text-gold transition-colors">
            {project.title}
          </h3>
          <Code2 size={14} className="text-muted flex-shrink-0 mt-0.5" style={{ color: project.color + '80' }} />
        </div>
        <p className="font-mono text-xs text-muted leading-relaxed mb-4">{project.desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 border"
              style={{ color: project.color, borderColor: project.color + '60', background: project.color + '15' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

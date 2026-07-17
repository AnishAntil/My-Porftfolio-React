import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project, featured = false }) {
  const preview = project.thumbnail || project.images[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-80px' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.56, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-card overflow-hidden ${featured ? 'lg:grid lg:grid-cols-[1.1fr_0.9fr]' : ''}`}
      id={project.id}
    >
      <div className="project-media">
        <img src={preview} alt={`${project.title} screenshot`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
      </div>
      <div className="flex flex-col gap-5 p-6 md:p-8">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-accent">{project.type}</p>
          <h2 className="text-2xl font-black text-white">{project.title}</h2>
          <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => <span className="tech-badge" key={tech}>{tech}</span>)}
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <InfoBlock title="Features" items={project.features.slice(0, 4)} />
          <InfoBlock title="Challenge" text={project.challenges} />
          <InfoBlock title="Contribution" text={project.contribution} />
        </div>
        <div className="mt-auto flex flex-wrap gap-3">
          <a className="small-action" href={project.github} target="_blank" rel="noreferrer"><FaGithub size={17} /> GitHub</a>
          <a className={`small-action ${!project.live ? 'pointer-events-none opacity-50' : ''}`} href={project.live || '#'} target="_blank" rel="noreferrer"><ExternalLink size={17} /> Live Demo</a>
          <a className="small-action" href={`/projects#${project.id}`}><Layers size={17} /> Case Study</a>
        </div>
      </div>
    </motion.article>
  );
}

function InfoBlock({ title, items, text }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <h3 className="mb-3 text-sm font-bold text-white">{title}</h3>
      {items ? (
        <ul className="space-y-2 text-sm text-slate-300">
          {items.map((item) => <li key={item}>• {item}</li>)}
        </ul>
      ) : (
        <p className="line-clamp-5 text-sm leading-6 text-slate-300">{text}</p>
      )}
    </div>
  );
}

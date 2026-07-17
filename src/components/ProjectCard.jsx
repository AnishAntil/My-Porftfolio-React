import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project, featured = false }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = useMemo(() => (project.images?.length ? project.images : [project.thumbnail]), [project.images, project.thumbnail]);
  const hasGallery = images.length > 1;
  const moveImage = (direction) => {
    setActiveImage((current) => (current + direction + images.length) % images.length);
  };

  useEffect(() => {
    if (!hasGallery) return;
    const nextSources = [
      images[(activeImage + 1) % images.length],
      images[(activeImage - 1 + images.length) % images.length],
    ];
    nextSources.forEach((src) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = src;
    });
  }, [activeImage, hasGallery, images]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 54, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: '-80px' }}
      whileHover={{ y: -12, scale: 1.018 }}
      transition={{ duration: 0.86, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-card overflow-hidden ${featured ? 'lg:grid lg:grid-cols-[1.1fr_0.9fr]' : ''}`}
      id={project.id}
    >
      <div className="project-media">
        <motion.img
          key={images[activeImage]}
          src={images[activeImage]}
          alt={`${project.title} screenshot ${activeImage + 1}`}
          className="h-full w-full object-cover"
          loading={featured ? 'eager' : 'lazy'}
          fetchPriority={featured ? 'high' : 'auto'}
          decoding="async"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.44, ease: [0.16, 1, 0.3, 1] }}
        />
        {hasGallery && (
          <>
            <button type="button" className="project-gallery-btn prev" onClick={() => moveImage(-1)} aria-label={`Previous ${project.title} screenshot`}>
              <ChevronLeft size={18} />
            </button>
            <button type="button" className="project-gallery-btn next" onClick={() => moveImage(1)} aria-label={`Next ${project.title} screenshot`}>
              <ChevronRight size={18} />
            </button>
            <div className="project-gallery-dots">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  className={index === activeImage ? 'active' : ''}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show screenshot ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
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

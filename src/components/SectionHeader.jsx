import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-80px' }}
      transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
      className={`mx-auto mb-12 max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>}
      <h1 className="text-balance text-4xl font-black text-ink md:text-6xl">
        <span className="gradient-text">{title}</span>
      </h1>
      {description && <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p>}
    </motion.div>
  );
}

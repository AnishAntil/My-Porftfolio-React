import { Award, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { certificates } from '../data/profile.js';

export default function Certificates() {
  return (
    <PageTransition>
      <section className="section-shell">
        <SectionHeader eyebrow="Certificates" title="Proof of continued learning." description="A clean certificate gallery for recruiter scanning and interview conversation starters." />
        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <motion.div key={cert.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="glass-card p-7">
              <div className="flex items-start gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                  <Award />
                </div>
                <div>
                  <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-3 py-1 text-xs font-bold text-accent"><BadgeCheck size={14} /> {cert.issuer}</p>
                  <h2 className="text-2xl font-black text-white">{cert.title}</h2>
                  <p className="mt-3 leading-7 text-slate-400">{cert.area}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

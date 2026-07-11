import { useMemo, useState } from 'react';
import PageTransition from '../components/PageTransition.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { projects } from '../data/projects.js';

const filters = ['All', 'React', 'PHP', 'Firebase', 'UI/UX'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.technologies.some((tech) => tech.toLowerCase().includes(filter.toLowerCase()))), [filter]);

  return (
    <PageTransition>
      <section className="section-shell">
        <SectionHeader eyebrow="Projects" title="Case-study driven project portfolio." description="Each project includes real screenshots, technology badges, features, challenges, contributions, repository links, and demo actions." />
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {filters.map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-5 py-2 text-sm font-bold transition ${filter === item ? 'bg-primary text-white' : 'bg-white/[0.08] text-slate-300 hover:bg-white/[0.12]'}`}>
              {item}
            </button>
          ))}
        </div>
        <div className="grid gap-8">
          {filtered.map((project, index) => <ProjectCard key={project.id} project={project} featured={index < 2} />)}
        </div>
      </section>
    </PageTransition>
  );
}

import PageTransition from '../components/PageTransition.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import SkillCard from '../components/SkillCard.jsx';
import { skillCategories } from '../data/skills.js';

export default function Skills() {
  return (
    <PageTransition>
      <section className="section-shell">
        <SectionHeader eyebrow="Skills" title="Modern stack, practical depth." description="Animated skill cards grouped by frontend, backend, data, programming languages, and developer tools." />
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h2 className="mb-5 text-2xl font-black text-white">{category.name}</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

import { BriefcaseBusiness, GraduationCap, ShieldCheck } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { timeline } from '../data/profile.js';

export default function Experience() {
  return (
    <PageTransition>
      <section className="section-shell">
        <SectionHeader eyebrow="Experience" title="Training, internships, and applied learning." description="A focused timeline of education, internships, hackathon-style builds, and certification-oriented training." />
        <div className="grid gap-6 lg:grid-cols-3">
          <Highlight icon={BriefcaseBusiness} title="Internship" text="Frontend Developer Intern at CodeAlpha, building responsive UI workflows." />
          <Highlight icon={GraduationCap} title="Training" text="Infosys web development training across HTML, CSS, JavaScript, Java, and project delivery." />
          <Highlight icon={ShieldCheck} title="Certifications" text="Oracle, Infosys, Forage, and Cybersecurity learning tracks." />
        </div>
        <div className="mt-12 grid gap-5">
          {timeline.slice(0, 4).map((item) => (
            <div className="glass-card p-6" key={item.title}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-black text-white">{item.title}</h2>
                  <p className="font-semibold text-slate-300">{item.org}</p>
                </div>
                <span className="rounded-full bg-primary/15 px-4 py-2 text-sm font-bold text-accent">{item.date}</span>
              </div>
              <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

function Highlight({ icon: Icon, title, text }) {
  return (
    <div className="glass-card p-6">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary/15 text-accent"><Icon /></div>
      <h2 className="mt-5 text-xl font-black text-white">{title}</h2>
      <p className="mt-2 leading-7 text-slate-400">{text}</p>
    </div>
  );
}

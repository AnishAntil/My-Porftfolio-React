import { Download, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { ButtonLink } from '../components/Button.jsx';
import { profile } from '../data/profile.js';

export default function Resume() {
  return (
    <PageTransition>
      <section className="section-shell">
        <SectionHeader eyebrow="Resume" title="Resume preview and download." description="Recruiters can preview the PDF directly or download a copy for their hiring workflow." />
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          <ButtonLink href={profile.resume} download="Anish_Kumar_Resume.pdf"><Download size={18} /> Download PDF</ButtonLink>
          <ButtonLink href={profile.resume} target="_blank" variant="secondary"><ExternalLink size={18} /> Open Full Screen</ButtonLink>
        </div>
        <div className="glass-card overflow-hidden p-2">
          <object data={profile.resume} type="application/pdf" className="h-[78vh] w-full rounded-xl bg-white">
            <iframe title="Anish Kumar resume" src={profile.resume} className="h-[78vh] w-full rounded-xl bg-white" />
          </object>
        </div>
      </section>
    </PageTransition>
  );
}

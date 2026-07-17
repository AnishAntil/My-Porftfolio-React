import { motion } from 'framer-motion';
import { Award, GraduationCap, Target, Trophy } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { profile, timeline } from '../data/profile.js';

export default function About() {
  return (
    <PageTransition>
      <section className="section-shell">
        <SectionHeader eyebrow="About" title="Engineer mindset, product taste, and consistent execution." description="I focus on building interfaces that are clean enough for recruiters to trust and practical enough for users to understand quickly." />
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }} className="glass-card p-6">
            <img src={profile.photo} alt="Anish Kumar" className="aspect-[4/5] rounded-2xl object-cover" />
          </motion.div>
          <div className="grid gap-6">
            <Info icon={Target} title="Professional Summary" text="Full-stack oriented Computer Science student with hands-on experience in React, JavaScript, Firebase, PHP, MySQL, Java, and responsive UI design. I enjoy turning messy workflows into clear products." />
            <Info icon={GraduationCap} title="Education" text="Pursuing B.Tech in Computer Science Engineering at SRM University, Delhi NCR - Sonipat, Haryana, with coursework in data structures, algorithms, web development, databases, and cloud computing." />
            <Info icon={Award} title="Career Objective" text="To join a product-minded engineering team where I can ship reliable frontend experiences, grow into deeper full-stack ownership, and contribute to real user-facing systems." />
            <Info icon={Trophy} title="Achievements" text="Solved hundreds of LeetCode problems, completed Infosys training, participated in SRM BUILDS 5.0 X FINTECH, and built multiple portfolio-ready web applications." />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-black text-white">Timeline</h2>
          <div className="relative space-y-6 before:absolute before:left-5 before:top-2 before:h-full before:w-px before:bg-white/15">
            {timeline.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ delay: Math.min(index * 0.04, 0.14), duration: 0.52, ease: [0.16, 1, 0.3, 1] }} className="relative pl-14">
                <div className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border border-accent/50 bg-card text-accent">{index + 1}</div>
                <div className="glass-card p-6">
                  <p className="text-sm font-bold text-accent">{item.date}</p>
                  <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
                  <p className="font-semibold text-slate-300">{item.org}</p>
                  <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function Info({ icon: Icon, title, text }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="glass-card p-6">
      <div className="flex gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/20 text-accent"><Icon /></div>
        <div>
          <h3 className="text-xl font-black text-white">{title}</h3>
          <p className="mt-2 leading-7 text-slate-300">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}

import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Download, ExternalLink, Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useTypingText from '../hooks/useTypingText.js';
import { profile, timeline } from '../data/profile.js';
import { projects } from '../data/projects.js';
import { skillCategories } from '../data/skills.js';

const filters = ['All', 'Web Apps', 'Desktop', 'UI/UX'];
const sectionReveal = {
  hidden: { opacity: 0, y: 70, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Home() {
  const reduceMotion = useReducedMotion();
  const typed = useTypingText(['Full-Stack Developer', 'Web Developer', 'UI Designer', 'Computer Science Student']);
  const [filter, setFilter] = useState('All');
  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    if (filter === 'Desktop') return projects.filter((project) => project.title.includes('Notes') || project.title.includes('Break'));
    if (filter === 'UI/UX') return projects.filter((project) => project.technologies.some((tech) => tech.includes('UI')));
    return projects.filter((project) => !project.title.includes('Break'));
  }, [filter]);

  return (
    <main className="one-page-shell">
      <ScrollProgress />
      <FloatingWhatsApp />
      <section id="about" className="classic-hero">
        <ParticleField />
        <div className="classic-hero-inner">
          <motion.div initial={reduceMotion ? false : { opacity: 0, x: -70, rotate: -3 }} animate={{ opacity: 1, x: 0, rotate: -2 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="hero-photo-wrap">
            <div className="hero-photo-shape" />
            <img src={profile.photo} alt="Anish Kumar" fetchPriority="high" decoding="async" />
          </motion.div>

          <div className="classic-hero-copy">
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="classic-kicker">Hello, I'm</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="classic-name">Anish Kumar</motion.h1>
            <motion.h2 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="classic-role">
              {typed}<span>|</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }} className="classic-intro">
              Innovative Computer Science student with experience in building responsive web applications using modern technologies. Passionate about creating clean, efficient, and user-friendly digital experiences.
            </motion.p>

            <TerminalCard />

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }} className="classic-actions">
              <a href={profile.resume} download="Anish_Kumar_Resume.pdf" className="classic-btn primary"><Download size={18} /> Download Resume</a>
              <a href="#contact" className="classic-btn secondary"><Mail size={18} /> Let's Connect</a>
            </motion.div>
            <SocialRail />
            <LeetCodeMetrics />
          </div>
        </div>
        <a href="#skills" className="scroll-down" aria-label="Scroll to skills">
          <span className="mouse"><i /></span>
          Scroll Down
        </a>
      </section>

      <motion.section id="skills" className="classic-section" variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
        <SectionTitle title="Technical Skills" subtitle="💡 Click a skill card below to filter matching projects instantly!" />
        <div className="classic-skills">
          {skillCategories.map((category) => (
            <div key={category.name} className="classic-skill-group">
              <h3>{category.name}</h3>
              <div className="classic-skill-grid">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.button
                      type="button"
                      key={skill.name}
                      initial={{ opacity: 0, y: 50, rotateX: -18, scale: 0.78 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ delay: index * 0.045, duration: 0.55, type: 'spring', stiffness: 115 }}
                      whileHover={{ y: -14, rotate: -2, scale: 1.08 }}
                      className="classic-skill-card"
                    >
                      {skill.logo ? <img src={skill.logo} alt={skill.name} /> : <Icon />}
                      <span>{skill.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section id="projects" className="classic-section" variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
        <SectionTitle title="Featured Projects" />
        <div className="classic-filters">
          {filters.map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={filter === item ? 'active' : ''}>{item}</button>
          ))}
        </div>
        <div className="classic-project-grid">
          {filteredProjects.map((project, index) => <ClassicProjectCard key={project.id} project={project} index={index} />)}
        </div>
      </motion.section>

      <motion.section id="education" className="classic-section" variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
        <SectionTitle title="Education & Experience" />
        <div className="classic-timeline">
          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: index % 2 ? -140 : 140, rotate: index % 2 ? -3 : 3, scale: 0.88 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 90 }}
              className={`classic-timeline-item ${index % 2 ? 'left' : 'right'}`}
            >
              <span className="timeline-dot" />
              <div>
                <h3>{item.title}</h3>
                <h4>{item.org}</h4>
                <p className="date">{item.date.replace(' - ', ' - ')}</p>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section id="contact" className="classic-section" variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
        <SectionTitle title="Get In Touch" />
        <div className="classic-contact">
          <div className="classic-contact-info">
            <InfoCard icon={<Mail />} title="Email" text={profile.email} />
            <InfoCard icon={<MapPin />} title="Location" text={profile.location} />
            <SocialRail />
          </div>
          <form className="classic-form" onSubmit={(event) => event.preventDefault()}>
            <input placeholder="Your Name" aria-label="Your Name" />
            <input placeholder="Your Email" type="email" aria-label="Your Email" />
            <input placeholder="Subject" aria-label="Subject" />
            <textarea placeholder="Your Message" aria-label="Your Message" />
            <button type="submit">Send Message <Send size={20} /></button>
          </form>
        </div>
      </motion.section>
    </main>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return <div className="classic-scroll-progress" style={{ transform: `scaleX(${progress})` }} />;
}

function ParticleField() {
  return (
    <div className="particle-field" aria-hidden="true">
      {Array.from({ length: 24 }).map((_, index) => <span key={index} style={{ '--i': index }} />)}
    </div>
  );
}

function TerminalCard() {
  const [input, setInput] = useState('');
  const [lines, setLines] = useState([
    'Welcome to the interactive shell. Type help to see available commands. Hint: try typing dev on your keyboard anywhere!',
  ]);

  const commands = {
    help: 'Commands: help, about, skills, projects, contact, resume, clear',
    about: 'Anish Kumar — Computer Science student and full-stack developer building clean, responsive web applications.',
    skills: 'React, JavaScript, Tailwind CSS, Firebase, PHP, MySQL, Java, Python, Git, GitHub.',
    projects: 'Featured builds include SRMS, Break Out Ball Game, Advanced Notes, To-Do List, Learn Me, and Food Ordering.',
    contact: `Email: ${profile.email} | Location: ${profile.location}`,
    resume: 'Resume download is available through the Download Resume button above.',
    dev: 'Developer mode active. Smooth UI, real assets, animated sections, and recruiter-focused content loaded.',
  };

  const submit = (event) => {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;
    if (command === 'clear') {
      setLines([]);
      setInput('');
      return;
    }
    setLines((current) => [...current, `Anish@developer:~$ ${command}`, commands[command] || `Command not found: ${command}. Type help.`]);
    setInput('');
  };

  return (
    <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="terminal-card">
      <div className="terminal-head">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <p>bash — Anish@portfolio</p>
      </div>
      <div className="terminal-body">
        {lines.map((line, index) => (
          <p key={`${line}-${index}`} className={line.startsWith('Anish@developer') ? 'prompt-history' : ''}>{line}</p>
        ))}
        <form onSubmit={submit} className="terminal-input-line">
          <span className="prompt">Anish@developer:~$</span>
          <input value={input} onChange={(event) => setInput(event.target.value)} aria-label="Terminal input" autoComplete="off" />
        </form>
      </div>
    </motion.div>
  );
}

function SocialRail() {
  return (
    <div className="classic-social">
      <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
      <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
      <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
    </div>
  );
}

function LeetCodeMetrics() {
  const [stats, setStats] = useState({
    total: 667,
    easy: 173,
    medium: 358,
    hard: 136,
    status: 'Syncing live',
  });

  useEffect(() => {
    let ignore = false;

    const syncStats = async () => {
      const endpoints = [
        'https://leetcode-stats-api.herokuapp.com/AnishAntil',
        'https://leetcode-api-faisalshohag.vercel.app/AnishAntil',
      ];

      for (const endpoint of endpoints) {
        try {
          const response = await fetch(endpoint, { cache: 'no-store' });
          if (!response.ok) continue;
          const data = await response.json();
          const total = data.totalSolved ?? data.totalQuestionsSolved;
          const easy = data.easySolved ?? data.easyQuestionsSolved;
          const medium = data.mediumSolved ?? data.mediumQuestionsSolved;
          const hard = data.hardSolved ?? data.hardQuestionsSolved;
          if ([total, easy, medium, hard].every((value) => Number.isFinite(Number(value)))) {
            if (!ignore) {
              setStats({
                total: Number(total),
                easy: Number(easy),
                medium: Number(medium),
                hard: Number(hard),
                status: `Synced ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
              });
            }
            return;
          }
        } catch {
          // Try the next public API mirror, then keep the fallback values.
        }
      }

      if (!ignore) {
        setStats((current) => ({ ...current, status: 'Live sync retrying' }));
      }
    };

    syncStats();
    const interval = window.setInterval(syncStats, 60000);
    return () => {
      ignore = true;
      window.clearInterval(interval);
    };
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56 }} className="leetcode-card">
      <div className="leetcode-head">
        <div><SiLeetcode /> <span>LeetCode Metrics Engine</span></div>
        <a href={profile.socials.leetcode} target="_blank" rel="noreferrer">Live Profile <ExternalLink size={17} /></a>
      </div>
      <div className="leetcode-grid">
        <Metric label="Total Solved" value={stats.total} status={stats.status} />
        <Metric label="Easy" value={stats.easy} tone="easy" />
        <Metric label="Medium" value={stats.medium} tone="medium" />
        <Metric label="Hard" value={stats.hard} tone="hard" />
      </div>
    </motion.div>
  );
}

function Metric({ label, value, status, tone = '' }) {
  return (
    <div className={`metric ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      {status && <small>↻ {status}</small>}
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div initial={{ opacity: 0, y: 45, scale: 0.92 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.65, type: 'spring', stiffness: 105 }} className="classic-section-title">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </motion.div>
  );
}

function ClassicProjectCard({ project, index }) {
  const isMobile = useMediaQuery('(max-width: 760px)');

  return (
    <motion.article
      initial={{ opacity: 0, x: index % 2 ? 90 : -90, y: 55, rotate: index % 2 ? 3 : -3, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ delay: index * 0.045, duration: 0.7, type: 'spring', stiffness: 90 }}
      whileHover={{ y: -18, scale: 1.025, rotate: index % 2 ? -0.8 : 0.8 }}
      className="classic-project-card"
    >
      <div className="browser-bar"><span /><span /><span /></div>
      <div className="classic-project-media">
        <Swiper modules={[Navigation, Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={isMobile ? false : { delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }} loop={!isMobile} speed={isMobile ? 250 : 450}>
          {project.images.map((src) => (
            <SwiperSlide key={src}>
              <img src={src} alt={`${project.title} screenshot`} loading="lazy" decoding="async" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="classic-project-body">
        <h3>{project.title}</h3>
        <div className="project-underline" />
        <div className="classic-tags">{project.technologies.slice(0, 6).map((tech) => <span key={tech}>{tech}</span>)}</div>
        <p>{project.description}</p>
        <div className="classic-project-links">
          {project.live && <a href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={17} /> Live Demo</a>}
          <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
          <a href={`#${project.id}`}>▣ View Gallery</a>
        </div>
      </div>
    </motion.article>
  );
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [query]);

  return matches;
}

function FloatingWhatsApp() {
  return (
    <a className="floating-whatsapp" href="https://wa.me/917988252001" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <FaWhatsapp />
    </a>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="classic-info-card">
      <span>{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

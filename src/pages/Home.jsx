import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, ExternalLink, Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import useTypingText from '../hooks/useTypingText.js';
import { profile, timeline } from '../data/profile.js';
import { projects } from '../data/projects.js';
import { skillCategories } from '../data/skills.js';

const filters = ['All', 'Web Apps', 'Desktop', 'UI/UX'];
const smoothEase = [0.16, 1, 0.3, 1];
const sectionReveal = {
  hidden: { opacity: 0, y: 46, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Home() {
  const reduceMotion = useReducedMotion();
  const isMobile = useMediaQuery('(max-width: 760px)');
  const calmMotion = reduceMotion || isMobile;
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
          <motion.div initial={calmMotion ? false : { opacity: 0, x: -36, rotate: -1.2 }} animate={{ opacity: 1, x: 0, rotate: isMobile ? 0 : -1.2 }} transition={{ duration: calmMotion ? 0.22 : 0.8, ease: smoothEase }} className="hero-photo-wrap">
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

            <TerminalCard calmMotion={calmMotion} />

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }} className="classic-actions">
              <a href={profile.resume} download="Anish_Kumar_Resume.pdf" className="classic-btn primary"><Download size={18} /> Download Resume</a>
              <a href="#contact" className="classic-btn secondary"><Mail size={18} /> Let's Connect</a>
            </motion.div>
            <SocialRail />
            <LeetCodeMetrics calmMotion={calmMotion} />
          </div>
        </div>
        <a href="#skills" className="scroll-down" aria-label="Scroll to skills">
          <span className="mouse"><i /></span>
          Scroll Down
        </a>
      </section>

      <motion.section id="skills" className="classic-section" variants={sectionReveal} initial={calmMotion ? false : 'hidden'} whileInView="visible" viewport={{ once: false, amount: 0.16 }} transition={{ duration: calmMotion ? 0.22 : 0.72, ease: smoothEase }}>
        <SectionTitle title="Technical Skills" subtitle="💡 Click a skill card below to filter matching projects instantly!" calmMotion={calmMotion} />
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
                      initial={calmMotion ? false : { opacity: 0, y: 34, scale: 0.92 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: false, amount: 0.28 }}
                      transition={{ delay: calmMotion ? 0 : Math.min(index * 0.035, 0.24), duration: calmMotion ? 0.16 : 0.62, ease: smoothEase }}
                      whileHover={isMobile ? undefined : { y: -10, scale: 1.045 }}
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

      <motion.section id="projects" className="classic-section" variants={sectionReveal} initial={calmMotion ? false : 'hidden'} whileInView="visible" viewport={{ once: false, amount: 0.12 }} transition={{ duration: calmMotion ? 0.22 : 0.78, ease: smoothEase }}>
        <SectionTitle title="Featured Projects" calmMotion={calmMotion} />
        <div className="classic-filters">
          {filters.map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={filter === item ? 'active' : ''}>{item}</button>
          ))}
        </div>
        <div className="classic-project-grid">
          {filteredProjects.map((project, index) => <ClassicProjectCard key={project.id} project={project} index={index} />)}
        </div>
      </motion.section>

      <motion.section id="education" className="classic-section" variants={sectionReveal} initial={calmMotion ? false : 'hidden'} whileInView="visible" viewport={{ once: false, amount: 0.12 }} transition={{ duration: calmMotion ? 0.22 : 0.78, ease: smoothEase }}>
        <SectionTitle title="Education & Experience" calmMotion={calmMotion} />
        <div className="classic-timeline">
          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              initial={calmMotion ? false : { opacity: 0, x: index % 2 ? -46 : 46, y: 34, scale: 0.94 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: false, margin: '-90px' }}
              transition={{ delay: calmMotion ? 0 : Math.min(index * 0.065, 0.2), duration: calmMotion ? 0.18 : 0.82, ease: smoothEase }}
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

      <motion.section id="contact" className="classic-section" variants={sectionReveal} initial={calmMotion ? false : 'hidden'} whileInView="visible" viewport={{ once: false, amount: 0.15 }} transition={{ duration: calmMotion ? 0.22 : 0.78, ease: smoothEase }}>
        <SectionTitle title="Get In Touch" calmMotion={calmMotion} />
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
  const barRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${progress})`;
        }
        frame = 0;
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return <div ref={barRef} className="classic-scroll-progress" />;
}

function ParticleField() {
  return (
    <div className="particle-field" aria-hidden="true">
      {Array.from({ length: 24 }).map((_, index) => <span key={index} style={{ '--i': index }} />)}
    </div>
  );
}

function TerminalCard({ calmMotion = false }) {
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
    <motion.div initial={calmMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: calmMotion ? 0 : 0.34, duration: 0.58, ease: smoothEase }} className="terminal-card">
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

function LeetCodeMetrics({ calmMotion = false }) {
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
    <motion.div initial={calmMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: calmMotion ? 0 : 0.46, duration: 0.6, ease: smoothEase }} className="leetcode-card">
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

function SectionTitle({ title, subtitle, calmMotion = false }) {
  return (
    <motion.div initial={calmMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.45 }} transition={{ duration: calmMotion ? 0.18 : 0.58, ease: smoothEase }} className="classic-section-title">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </motion.div>
  );
}

function ClassicProjectCard({ project, index }) {
  const isMobile = useMediaQuery('(max-width: 760px)');
  const [activeImage, setActiveImage] = useState(0);
  const images = project.images?.length ? project.images : [project.thumbnail];
  const hasGallery = images.length > 1;

  const moveImage = (direction) => {
    setActiveImage((current) => (current + direction + images.length) % images.length);
  };

  return (
    <motion.article
      initial={isMobile ? false : { opacity: 0, x: index % 2 ? 44 : -44, y: 42, scale: 0.94 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: isMobile ? 0 : Math.min(index * 0.055, 0.22), duration: isMobile ? 0.18 : 0.88, ease: smoothEase }}
      whileHover={isMobile ? undefined : { y: -12, scale: 1.018 }}
      className="classic-project-card"
    >
      <div className="browser-bar"><span /><span /><span /></div>
      <div className="classic-project-media">
        <motion.img
          key={images[activeImage]}
          src={images[activeImage]}
          alt={`${project.title} screenshot ${activeImage + 1}`}
          loading="lazy"
          decoding="async"
          initial={isMobile ? false : { opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.42, ease: smoothEase }}
        />
        {hasGallery && (
          <>
            <button type="button" className="project-gallery-btn prev" onClick={() => moveImage(-1)} aria-label={`Previous ${project.title} screenshot`}>
              <ChevronLeft size={18} />
            </button>
            <button type="button" className="project-gallery-btn next" onClick={() => moveImage(1)} aria-label={`Next ${project.title} screenshot`}>
              <ChevronRight size={18} />
            </button>
            <div className="project-gallery-dots" aria-label={`${project.title} screenshots`}>
              {images.map((image, dotIndex) => (
                <button
                  type="button"
                  key={image}
                  className={dotIndex === activeImage ? 'active' : ''}
                  onClick={() => setActiveImage(dotIndex)}
                  aria-label={`Show screenshot ${dotIndex + 1}`}
                />
              ))}
            </div>
          </>
        )}
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

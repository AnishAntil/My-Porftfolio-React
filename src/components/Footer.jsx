import { ArrowUp, Code2, Layers, Mail, Terminal, GraduationCap, ShieldCheck } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

export default function Footer() {
  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="classic-footer">
      <div className="classic-footer-grid">
        <div>
          <Link to="/" className="classic-footer-logo">AK</Link>
          <p>Crafting clean, efficient, and user-centric web applications from the ground up. Let's build something exceptional.</p>
          <span className="system-pill"><ShieldCheck size={16} /> Systems Operational // 2026</span>
        </div>
        <div>
          <h3>Quick Navigation</h3>
          <a href="/#about"><Terminal size={18} /> About</a>
          <a href="/#skills"><Code2 size={18} /> Skills</a>
          <a href="/#projects"><Layers size={18} /> Projects</a>
          <a href="/#education"><GraduationCap size={18} /> Timeline</a>
          <a href="/#contact"><Mail size={18} /> Contact</a>
        </div>
        <div>
          <h3>Built With</h3>
          <div className="built-tags">
            <span>HTML5</span><span>CSS3</span><span>ES6+</span><span>React</span><span>Vercel</span>
          </div>
          <p className="secure-text">Secure Connection Enabled</p>
        </div>
      </div>
      <div className="classic-footer-bottom">
        <p>© 2026 Anish. Crafted with passion.</p>
        <div>
          <a href={profile.socials.github} target="_blank" rel="noreferrer">Open Source Core</a>
          <button onClick={goTop} aria-label="Back to top"><ArrowUp /></button>
        </div>
      </div>
    </footer>
  );
}

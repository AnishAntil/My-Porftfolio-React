import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? 'text-ink after:scale-x-100' : 'text-slate-300 after:scale-x-0 hover:text-ink'}`;
  const anchorHref = (hash) => (isHome ? hash : `/${hash}`);
  const scrollToSection = (hash) => {
    const target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleAnchorClick = (event, hash) => {
    event.preventDefault();
    setOpen(false);

    if (!isHome) {
      navigate(`/${hash}`);
      window.setTimeout(() => scrollToSection(hash), 120);
      return;
    }

    window.history.pushState(null, '', hash);
    window.requestAnimationFrame(() => scrollToSection(hash));
  };

  return (
    <header className="classic-navbar fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0c1020]/82 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="classic-logo">AK</span>
          <span className="sr-only">{profile.name}</span>
        </NavLink>

        <div className="hidden items-center gap-7 lg:flex">
          {isHome ? links.map(([label, hash]) => (
            <a key={hash} href={hash} className="nav-link text-slate-100 after:scale-x-0 hover:text-white">
              {label}
            </a>
          )) : (
            <>
              <NavLink to="/" className={linkClass}>Home</NavLink>
              {['Skills', 'Projects', 'Experience', 'Certificates', 'Resume', 'Contact'].map((label) => (
                <NavLink key={label} to={`/${label.toLowerCase()}`} className={linkClass}>{label}</NavLink>
              ))}
            </>
          )}
        </div>
        <div className="hidden items-center gap-3 font-mono text-sm font-bold uppercase tracking-[0.22em] text-teal-300 lg:flex">
          <span className="h-2.5 w-2.5 rounded-full bg-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.9)]" /> Secure Shell
        </div>

        <button className="icon-button lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-night/95 px-4 pb-5 lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2 pt-3">
              {links.map(([label, hash]) => (
                <a key={hash} href={anchorHref(hash)} onClick={(event) => handleAnchorClick(event, hash)} className="rounded-xl px-4 py-3 text-slate-200 hover:bg-white/[0.08]">
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

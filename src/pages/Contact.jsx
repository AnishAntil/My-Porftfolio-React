import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import PageTransition from '../components/PageTransition.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { profile } from '../data/profile.js';

const initial = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('');

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const submit = async (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.includes('@') || form.message.trim().length < 10) {
      setStatus('Please enter a valid name, email, and message with at least 10 characters.');
      return;
    }

    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!service || !template || !key) {
      setStatus('EmailJS is ready in code. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to enable sending.');
      return;
    }

    try {
      await emailjs.send(service, template, form, key);
      setForm(initial);
      setStatus('Message sent successfully. Thank you for reaching out.');
    } catch {
      setStatus('Message could not be sent right now. Please use the email link instead.');
    }
  };

  return (
    <PageTransition>
      <section className="section-shell">
        <SectionHeader eyebrow="Contact" title="Let’s build something useful." description="For internships, freelance builds, collaboration, or recruiter conversations, this is the fastest way to reach me." />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <ContactItem icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactItem icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replaceAll(' ', '')}`} />
            <ContactItem icon={MapPin} label="Location" value={profile.location} />
            <div className="glass-card p-6">
              <h2 className="mb-4 text-xl font-black text-white">Social</h2>
              <div className="flex gap-3">
                <a className="icon-button" href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={18} /></a>
                <a className="icon-button" href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
                <a className="icon-button" href={profile.socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><SiLeetcode size={18} /></a>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="glass-card grid gap-5 p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <Field name="name" label="Name" value={form.name} onChange={update} />
              <Field name="email" label="Email" value={form.email} onChange={update} type="email" />
            </div>
            <Field name="subject" label="Subject" value={form.subject} onChange={update} />
            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-300">Message</span>
              <textarea name="message" value={form.message} onChange={update} rows="7" className="form-field resize-none" placeholder="Tell me about the role, project, or opportunity..." />
            </label>
            {status && <p className="rounded-xl border border-accent/30 bg-accent/10 p-3 text-sm text-slate-200">{status}</p>}
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white shadow-glow transition hover:bg-violet-500">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({ name, label, value, onChange, type = 'text' }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-bold text-slate-300">{label}</span>
      <input name={name} type={type} value={value} onChange={onChange} className="form-field" placeholder={label} />
    </label>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="glass-card flex gap-4 p-5 transition hover:border-accent/50">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/20 text-accent"><Icon /></div>
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p className="font-bold text-white">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

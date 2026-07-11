import { image, resumePdf } from '../utils/assets';

export const profile = {
  name: 'Anish Kumar',
  title: 'Full Stack Developer',
  location: 'Sonipat, Haryana, India',
  phone: '+91 86075 99335',
  email: 'anishantil01@gmail.com',
  photo: image('PROFILEP-mobile.jpg'),
  resume: resumePdf,
  intro:
    'Computer Science Engineering student building responsive web applications, polished interfaces, and practical full-stack systems with React, Firebase, MySQL, Java, and modern frontend tooling.',
  socials: {
    github: 'https://github.com/AnishAntil',
    linkedin: 'https://www.linkedin.com/in/anish-kumar-57a538356/',
    leetcode: 'https://leetcode.com/u/AnishAntil/',
    instagram: 'https://www.instagram.com/anish_antil/',
  },
};

export const timeline = [
  {
    title: 'B.Tech in Computer Science Engineering',
    org: 'SRM University, Delhi NCR - Sonipat, Haryana',
    date: '2022 - 2026',
    description: 'Studying data structures, algorithms, web development, cloud computing, databases, and software engineering fundamentals.',
  },
  {
    title: 'Frontend Developer Intern',
    org: 'CodeAlpha',
    date: 'Aug 2024 - Sep 2024',
    description: 'Built responsive web interfaces, improved UI flows, and collaborated in a remote development workflow with agile delivery practices.',
  },
  {
    title: 'SRM BUILDS 5.0 X FINTECH',
    org: 'CIIE, SRM University',
    date: 'Jul 2024',
    description: 'Led a team through a 24-hour build sprint to create a fintech solution using Next.js and Firebase.',
  },
  {
    title: 'Web Development Training',
    org: 'Infosys',
    date: 'Jul 2024 - Aug 2024',
    description: 'Completed hands-on training in HTML, CSS, JavaScript, Java, and full-stack application development practices.',
  },
  {
    title: 'CBSE Senior Secondary',
    org: 'South Point Public School',
    date: '2021 - 2022',
    description: 'Scored 86.4% with a focus on analytical and technical foundations.',
  },
];

export const certificates = [
  { title: 'Oracle Certification', issuer: 'Oracle', area: 'Database and enterprise technology fundamentals' },
  { title: 'Infosys Web Development Training', issuer: 'Infosys', area: 'HTML, CSS, JavaScript, Java, and full-stack basics' },
  { title: 'Forage Virtual Experience', issuer: 'Forage', area: 'Industry simulation and professional problem solving' },
  { title: 'Cybersecurity Fundamentals', issuer: 'Cybersecurity', area: 'Security awareness, safe systems, and web risk basics' },
];

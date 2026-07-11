import { image } from '../utils/assets';
import { FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiPhp } from 'react-icons/si';

export const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML', level: 92, logo: image('htmllogo.png') },
      { name: 'CSS', level: 88, logo: image('csslogo.png') },
      { name: 'JavaScript', level: 86, logo: image('jslogo.png') },
      { name: 'React', level: 84, logo: image('react.png') },
      { name: 'Next.js', level: 78, logo: image('nextjslogo.png') },
      { name: 'Tailwind CSS', level: 88, logo: image('taillogo.png') },
    ],
  },
  {
    name: 'Backend & Data',
    skills: [
      { name: 'PHP', level: 76, icon: SiPhp },
      { name: 'Firebase', level: 80, logo: image('firebase.png') },
      { name: 'MySQL', level: 82, logo: image('mysqllogo.png') },
      { name: 'AWS', level: 64, logo: image('awslogo.png') },
    ],
  },
  {
    name: 'Programming & Tools',
    skills: [
      { name: 'Java', level: 84, logo: image('javalogo.png') },
      { name: 'Python', level: 78, logo: image('pythonlogo.webp') },
      { name: 'C', level: 72, logo: image('clogo.png') },
      { name: 'Git', level: 82, icon: FaGitAlt },
      { name: 'GitHub', level: 84, icon: FaGithub },
      { name: 'LeetCode', level: 86, logo: image('leet.webp') },
    ],
  },
];

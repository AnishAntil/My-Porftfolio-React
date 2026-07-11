import { motion } from 'framer-motion';

export default function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass-card p-5"
    >
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white p-2">
          {skill.logo ? <img src={skill.logo} alt={skill.name} className="max-h-10 max-w-10 object-contain" /> : <Icon className="text-primary" size={34} />}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-white">{skill.name}</h3>
          <p className="text-sm text-slate-400">{skill.level}% proficiency</p>
        </div>
      </div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
      </div>
    </motion.div>
  );
}

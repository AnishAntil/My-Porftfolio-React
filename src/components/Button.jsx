import { Link } from 'react-router-dom';

const base = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-night';

export function ButtonLink({ to, href, children, variant = 'primary', download, target }) {
  const classes =
    variant === 'primary'
      ? `${base} bg-primary text-white shadow-glow hover:-translate-y-0.5 hover:bg-violet-500`
      : `${base} border border-white/15 bg-white/[0.08] text-ink hover:-translate-y-0.5 hover:border-accent/60 hover:bg-white/[0.12]`;

  if (href) {
    return (
      <a className={classes} href={href} download={download} target={target} rel={target ? 'noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  );
}

import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition.jsx';

export default function NotFound() {
  return (
    <PageTransition>
      <section className="grid min-h-[60vh] place-items-center px-4 text-center">
        <div>
          <p className="text-8xl font-black gradient-text">404</p>
          <h1 className="mt-4 text-3xl font-black text-white">Page not found</h1>
          <p className="mt-3 text-slate-400">This route does not exist in the portfolio.</p>
          <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white"><Home size={18} /> Back Home</Link>
        </div>
      </section>
    </PageTransition>
  );
}

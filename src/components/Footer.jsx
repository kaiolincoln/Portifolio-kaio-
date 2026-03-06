import React from 'react';
import useInView from '../hooks/useInView.jsx';

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <footer
      ref={ref}
      className={`py-8 px-4 bg-slate-900 border-t border-slate-800 transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="max-w-6xl mx-auto text-center text-gray-700 dark:text-gray-400">
        <p>© 2025 Kaio Lincoln Moreira Rodrigues. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}




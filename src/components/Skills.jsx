import { Code } from 'lucide-react';
import useInView from '../hooks/useInView.jsx';

const categories = { frontend: 'Frontend', backend: 'Backend', tools: 'Qualidade e ferramentas' };

export default function Skills({ skills }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <section id="habilidades" ref={ref} className={`py-20 px-4 bg-slate-100/80 dark:bg-slate-900/50 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Habilidades na prática</h2>
        <p className="text-center text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-12">Tecnologias aplicadas em projetos, com exemplos para explorar no código.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, title]) => (
            <div key={category} className="bg-white/70 dark:bg-slate-800/50 rounded-2xl p-6 shadow-xl">
              <h3 className="flex items-center gap-3 text-xl font-semibold mb-6"><Code aria-hidden="true" className="text-cyan-700 dark:text-cyan-300 shrink-0" size={24} />{title}</h3>
              <ul className="space-y-6">
                {skills[category].map(skill => (
                  <li key={skill.name}>
                    <h4 className="font-semibold mb-2">{skill.name}</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">{skill.evidence}</p>
                    <a href={skill.href} target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-cyan-800 dark:text-cyan-300 underline underline-offset-4" aria-label={`Ver aplicação de ${skill.name} no código`}>Ver no código →</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

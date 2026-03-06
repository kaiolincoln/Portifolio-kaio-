import React, { useState, useEffect } from 'react';
import { Code } from 'lucide-react';
import useInView from '../hooks/useInView.jsx';

// small helper to convert level to a percentage width
const levelWidth = (level) => {
  switch (level) {
    case 'Avançado':
      return '90%';
    case 'Intermediário':
      return '70%';
    default:
      return '40%';
  }
};

export default function Skills({ skills }) {
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    // trigger bar animation on mount and when section enters view
    if (inView) setMounted(true);
  }, [inView]);

  return (
    <section
      id="habilidades"
      ref={ref}
      className={`py-20 px-4 bg-slate-900/50 transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Habilidades Técnicas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['frontend', 'backend', 'tools'].map((category) => (
            <div key={category} className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <div className="flex items-center mb-4">
                <Code className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold capitalize">
                  {category === 'tools' ? 'Ferramentas' : category}
                </h3>
              </div>
              <ul>
                {skills[category].map((skill, idx) => (
                  <li key={idx} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-black dark:text-gray-300">{skill.name}</span>
                      <span className="text-cyan-600 dark:text-cyan-400 text-sm font-medium">{skill.level}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-in-out"
                        style={{ width: mounted ? levelWidth(skill.level) : '0%' }}
                        title={skill.level}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Habilidades Comportamentais</h3>
          <div className="flex flex-wrap justify-center gap-3 ">
            {['Trabalho em Equipe', 'Proatividade', 'Adaptabilidade', 'Resolução de Problemas', 'Comunicação Eficaz', 'Aprendizado Contínuo'].map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm hover:bg-slate-700 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




import React from 'react';
import { Code } from 'lucide-react';

export default function Skills({ skills }) {
  return (
    <section id="habilidades" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Habilidades Técnicas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="flex items-center mb-4">
              <Code className="text-cyan-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            {skills.frontend.map((skill, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-cyan-400 text-sm">{skill.level}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                    style={{ width: skill.level === 'Avançado' ? '90%' : skill.level === 'Intermediário' ? '70%' : '40%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="flex items-center mb-4">
              <Code className="text-cyan-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            {skills.backend.map((skill, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-cyan-400 text-sm">{skill.level}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                    style={{ width: skill.level === 'Avançado' ? '90%' : skill.level === 'Intermediário' ? '70%' : '40%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="flex items-center mb-4">
              <Code className="text-cyan-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Ferramentas</h3>
            </div>
            {skills.tools.map((skill, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-cyan-400 text-sm">{skill.level}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                    style={{ width: skill.level === 'Avançado' ? '90%' : skill.level === 'Intermediário' ? '70%' : '40%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Habilidades Comportamentais</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Trabalho em Equipe', 'Proatividade', 'Adaptabilidade', 'Resolução de Problemas', 'Comunicação Eficaz', 'Aprendizado Contínuo'].map((skill, idx) => (
              <span key={idx} className="px-4 py-2 bg-slate-800 rounded-full text-sm hover:bg-slate-700 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




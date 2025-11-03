import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experiência & Formação</h2>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Briefcase className="text-cyan-400 mr-3" size={28} />
            <h3 className="text-2xl font-semibold">Experiência Profissional</h3>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-semibold text-cyan-400">Assistente de Tecnologia</h4>
                <p className="text-gray-400">IA Sonia</p>
              </div>
              <span className="text-gray-400 text-sm">Ago/2023 - Ago/2024</span>
            </div>
            <p className="text-gray-300 mb-4">
              Responsável por prestar suporte técnico, realizar manutenção de equipamentos e auxiliar na otimização de processos tecnológicos.
            </p>
            <h5 className="font-semibold mb-2">Principais Conquistas:</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">✓</span>
                <span className="text-gray-300">Otimização do processo de instalação de softwares</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">✓</span>
                <span className="text-gray-300">Organização do inventário de TI e controle de ativos</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">✓</span>
                <span className="text-gray-300">Resolução de problemas técnicos complexos</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-6">
            <GraduationCap className="text-cyan-400 mr-3" size={28} />
            <h3 className="text-2xl font-semibold">Formação Acadêmica</h3>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-xl font-semibold text-cyan-400">Engenharia de Computação</h4>
                <p className="text-gray-400">Fainor-BA</p>
              </div>
              <span className="text-gray-400 text-sm">Concluído em 2025</span>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <Award className="text-cyan-400 mr-3" size={24} />
            <h4 className="text-xl font-semibold">Cursos Complementares</h4>
          </div>
          <div className="space-y-3">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4">
              <p className="text-gray-300">Desenvolvimento Web Completo - Udemy <span className="text-cyan-400 text-sm ml-2">✓ Completo</span></p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4">
              <p className="text-gray-300">Bootcamp SaaS para Barbearias - Full Stack Club <span className="text-cyan-400 text-sm ml-2">✓ Completo</span></p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4">
              <p className="text-gray-300">Curso de Oratoria - Sest Senat <span className="text-cyan-400 text-sm ml-2">✓ Completo</span></p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4">
              <p className="text-gray-300">Curso ingles basico - Sest Senat <span className="text-cyan-400 text-sm ml-2">✓ Completo</span></p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4">
              <p className="text-gray-300">Imersao dev Agentes de IA google - Alura <span className="text-cyan-400 text-sm ml-2">✓ Completo</span></p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4">
              <p className="text-gray-300">Curso Sujeito Programador <span className="text-yellow-400 text-sm ml-2">⏳ Cursando</span></p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4">
              <p className="text-gray-300">Curso De Ingles - Fernando Idiomas <span className="text-yellow-400 text-sm ml-2">⏳ Cursando</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Sobre Mim</h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Desenvolvedor full-stack Jr recém-formado em Engenharia de Computação com sólida base em desenvolvimento web. 
            Tenho experiência prática em suporte técnico e desenvolvimento de software, com foco especial em criar 
            interfaces responsivas e eficientes utilizando tecnologias modernas.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Sou proativo, adaptável e tenho grande facilidade para trabalho em equipe. Estou buscando oportunidades 
            para aplicar e expandir meus conhecimentos em ambientes colaborativos e projetos desafiadores.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="flex items-center space-x-3">
              <MapPin className="text-cyan-400" size={20} />
              <span className="text-gray-300">Governador Valadares, MG</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-cyan-400" size={20} />
              <span className="text-gray-300">(15) 9 9718-6612</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-cyan-400" size={20} />
              <span className="text-gray-300 text-sm">Kaiolincoln2001@hotmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

// 1. Importe a imagem do caminho correto
import profileImage from '@/assets/Perfil.jpg';

export default function Hero({ onContactClick }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold mb-6">
            <img
              // 2. Use a variável importada aqui
              src={profileImage}
              alt="Kaio Lincoln"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Kaio Lincoln
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Desenvolvedor Web Full-Stack Jr
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Engenheiro de Computação especializado em criar interfaces web modernas e eficientes. 
            Apaixonado por transformar ideias em soluções digitais.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://github.com/kaiolincoln" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kaio-moreira-02470534b" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:Kaiolincoln2001@hotmail.com" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <button
            onClick={onContactClick}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold transition-all transform hover:scale-105"
          >
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
   );
}





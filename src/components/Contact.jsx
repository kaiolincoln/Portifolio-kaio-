import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Vamos Conversar?</h2>
        <p className="text-xl text-gray-300 mb-12">
          Estou sempre aberto a novas oportunidades e colaborações. Entre em contato!
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a href="mailto:Kaiolincoln2001@hotmail.com" className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-colors">
            <Mail className="mx-auto mb-4 text-cyan-400" size={32} />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">Kaiolincoln2001@hotmail.com</p>
          </a>
          <a href="https://www.linkedin.com/in/kaio-moreira-02470534b" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-colors">
            <Linkedin className="mx-auto mb-4 text-cyan-400" size={32} />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Kaio Moreira</p>
          </a>
          <a href="https://github.com/kaiolincoln" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-colors">
            <Github className="mx-auto mb-4 text-cyan-400" size={32} />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm">@kaiolincoln</p>
          </a>
        </div>
      </div>
    </section>
  );
}




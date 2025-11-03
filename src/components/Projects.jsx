import React from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects.js';
import Carousel from './Carousel.jsx';
import DalyGamesImg1 from '../assets/DalyGames.png';
import DalyGamesImg2 from '../assets/DalyGames-profile.png';
import DalyGamesImg3 from '../assets/DalyGames-2.png';
import DevLinkImg1 from '../assets/Dev-Link.png';
import DevLinkImg2 from '../assets/Dev-Link-2.png';
import DevLinkImg3 from '../assets/Dev-Link-3.png';
import SaaSImg0 from '../assets/SaaS.png';
import SaaSImg1 from '../assets/SaaS-barber.png';
import SaaSImg2 from '../assets/SaaS-barber-2.png';
import SaaSImg3 from '../assets/SaaS-barber-3.png';
import SaaSImg4 from '../assets/SaaS-barber-4.png';
import SaaSImg5 from '../assets/SaaS-barber-5.png';
import SaaSImg6 from '../assets/SaaS-barber-6.png';

const imagesBySlug = {
  'daly-games': [DalyGamesImg1, DalyGamesImg2, DalyGamesImg3],
  'saas-para-barbearia': [SaaSImg1, SaaSImg2, SaaSImg3, SaaSImg4, SaaSImg5, SaaSImg6],
  'devlink': [DevLinkImg1, DevLinkImg2, DevLinkImg3],
};

export default function Projects() {
  return (
    <section id="projetos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projetos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.slug} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <Carousel
                images={imagesBySlug[project.slug] || project.images}
                alt={project.title}
              />
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techs.map((t) => (
                  <span key={t} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-full inline-flex items-center gap-2">
                    <Github size={18} />
                    <span>Repositório</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full inline-flex items-center gap-2">
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-dashed border-slate-700 flex items-center justify-center">
            <div className="text-center">
              <Code size={48} className="mx-auto mb-4 text-slate-600" />
              <p className="text-gray-500">Mais projetos em breve...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




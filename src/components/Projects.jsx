import React, { useState } from 'react';
import useInView from '../hooks/useInView.jsx';
import { Code, Github } from 'lucide-react';
import { projects } from '../data/projects.js';
import Carousel from './Carousel.jsx';
import ProjectDetail from './ProjectDetail.jsx';

import DalyGamesImg1 from '../assets/DalyGames.png';
import DalyGamesImg2 from '../assets/DalyGames-profile.png';
import DalyGamesImg3 from '../assets/DalyGames-2.png';
import DevLinkImg1 from '../assets/Dev-Link.png';
import DevLinkImg2 from '../assets/Dev-Link-2.png';
import DevLinkImg3 from '../assets/Dev-Link-3.png';
import SaaSImg1 from '../assets/SaaS-barber.png';
import SaaSImg2 from '../assets/SaaS-barber-2.png';
import SaaSImg3 from '../assets/SaaS-barber-3.png';
import SaaSImg4 from '../assets/SaaS-barber-4.png';
import SaaSImg5 from '../assets/SaaS-barber-5.png';
import SaaSImg6 from '../assets/SaaS-barber-6.png';
import AthenaImg1 from '../assets/Athena.png';
import DevCurrencyImg1 from '../assets/Devcurrency-1.png';
import DevCurrencyImg2 from '../assets/Devcurrency-2.png';
import SystemPizzaCategory from '../assets/SystemPizzaCategory.png';
import SystemPizzaProduct from '../assets/SystemPizzaProduct.png';
import SystemPizzaGarsom from '../assets/SystemPizzaGarsom.png';
import SystemPizzaGarsom2 from '../assets/SystemPizzaGarsom2.png';
import SystemPizzaGarsom3 from '../assets/SystemPizzaGarsom3.png';
import SystemPizzapedidos from '../assets/SystemPizzapedidos.png';
import SystemPizzaLogin from '../assets/SystemPizzaLogin.png';
import Contract1 from '../assets/Contract1.png';
import Contract2 from '../assets/Contract2.png';
import Contract3 from '../assets/Contract3.png';
import Contract4 from '../assets/Contract4.png';
import Contract5 from '../assets/Contract5.png';
import Contract6 from '../assets/Contract6.png';

const imagesBySlug = {
  'daly-games': [DalyGamesImg1, DalyGamesImg2, DalyGamesImg3],
  'saas-para-barbearia': [SaaSImg1, SaaSImg2, SaaSImg3, SaaSImg4, SaaSImg5, SaaSImg6],
  'devlink': [DevLinkImg1, DevLinkImg2, DevLinkImg3],
  'project-athena': [AthenaImg1],
  'DevCurrency': [DevCurrencyImg1, DevCurrencyImg2],
  'SystemPizza': [SystemPizzaCategory, SystemPizzaProduct, SystemPizzaGarsom, SystemPizzaGarsom2, SystemPizzaGarsom3, SystemPizzapedidos, SystemPizzaLogin],
  'Contact': [Contract1, Contract2, Contract3, Contract4, Contract5, Contract6],
};

// Separated card so each can call useInView at the top level (hooks rule)
function ProjectCard({ project, onOpen }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const images = imagesBySlug[project.slug] || project.images;

  return (
    <div
      ref={ref}
      className={`group relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl
        transition-all duration-500 ease-out cursor-pointer
        hover:scale-[1.03] hover:shadow-2xl hover:ring-2 hover:ring-cyan-500/40
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      onClick={() => onOpen(project, images)}
    >
      {/* Carousel */}
      <div className="rounded-t-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <Carousel images={images} alt={project.title} />
      </div>

      <div className="p-6">
        {/* Title */}
        <h3 className="text-2xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        {/* Short description — clamp to 3 lines */}
        <p className="text-black dark:text-gray-300 mb-4 text-sm line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Techs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techs.map((t) => (
            <span key={t} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 bg-slate-500 hover:bg-slate-700 rounded-full inline-flex items-center gap-2 text-sm transition-colors hover:scale-105 transform duration-200"
            >
              <Github size={16} />
              Repositório
            </a>
          )}

          {/* "Ver detalhes" hint */}
          <span className="ml-auto self-center text-xs text-slate-400 group-hover:text-cyan-400 transition-colors">
            Clique para detalhes →
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null); // { project, images }

  return (
    <section id="projetos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projetos</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpen={(p, imgs) => setSelected({ project: p, images: imgs })}
            />
          ))}

          {/* Coming soon placeholder */}
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-dashed border-slate-700 flex items-center justify-center">
            <div className="text-center">
              <Code size={48} className="mx-auto mb-4 text-slate-600" />
              <p className="text-gray-500">Mais projetos em breve...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <ProjectDetail
          project={selected.project}
          images={selected.images}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
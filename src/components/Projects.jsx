import React, { useState, useMemo, useCallback } from 'react';
import useInView from '../hooks/useInView.jsx';
import { Code, Github } from 'lucide-react';
import { projects } from '../data/projects.js';
import Carousel from './Carousel.jsx';
import ProjectDetail from './ProjectDetail.jsx';


const allTechs = ['Todos', ...Array.from(
  new Set(projects.flatMap((p) => p.techs.map((t) => t.trim())))
).sort()];

function ProjectCard({ project, onOpen }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const images = project.images;

  return (
    <article
      ref={ref}
      className={`group relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl
        transition-all duration-500 ease-out cursor-pointer
        hover:scale-[1.03] hover:shadow-2xl hover:ring-2 hover:ring-cyan-500/40
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="rounded-t-2xl overflow-hidden">
        <Carousel images={images} alt={project.title} />
      </div>

      <div className="p-6">
        {project.featured && <p className="text-sm font-semibold text-cyan-800 dark:text-cyan-300 mb-2">Projeto principal</p>}
        <h3 className="text-2xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
          <button type="button" onClick={() => onOpen(project, images)} aria-haspopup="dialog" className="text-left">{project.title}</button>
        </h3>

        <p className="text-black dark:text-gray-300 mb-4 text-sm line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techs.map((t) => (
            <span key={t} className="px-3 py-1 bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-700 text-white hover:bg-slate-600 rounded-full inline-flex items-center gap-2 text-sm transition-colors hover:scale-105 transform duration-200"
            >
              <Github size={16} />
              Repositório
            </a>
          )}
          {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-800 dark:text-cyan-300 underline">Demo ao vivo</a>}
          <button type="button" onClick={() => onOpen(project, images)} aria-haspopup="dialog" aria-label={`Ver detalhes de ${project.title}`} className="text-sm text-cyan-800 dark:text-cyan-300 underline">Ver detalhes →</button>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [selected, setSelected]     = useState(null);
  const [activeTech, setActiveTech] = useState('Todos');
  const closeDetail = useCallback(() => setSelected(null), []);

  const filtered = useMemo(() =>
    activeTech === 'Todos'
      ? projects
      : projects.filter((p) =>
          p.techs.some((t) => t.trim().toLowerCase() === activeTech.toLowerCase())
        ),
    [activeTech]
  );

  return (
    <section id="projetos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Projetos</h2>

        {/* Tech filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allTechs.map((tech) => (
            <button
              key={tech}
              aria-pressed={activeTech === tech}
              onClick={() => setActiveTech(tech)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
                ${activeTech === tech
                  ? 'bg-cyan-500 border-cyan-500 text-slate-900 scale-105 shadow-md shadow-cyan-500/30'
                  : 'border-slate-500 text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-400'
                }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpen={(p, imgs) => setSelected({ project: p, images: imgs })}
            />
          ))}

          {activeTech === 'Todos' && (
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-dashed border-slate-700 flex items-center justify-center">
              <div className="text-center">
                <Code size={48} className="mx-auto mb-4 text-slate-600" />
                <p className="text-gray-500">Mais projetos em breve...</p>
              </div>
            </div>
          )}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            <Code size={40} className="mx-auto mb-4 opacity-40" />
            <p>Nenhum projeto encontrado com essa tecnologia.</p>
          </div>
        )}
      </div>

      {selected && (
        <ProjectDetail
          project={selected.project}
          images={selected.images}
          onClose={closeDetail}
        />
      )}
    </section>
  );
}
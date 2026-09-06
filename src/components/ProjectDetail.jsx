import React, { useEffect, useRef, useCallback } from 'react';
import { X, Github } from 'lucide-react';
import Carousel from './Carousel.jsx';


export default function ProjectDetail({ project, images, onClose }) {
  const dialogRef = useRef(null);
  const restoreFocus = useRef(null);
  const close = useCallback(() => { dialogRef.current.close(); onClose(); }, [onClose]);
  const detail = project;

  useEffect(() => {
    const dialog = dialogRef.current;
    restoreFocus.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    dialog.querySelector('button')?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      restoreFocus.current?.focus();
    };
  }, []);

  const trapFocus = (event) => {
    if (event.key !== 'Tab') return;
    const elements = [...dialogRef.current.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]')];
    const first = elements[0];
    const last = elements.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  return (
    <dialog ref={dialogRef} aria-labelledby="project-title" aria-modal="true"
      onCancel={(event) => { event.preventDefault(); close(); }}
      onKeyDown={trapFocus}
      onClick={(event) => {
        if (event.target !== dialogRef.current) return;
        const rect = dialogRef.current.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-3xl max-h-[90vh] rounded-3xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-0 shadow-2xl">

      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) } to { opacity: 1; transform: translateY(0) } }
        .detail-card { animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hl-item { transition: background 0.2s, padding-left 0.2s; }
        .hl-item:hover { background: rgba(6,182,212,0.12); padding-left: 1rem; }
      `}</style>

      <div className="detail-card relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-700/60">

        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800 hover:bg-red-500/80 transition-colors border border-slate-600"
          aria-label="Fechar"
        >
          <X size={18} className="text-slate-300" />
        </button>

        {/* Carousel */}
        <div className="rounded-t-3xl overflow-hidden">
          <Carousel images={images} alt={project.title} />
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">

          {/* Title + techs */}
          <div>
            <h2 id="project-title" className="text-3xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((t) => (
                <span key={t} className="px-3 py-1 bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 rounded-full text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Sobre o projeto</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {detail.longDescription || project.shortDescription}
            </p>
          </div>

          {project.caseStudy && <div className="space-y-4">{Object.entries(project.caseStudy).map(([label, text]) => <section key={label}><h3 className="font-semibold mb-2">{label}</h3><p className="text-slate-700 dark:text-slate-300 leading-relaxed">{text}</p></section>)}</div>}
          {project.demoUrl && <a className="inline-block rounded-lg bg-cyan-700 text-white px-4 py-3" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Abrir demonstração de {project.title}</a>}
          {/* Highlights */}
          {detail.highlights?.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Principais funcionalidades</h3>
              <ul className="space-y-2">
                {detail.highlights.map((h, i) => (
                  <li key={i} className="hl-item flex items-start gap-3 px-3 py-2 rounded-lg cursor-default">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges */}
          {detail.challenges && (
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-700/50">
              <h3 className="text-sm font-semibold text-cyan-800 dark:text-cyan-300 uppercase tracking-wider mb-2">
                Desafio técnico
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{detail.challenges}</p>
            </div>
          )}

          {/* Repo button */}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl text-sm text-white font-medium transition-colors"
            >
              <Github size={16} />
              Ver Repositório
            </a>
          )}
        </div>
      </div>
    </dialog>
  );
}
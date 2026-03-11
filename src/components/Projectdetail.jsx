import React, { useEffect, useRef } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import Carousel from './Carousel.jsx';

const details = {
  'daly-games': {
    longDescription: `Daly Games é uma aplicação web desenvolvida com Next.js e TypeScript para descobrir, listar e explorar jogos. 
O projeto foca em componentização limpa e uso eficiente do Tailwind CSS para criar uma interface responsiva e performática.`,
    highlights: [
      'Listagem dinâmica de jogos via API externa',
      'Interface responsiva e acessível',
      'Componentização reutilizável com Next.js',
      'Tipagem forte com TypeScript',
    ],
    challenges: 'Implementar paginação performática e manter o bundle leve com Next.js foi o principal desafio técnico.',
  },
  'saas-para-barbearia': {
    longDescription: `SaaS completo para gestão de barbearias com múltiplos níveis de acesso (ADMIN_GERAL e BARBERSHOP_ADMIN). 
Inclui agendamento em tempo real baseado nos horários reais de funcionamento, dashboard interativo e sistema de autenticação robusto com e-mail e senha.`,
    highlights: [
      'Agendamentos baseados em horários reais de funcionamento',
      'Dashboard interativo com métricas e relatórios',
      'Autenticação com dois níveis de acesso',
      'Banco de dados relacional com Prisma + PostgreSQL',
      'UI moderna com Shadcn/UI',
    ],
    challenges: 'Gerenciar conflitos de horário em tempo real e garantir a consistência dos dados de agendamento foram os maiores desafios do projeto.',
  },
  'SystemPizza': {
    longDescription: `Sistema completo de gerenciamento para pizzaria com app mobile para garçons (Expo), painel administrativo, controle de pedidos e estoque em tempo real.`,
    highlights: [
      'App do garçom com Expo (React Native)',
      'Gestão de pedidos em tempo real',
      'Controle de estoque e categorias de produtos',
      'Integração com NeonDB (PostgreSQL serverless)',
    ],
    challenges: 'Sincronizar o estado dos pedidos entre o app do garçom e o painel admin em tempo real sem latência perceptível.',
  },
  'devlink': {
    longDescription: `Página de links personalizada no estilo Linktree com painel administrativo completo (CRUD), autenticação via Firebase e suporte a redes sociais.`,
    highlights: [
      'CRUD completo de links no painel admin',
      'Autenticação segura via Firebase',
      'Integração com redes sociais',
      'Deploy rápido e performático',
    ],
    challenges: 'Garantir segurança nas operações de CRUD com Firebase Rules e evitar acessos não autorizados ao painel.',
  },
  'project-athena': {
    longDescription: `Chatbot educacional desenvolvido como TCC para auxiliar no aprendizado de idiomas com tradução para o português, powered by OpenAI GPT.`,
    highlights: [
      'Integração com API da OpenAI',
      'Tradução automática para o português',
      'Interface conversacional intuitiva',
      'Backend em Python (Flask)',
    ],
    challenges: 'Calibrar os prompts para que as respostas fossem pedagogicamente adequadas e não apenas traduções literais.',
  },
  'DevCurrency': {
    longDescription: `Aplicação de monitoramento de criptomoedas com interface intuitiva, dados em tempo real via API pública e visualizações do mercado cripto.`,
    highlights: [
      'Dados em tempo real via API de criptomoedas',
      'Gráficos de variação de preço',
      'Busca e filtragem de moedas',
      'Interface responsiva com Tailwind CSS',
    ],
    challenges: 'Tratar a alta volatilidade dos dados e atualizar a UI sem causar re-renders desnecessários foi o foco de otimização.',
  },
  'Contact': {
    longDescription: `Sistema robusto de gerenciamento de contratos com histórico de alterações, controle de acesso por perfil (ADMIN/EDITOR), upload de documentos e alertas automáticos de vencimento.`,
    highlights: [
      'Histórico completo e imutável de alterações por contrato',
      'Controle de acesso granular ADMIN/EDITOR',
      'Upload de documentos anexados',
      'Alertas automáticos para contratos vencendo em 30 dias',
      'Dashboard com métricas em tempo real',
      'Interface responsiva para mobile e desktop',
    ],
    challenges: 'Implementar um sistema de histórico imutável usando LocalStorage e gerenciar permissões de forma granular sem backend.',
  },
};

export default function ProjectDetail({ project, images, onClose }) {
  const overlayRef = useRef(null);
  const detail = details[project.slug] || {};

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      style={{ animation: 'fadeIn 0.25s ease' }}
    >
      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) } to { opacity: 1; transform: translateY(0) } }
        .detail-card { animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .highlight-item { transition: background 0.2s, padding-left 0.2s; }
        .highlight-item:hover { background: rgba(6,182,212,0.12); padding-left: 1rem; }
      `}</style>

      <div className="detail-card relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-3xl shadow-2xl border border-slate-700/60">

        {/* Close */}
        <button
          onClick={onClose}
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
            <h2 className="text-3xl font-bold text-white mb-3">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((t) => (
                <span key={t} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-2">Sobre o projeto</h3>
            <p className="text-slate-400 leading-relaxed whitespace-pre-line">
              {detail.longDescription || project.shortDescription}
            </p>
          </div>

          {/* Highlights */}
          {detail.highlights?.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-slate-200 mb-3">Principais funcionalidades</h3>
              <ul className="space-y-2">
                {detail.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="highlight-item flex items-start gap-3 px-3 py-2 rounded-lg cursor-default"
                  >
                    <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span className="text-slate-300 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges */}
          {detail.challenges && (
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                Desafio técnico
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{detail.challenges}</p>
            </div>
          )}

          {/* CTA buttons */}
          <div className="flex gap-3 pt-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl text-sm font-medium transition-colors"
              >
                <Github size={16} />
                Repositório
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-xl text-sm font-bold transition-colors"
              >
                <ExternalLink size={16} />
                Ver ao vivo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
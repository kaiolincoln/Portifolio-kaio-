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
import gym1 from '../assets/gym-1.png';
import gym2 from '../assets/gym-2.png';
import gym3 from '../assets/gym-3.png';
import gym4 from '../assets/gym-4.png';
import gym5 from '../assets/gym-5.png';
import gym6 from '../assets/gym-6.png';
import gym7 from '../assets/gym-7.png';



export const projects = [
{
  "slug": "GymFlow",
  "featured": true,
  "caseStudy": {
    "Problema": "Organizar alunos, treinos e cobranças em uma aplicação com áreas distintas para gestão e acompanhamento do aluno.",
    "Decisões técnicas": "Frontend em React e TypeScript separado de uma API Express. Prisma e PostgreSQL estruturam os dados; JWT identifica usuários e seus perfis de acesso.",
    "Resultado": "Uma aplicação que reúne cadastro de alunos, fichas de treino e acompanhamento de pagamentos, com áreas para gestão e consulta pelo aluno."
  },
  "title": "GymFlow — Gestão de academias",
  "shortDescription": "Alunos, treinos e cobranças em uma aplicação com React, API Express e PostgreSQL. Áreas de acesso para gestão e acompanhamento pelo aluno.",
  "techs": [
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL"
  ],
  "repoUrl": "https://github.com/kaiolincoln/GymFlow",
  "longDescription": "Plataforma fullstack de gestão para personal trainers e academias, com controle de alunos, fichas de treino personalizadas, pagamentos automáticos e área exclusiva para o aluno acompanhar sua evolução.",
  "highlights": [
    "Autenticação JWT com controle de acesso por perfil (Admin / Personal / Aluno)",
    "Geração automática de cobranças ao cadastrar aluno por plano (Mensal, Trimestral, Semestral, Anual)",
    "CRUD completo de fichas de treino com exercícios, séries, repetições e descanso",
    "Dashboard com métricas em tempo real e gráficos dos últimos 6 meses",
    "Área do aluno com treino ativo, evolução corporal e histórico de pagamentos",
    "API REST com 27+ rotas organizadas por domínio (Controller + Service)"
  ],
  "challenges": "Modelar um sistema multitenante com roles distintos, garantindo que cada perfil acesse apenas seus recursos, além de implementar a geração automática de parcelas com datas e valores corretos por tipo de plano.",
  "demoUrl": null,
  "images": [gym1, gym2, gym3, gym4, gym5, gym6, gym7]
},
{
  "slug": "saas-para-barbearia",
  "featured": true,
  "caseStudy": {
    "Problema": "Organizar agendamentos respeitando os horários da barbearia e separar a administração de cada unidade.",
    "Decisões técnicas": "Projeto iniciado no bootcamp Full Stack Club e expandido com Next.js e TypeScript, persistência com Prisma e regras de acesso por perfil administrativo.",
    "Resultado": "Uma aplicação de gestão que reúne agendamento de serviços, horários de funcionamento e painel gerencial, apresentada na galeria do projeto."
  },
  "title": "SaaS para Barbearia",
  "shortDescription": "Gestão de serviços e agendamentos com Next.js, Prisma e PostgreSQL. Projeto do Full Stack Club expandido com painel gerencial e horários de funcionamento.",
  "techs": [
    "Next.js",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
    "Shadcn/UI",
    "React",
    "TypeScript"
  ],
  "repoUrl": "https://github.com/kaiolincoln/SaaS-para-barbearia-",
  "longDescription": "SaaS completo para gestão de barbearias com múltiplos níveis de acesso (SUPER_ADMIN e BARBERSHOP_ADMIN).\n\nInclui agendamento em tempo real baseado nos horários reais de funcionamento, dashboard interativo e sistema de autenticação robusto com e-mail e senha.",
  "highlights": [
    "Agendamentos baseados em horários reais de funcionamento",
    "Dashboard interativo com métricas e relatórios",
    "Autenticação com dois níveis de acesso",
    "Banco de dados relacional com Prisma + PostgreSQL",
    "UI moderna com Shadcn/UI"
  ],
  "challenges": "Gerenciar conflitos de horário em tempo real e garantir a consistência dos dados de agendamento foram os maiores desafios do projeto.",
  "demoUrl": null,
  "images": [SaaSImg1, SaaSImg2, SaaSImg3, SaaSImg4, SaaSImg5, SaaSImg6]
},
{
  "slug": "SystemPizza",
  "title": "Sistema de Gerenciamento para Pizzaria",
  "shortDescription": "Sistema completo para gerenciar uma pizzaria, incluindo pedidos, estoque e app do garçom.",
  "techs": [
    "Expo",
    "React",
    "TypeScript",
    "NeonDB"
  ],
  "repoUrl": "https://github.com/kaiolincoln/Project-Pizzaria",
  "longDescription": "Sistema completo de gerenciamento para pizzaria com app mobile para garçons (Expo), painel administrativo, controle de pedidos e estoque.",
  "highlights": [
    "App do garçom com Expo (React Native)",
    "Gestão de pedidos em tempo real",
    "Controle de estoque e categorias de produtos",
    "Integração com NeonDB (PostgreSQL serverless)"
  ],
  "challenges": "Sincronizar o estado dos pedidos entre o app do garçom e o painel admin em tempo real sem latência perceptível.",
  "demoUrl": null,
  "images": [SystemPizzaCategory, SystemPizzaProduct, SystemPizzaGarsom, SystemPizzaGarsom2, SystemPizzaGarsom3, SystemPizzapedidos, SystemPizzaLogin]
},
{
  "slug": "Contact",
  "title": "Contract Manager",
  "shortDescription": "Gerenciamento completo de contratos com histórico de alterações, controle de acesso (ADMIN/EDITOR), upload de documentos e alertas de vencimento.",
  "techs": [
    "React",
    "Tailwind CSS",
    "TypeScript",
    "LocalStorage"
  ],
  "repoUrl": "https://github.com/kaiolincoln/Project-Contracted",
  "longDescription": "Sistema robusto de gerenciamento de contratos com histórico de alterações, controle de acesso por perfil (ADMIN/EDITOR), upload de documentos e alertas automáticos de vencimento.",
  "highlights": [
    "Histórico completo e imutável de alterações por contrato",
    "Controle de acesso granular ADMIN/EDITOR",
    "Upload de documentos anexados",
    "Alertas automáticos para contratos vencendo em 30 dias",
    "Dashboard com métricas em tempo real",
    "Interface responsiva para mobile e desktop"
  ],
  "challenges": "Implementar um sistema de histórico imutável usando LocalStorage e gerenciar permissões de forma granular sem backend.",
  "demoUrl": null,
  "images": [Contract1, Contract2, Contract3, Contract4, Contract5, Contract6]
},
{
  "slug": "project-athena",
  "title": "Project Athena",
  "shortDescription": "Chatbot educacional para aprender outros idiomas e traduzir para o português, desenvolvido como TCC.",
  "techs": [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "OpenAI"
  ],
  "repoUrl": "https://github.com/kaiolincoln/TCC/tree/main/static",
  "longDescription": "Chatbot educacional desenvolvido como TCC para auxiliar no aprendizado de idiomas com tradução para o português, powered by OpenAI GPT.",
  "highlights": [
    "Integração com API da OpenAI",
    "Tradução automática para o português",
    "Interface conversacional intuitiva",
    "Backend em Python (Flask)"
  ],
  "challenges": "Calibrar os prompts para que as respostas fossem pedagogicamente adequadas e não apenas traduções literais.",
  "demoUrl": null,
  "images": [AthenaImg1]
},
{
  "slug": "devlink",
  "title": "DevLink (Linktree-like)",
  "shortDescription": "Página de links personalizada com painel admin (CRUD), autenticação e integração com redes sociais.",
  "techs": [
    "HTML",
    "TypeScript",
    "Tailwind CSS",
    "Firebase"
  ],
  "repoUrl": "https://github.com/kaiolincoln/Projeto-links",
  "longDescription": "Página de links personalizada no estilo Linktree com painel administrativo completo (CRUD), autenticação via Firebase e suporte a redes sociais.",
  "highlights": [
    "CRUD completo de links no painel admin",
    "Autenticação segura via Firebase",
    "Integração com redes sociais",
    "Deploy rápido e performático"
  ],
  "challenges": "Garantir segurança nas operações de CRUD com Firebase Rules e evitar acessos não autorizados ao painel.",
  "demoUrl": null,
  "images": [DevLinkImg1, DevLinkImg2, DevLinkImg3]
},
{
  "slug": "daly-games",
  "title": "Daly Games",
  "shortDescription": "Aplicação web para descobrir e listar jogos. Interface limpa e funcional, praticando componentização e Tailwind.",
  "techs": [
    "Next.js",
    "TypeScript",
    "Tailwind CSS"
  ],
  "repoUrl": "https://github.com/kaiolincoln/Daly-Games",
  "longDescription": "Daly Games é uma aplicação web desenvolvida com Next.js e TypeScript para descobrir, listar e explorar jogos.\n\nO projeto foca em componentização limpa e uso eficiente do Tailwind CSS para criar uma interface responsiva e performática.",
  "highlights": [
    "Listagem dinâmica de jogos via API externa",
    "Interface responsiva e acessível",
    "Componentização reutilizável com Next.js",
    "Tipagem forte com TypeScript"
  ],
  "challenges": "Implementar paginação performática e manter o bundle leve com Next.js foi o principal desafio técnico.",
  "demoUrl": null,
  "images": [DalyGamesImg1, DalyGamesImg2, DalyGamesImg3]
},
{
  "slug": "DevCurrency",
  "title": "DevCurrency",
  "shortDescription": "Aplicação de monitoramento de criptomoedas com interface intuitiva para acompanhar o mercado em tempo real.",
  "techs": [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "API",
    "TypeScript"
  ],
  "repoUrl": "https://github.com/kaiolincoln/CriptoApp",
  "longDescription": "Aplicação de monitoramento de criptomoedas com interface intuitiva, dados em tempo real via API pública e visualizações do mercado cripto.",
  "highlights": [
    "Dados em tempo real via API de criptomoedas",
    "Gráficos de variação de preço",
    "Busca e filtragem de moedas",
    "Interface responsiva com Tailwind CSS"
  ],
  "challenges": "Tratar a alta volatilidade dos dados e atualizar a UI sem causar re-renders desnecessários.",
  "demoUrl": null,
  "images": [DevCurrencyImg1, DevCurrencyImg2]
}
];

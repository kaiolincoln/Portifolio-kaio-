# SaaS para Barbearia

Projeto de gestão de barbearias iniciado no bootcamp Full Stack Club, com foco em agendamentos e administração.

[Repositório](https://github.com/kaiolincoln/SaaS-para-barbearia-) · [Interface](../../../src/assets/SaaS-barber.png)

## Problema e solução

Relacionar clientes, serviços e agendamentos de uma barbearia. Next.js e TypeScript organizam a aplicação, enquanto Prisma modela a persistência em PostgreSQL.

## Decisões técnicas verificáveis

- Next.js, React, TypeScript e Tailwind CSS declarados no `package.json`.
- PostgreSQL configurado no schema Prisma.
- Modelos `User`, `Barbershop`, `BarbershopService` e `Booking`, com relações entre usuários, serviços e reservas.
- Preços representados com `Decimal`, datas com `DateTime`.

O README de origem descreve expansão para painel gerencial, horários reais e administração por perfil. Essas funcionalidades são apresentadas como conteúdo declarado pelo autor; esta revisão não executou o sistema nem certificou autorização ou concorrência de agendamentos.

## Resultado e limites

O portfólio apresenta seis telas do projeto e sua estrutura técnica. A demo pública ainda não foi confirmada. O `package.json` consultado não declara uma suíte de testes. Não foram inventadas métricas de performance ou de usuários.

## Referências

Conferidos em 06/09/2026: [README original](https://github.com/kaiolincoln/SaaS-para-barbearia-/blob/main/README.md), [package.json](https://github.com/kaiolincoln/SaaS-para-barbearia-/blob/main/package.json) e [schema Prisma](https://github.com/kaiolincoln/SaaS-para-barbearia-/blob/main/prisma/schema.prisma).

Este estudo acompanha o portfólio; o README do repositório externo permanece sem alterações.

## Atualiza??o da c?pia local ? 06/09/2026

A vers?o local ? Next.js 14/React 18 e possui funcionalidades ainda n?o publicadas. Recebeu README, exemplos de ambiente, valida??o de expediente/profissional/conflito no servidor e transa??o serializ?vel. Cinco testes passaram e a checagem TypeScript passou ap?s corre??es em componentes existentes. O banco ? simulado nos testes; concorr?ncia real e autoriza??o das a??es administrativas ainda precisam de revis?o antes de uma demo p?blica.

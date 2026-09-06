# GymFlow

Aplicação para organizar alunos, fichas de treino, registros corporais e pagamentos de academias e personal trainers.

[Repositório](https://github.com/kaiolincoln/GymFlow) · [Interface](../../../src/assets/gym-1.png)

## Problema e solução

A gestão precisa relacionar o aluno aos seus treinos e pagamentos, enquanto o aluno precisa acompanhar suas informações. O projeto separa a interface React da API Express e representa esses relacionamentos em PostgreSQL com Prisma.

## Decisões técnicas verificáveis

- `FrontendLove`: React, TypeScript, Vite e Tailwind CSS.
- `Backend`: Node.js, Express, TypeScript, JWT, Zod e Prisma.
- O schema define perfis ADMIN, PERSONAL e STUDENT, fichas divididas em dias e exercícios e valores monetários com `Decimal`.
- Treinos, pagamentos e registros corporais se relacionam ao cadastro do aluno.

## Resultado e limites

A galeria do portfólio apresenta as interfaces. O repositório contém os modelos e a separação entre frontend e backend. Não há demo pública confirmada nem métricas de adoção ou desempenho verificadas nesta análise.

O frontend declara `npm test` com Vitest. O backend mantém um script de teste que termina com erro: não existe evidência aqui de uma suíte de backend aprovada. Os testes deste portfólio não validam o GymFlow.

## Referências

Conferidos em 06/09/2026: [frontend/package.json](https://github.com/kaiolincoln/GymFlow/blob/main/FrontendLove/package.json), [backend/package.json](https://github.com/kaiolincoln/GymFlow/blob/main/Backend/package.json) e [schema Prisma](https://github.com/kaiolincoln/GymFlow/blob/main/Backend/prisma/schema.prisma).

Este estudo acompanha o portfólio; não substitui nem altera o README do repositório externo.

## Atualiza??o da c?pia local ? 06/09/2026

A c?pia local recebeu README principal, exemplos de ambiente e quatro testes de parcelas/autentica??o. O c?lculo corrige a distribui??o dos centavos e a virada de m?s no dia 31. Testes e build do backend passaram. A revis?o identificou autoriza??o por recurso ainda incompleta e cria??o p?blica com perfil informado pelo cliente; a demo n?o foi publicada. Estas altera??es ainda precisam ser enviadas ao GitHub.

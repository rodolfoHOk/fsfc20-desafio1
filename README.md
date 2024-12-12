# Imersão FullStack & FullCycle 20 - Desafio 1

## Descrição do desafio

Neste desafio, você deve criar uma aplicação Nest.js com MongoDB e Docker que rode na porta 3000.

Esta aplicação precisa expor 4 rotas de API Rest:

- Listar assets - GET /api/assets

- Criar assets - POST /api/assets

- Criar orders - POST /api/orders

- Listar orders - GET /api/orders

Um asset tem os seguintes dados:

- id (é informado pelo usuário)

- symbol (símbolo do ativo)

Uma order tem os seguintes dados:

- id automático do banco

- asset_id (relacionado com Asset)

- price

- status (open, pending, closed) (não pode deixar mandar o status no POST)

O ORM a ser usado é o Prisma ORM e o banco de dados precisa ser o MongoDB (use a mesma configuração que usamos na aula de Nest.js)

Crie o arquivo api.http para fazer as chamadas HTTP. Ao rodar o "docker compose up", o projeto deverá rodar com o Nest.js e o MongoDB (caso você utilize variáveis de ambiente, lembre-se de adicionar no docker compose e/ou no arquivo .env, ou seja, crie um arquivo .env.example) .

## Tecnologias

- Typescript / Javascript
- Node.js
- Nest.js
- Prisma ORM
- Mongo DB

## Como rodar

### Requisitos

- docker / docker compose

### Comando

- docker compose up --build

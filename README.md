<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Desafio 09: Relacionamentos com banco de dados no Node.js
</h3>

![Badge](https://img.shields.io/badge/node-%3E%3D%2012.18.2-brightgreen) ![Badge](https://img.shields.io/badge/types-Flow%20%7C%20TypeScript-blue) ![Badge](https://img.shields.io/badge/PostgreSQL-v12.0-lightblue) ![Badge](https://img.shields.io/badge/MongoDB-4.4.0-green) ![Badge](https://img.shields.io/badge/Redis-6.0.6-red)

# :rocket: Sobre o desafio

[Nesse desafio](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-database-relations), criarei uma nova aplicação para demonstraro que você aprendi Node.js junto ao TypeScript, incluindo o uso de banco de dados com o TypeORM, e relacionamentos ManyToMany com PostgreSQL, MongoDB e Redis.

Essa será uma aplicação que deve permitir a criação de clientes, produtos e pedidos, onde o cliente pode gerar novos pedidos de compra de certos produtos, como um pequeno e-commerce.

## Status do Projeto

> Em desenvolvimento :warning:

## Template da aplicação

O template original utilizado é o que a Rocketseat dispononibilizou na seguinte url: **[Acessar Template](https://github.com/Rocketseat/gostack-template-typeorm-relations)**

**Dica**: Caso não saiba utilizar repositórios do Github como template, temos um guia no **[FAQ](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios).**

## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)
:warning: [Yarn](https://yarnpkg.com/getting-started/install)
:warning: [Docker](https://www.docker.com/products/docker-desktop)
:warning: [PostgreSQL Docker](https://hub.docker.com/_/postgres)
:warning: [MongoDB Docker](https://hub.docker.com/_/mongo)
:warning: [Redis Docker](https://hub.docker.com/_/redis)

## Iniciando/Configurando banco de dados

Ter Docker e as imagens PostgreSQL, MongoDB e Redis instalados.

### Instalar PostgreSQL via Docker

* `docker run --name storeChallengePostgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
* Verificar se a imagem está rodando: `docker ps`
* Usuário: postgres
* Senha: docker
* Acesso pelo terminal: `docker exec -it nome_do_container bash`

### Criar Banco de Dados PostgreSQL

1. Instale o DBeaver, ou outro gerenciador de Banco de Dados, ou faça por linha de comando.
2. Acesse com o usuário e senha supracitados.
3. Crie um Banco de Dados com o nome __gostack_desafio09__.
4. Crie um Banco de Dados com o nome __gostack_desafio09_tests__.

### Instalar MongoDB via Docker

* `docker run --name ecommerceChallengeMongo -p 27017:27017 -d -t mong
* Verificar se a imagem está rodando: `docker ps`
* Usuário: postgres
* Senha: docker
* Acesso pelo terminal: `docker exec -it nome_do_container bash`

### Instalar Redis via Docker

* `docker run --name ecommerceChallengeRedis -p 6379:6379 -d -t redis:alpine
* Verificar se a imagem está rodando: `docker ps

## Como rodar a aplicação

Agora navegue até a pasta criada e abra no Visual Studio Code, lembre-se de executar o comando `yarn` no seu terminal para instalar todas as dependências.

Pronto! Agora basta acessar a aplicação à partir do link: http://localhost:3333/

## Como rodar os testes

```bash
yarn test
```

## Funções da aplicação

Resultados obtidos pelo [Insomnia](https://insomnia.rest/download/) um software para interação com o backend (API) via HTTP e JSON.

### Criar clientes
 
<img src=""/>

### Criar produtos
 
Lista as transações e informa o balanço:

<img src=""/>

### Listar produtos

Lista as transações e informa o balanço:

<img src=""/>

### Criar pedidos

<img src=""/>

### Listar pedidos

<img src=""/>

## :memo: Licença

Esse projeto está sob a licença MIT.

---

Desafio proposto com 💜 by Rocketseat :wave: [Entre na comunidade!](https://discordapp.com/invite/gCRAFhc)

# Trallha

Aplicacao de quadro Kanban feita com React, TypeScript e Vite. O projeto permite criar boards, adicionar colunas, cadastrar cards e visualizar/editar os dados de cada card.

A intencao principal do Trallha e explorar ao maximo as ferramentas nativas do React, como componentes, hooks, `Context` e `useReducer`, evitando bibliotecas externas de gerenciamento de estado. Os dados da aplicacao sao centralizados no contexto global e persistidos localmente, mantendo o fluxo de estado simples, explicito e proximo da base do React.

## Tecnologias

- React 19
- TypeScript
- Vite
- React Router DOM
- CSS Modules
- ESLint
- Storybook

## Funcionalidades

- Listagem de boards
- Criacao de novos boards
- Criacao de colunas dentro de um board
- Criacao de cards com titulo, descricao e status
- Pagina de detalhes do card
- Persistencia dos dados no `localStorage`
- Estilizacao com CSS Modules

## Como rodar

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois acesse a URL exibida no terminal. Normalmente:

```txt
http://localhost:5173/
```

## Scripts

```bash
npm run dev
```

Inicia o Vite em modo desenvolvimento.

```bash
npm run build
```

Executa a checagem TypeScript e gera a build de producao.

```bash
npm run preview
```

Serve localmente a build de producao.

```bash
npm run lint
```

Executa o ESLint no projeto.

```bash
npm run storybook
```

Inicia o Storybook na porta `6006`.

```bash
npm run build-storybook
```

Gera a build estatica do Storybook.

## Rotas

- `/board`: lista todos os boards
- `/board/:boardId`: exibe as colunas e cards de um board
- `/board/:boardId/:columnId/:cardId`: exibe os detalhes de um card

## Estado da aplicacao

O estado principal fica no `BoardContext` e e atualizado pelo `boardReducer`. As informacoes sao salvas no `localStorage` com a chave `boardState`, permitindo manter os boards, colunas e cards depois de recarregar a pagina.

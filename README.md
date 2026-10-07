# Mecânica EduCar

Site institucional multipágina da Mecânica EduCar, desenvolvido com Node.js,
Vite, Bootstrap 5 e JavaScript.

## Requisitos

- Node.js 22 ou superior
- npm

## Desenvolvimento

```bash
npm install
npm run dev
```

O Vite exibirá o endereço local do projeto no terminal.

## Produção

```bash
npm run build
npm run preview
```

O build otimizado é gerado em `dist/`.

## Publicação

Cada envio para a branch `main` executa o workflow em
`.github/workflows/deploy-pages.yml`, gera o projeto com Node.js e publica
`dist/` no GitHub Pages.

## Estrutura

- `index.html`: página inicial e fluxo de diagnóstico.
- `sinais-do-carro.html`: guia educativo de sintomas.
- `servicos/`: páginas individuais dos serviços.
- `assets/css/`: identidade visual e responsividade.
- `assets/js/`: módulos, configurações e interações.
- `vite.config.js`: entradas do build multipágina.

## Conteúdo configurável

- Dados oficiais: `assets/js/config.js`.
- Galeria e avaliações: `assets/js/content.js`.
- As seções sem conteúdo real permanecem ocultas automaticamente.

Antes da publicação definitiva, inclua apenas fotos e avaliações autorizadas
pela oficina e valide os textos dos serviços.

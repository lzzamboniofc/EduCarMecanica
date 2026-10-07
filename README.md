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

O projeto mantém compatibilidade direta com o GitHub Pages configurado para
`main /root`. Os arquivos da raiz podem ser publicados sem alterar a
configuração atual. O Vite continua disponível para desenvolvimento local e
para gerar uma versão otimizada em `dist/`.

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

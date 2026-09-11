# Mecânica EduCar — esboço institucional

Site estático responsivo feito com HTML, CSS, Bootstrap 5 e JavaScript puro.

Inclui cinco páginas independentes de serviço: motor, freios, suspensão, amortecedores e revisão preventiva.

## Abrir

Abra `index.html` no navegador. Para desenvolvimento, também pode usar a extensão Live Server.

## Antes de publicar

- Substituir o bloco temporário de marca pela logo oficial.
- Confirmar endereço, telefone, WhatsApp e horários.
- Preencher telefone, WhatsApp, endereço, horário, Google Maps e Analytics em `assets/js/config.js`.
- Validar a lista e os textos de serviços com a oficina.
- Trocar as imagens demonstrativas por fotos reais autorizadas.
- Adicionar depoimentos somente depois de receber avaliações reais.

## Recursos preparados

- Diagnóstico interativo por sintomas com mensagem automática para WhatsApp.
- Página educativa `sinais-do-carro.html`.
- FAQ com dúvidas comuns.
- Dados estruturados `AutoRepair` para SEO local.
- Galeria filtrável: adicionar itens no array `gallery` de `assets/js/content.js`.
- Avaliações reais: adicionar itens no array `reviews` de `assets/js/content.js`.
- As seções de galeria e avaliações permanecem ocultas enquanto não houver conteúdo real.

## Estrutura

- `index.html`: conteúdo e seções.
- `assets/css/style.css`: identidade visual e responsividade.
- `assets/js/main.js`: menu, animações, modais e formulário.

# HITS Móveis Planejados — Landing page

Landing page estática feita com HTML5, CSS3 e JavaScript puro. Não requer Node.js, banco de dados ou processo de build.

## Como abrir

1. Extraia a pasta `hits-moveis-planejados`.
2. Abra `index.html` no navegador.
3. É necessária conexão com a internet para carregar as fotografias demonstrativas do Unsplash e as fontes Google Fonts.

## Antes de publicar

### 1. Configurar o WhatsApp

Abra `js/main.js` e encontre:

```js
WHATSAPP_NUMBER: "5511999999999"
```

Troque o valor pelo telefone comercial oficial da HITS, com DDI + DDD + número, somente dígitos. Exemplo fictício de formato: `5511988887777`. Não mantenha o placeholder ao publicar.

### 2. Substituir o logotipo

O logotipo atual é uma composição tipográfica provisória com o texto HITS, não o logotipo oficial. Para usar a marca original:
- Salve o arquivo original em `assets/logo-hits.png` (ou SVG, se disponível).
- No `index.html`, substitua os elementos `.brand-mark` e `.brand-caption` por uma imagem com `alt="HITS Móveis Planejados"`.
- Ajuste o tamanho em `css/style.css` mantendo a proporção original do arquivo.

O logotipo original não foi incluído porque não veio anexado junto com o prompt.

### 3. Substituir fotografias

As imagens atuais são referências demonstrativas externas do Unsplash e não representam necessariamente trabalhos da HITS. Para usar fotografias próprias:
1. Coloque as imagens em `assets/images/` preferencialmente em WebP ou AVIF.
2. Altere os atributos `src` no `index.html`.
3. Para as imagens do modal, atualize também os atributos `data-full`.
4. Ajuste os textos `alt` para descrever fielmente cada fotografia.

Os endereços externos usados no HTML são links de imagens do Unsplash. Para um site publicado, recomenda-se baixar imagens licenciadas para uso e servi-las localmente para maior controle e desempenho.

### 4. Alterar textos e contatos

Os textos institucionais, categorias de ambientes e mensagens de orçamento estão no `index.html`. Mensagens específicas por ambiente usam o atributo `data-message`. O número e a mensagem padrão ficam no objeto `HITS_CONFIG` em `js/main.js`.

Não foram adicionados telefone real, Instagram, endereço, cidade, horários, avaliações, certificações ou tempo de mercado porque esses dados não foram fornecidos.

## Publicar em hospedagem estática

Envie a pasta inteira para a raiz pública da hospedagem (por exemplo, `public_html`). Mantenha a estrutura:
- `index.html`
- `css/style.css`
- `js/main.js`
- `assets/`

Não é necessário executar comandos de instalação. A página pode ser hospedada em qualquer serviço de hospedagem estática que sirva HTML, CSS e JavaScript.

## Recursos implementados

- Layout responsivo para desktop, tablet e celular.
- Menu mobile com abertura/fechamento por clique, tecla Escape e seleção de link.
- Navegação por seções e rolagem suave.
- Links de orçamento para WhatsApp com mensagens pré-preenchidas.
- Botão flutuante de WhatsApp.
- Galeria com modal, navegação anterior/próxima, Escape e clique fora.
- Animações discretas com respeito a `prefers-reduced-motion`.
- SEO básico, Open Graph e textos alternativos.
- Ano do rodapé atualizado automaticamente.

## Observações

- As imagens e fontes externas dependem de conexão com a internet.
- O número de WhatsApp precisa ser configurado antes da publicação.
- O logotipo provisório deve ser substituído pelo arquivo original da HITS.
- Confira os direitos de uso das fotografias escolhidas para a versão final.


## Localização no Google Maps

A página inclui uma seção de localização com mapa incorporado e botão para abrir a rota no Google Maps.

Endereço configurado:
**R. Valência, 68 — Jardim Ana Cristina, Barueri — SP, 06448-275**

Se o endereço mudar, atualize o texto e os links `google.com/maps` na seção `#localizacao` do `index.html`. O mapa incorporado requer conexão com a internet.


### Contato e redes sociais
- WhatsApp: +55 11 97038-5732 (configurado em js/main.js).
- Instagram e Facebook: links oficiais no rodapé do index.html.

## Portfólio real
12 fotos fornecidas pela HITS foram convertidas para WebP e incorporadas em `assets/images/`.
A seção de projetos possui filtros (Todos, Cozinhas, Quartos, Salas) e visualização ampliada.
As fotos são locais e não dependem do Unsplash. Não altere os nomes sem atualizar `index.html`.

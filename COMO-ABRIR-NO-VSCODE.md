# Como abrir e rodar no VS Code

## 1. Preparar o computador
Instale o **Node.js** (versão 20 ou mais nova): https://nodejs.org
Depois, instale o **Bun**: https://bun.sh (ou use npm, que já vem com o Node).

## 2. Abrir o projeto
1. Descompacte este ZIP.
2. Abra a pasta `bem-girly` no VS Code (menu **Arquivo > Abrir pasta**).

## 3. Instalar as dependências e ligar o site
No terminal do VS Code (menu **Terminal > Novo terminal**), rode:

```sh
bun install
bun run dev
```

Se preferir npm:

```sh
npm install
npm run dev
```

O site abre em `http://localhost:8080`. Salve qualquer arquivo e a prévia se atualiza sozinha.

## 4. Onde mexer
- `src/components/storefront.tsx` — vitrine, produtos, textos e o número do WhatsApp.
- `src/styles.css` — cores, fontes e estilos da marca.
- `src/assets/` — fotos usadas no site. Troque uma imagem pela mesma com o mesmo nome e ela aparece no lugar.
- `src/routes/` — páginas.

## 5. Gerar a versão final para publicar
```sh
bun run build
```
O resultado fica na pasta `dist`.

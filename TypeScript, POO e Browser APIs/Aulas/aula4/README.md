# Configuração do Typescript

1. Inicializar um projeto Node.js.
    - `npm init -y` | vai criar e aceitar tudo
2. Instalar o TypeScript.
  2.1. Instalação global: `npm install -g typescript`
  2.2. Instalação local (dentro do projeto) `npm install typescript -D` esse -D é de dev, para utilização somente no desenvolvimento e não na produção.
3. Rodando o TypeScript instalado para transpilar o nosso código (converter o nosso código TS para JS)
  3.1. `npx tsc .\nome-du-arquivo.ts` ou `npx tsc .\nome-du-arquivo.ts --watch` 
  3.2. `npx tsc --init` ele vai inicializar todas as configurações do TS geranto o arquivo `tsconfig.json` e automaticamente ao rodar o `npx tsc` ele compila todos os arquivos .ts
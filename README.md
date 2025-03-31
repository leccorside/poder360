<div align="center">
  <h1 align="center">
    Desafio Poder 360 - Headless WordPress Blog com Next.js e GraphQL
  </h1>
</div>

<div align="center">

![Versão NODE](http://img.shields.io/static/v1?label=v18.0.0&message=%20NODE&color=GREEN&style=for-the-badge)
![Versão NPM](http://img.shields.io/static/v1?label=v8.6.0&message=%20NPM&color=BLUE&style=for-the-badge)
![Versão NEXTJS](http://img.shields.io/static/v1?label=v15.2.4&message=%20NEXTJS&color=PINK&style=for-the-badge)
![Versão NESTJS](http://img.shields.io/static/v1?label=v18.3.1&message=%20REACT&color=PINK&style=for-the-badge)

![MySQL](https://img.shields.io/badge/wordpress-%2300f.svg?style=for-the-badge&logo=wordpress&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-1d63ed?style=for-the-badge&logo=docker&logoColor=f5f5f5)
![Angular](https://img.shields.io/badge/React-DD0031?style=for-the-badge&logo=react&logoColor=white)
![NestJs](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

</div>

# Requisitos/Instruções 📜

### 1 - INSTALAR NODE VERSÃO~18.0.0 OU MAIS RECENTE ✨
(https://nodejs.org/pt)

### 2 - BAIXAR O PROJETO ✨
```bash
git clone https://github.com/leccorside/poder360.git
```

### 3 - INSTALAR MÓDULOS ✨
```bash
npm install
```

### 4 - CRIE UM ARQUIDO .ENV RODANDO ESSE COMANDO NA RAIZ DO PROJETO ✨
```bash
New-Item -Path . -Name ".env" -ItemType "File"
```

### 5 - COLE ESTE CONTEÚDO DENTRO DO ARQUIVO .ENV (VOCÊ PODE ALTERAR A URL PARA OUTRO SITE WORDPRESS) ✨
# *Lembrando que o site wordpress deve estar com o plugin WPGraphQL instalado
```bash
WORDPRESS_URL=https://leccorside.com.br/poder360/painel
```

### 6 - ABRA O PAINEL ADMINISTRATIVO DO WORDPRESS PARA ADMINISTRAR O CONTEÚDO ✨
URL
```bash
https://leccorside.com.br/poder360/painel/wp-admin
```
USUÁRIO
```bash
admin
```
SENHA
```bash
admin
```

## CASO QUEIRA INSTALAR O SITE WORDPRESS EM OUTRO SERVIDOR OU LOCALMENTE, SIGA OS PASSOS A SEGUIR:

### 1 - BAIXE OS ARQUIVOS DO SITE WORDPRESS COMPLETO DENTRO DO DIRETÓRIO DO PROJETO NO GIT ✨
```bash
New-Item -Path . -Name ".env" -ItemType "File"
```

### 2 - SUBA OS 2 ARQUIVOS PARA DENTRO DO SEU SERVIDOR PHP E EXECUTE A URL DO SEU SITE + INSTALLER.PHP ✨
```bash
https://seusite.com.br/installer.php
```
Para logar no painel use os mesmos dados anteriores, admin, admin

### 3 - LEMBRE-SE QUE CASO ESSE PASSO SEJA EXECUTADO VOCÊ DEVE ALTERAR A URL NO ARQUIVO .ENV EM SEU PROJETO PRONTEND ✨
```bash
WORDPRESS_URL=https://seusite.com.br
```
# ☕ Coffee Delivery

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
</div>

Uma página desktop web que gerencia um carrinho de compras de uma cafeteria fictícia, desenvolvida com base no design da Rocketseat durante o curso de ReactJS.

<img src="./src/assets/fotoProjeto.png"/>*Imagem meramente ilustrativa, pois ela muda dependendo do tamanho da tela do seu computador!
 

## 🚀 Funcionalidades

- Listagem de produtos (cafés) disponíveis para compra
- Adicionar uma quantidade específicas de itens no carrinho
- Aumentar ou remover a quantidade de itens no carrinho
- Formulário para o usuário preencher o seu endereço
- Exibir o total de itens no carrinho no Header
- Exibir o valor total da soma de itens no carrinho multiplicados pelo valor

## 📌 Desafios enfrentados 

A parte mais desafiadora do projeto foi a **passagem dos cafés selecionados pelo usuário para a tela de finalização da compra**. Utilizei a lógica que ensinada nas aulas do curso ReactJS, com **Context API e hook personalizados**, mas enfrentei dificuldades na implementação da lógica e em alguns bugs. Após muita leitura e testes, consegui resolver os problemas e concluir a funcionalidade com sucesso.

Outro desafio foi **configurar o deploy do projeto no GitHub Pages**, que foi um objetivo pessoal adicional. Precisei de vídeos no Youtube e testes para garantir que tudo funcionasse corretamente. No final, a persistência e os testes foram a chave para o sucesso!

## 🌐 Deploy no GitHub Pages

O projeto está disponível online via GitHub Pages. Acesse <a href="https://helzaaragao.github.io/CoffeeDelivery/">aqui</a> para visualizar.


### 🛠️ Dependências e Versões Utilizadas

React: 18.2.0 | Typescript: 5.2.2 | Vite: 5.2.0 | Styled-components: 6.1.11 | Phosphor-icons/react: 2.1.5




### 📂 Como rodar o projeto na sua máquina local

OBS: é preciso já ter instalado o node, vscode ou um terminal da sua preferência para executar os comandos!

Clone esse repositório para os seus arquivos:
```
git clone https://github.com/helzaaragao/CoffeeDelivery.git
```

Depois, vá até a pasta que você acabou com o comando anterior:

```
cd "CoffeeDelivery"
```
E instale todas as depedências e versões utilizadas por esse projeto:

```
npm install
```
Finalmente, rode no seu localhost:
```
npm run dev
```

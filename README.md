## Teste técnico - Automação de Testes com Cypress

### Automação Plataforma DemoQA ###
```bash
https://demoqa.com/ 
```
## Descrição do Projeto
### Projeto desenvolvido em JavaScript com Cypress, focado em recriar fluxos E2E e testes de API. ###

<h4>
    <p>Ferramentas e Bibliotecas</p>
    <a href="https://cypress.io/">Cypress</a>
    <br></br>
    <a href="https://v9.fakerjs.dev/guide/">Faker</a>
</h4>

### Pré-requisitos

Antes de começar, instale as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/) 
Recomendamos o uso do VSCode para edição de código. [VSCode](https://code.visualstudio.com/).


### **Clonando e Instalando o Projeto** 

#### 1. **Crie uma pasta na raiz do computador**

#### 2. **Acesse a pasta do projeto pelo VSCode** 

#### 3. **Com o terminal aberto clone o repositório do projeto**
```bash
HTTPS:  $ git clone https://github.com/allysonbreno/poc-cypress-acc.git
SSH:  $ git clone git@github.com:allysonbreno/poc-cypress-acc.git
```

#### 4. **Com o terminal aberto instale as dependências rodando o comando**
```bash
 npm install
```

#### **Features desenvolvidas**
<p>
<h5> Forms:    Practice Form  ✅ 
<h5> Alert:   Browser Windows ✅ 
<h5> Element:      Web Tables ✅ 
<h5> Widgets:    Progress Bar ✅ 
<h5> Interaction:    Sortable ✅ 
<h5> Api: Criar,Gerar Token✅, Confirmar Usuario Autorizado✅, Listar Livros✅, Alugar 2 Deles✅ e Listar Detalhes Dos Livros Alugados✅.    
</p>

### 🚀 Rodando os Testes

#### 1. **Abrir a Interface do Cypress e Escolher os Testes**

Se você deseja interagir com a interface gráfica do Cypress e escolher manualmente os cenários de teste a serem executados, use o seguinte comando:

```bash
 npm run open
```

#### 2. **Executar Testes em Modo Headless com Evidência de Vídeo**

Se você deseja executar todos os testes de forma **headless** (sem abrir a interface gráfica do Cypress) e ainda assim gerar vídeos das execuções para posterior análise, use o seguinte comando:

```bash
 npm run test-headless-video
```

#### 3. **Executar Testes sem Modo Headless e Gerar Log no Terminal**

Se você preferir rodar os testes com a interface gráfica do Cypress aberta (não em modo headless) e visualizar os logs de execução diretamente no terminal, use o seguinte comando:

```bash
 npm run test
```

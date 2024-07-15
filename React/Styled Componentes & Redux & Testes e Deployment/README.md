# Styled Components & Redux

## React + Styled Components I

Dados da API fakestoreApi
[All products](https://fakestoreapi.com/products)

# Redux
[Redux - Aula ](https://whimsical.com/redux-VRMDFyyXby3WaZ3n8uTEGB)
![Introdução](image.png)

![Arquitetura do Redux I](image-1.png)
  ![alt text](image-3.png)
![Arquitetura do Redux II](image-2.png)
  ![alt text](image-4.png)

# Testes e Deployment

## Testes unitários I
**Introdução**
- Testes automatizados: um recurso utilizado para automatizar a tarefa de revisar e validar um software.
- Vantagens:
  - Permitem identificar erros/bugs no sistema.
  - Incentivam a utilização de boas práticas na escrita do código.
  - Promove uma maior confiança no momento da adição/alteração do código para todos os desenvolvedores de um time.
- Requisito essencial para garantir a qualidade do sistema desenvolvido pela empresa.

### Tipos de testes
**Testes unitários**
- Têm por objetivo testar as menores unidades do software de forma isolada.
- As "unidades" de um sistema podem ser entendidas como os componentes da aplicação, no caso do React.
- Deseja-se garantir que os componentes apresentam o comportamento esperado quando utilizados de forma isolada.
- Geralmente têm um baixo custo para automatização e podem ser executados rapidamente, inclusive por um servidor de integração contínua.

**Testes de integração**
- São utilizados para garantir o bom funcionamento quando as unidades do sistema interagem entre si.
- No React, podemos considerar um teste de integração quando testamos dois ou mais componentes ao mesmo tempo.
- Normalmente, criamos os testes de integração após os testes unitários.
São mais complexos e demoram mais tempo para serem executados.

**Testes E2E**
- Os testes de ponta a ponta visam testar um comportamento da aplicação (fluxo completo).
- Simulam as ações que o usuário realizaria na aplicação e é realizado quando a aplicação está rodando em um ambiente semelhante ao de produção, sendo os últimos testes a serem executados.
- A ideia é garantir o bom funcionamento de fluxos que não podem apresentar falhas.
- São os mais complexos, exigindo mais tempo para sua escrita e execução.

**Hierarquia de testes**
![alt text](image-5.png)

**Ferramentas de testes**
Usado em aula será o Jest e o Testing Library

- [Jest](https://jestjs.io/pt-BR/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress](https://www.cypress.io/)

**Estrutura dos testes**
![Fluxo de teste](image-6.png)

## Testes unitários II 

## Deployment 


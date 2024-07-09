# React II: Componentes Funcionais e Hooks



## React Funcional I - Componentes Funcionais e Estilização

### Componentes Funcionais no React.js

Os componentes funcionais são uma das formas de definir componentes no React.js. Eles são definidos como funções JavaScript que podem aceitar propriedades como parâmetros e retornar elementos React para renderização.

#### Para que servem?

1. **Simplicidade e Legibilidade:** Componentes funcionais são mais simples de escrever e geralmente possuem um código mais limpo e fácil de entender.
   
2. **Performance:** Por não terem o overhead de criar uma instância de classe como os componentes baseados em classes, os componentes funcionais podem ser mais rápidos para renderizar.

3. **Encapsulamento de Lógica:** Com a introdução dos Hooks no React (como o useState e useEffect), é possível encapsular estado e comportamento dentro de componentes funcionais, promovendo a reutilização de lógica entre componentes.

#### Como aplicar componentes funcionais?

Para criar um componente funcional em React.js, basta definir uma função que retorna JSX (JavaScript XML). Aqui está um exemplo básico de um componente funcional que exibe um texto simples:

```jsx
import React from 'react';

const MeuComponenteFuncional = () => {
  return (
    <div>
      <h1>Olá, Mundo!</h1>
      <p>Este é um exemplo de componente funcional em React.</p>
    </div>
  );
}

export default MeuComponenteFuncional;
```

No exemplo acima:
- `MeuComponenteFuncional` é uma função que retorna JSX.
- `React` é importado para que o código JSX seja transformado adequadamente.
- `export default` torna o componente disponível para ser importado e utilizado em outros lugares do código.

#### Como funcionam os componentes funcionais?

1. **Renderização:** Quando um componente funcional é renderizado, o React chama a função definida e renderiza o JSX retornado pela função.

2. **Estado e Ciclo de Vida:** Antes da introdução dos Hooks, os componentes funcionais não podiam gerenciar estado interno ou ciclo de vida. Com os Hooks, como `useState` e `useEffect`, os componentes funcionais agora podem gerenciar estado local efeitos secundários.

3. **Reatividade:** Componentes funcionais são reativos por natureza no React, o que significa que qualquer mudança no estado ou propriedades que afete a saída do componente resultará em uma atualização automática da interface do usuário.

Os componentes funcionais têm ganhado popularidade devido à sua simplicidade e à introdução dos Hooks, que tornaram possível encapsular mais lógica em componentes funcionais sem a necessidade de classes.

Para mais informações sobre como usar Hooks ou criar componentes funcionais avançados, consulte a documentação oficial do React em [React Docs](https://reactjs.org/docs/getting-started.html).

### Projeto To-do List
[To-do List](https://whimsical.com/mytodo-K6yrqHmjiKpPz16gm4kcGP)


### CSS Padrão vs CSS Modules

#### CSS Padrão

O CSS padrão é a forma tradicional de escrever estilos para páginas web. Nele, você cria seletores de estilo que podem ser aplicados globalmente a todos os elementos de uma página ou de forma específica a elementos individuais. Aqui estão os pontos principais sobre o CSS padrão:

**Como utilizar**

1. **Seletores Globais:** Você define estilos que podem afetar todos os elementos correspondentes na página.
   
   Exemplo:
   ```css
   body {
     font-family: Arial, sans-serif;
     background-color: #f0f0f0;
   }
   ```

2. **Seletores Específicos:** Você também pode aplicar estilos a elementos específicos usando seletores de classe, ID ou tipo.
   
   Exemplo:
   ```css
   .botao {
     background-color: #007bff;
     color: #fff;
     padding: 10px 20px;
     border: none;
     cursor: pointer;
   }
   ```

**Vantagens**

- **Simplicidade:** É fácil começar a escrever estilos diretamente no arquivo CSS.
  
- **Familiaridade:** Muitos desenvolvedores estão familiarizados com CSS padrão devido à sua longa história e uso generalizado.

**Desvantagens**

- **Escopo Global:** Os estilos definidos podem ter escopo global, o que pode causar conflitos entre estilos em grandes projetos.
  
- **Nomeclatura:** A nomeclatura de classes pode se tornar complexa para evitar conflitos e para manter um código organizado.

**CSS Modules**

CSS Modules são uma abordagem para resolver os problemas de escopo global e nomeclatura do CSS padrão, permitindo uma melhor encapsulação de estilos para componentes individuais em aplicações web. Aqui estão os pontos principais sobre CSS Modules:

**Como utilizar**

1. **Encapsulação de Estilos:** Cada arquivo CSS Module é tratado como um escopo isolado. Isso significa que os seletores de classe dentro de um módulo não colidirão com seletores de outros módulos ou do CSS global.

   Exemplo de arquivo CSS Module (`MeuComponente.module.css`):
   ```css
   .botao {
     background-color: #007bff;
     color: #fff;
     padding: 10px 20px;
     border: none;
     cursor: pointer;
   }
   ```

2. **Importação em Componentes:** No componente React, você importa os estilos do arquivo CSS Module e aplica as classes diretamente aos elementos JSX.

   Exemplo de uso em um componente React:
   ```jsx
   import React from 'react';
   import styles from './MeuComponente.module.css';

   const MeuComponente = () => {
     return (
       <button className={styles.botao}>Clique Aqui</button>
     );
   }

   export default MeuComponente;
   ```

**Vantagens**

- **Escopo Local:** Evita conflitos de estilo usando escopos locais para classes, garantindo que os estilos sejam aplicados apenas aos componentes específicos que os importam.
  
- **Nomeclatura Simplificada:** Não há necessidade de se preocupar com conflitos de nomeclatura global, pois cada arquivo CSS Module possui seu próprio escopo.

- **Manutenção:** Facilita a manutenção de estilos, já que cada componente tem seus próprios estilos encapsulados.

**Desvantagens**

- **Curva de Aprendizado:** Pode haver uma pequena curva de aprendizado para entender como importar e usar corretamente os CSS Modules em componentes React.

- **Configuração:** É necessário configurar o ambiente de desenvolvimento para suportar CSS Modules, embora a maioria dos projetos modernos (como Create React App) já forneça suporte nativo.

Tanto o CSS padrão quanto os CSS Modules têm seus usos e vantagens. O CSS padrão é simples e amplamente conhecido, enquanto os CSS Modules oferecem uma solução mais robusta e segura para aplicações modernas, especialmente aquelas que utilizam frameworks como React.js. Escolher entre um e outro depende das necessidades específicas do projeto e da preferência da equipe de desenvolvimento.

## React Funcional II - Hook de estado

### Hooks

Hooks são uma nova adição no React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe.

Hooks são retrocompatíveis. Esta página fornece uma visão geral de Hooks para usuários experientes em React. Esta é uma visão geral rápida.


[Hooks de forma resumida](https://pt-br.legacy.reactjs.org/docs/hooks-overview.html)

## React Funcional III - Hook de efeito

## React Funcional IV - Hooks de memoização

## React Funcional V - Hooks de contexto
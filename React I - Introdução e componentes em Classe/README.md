# React - Básico

## Introdução ao ReactJS

O ReactJs é uma biblioteca de Javascript eficiente e flexível, sendo útil no desenvolvimento de interfaces de usuário.

O ReactJs pode ser utilizado para diferentes finalidades:
  1. Aplicações web
  2. Aplicações Mobile
  3. Aplicações Desktop
  4. Aplicativos para TV
  5. Aplicativos de Realidade Aumentada

Ele nos permite criar interfaces complexas a partir de pedaçõs de código pequenos e isoladas, o que chamamos de componentes.

Link: [React learn](https://react.dev/learn)

O ReactJS é uma biblioteca JavaScript de código aberto desenvolvida pelo Facebook para criar interfaces de usuário (UI) em páginas web. Ele segue o paradigma de programação orientada a componentes, o que significa que as interfaces de usuário são construídas a partir de componentes reutilizáveis.

Aqui está uma visão geral de como o ReactJS funciona:

- Componentes: No React, você constrói sua interface de usuário dividindo-a em componentes independentes e reutilizáveis. Cada componente pode conter sua própria lógica, estado e marcação.

- Virtual DOM: O React utiliza um conceito chamado Virtual DOM (DOM Virtual) para aumentar o desempenho das atualizações na interface. Em vez de manipular diretamente o DOM do navegador, o React cria uma representação virtual do DOM em memória e compara-a com a versão anterior para determinar as alterações que devem ser feitas no DOM real. Isso minimiza as manipulações diretas do DOM, que são caras em termos de desempenho.

- Reconciliação: Quando o estado de um componente muda, o React re-renderiza apenas aqueles componentes que foram afetados pelas alterações de estado. Ele realiza uma comparação eficiente entre o Virtual DOM atual e o anterior para identificar as mínimas alterações necessárias no DOM real.

- Estado e Propriedades: Os componentes do React podem ter estado interno, que pode mudar ao longo do tempo, e propriedades (props), que são passadas de um componente pai para um componente filho. As alterações no estado de um componente podem resultar em uma atualização na interface do usuário.

- Ciclo de vida do componente: Os componentes do React têm um ciclo de vida que consiste em métodos que são executados em diferentes estágios do ciclo de vida do componente, como montagem, atualização e desmontagem. Isso permite que os desenvolvedores controlem o comportamento do componente em diferentes momentos.

- JSX: O React utiliza JSX (JavaScript XML), uma extensão de sintaxe que permite escrever marcação HTML dentro de JavaScript. Isso facilita a criação de componentes e a definição da estrutura da interface de usuário.

No geral, o ReactJS é uma poderosa biblioteca que simplifica o desenvolvimento de interfaces de usuário interativas e reativas, tornando o código mais fácil de manter e escalar.

### Compilers + Bundlers

Os compiladores e bundlers são ferramentas fundamentais no ecossistema do ReactJS para transformar e agrupar o código fonte em um formato que possa ser interpretado e executado pelos navegadores da web.

 1. Compiladores: No contexto do ReactJS, o compilador mais comumente utilizado é o Babel. O Babel permite que os desenvolvedores escrevam código JavaScript moderno, utilizando recursos como Arrow Functions, Classes, Template Strings, e muito mais, e o transforma em código JavaScript compatível com versões anteriores que possam ser executadas em navegadores mais antigos. Isso é crucial porque nem todos os navegadores suportam as últimas características do JavaScript. Além disso, o Babel também pode ser configurado para converter o JSX em chamadas de função JavaScript puras.

  2. Bundlers: Os bundlers, como o Webpack, são ferramentas que agrupam vários arquivos de código-fonte em um ou mais arquivos de saída, geralmente um único arquivo JavaScript. Eles também podem realizar outras tarefas, como transpilação, minificação, otimização e carregamento de módulos. O Webpack, em particular, é frequentemente usado com o ReactJS para gerenciar dependências, como componentes, estilos e imagens, e criar um pacote final que pode ser distribuído para o navegador. Ele também oferece funcionalidades avançadas, como code-splitting, lazy-loading e hot module replacement, que são úteis para otimizar o desempenho e a experiência do desenvolvedor.

Em resumo, os compiladores, como o Babel, são responsáveis por transformar o código-fonte do JavaScript moderno em uma forma compatível com diferentes navegadores, enquanto os bundlers, como o Webpack, são responsáveis por agrupar, transformar e otimizar esses arquivos de código-fonte e suas dependências em um pacote final para entrega ao navegador. Juntos, essas ferramentas facilitam o desenvolvimento de aplicativos ReactJS eficientes e compatíveis com uma ampla gama de navegadores.

#### Babel
O Babel é uma ferramenta de código aberto que permite aos desenvolvedores escrever código JavaScript usando as últimas funcionalidades da linguagem, mesmo que esses recursos não sejam suportados em todos os navegadores. Ele realiza a transpilação do código JavaScript moderno em uma versão compatível com versões anteriores da linguagem que podem ser interpretadas e executadas em navegadores mais antigos.

Aqui está uma visão geral de como o Babel funciona:

- Análise: O Babel começa analisando o código fonte JavaScript fornecido como entrada. Ele usa um analisador para transformar o código em uma árvore de sintaxe abstracta (AST), que representa a estrutura do código em uma forma mais manipulável.

- Transformação: Em seguida, o Babel aplica uma série de plugins de transformação à AST. Cada plugin é responsável por transformar uma parte específica do código, como converter sintaxe ES6 para ES5, processar JSX, remover código morto ou aplicar otimizações.

- Geração de código: Depois que todas as transformações forem aplicadas com sucesso, o Babel gera código JavaScript de saída a partir da AST modificada. Este código de saída é geralmente em uma versão mais antiga do JavaScript, garantindo que seja compatível com uma ampla gama de navegadores.

O Babel é altamente configurável, permitindo que os desenvolvedores escolham quais plugins desejam usar com base nas necessidades do projeto. Ele também pode ser integrado a outras ferramentas, como bundlers (por exemplo, Webpack) e frameworks (por exemplo, React), para automatizar o processo de transpilação como parte do fluxo de trabalho de desenvolvimento. 
Ele realiza isso transpilando o código fonte JavaScript moderno em uma versão mais antiga e amplamente suportada da linguagem.

#### WebPack
O Webpack é tipo um maestro para a sua orquestra de código JavaScript. Ele pega todos os seus arquivos de código-fonte, como aqueles que você escreveu para o seu aplicativo React, e os agrupa todos juntos em um pacote único e eficiente que o navegador pode entender.

Vamos entrar em um pouco mais de detalhes técnicos agora. O Webpack funciona com base em um conceito chamado de "módulos". Você pode pensar em módulos como blocos de construção do seu aplicativo. Cada arquivo JavaScript, CSS, imagem ou qualquer outro tipo de recurso é tratado como um módulo pelo Webpack.

Quando você executa o Webpack, ele começa pelo seu arquivo principal, geralmente chamado de "entry point". A partir daí, ele começa a olhar para todas as dependências desse arquivo principal e de seus próprios arquivos dependentes. Ele vai seguindo essas dependências, agrupando tudo junto e criando um único pacote que pode ser enviado para o navegador.

Mas aqui está a parte realmente legal: o Webpack não apenas agrupa os arquivos, ele também pode otimizá-los. Isso significa que ele pode minimizar o tamanho dos arquivos, remover partes do código que não são usadas e até mesmo dividir seu código em partes menores para que apenas o necessário seja carregado quando o usuário acessa seu aplicativo. Isso é muito útil para manter o tempo de carregamento do seu aplicativo baixo e a experiência do usuário alta.

Além disso, o Webpack é altamente configurável. Você pode adicionar plugins e ajustar as configurações para atender às necessidades específicas do seu projeto. Então, para resumir, o Webpack é como um assistente de palco mágico que organiza e otimiza seu código para que seu aplicativo brilhe no palco da web!

## React Legado I - Componentização

### Rendering Pattern
O termo "Rendering pattern" se refere aos diferentes métodos e abordagens usados para renderizar interfaces de usuário em aplicativos web. O processo de renderização é fundamental para exibir conteúdo visual em um navegador ou em outros meios digitais. Aqui está uma visão geral de alguns padrões comuns de renderização:

1. Server-side rendering (SSR): Nesse padrão, a renderização da interface do usuário é feita no servidor antes de enviar o HTML resultante para o navegador. Isso significa que o navegador recebe um HTML completo pronto para ser exibido imediatamente. O SSR é geralmente usado para melhorar o desempenho inicial e a acessibilidade dos aplicativos, já que o conteúdo é visível rapidamente para o usuário.

2. Client-side rendering (CSR): Nesse padrão, a renderização da interface do usuário é feita no navegador do cliente usando JavaScript. O navegador baixa o HTML inicial e os arquivos JavaScript necessários, e então o JavaScript é executado para montar a interface do usuário no navegador. O CSR é comumente usado em aplicativos web modernos, especialmente aqueles construídos com bibliotecas como ReactJS ou frameworks como Angular e Vue.js.

3. Hybrid rendering: Esse padrão combina elementos de SSR e CSR para aproveitar as vantagens de ambos. Ele usa SSR para renderizar a interface do usuário inicialmente no servidor, fornecendo um conteúdo inicial rapidamente. Em seguida, o JavaScript do cliente assume o controle para adicionar interatividade e atualizações dinâmicas à interface do usuário. O Vue.js, por exemplo, oferece recursos para suportar esse tipo de abordagem.

4. Incremental rendering: Esse padrão é sobre renderizar partes da interface do usuário de forma incremental à medida que os dados se tornam disponíveis ou à medida que o usuário interage com o aplicativo. Isso pode ser feito para otimizar o desempenho, especialmente em aplicativos com grandes conjuntos de dados. Bibliotecas como React e Vue.js suportam técnicas de atualização incremental para garantir uma experiência de usuário suave.

Esses são apenas alguns exemplos de padrões de renderização. A escolha do padrão depende dos requisitos e das características específicas do aplicativo, como desempenho, SEO, experiência do usuário e complexidade da interface do usuário. Cada padrão tem suas próprias vantagens e desvantagens, e é importante selecionar o mais adequado para o seu caso de uso específico.

O React se encaixa principalmente no padrão de renderização conhecido como Client-side rendering (CSR), embora também possa ser usado em abordagens híbridas.

No Client-side rendering (CSR), o React permite que a renderização da interface do usuário seja feita no navegador do cliente usando JavaScript. O navegador primeiro recebe um HTML inicial básico, muitas vezes chamado de "shell" da aplicação, e, em seguida, o React toma conta do controle da interface do usuário, montando e atualizando os componentes conforme necessário. Essa abordagem oferece uma experiência de usuário interativa e responsiva, especialmente em aplicativos web complexos e dinâmicos.

No entanto, o React também suporta abordagens híbridas, onde você pode aproveitar o Server-side rendering (SSR) para renderizar a interface do usuário inicialmente no servidor e, em seguida, usar o React no cliente para adicionar interatividade e atualizações dinâmicas. Essa abordagem combina os benefícios do SSR (como SEO aprimorado e melhor desempenho inicial) com a flexibilidade e a interatividade do CSR.

Portanto, enquanto o React é mais frequentemente associado ao CSR, ele oferece flexibilidade para adaptar-se a diferentes necessidades e cenários de renderização, incluindo abordagens híbridas.

5. SPA:
SPA significa Single Page Application, que em português é Aplicação de Página Única. É um modelo de arquitetura de software para aplicativos web onde todo o código é baixado de uma só vez quando o usuário acessa a aplicação pela primeira vez e, a partir daí, a interação com o aplicativo ocorre dinamicamente em uma única página web, sem a necessidade de recarregar a página inteira.

Em uma SPA, o navegador carrega o aplicativo uma única vez e, em seguida, as interações do usuário são tratadas por meio de solicitações e respostas assíncronas para o servidor, normalmente utilizando JavaScript para manipular o DOM (Documento Object Model) e atualizar a interface do usuário de forma dinâmica.

As principais características de uma SPA incluem:

- Navegação fluida: Os usuários podem navegar entre diferentes seções do aplicativo sem a necessidade de carregar uma nova página, proporcionando uma experiência mais rápida e suave.

- Interatividade em tempo real: As ações do usuário, como preencher formulários, enviar dados e receber respostas do servidor, podem ser tratadas de forma assíncrona, sem a necessidade de recarregar a página.

- Roteamento dinâmico: O roteamento é gerenciado no lado do cliente, permitindo que o aplicativo mude de página de forma dinâmica sem a necessidade de carregar uma nova página do servidor.

- Melhor desempenho: Como o aplicativo é carregado uma única vez, e as atualizações são feitas dinamicamente, o desempenho geral pode ser melhorado em comparação com aplicativos web tradicionais.

As SPAs são frequentemente implementadas usando frameworks e bibliotecas JavaScript modernas, como React, Angular, Vue.js, entre outros. Elas são amplamente utilizadas para criar aplicativos web interativos e responsivos, como redes sociais, aplicativos de e-commerce, ferramentas de produtividade e muito mais.

### Componente
Um componente no React é uma parte reutilizável e independente da interface do usuário, geralmente definida em JavaScript, que encapsula a lógica e a apresentação de uma parte específica da interface do usuário. Aqui está uma visão geral de como criar e utilizar um componente no React:

1. Definindo um Componente:

Você pode definir um componente criando uma classe ou uma função. Aqui está um exemplo de como definir um componente de função simples:
```
import React from 'react';

function MeuComponente() {
    return <h1>Olá, mundo!</h1>;
}

export default MeuComponente;
```
Ou você pode usar uma classe de componente:
```
import React, { Component } from 'react';

class MeuComponente extends Component {
    render() {
        return <h1>Olá, mundo!</h1>;
    }
}

export default MeuComponente;

```
2. Utilizando um Componente:

Depois de definir um componente, você pode usá-lo em outros lugares do seu aplicativo. Você pode simplesmente importar e usar o componente como faria com qualquer outro elemento do React. Por exemplo:

```
import React from 'react';
import MeuComponente from './MeuComponente';

function App() {
    return (
        <div>
            <h1>Meu Aplicativo React</h1>
            <MeuComponente />
        </div>
    );
}

export default App;

```

Aqui, estamos importando o componente MeuComponente e o utilizando dentro do componente App.

3. Passando Propriedades para Componentes:

Você pode passar dados para componentes como propriedades (props). Isso permite que os componentes sejam configurados de forma dinâmica. Por exemplo:

```
function Saudacao(props) {
    return <h1>Olá, {props.nome}!</h1>;
}

function App() {
    return <Saudacao nome="João" />;
}

```

Aqui, estamos passando a propriedade nome para o componente Saudacao e exibindo-a dinamicamente na mensagem de saudação.

### Atomic Design Methodology
O Atomic Design é uma metodologia para design de interfaces de usuário (UI) proposta por Brad Frost. Ele descreve a UI como uma hierarquia de componentes modulares e independentes, começando desde os blocos de construção básicos até os elementos mais complexos da interface.

A metodologia Atomic Design é baseada em cinco níveis de abstração, que são:

1. Átomos: Os átomos são os blocos de construção mais básicos e reutilizáveis da interface, como botões, caixas de texto, ícones, etc. Eles não podem ser divididos em partes menores e geralmente correspondem aos elementos HTML mais simples.

2. Moléculas: As moléculas são combinações de átomos que trabalham juntos para formar um componente mais complexo e funcional. Por exemplo, um campo de formulário (input) combinado com um botão pode formar uma molécula de formulário.

3. Organismos: Os organismos são grupos de moléculas e/ou átomos que funcionam juntos como um componente autônomo e completo. Eles representam partes distintas e reutilizáveis de uma interface, como um cabeçalho de página, uma barra lateral ou um menu de navegação.

4. Templates: Os templates são estruturas de alto nível que definem o layout geral da página e organizam os organismos em uma hierarquia coesa. Eles representam uma visão mais abstrata da interface e ajudam a definir os padrões de layout e fluxo de conteúdo.

5. Páginas: As páginas são instâncias específicas de templates que representam interfaces de usuário completas e prontas para uso. Elas são compostas por uma combinação de átomos, moléculas, organismos e templates para criar uma experiência de usuário coesa e funcional.

Ao seguir a metodologia Atomic Design, os designers e desenvolvedores podem criar interfaces de usuário consistentes, modulares e escaláveis, que podem ser facilmente adaptadas e expandidas ao longo do tempo. Isso ajuda a promover a reutilização de código, simplifica a manutenção e facilita a colaboração entre equipes de design e desenvolvimento.

Link: [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)

#### Vantagens
- Reutilização de código
- Facilidade na manutenção/refatoração do código
- Abstração de componentes de interface 

## React Legado II - Props e Estados

No React, tanto os props quanto os estados são fundamentais para o desenvolvimento de componentes dinâmicos e interativos.

### Props (Propriedades)
Props são atributos passados de um componente pai para um componente filho. Eles são imutáveis (ou seja, somente leitura) dentro do componente filho. As props são usadas para passar dados de um componente para outro e são definidas como atributos no componente pai.

Exemplo:
Suponha que temos um componente Pai que passa uma propriedade nome para um componente Filho.

```
// Componente Pai
import React from 'react';
import Filho from './Filho';

function Pai() {
  return (
    <div>
      <Filho nome="João" />
    </div>
  );
}

export default Pai;

// Componente Filho
import React from 'react';

function Filho(props) {
  return (
    <div>
      <p>Olá, {props.nome}!</p>
    </div>
  );
}

export default Filho;

```

Neste exemplo, o componente Pai passa a propriedade nome com o valor "João" para o componente Filho, que então exibe "Olá, João!".

### Estados 
Estados são variáveis que pertencem a um componente e controlam seu comportamento e renderização. Ao contrário das props, os estados são mutáveis e são gerenciados pelo próprio componente. Quando um estado é alterado, o componente é re-renderizado para refletir essa mudança.

Exemplo:
Suponha que queremos criar um contador simples que seja um componente do React e mantenha o número de cliques como estado interno.

```
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

export default Contador;

```

Então, no exemplo do contador, nós usamos uma coisinha chamada useState que é como um armário onde guardamos informações sobre o nosso contador. Começamos com ele valendo zero, porque não clicamos em nada ainda, né? E quando a gente clica no botão, a função setContador dá uma atualizada nesse valor. Toda vez que apertamos o botão, o número aumenta e a tela se atualiza pra mostrar o novo valor.

Saca só, props são como mensagens que um componente passa para o outro, tipo, o pai fala pro filho o que ele precisa saber. E estados são como memórias internas do componente, são como anotações que ele faz pra se lembrar de coisas que mudam, tipo esse contador que tá sempre aumentando.
 
## React Legado III - Ciclo de vida

O ciclo de vida no React se refere ao conjunto de fases pelas quais um componente passa desde sua criação até sua remoção da interface do usuário. Isso permite que os desenvolvedores controlem o comportamento do componente em diferentes momentos de sua existência.

Antes da versão 16.3 do React, havia três fases principais no ciclo de vida dos componentes de classe: montagem, atualização e desmontagem. Com a introdução dos hooks, o ciclo de vida dos componentes funcionais também passou a ser mais granular.

Vou explicar o ciclo de vida dos componentes de classe, que é o mais tradicional:

Montagem (Mounting):

constructor(): O método constructor é chamado antes que o componente seja montado. É usado para inicializar o estado e vincular métodos de evento.
render(): O método render é obrigatório e retorna o JSX que representa o componente.
componentDidMount(): É chamado imediatamente após o componente ser montado no DOM. É frequentemente usado para fazer solicitações de dados ou configurar temporizadores.
Atualização (Updating):

shouldComponentUpdate(): É chamado antes de renderizar novamente o componente. Pode ser usado para otimizar a renderização, evitando atualizações desnecessárias.
render(): Renderiza novamente o componente com as atualizações.
componentDidUpdate(): É chamado depois que o componente é renderizado novamente no DOM. É útil para realizar operações que dependem da atualização do DOM, como a atualização de um plugin externo.
Desmontagem (Unmounting):

componentWillUnmount(): É chamado imediatamente antes do componente ser removido do DOM. É usado para limpar recursos como temporizadores ou cancelar solicitações de rede.
Além desses, existem métodos adicionais que lidam com erros (componentDidCatch()) e mudanças nas props (componentDidUpdate() e getDerivedStateFromProps()).

Com o uso de hooks em componentes funcionais, temos o equivalente a muitos desses métodos do ciclo de vida. Por exemplo, o hook useEffect é usado para substituir componentDidMount, componentDidUpdate e componentWillUnmount.

Em resumo, o ciclo de vida no React oferece aos desenvolvedores controle sobre o comportamento dos componentes em diferentes estágios de sua vida, permitindo que executem ações específicas conforme necessário.


Basicamente é o fluxo de renderização dos componentes do React. Em outras palavras, trata-se de todas as etapas pelas quais um componente passa desde o seu surgimento (montagem) até o seu desaparecimento (desmontagem) na aplicação.

Conhecimento essencial para quem trabalhou no React. Ter esse conhecimento irá te ajudar a otimizar mais as suas aplicações.

#### Fases do ciclo de vida de um componente React

O ciclo de vida de um componente apresenta três fases:

Etapas do ciclo de vida de componentes REACT:
1. Montagem
    Consiste no momento em que o componente é criado em tela (montado no DOM).
    Nesse momento o componente
    - Recebe as props
    - Realiza chamadas HTTP
    - Inicializa seus estatos (states)
2. Atualização
    - Sempre que alguma mudança ocorra no componente, seja por alguma alteração de uma prop ou pela alteração de algum estado, passaremos por esta etapa do ciclo de vida
3. Desmontagem
    - Consiste no momento em que o componente é removido da tela por não ser mais necessário. Isso acontece quando mudamos de página ou quando alguma interação do usuário implica na remoção de um determinado componente da tela para dar espaço a outro componente, por exemplo. 

Todas as fases/etapas do ciclo de vida irão dispor de alguns métodos que nos permitem acessá-las.

Métodos do ciclo de vida:
1. Montagem
- ```constructor```
- ```componentWillMount```
- ```render```
- ```componentDidMount```

2. Atualização
- ```shouldComponentUpdate```: um método que será chamado sempre que houver uma mudança de props ou estados. Caso o seu retorno seja ```true```, ocorrerá uma atualização do componente. Caso o retorno seja ```false```, nada irá acontecer.
- ```componentWillUpdate```: O processo de atualiação do componente foi iniciado.
- ```render```: renderização do componente.
- ```componentDidUpdate```: Componente atualizado

3. Desmontagem
- ```componentWillUnmount```: Método chamado pouco antes do momento em que o componente é desmontado (removido) da tela. Pode ser muito útil para, por exemplo:
let numero = 20; // Inferência de tipo
// numero = 'aosidjasoid' // assim ele barra a atribuição de strings

const pi = 3.1415;

// pi = 10 // da erro por que é const

let nome: string = "Bruno";

// nome = 10 // a mesma coisa do exemplo de número, assim que o tipo é inferido ele fica fixo nesse tipo

let correta: boolean = true;

let resultado = numero * pi;

// const nomeDoUsuario = prompt('Qual é o seu nome??')

// console.log(nomeDoUsuario?.toLocaleLowerCase)

// number[] ou Array<number>
const numeros: Array<number> = [1, 2, 3, 4, 5];
// ! const numeros: any[] = [1,2,3,4,5, {},()=>{}, true]
// Evite ao máximo usar o any!

// const misto:(string | number)[]/*union type */ = ["Bruno", 27, 1.77]

const idades: number[] = [];

idades.push(23);
idades.push(28);
idades.push(12);
idades.push(49);
idades.push(16);

const menoresDeIdade = idades.filter((idade) => idade < 18);

console.log(menoresDeIdade);

for (const idade of idades) {
  console.log(idade);
}

const pessoaTuple: [string, number] = ["Bruno", 27];

// Object Types

// Interface
// Tipo customizado
interface Person {
  nome: string;
  idade: number;
  profissao?: string;
  altura: number;
}

// type
// Tipo customizado
type Pessoa = {
  nome: string;
  idade: number;
  altura: number;
  profissao?: string;
};

const pessoa: Person = {
  nome: "Bruno",
  idade: 27,
  profissao: "Desenvolvedor",
  altura: 1.77,
};
// pessoa.peso = 70 || da erro :/

const pessoa2: Pessoa = {
  nome: "Helena",
  altura: 1.2,
  idade: 8,
};
console.log(pessoa2);
console.log(pessoa);

pessoa2.profissao = "Estudante";
console.log(pessoa2);


// literal types e union types e type aliases
type Criterio = "greater" | "lower"

function chooseNumber(
  num1: number,
  num2: number,
  criterio?: Criterio
):number {
  switch (criterio) {
    case "greater":
      return num1 > num2 ? num1 : num2;
    case "lower":
      return num1 < num2 ? num1 : num2;
    default:
      const numAleatorio = Math.random();

      if (numAleatorio >= 0.5) return num1;
      return num2;
  }
}

const numEscolhido = chooseNumber(10, 20, 'lower');

console.log("Numero Escolhido: ", numEscolhido);

function somar (num1:number, num2:number):number{
  return num1 + num2
}

// Utility types - A ideia deles é permitir que você crie novo tipos a partir de tipos já existentes

// 1. Partial
type PersonPartial = Partial<Person> // Constrói um tipo com todas as propriedades de Typeset para opcional. Este utilitário retornará um tipo que representa todos os subconjuntos de um tipo dado.

// 2. Required
type PersonRequired = Required<Person> // Constrói um tipo que consiste em todas as propriedades de Typeset para required. O oposto de Partial.

// 3. Pick
type PersonPicked = Pick<Person, 'nome' | 'idade'> // Constrói um tipo escolhendo o conjunto de propriedades Keys(literal de string ou união de literais de string) de Type.

// 4. Omit
type PersonOmit = Omit<Person, 'profissao'> // Constrói um tipo escolhendo todas as propriedades de Typee então removendo Keys(string literal ou união de strings literais). O oposto de Pick.

// 5. Exclude
type CriterioExclude = Exclude<Criterio, 'greater'> // Constrói um tipo excluindo de UnionTypetodos os membros da união que são atribuíveis a ExcludedMembers.

// 6. Record
type Pessoas = Record<string, Person> 
/* type Pessoas = {
  [x: string]: Person;
} */
// Ele vai criar um objeto, a chave vai ser o tipo que você escolher e o valor vai ser o tipo que você colocar logo após,

const pessoas: Pessoas = {
  '123.456.789-00': {
    nome: 'Fulano',
    altura: 1.7,
    idade: 21
  },
  '123.456.789-01': {
    nome: 'Fulana',
    altura: 1.5,
    idade: 22
  }
}
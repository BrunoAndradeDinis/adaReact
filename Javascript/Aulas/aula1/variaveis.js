/* 
  Utilize sempre o Camel case no Javascript
  Javascript possui tipagem dinâmica: infere os tipos de dados
  Javascript possui uma tipagem fraca

*/
// console.log(curso, topico) || Nesse formato ela existe antes mesmo de ser declarada por conta do var ser uma váriavel global
// console.log(notaDoAluno) || Esse não tem como utilizar por conta do let não ter sido inicializao ainda no código 

//comando let: cria variável (não precisa especificar tipo)
let nome = 'Bruno' //string
let idade = 27 //number
let altura = 1.75 //number
let estudando = true // boolean / booleano: verdadeiro ou falso

let nulo = null // null
let semconteudo // undefined
let outra = undefined // undefined
var curso = "Front end em React", // declaração de várial de escopo global, não recomendado o uso
  topico = "Javascript Básico"

console.log(curso, topico)

const dataNascimento = '08/11/1996' //não muda, constante

console.log(nome)
console.log(idade)
console.log(altura)
console.log(estudando)

console.log(nome, typeof nome) // typeof: é operador unário
console.log(idade, typeof idade)
console.log(dataNascimento, typeof dataNascimento)
console.log(altura, typeof altura)
console.log(estudando, typeof estudando)
console.log(nulo, typeof nulo)
console.log(semconteudo, typeof semconteudo)
console.log(outra, typeof outra)
console.log(variavel, typeof variavel)

let notaDoAluno = 10
const mediaDoaluno =  8

notaDoAluno = 9
// mediaDoaluno = 5 // !! não é permitido
console.log(notaDoAluno)
console.log(mediaDoaluno)


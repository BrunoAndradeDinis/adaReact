// Object Literal

const array = ["Bruno", 27, 1.75, true]

// Declaração com { 'chave': 'valor'}
const pessoa = {
  nome: 'Bruno',
  idade: 27,
  altura: 1.75,
  ehProgramador: true,
  hobbies: ["Academia", "Tocar violão", "Jogar CS"],
  imprimirAlgo: () => {
    console.log("Chamou a função!")
  }
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.hobbies)
console.log(pessoa['altura'])

// Adicionando props
pessoa.profissao = "Desenvolvedor"

// Alterando 
pessoa.nome = "Bruno de Andrade"

console.log(pessoa)
// Deletando
delete pessoa.altura
console.log(pessoa)

pessoa.imprimirAlgo()

// Simplificado
const idade = 27
const altura = 1.77

const dados = {
  idade,
  altura
}
console.log(dados) // { idade: 27, altura: 1.77 }

// desestrutucação
console.clear()
let {nome, hobbies} = pessoa

console.log(nome, hobbies)
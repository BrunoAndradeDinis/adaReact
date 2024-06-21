const prompt = require('readline-sync')

// let saldo = Number(prompt.question('Qual eh o seu saldo? \n'))


// while (saldo < 0 ) {
//   saldo = Number(prompt.question('Saldo invalido! Por favor, informe o saldo novamente \n'))
// }

// console.log(saldo, typeof saldo)

// Exemplo 2
/*
let notaDoAluno = Number(prompt.question("Informe a nota do aluno: \n"))

let somaDasNotas = 0 // acumulador
let qtdNotasValidas = 0 // Acumulador com a quantidade de notas digitadas.

while(notaDoAluno >= 0){
  somaDasNotas += notaDoAluno
  qtdNotasValidas++ // pós-incremento

  notaDoAluno = Number(prompt.question("Informe a proxima nota: \n"))
}

console.log(somaDasNotas, qtdNotasValidas)
console.log("A média das notas é:", somaDasNotas / qtdNotasValidas)
*/

// Exemplo 3
// Math.random() => entre 0 e 1
/*
let numeroAleatorio = Math.round(Math.random() * 10)

console.log(numeroAleatorio)

let numeroDoUsuario = Number(prompt.question("Informe um numero entre o 0 e 10 \n"))

let tentativas = 0

console.log(numeroAleatorio)

while(numeroAleatorio !== numeroDoUsuario){
  console.log("Você errou o numero! Tente novamente...")
  numeroDoUsuario = Number(prompt.question('Informe um número entre 0 e 10: \n'))
  tentativas++
}

console.log("Parabéns! Você acertou! O numero era: ", numeroAleatorio, ", em ", tentativas, " tentativas!")
*/

// Exemplo 4
// Loop com contador
/*
let contador = 0

while(contador < 5){
  console.log(contador)
  contador++

  if(contador == 2){
    // break - ele para o nosso código e interrompe o loop
    // continue - ele quebra o loop na condição aplicada até a sua linha e joga para a próxima execução.
  }
  console.log('depois do if')
}
*/

// Exemplo 5
// DO-WHILE - ele executa pelo menos uma vez par no final ele fazer a comparação.

let saldo;


do {
  saldo = Number(prompt.question('Informe um saldo valido: \n'))
} while (saldo < 0 ) 
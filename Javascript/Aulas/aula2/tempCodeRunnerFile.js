const prompt = require("readline-sync")

const idade = prompt.question("Qual a sua idade? \n")

const resposta = idade >= 18 ? "Maior de idade." : idade >= 16 ? "Você é menor de idade mas pode votar." : "Você é menor de idade e não pode votar."

console.log(resposta)
// Selecionar elementos HTML da nossa página utilizando o document


// 1. Pelo nome da tag
const todosH1 = document.getElementsByTagName('h1') // assim ele retorna um array com todas as tags correspondente ao parâmetro.
const todosP = document.getElementsByTagName('p') // assim ele retorna um array com todas as tags correspondente ao parâmetro.
console.log(todosH1[0])
console.log(todosP)

// 2. Pelo nome da classe
const todosParagrafos = document.getElementsByClassName('p')

console.log(todosParagrafos)

// 3. Pelo name da tag
const emailInput = document.getElementsByName('email')

console.log(emailInput)

// 4. Pelo nome do ID
const jsLogoImg = document.getElementById('js-logo')

console.log(jsLogoImg)

// 5. Query Selector
const imagem = document.querySelector('body > img#js-logo')

const paragrafo = document.querySelector('p') // ele só busca o primeiro que atende ao parâmetro
const paragrafos = document.querySelectorAll('p') // ele só busca o primeiro que atende ao parâmetro

console.log(imagem)
console.log(paragrafo)
console.log(paragrafos)

console.clear()

/// Acessando ou alterando o conteúdo HTML das tags
const primeiroParagrafo = document.querySelector('p.paragrafo')

console.log(primeiroParagrafo)

console.log('textcontent:', primeiroParagrafo.textContent) // ele pega somente o conteúdo como um texto
console.log('innerHTML:', primeiroParagrafo.innerHTML) // ele pega todo conteúdo inclusive as tags HTML 

primeiroParagrafo.innerHTML = '<strong>Outra coisa</strong>'
console.clear()

emailInput[0].value = "bruno.dinis@gmail.com"

// Criando elementos na página HTML

const novaTagLI = document.createElement('li')
const listaLis = document.querySelectorAll('ul > li')
novaTagLI.textContent = "Novo Item 6"
console.log(novaTagLI)

const lista = document.querySelector('ul#lista')

// lista.appendChild(novaTagLI)
lista.insertBefore(novaTagLI, listaLis[5])

// Removendo itens
lista.removeChild(novaTagLI)
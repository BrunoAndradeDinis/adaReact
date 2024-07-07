const button = document.querySelector("section button");

console.log(button);

// button.addEventListener('click', (event)=>{
//   alert('Você clicou no botão!')
// })

const botaoAumentar = document.querySelector("#aumentar-botao");
const botaoDiminuir = document.querySelector("#diminuir-botao");

const contadorElemento = document.querySelector("#contador");

const input = document.querySelector("#input");

botaoAumentar.addEventListener("click", (event) => {
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual + 1;
  validaCor();

  botaoAumentar.classList.add("btn");
  botaoDiminuir.classList.remove("btn");
});

botaoDiminuir.addEventListener("click", (event) => {
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual - 1;
  validaCor();
  botaoAumentar.classList.remove("btn");
  botaoDiminuir.classList.add("btn");
});

input.addEventListener("input", (event) => {
  console.log("Saída: ", input.value);
});

// Adicionando estilos inline no elemnto contador
function validaCor() {
  if (contadorElemento.textContent < 0) {
    contadorElemento.style.color = "red";
  } else if (contadorElemento.textContent == 0) {
    contadorElemento.style.color = "purple";
  } else {
    contadorElemento.style.color = "lightgreen";
  }
}

contadorElemento.style.padding = "0 2rem";
contadorElemento.style.backgroundColor = "#aaa";
contadorElemento.style.width = "10vw";

// Manipular classes
botaoAumentar.classList.add("btn");

const themeButton = document.querySelector("#theme");

let darkTheme;

// Definindo uma função que será executada ao carregar a janela
window.onload = () => {
 const isDarkThemeStorage =  localStorage.getItem('isDarkTheme')

 darkTheme = isDarkThemeStorage === 'true'

 theme(darkTheme)
}

themeButton.addEventListener("click", () => {
  darkTheme = !darkTheme

  localStorage.setItem('isDarkTheme', darkTheme)

  theme(darkTheme)
});

function theme (darkTheme){
  const body = document.querySelector("body");
  if(darkTheme){
    body.style.backgroundColor = "#222"
    body.style.color = "antiquewhite"
  } else{
    body.style.backgroundColor = "antiquewhite"
    body.style.color = "black"
  }
}
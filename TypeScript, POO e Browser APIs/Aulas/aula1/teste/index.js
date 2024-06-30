import fs from "fs"
// const aula = "JSON";

// console.log(aula);

// const ferramenta = "ESLint";

// ferramenta.push("ora");

fs.readFile("../../../../../../../../Estudos/Ada/Ada - React/TypeScript, POO e Broweser APIs/Aulas/aula 1/teste/.prettierrc.json", (erro, dados) => {
  if(erro){
    console.log("Erro: ", erro);
  } else {
    // dados: Buffer com os dados do arquivo json
    const dadosD = JSON.parse(dados); // convertendo o buffer em um objeto do JS
    console.log(dadosD.semi)
    console.log(typeof dados);
  }
});

// Convertendo JSON, em formato de string, para um objeto
const jsonString =` { 
  "nome": "Bruno"
}`;

console.log(JSON.parse(jsonString))

// Convertendo um objeto de JS, em um JSON (string)
const pessoa = {
  nome: "Peter park",
  papel: "Miranha"
}

console.log(JSON.stringify(pessoa))
console.log("Fetch API");

// then / catch
fetch(`https://viacep.com.br/ws/01001000/json/`)
  .then((response) => {
    console.log("Deu bom: ", response);
    response.json().then((dados) => console.log(dados));
  })
  .catch((error) => {
    console.log("Erro:", error);
  });

// async / await
const elemento = document.getElementById("dados");

async function obterDadosDoCep() {
  try {
    const cep = document.getElementById("cep").value;
    console.log(cep);

    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    const dados = await resposta.json();

    elemento.innerText = `
  Nome da rua: ${dados.logradouro} \n
  Número do cep: ${dados.cep} \n
  Nome do bairro: ${dados.bairro} \n
  `;

    return dados;
  } catch (error) {
    console.log("Deu ruim:", error);
  } finally {
    console.log("Terminou a requisição");
  }
}

obterDadosDoCep();

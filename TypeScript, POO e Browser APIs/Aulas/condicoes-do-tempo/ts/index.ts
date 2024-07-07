// dados
const form = document.querySelector("form");
const input: HTMLInputElement | null = document.querySelector("#input-local");
const sectionInfos = document.querySelector("#weather-info")

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("Mandou o form! Submetido com sucesso!");

  if (!input || !sectionInfos) return;

  const local = input.value;

  if (local.length < 3) alert("O local precisa ter, pelo menos, 3 letras!");

  try{
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=3f33e8701b88c84dfc5b106c23d3f0e0&lang=pt_br&units=metric`
    );
    const data = await response.json();
  
    console.log(data)
  
    const infos = {
      temperatura: Math.round(data.main.temp),
      local: data.name,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    }

    sectionInfos.innerHTML = `
    <div class="weather-data">
         <h2>${infos.local}</h2>
 
         <span>${infos.temperatura}</span>
       </div>
       <img src="${infos.icon}">
   `
  } catch (error){
    console.log('Deu um erro na obtenção nos dados da API')
  } finally{
    console.log('Deu bom!')
  }

});

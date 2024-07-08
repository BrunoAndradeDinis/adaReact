// Variáveis
const form = document.querySelector("form");
const input: HTMLInputElement | null = document.querySelector("#input-local");
const sectionInfos = document.querySelector("#weather-info")

// Pegando a geolozalização 
window.addEventListener('load', ()=>{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
          obterNomeCidade(latitude, longitude);
    });
  } else {
    alert("Geolocalização não é suportada por esse navegador.");
  }
  
  async function obterNomeCidade(latitude: number, longitude:number) {
    var apikey = '1492951fb1f540178a066143796e94d8';
    var url = `https://api.opencagedata.com/geocode/v1/json?key=${apikey}&q=${latitude}+${longitude}&pretty=1`;
  
    try {
      const response = await fetch(url)
      const data = await response.json()

      var cidade = data.results[0].components.city;
      console.log(cidade)
      if(!input) return
      input.value = cidade
      
    } catch(error){
      console.log('deu ruim', error)
    }
  }
  
})

// puxando os dados do form para utilizar na API.
form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const idKey = "3f33e8701b88c84dfc5b106c23d3f0e0"

  if (!input || !sectionInfos) return;

  const local = input.value;

  if (local.length < 3) alert("O local precisa ter, pelo menos, 3 letras!");

  try{
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${idKey}&lang=pt_br&units=metric`
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
 
         <span>${infos.temperatura}ºC</span>
       </div>
       <img src="${infos.icon}">
   `
  } catch (error){
    console.log('Deu um erro na obtenção nos dados da API')
  } finally{
    console.log('Deu bom!')
  }

});

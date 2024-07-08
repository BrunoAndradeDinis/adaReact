"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Variáveis
const form = document.querySelector("form");
const input = document.querySelector("#input-local");
const sectionInfos = document.querySelector("#weather-info");
// Pegando a geolozalização 
window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            obterNomeCidade(latitude, longitude);
        });
    }
    else {
        alert("Geolocalização não é suportada por esse navegador.");
    }
    function obterNomeCidade(latitude, longitude) {
        return __awaiter(this, void 0, void 0, function* () {
            var apikey = '1492951fb1f540178a066143796e94d8';
            var url = `https://api.opencagedata.com/geocode/v1/json?key=${apikey}&q=${latitude}+${longitude}&pretty=1`;
            try {
                const response = yield fetch(url);
                const data = yield response.json();
                var cidade = data.results[0].components.city;
                console.log(cidade);
                if (!input)
                    return;
                input.value = cidade;
            }
            catch (error) {
                console.log('deu ruim', error);
            }
        });
    }
});
// puxando os dados do form para utilizar na API.
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const idKey = "3f33e8701b88c84dfc5b106c23d3f0e0";
    if (!input || !sectionInfos)
        return;
    const local = input.value;
    if (local.length < 3)
        alert("O local precisa ter, pelo menos, 3 letras!");
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${idKey}&lang=pt_br&units=metric`);
        const data = yield response.json();
        console.log(data);
        const infos = {
            temperatura: Math.round(data.main.temp),
            local: data.name,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        };
        sectionInfos.innerHTML = `
    <div class="weather-data">
         <h2>${infos.local}</h2>
 
         <span>${infos.temperatura}ºC</span>
       </div>
       <img src="${infos.icon}">
   `;
    }
    catch (error) {
        console.log('Deu um erro na obtenção nos dados da API');
    }
    finally {
        console.log('Deu bom!');
    }
}));

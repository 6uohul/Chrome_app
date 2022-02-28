const weather = document.querySelector("#weather span:first-child");
 const city = document.querySelector("#weather span:last-child");
const API_KEY="a33bd6734ac0f19fbc4937876e599fae";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      });;
}

function onGoeErr(){
    alert("Can't find you. No weather for you. :(");
}

// 첫번째 argument : 성공적으로 실행됐을 때 , 두번째 argument : 실패했을 때
navigator.geolocation.getCurrentPosition(onGeoOK, onGoeErr);
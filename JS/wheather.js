
const API_KEY = "06e06849aac60102f29fb583c170a043";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
    const weather = document.querySelector("#wheather span:first-child");
    const city = document.querySelector("#wheather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
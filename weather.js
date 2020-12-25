const weather = document.querySelector('.js-weather'),
    Place = document.querySelector('.js-place');

const API_KEY = "f672223fb97bf0851be4a6e6b774e47a";
const COORDS = 'coords';

function loadCoords() {
    const coords = localStorage.getItem(COORDS);

    if(coords === null) {
        askForCoords();
    } else {
        const getCoords = JSON.parse(coords);
        getWeather(getCoords.latitude, getCoords.longitude);
    }
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

function handleSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude,
        longitude
    };

    saveObj(coordsObj);
}

function handleError() {
    console.log("can't access Error");
}

function saveObj(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function getWeather(latitude, longitude) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(json => {
        const temp = json.main.temp;
        const place = json.name;

        weather.innerText = `${temp} 'c`;
        Place.innerText = `${place}`;
    });
}


function init() {
    loadCoords();
}

init();
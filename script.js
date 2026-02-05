//http://api.weatherapi.com/v1/current.json?key=5a9c55132a47491abf963422253112&q=Mumbai&aqi=no



const form = document.getElementById("form");
const search = document.getElementById("search");

const temp = document.getElementById("temp");
const locationName = document.getElementById("location");
const condition = document.getElementById("condition");
const time = document.getElementById("time");

const API_KEY = "5a9c55132a47491abf963422253112";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = search.value;
    getWeather(city);
});

async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
        );

        const data = await response.json();

        temp.innerText = Math.round(data.current.temp_c);
        locationName.innerText = data.location.name;
        condition.innerText = data.current.condition.text;

        const localTime = data.location.localtime;
        time.innerText = localTime;

    } catch (error) {
        alert(" Unable to fetch weather data");
 } 
}

 
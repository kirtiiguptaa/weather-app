const apiKey = "46455ee2a6cbfcb4afa9a673fd7d9377";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } 
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Humidity") {
            weatherIcon.src = "images/humidity.png";
        }
        else if(data.weather[0].main == "Haze") {
            weatherIcon.src = "images/haze.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }
        else if(data.weather[0].main == "Wind") {
            weatherIcon.src = "images/wind.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

function trimSpaces() {
    var inputBox = document.getElementById("inputBox");
    if (inputBox) {
        inputBox.value = inputBox.value.trim();
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


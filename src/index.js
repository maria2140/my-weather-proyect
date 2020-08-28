// Weather
function showSearchedLocation (response){
  
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = response.data.name;
  
  let displayTemp =  document.querySelector("#currentTemp");
  displayTemp.innerHTML = `${Math.round(response.data.main.temp)} ºC`;
  
  let displayWeatherDescription = document.querySelector("#description");
  let currentWeaatherDescription = response.data.weather[0].description;
  displayWeatherDescription.innerHTML = currentWeaatherDescription;
  
  let displayRealFeel = document.querySelector("#realFeel");
  let currentRealFeel = `${Math.round(response.data.main.feels_like)}ºC`;

  displayRealFeel.innerHTML = currentRealFeel;
  
  let displayMaximum = document.querySelector("#maximum");
  let currentMaximum = `${Math.round(response.data.main.temp_max)}ºC`;
  displayMaximum.innerHTML = currentMaximum
  
  let displayMinimum = document.querySelector("#minimum");
  let currentMinimum = `${Math.round(response.data.main.temp_min)}ºC`;
  displayMinimum.innerHTML = currentMinimum;
  
  let displayHumidity = document.querySelector("#humidity");
  let currentHumidity = response.data.main.humidity
  displayHumidity.innerHTML = currentHumidity;
  
  let displayWind = document.querySelector("#wind");
  let currentWind = response.data.wind.speed;
  displayWind.innerHTML = `${currentWind} km/h`;

  let icon = document.querySelector("#icon");

  let imageValue = "";
    if (response.data.weather[0].icon === "01d"){
      imageValue = 1163662;
    } else if(response.data.weather[0].icon === "02d"){
      imageValue = 1163661;
    } else if(response.data.weather[0].icon === "03d"){
      imageValue = 1163624;
    } else if(response.data.weather[0].icon === "04d"){
      imageValue = 1163634;
    } else if(response.data.weather[0].icon === "09d"){
      imageValue = 1163626;
    } else if(response.data.weather[0].icon === "10d"){
      imageValue = 1163657;
    } else if(response.data.weather[0].icon === "11d"){
      imageValue = 1163636;
    } else if(response.data.weather[0].icon === "13d"){
      imageValue = 1163654;
    } else if(response.data.weather[0].icon === "50d"){
      imageValue = 1163640;
    } else if(response.data.weather[0].icon === "01n"){
      imageValue = 1163645;
    } else if(response.data.weather[0].icon === "02n"){
      imageValue = 1163625;
    } else if(response.data.weather[0].icon === "03n"){
      imageValue = 1163624;
    } else if(response.data.weather[0].icon === "04n"){
      imageValue = 1163634;
    } else if(response.data.weather[0].icon === "09n"){
      imageValue = 1163626;
    } else if(response.data.weather[0].icon === "10n"){
      imageValue = 1163644;
    } else if(response.data.weather[0].icon === "11n"){
      imageValue = 1163636;
    } else if(response.data.weather[0].icon === "13"){
      imageValue = 1163654;
    } else if(response.data.weather[0].icon === "50n"){
      imageValue = 1163640;
  }

  icon.setAttribute("src", `https://image.flaticon.com/icons/svg/1163/${imageValue}.svg`)

  celsiusTemperature = response.data.main.temp;
  celsiusMaximum = response.data.main.temp_max;
  celsiusMinimum = response.data.main.temp_min;
  celsiusRealFeel = Math.round(response.data.main.feels_like);
  kmWind = response.data.wind.speed;

  currentWind = response.data.wind.speed;
  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
  let units = "metric"
  let apiKey = "6e7b473b7e81ef87d8d22f55577a0c3b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={daily, minutely, current}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayHourlyForecast);


  apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={hourly, minutely, current}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayDailyForecast);
}

function defaultCity(city) {
  let units = "metric"
  let apiKey = "6e7b473b7e81ef87d8d22f55577a0c3b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showSearchedLocation);
  console.log(city)

}

function searchedCity(event) {
  event.preventDefault();
   let searchLine = document.querySelector("#city-input");
  searchLine.innerHTML = `${searchLine.value}`;
  let apiKey = "6e7b473b7e81ef87d8d22f55577a0c3b";
  let units = "metric"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchLine.value}&appid=${apiKey}&units=${units}`;
  axios.get(`${apiUrl}`).then(showSearchedLocation); 
  
}

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", searchedCity);

function showCurrentLocation (response){
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = response.data.name;
  
  let displayTemp =  document.querySelector("#currentTemp");
  displayTemp.innerHTML = `${Math.round(response.data.main.temp)} ºC`;
  
  let displayWeatherDescription = document.querySelector("#description");
  let currentWeaatherDescription = response.data.weather[0].description;
  displayWeatherDescription.innerHTML = currentWeaatherDescription;
  
  let displayRealFeel = document.querySelector("#realFeel");
  let currentRealFeel = Math.round(response.data.main.feels_like);
  displayRealFeel.innerHTML = currentRealFeel;
  
  let displayMaximum = document.querySelector("#maximum");
  let currentMaximum = Math.round(response.data.main.max);
  displayMaximum.innerHTML = currentMaximum
  
  let displayMinimum = document.querySelector("#minimum");
  let currentMinimum = Math.round(response.data.main.temp_min);
  displayMinimum.innerHTML = currentMinimum;
  
  let displayHumidity = document.querySelector("#humidity");
  let currentHumidity = response.data.main.humidity
  displayHumidity.innerHTML = currentHumidity;
  
  let displayWind = document.querySelector("#wind");
  let currentWind = response.data.wind.speed;
  displayWind.innerHTML = currentWind;
  


  let icon = document.querySelector("#icon");

  let imageValue = "";
    if (response.data.weather[0].icon === "01d"){
      imageValue = 1163662;
    } else if(response.data.weather[0].icon === "02d"){
      imageValue = 1163661;
    } else if(response.data.weather[0].icon === "03d"){
      imageValue = 1163624;
    } else if(response.data.weather[0].icon === "04d"){
      imageValue = 1163634;
    } else if(response.data.weather[0].icon === "09d"){
      imageValue = 1163626;
    } else if(response.data.weather[0].icon === "10d"){
      imageValue = 1163657;
    } else if(response.data.weather[0].icon === "11d"){
      imageValue = 1163636;
    } else if(response.data.weather[0].icon === "13d"){
      imageValue = 1163654;
    } else if(response.data.weather[0].icon === "50d"){
      imageValue = 1163640;
    } else if(response.data.weather[0].icon === "01n"){
      imageValue = 1163645;
    } else if(response.data.weather[0].icon === "02n"){
      imageValue = 1163625;
    } else if(response.data.weather[0].icon === "03n"){
      imageValue = 1163624;
    } else if(response.data.weather[0].icon === "04n"){
      imageValue = 1163634;
    } else if(response.data.weather[0].icon === "09n"){
      imageValue = 1163626;
    } else if(response.data.weather[0].icon === "10n"){
      imageValue = 1163644;
    } else if(response.data.weather[0].icon === "11n"){
      imageValue = 1163636;
    } else if(response.data.weather[0].icon === "13"){
      imageValue = 1163654;
    } else if(response.data.weather[0].icon === "50n"){
      imageValue = 1163640;
  }

  icon.setAttribute("src", `https://image.flaticon.com/icons/svg/1163/${imageValue}.svg`)


  celsiusTemperature = response.data.main.temp;
  celsiusMaximum = response.data.main.temp_max;
  celsiusMinimum = response.data.main.temp_min;
  celsiusRealFeel = Math.round(response.data.main.feels_like);
  kmWind = response.data.wind.speed;

  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
  let units = "metric"
  let apiKey = "6e7b473b7e81ef87d8d22f55577a0c3b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={daily, minutely, current}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayHourlyForecast);

  apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={hourly, minutely, current}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayDailyForecast);
}

function findCurrentLocation(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let units = "metric"
  let apiKey = "6e7b473b7e81ef87d8d22f55577a0c3b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${units}`;
  
  axios.get(apiUrl).then(showCurrentLocation);

}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(findCurrentLocation);

}

let currentLocationButton = document.querySelector("#currentLocation-button");
currentLocationButton.addEventListener("click", getCurrentLocation);



//HourlyForecasts

function displayHourlyForecast(response){
  console.log(response)
  let forecastElement = document.querySelector("#hourlyForecast");
    forecastElement.innerHTML = null;
    let forecast = null; 
    for (let index = 1; index < 8; index++) {

      let imageValue = "";
      if (response.data.hourly[index].weather[0].icon === "01d"){
        imageValue = 1163662;
      } else if(response.data.hourly[index].weather[0].icon === "02d"){
        imageValue = 1163661;
      } else if(response.data.hourly[index].weather[0].icon === "03d"){
        imageValue = 1163624;
      } else if(response.data.hourly[index].weather[0].icon === "04d"){
        imageValue = 1163634;
      } else if(response.data.hourly[index].weather[0].icon === "09d"){
        imageValue = 1163626;
      } else if(response.data.hourly[index].weather[0].icon === "10d"){
        imageValue = 1163657;
      } else if(response.data.hourly[index].weather[0].icon === "11d"){
        imageValue = 1163636;
      } else if(response.data.hourly[index].weather[0].icon === "13d"){
        imageValue = 1163654;
      } else if(response.data.hourly[index].weather[0].icon === "50d"){
        imageValue = 1163640;
      } else if(response.data.hourly[index].weather[0].icon === "01n"){
        imageValue = 1163645;
      } else if(response.data.hourly[index].weather[0].icon === "02n"){
        imageValue = 1163625;
      } else if(response.data.hourly[index].weather[0].icon === "03n"){
        imageValue = 1163624;
      } else if(response.data.hourly[index].weather[0].icon === "04n"){
        imageValue = 1163634;
      } else if(response.data.hourly[index].weather[0].icon === "09n"){
        imageValue = 1163626;
      } else if(response.data.hourly[index].weather[0].icon === "10n"){
        imageValue = 1163644;
      } else if(response.data.hourly[index].weather[0].icon === "11n"){
        imageValue = 1163636;
      } else if(response.data.hourly[index].weather[0].icon === "13"){
        imageValue = 1163654;
      } else if(response.data.hourly[index].weather[0].icon === "50n"){
        imageValue = 1163640;
    }
        forecast = response.data.hourly[index];
        forecastElement.innerHTML += `                           
        <div class="col-1 col-sm-1 hours">
        ${formatHours(forecast.dt * 1000)}:00
        <br />
        <img class= "forecast-hourly-icon" src="https:////image.flaticon.com/icons/svg/1163/${imageValue}.svg" alt="" />
        <br />
        <span class="next-max-min" style="font-size: 9px;">  ${Math.round(forecast.temp)}ºC</span>
        </div>
        `;
      }
}


function formatHours (timestamp){
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10){
    hours = `0${hours}`;
  }
  return `${hours}`;
}


//Daily Forecast

function displayDailyForecast(response){
  console.log(response)

  let forecastElement = document.querySelector("#dailyForecast");
  forecastElement.innerHTML = null;
  let forecast = null; 

  for (let index = 1; index < 6; index++) {
    let imageValue = "";
    if (response.data.daily[index].weather[0].icon === "01d"){
      imageValue = 1163662;
    } else if(response.data.daily[index].weather[0].icon === "02d"){
      imageValue = 1163661;
    } else if(response.data.daily[index].weather[0].icon === "03d"){
      imageValue = 1163624;
    } else if(response.data.daily[index].weather[0].icon === "04d"){
      imageValue = 1163634;
    } else if(response.data.daily[index].weather[0].icon === "09d"){
      imageValue = 1163626;
    } else if(response.data.daily[index].weather[0].icon === "10d"){
      imageValue = 1163657;
    } else if(response.data.daily[index].weather[0].icon === "11d"){
      imageValue = 1163636;
    } else if(response.data.daily[index].weather[0].icon === "13d"){
      imageValue = 1163654;
    } else if(response.data.daily[index].weather[0].icon === "50d"){
      imageValue = 1163640;
    } else if(response.data.daily[index].weather[0].icon === "01n"){
      imageValue = 1163645;
    } else if(response.data.daily[index].weather[0].icon === "02n"){
      imageValue = 1163625;
    } else if(response.data.daily[index].weather[0].icon === "03n"){
      imageValue = 1163624;
    } else if(response.data.daily[index].weather[0].icon === "04n"){
      imageValue = 1163634;
    } else if(response.data.daily[index].weather[0].icon === "09n"){
      imageValue = 1163626;
    } else if(response.data.daily[index].weather[0].icon === "10n"){
      imageValue = 1163644;
    } else if(response.data.daily[index].weather[0].icon === "11n"){
      imageValue = 1163636;
    } else if(response.data.daily[index].weather[0].icon === "13"){
      imageValue = 1163654;
    } else if(response.data.daily[index].weather[0].icon === "50n"){
      imageValue = 1163640;
  }

    forecast = response.data.daily[index];
    forecastElement.innerHTML += `
    <div class="col-1 col-sm-1 days">
    ${formatDays(forecast.dt * 1000)}
    <br/>
    <img class= "forecast-hourly-icon" src="https:////image.flaticon.com/icons/svg/1163/${imageValue}.svg" alt="" />
    <br/>
    <span class="next-max-min first"> ${Math.round(forecast.temp.max)}ºC/${Math.round(forecast.temp.min)}ºC</span> 
    <br/>
    </div>
    `;
  }

}

function formatDays (timestamp){
  let dt = new Date(timestamp);
  let days = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
  let day = days[dt.getDay()];
  return `${day}`;
}

// Current Date and Time
function showTime() {
  
  let now = new Date();
  let days = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
  ];
  let day = days[now.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  
  let currentDate = document.querySelector("#date");
  
  if (minutes > 10 && hour > 10) {
    currentDate.innerHTML = `${day}, ${month} ${date} ${year}, ${hour}:${minutes}`;
  } else if (minutes > 10 && hour < 10)  {
    currentDate.innerHTML = `${day}, ${month} ${date} ${year}, 0${hour}:${minutes}`;
  } else if (minutes < 10 && hour > 10) {
    currentDate.innerHTML = `${day}, ${month} ${date} ${year}, ${hour}:0${minutes}`;
  } else if (minutes < 10 && hour < 10){
    currentDate.innerHTML = `${day}, ${month} ${date} ${year}, 0${hour}:0${minutes}`;  
  }
}
showTime();

// Unit convertion

function toFahrenheit (event) {
  event.preventDefault();
  let fahrenheitElement = document.querySelector("#currentTemp");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  fahrenheitElement.innerHTML = `${Math.round(fahrenheitTemperature)}ºF`;  

  let maximumElement = document.querySelector("#maximum");
  let maximumTemperature = (celsiusMaximum * 9) / 5 + 32;
  maximumElement.innerHTML = `${Math.round(maximumTemperature)}ºF`;  
  
  let minimumElement = document.querySelector("#minimum");
  let minimumTemperature = (celsiusMinimum * 9) / 5 + 32;
  minimumElement.innerHTML = `${Math.round(minimumTemperature)}ºF`;  

  let realFeelElement = document.querySelector("#realFeel");
  let realFeelTemperature = (celsiusRealFeel * 9) / 5 + 32;
  realFeelElement.innerHTML = `${Math.round(realFeelTemperature)}ºF`;  

  let windElement = document.querySelector("#wind");
  let windSpeed = (kmWind*0.62137119223733);
  windElement.innerHTML = `${Math.round(windSpeed*100)/100} mph`;
}



function toCelsius (event) {
  event.preventDefault();
  let celsiusElement = document.querySelector("#currentTemp");
  celsiusElement.innerHTML = `${Math.round(celsiusTemperature)}ºC`;

  let maximumElement = document.querySelector("#maximum");
  maximumElement.innerHTML = `${Math.round(celsiusMaximum)}ºC`;

  let minimumElement = document.querySelector("#minimum");
  minimumElement.innerHTML = `${Math.round(celsiusMinimum)}ºC`;

  let realFeelElement =  document.querySelector("#realFeel");
  realFeelElement.innerHTML = `${Math.round(celsiusRealFeel)}ºC`;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${Math.round(kmWind*100)/100} km/h`;

}

let fahrenheitButton = document.querySelector("#toFahrenheit");
fahrenheitButton.addEventListener("click", toFahrenheit);


let celsiusButton = document.querySelector("#toCelsius");
celsiusButton.addEventListener("click", toCelsius);

let celsiusTemperature = null;
let celsiusMaximum = null;
let celsiusMinimum = null;
let celsiusRealFeel= null;
let kmWind = null;



defaultCity("New York");

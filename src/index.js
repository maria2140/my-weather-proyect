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
  let currentRealFeel = Math.round(response.data.main.feels_like);

  displayRealFeel.innerHTML = currentRealFeel;
  
  let displayMaximum = document.querySelector("#maximum");
  let currentMaximum = Math.round(response.data.main.temp_min);
  displayMaximum.innerHTML = currentMaximum
  
  let displayMinimum = document.querySelector("#minimum");
  let currentMinimum = Math.round(response.data.main.temp_min);
  displayMinimum.innerHTML = currentMinimum;
  
  let displayHumidity = document.querySelector("#humidity");
  let currentHumidity = response.data.main.humidity
  displayHumidity.innerHTML = currentHumidity;
  
  let displayWind = document.querySelector("#wind");
  let currentWind = response.data.wind.speed;
  displayWind.innerHTML = `${currentWind} km/h`;
  
  let currentIcon = document.querySelector("#icon");
  currentIcon.setAttribute("src", `https://image.flaticon.com/icons/svg/1163/1163662.svg`);
  icon.setAttribute("alt", response.data.weather[0].description );
  
  
  celsiusTemperature = response.data.main.temp;
  
  currentWind = response.data.wind.speed;
  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
  let apiKey = "6e7b473b7e81ef87d8d22f55577a0c3b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={daily, minutely, current}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayHourlyForecast);


  apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={hourly, minutely, current}&appid=${apiKey}&units=metric`;
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
  let currentMaximum = Math.round(response.data.main.temp_min);
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

  celsiusTemperature = response.data.main.temp;

  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
  let apiKey = "6e7b473b7e81ef87d8d22f55577a0c3b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={daily, minutely, current}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayHourlyForecast);

  apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={hourly, minutely, current}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayDailyForecast);
}

function findCurrentLocation(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let units = "metric"
  let apiKey = "6e7b473b7e81ef87d8d22f55577a0c3b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${units}`;
  
  axios.get(apiUrl).then(showCurrentLocation);
  console.log(position)
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(findCurrentLocation);

}

let currentLocationButton = document.querySelector("#currentLocation-button");
currentLocationButton.addEventListener("click", getCurrentLocation);



//HourlyForecasts

function displayHourlyForecast(response){

  let forecastElement = document.querySelector("#hourlyForecast");
  
  forecast = response.data.hourly[3];
  forecastElement.innerHTML =  `                           
  <div class="col-1 col-sm-1">
  ${formatHours(forecast.dt * 1000)}:00
  <br />
  ☀️
  <br />
  <span class="next-max-min" style="font-size: 9px;">  ${Math.round(forecast.temp)}º</span>
  </div>
  `
  ;
  
  forecast = response.data.hourly[6];
  forecastElement.innerHTML +=  `                           
  <div class="col-1 col-sm-1">
  ${formatHours(forecast.dt * 1000)}:00
  <br />
  ☀️
  <br />
  <span class="next-max-min" style="font-size: 9px;">  ${Math.round(forecast.temp)}º</span>
  </div>
  `
  ;
  
  forecast = response.data.hourly[9];
  forecastElement.innerHTML +=  `                           
  <div class="col-1 col-sm-1">
  ${formatHours(forecast.dt * 1000)}:00
  <br />
  ☀️
  <br />
  <span class="next-max-min" style="font-size: 9px;">  ${Math.round(forecast.temp)}º</span>
  </div>
  `
  ;
  
  forecast = response.data.hourly[12];
  forecastElement.innerHTML +=  `                           
  <div class="col-1 col-sm-1">
  ${formatHours(forecast.dt * 1000)}:00
  <br />
  ☀️
  <br />
  <span class="next-max-min" style="font-size: 9px;">  ${Math.round(forecast.temp)}º</span>
  </div>
  `
  ;;
  
  forecast = response.data.hourly[15];
  forecastElement.innerHTML +=  `                           
  <div class="col-1 col-sm-1">
  ${formatHours(forecast.dt * 1000)}:00
  <br />
  ☀️
  <br />
  <span class="next-max-min" style="font-size: 9px;">  ${Math.round(forecast.temp)}º</span>
  </div>
  `
  ;
  
  forecast = response.data.hourly[18];
  forecastElement.innerHTML +=  `                           
  <div class="col-1 col-sm-1">
  ${formatHours(forecast.dt * 1000)}:00
  <br />
  ☀️
  <br />
  <span class="next-max-min" style="font-size: 9px;">  ${Math.round(forecast.temp)}º</span>
  </div>
  `
  ;
  
  forecast = response.data.hourly[21];
  forecastElement.innerHTML +=  `                           
  <div class="col-1 col-sm-1">
  ${formatHours(forecast.dt * 1000)}:00
  <br />
  ☀️
  <br />
  <span class="next-max-min" style="font-size: 9px;">  ${Math.round(forecast.temp)}º</span>
  </div>
  `
  ;  
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
  let forecastElement = document.querySelector("#dailyForecast");

  console.log(response)
  
  let forecast = response.data.daily[1];
  forecastElement.innerHTML =  `
  <div class="col-1 col-sm-1">
  ${formatDays(forecast.dt * 1000)}
  <br/>
  ☀️
  <br/>
  <span class="next-max-min"> ${Math.round(forecast.temp.max)}ºC/${Math.round(forecast.temp.min)}ºC</span> 
  <br/>
  </div>
  `;

  forecast = response.data.daily[1];
  forecastElement.innerHTML =  `
  <div class="col-1 col-sm-1">
  ${formatDays(forecast.dt * 1000)}
  <br/>
  ☀️
  <br/>
  <span class="next-max-min"> ${Math.round(forecast.temp.max)}ºC/${Math.round(forecast.temp.min)}ºC</span> 
  <br/>
  </div>
  `
  ;
    
  forecast = response.data.daily[2];
  forecastElement.innerHTML +=  `
  <div class="col-1 col-sm-1">
  ${formatDays(forecast.dt * 1000)}
  <br/>
  ☀️
  <br/>
  <span class="next-max-min"> ${Math.round(forecast.temp.max)}Cº/${Math.round(forecast.temp.min)}ºC  </span> 
  </div>
  `
  ;

  forecast = response.data.daily[3];
  forecastElement.innerHTML +=  `
  <div class="col-1 col-sm-1">
  ${formatDays(forecast.dt * 1000)}
  <br/>
  ☀️
  <br/>
  <span class="next-max-min"> ${Math.round(forecast.temp.max)}Cº/${Math.round(forecast.temp.min)}ºC  </span> 
  </div>
  `
  ;

  forecast = response.data.daily[4];
  forecastElement.innerHTML +=  `
  <div class="col-1 col-sm-1">
  ${formatDays(forecast.dt * 1000)}
  <br/>
  ☀️
  <br/>
  <span class="next-max-min"> ${Math.round(forecast.temp.max)}Cº/${Math.round(forecast.temp.min)}ºC  </span> 
  </div>
  `
  ;

  forecast = response.data.daily[5];
  forecastElement.innerHTML +=  `
  <div class="col-1 col-sm-1">
  ${formatDays(forecast.dt * 1000)}
  <br/>
  ☀️
  <br/>
  <span class="next-max-min"> ${Math.round(forecast.temp.max)}Cº/${Math.round(forecast.temp.min)}ºC  </span> 
  </div>
  `
  ;
  
  forecast = response.data.daily[6];
  forecastElement.innerHTML +=  `
  <div class="col-1 col-sm-1">
  ${formatDays(forecast.dt * 1000)}
  <br/>
  ☀️
  <br/>
  <span class="next-max-min"> ${Math.round(forecast.temp.max)}Cº/${Math.round(forecast.temp.min)}ºC  </span> 
  </div>
  `
  ;

  forecast = response.data.daily[7];
  forecastElement.innerHTML +=  `
  <div class="col-1 col-sm-1 dailyLastDay">
  ${formatDays(forecast.dt * 1000)}
  <br/>
  ☀️
  <br/>
  <span class="next-max-min"> ${Math.round(forecast.temp.max)}Cº/${Math.round(forecast.temp.min)}ºC  </span> 
  </div>
  `
  ;



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
  fahrenheitElement.innerHTML = `${Math.round(fahrenheitTemperature)} ºF`;

  
}

function toCelsius (event) {
  event.preventDefault();
  let celsiusElement = document.querySelector("#currentTemp");
  celsiusElement.innerHTML = `${Math.round(celsiusTemperature)} ºC`;
}

let fahrenheitButton = document.querySelector("#toFahrenheit");
fahrenheitButton.addEventListener("click", toFahrenheit);

let celsiusButton = document.querySelector("#toCelsius");
celsiusButton.addEventListener("click", toCelsius);

let celsiusTemperature = null;


defaultCity("New York");

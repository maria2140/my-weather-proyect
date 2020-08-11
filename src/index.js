// Challenge 1 

function search(event){
    event.preventDefault();
    let searchLine = document.querySelector("#cityInput");
    let city = document.querySelector("#city");
    city.innerHTML = `${searchLine.value}`;
    let apiKey = "6e7b473b7e81ef87d8d22f55577a0c3b";
    let units = "metric"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchLine.value}&appid=${apiKey}&units=${units}`
    
    axios.get(`${apiUrl}`).then(uploadData);
}

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", search);


function uploadData (response){
    console.log(response)
    let city = document.querySelector("#city");
    city.innerHTML = (response.data.name);
    let currentTempertature = document.querySelector("#currentTempertature");
    currentTempertature.innerHTML = Math.round(response.data.main.temp);
    let realFeel = document.querySelector("#realFeel");
    realFeel.innerHTML = Math.round(response.data.main.feels_like);
    let maximum = document.querySelector("#maximum")
    maximum.innerHTML = Math.round(response.data.main.temp_max);
    let minimum = document.querySelector("#minimum");
    minimum.innerHTML = Math.round(response.data.main.temp_min);
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = (response.data.main.humidity);
    let wind = document.querySelector("#wind");
    wind.innerHTML = (response.data.wind.speed);
}


let currentLocationButton = document.querySelector("#currentLocation-button")
currentLocationButton.addEventListener("click", currentLocation);

function currentLocation(position){
    let apiKey = "6e7b473b7e81ef87d8d22f55577a0c3b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;
    axios.get(`${apiUrl}`).then(showCurrentCity);
}
navigator.geolocation.getCurrentPosition(currentLocation);



function showCurrentCity (response){
    console.log(response);
    let city = document.querySelector("#city");
    city.innerHTML = (response.data.name); 
    let currentTempertature = document.querySelector("#currentTempertature");
    currentTempertature.innerHTML = Math.round(response.data.main.temp);
    let realFeel = document.querySelector("#realFeel");
    realFeel.innerHTML = Math.round(response.data.main.feels_like);
    let maximum = document.querySelector("#maximum")
    maximum.innerHTML = Math.round(response.data.main.temp_max);
    let minimum = document.querySelector("#minimum");
    minimum.innerHTML = Math.round(response.data.main.temp_min);
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = (response.data.main.humidity);
    let wind = document.querySelector("#wind");
    wind.innerHTML = (response.data.wind.speed);

}



// Challenge 2 
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


// Challenge 3


    let fahrenheitButton = document.querySelector("#toFahrenheit");
    fahrenheitButton.addEventListener("click", toFahrenheit);

        function toFahrenheit (event) {
            event.preventDefault();
            let fahrenheitTemperature = document.querySelector("#currentTempertature");
            fahrenheitTemperature.innerHTML = "95";
        }


    let celsiusButton = document.querySelector("#toCelsius");
    celsiusButton.addEventListener("click", toCelsius);

        function toCelsius (event) {
            event.preventDefault();
            let celsiusTemperature = document.querySelector("#currentTempertature");
            celsiusTemperature.innerHTML = "35";
        }



function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;

  searchCity(cityInput.value);
}

function searchCity(city) {
  let units = "metric";
  let apiKey = "dd0a9897597d72cf07bb7f69d232f1da";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentlocation = document.querySelector("#current-location");
currentlocation.addEventListener("click", location);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `The temperature is ${temperature}°C`;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
}

function location(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

function retrievePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "dd0a9897597d72cf07bb7f69d232f1da";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

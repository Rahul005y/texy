let btn = document.querySelector("#btn");
let input = document.querySelector("input");
let cityName = document.querySelector("#cityName");
let temp = document.querySelector("#temp");
let humidity = document.querySelector("#humidity");
let weather = document.querySelector("#weather");

let apikey = "7ec7306ff2e65597e809d454f0f94db6";

async function weatherget() {
  try {
    let city = input.value.trim();

    if (city === "") {
      alert("Please enter a city name");
      return;
    }

    let store = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    );

    let result = await store.json();

    if (result.cod !== 200) {
      alert("City not found!");
      return;
    }

    // ✅ Correct data access
    cityName.textContent = result.name;
    temp.textContent = result.main.temp + " °C";
    humidity.textContent = "Humidity: " + result.main.humidity + " %";
    weather.textContent = "Weather: " + result.weather[0].main;

    console.log(result);

  } catch (error) {
    console.log("Error:", error);
    alert("Something went wrong!");
  }
}

btn.addEventListener("click", weatherget);

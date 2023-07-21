const URL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=2c9b86f2e02f807b8d45f45d2d2eb8f8"
fetch(URL)

.then((response) => response.json())
.then((jsObject) => {
    "use strict"
    // getting and displaying temperature
    let tempElement = document.getElementById("temp-value")
    let temp = Math.floor((jsObject.list[0].main.temp - 273.15) * 9/5 + 32); // <------ converts temperature from kelvin to fahrenheit
    tempElement.innerHTML = temp

    // getting and displaying humidity
    let humidityElement = document.getElementById("humidity-value")
    let humidity = jsObject.list[0].main.humidity;
    humidityElement.innerHTML = humidity;

    // getting and displaying what it feels like
    let feelsLikeElement = document.getElementById("feels-like-value")
    let feelsLike = Math.floor((jsObject.list[0].main.feels_like - 273.15) * 9/5 + 32);
    feelsLikeElement.innerHTML = feelsLike;

    // getting and displaying wind speed
    let windSpeedElement = document.getElementById("windspeed-value");
    let windSpeed = Math.floor(jsObject.list[0].wind.speed * 0.621371); // <------- converts wind speed from k/ph m/ph
    windSpeedElement.innerHTML = windSpeed;

    // getting 5 day forcast temperature
    let dayOne = Math.floor((jsObject.list[8].main.temp - 273.15) * 9/5 + 32);
    let dayTwo = Math.floor((jsObject.list[16].main.temp - 273.15) * 9/5 + 32);
    let dayThree = Math.floor((jsObject.list[24].main.temp - 273.15) * 9/5 + 32);
    let dayFour = Math.floor((jsObject.list[32].main.temp - 273.15) * 9/5 + 32);
    let dayFive = Math.floor((jsObject.list[39].main.temp - 273.15) * 9/5 + 32);

    // Displaying 5 day forcast temperature
    let dayOneElement = document.getElementById("day-one-value");
    dayOneElement.innerHTML = dayOne;
    let dayTwoElement = document.getElementById("day-two-value");
    dayTwoElement.innerHTML = dayTwo;
    let dayThreeElement = document.getElementById("day-three-value");
    dayThreeElement.innerHTML = dayThree;
    let dayFourElement = document.getElementById("day-four-value");
    dayFourElement.innerHTML = dayFour;
    let dayFiveElement = document.getElementById("day-five-value");
    dayFiveElement.innerHTML = dayFive;




    console.log(jsObject);
    console.log(dayOne);
})

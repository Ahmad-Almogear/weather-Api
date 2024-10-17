function renderWeather(weather){
    var resultsContainer = document.querySelector("#weather-results");
    var city = document.createElement("h2")
    city.textContent = weather.name ;
    resultsContainer.append(city);

    var temp =document.createElement("p");
    temp.textContent = "Temp : "+ weather.main.temp+"F";
    resultsContainer.append(temp);

    var humidity =document.createElement("p");
    humidity.textContent = "Humidity:"+ weather.main.humidity+ "%";
    resultsContainer.append(humidity);

    var wind =document.createElement("p");
    wind.textContent = "Wind:"+ weather.wind.speed + "mph" + weather.wind.deg +"deg";
    resultsContainer.append(wind);



    details.append("")

}

function fetchWeather(query) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=f7392c1f55063ef2378143cd99ecbddf`;
    
    fetch(url)
        .then(response => response.json())
        .then(data =>renderWeather(data))
        .catch(error => console.error('Error:', error));
}

document.getElementById('formId').addEventListener('submit', function(event) {
    event.preventDefault()});

function ser(){
    var cityN =document.getElementById("cityName").value;
    fetchWeather(cityN);
}
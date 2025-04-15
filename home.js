

let weather = document.getElementById("weather");

fetch("https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=58e3f8364b021f968ae0720b303c2f01&units=metric")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let number = data.main.temp; 
        let roundedNumber = Math.round(number);
        weather.textContent = "Current Temperature: "+roundedNumber+"\u00b0C"; 
    })




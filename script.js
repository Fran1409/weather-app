//On clicking the SUBMIT button or pressing ENTER the application will display the weather for the next 5 days
// 1 Get the data when submit is pressed
// 2 Get the link with the api
// 3 Get the link with the submitted data and api
// 4 Get the correct data from api
// 5 Display correct data

(() => {

    // 1
    let city = "";
    let celcius;

    document.getElementById("submit").addEventListener("click", getForecast);

    function getForecast(event) {
        event.preventDefault();

        city = document.getElementById("city").value;
        console.log(city)

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=a3b4024741635c916c33de8b5cd6faf3')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                getWeather(data);
        });

        function getWeather( d ) {
            celcius = Math.round(parseFloat(d.main.temp)-273.15);

            document.getElementById("description").innerHTML = d.weather[0].description;
            document.getElementById("temp").innerHTML = celcius +"&deg;";
            document.getElementById("location").innerHTML = d.name;
        };

    };
})();
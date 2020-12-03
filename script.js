//On clicking the SUBMIT button or pressing ENTER the application will display the weather for the next 5 days
// 1 Get the data when submit is pressed
// 2 Get the link with the api
// 3 Get the link with the submitted data and api
// 4 Get the correct data from api
// 5 Display correct data

(() => {

    const key = "a3b4024741635c916c33de8b5cd6faf3";
    let city = "";
    let celcius;
    let lon;
    let lat;

    document.getElementById("submit").addEventListener("click", getForecastToday);

    function getForecastToday(event) {
        event.preventDefault();

        getCity();

        if(city == ""){
            alert("Enter a city to get the weather.")
        } else {
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+key)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    /* getCoordCity(data); */
                    getWeather(data);            
            }); 

            getForecastWeek();  
        };      
    };

    function getCity() {
        city =  document.getElementById("city").value;
        console.log(city)
    };

    /* function getCoordCity(d) {
        lon = parseFloat(d.coord.lon);
        lat = parseFloat(d.coord.lat);

        console.log(lon + " " +lat);
    }; */

    function getForecastWeek() {

        getCity();

        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+key)
            .then(response => response.json())
            .then(data => {
                console.log(data);               
        });

    };

    function getWeather(d) {
        celcius = Math.round(parseFloat(d.main.temp)-273.15);

        document.getElementById("title").innerHTML = "At this moment"
        document.getElementById("description").innerHTML = d.weather[0].description;
        document.getElementById("temp").innerHTML = celcius +"&#8451;";
        document.getElementById("location").innerHTML = d.name;
        document.getElementById("weatherimage").src = "images/"+d.weather[0].icon+".png"
    };
})();
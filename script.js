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
    let date = new Date();
    date.setDate(date.getDate() + 1);
    let day = date.toISOString();
    let tomorrow = day.slice(0,10);
    let i = 0;
    

    document.getElementById("submit").addEventListener("click", getForecast);

    function getForecast(event) {
        event.preventDefault();

        getCity();

        if(city == ""){
            alert("Enter a city to get the weather.")
        } else {
            fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+key)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    getWeatherNow(data); 
                    getWeatherNextDays(data); 
                    document.getElementById("location").innerHTML = data.city.name;          
            }); 
        };      
    };

    function getCity() {
        city =  document.getElementById("city").value;
        console.log(city)
    };

    function getWeatherNow(d) {
        celcius = Math.round(parseFloat(d.list[0].main.temp)-273.15);

        document.getElementById("title").innerHTML = "At this moment"
        document.getElementById("description").innerHTML = d.list[0].weather[0].description;
        document.getElementById("temp").innerHTML = celcius +"&#8451;";
        document.getElementById("location").innerHTML = d.city.name;
        document.getElementById("weatherimage").src = "images/"+d.list[0].weather[0].icon+".png"
    };

    function getWeatherNextDays(d) {
        
        while (tomorrow+" 12:00:00" != d.list[i].dt_txt) {
            i++;
            console.log(i);  
        }

        document.getElementById("date1").innerHTML = d.list[i].dt_txt.slice(0,10);
        document.getElementById("date2").innerHTML = d.list[i+8].dt_txt.slice(0,10);
        document.getElementById("date3").innerHTML = d.list[i+16].dt_txt.slice(0,10);
        document.getElementById("date4").innerHTML = d.list[i+24].dt_txt.slice(0,10);
        document.getElementById("date5").innerHTML = d.list[i+32].dt_txt.slice(0,10);

        document.getElementById("location1").innerHTML = d.city.name;
        document.getElementById("location2").innerHTML = d.city.name;
        document.getElementById("location3").innerHTML = d.city.name;
        document.getElementById("location4").innerHTML = d.city.name;
        document.getElementById("location5").innerHTML = d.city.name;

        document.getElementById("description1").innerHTML = d.list[i].weather[0].description;
        document.getElementById("description2").innerHTML = d.list[i+8].weather[0].description;
        document.getElementById("description3").innerHTML = d.list[i+16].weather[0].description;
        document.getElementById("description4").innerHTML = d.list[i+24].weather[0].description;
        document.getElementById("description5").innerHTML = d.list[i+32].weather[0].description;

        celcius1 = Math.round(parseFloat(d.list[i].main.temp)-273.15);
        celcius2 = Math.round(parseFloat(d.list[i+8].main.temp)-273.15);
        celcius3 = Math.round(parseFloat(d.list[i+16].main.temp)-273.15);
        celcius4 = Math.round(parseFloat(d.list[i+24].main.temp)-273.15);
        celcius5 = Math.round(parseFloat(d.list[i+32].main.temp)-273.15);

        document.getElementById("temp1").innerHTML = celcius1 +"&#8451;";
        document.getElementById("temp2").innerHTML = celcius2 +"&#8451;";
        document.getElementById("temp3").innerHTML = celcius3 +"&#8451;";
        document.getElementById("temp4").innerHTML = celcius4 +"&#8451;";
        document.getElementById("temp5").innerHTML = celcius5 +"&#8451;";

        document.getElementById("weatherimage1").src = "images/"+d.list[i].weather[0].icon+".png"
        document.getElementById("weatherimage2").src = "images/"+d.list[i+8].weather[0].icon+".png"
        document.getElementById("weatherimage3").src = "images/"+d.list[i+16].weather[0].icon+".png"
        document.getElementById("weatherimage4").src = "images/"+d.list[i+24].weather[0].icon+".png"
        document.getElementById("weatherimage5").src = "images/"+d.list[i+32].weather[0].icon+".png"
        
    };







    /* function getCoordCity(d) {
        lon = parseFloat(d.coord.lon);
        lat = parseFloat(d.coord.lat);

        console.log(lon + " " +lat);
    }; 

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
    };*/
})();
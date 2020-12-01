//On clicking the SUBMIT button or pressing ENTER the application will display the weather for the next 5 days
// 1 Get the data when submit is pressed
// 2 Get the link with the api
// 3 Get the link with the submitted data and api
// 4 Get the correct data from api
// 5 Display correct data

(() => {

    // 1
    let city = "";

    document.getElementById("submit").addEventListener("click", getForecast);

    function getForecast(event) {
        event.preventDefault();

        city = document.getElementById("city").value;
        console.log(city)
    };
})();
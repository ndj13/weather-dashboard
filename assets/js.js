var city = [];

var citySearch = $("#searchcity");

function searchCityWeather(city) {

var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";
)

}

function Cities() {
     var savedCities = JSON.parse(localStorage.getItem("cities"));
    if (!Cities) {
    return false;
    } else {
    
    for (var s = 0; s < Cities.length; s++) {
      var pastSearch = $("<button>");
      pastSearch.valCities[s])
      .text(Cities[s])
      .attr("search-number", s)
      .addClass("btn btn-secondary btn-block")
      .appendTo("#previous-searches");
    }
  }
}



// STORES CITIES
function storeCity(cityName) {
  cityArr = localStorage.setItem("searchedCity", JSON.stringify(cityName));
  
  console.log(JSON.parse(localStorage.getItem("searchedCity")));
}

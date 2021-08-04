var city = [];

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

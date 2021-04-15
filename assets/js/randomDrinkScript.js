var randomDrinkDisplayEl = document.getElementById('randomDrinkDisplay');

function getApi() {
  // fetches data from the api, concatenates the user input for the ingredient called
  var requestUrl = 'https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
    
    })
};

getApi();
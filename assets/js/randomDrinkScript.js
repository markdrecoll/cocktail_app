var randomDrinkDisplay01El = document.getElementById('randomDrinkDisplay01');
var randomDrinkDisplay02El = document.getElementById('randomDrinkDisplay02');

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

      // two for loops in two different columns that displays drinks and details about them
      for(var i=0;i<data.drinks.length/2; i++){
        randomDrinkDisplay01El.innerHTML += (`<h5>${data.drinks[i].strDrink}</h5>
        <img alt="drink_image" height="200px" width="200px" src="${data.drinks[i].strDrinkThumb}"></img><br>
        Glass: ${data.drinks[i].strGlass} <br>
        Category: ${data.drinks[i].strCategory}<br>
        <p class="instructionParagraphs">${data.drinks[i].strInstructions}</p><br><br>`);
      }
      for(var i=data.drinks.length/2;i<data.drinks.length; i++){
        randomDrinkDisplay02El.innerHTML += (`<h5>${data.drinks[i].strDrink}</h5>
        <img alt="drink_image" height="200px" width="200px" src="${data.drinks[i].strDrinkThumb}"></img><br>
        Glass: ${data.drinks[i].strGlass} <br>
        Category: ${data.drinks[i].strCategory}<br>
        <p class="instructionParagraphs">${data.drinks[i].strInstructions}</p><br><br>`);
      }    
    })
};

getApi();
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

      // two for loops in two different columns that displays drinks and details about them
      for (var i = 0; i < data.drinks.length / 2; i++) {
        randomDrinkDisplay01El.innerHTML += (`<h5>${data.drinks[i].strDrink}</h5>
        <img alt="drink_image" height="200px" width="200px" src="${data.drinks[i].strDrinkThumb}"></img><br>
        Glass: ${data.drinks[i].strGlass} <br>
        Category: ${data.drinks[i].strCategory}<br>`);

        // the api has the data as "strIngredient1" etc so
        // we make placeholder text here and add the number
        // of the current ingredient/measurement
        const ingredient_string = 'strIngredient';
        const measure_string = 'strMeasure'
        let drinkIngredients = [];
        let drinkMeasurements = [];

        // for loop that cycles through the data and returns
        // every ingredient/measurement
        for (var j = 1; j <= 15; j++) {
          var ingredientTemp = ingredient_string;
          var measurementTemp = measure_string;

          // makes the string "strIngredent" then whatever number you are on
          ingredientTemp += j;
          measurementTemp += j;

          // if there is no ingredient/measurement then dont read in the data
          if (data.drinks[i][ingredientTemp] !== null) {
            drinkIngredients.push(data.drinks[i][ingredientTemp]);
          }
          if (data.drinks[i][measurementTemp] !== null) {
            drinkMeasurements.push(data.drinks[i][measurementTemp]);
          }
        }

        // for loop to append ingredients and measurements
        for (var k = 0; k < drinkIngredients.length; k++) {
          randomDrinkDisplay01El.innerHTML += (`<p>${drinkMeasurements[k]} ${drinkIngredients[k]}</p>`);
        }

        randomDrinkDisplay01El.innerHTML += (`<p class="instructionParagraphs">${data.drinks[i].strInstructions}</p><br><br></br>`);
      }

      for (var o = data.drinks.length / 2; o < data.drinks.length; o++) {
        randomDrinkDisplay02El.innerHTML += (`<h5>${data.drinks[o].strDrink}</h5>
        <img alt="drink_image" height="200px" width="200px" src="${data.drinks[o].strDrinkThumb}"></img><br>
        Glass: ${data.drinks[o].strGlass} <br>
        Category: ${data.drinks[o].strCategory}<br>`);

        // the api has the data as "strIngredient1" etc so
        // we make placeholder text here and add the number
        // of the current ingredient/measurement
        const ingredient_string = 'strIngredient';
        const measure_string = 'strMeasure'
        let drinkIngredients = [];
        let drinkMeasurements = [];

        // for loop that cycles through the data and returns
        // every ingredient/measurement
        for (var p = 1; p <= 15; p++) {
          var ingredientTemp = ingredient_string;
          var measurementTemp = measure_string;

          // makes the string "strIngredent" then whatever number you are on
          ingredientTemp += p;
          measurementTemp += p;

          // if there is no ingredient/measurement then dont read in the data
          if (data.drinks[o][ingredientTemp] !== null) {
            drinkIngredients.push(data.drinks[o][ingredientTemp]);
          }
          if (data.drinks[o][measurementTemp] !== null) {
            drinkMeasurements.push(data.drinks[o][measurementTemp]);
          }
        }

        // for loop to append ingredients and measurements
        for (var l = 0; l < drinkIngredients.length; l++) {
          randomDrinkDisplay02El.innerHTML += (`<p>${drinkMeasurements[l]} ${drinkIngredients[l]}</p>`);
        }

        randomDrinkDisplay02El.innerHTML += (`<p class="instructionParagraphs">${data.drinks[o].strInstructions}</p><br></br>`);
      }
    })
}

getApi();
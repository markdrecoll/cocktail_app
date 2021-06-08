// setup modal in jQuery
$(document).ready(function(){
  $('.modal').modal();
});


// get the drink table element from the html
var drinkTableEl = document.getElementById('drinkTable');
var modalTextEl = document.getElementById('modalText');


function getApi(searchTerm) {
  // fetches data from the api, concatenates the user input for the ingredient called
  var requestUrl = 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=' + searchTerm;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      // data.drinks comes in as an array if it is found, so only create the table if it is an array
      if(Array.isArray(data.drinks)){

          var tableRow = document.createElement('tr');

          // displays however many drinks is meant to be displayed
          for (var i = 0; i<data.drinks.length; i ++){

            // create variable for pushing in a table row
            var tableRow = document.createElement('tr');

            // Displays drinks on the page button makes a modal
            tableRow.innerHTML = `<td> <img height="200" width="200" src="${data.drinks[i].strDrinkThumb}"</img> <br> 
            <h4> ${data.drinks[i].strDrink}</h4><br>
            <button class='detail-button btn modal-trigger' data-target="modal1" name='${data.drinks[i].idDrink}'>Instructions</button> </td> `;
            
            // write the above information into the actual page
            drinkTable.append(tableRow);
        }
      }else {
        alert('No such ingredient found.')
      }
    }
)};

// calls the function to get information from the API when the user clicks the button
$(document).on('click', '#ingredientButton', function(){
  var userInputIngredientEl = document.getElementById('userInputIngredient').value;
  $('#drinkTable').empty();
  getApi(userInputIngredientEl);
})

// when clicking a button with class detail-button, call the getDrinkDetailApi function
$(document).on('click', '.detail-button', getDrinkDetailApi);

// this function takes the drink selection from a button, and gathers that drink's details from the API
function getDrinkDetailApi(e){
  modalText.innerHTML="";
  var requestUrl = 'https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=' + e.target.name;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // the api has the data as "strIngredient1" etc so
      // we make placeholder text here and add the number
      // of the current ingredient/measurement
      const ingredient_string = 'strIngredient';
      const measure_string = 'strMeasure'
      let drinkIngredients = [];
      let drinkMeasurements = [];

      // for loop that cycles through the data and returns
      // every ingredient/measurement
      for(var i=1; i<= 15; i++){
        var ingredientTemp = ingredient_string;
        var measurementTemp= measure_string;

        // makes the string "strIngredent" then whatever number you are on
        ingredientTemp+=i;
        measurementTemp+=i;

        // if there is no ingredient/measurement then dont read in the data
        if(data.drinks[0][ingredientTemp] !== null){
          drinkIngredients.push(data.drinks[0][ingredientTemp]);
        }
        if(data.drinks[0][measurementTemp] !== null){
          drinkMeasurements.push(data.drinks[0][measurementTemp]);
        }
      }

      // for loop to append ingredients and measurements to the modal
      for(var i=0; i < drinkIngredients.length; i++){
        let modalIngredientEl = document.createElement('p');
        modalIngredientEl.innerHTML = (`${drinkMeasurements[i]} ${drinkIngredients[i]}`)
        modalText.append(modalIngredientEl);
      }
      
      // appends the instructions for the drink to the modal
      modalText.append('Instructions: ' + data.drinks[0].strInstructions);
    })
}
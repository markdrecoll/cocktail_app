
//Here to line 12 triggers the modal with javascript
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});

// Or with jQuery

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
      //Using console.log to examine the data
      console.log(data);
    var tableRow = document.createElement('tr');

    // displays however many drinks is meant to be displayed
      for (var i = 0; i<data.drinks.length; i ++){

        // create variable for pushing in a table row
        var tableRow = document.createElement('tr');

        // inside that table row, create an <td> and fill it with the data from the API
        tableRow.innerHTML = `<td> ${data.drinks[i].strDrink} </td> 
        <td> <img height="200" width="200" src="${data.drinks[i].strDrinkThumb}"</img></td>
        <td><button class='detail-button btn modal-trigger' data-target="modal1" name='${data.drinks[i].idDrink}'>Instructions</button></td>`;
        
        // write the above information into the actual page
        drinkTable.append(tableRow);
      }
    }
)};

// calls the function to get information from the API when the user clicks the button
$(document).on('click', '#ingredientButton', function(){
  var userInputIngredientEl = document.getElementById('userInputIngredient').value;
  getApi(userInputIngredientEl);
})

// when clicking a button with class detail-button, call the getDrinkDetailApi function
$(document).on('click', '.detail-button', getDrinkDetailApi);

// this function takes the drink selection from a button, and gathers that drink's details from the API
function getDrinkDetailApi(e){
  var requestUrl = 'https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=' + e.target.name;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.drinks[0].strInstructions);
      modalText.append(data.drinks[0].strInstructions);
      
    })
}
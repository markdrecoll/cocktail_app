// get the drink table element from the html
var drinkTableEl = document.getElementById('drinkTable');


function getApi(searchTerm) {
  // fetches data from the api, concatenates the user input for the ingredient called
  var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchTerm;

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
        <td><button class='detail-button' name='${data.drinks[i].idDrink}'>Get Details</button></td>`;
        
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

// button that takes drink id and gives more details
$(document).on('click', '.detail-button' ,function() {
  console.log('Time to get details for this id', $(this).attr('name'));
  
})
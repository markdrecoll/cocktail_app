var drinkTableEl = document.getElementById('drinkTable');

function getApi() {
  var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
    var tableRow = document.createElement('tr');
      for (var i = 0; i < 5; i ++){
        // var firstCol = document.createElement('td');

        var tableRow = document.createElement('tr');
        tableRow.innerHTML = `<td> ${data.drinks[i].strDrink} </td> <td> <img height="200" width="200" src="${data.drinks[i].strDrinkThumb}"</img> </td>`;
            
       drinkTable.append(tableRow);     

      }
    }
)};

getApi();

